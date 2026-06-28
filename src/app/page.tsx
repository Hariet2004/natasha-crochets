const products = [
  { id: 1, name: "Crochet Hair Bow", category: "Accessories", price: "KSh 350", image: "/products/bow.jpg", colors: ["Orange", "White"] },
  { id: 2, name: "Ruffle Slippers", category: "Footwear", price: "KSh 950", image: "/products/slippers.jpg", colors: ["Grey", "Pink"] },
  { id: 3, name: "Crochet Rose Stem", category: "Accessories", price: "KSh 400", image: "/products/rose-stem.jpg", colors: ["Purple"] },
  { id: 4, name: "Flower Brooch", category: "Accessories", price: "KSh 300", image: "/products/flower-brooch.jpg", colors: ["Lavender"] },
  { id: 5, name: "Fringe Skirt Set", category: "Sets", price: "KSh 2,200", image: "/products/fringe-set.jpg", colors: ["Orange", "Black"] },
  { id: 6, name: "Mesh Halter Top", category: "Tops", price: "KSh 1,100", image: "/products/halter-top.jpg", colors: ["Green"] },
  { id: 7, name: "Bandana Bikini Set", category: "Sets", price: "KSh 1,800", image: "/products/bandana-set.jpg", colors: ["Rust Brown"] },
  { id: 8, name: "Ruffle Bralette Set", category: "Sets", price: "KSh 2,000", image: "/products/ruffle-set.jpg", colors: ["Grey", "Red"] },
  { id: 9, name: "Ruffle Scrunchie", category: "Accessories", price: "KSh 250", image: "/products/scrunchie.jpg", colors: ["White"] },
  { id: 10, name: "Fuzzy Crop Top", category: "Tops", price: "KSh 1,500", image: "/products/fuzzy-crop.jpg", colors: ["Green"] },
  { id: 11, name: "Mesh Shrug + Scrunchie", category: "Sets", price: "KSh 1,600", image: "/products/shrug-set.jpg", colors: ["Red", "White", "Grey", "Pink", "Black"] },
  { id: 12, name: "Baby Booties", category: "Baby", price: "KSh 600", image: "/products/baby-booties.jpg", colors: ["Blue"] },
  { id: 13, name: "Mesh Tote Bag", category: "Bags", price: "KSh 1,200", image: "/products/tote-bag.jpg", colors: ["Yellow"] },
];

const ticker = ["Handmade in Kenya ✦", "Made to Order ✦", "Custom Colours Available ✦", "DM to Order ✦", "Crochet with Love ✦"];

const whatsapp = "https://wa.me/254716515062";
const instagram = "https://www.instagram.com/natashaunfiltered2.0?igsh=cjJ2bzQ0cW8wNnR5";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0a06] text-white font-sans overflow-x-hidden">

      {/* Ticker */}
      <div className="bg-[#c8873a] text-[#0e0a06] text-xs font-semibold py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-0">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="mx-8 tracking-widest uppercase">{t}</span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0e0a06]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold tracking-tight text-white">Natasha</span>
            <span className="text-lg font-bold tracking-tight text-[#c8873a]"> Crochets</span>
          </div>
          <div className="hidden sm:flex gap-8 text-sm text-white/60">
            <a href="#products" className="hover:text-white transition-colors">Shop</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c8873a] text-[#0e0a06] text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#e09a45] transition-colors tracking-wide uppercase"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeUp">
            <p className="text-[#c8873a] text-xs tracking-[0.4em] uppercase mb-6 font-medium">✦ Handcrafted in Kenya</p>
            <h1 className="text-6xl sm:text-7xl font-bold leading-none tracking-tight mb-6">
              Crochet<br />
              <span className="text-[#c8873a]">pieces</span><br />
              made for<br />
              <span className="italic font-light">you.</span>
            </h1>
            <p className="text-white/50 text-base leading-relaxed max-w-sm mb-10">
              From cozy slippers to stunning sets — every piece is handmade with care. Custom colours always available.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#products"
                className="bg-white text-[#0e0a06] px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#c8873a] transition-colors uppercase tracking-wide"
              >
                Shop Collection
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:border-[#c8873a] hover:text-[#c8873a] transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[products[4], products[6], products[10], products[12]].map((p) => (
              <div key={p.id} className="aspect-[3/4] bg-[#1a1108] rounded-2xl overflow-hidden relative group">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-xs font-semibold text-white truncate">{p.name}</p>
                  <p className="text-[10px] text-[#c8873a]">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-white/10 py-8 my-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-[#c8873a]">13+</p>
            <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Products</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#c8873a]">100%</p>
            <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Handmade</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#c8873a]">∞</p>
            <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Custom Options</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#c8873a] text-xs tracking-[0.3em] uppercase mb-2">✦ The Collection</p>
            <h2 className="text-4xl font-bold">All Products</h2>
          </div>
          <p className="text-white/40 text-sm hidden sm:block">Made to order · Custom colours available</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <a
              key={product.id}
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-[3/4] bg-[#1a1108] rounded-2xl overflow-hidden relative mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] bg-[#c8873a] text-[#0e0a06] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-white font-bold text-center uppercase tracking-wide">Order via WhatsApp ↗</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white truncate">{product.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[#c8873a] text-sm font-bold">{product.price}</span>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((c) => (
                      <span key={c} className="text-[10px] text-white/40">{c}</span>
                    ))}
                    {product.colors.length > 3 && <span className="text-[10px] text-white/40">+{product.colors.length - 3}</span>}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#1a1108] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c8873a] text-xs tracking-[0.3em] uppercase mb-4">✦ About Natasha</p>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Every stitch tells<br />
              <span className="text-[#c8873a] italic font-light">a story.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Hi! I&apos;m Natasha — a passionate crocheter based in Kenya. Every piece I make is crafted by hand, with love and attention to detail. Whether it&apos;s a bold fashion set or a delicate accessory, I pour creativity into everything I make.
            </p>
            <p className="text-white/50 leading-relaxed mb-10">
              All pieces are made to order, so you can always request your favourite colours or a custom design. Reach out on WhatsApp or Instagram and let&apos;s create something special together.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c8873a] text-[#0e0a06] px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#e09a45] transition-colors uppercase tracking-wide"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[products[0], products[1], products[2], products[3], products[8], products[11]].map((p) => (
              <div key={p.id} className="aspect-square bg-[#0e0a06] rounded-xl overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[#c8873a] text-xs tracking-[0.3em] uppercase mb-4">✦ Get in Touch</p>
          <h2 className="text-5xl font-bold mb-4">Let&apos;s create<br /><span className="text-[#c8873a] italic font-light">something beautiful.</span></h2>
          <p className="text-white/40 max-w-md mx-auto">Place an order, request a custom piece, or just say hi. We&apos;d love to hear from you.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#1a1108] border border-white/10 rounded-2xl p-6 text-center hover:border-[#c8873a] transition-colors"
          >
            <div className="w-12 h-12 bg-[#c8873a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c8873a]/20 transition-colors">
              <span className="text-2xl">💬</span>
            </div>
            <p className="text-sm font-bold text-white mb-1">WhatsApp</p>
            <p className="text-xs text-white/40">+254 716 515062</p>
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#1a1108] border border-white/10 rounded-2xl p-6 text-center hover:border-[#c8873a] transition-colors"
          >
            <div className="w-12 h-12 bg-[#c8873a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c8873a]/20 transition-colors">
              <span className="text-2xl">📸</span>
            </div>
            <p className="text-sm font-bold text-white mb-1">Instagram</p>
            <p className="text-xs text-white/40">@natashaunfiltered2.0</p>
          </a>
          <a
            href="tel:+254716515062"
            className="group bg-[#1a1108] border border-white/10 rounded-2xl p-6 text-center hover:border-[#c8873a] transition-colors"
          >
            <div className="w-12 h-12 bg-[#c8873a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c8873a]/20 transition-colors">
              <span className="text-2xl">📞</span>
            </div>
            <p className="text-sm font-bold text-white mb-1">Call / SMS</p>
            <p className="text-xs text-white/40">+254 716 515062</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-white">Natasha</span>
            <span className="font-bold text-[#c8873a]"> Crochets</span>
            <p className="text-xs text-white/30 mt-1">Handmade in Kenya ✦</p>
          </div>
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Natasha Crochets. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
