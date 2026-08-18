import React, { useState, useMemo } from 'react';
import { Search, Heart, ShoppingBag, X, Menu, Plus } from 'lucide-react';
import { useCart } from './CartContext';
import { products } from './products';
import logo from './assets/baklawa.png';

const NAV_LINKS = [
  { label: 'Assorted', target: 'assorted' },
  { label: 'Mixed Boxes', target: 'mixed' },
  { label: 'Cakes & Ice Cream', target: 'cakes' },
  { label: 'Turkish Delight', target: 'turkish-delight' },
  { label: 'Tea & Coffee', target: 'tea' },
  { label: 'Gifting', target: 'gifting' },
  { label: 'Our Story', target: 'story' },
  { label: 'Contact', target: 'contact' },
];

export default function Header({ currentPage, onNavigate }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    items,
    removeItem,
    addItem,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    wishlist,
    toggleWishlist,
    setQuickViewProduct,
  } = useCart();

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const wishlistedProducts = useMemo(
    () => products.filter((p) => wishlist.includes(p.id)),
    [wishlist]
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return products.filter((p) => p.title.toLowerCase().includes(q));
  }, [query]);

  const goToProduct = (product) => {
    onNavigate(product.category);
    setSearchOpen(false);
    setQuery('');
  };

  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#1C1712] text-[#F6EFDF] text-xs tracking-widest uppercase text-center py-2 px-4">
        Free delivery across Dubai on orders over 250 د.إ
      </div>

      <header className="sticky top-0 z-50 bg-[#0F2A1E] text-[#F6EFDF]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-left cursor-pointer shrink-0"
          >
            <img src={logo} alt="Baklawa Factory logo" className="h-10 w-10 object-contain shrink-0" />
            <span>
              <span className="font-serif text-xl tracking-wide block leading-none">
                Baklawa Factory<span className="text-[#C6952C]">.</span>
              </span>
              <span className="hidden md:block text-[9px] uppercase tracking-[0.25em] text-[#C6952C] mt-0.5">
                Fresh &middot; Authentic &middot; Natural
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-4 text-xs font-medium whitespace-nowrap">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => onNavigate(link.target)}
                className={`transition-colors cursor-pointer ${
                  currentPage === link.target
                    ? 'text-[#C6952C]'
                    : 'hover:text-[#C6952C]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <button
                aria-label="Search"
                onClick={() => setSearchOpen((v) => !v)}
                className="hover:text-[#C6952C] transition-colors cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-9 bg-white rounded-xl shadow-xl p-3 w-80 text-[#1C1712]">
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search sweets..."
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none border border-black/10 focus:border-[#C6952C]"
                  />
                  {query.trim() && (
                    <div className="mt-2 max-h-72 overflow-y-auto divide-y divide-black/5">
                      {results.length === 0 ? (
                        <p className="text-sm text-[#1C1712]/50 py-4 text-center">
                          No products match "{query}"
                        </p>
                      ) : (
                        results.map((p) => (
                          <div key={p.id} className="flex items-center gap-3 py-2">
                            <button
                              onClick={() => goToProduct(p)}
                              className="flex items-center gap-3 flex-1 text-left cursor-pointer"
                            >
                              <img
                                src={p.image}
                                alt={p.title}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                              <div>
                                <p className="text-sm font-medium">{p.title}</p>
                                <p className="text-xs text-[#1C1712]/60">{p.price}</p>
                              </div>
                            </button>
                            <button
                              onClick={() => addItem(p)}
                              aria-label={`Add ${p.title} to cart`}
                              className="w-7 h-7 rounded-full border border-[#0F2A1E] flex items-center justify-center hover:bg-[#0F2A1E] hover:text-white transition-colors cursor-pointer shrink-0"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <div className="relative hidden sm:block">
              <button
                aria-label="Wishlist"
                onClick={() => setIsWishlistOpen((v) => !v)}
                className="relative hover:text-[#C6952C] transition-colors cursor-pointer"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C6952C] text-[#0F2A1E] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {isWishlistOpen && (
                <div className="absolute right-0 top-9 bg-white text-[#1C1712] rounded-2xl shadow-xl w-80 p-4 z-50">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-sm">Your wishlist</p>
                    <button onClick={() => setIsWishlistOpen(false)} className="cursor-pointer">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  {wishlistedProducts.length === 0 ? (
                    <p className="text-sm text-[#1C1712]/60 py-6 text-center">
                      Nothing saved yet. Tap the heart on any product to save it here.
                    </p>
                  ) : (
                    <div className="space-y-3 max-h-72 overflow-y-auto">
                      {wishlistedProducts.map((p) => (
                        <div key={p.id} className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              setQuickViewProduct(p);
                              setIsWishlistOpen(false);
                            }}
                            className="flex items-center gap-3 flex-1 text-left cursor-pointer"
                          >
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-11 h-11 rounded-lg object-cover shrink-0"
                            />
                            <div>
                              <p className="text-sm font-medium">{p.title}</p>
                              <p className="text-xs text-[#1C1712]/60">{p.price}</p>
                            </div>
                          </button>
                          <button
                            onClick={() => addItem(p)}
                            aria-label={`Add ${p.title} to cart`}
                            className="w-7 h-7 rounded-full border border-[#0F2A1E] flex items-center justify-center hover:bg-[#0F2A1E] hover:text-white transition-colors cursor-pointer shrink-0"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => toggleWishlist(p.id)}
                            aria-label={`Remove ${p.title} from wishlist`}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[#6E1F2A] hover:bg-[#F6EFDF] transition-colors cursor-pointer shrink-0"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen((v) => !v)}
                className="flex items-center gap-2 border border-[#C6952C] text-[#C6952C] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C6952C] hover:text-[#0F2A1E] transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartTotal.toFixed(2)} د.إ
                {cartCount > 0 && (
                  <span className="bg-[#0F2A1E] text-[#F6EFDF] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {isCartOpen && (
                <div className="absolute right-0 top-12 bg-white text-[#1C1712] rounded-2xl shadow-xl w-80 p-4 z-50">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-sm">Your bag</p>
                    <button onClick={() => setIsCartOpen(false)} className="cursor-pointer">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  {items.length === 0 ? (
                    <p className="text-sm text-[#1C1712]/60 py-6 text-center">
                      Your bag is empty. Add something sweet.
                    </p>
                  ) : (
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-[#1C1712]/60">
                              {item.qty} × {item.unitPrice.toFixed(2)} د.إ
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.title}`}
                            className="text-xs text-[#6E1F2A] hover:underline cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="border-t border-black/10 mt-4 pt-3 flex items-center justify-between">
                    <p className="text-sm font-semibold">Total</p>
                    <p className="text-sm font-semibold">{cartTotal.toFixed(2)} د.إ</p>
                  </div>
                  <button
                    disabled={items.length === 0}
                    onClick={openCheckout}
                    className="w-full mt-4 bg-[#0F2A1E] text-[#F6EFDF] py-3 rounded-full text-sm font-semibold hover:bg-[#0A1D15] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden cursor-pointer"
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden flex flex-col gap-1 px-6 pb-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => {
                  onNavigate(link.target);
                  setMobileOpen(false);
                }}
                className={`text-left py-2 text-sm cursor-pointer ${
                  currentPage === link.target ? 'text-[#C6952C]' : 'text-[#F6EFDF]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}