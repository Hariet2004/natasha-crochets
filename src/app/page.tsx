import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaTiktok } from "react-icons/fa";
import YarnDecor from "./components/YarnDecor";

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
  { name: "Fauna", text: "The red ruffled hat and white shrug combo is everything I didn't know I needed. So many compliments, people actually stop me on the street to ask where I got them. Natasha really understood my vision perfectly!", item: "Ruffled Hat & White Shrug" },
  { name: "Val", text: "I ordered the green fuzzy fringe skirt and a couple of tops and I genuinely haven't taken them off. The texture, the colour, the fit are all absolutely immaculate. Every piece looks even better in person than in the photos!", item: "Fuzzy Fringe Skirt & Tops" },
  { name: "Hariet", text: "My top and grey shrug arrived and I was honestly blown away by the craftsmanship. The stitching is so clean and the shrug drapes beautifully. Handmade fashion at its finest and I am already planning my next order!", item: "Top & Grey Shrug" },
];

const process = [
  { step: "01", title: "You Pick", desc: "Browse the collection and choose your piece. Message us your colour preference, anything is possible." },
  { step: "02", title: "We Craft", desc: "Every piece is handmade to order with premium yarn. No mass production, just one maker, one piece, made for you." },
  { step: "03", title: "You Slay", desc: "Your order is delivered straight to you. Styled, unique, and one of a kind." },
];

const ticker = ["Handmade in Kenya", "Made to Order", "Custom Colours Available", "DM to Order", "Premium Yarn", "Crochet with Love"];

const whatsapp = "https://wa.me/254716515062";
const instagram = "https://www.instagram.com/natashaunfiltered2.0?igsh=cjJ2bzQ0cW8wNnR5";
const tiktok = "https://www.tiktok.com/@natash_a2.0?_r=1&_t=ZS-97bWIx3lQ7L";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] font-sans overflow-x-hidden">

      {/* Ticker */}
      <div className="bg-[#E2725B] text-white text-[10px] sm:text-[11px] font-semibold py-2 sm:py-2.5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="mx-6 sm:mx-10 tracking-[0.2em] sm:tracking-[0.25em] uppercase">{t}</span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>Natasha</span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#886C5F]">Crochets</span>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm text-[#886C5F] font-medium">
            <a href="#products" className="hover:text-[#2C1810] transition-colors">Shop</a>
            <a href="#process" className="hover:text-[#2C1810] transition-colors">How It Works</a>
            <a href="#about" className="hover:text-[#2C1810] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#2C1810] transition-colors">Contact</a>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C1810] text-white text-[10px] sm:text-xs font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#E2725B] transition-colors tracking-wide uppercase"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-16 relative overflow-hidden">
        <YarnDecor className="absolute -top-10 -left-16 rotate-12 pointer-events-none hidden sm:block" size={260} color="#E2725B" opacity={0.07} />
        <YarnDecor className="absolute top-10 -right-10 -rotate-6 pointer-events-none hidden sm:block" size={200} color="#886C5F" opacity={0.06} />
        <YarnDecor className="absolute bottom-0 left-1/2 -rotate-12 pointer-events-none hidden sm:block" size={150} color="#E2725B" opacity={0.05} />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fadeUp text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E2725B]/10 text-[#E2725B] text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 tracking-widest uppercase">
              Handcrafted in Kenya
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6 text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>
              Crochet pieces<br />
              <span className="text-[#E2725B]">made</span> with<br />
              <span className="italic font-normal">pure love.</span>
            </h1>
            <p className="text-[#886C5F] text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10">
              Every stitch is intentional. Every piece is one of a kind. From bold fashion sets to delicate accessories, handmade just for you, in any colour you love.
            </p>
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center justify-center lg:justify-start">
              <a
                href="#products"
                className="bg-[#2C1810] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:bg-[#E2725B] transition-colors uppercase tracking-wide"
              >
                Shop Collection
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C1810] text-xs sm:text-sm font-medium underline underline-offset-4 hover:text-[#E2725B] transition-colors"
              >
                See us on Instagram ↗
              </a>
            </div>
            {/* Trust signals */}
            <div className="flex gap-6 sm:gap-8 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E8DDD4] justify-center lg:justify-start">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>13+</p>
                <p className="text-[10px] sm:text-xs text-[#886C5F] uppercase tracking-wider mt-0.5">Products</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>100%</p>
                <p className="text-[10px] sm:text-xs text-[#886C5F] uppercase tracking-wider mt-0.5">Handmade</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>Any</p>
                <p className="text-[10px] sm:text-xs text-[#886C5F] uppercase tracking-wider mt-0.5">Colour Custom</p>
              </div>
            </div>
          </div>

          {/* Hero image grid — hidden on mobile, visible on large screens */}
          <div className="hidden lg:grid grid-cols-2 gap-3 animate-fadeIn">
            <div className="flex flex-col gap-3">
              <div className="aspect-[3/4] bg-[#EDE5DB] rounded-3xl overflow-hidden relative">
                <Image src={products[4].image} alt={products[4].name} fill sizes="25vw" priority className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-square bg-[#EDE5DB] rounded-3xl overflow-hidden relative">
                <Image src={products[8].image} alt={products[8].name} fill sizes="25vw" priority className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <div className="aspect-square bg-[#EDE5DB] rounded-3xl overflow-hidden relative">
                <Image src={products[1].image} alt={products[1].name} fill sizes="25vw" priority className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[3/4] bg-[#EDE5DB] rounded-3xl overflow-hidden relative">
                <Image src={products[10].image} alt={products[10].name} fill sizes="25vw" priority className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />

      {/* How it works */}
      <section id="process" className="bg-[#EDE5DB] py-16 sm:py-24 relative overflow-hidden">
        <YarnDecor className="absolute -bottom-10 -right-10 rotate-45 pointer-events-none hidden sm:block" size={220} color="#886C5F" opacity={0.08} />
        <YarnDecor className="absolute -top-8 left-10 -rotate-12 pointer-events-none hidden sm:block" size={160} color="#E2725B" opacity={0.06} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#E2725B] text-xs tracking-[0.35em] uppercase font-semibold mb-3">The Process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <p className="text-4xl sm:text-5xl font-bold text-[#E2725B]/20 mb-3 sm:mb-4" style={{ fontFamily: "Georgia, serif" }}>{p.step}</p>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C1810] mb-2 sm:mb-3" style={{ fontFamily: "Georgia, serif" }}>{p.title}</h3>
                <p className="text-[#886C5F] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[#E2725B] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Happy Customers</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>What They Say</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#EDE5DB] rounded-3xl p-6 sm:p-8">
              <div className="flex gap-0.5 mb-4 sm:mb-5">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-[#E2725B] text-base sm:text-lg">★</span>)}
              </div>
              <p className="text-[#2C1810] text-sm leading-relaxed mb-5 sm:mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-sm font-bold text-[#2C1810]">{t.name}</p>
                <p className="text-xs text-[#886C5F]">Purchased: {t.item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#2C1810] text-white py-16 sm:py-24 relative overflow-hidden">
        <YarnDecor className="absolute top-10 right-10 rotate-12 pointer-events-none hidden sm:block" size={240} color="#E2725B" opacity={0.06} />
        <YarnDecor className="absolute bottom-10 left-6 pointer-events-none hidden sm:block" size={180} color="#886C5F" opacity={0.07} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo grid — shown below text on mobile */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 order-2 lg:order-1">
            {[products[0], products[2], products[3], products[5], products[9], products[12]].map((p) => (
              <div key={p.id} className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden relative">
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 33vw, (max-width: 1024px) 22vw, 15vw" className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-[#E2725B] text-xs tracking-[0.35em] uppercase font-semibold mb-3 sm:mb-4">The Maker</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Meet Natasha.<br />
              <span className="text-[#E2725B] italic font-normal">The hands behind</span><br />
              every stitch.
            </h2>
            <p className="text-white/60 leading-relaxed mb-4 sm:mb-5 text-sm">
              Hi! I&apos;m Natasha, a passionate crocheter based in Kenya. I started making crochet pieces because I believed handmade fashion should be accessible, beautiful, and deeply personal.
            </p>
            <p className="text-white/60 leading-relaxed mb-8 sm:mb-10 text-sm">
              Every piece is made to order. No factories, no shortcuts. Just premium yarn, skilled hands, and a whole lot of love. If you can dream it, I can crochet it.
            </p>
            <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
              <a href={instagram} target="_blank" rel="noopener noreferrer"
                className="border border-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:border-[#E2725B] hover:text-[#E2725B] transition-colors">
                Follow on Instagram ↗
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer"
                className="bg-[#E2725B] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-[#c8603a] transition-colors">
                Order Custom Piece
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[#E2725B] text-xs tracking-[0.35em] uppercase font-semibold mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>
            Let&apos;s create something<br />
            <span className="text-[#E2725B] italic font-normal">beautiful together.</span>
          </h2>
          <p className="text-[#886C5F] mt-3 sm:mt-4 max-w-md mx-auto text-sm">Place an order, request a custom piece, or just say hi. We&apos;d love to hear from you.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {[
            { icon: <FaWhatsapp size={24} color="#25D366" />, label: "WhatsApp", value: "+254 716 515062", href: whatsapp },
            { icon: <FaInstagram size={24} color="#E1306C" />, label: "Instagram", value: "@natashaunfiltered2.0", href: instagram },
            { icon: <FaTiktok size={22} color="#010101" />, label: "TikTok", value: "@natash_a2.0", href: tiktok },
            { icon: <FaEnvelope size={22} color="#E2725B" />, label: "Email", value: "wairimunatasha651@gmail.com", href: "mailto:wairimunatasha651@gmail.com" },
            { icon: <FaPhone size={22} color="#E2725B" />, label: "Call / SMS", value: "+254 716 515062", href: "tel:+254716515062" },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              className="group bg-[#FAF7F2] border-2 border-[#E8DDD4] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center hover:border-[#E2725B] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E2725B]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#E2725B]/20 transition-colors">
                {c.icon}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#2C1810] mb-1">{c.label}</p>
              <p className="text-[10px] sm:text-xs text-[#886C5F] break-all">{c.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-5 sm:gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <div>
              <span className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>Natasha</span>
              <span className="text-base sm:text-lg font-bold text-[#E2725B]"> Crochets</span>
            </div>
            <p className="text-xs text-white/30 mt-1">Handmade in Kenya. Made with Love.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-white/40">
            <a href="#products" className="hover:text-white transition-colors">Shop</a>
            <a href="#process" className="hover:text-white transition-colors">How It Works</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href={tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs text-white/20">© {new Date().getFullYear()} Natasha Crochets</p>
            <p className="text-[10px] text-white/40 mt-0.5">Built by <a href="https://hariet-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Hariet</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
