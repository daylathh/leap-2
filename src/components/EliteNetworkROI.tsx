import { Network, Briefcase, Globe, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function EliteNetworkROI() {
  const values = [
    {
      french: "100% d'Employabilité",
      vietnamese: "100% Sinh viên có việc làm",
      strategic: "Cam kết đầu ra nghề nghiệp tuyệt đối",
      desc: "Sinh viên tốt nghiệp thường thăng tiến nhanh chóng vào các vị trí lãnh đạo điều hành, quản trị cao cấp và khởi nghiệp thành đạt nhờ uy tín vượt trội của thương hiệu lâu đài."
    },
    {
      french: "Une pédagogie agile",
      vietnamese: "Mô hình đào tạo linh hoạt",
      strategic: "Được tùy biến lộ trình theo định hướng phát triển cá nhân",
      desc: "Sinh viên có thể chủ động điều chỉnh định hướng học tập qua từng giai đoạn để phù hợp tốt nhất với đam mê và cơ hội thị trường biến động."
    },
    {
      french: "Un rythme alterné (Work & Study)",
      vietnamese: "Mô hình vừa học vừa làm",
      strategic: "Tích lũy thực tế tối đa & tự chủ tài trợ",
      desc: "Xây dựng kỹ năng thực hành sớm. Đặc biệt, chương trình Work & Study năm thứ 4 cho phép sinh viên nhận vị trí làm việc chuyên nghiệp để chi trả toàn bộ học phí 2 học kỳ cuối."
    },
    {
      french: "L'innovation au cœur",
      vietnamese: "Đổi mới là trọng tâm",
      strategic: "Định hướng tương lai & Công nghệ dịch vụ",
      desc: "Tích hợp công cụ học tập kỹ thuật số hiện đại cùng trung tậm công nghệ Human Tech Valley 12.000m² đón đầu làn sóng AI thông minh."
    },
    {
      french: "Le PAP (Prog. Accélérateur)",
      vietnamese: "Tăng tốc phát triển nghề nghiệp PAP",
      strategic: "Tiếp xúc trực tiếp doanh nghiệp liên tục",
      desc: "Nhúng mình sâu vào thực tế qua các Hội nghị Thượng đỉnh Nghề nghiệp và chuỗi lớp học định danh chuyên sâu do chuyên gia toàn cầu hướng dẫn."
    },
    {
      french: "Un écosystème unique",
      vietnamese: "Hệ sinh thái duy nhất",
      strategic: "Tất cả trong một chỉnh thể đẳng cấp",
      desc: "Sự cộng hợp đồng điệu giữa Lâu đài lịch sử, Khách sạn 4 sao, Chuỗi nhà hàng thực nghiệm và Trung tâm đổi mới ngay trong khuôn viên trường."
    },
    {
      french: "Un financement facilité",
      vietnamese: "Hỗ trợ tài chính linh hoạt",
      strategic: "Học bổng & Quỹ hỗ trợ đa dạng",
      desc: "Nhiều chính sách ưu đãi tài chính, học bổng danh giá từ nhà trường cùng cơ hội vừa làm vừa học giúp giảm thiểu tối đa gánh nặng chi phí."
    },
    {
      french: "Une école internationale",
      vietnamese: "Trường học quốc tế thực thụ",
      strategic: "Học bằng tiếng Anh & Cộng đồng đa quốc gia",
      desc: "Chuẩn bị cho sự nghiệp toàn cầu thông qua việc trao đổi kết nối giữa mạng lưới cựu sinh viên rộng khắp bốn bể và sự bảo trợ của Văn phòng sinh viên (BDE)."
    }
  ];

  const premiumBrands = [
    "LVMH", "Ritz Paris", "Four Seasons", "Cartier", "Hermès", "Chanel", "Dior", "LE BRISTOL",
    "Marriott", "Gucci", "Hilton", "Fouquet's", "The Peninsula", "Dorchester Collection", "Westin", "Ladurée"
  ];

  return (
    <section id="elite-network-roi" className="py-24 bg-white relative overflow-hidden text-[#111827]">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ECE5CD]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#800020]/2 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="absolute top-12 right-12 w-16 h-16 border-t border-r border-[#C5A85C]/20 pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b border-l border-[#C5A85C]/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-flex items-center space-x-3 text-[#C5A85C] text-xs tracking-[0.3em] uppercase font-display font-bold mb-4">
              <span className="w-8 h-[1px] bg-[#C5A85C]"></span>
              <span className="gold-text-shimmer">THE ELITE NETWORK &amp; RETURN ON INVESTMENT</span>
              <span className="w-8 h-[1px] bg-[#C5A85C]"></span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4.5xl font-extrabold tracking-widest leading-snug uppercase mb-4 text-[#800020]">
              Giá Trị Đầu Tư Vượt Trội Toàn Diện
            </h2>
            <div className="w-24 h-[2px] bg-[#C5A85C] mx-auto mb-6" />
            <p className="font-sans font-light text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Không chỉ là tri thức lý thuyết, học viên Ferrières School Paris được thụ hưởng <strong className="text-[#800020] font-semibold">cam kết gia tăng giá trị trọn đời</strong> dựa trên 8 cột trụ chiến lược then chốt, bảo chứng tương lai nghề nghiệp xán lạn.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Strategic Pillars - Beautiful Visual Block-based Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, idx) => (
            <div key={idx} className="h-full">
              <ScrollReveal delayMs={50 * idx} className="h-full">
                <div className="bg-[#FAF9F6] border border-[#C5A85C]/20 hover:border-[#800020]/80 p-6 lg:p-8 flex flex-col justify-between h-full hover:shadow-[0_15px_45px_rgba(128,0,32,0.06)] transition-all duration-500 rounded-none relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C5A85C]/40 group-hover:bg-[#800020] transition-colors" />
                  
                  <div className="text-left space-y-4">
                    {/* French and VI translation */}
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A85C] block font-bold mb-1">
                        {v.french}
                      </span>
                      <h3 className="font-display font-black text-sm uppercase text-gray-950 group-hover:text-[#800020] transition-colors">
                        {v.vietnamese}
                      </h3>
                    </div>

                    {/* Gold divider */}
                    <div className="w-8 h-[1.5px] bg-[#C5A85C]/60" />

                    {/* Strategic translation */}
                    <div>
                      <h4 className="font-display font-bold text-[11px] uppercase tracking-wider text-[#800020] mb-2 font-black">
                         {v.strategic}
                      </h4>
                      <p className="font-sans font-light text-xs text-gray-500 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Highlight Stats Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-stretch">
          
          {/* Stat 1: Internship ROI */}
          <ScrollReveal delayMs={100}>
            <div className="bg-[#800020] text-white p-8 lg:p-12 border-l-4 border-l-white/20 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,92,0.1)_0%,transparent_60%)]" opacity-30="true" />
              <div className="relative z-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-red-100 pointer-events-none" />
                  <span className="text-[10px] tracking-[0.2em] font-display font-black uppercase text-red-100">CHƯƠNG TRÌNH KIẾN TẬP THỰC TẾ TRONG HỆ SINH THÁI</span>
                </div>
                <h3 className="font-display font-black text-2xl lg:text-3xl text-white uppercase tracking-wider">
                  Cơ Hội Kiến Thực Có Trả Lương Hấp Dẫn
                </h3>
                <p className="font-sans font-light text-xs sm:text-sm text-red-100 leading-relaxed">
                  Nhờ vào sự bảo trợ đặc quyền và quan hệ mật thiết của nhà trường với các khách sạn hạng sang, nhà hàng 4 sao, sinh viên có cơ hội nhận đảm nhiệm các vị trí chuyên môn đầy thử thách và được trả lương đầy đủ trong các khách sạn và doanh nghiệp ẩm thực của trường, từ đó sớm định hình khả năng tự chủ tài chính vượt bậc và củng cố hồ sơ ứng tuyển.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-white/10 relative z-10 flex items-center justify-end">
                <span className="text-xs font-serif italic text-red-200">Pratique &amp; Réel</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Stat 2: Elite Network Peer Effect */}
          <ScrollReveal delayMs={200}>
            <div className="bg-[#FAF9F6] text-gray-900 p-8 lg:p-12 border-2 border-gray-200 flex flex-col justify-between h-full relative shadow-xl">
              <div className="text-left space-y-4">
                <div className="flex items-center gap-3">
                  <Network className="w-5 h-5 text-[#800020] pointer-events-none" />
                  <span className="text-[10px] tracking-[0.2em] font-display font-black uppercase text-[#800020]">MÔI TRƯỜNG ĐỐI TÁC THƯỢNG TẦNG</span>
                </div>
                <h3 className="font-display font-black text-2xl lg:text-3xl text-[#800020] uppercase tracking-wider">
                  Mạng Lưới Thượng Lưu Đồng Điệu
                </h3>
                <p className="font-sans font-light text-xs sm:text-sm text-gray-650 leading-relaxed">
                  Bản sắc thương hiệu lâu đài hội tụ giới trâm anh bản địa, con cái tầng lớp chủ doanh nghiệp đa quốc gia và các nhà thừa kế có chung chí hướng. Trải nghiệm học và sống chung dưới mái trường cổ kính tạo dựng sợi dây gắn kết tinh thần tự nhiên, hình thành một khối quan hệ hỗ tương bền chặt, kiên định trợ lực sự nghiệp hoàng kim của học sinh sau này.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-gray-200 flex items-center justify-end">
                <span className="text-xs font-serif italic text-[#800020]">Elite Đồng Hành</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Luxury Brand Partners Box Slider/Grid */}
        <ScrollReveal delayMs={150}>
          <div className="bg-white border border-gray-150 p-8 lg:p-12 shadow-md text-center max-w-5xl mx-auto relative overflow-hidden">
            <span className="text-[10px] tracking-[0.25em] font-display font-black text-[#C5A85C] uppercase block mb-2">GOLD PARTNERS NETWORKS</span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#800020] uppercase tracking-wider mb-8">
              Mạng Lưới Tập Đoàn Xa Xỉ Bảo Trợ Tuyển Dụng
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {premiumBrands.map((brand, bIdx) => (
                <div key={bIdx} className="bg-[#FAF9F6] border border-[#C5A85C]/15 py-4 px-3 flex items-center justify-center select-none hover:border-[#800020] hover:bg-white hover:shadow-sm transition-all duration-300 animate-fade-in">
                  <span className="font-serif text-[10px] sm:text-xs tracking-wider uppercase text-gray-800 font-bold hover:text-[#800020] transition-colors">{brand}</span>
                </div>
              ))}
            </div>
            
            <p className="font-['Times_New_Roman',serif] font-bold italic text-xs text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
              Các ông lớn hàng đầu trong phân khúc siêu dịch vụ và xa xỉ phẩm thường xuyên khảo sát, dự định tuyển sinh, tổ chức thực hành và tiếp nhận học viên Ferrières làm việc chính chức liên tục hàng niên.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
