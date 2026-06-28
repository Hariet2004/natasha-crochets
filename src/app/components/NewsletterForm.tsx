"use client";

export default function NewsletterForm() {
  return (
    <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 bg-white/20 text-white placeholder:text-white/50 border border-white/30 rounded-full px-5 py-3 text-sm outline-none focus:bg-white/30 transition-colors"
      />
      <button type="submit" className="bg-white text-[#E2725B] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#2C1810] hover:text-white transition-colors whitespace-nowrap">
        Subscribe
      </button>
    </form>
  );
}
