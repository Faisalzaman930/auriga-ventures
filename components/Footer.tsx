export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#080808] border-t border-[#1A1A1A] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1 mb-3">
              <span
                className="font-cormorant text-2xl font-semibold text-[#F5F0E8]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Auriga
              </span>
              <span
                className="font-cormorant text-2xl font-light text-[#C8903A]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Ventures
              </span>
            </div>
            <p
              className="text-[#F5F0E8]/35 text-sm italic font-cormorant"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Beyond Travel. We Curate Dreams.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Destinations", href: "#destinations" },
                { label: "Philosophy", href: "#philosophy" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#F5F0E8]/45 hover:text-[#C8903A] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#F5F0E8]/30 mb-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Follow Us
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-[#222222] flex items-center justify-center text-[#F5F0E8]/40 hover:border-[#C8903A]/50 hover:text-[#C8903A] transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-9 h-9 border border-[#222222] flex items-center justify-center text-[#F5F0E8]/40 hover:border-[#C8903A]/50 hover:text-[#C8903A] transition-all duration-300"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 border border-[#222222] flex items-center justify-center text-[#F5F0E8]/40 hover:border-[#C8903A]/50 hover:text-[#C8903A] transition-all duration-300"
              >
                <svg width="15" height="11" viewBox="0 0 24 17" fill="currentColor">
                  <path d="M23.5 2.7S23.2 0.8 22.4 0.1C21.4-.9 20.3-.9 19.8-.9 16.5-1 12-1 12-1s-4.5 0-7.8.1c-.5.1-1.6.1-2.6 1.1C.8.8.5 2.7.5 2.7S.2 4.9.2 7v2c0 2.2.3 4.3.3 4.3s.3 1.9 1.1 2.6c1 1 2.4.9 3 1 2.2.2 9.4.3 9.4.3s4.5 0 7.8-.1c.5-.1 1.6-.1 2.6-1.1.8-.7 1.1-2.6 1.1-2.6s.3-2.2.3-4.3V7C23.8 4.9 23.5 2.7 23.5 2.7zM9.7 10.7V4.7l6.6 3-6.6 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-xs text-[#F5F0E8]/25"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            © {currentYear} Auriga Ventures. Gilgit, Pakistan.
          </p>
          <p
            className="text-xs text-[#F5F0E8]/20"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Unique. Different. Daring.
          </p>
        </div>
      </div>
    </footer>
  );
}
