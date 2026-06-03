import { motion } from "motion/react";
import { ChevronDown, Send, Percent, Landmark, MapPin, Cpu } from "lucide-react";
import coverImg from "../assets/cover.jpg";

export default function HeroSection() {
  const scrollToLeadForm = () => {
    const target = document.getElementById("golden-pass-gate");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-[95vh] flex flex-col items-center justify-center text-white px-4 py-24 overflow-hidden select-none">
      {/* Background Image of Château de Ferrières */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src={coverImg} 
          alt="Château de Ferrières" 
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.95] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Soft, luxury gradient overlay: letting the image details pop with perfect dark contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-[#1F0006]/15" />
      </div>

      {/* Decorative Brand Ambient Blobs */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-[#800020]/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-[#C5A85C]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Animated Core Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-2xl sm:text-[36px] md:text-[46px] lg:text-[54px] leading-[1.12] tracking-widest text-[#FFFFFF] uppercase mb-12 font-black max-w-5xl [text-shadow:0_4px_24px_rgba(0,0,0,0.95)]"
        >
          FERRIÈRES SCHOOL PARIS – NƠI KIẾN TẠO THẾ HỆ LÃNH ĐẠO KẾ THỪA
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mb-16"
        >
          <button
            onClick={scrollToLeadForm}
            className="px-10 py-5 gold-shimmer-btn text-[#800020] font-display font-extrabold uppercase tracking-[0.25em] text-xs shadow-[0_5px_30px_rgba(197,168,92,0.5)] hover:shadow-[0_5px_40px_rgba(197,168,92,0.75)] transition-all duration-300 rounded-none cursor-pointer flex items-center gap-3 border border-[#ECE5CD] relative overflow-hidden"
          >
            Đăng ký Nhận Đặc Quyền Golden Pass
            <Send className="w-3.5 h-3.5 text-[#800020] pointer-events-none stroke-[2.5]" />
          </button>
        </motion.div>

        {/* 4 Crucial Metrics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-[#800020]/30 pt-10 px-4 max-w-5xl text-left"
        >
          {/* Metric 1 */}
          <div className="bg-[#800020]/90 backdrop-blur-md p-6 border-2 border-[#800020] hover:border-red-500/30 transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.55)] hover:shadow-[0_20px_50px_rgba(128,0,32,0.3)] transform hover:-translate-y-1.5 relative group">
            <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 border-l border-b border-white/25 flex items-center justify-center">
              <span className="text-[8px] text-red-100 font-mono">01</span>
            </div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <Percent className="w-5 h-5 text-white" />
              <div className="text-white font-display text-3xl font-extrabold tracking-widest">100%</div>
            </div>
            <div className="text-xs uppercase tracking-wider font-display font-bold mb-2 text-[#FFFFFF] border-b border-white/10 pb-1 flex items-center gap-1.5">
              <span>Lộ Trình Cam Kết Việc Làm</span>
            </div>
            <div className="text-[11px] leading-relaxed text-[#FDFBF7]/95 font-sans font-normal">Mạng lưới quốc tế độc quyền bảo chứng tối đa khả năng thăng tiến và cam kết sự nghiệp ngay khi tốt nghiệp.</div>
          </div>

          {/* Metric 2 */}
          <div className="bg-[#800020]/90 backdrop-blur-md p-6 border-2 border-[#800020] hover:border-red-500/30 transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.55)] hover:shadow-[0_20px_50px_rgba(128,0,32,0.3)] transform hover:-translate-y-1.5 relative group">
            <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 border-l border-b border-white/25 flex items-center justify-center">
              <span className="text-[8px] text-red-100 font-mono">02</span>
            </div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <Landmark className="w-5 h-5 text-white" />
              <div className="text-white font-display text-3xl font-extrabold tracking-widest">4 PALMES</div>
            </div>
            <div className="text-xs uppercase tracking-wider font-display font-bold mb-2 text-[#FFFFFF] border-b border-white/10 pb-1">Đỉnh Cao Eduniversal 2026</div>
            <div className="text-[11px] leading-relaxed text-[#FDFBF7]/95 font-sans font-normal">Chứng nhận toàn cầu danh giá nhất về chất lượng học thuật và năng lực thực chiến trong dịch vụ xa xỉ.</div>
          </div>

          {/* Metric 3 */}
          <div className="bg-[#800020]/90 backdrop-blur-md p-6 border-2 border-[#800020] hover:border-red-500/30 transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.55)] hover:shadow-[0_20px_50px_rgba(128,0,32,0.3)] transform hover:-translate-y-1.5 relative group">
            <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 border-l border-b border-white/25 flex items-center justify-center">
              <span className="text-[8px] text-red-100 font-mono">03</span>
            </div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <MapPin className="w-5 h-5 text-white" />
              <div className="text-white font-display text-3xl font-extrabold tracking-widest">25 KM</div>
            </div>
            <div className="text-xs uppercase tracking-wider font-display font-bold mb-2 text-[#FFFFFF] border-b border-white/10 pb-1">Học Xá Lâu Đài Cổ Kính</div>
            <div className="text-[11px] leading-relaxed text-[#FDFBF7]/95 font-sans font-normal">Lâu đài Château de Ferrières nguy nga mang tính di sản, cách trung tâm kinh đô ánh sáng Paris chỉ 25 phút.</div>
          </div>

          {/* Metric 4 */}
          <div className="bg-[#800020]/90 backdrop-blur-md p-6 border-2 border-[#800020] hover:border-red-500/30 transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.55)] hover:shadow-[0_20px_50px_rgba(128,0,32,0.3)] transform hover:-translate-y-1.5 relative group">
            <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 border-l border-b border-white/25 flex items-center justify-center">
              <span className="text-[8px] text-red-100 font-mono">04</span>
            </div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <Cpu className="w-5 h-5 text-white" />
              <div className="text-white font-display text-3xl font-extrabold tracking-widest">12.000 m²</div>
            </div>
            <div className="text-xs uppercase tracking-wider font-display font-bold mb-2 text-[#FFFFFF] border-b border-white/10 pb-1">Thung Lũng Công Nghệ</div>
            <div className="text-[11px] leading-relaxed text-[#FDFBF7]/95 font-sans font-normal">Tích hợp AI, đổi mới sáng tạo Human-Tech tiên phong định đoán tương lai của ngành dịch vụ xa sỉ.</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 opacity-75">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-white cursor-pointer"
          onClick={() => {
            const target = document.getElementById("excellence-environment");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase mb-1.5 opacity-90 font-display font-bold">KHÁM PHÁ FERRIÈRES SCHOOL PARIS</span>
          <ChevronDown className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </section>
  );
}
