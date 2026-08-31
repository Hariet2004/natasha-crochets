"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  { id: 1,  name: "Crochet Hair Bow",       category: "Accessories", price: "KSh 350",   image: "/products/bow.jpg",           colors: ["Orange", "White"] },
  { id: 2,  name: "Ruffle Slippers",         category: "Footwear",    price: "KSh 950",   image: "/products/slippers.jpg",      colors: ["Grey", "Pink"] },
  { id: 3,  name: "Crochet Rose Stem",       category: "Accessories", price: "KSh 400",   image: "/products/rose-stem.jpg",     colors: ["Purple"] },
  { id: 4,  name: "Flower Brooch",           category: "Accessories", price: "KSh 300",   image: "/products/flower-brooch.jpg", colors: ["Lavender"] },
  { id: 5,  name: "Fringe Skirt Set",        category: "Sets",        price: "KSh 3,000", image: "/products/fringe-set.jpg",    colors: ["Orange", "Black"] },
  { id: 6,  name: "Mesh Halter Top",         category: "Tops",        price: "KSh 800",   image: "/products/halter-top.jpg",    colors: ["Green"] },
  { id: 7,  name: "Bandana Top",             category: "Tops",        price: "KSh 600",   image: "/products/bandana-set.jpg",   colors: ["Rust Brown"] },
  { id: 8,  name: "Ruffle Bralette Set",     category: "Sets",        price: "KSh 4,500", image: "/products/ruffle-set.jpg",    colors: ["Grey", "Red"] },
  { id: 9,  name: "Ruffle Scrunchie",        category: "Accessories", price: "KSh 250",   image: "/products/scrunchie.jpg",     colors: ["White"] },
  { id: 10, name: "Fuzzy Fringe Skirt",      category: "Skirts",      price: "KSh 1,500", image: "/products/fuzzy-crop.jpg",    colors: ["Green"] },
  { id: 11, name: "Mesh Shrug + Scrunchie",  category: "Sets",        price: "KSh 1,200", image: "/products/shrug-set.jpg",     colors: ["Red", "White", "Grey", "Pink", "Black"] },
  { id: 12, name: "Baby Booties",            category: "Baby",        price: "KSh 600",   image: "/products/baby-booties.png",  colors: ["Blue"] },
  { id: 13, name: "Mesh Tote Bag",           category: "Bags",        price: "KSh 800",   image: "/products/tote-bag.png",      colors: ["Yellow"] },
];

const categories = ["All Pieces", "Sets", "Tops", "Skirts", "Accessories", "Footwear", "Bags", "Baby"];

const whatsapp = "https://wa.me/254716515062";

export default function ProductsSection() {
  const [active, setActive] = useState("All Pieces");

  const filtered = active === "All Pieces"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]" style={{ fontFamily: "Georgia, serif" }}>Shop All Products</h2>
        <p className="text-[#886C5F] mt-2 sm:mt-3 text-sm">All pieces made to order. Custom colours on request. DM to order.</p>
      </div>

      {/* Category filter buttons */}
      <div className="bg-[#2C1810] rounded-2xl py-4 sm:py-5 px-3 sm:px-4 flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs px-5 py-2 rounded-full font-medium tracking-wide transition-all duration-200 ${
              active === cat
                ? "bg-[#E2725B] text-white"
                : "border border-white/20 text-white/70 hover:bg-white hover:text-[#2C1810]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        {filtered.map((product) => (
          <a
            key={product.id}
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="aspect-3/4 bg-[#EDE5DB] rounded-2xl overflow-hidden relative mb-3 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover scale-[1.05] group-hover:scale-[1.1] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#2C1810]/0 group-hover:bg-[#2C1810]/40 transition-all duration-300 flex items-end justify-center pb-5">
                <span className="bg-white text-[#2C1810] text-xs font-bold px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-wide">
                  Order via WhatsApp
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="text-[10px] bg-[#E2725B] text-white font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
            </div>
            <p className="text-sm font-bold text-[#2C1810] truncate">{product.name}</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[#E2725B] text-sm font-bold">{product.price}</span>
              <div className="flex gap-1 flex-wrap justify-end">
                {product.colors.slice(0, 2).map((c) => (
                  <span key={c} className="text-[10px] text-[#886C5F]">{c}</span>
                ))}
                {product.colors.length > 2 && <span className="text-[10px] text-[#886C5F]">+{product.colors.length - 2}</span>}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-10 sm:mt-16">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-[#2C1810] text-[#2C1810] px-8 sm:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-[#2C1810] hover:text-white transition-colors uppercase tracking-wide"
        >
          Place a Custom Order
        </a>
      </div>
    </section>
  );
}
