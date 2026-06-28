const products = [
  { id: 1, name: "Crochet Hair Bow", category: "Accessories", price: "KSh 350", image: "/products/bow.jpg", colors: ["Orange & White"] },
  { id: 2, name: "Ruffle Slippers", category: "Footwear", price: "KSh 950", image: "/products/slippers.jpg", colors: ["Grey & Pink"] },
  { id: 3, name: "Crochet Rose Stem", category: "Accessories", price: "KSh 400", image: "/products/rose-stem.jpg", colors: ["Purple"] },
  { id: 4, name: "Flower Brooch", category: "Accessories", price: "KSh 300", image: "/products/flower-brooch.jpg", colors: ["Lavender"] },
  { id: 5, name: "Fringe Skirt Set", category: "Clothing", price: "KSh 2,200", image: "/products/fringe-set.jpg", colors: ["Orange & Black"] },
  { id: 6, name: "Mesh Halter Top", category: "Clothing", price: "KSh 1,100", image: "/products/halter-top.jpg", colors: ["Green"] },
  { id: 7, name: "Bandana Bikini Set", category: "Clothing", price: "KSh 1,800", image: "/products/bandana-set.jpg", colors: ["Rust Brown"] },
  { id: 8, name: "Ruffle Bralette Set", category: "Clothing", price: "KSh 2,000", image: "/products/ruffle-set.jpg", colors: ["Grey & Red"] },
  { id: 9, name: "Ruffle Scrunchie", category: "Accessories", price: "KSh 250", image: "/products/scrunchie.jpg", colors: ["White"] },
  { id: 10, name: "Fuzzy Crop Top", category: "Clothing", price: "KSh 1,500", image: "/products/fuzzy-crop.jpg", colors: ["Green"] },
  { id: 11, name: "Mesh Shrug + Scrunchie Set", category: "Clothing", price: "KSh 1,600", image: "/products/shrug-set.jpg", colors: ["Red", "White", "Grey", "Pink", "Black"] },
  { id: 12, name: "Baby Booties", category: "Baby", price: "KSh 600", image: "/products/baby-booties.jpg", colors: ["Blue"] },
  { id: 13, name: "Mesh Tote Bag", category: "Bags", price: "KSh 1,200", image: "/products/tote-bag.jpg", colors: ["Yellow"] },
];

const categories = ["All", "Clothing", "Accessories", "Footwear", "Bags", "Baby"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf8f4] font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#fdf8f4]/90 backdrop-blur border-b border-[#e8d5c4]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#3d2314]">Natasha Crochets</h1>
            <p className="text-xs text-[#9b6b4a]">Handmade with love ✦</p>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#products" className="text-sm text-[#5c3a22] hover:text-[#3d2314] transition-colors">Shop</a>
            <a href="#contact" className="text-sm text-[#5c3a22] hover:text-[#3d2314] transition-colors">Contact</a>
            <a
              href="https://www.instagram.com/natashaunfiltered2.0?igsh=cjJ2bzQ0cW8wNnR5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-[#3d2314] text-white px-4 py-2 rounded-full hover:bg-[#5c3a22] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#9b6b4a] mb-4">Handcrafted in Kenya</p>
        <h2 className="text-5xl font-bold text-[#3d2314] leading-tight mb-6">
          Crochet pieces made<br />just for you
        </h2>
        <p className="text-lg text-[#7a5040] max-w-xl mx-auto mb-10">
          From cozy slippers to stunning sets — every piece is handmade with care and attention to detail.
        </p>
        <a
          href="#products"
          className="inline-block bg-[#3d2314] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#5c3a22] transition-colors"
        >
          Shop Now
        </a>
      </section>

      {/* Products */}
      <section id="products" className="max-w-6xl mx-auto px-4 pb-24">
        <h3 className="text-2xl font-bold text-[#3d2314] mb-2">Our Collection</h3>
        <p className="text-[#9b6b4a] mb-8 text-sm">All pieces are made to order. DM to customise colours.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <a
              key={product.id}
              href={`https://www.instagram.com/natashaunfiltered2.0?igsh=cjJ2bzQ0cW8wNnR5`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#edddd0]"
            >
              <div className="aspect-square bg-[#f5ebe0] relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-[#c9a882] text-4xl opacity-30 pointer-events-none select-none">
                  ✦
                </div>
                <span className="absolute top-2 left-2 bg-[#3d2314] text-white text-[10px] px-2 py-0.5 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-[#3d2314] truncate">{product.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-[#9b6b4a] font-medium">{product.price}</span>
                  <span className="text-xs text-[#c9a882]">Order →</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.colors.map((c) => (
                    <span key={c} className="text-[10px] bg-[#fdf0e6] text-[#7a5040] px-2 py-0.5 rounded-full border border-[#edddd0]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#3d2314] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-3">Get in touch</h3>
            <p className="text-[#e8c9a8] text-sm mb-6">
              Want to place an order, request a custom piece, or just say hi? Reach out on any of these platforms.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+254716515062"
                className="flex items-center gap-3 text-sm hover:text-[#f5d9b8] transition-colors"
              >
                <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-base">📞</span>
                +254 716 515062
              </a>
              <a
                href="https://www.instagram.com/natashaunfiltered2.0?igsh=cjJ2bzQ0cW8wNnR5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-[#f5d9b8] transition-colors"
              >
                <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-base">📸</span>
                @natashaunfiltered2.0
              </a>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-[#e8c9a8] text-sm mb-1">Natasha Crochets</p>
            <p className="text-4xl font-bold">✦</p>
            <p className="text-[#e8c9a8] text-xs mt-2">Handmade with love in Kenya</p>
          </div>
        </div>
      </section>
    </div>
  );
}
