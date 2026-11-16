import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from './Header';
import IntroLoader from './IntroLoader';
import ScrollProgress from './ScrollProgress';
import OurStory from './OurStory';
import Contact from './Contact';
import WhatsAppButton from './WhatsAppButton';
import Checkout from './Checkout';
import QuickView from './QuickView';
import CategorySection from './CategorySection';
import FadeInSection from './FadeInSection';
import GlowBackground from './GlowBackground';
import { CartProvider, useCart } from './CartContext';
import { products, CATEGORY_META } from './products';
import { CheckCircle2, XCircle } from 'lucide-react';
import pistachioTexture from './assets/pistachio-texture.png';
import goldTexture from './assets/gold-texture.png';
import assortmentHero from './assets/assortment-hero.png';
import mixedBoxesCard from './assets/mixed-boxes-card.png';
import cakesCard from './assets/cake-cake.png';
import specialGiftCard from './assets/special-gift.png';
import {
  Truck,
  Leaf,
  ArrowRight,
  Clock,
  Gift,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_j1rq289';
const EMAILJS_ORDER_TEMPLATE_ID = 'template_yick3rl';
const EMAILJS_CONTACT_TEMPLATE_ID = 'template_2xgbd64';
const EMAILJS_PUBLIC_KEY = 'lTT8VihLefQdL2pHD';

const byCategory = (cat) => products.filter((p) => p.category === cat);
const featured = products.filter((p) => p.featured);

// Nav targets that scroll to their own section id directly
const DIRECT_ANCHORS = ['assorted', 'mixed', 'kunafa', 'cakes', 'turkish-delight', 'tea', 'gifting', 'bestsellers'];

function HomePage({ pendingScroll, clearPendingScroll }) {
  useEffect(() => {
    if (pendingScroll) {
      const id = DIRECT_ANCHORS.includes(pendingScroll) ? pendingScroll : 'collections';
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      clearPendingScroll();
    }
  }, [pendingScroll, clearPendingScroll]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1C1712]">
        <GlowBackground />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 py-16 lg:py-24">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#C6952C] mb-5">
              Handcrafted in the UAE since 2015
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-[#F6EFDF]">
              Every layer,<br />a tradition{' '}
              <span className="italic text-[#C6952C]">worth savouring</span>
            </h1>
            <p className="mt-6 text-[#F6EFDF]/70 text-lg max-w-md leading-relaxed">
              Golden filo, roasted pistachio, and slow-poured syrup — made fresh daily by our
              master confectioners and delivered the same day across the Emirates.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#bestsellers"
                className="bg-[#C6952C] text-[#0F2A1E] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#DDB65C] transition-colors cursor-pointer"
              >
                Shop bestsellers
              </a>
              <a
                href="#gifting"
                className="border border-[#F6EFDF]/40 text-[#F6EFDF] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#F6EFDF] hover:text-[#0F2A1E] transition-colors cursor-pointer"
              >
                Build a gift box
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-[#F6EFDF]/70">
              <div className="flex items-center gap-2">
                <Truck className="text-[#C6952C] w-5 h-5" />
                <span>Same-day delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="text-[#C6952C] w-5 h-5" />
                <span>No preservatives</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0F2A1E] relative">
              <img
                src={pistachioTexture}
                alt="Assorted baklawa platter from Baklawa Factory"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#F6EFDF] rounded-2xl shadow-xl px-6 py-4 border border-black/5 hidden sm:block">
              <p className="font-serif text-3xl text-[#0F2A1E] leading-none">30+</p>
              <p className="text-xs text-[#1C1712]/60 mt-1 tracking-wide">signature recipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-[#6E1F2A] text-[#F6EFDF] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10 pr-10 text-sm font-medium tracking-wide">
              <span>Pistachio Antep Special</span><span className="text-[#C6952C]">•</span>
              <span>Walnut Wrap</span><span className="text-[#C6952C]">•</span>
              <span>Trilece Cake</span><span className="text-[#C6952C]">•</span>
              <span>Premium Mix Gift Box</span><span className="text-[#C6952C]">•</span>
              <span>Pistachio Sobiyet</span><span className="text-[#C6952C]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by collection */}
      <section id="collections" className="relative overflow-hidden bg-[#1C1712] scroll-mt-28">
        <GlowBackground />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
        <FadeInSection>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#C6952C] mb-3">
              Explore
            </p>
            <h2 className="font-serif text-4xl text-[#F6EFDF]">Shop by collection</h2>
          </div>
          <a
            href="#bestsellers"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#F6EFDF] hover:text-[#C6952C] transition-colors cursor-pointer"
          >
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { target: 'assorted', title: 'Assorted Baklawa', img: pistachioTexture },
            { target: 'mixed', title: 'Mixed Boxes', img: mixedBoxesCard },
            { target: 'cakes', title: 'Cakes & Ice Cream', img: cakesCard },
          ].map((cat) => (
            <a
              key={cat.title}
              href={`#${cat.target}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0F2A1E] cursor-pointer"
            >
              <img
                src={cat.img}
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                alt={cat.title}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-serif text-2xl text-[#F6EFDF]">{cat.title}</p>
              </div>
            </a>
          ))}
          <a
            href="#gifting"
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#6E1F2A] cursor-pointer"
          >
            <img
              src={specialGiftCard}
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
              alt="Special Gifting"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="font-serif text-2xl text-[#F6EFDF]">Special Gifting</p>
            </div>
          </a>
        </div>
        </FadeInSection>
        </div>
      </section>

      {/* Bestsellers */}
      <CategorySection
        id="bestsellers"
        eyebrow="Most loved"
        title="This week's bestsellers"
        products={featured}
        tint
      />

      {/* Assorted Baklawa */}
      <CategorySection
        id="assorted"
        eyebrow={CATEGORY_META.assorted.subtitle}
        title={CATEGORY_META.assorted.title}
        groups={[
          { key: 'pistachio', label: 'Pistachio', products: byCategory('assorted').filter((p) => p.subcategory === 'pistachio') },
          { key: 'walnut', label: 'Walnut', products: byCategory('assorted').filter((p) => p.subcategory === 'walnut') },
          { key: 'hazelnut', label: 'Hazelnut', products: byCategory('assorted').filter((p) => p.subcategory === 'hazelnut') },
        ]}
      />

      {/* Mixed Baklawa */}
      <CategorySection
        id="mixed"
        eyebrow={CATEGORY_META.mixed.subtitle}
        title={CATEGORY_META.mixed.title}
        products={byCategory('mixed')}
        tint
      />

      {/* Kunafa */}
      <CategorySection
        id="kunafa"
        eyebrow={CATEGORY_META.kunafa.subtitle}
        title={CATEGORY_META.kunafa.title}
        products={byCategory('kunafa')}
        cardType="assorted"
      />

      {/* Delights, Cake & Ice Cream */}
      <CategorySection
        id="cakes"
        eyebrow={CATEGORY_META.cakes.subtitle}
        title={CATEGORY_META.cakes.title}
        products={byCategory('cakes')}
        cardType="assorted"
        tint
      />

      {/* Turkish Delight */}
      <CategorySection
        id="turkish-delight"
        eyebrow={CATEGORY_META['turkish-delight'].subtitle}
        title={CATEGORY_META['turkish-delight'].title}
        products={byCategory('turkish-delight')}
      />

      {/* Tea & Coffee */}
      <CategorySection
        id="tea"
        eyebrow={CATEGORY_META.tea.subtitle}
        title={CATEGORY_META.tea.title}
        products={byCategory('tea')}
        tint
      />

      {/* Gifting */}
      <CategorySection
        id="gifting"
        eyebrow={CATEGORY_META.gifting.subtitle}
        title={CATEGORY_META.gifting.title}
        products={byCategory('gifting')}
      />

      {/* Craft & trust */}
      <section className="relative bg-[#0F2A1E] text-[#F6EFDF] py-20 text-center px-6 overflow-hidden">
        <img
          src={goldTexture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A1E]/40 via-transparent to-[#0F2A1E] pointer-events-none" />
        <FadeInSection className="relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#C6952C]">
            Our craft
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Three decades of hand-folded filo, roasted pistachio, and syrup poured at exactly the
            right moment.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto mt-16 grid sm:grid-cols-3 gap-8 text-center pt-12 border-t border-[#F6EFDF]/10">
          <div>
            <Clock className="mx-auto text-[#C6952C] w-7 h-7 mb-3" />
            <p className="font-serif text-xl text-[#F6EFDF]">Baked fresh daily</p>
            <p className="text-sm text-[#F6EFDF]/60 mt-1">Never frozen, never held over</p>
          </div>
          <div>
            <Truck className="mx-auto text-[#C6952C] w-7 h-7 mb-3" />
            <p className="font-serif text-xl text-[#F6EFDF]">Same-day delivery</p>
            <p className="text-sm text-[#F6EFDF]/60 mt-1">Across Dubai and Sharjah</p>
          </div>
          <div>
            <Gift className="mx-auto text-[#C6952C] w-7 h-7 mb-3" />
            <p className="font-serif text-xl text-[#F6EFDF]">Custom gift boxes</p>
            <p className="text-sm text-[#F6EFDF]/60 mt-1">Corporate orders welcome</p>
          </div>
        </div>
        </FadeInSection>
      </section>
    </>
  );
}

function AppShell() {
  const [page, setPage] = useState('home');
  const [pendingScroll, setPendingScroll] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [paymentBanner, setPaymentBanner] = useState(null); // 'success' | 'cancelled' | null
  const { clearCart } = useCart();

  // Handle the customer coming back from Stripe's hosted checkout page.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get('payment');
    if (!paymentStatus) return;

    if (paymentStatus === 'success') {
      const pending = sessionStorage.getItem('pendingOrder');
      if (pending) {
        const { customer, items, total } = JSON.parse(pending);
        const orderItems = items
          .map((i) => `${i.title} × ${i.qty} — ${(i.unitPrice * i.qty).toFixed(2)} د.إ`)
          .join('\n');
        emailjs
          .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_ORDER_TEMPLATE_ID,
            {
              customer_name: customer.name,
              phone: customer.phone,
              email: customer.email,
              address: customer.address,
              order_notes: customer.notes,
              order_items: orderItems,
              total: `${total.toFixed(2)} د.إ`,
              payment_method: 'Card — paid via Stripe',
            },
            { publicKey: EMAILJS_PUBLIC_KEY }
          )
          .catch((err) => console.error('EmailJS error:', err));
        sessionStorage.removeItem('pendingOrder');
      }
      clearCart();
      setPaymentBanner('success');
    } else if (paymentStatus === 'cancelled') {
      setPaymentBanner('cancelled');
    }

    // Clean the URL so refreshing doesn't re-trigger this.
    window.history.replaceState({}, '', window.location.pathname);
  }, [clearCart]);

  // Auto-dismiss the popup after a few seconds.
  useEffect(() => {
    if (!paymentBanner) return;
    const timer = setTimeout(() => setPaymentBanner(null), 6000);
    return () => clearTimeout(timer);
  }, [paymentBanner]);

  const [newsletterSending, setNewsletterSending] = useState(false);
  const [newsletterError, setNewsletterError] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterSending(true);
    setNewsletterError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: 'Newsletter signup',
          from_email: newsletterEmail,
          message: 'A visitor subscribed for seasonal drop alerts (Eid, Ramadan, holiday gifting).',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setNewsletterSent(true);
      setNewsletterEmail('');
    } catch (err) {
      console.error('EmailJS error:', err);
      setNewsletterError(true);
    } finally {
      setNewsletterSending(false);
    }
  };

  const handleNavigate = (target) => {
    if (target === 'home') {
      setPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (target === 'story' || target === 'contact') {
      setPage(target);
      window.scrollTo({ top: 0 });
      return;
    }
    // Category and gifting anchors live on the homepage
    setPage('home');
    setPendingScroll(target);
  };

  const [siteRevealed, setSiteRevealed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setSiteRevealed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <IntroLoader />
      <ScrollProgress />
      <div
        className={`bg-[#F6EFDF] text-[#1C1712] font-sans antialiased selection:bg-[#C6952C] selection:text-[#0F2A1E] transition-all duration-[1400ms] ease-out ${
          siteRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <Header currentPage={page} onNavigate={handleNavigate} />

        <main key={page} className="animate-fadein">
        {page === 'home' && (
          <HomePage
            pendingScroll={pendingScroll}
            clearPendingScroll={() => setPendingScroll(null)}
          />
        )}
        {page === 'story' && <OurStory />}
        {page === 'contact' && <Contact />}
      </main>

      {/* Newsletter */}
      <section className="relative bg-[#1C1712] text-[#F6EFDF] py-16 overflow-hidden">
        <GlowBackground />
        <div className="relative max-w-2xl mx-auto text-center px-6">
          <h2 className="font-serif text-3xl mb-3">Get first access to seasonal boxes</h2>
          <p className="text-[#F6EFDF]/70 text-sm mb-7">
            Eid, Ramadan, and holiday gifting drops before they sell out.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 justify-center"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="name@email.com"
              className="flex-1 max-w-xs px-5 py-3 rounded-full text-[#1C1712] text-sm focus:outline-none focus:ring-2 focus:ring-[#C6952C]"
            />
            <button
              disabled={newsletterSending}
              className="bg-[#C6952C] text-[#0F2A1E] font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#DDB65C] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {newsletterSending ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
          {newsletterSent && (
            <p className="text-sm text-[#F6EFDF]/80 mt-4">
              You're on the list — we'll email you before the next drop.
            </p>
          )}
          {newsletterError && (
            <p className="text-sm text-[#C6952C] mt-4">
              Something went wrong — please try again in a moment.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1712] text-[#F6EFDF]/70 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-serif text-2xl text-[#F6EFDF] mb-3">
              Baklawa Factory<span className="text-[#C6952C]">.</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Fine Middle Eastern sweets, hand-crafted daily in Dubai since 2015.
            </p>
          </div>
          <div>
            <p className="text-[#F6EFDF] text-sm font-semibold mb-4">Shop</p>
            <ul className="space-y-2 text-sm">
              {['assorted', 'mixed', 'kunafa', 'cakes', 'tea'].map((target, i) => (
                <li key={target}>
                  <button
                    onClick={() => handleNavigate(target)}
                    className="hover:text-[#C6952C] transition-colors cursor-pointer"
                  >
                    {['Assorted Baklawa', 'Mixed Boxes', 'Kunafa', 'Cakes & Ice Cream', 'Tea & Coffee'][i]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#F6EFDF] text-sm font-semibold mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate('story')} className="hover:text-[#C6952C] transition-colors cursor-pointer">
                  About us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="hover:text-[#C6952C] transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('gifting')} className="hover:text-[#C6952C] transition-colors cursor-pointer">
                  Corporate gifting
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[#F6EFDF] text-sm font-semibold mb-4">Get in touch</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6952C]" /> +971 58 692 4411
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C6952C]" /> order@baklawa.ae
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C6952C]" /> Nad Al Hamar Mall, Dubai
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-[#F6EFDF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Baklawa Factory — All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 border border-[#F6EFDF]/20 rounded">Visa</span>
            <span className="px-3 py-1 border border-[#F6EFDF]/20 rounded">Apple Pay</span>
            <span className="px-3 py-1 border border-[#F6EFDF]/20 rounded">Cash on delivery</span>
          </div>
        </div>
      </footer>
      </div>

      {paymentBanner === 'success' && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[80] w-[92%] max-w-md animate-fadein">
          <div className="bg-[#6E1F2A] text-[#F6EFDF] rounded-2xl shadow-2xl px-5 py-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#F6EFDF] shrink-0 mt-0.5" />
            <p className="text-sm flex-1">
              Payment successful — your order has been placed. We'll confirm by phone shortly.
            </p>
            <button
              onClick={() => setPaymentBanner(null)}
              aria-label="Dismiss"
              className="cursor-pointer shrink-0"
            >
              <XCircle className="w-4 h-4 opacity-70 hover:opacity-100" />
            </button>
          </div>
        </div>
      )}
      {paymentBanner === 'cancelled' && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[80] w-[92%] max-w-md animate-fadein">
          <div className="bg-[#6E1F2A] text-[#F6EFDF] rounded-2xl shadow-2xl px-5 py-4 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-[#F6EFDF] shrink-0 mt-0.5" />
            <p className="text-sm flex-1">
              Payment was cancelled — your cart is still saved if you'd like to try again.
            </p>
            <button
              onClick={() => setPaymentBanner(null)}
              aria-label="Dismiss"
              className="cursor-pointer shrink-0"
            >
              <XCircle className="w-4 h-4 opacity-70 hover:opacity-100" />
            </button>
          </div>
        </div>
      )}

      <WhatsAppButton />
      <Checkout />
      <QuickView />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  );
}