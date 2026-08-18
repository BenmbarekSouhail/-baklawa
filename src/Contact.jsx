import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Smartphone } from 'lucide-react';
import FadeInSection from './FadeInSection';
import GlowBackground from './GlowBackground';
import FloatingSparkles from './FloatingSparkles';

const EMAILJS_SERVICE_ID = 'service_j1rq289';
const EMAILJS_CONTACT_TEMPLATE_ID = 'template_2xgbd64';
const EMAILJS_PUBLIC_KEY = 'lTT8VihLefQdL2pHD';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-28">
      <section className="relative bg-[#1C1712] text-[#F6EFDF] py-20 px-6 text-center overflow-hidden">
        <GlowBackground />
        <FloatingSparkles />
        <p className="relative uppercase tracking-[0.25em] text-xs font-semibold text-[#C6952C] mb-5">
          Get in touch
        </p>
        <h1 className="relative font-serif text-5xl">We'd love to hear from you</h1>
      </section>

      {/* Company intro */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-4 text-[#1C1712]/80 leading-relaxed">
        <FadeInSection>
        <p>
          Craving Pistachio Bakery proudly operates under the brand The Baklawa Factory,
          specializing in production of premium-quality Turkish Baklawa. Our state-of-the-art
          facility, located in Dubai International City, Cluster K, spans over 2,300 sq ft and
          adheres to Dubai Municipality and HACCP guidelines to ensure the highest standards of
          quality and hygiene.
        </p>
        <p className="mt-4">
          Our retail company, Authentic Baklawa Sweets Trading LLC, also operates under the
          Baklawa Factory brand. We are committed to bringing you fresh, handcrafted, premium
          quality Baklawa through our shops. Be our guest and visit our outlets to experience the
          spectacular taste of the Middle East. Alternatively, you can order your choice of
          premium Baklawa online or through our WhatsApp line to be delivered daily to your
          doorstep across the UAE.
        </p>
        </FadeInSection>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-8 pb-20 grid lg:grid-cols-2 gap-14">
        <FadeInSection>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-[#C6952C] mt-1" />
            <div>
              <p className="font-semibold text-[#0F2A1E]">Fixed line</p>
              <p className="text-[#1C1712]/70 text-sm mt-1">+971 4 321 2656</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Smartphone className="w-5 h-5 text-[#C6952C] mt-1" />
            <div>
              <p className="font-semibold text-[#0F2A1E]">Mobile / WhatsApp</p>
              <p className="text-[#1C1712]/70 text-sm mt-1">+971 58 692 4411</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-[#C6952C] mt-1" />
            <div>
              <p className="font-semibold text-[#0F2A1E]">Email</p>
              <p className="text-[#1C1712]/70 text-sm mt-1">order@baklawa.ae</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-[#C6952C] mt-1" />
            <div>
              <p className="font-semibold text-[#0F2A1E]">Our outlets</p>
              <ul className="text-[#1C1712]/70 text-sm mt-1 space-y-1">
                <li>Nad Al Hamar Mall – Ground Floor</li>
              </ul>
            </div>
          </div>
        </div>
        </FadeInSection>

        <FadeInSection>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#0F2A1E]">Name</label>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#0F2A1E]">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]"
              placeholder="name@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#0F2A1E]">Message</label>
            <textarea
              required
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 text-sm outline-none focus:border-[#C6952C]"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[#0F2A1E] text-[#F6EFDF] py-3 rounded-full text-sm font-semibold hover:bg-[#0A1D15] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? 'Sending…' : 'Send message'}
          </button>
          {sent && (
            <p className="text-sm text-[#0F2A1E]/70 text-center">
              Thanks — your message has been sent. We'll reply within one business day.
            </p>
          )}
          {error && (
            <p className="text-sm text-[#6E1F2A] text-center">
              Something went wrong sending your message. Please try again or email us directly.
            </p>
          )}
        </form>
        </FadeInSection>
      </section>
    </div>
  );
}