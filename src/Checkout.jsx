import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { X, Lock } from 'lucide-react';
import { useCart } from './CartContext';

const EMAILJS_SERVICE_ID = 'service_j1rq289';
const EMAILJS_ORDER_TEMPLATE_ID = 'template_yick3rl';
const EMAILJS_PUBLIC_KEY = 'lTT8VihLefQdL2pHD';

export default function Checkout() {
  const { items, cartTotal, isCheckoutOpen, setIsCheckoutOpen, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  if (!isCheckoutOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    const fd = new FormData(e.target);
    const customer = {
      name: `${fd.get('firstName')} ${fd.get('lastName')}`,
      phone: fd.get('phone'),
      email: fd.get('email'),
      address: `${fd.get('street')}, ${fd.get('city')}, ${fd.get('state') || ''}, ${fd.get('country')}`,
      notes: fd.get('notes') || '—',
    };

    if (paymentMethod === 'card') {
      // Save the order so we can email it to you once Stripe confirms payment
      // and the customer is redirected back to the site.
      sessionStorage.setItem(
        'pendingOrder',
        JSON.stringify({ customer, items, total: cartTotal })
      );
      try {
        const res = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items, customer }),
        });
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url; // redirect to Stripe's hosted checkout
        } else {
          throw new Error(data.error || 'Could not start payment');
        }
      } catch (err) {
        console.error('Stripe checkout error:', err);
        setError(true);
        setSending(false);
      }
      return;
    }

    // Cash on delivery — send the order notification directly via EmailJS.
    const orderItems = items
      .map((i) => `${i.title} × ${i.qty} — ${(i.unitPrice * i.qty).toFixed(2)} د.إ`)
      .join('\n');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ORDER_TEMPLATE_ID,
        {
          customer_name: customer.name,
          phone: customer.phone,
          email: customer.email,
          address: customer.address,
          order_notes: customer.notes,
          order_items: orderItems,
          total: `${cartTotal.toFixed(2)} د.إ`,
          payment_method: 'Cash on delivery',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // WhatsApp ping to the owner. Fire-and-forget: if it fails, the order
      // still goes through (the email above is the main notification).
      fetch('/api/notify-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerName: customer.name, total: cartTotal.toFixed(2) }),
      }).catch((err) => console.error('WhatsApp notify failed:', err));

      setPlaced(true);
      clearCart();
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const close = () => {
    setIsCheckoutOpen(false);
    setPlaced(false);
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-[#1C1712]/60 flex items-start sm:items-center justify-center px-4 py-6 overflow-y-auto"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-4xl p-6 sm:p-8 relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close checkout"
          className="absolute top-5 right-5 text-[#1C1712]/50 hover:text-[#1C1712] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!placed ? (
          <>
            <h2 className="font-serif text-3xl text-[#0F2A1E] mb-6">Checkout</h2>

            <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-10">
              {/* Billing & shipping */}
              <div className="lg:col-span-3 space-y-5">
                <h3 className="font-serif text-xl text-[#0F2A1E]">Billing &amp; Shipping</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#0F2A1E]">First name *</label>
                    <input required name="firstName" type="text" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#0F2A1E]">Last name *</label>
                    <input required name="lastName" type="text" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#0F2A1E]">Company name (optional)</label>
                  <input name="company" type="text" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#0F2A1E]">Country / Region *</label>
                  <select required name="country" defaultValue="United Arab Emirates" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C] bg-white">
                    <option>United Arab Emirates</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#0F2A1E]">Street address *</label>
                  <input required name="street" type="text" placeholder="House number and street name" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                  <input name="street2" type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full mt-2 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#0F2A1E]">Town / City *</label>
                    <input required name="city" type="text" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#0F2A1E]">State / County</label>
                    <input name="state" type="text" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#0F2A1E]">Phone *</label>
                    <input required name="phone" type="tel" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#0F2A1E]">Email address *</label>
                    <input required name="email" type="email" className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]" />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={createAccount}
                    onChange={() => setCreateAccount((v) => !v)}
                  />
                  Create an account?
                </label>

                <div>
                  <h3 className="font-serif text-xl text-[#0F2A1E] mb-2">Additional information</h3>
                  <label className="text-sm font-medium text-[#0F2A1E]">Order notes (optional)</label>
                  <textarea
                    rows={3}
                    name="notes"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]"
                  />
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-2">
                <div className="bg-[#F6EFDF] rounded-2xl p-6 lg:sticky lg:top-4">
                  <h3 className="font-serif text-xl text-[#0F2A1E] mb-4">Your order</h3>
                  <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                    {items.length === 0 ? (
                      <p className="text-sm text-[#1C1712]/60">Your cart is empty.</p>
                    ) : (
                      items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between text-sm">
                          <span>
                            {item.title} <span className="text-[#1C1712]/50">× {item.qty}</span>
                          </span>
                          <span className="font-medium">
                            {(item.unitPrice * item.qty).toFixed(2)} د.إ
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="border-t border-[#1C1712]/10 mt-4 pt-4 flex items-center justify-between">
                    <span className="font-semibold text-[#0F2A1E]">Total</span>
                    <span className="font-semibold text-[#0F2A1E]">{cartTotal.toFixed(2)} د.إ</span>
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                      />
                      Cash on delivery
                    </label>
                    {/* Card payment is locked for now — "Coming soon" */}
                    <div className="flex items-center gap-2 cursor-not-allowed" aria-disabled="true">
                      <input type="radio" name="payment" disabled checked={false} readOnly />
                      <Lock className="w-3.5 h-3.5 text-[#1C1712]/40" />
                      <span className="text-[#1C1712]/40">Visa / Apple Pay</span>
                      <span className="text-xs font-semibold text-red-600">Coming soon</span>
                    </div>

                    {paymentMethod === 'cod' && (
                      <div className="pt-2 space-y-3">
                        <div>
                          <label className="text-sm font-medium text-[#0F2A1E]">
                            Preferred delivery time
                          </label>
                          <select
                            defaultValue="Anytime"
                            className="w-full mt-1 px-3 py-2.5 rounded-lg border border-black/10 text-sm outline-none focus:border-[#C6952C] bg-white"
                          >
                            <option>Anytime</option>
                            <option>Morning (9am – 12pm)</option>
                            <option>Afternoon (12pm – 5pm)</option>
                            <option>Evening (5pm – 9pm)</option>
                          </select>
                        </div>
                        <p className="text-xs text-[#1C1712]/60">
                          Please have the exact amount ready for our driver — {cartTotal.toFixed(2)} د.إ.
                        </p>
                      </div>
                    )}

                    {paymentMethod === 'card' && (
                      <p className="text-xs text-[#1C1712]/60 pt-2">
                        You'll be securely redirected to Stripe to enter your card details.
                        We never see or store your card information.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={items.length === 0 || sending}
                    className="w-full mt-6 bg-[#0F2A1E] text-[#F6EFDF] py-3 rounded-full text-sm font-semibold hover:bg-[#0A1D15] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {sending
                      ? paymentMethod === 'card'
                        ? 'Redirecting to Stripe…'
                        : 'Placing order…'
                      : paymentMethod === 'card'
                      ? 'Continue to payment'
                      : 'Place order'}
                  </button>
                  {error && (
                    <p className="text-xs text-[#6E1F2A] text-center mt-3">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <p className="font-serif text-2xl text-[#0F2A1E] mb-2">Order placed</p>
            <p className="text-sm text-[#1C1712]/70">
              We'll confirm by phone shortly. Thank you for ordering with Baklawa Factory.
            </p>
            <button
              onClick={close}
              className="mt-6 bg-[#0F2A1E] text-[#F6EFDF] px-6 py-3 rounded-full text-sm font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}