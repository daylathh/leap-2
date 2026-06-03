import { Sparkles, Compass, Users2, ShieldCheck, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function LoyaltyService() {
  return (
    <section id="loyalty-service" className="py-24 bg-[#F9FAFC] border-t border-[#C5A85C]/15 text-[#111827] relative overflow-hidden">
      {/* Decorative luxury gradient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ECE5CD]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-3 text-[#C5A85C] text-xs tracking-[0.25em] uppercase font-display font-bold mb-4">
              <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
              <span className="gold-text-shimmer font-extrabold">LOYALTY &amp; LIFELONG SERVICE</span>
              <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-3.5xl font-extrabold tracking-widest leading-snug uppercase mb-6 text-[#800020]">
              Sự Đồng Hành Không Giới Hạn Của Cộng Đồng LEAP &amp; Ferrières
            </h2>
            <div className="w-24 h-[2px] bg-[#C5A85C] mx-auto mb-6" />
            <p className="font-sans font-light text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Không chỉ dừng lại ở thủ tục tuyển sinh và nhận học bổng, mối quan hệ giữa LEAP Vietnam và các gia đình là sự cam kết đồng hành bền vững trải dài trọn vẹn suốt những năm tháng học tập của con tại Pháp.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 columns split list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Activity 1: Lễ Tiễn Chân (Send-off Party) */}
          <ScrollReveal delayMs={100}>
            <div className="group bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x-2 border-b-2 border-[#C5A85C]/25 hover:border-[#C5A85C] shadow-[0_10px_35px_rgba(197,168,92,0.04)] hover:shadow-[0_20px_45px_rgba(128,0,32,0.08)] transition-all duration-500 rounded-none overflow-hidden h-full flex flex-col justify-between relative">
              
              {/* Image box */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1543157148-f68f2ea227ed?q=80&w=1000&auto=format&fit=crop" 
                  alt="Lễ Tiễn Chân Send-off Party LEAP Vietnam" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C5A85C]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-display font-extrabold text-white">READY TO DEPART</span>
                </div>
              </div>

              {/* Text content block */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-[#800020] text-lg sm:text-xl uppercase tracking-wider group-hover:text-[#C5A85C] transition-colors duration-300">
                    Lễ Tiễn Chân (Send-off Party)
                  </h3>
                  <p className="font-sans font-light text-sm text-gray-705 leading-relaxed">
                    Trước ngày các con chính thức đặt chân lên phi trường khởi hành xuất ngoại sang thủ đô ánh sáng, LEAP Vietnam chuẩn bị một buổi tiệc họp mặt giao lưu vô cùng ấm áp, sang trọng dành riêng cho các tân sinh viên cùng quý phụ huynh. Đây là dịp để gắn kết mật thiết mạng lưới các gia đình đồng hành có cùng chí hướng và hệ giá trị tinh anh.
                  </p>
                </div>
                
                {/* Micro checklist */}
                <div className="mt-6 pt-6 border-t border-[#C5A85C]/15 grid grid-cols-1 gap-2 text-xs text-gray-500 font-sans font-light">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A85C]" />
                    <span>Giao lưu chia sẻ trải nghiệm thực tế cùng cựu học sinh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A85C]" />
                    <span>Kết nối mạng lưới gia đình đồng hành hỗ trợ lẫn nhau</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A85C] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
            </div>
          </ScrollReveal>

          {/* Activity 2: Mạng lưới Sinh viên Việt Nam tại Lâu đài */}
          <ScrollReveal delayMs={200}>
            <div className="group bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x-2 border-b-2 border-[#C5A85C]/25 hover:border-[#C5A85C] shadow-[0_10px_35px_rgba(197,168,92,0.04)] hover:shadow-[0_20px_45px_rgba(128,0,32,0.08)] transition-all duration-500 rounded-none overflow-hidden h-full flex flex-col justify-between relative">
              
              {/* Image box */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" 
                  alt="Cộng đồng sinh viên tại lâu đài Ferrières" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-[#C5A85C]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-display font-extrabold text-white">ON-SITE SUPPORT</span>
                </div>
              </div>

              {/* Text content block */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-[#800020] text-lg sm:text-xl uppercase tracking-wider group-hover:text-[#C5A85C] transition-colors duration-300">
                    Mạng lưới Sinh viên Việt Nam tại Lâu đài
                  </h3>
                  <p className="font-sans font-light text-sm text-gray-750 leading-relaxed">
                    Hỗ trợ tối đa sự hòa nhập và ổn định cuộc sống khi vừa đặt chân tới Pháp. Cộng đồng cựu sinh viên và các học viên khóa trước hiện đang sinh hoạt và học tập tại lâu đài Ferrières liên kết chặt chẽ hỗ trợ tân sinh viên tìm kiếm nhà ở tối ưu, hoàn thành thủ tục đăng ký thẻ cư trú hữu hạn (OFII), tiếp thu ngôn ngữ văn hóa và trao tay kinh nghiệm quý giá khi xin thực tập.
                  </p>
                </div>
                
                {/* Micro checklist */}
                <div className="mt-6 pt-6 border-t border-[#C5A85C]/15 grid grid-cols-1 gap-2 text-xs text-gray-500 font-sans font-light">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A85C]" />
                    <span>Hỗ trợ hồ sơ OFII, mở tài khoản &amp; tìm kiếm nhà ở</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A85C]" />
                    <span>Chia sẻ bí quyết chinh phục vị trí thực tập đắt giá tại Pháp</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A85C] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
            </div>
          </ScrollReveal>

        </div>

        {/* Global Security Trust tag */}
        <ScrollReveal delayMs={300}>
          <div className="mt-16 flex items-center justify-center gap-3 p-5 border border-[#C5A85C]/25 bg-white max-w-2xl mx-auto rounded-none text-center shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#C5A85C] flex-shrink-0" />
            <span className="font-sans text-xs text-gray-600 leading-relaxed font-light">
              Tất cả hoạt động Loyalty &amp; Service được quản trị tận gốc bởi Giám đốc văn phòng đại biểu LEAP, bảo chứng chất lượng và cam kết bền bỉ cho tương lai của các con.
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
