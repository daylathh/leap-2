import { motion } from "motion/react";
import { Award, Landmark, Sparkles } from "lucide-react";
import { useState } from "react";
import logoHead from "../../logo head.png";

export default function Header() {
  const [logoError, setLogoError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#C5A85C]/25 px-6 sm:px-12 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand with Custom Links */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* LEAP Logo or Fallback Text Link */}
          <a 
            href="https://leapvietnam.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-85 transition-opacity"
            id="header-logo-leap"
          >
            {!logoError ? (
              <img 
                src={logoHead} 
                alt="LEAP Vietnam Logo" 
                className="h-9 md:h-10 w-auto object-contain"
                onError={() => setLogoError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-lg md:text-xl font-serif tracking-[0.1em] text-[#800020] font-bold leading-none">
                LEAP VIỆT NAM
              </span>
            )}
          </a>

          {/* Golden italic x separator */}
          <span className="text-xs md:text-sm font-serif italic text-[#C5A85C]/60 select-none pb-0.5">x</span>

          {/* Ferrières Link */}
          <a 
            href="https://www.ferrieres-paris.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs md:text-sm tracking-[0.2em] font-serif uppercase text-[#800020] hover:text-[#C5A85C] transition-colors duration-300 cursor-pointer pt-0.5 font-bold"
            id="header-brand-ferrieres"
          >
            Ferrières
          </a>
        </div>

        {/* Minimal Navigation & Direct Contact Icon */}
        <nav className="hidden lg:flex items-center space-x-6 text-[10px] xl:text-[11px] tracking-[0.18em] uppercase font-bold text-[#800020]">
          <button 
            onClick={() => scrollToSection("excellence-environment")} 
            className="text-[#800020]/90 hover:text-[#C5A85C] transition-colors duration-300 cursor-pointer"
          >
            Môi trường Giáo dục
          </button>
          <button 
            onClick={() => scrollToSection("elite-network-roi")} 
            className="text-[#800020]/90 hover:text-[#C5A85C] transition-colors duration-300 cursor-pointer"
          >
            Mạng lưới &amp; ROI
          </button>
          <button 
            onClick={() => scrollToSection("social-proof")} 
            className="text-[#800020]/90 hover:text-[#C5A85C] transition-colors duration-300 cursor-pointer"
          >
            Bảo chứng Thực tế
          </button>
          <button 
            onClick={() => scrollToSection("golden-pass-gate")} 
            className="text-[#800020]/90 hover:text-[#C5A85C] transition-colors duration-300 cursor-pointer"
          >
            Nhận đặc quyền Golden Pass
          </button>
        </nav>
 
        {/* CTA Button: Royal Burgundy */}
        <div>
          <button
            onClick={() => scrollToSection("golden-pass-gate")}
            className="relative px-5 py-2.5 bg-[#800020] border border-[#C5A85C]/50 text-[10px] tracking-[0.18em] uppercase font-extrabold text-[#C5A85C] hover:bg-[#590012] hover:border-[#C5A85C] transition-all duration-300 rounded-none cursor-pointer hidden sm:block shadow-md font-display"
          >
             ĐĂNG KÝ GOLDEN PASS
          </button>
          <button
            className="block sm:hidden text-[#800020] hover:text-[#C5A85C]"
            onClick={() => scrollToSection("golden-pass-gate")}
          >
            <Landmark className="w-5 h-5 animate-pulse" />
          </button>
        </div>
      </div>
    </header>
  );
}
