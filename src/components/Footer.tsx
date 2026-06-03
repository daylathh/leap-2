import { Building, Mail, Phone, Shield, Sparkles } from "lucide-react";
import { useState } from "react";
import logoHead from "../../logo head.png";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#2B000A] text-white/85 py-16 border-t border-[#C5A85C]/25 select-none relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Core footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Main School Brand info - 5 Cols */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 md:gap-3">
              {/* LEAP Logo or Fallback Text Link */}
              <a 
                href="https://leapvietnam.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-85 transition-opacity"
                id="footer-logo-leap"
              >
                {!logoError ? (
                  <img 
                    src={logoHead} 
                    alt="LEAP Logo" 
                    className="h-10 w-auto object-contain"
                    onError={() => setLogoError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-2xl font-display tracking-[0.15em] text-[#C5A85C] font-bold leading-none">
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
                className="text-sm tracking-[0.25em] font-display font-medium uppercase text-white hover:text-[#C5A85C] transition-colors duration-300 cursor-pointer pt-0.5"
                id="footer-brand-ferrieres"
              >
                Ferrières
              </a>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-light max-w-sm">
              Học viện Ferrières là biểu tượng di sản nghệ thuật ẩm thực Pháp, giáo dục cao cấp khách sạn và quản trị dịch vụ hiệu xa xỉ bậc nhất. Tổ chức liên kết chiến lược cùng LEAP Việt Nam mang cơ hội thâm nhập xã hội thượng lưu Pháp cho học sinh Việt Nam.
            </p>

            <div className="flex items-center space-x-2 text-[10px] text-[#C5A85C] font-display font-bold tracking-[0.18em] uppercase">
              <Shield className="w-4 h-4 text-[#C5A85C] pointer-events-none" />
              <span>Đối tác ủy quyền chính thức tại Việt Nam</span>
            </div>
          </div>

          {/* Quick contact nodes - 4 Cols */}
          <div className="md:col-span-6 lg:col-span-4 space-y-4 text-xs">
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase border-b border-[#C5A85C]/20 pb-2">
              Văn Phòng Bảo Trợ LEAP
            </h4>
            
            <ul className="space-y-3 font-light text-white/85 text-xs">
              <li className="flex items-start space-x-2.5">
                <Building className="w-4 h-4 text-[#C5A85C] flex-shrink-0 mt-0.5 pointer-events-none" />
                <span>
                  <strong className="text-white hover:text-[#C5A85C] transition-colors font-semibold">Hà Nội:</strong> Toà nhà Lancaster, 20 Núi Trúc, Giảng Võ, Ba Đình.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Building className="w-4 h-4 text-[#C5A85C] flex-shrink-0 mt-0.5 pointer-events-none" />
                <span>
                  <strong className="text-white hover:text-[#C5A85C] transition-colors font-semibold">TP. Hồ Chí Minh:</strong> Toà nhà Deutsches Haus, 33 Lê Duẩn, Bến Nghé, Quận 1.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Building className="w-4 h-4 text-[#C5A85C] flex-shrink-0 mt-0.5 pointer-events-none" />
                <span>
                  <strong className="text-white hover:text-[#C5A85C] transition-colors font-semibold">Paris, Pháp:</strong> 5 Rue de la Paix, 75002 Paris.
                </span>
              </li>
            </ul>
          </div>

          {/* Core connection methods - 3 Cols */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase border-b border-[#C5A85C]/20 pb-2">
              Liên Hệ &amp; Mạng Xã Hội
            </h4>
            
            <ul className="space-y-3 font-light text-white/80 text-xs">
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A85C] flex-shrink-0 pointer-events-none" />
                <span>Hotline: (+84) 24 7300 0600</span>
              </li>
              <li className="flex items-center space-x-2.5 bg-white/5 p-2 border border-[#C5A85C]/20 hover:border-[#C5A85C] transition-all">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A85C] block">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Fanpage LEAP Vietnam
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2.5 bg-white/5 p-2 border border-[#C5A85C]/20 hover:border-[#C5A85C] transition-all">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A85C] block">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Kênh hỗ trợ du học Pháp
                  </a>
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Editorial aesthetic Ivory footer bar bottom exactly matching the Design HTML */}
      <div className="w-full bg-[#1F0006] text-[#C5A85C] py-8 px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.25em] font-display font-bold gap-4 select-none uppercase border-t border-[#C5A85C]/15">
        <div>FERRIÈRES × LEAP VIỆT NAM</div>
        <div className="hidden lg:flex gap-12 text-white/70">
          <span className="hover:text-[#C5A85C] transition-colors cursor-default">DU HỌC PHÁP</span>
          <span className="hover:text-[#C5A85C] transition-colors cursor-default">QUẢN TRỊ KHÁCH SẠN</span>
          <span className="hover:text-[#C5A85C] transition-colors cursor-default">QUẢN TRỊ THƯƠNG HIỆU CAO CẤP</span>
        </div>
        <div className="opacity-75 italic text-[9px] tracking-wider md:text-right normal-case text-white/50">
          © {new Date().getFullYear()} FERRIÈRES HOSPITALITY. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
