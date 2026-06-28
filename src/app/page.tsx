import NewsletterForm from "./components/NewsletterForm";
import ProductsSection from "./components/ProductsSection";

const products = [
  { id: 1,  name: "Crochet Hair Bow",       category: "Accessories", price: "KSh 350",   image: "/products/bow.jpg",           colors: ["Orange", "White"] },
  { id: 2,  name: "Ruffle Slippers",         category: "Footwear",    price: "KSh 950",   image: "/products/slippers.jpg",      colors: ["Grey", "Pink"] },
  { id: 3,  name: "Crochet Rose Stem",       category: "Accessories", price: "KSh 400",   image: "/products/rose-stem.jpg",     colors: ["Purple"] },
  { id: 4,  name: "Flower Brooch",           category: "Accessories", price: "KSh 300",   image: "/products/flower-brooch.jpg", colors: ["Lavender"] },
  { id: 5,  name: "Fringe Skirt Set",        category: "Sets",        price: "KSh 2,200", image: "/products/fringe-set.jpg",    colors: ["Orange", "Black"] },
  { id: 6,  name: "Mesh Halter Top",         category: "Tops",        price: "KSh 1,100", image: "/products/halter-top.jpg",    colors: ["Green"] },
  { id: 7,  name: "Bandana Top",             category: "Tops",        price: "KSh 1,800", image: "/products/bandana-set.jpg",   colors: ["Rust Brown"] },
  { id: 8,  name: "Ruffle Bralette Set",     category: "Sets",        price: "KSh 2,000", image: "/products/ruffle-set.jpg",    colors: ["Grey", "Red"] },
  { id: 9,  name: "Ruffle Scrunchie",        category: "Accessories", price: "KSh 250",   image: "/products/scrunchie.jpg",     colors: ["White"] },
  { id: 10, name: "Fuzzy Fringe Skirt",      category: "Skirts",      price: "KSh 1,500", image: "/products/fuzzy-crop.jpg",    colors: ["Green"] },
  { id: 11, name: "Mesh Shrug + Scrunchie",  category: "Sets",        price: "KSh 1,600", image: "/products/shrug-set.jpg",     colors: ["Red", "White", "Grey", "Pink", "Black"] },
  { id: 12, name: "Baby Booties",            category: "Baby",        price: "KSh 600",   image: "/products/baby-booties.png",  colors: ["Blue"] },
  { id: 13, name: "Mesh Tote Bag",           category: "Bags",        price: "KSh 1,200", image: "/products/tote-bag.png",      colors: ["Yellow"] },
];

const testimonials = [
  { name: "Amara W.", text: "Absolutely obsessed with my ruffle slippers! The quality is unrealso soft and cute. Will definitely be ordering again.", item: "Ruffle Slippers" },
  { name: "Zara M.", text: "Got the fringe skirt set and I've worn it three times already. Everyone always asks where I got it. 10/10!", item: "Fringe Skirt Set" },
  { name: "Cleo N.", text: "Ordered a custom shrug in black and it arrived so quickly and perfectly made. Natasha is so talented!", item: "Mesh Shrug" },
];

const process = [
  { step: "01", title: "You Pick", desc: "Browse the collection and choose your piece. Message us your colour preferenceanything is possible." },
  { step: "02", title: "We Craft", desc: "Every piece is handmade to order with premium yarn. No mass productionjust one maker, one piece, made for you." },
  { step: "03", title: "You Slay", desc: "Your order is delivered straight to you. Styled, unique, and one of a kind." },
];

const ticker = ["Handmade in Kenya", "Made to Order", "Custom Colours Available", "DM to Order", "Premium Yarn", "Crochet with Love"];

const whatsapp = "https://wa.me/254716515062";
const instagram = "https://www.instagram.com/natashaunfiltered2.0?igsh=cjJ2bzQ0cW8wNnR5";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] font-sans overflow-x-hidden">

      {/* Ticker */}
      <div className="bg-[#E2725B] text-white text-[11px] font-semibold py-2.5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="mx-10 tracking-[0.25em] uppercase">{t}</span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD4]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>Natasha</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#886C5F]">Crochets</span>
          </div>
          <div className="hidden sm:flex gap-8 text-sm text-[#886C5F] font-medium">
            <a href="#products" className="hover:text-[#2C1810] transition-colors">Shop</a>
            <a href="#process" className="hover:text-[#2C1810] transition-colors">How It Works</a>
            <a href="#about" className="hover:text-[#2C1810] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#2C1810] transition-colors">Contact</a>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C1810] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#E2725B] transition-colors tracking-wide uppercase"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeUp">
            <div className="inline-flex items-center gap-2 bg-[#E2725B]/10 text-[#E2725B] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
              Handcrafted in Kenya
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>
              Crochet pieces<br />
              <span className="text-[#E2725B]">made</span> with<br />
              <span className="italic font-normal">pure love.</span>
            </h1>
            <p className="text-[#886C5F] text-base leading-relaxed max-w-md mb-10">
              Every stitch is intentional. Every piece is one of a kind. From bold fashion sets to delicate accessories, handmade just for you, in any colour you love.
            </p>
            <div className="flex gap-4 flex-wrap items-center">
              <a
                href="#products"
                className="bg-[#2C1810] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#E2725B] transition-colors uppercase tracking-wide"
              >
                Shop Collection
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C1810] text-sm font-medium underline underline-offset-4 hover:text-[#E2725B] transition-colors"
              >
                See us on Instagram ↗
              </a>
            </div>
            {/* Trust signals */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-[#E8DDD4]">
              <div>
                <p className="text-2xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>13+</p>
                <p className="text-xs text-[#886C5F] uppercase tracking-wider mt-0.5">Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>100%</p>
                <p className="text-xs text-[#886C5F] uppercase tracking-wider mt-0.5">Handmade</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>Any</p>
                <p className="text-xs text-[#886C5F] uppercase tracking-wider mt-0.5">Colour Custom</p>
              </div>
            </div>
          </div>

          {/* Hero product grid */}
          <div className="grid grid-cols-2 gap-3 animate-fadeIn">
            <div className="flex flex-col gap-3">
              <div className="aspect-[3/4] bg-[#EDE5DB] rounded-3xl overflow-hidden">
                <img src={products[4].image} alt={products[4].name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-square bg-[#EDE5DB] rounded-3xl overflow-hidden">
                <img src={products[8].image} alt={products[8].name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <div className="aspect-square bg-[#EDE5DB] rounded-3xl overflow-hidden">
                <img src={products[1].image} alt={products[1].name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[3/4] bg-[#EDE5DB] rounded-3xl overflow-hidden">
                <img src={products[10].image} alt={products[10].name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />

      {/* How it works */}
      <section id="process" className="bg-[#EDE5DB] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#E2725B] text-xs tracking-[0.35em] uppercase font-semibold mb-3">The Process</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-3xl p-8 shadow-sm">
                <p className="text-5xl font-bold text-[#E2725B]/20 mb-4" style={{ fontFamily: "Georgia, serif" }}>{p.step}</p>
                <h3 className="text-xl font-bold text-[#2C1810] mb-3" style={{ fontFamily: "Georgia, serif" }}>{p.title}</h3>
                <p className="text-[#886C5F] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[#E2725B] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Happy Customers</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>What They Say</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#EDE5DB] rounded-3xl p-8">
              <div className="flex gap-0.5 mb-5">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-[#E2725B] text-lg">★</span>)}
              </div>
              <p className="text-[#2C1810] text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-sm font-bold text-[#2C1810]">{t.name}</p>
                <p className="text-xs text-[#886C5F]">Purchased: {t.item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#2C1810] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-3 gap-3">
            {[products[0], products[2], products[3], products[5], products[9], products[12]].map((p) => (
              <div key={p.id} className="aspect-square rounded-2xl overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-[#E2725B] text-xs tracking-[0.35em] uppercase font-semibold mb-4">The Maker</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Meet Natasha.<br />
              <span className="text-[#E2725B] italic font-normal">The hands behind</span><br />
              every stitch.
            </h2>
            <p className="text-white/60 leading-relaxed mb-5 text-sm">
              Hi! I&apos;m Natashaa passionate crocheter based in Kenya. I started making crochet pieces because I believed handmade fashion should be accessible, beautiful, and deeply personal.
            </p>
            <p className="text-white/60 leading-relaxed mb-10 text-sm">
              Every piece is made to orderno factories, no shortcuts. Just premium yarn, skilled hands, and a whole lot of love. If you can dream it, I can crochet it.
            </p>
            <div className="flex gap-4">
              <a href={instagram} target="_blank" rel="noopener noreferrer"
                className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:border-[#E2725B] hover:text-[#E2725B] transition-colors">
                Follow on Instagram ↗
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer"
                className="bg-[#E2725B] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#c8603a] transition-colors">
                Order Custom Piece
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[#E2725B] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>
            Let&apos;s create something<br />
            <span className="text-[#E2725B] italic font-normal">beautiful together.</span>
          </h2>
          <p className="text-[#886C5F] mt-4 max-w-md mx-auto text-sm">Place an order, request a custom piece, or just say hi. We&apos;d love to hear from you.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "💬", label: "WhatsApp", value: "+254 716 515062", href: whatsapp },
            { icon: "📸", label: "Instagram", value: "@natashaunfiltered2.0", href: instagram },
            { icon: "📞", label: "Call / SMS", value: "+254 716 515062", href: "tel:+254716515062" },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              className="group bg-[#FAF7F2] border-2 border-[#E8DDD4] rounded-3xl p-8 text-center hover:border-[#E2725B] hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-[#E2725B]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E2725B]/20 transition-colors text-2xl">
                {c.icon}
              </div>
              <p className="text-sm font-bold text-[#2C1810] mb-1">{c.label}</p>
              <p className="text-xs text-[#886C5F]">{c.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>Natasha</span>
              <span className="text-lg font-bold text-[#E2725B]"> Crochets</span>
            </div>
            <p className="text-xs text-white/30 mt-1">Handmade in Kenya Made with Love</p>
          </div>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#products" className="hover:text-white transition-colors">Shop</a>
            <a href="#process" className="hover:text-white transition-colors">How It Works</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Natasha Crochets</p>
        </div>
      </footer>
    </div>
  );
}
