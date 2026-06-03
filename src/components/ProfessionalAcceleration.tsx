import { HeartHandshake, Briefcase, Network, Landmark, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "Cartier", category: "Luxury & Fashion" },
  { name: "Hermès Paris", category: "Luxury & Fashion" },
  { name: "Gucci", category: "Luxury & Fashion" },
  { name: "Louis Vuitton", category: "Luxury & Fashion" },
  { name: "Bvlgari", category: "Luxury & Fashion" },
  { name: "Ritz Paris", category: "Premium Hospitality" },
  { name: "Four Seasons", category: "Premium Hospitality" },
  { name: "Le Bristol Paris", category: "Premium Hospitality" },
  { name: "Sofitel", category: "Premium Hospitality" },
  { name: "Mandarin Oriental", category: "Premium Hospitality" },
  { name: "Grand Hyatt", category: "Premium Hospitality" },
  { name: "Disneyland Paris", category: "Entertainment & Arts" },
  { name: "Potel & Chabot", category: "High Culinary" },
  { name: "Michelin Guide Stars", category: "High Culinary" }
];

export default function ProfessionalAcceleration() {
  return (
    <section id="pap-program" className="py-24 bg-[#FFFFFF] text-[#111827] relative overflow-hidden">
      {/* Decorative luxury vector lines */}
      <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-[#C5A85C]/50 to-transparent" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#800020]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-flex items-center space-x-3 text-[#C5A85C] text-xs tracking-[0.25em] uppercase font-display font-bold mb-4">
              <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
              <span className="gold-text-shimmer font-extrabold">CONSIDERATION & PROFESSIONAL ACCELERATION</span>
              <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest leading-snug uppercase mb-6 text-[#800020]">
              Lộ Trình Phát Triển Thực Chiến &amp; Cơ Hội Tự Lập Tài Chính
            </h2>
            <div className="w-24 h-[2px] bg-[#C5A85C] mx-auto mb-6" />
            <p className="font-sans font-light text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Xóa bỏ hoàn toàn nỗi lo của phụ huynh về việc học xa rời thực phẩm, kịch bản lý thuyết hay gánh nặng chi phí thông qua kế hoạch đào tạo thực chiến kết hợp trả lương thực tập vượt trội.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 core pillars of PAP and Work & Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Pillar 1: PAP Program */}
          <ScrollReveal delayMs={100}>
            <div className="group relative bg-[#FFFFFF] p-8 sm:p-10 border-2 border-[#C5A85C]/35 hover:border-[#C5A85C] shadow-[0_12px_40px_rgba(128,0,32,0.05)] hover:shadow-[0_20px_50px_rgba(197,168,92,0.12)] transition-all duration-500 h-full flex flex-col justify-between transform hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-[#C5A85C]/20 pb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ECE5CD]/25 border-2 border-[#C5A85C]/45 text-[#C5A85C] shadow-sm">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C5A85C] font-display font-extrabold">Điểm khác biệt độc quyền</span>
                    <h3 className="font-display text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#800020] mt-0.5">
                      Chương Trình Tăng Tốc Nghề Nghiệp (PAP)
                    </h3>
                  </div>
                </div>
                <p className="font-sans font-light text-sm text-gray-700 leading-relaxed">
                  <strong>Programme Accélérateur de Professionnalisation (PAP)</strong> là nấc thang chuyển biến nghề nghiệp đặc thù của Ferrières. Học sinh được tham gia trực tiếp vận hành các hạng mục thực tế, đảm nhận các chức vụ chuyên nghiệp chuẩn mực và tích lũy thù lao hấp dẫn ngay tại chuỗi nhà hàng ẩm thực, khách sạn 4 sao và các đại sự kiện hoàng gia của trường.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#C5A85C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </ScrollReveal>

          {/* Pillar 2: Work & Study */}
          <ScrollReveal delayMs={200}>
            <div className="group relative bg-[#FFFFFF] p-8 sm:p-10 border-2 border-[#C5A85C]/35 hover:border-[#C5A85C] shadow-[0_12px_40px_rgba(128,0,32,0.05)] hover:shadow-[0_20px_50px_rgba(197,168,92,0.12)] transition-all duration-500 h-full flex flex-col justify-between transform hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-[#C5A85C]/20 pb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ECE5CD]/25 border-2 border-[#C5A85C]/45 text-[#C5A85C] shadow-sm">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C5A85C] font-display font-extrabold">Học Kỳ Tiết Kiệm Tối Ưu</span>
                    <h3 className="font-display text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#800020] mt-0.5">
                      Mô hình Vừa học - Vừa làm (Work &amp; Study)
                    </h3>
                  </div>
                </div>
                <p className="font-sans font-light text-sm text-gray-700 leading-relaxed">
                  Ở năm chuyên ngành thứ 4, rào cản tài chính được dỡ bỏ. Con có thể luân chuyển linh hoạt giữa các tuần học lý thuyết tinh hoa và các kỳ làm việc được ký hợp đồng chính thức, có lương tại các tập đoàn đối tác. Thu nhập thực tế này hoàn toàn có khả năng hỗ trợ đắc lực và tự chi trả học phí cho hai học kỳ cuối cùng của con tại Pháp.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#C5A85C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </ScrollReveal>

        </div>

        {/* Brand partners showcase */}
        <ScrollReveal delayMs={300}>
          <div className="bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x-2 border-b-2 border-x-[#C5A85C]/40 border-b-[#C5A85C]/40 p-8 md:p-12 shadow-[0_20px_50px_rgba(128,0,32,0.06)] text-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-4 text-[#800020]">
              <Network className="w-5 h-5 text-[#C5A85C]" />
              <span className="font-display font-extrabold text-[#C5A85C] text-xs tracking-[0.25em] uppercase gold-text-shimmer">MẠNG LƯỚI ĐỐI TÁC THƯƠNG HIỆU SIÊU XA XỈ</span>
            </div>
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-[#800020] mb-8">
              Mở Cánh Cửa Thực Tập Tại Những Biểu Tượng Danh Giá Nhất Tinh Cầu
            </h3>
            
            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {partners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-5 border border-[#C5A85C]/35 hover:border-[#800020] hover:shadow-[0_10px_25px_rgba(128,0,32,0.08)] transition-all duration-300 flex flex-col justify-center items-center text-center group cursor-default transform hover:-translate-y-0.5"
                >
                  <span className="font-display font-bold text-[#800020] text-sm group-hover:scale-105 transition-transform duration-300 group-hover:text-[#C5A85C] block font-semibold">
                    {partner.name}
                  </span>
                  <span className="text-[9px] text-[#C5A85C] tracking-widest font-sans uppercase mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Note text underneath logos */}
            <div className="mt-8 flex items-center justify-center text-xs text-gray-500 font-sans italic leading-relaxed pt-6 border-t border-[#C5A85C]/15 max-w-3xl mx-auto">
              Sinh viên gia nhập hệ sinh thái đối tác danh giá bao gồm các đại khách sạn Pháp (Ritz, Four Seasons, Le Bristol), các thương hiệu thời trang &amp; nội thất đỉnh cao (Cartier, Gucci, Hermès, Louis Vuitton) hay các biểu tượng văn hóa toàn cầu để mài sắc trải nghiệm lãnh đạo xuất sắc của mình.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
