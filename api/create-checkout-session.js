// This file lives at /api/create-checkout-session.js at your PROJECT ROOT
// (same level as package.json, NOT inside src/). Vercel automatically turns
// any file in /api into a serverless backend endpoint — no server setup needed.
//
// IMPORTANT: set STRIPE_SECRET_KEY as an Environment Variable in your Vercel
// project settings (Settings → Environment Variables). Never put the secret
// key directly in this file or commit it to git.

import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default async function handler(req, res) {
  // Temporary diagnostic — remove once this is confirmed working.
  console.log('STRIPE_SECRET_KEY present:', !!process.env.STRIPE_SECRET_KEY);
  console.log('STRIPE_SECRET_KEY starts with:', process.env.STRIPE_SECRET_KEY?.slice(0, 12));

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items, customer } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const line_items = items.map((item) => ({
      price_data: {
        currency: 'aed',
        product_data: { name: item.title },
        unit_amount: Math.round(item.unitPrice * 100), // Stripe uses fils, smallest unit
      },
      quantity: item.qty,
    }));

    const origin = req.headers.origin || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      customer_email: customer.email,
      success_url: `${origin}/?payment=success`,
      cancel_url: `${origin}/?payment=cancelled`,
      metadata: {
        customer_name: customer.name,
        phone: customer.phone,
        address: customer.address,
      },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
}