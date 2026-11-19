// This file lives at /api/notify-whatsapp.js at your PROJECT ROOT (same level
// as package.json, NOT inside src/).
//
// IMPORTANT: set these two Environment Variables in your Vercel project
// settings (and in .env.local for local testing) — never hardcode them here:
//   WHATSAPP_PHONE   — the phone number that activated CallMeBot, with country
//                       code, no + or spaces (e.g. 971586924411)
//   CALLMEBOT_API_KEY — the key CallMeBot sent you after activation

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { customerName, total } = req.body;

    const phone = process.env.WHATSAPP_PHONE;
    const apiKey = process.env.CALLMEBOT_API_KEY;

    if (!phone || !apiKey) {
      return res.status(500).json({ error: 'WhatsApp notification not configured' });
    }

    const message = `New order from ${customerName || 'a customer'} — ${total || ''} د.إ. Check your Gmail for full details.`;

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(
      message
    )}&apikey=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`CallMeBot responded with ${response.status}`);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('WhatsApp notify error:', err);
    // Don't fail the whole order flow just because the WhatsApp ping failed —
    // the email notification is the reliable source of truth either way.
    res.status(200).json({ success: false, error: err.message });
  }
}