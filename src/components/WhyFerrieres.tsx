import { Award, Landmark, GraduationCap, Utensils, Wine, Pocket, Trees, Users2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function WhyFerrieres() {
  return (
    <div id="why-ferrieres" className="bg-[#FFFFFF] text-[#111827]">
      {/* SECTION 2: AWARENESS */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative elements for luxury châteaux ambiance */}
        <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-[#C5A85C]/25 pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-[#C5A85C]/25 pointer-events-none" />
                <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-flex items-center space-x-3 text-[#C5A85C] text-xs tracking-[0.25em] uppercase font-display font-bold mb-4">
                <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
                <span className="gold-text-shimmer">AWARENESS & PRESTIGE</span>
                <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
              </span>
              <h2 className="font-display text-2xl sm:text-3.5xl md:text-4.5xl font-extrabold tracking-widest leading-snug uppercase mb-6 text-[#800020]">
                Ferrières Paris – Nơi Di Sản Hoàng Gia Gặp Gỡ Đổi Mới Giáo Dục
              </h2>
              <div className="w-24 h-[2px] bg-[#C5A85C] mx-auto mb-6" />
              <p className="font-sans font-light text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Đáp ứng mong mỏi lớn nhất của các bậc phụ huynh: Con được học trong môi trường an toàn, đẳng cấp, nuôi dưỡng khí chất thượng lưu, trí tuệ vượt trội và nhân cách hoàn thiện.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Core Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Core Value 1 */}
            <ScrollReveal delayMs={100}>
              <div className="group relative bg-[#FFFFFF] p-8 md:p-10 border-2 border-[#C5A85C]/35 hover:border-[#C5A85C] transition-all duration-500 shadow-[0_8px_30px_rgba(197,168,92,0.06)] hover:shadow-[0_20px_50px_rgba(128,0,32,0.09)] h-full flex flex-col justify-between transform hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#C5A85C] border-2 border-[#C5A85C]/40 bg-[#ECE5CD]/20 group-hover:bg-[#800020] group-hover:text-[#FFFFFF] transition-colors duration-500 shadow-sm">
                    <Landmark className="w-6 h-6 pointer-events-none" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-wider text-[#800020] uppercase border-b border-[#C5A85C]/20 pb-2">
                    Di sản và Không gian sống đẳng cấp
                  </h3>
                  <p className="font-sans font-light text-sm text-gray-700 leading-relaxed">
                    Học tập ngay bên trong lâu đài <strong>Château de Ferrières</strong> nguy nga cổ kính. Đây không chỉ là giảng đường học thuật, mà là không gian tuyệt mỹ giúp học sinh hoàn toàn thấm nhuần phong thái, quy chuẩn thẩm mỹ tinh tế và lối sống thượng lưu của nước Pháp ngay từ những ngày đầu bước chân tới trường học xá.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#C5A85C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </ScrollReveal>

            {/* Core Value 2 */}
            <ScrollReveal delayMs={200}>
              <div className="group relative bg-[#FFFFFF] p-8 md:p-10 border-2 border-[#C5A85C]/35 hover:border-[#C5A85C] transition-all duration-500 shadow-[0_8px_30px_rgba(197,168,92,0.06)] hover:shadow-[0_20px_50px_rgba(128,0,32,0.09)] h-full flex flex-col justify-between transform hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#C5A85C] border-2 border-[#C5A85C]/40 bg-[#ECE5CD]/20 group-hover:bg-[#800020] group-hover:text-[#FFFFFF] transition-colors duration-500 shadow-sm">
                    <GraduationCap className="w-6 h-6 pointer-events-none" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-wider text-[#800020] uppercase border-b border-[#C5A85C]/20 pb-2">
                    Triết lý Giáo dục Tích cực (Positive Psychology)
                  </h3>
                  <p className="font-sans font-light text-sm text-gray-700 leading-relaxed">
                    Ferrières là trường học đầu tiên trên thế giới xây dựng lộ trình đào tạo dựa trên nền tảng khoa học nhân văn và tâm lý học tích cực. Trường chú trọng phát triển tối đa tiềm năng nội tại, sự tự tin bản lĩnh, hạnh phúc toàn diện và phong cách cá nhân của học sinh thay vị rập khuôn hay gây áp lực điểm số nặng nề.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#C5A85C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION: EDUCATION ECOSYSTEM (Living Lab) */}
      <section id="education-ecosystem" className="py-24 bg-[#F9FAFC] border-t border-[#C5A85C]/15 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-flex items-center space-x-3 text-[#C5A85C] text-xs tracking-[0.25em] uppercase font-display font-bold mb-4">
                <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
                <span className="gold-text-shimmer font-bold">HỆ SINH THÁI ĐÀO TẠO THỰC NGHIỆM 5 SAO</span>
                <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest leading-snug uppercase mb-6 text-[#800020]">
                Mô Hình Thăng Tiến Thực Tế Độc Bản (Living Lab)
              </h2>
              <p className="font-sans font-light text-sm sm:text-base text-gray-650 leading-relaxed max-w-3xl mx-auto font-light">
                Khác biệt hoàn toàn so với các mô hình giảng dạy lý thuyết thông thường, Ferrières Paris sở hữu chuỗi cơ sở hạ tầng tự vận hành quy mô lớn, tạo thành một phòng thí nghiệm sống động cho học viên thực hành hàng ngày.
              </p>
            </div>
          </ScrollReveal>

          {/* Living Lab Grid items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <ScrollReveal delayMs={100}>
              <div className="group bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x border-b border-[#C5A85C]/35 hover:border-[#C5A85C] hover:shadow-[0_15px_35px_rgba(128,0,32,0.1)] transition-all duration-300 p-8 flex flex-col justify-between h-full transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#ECE5CD]/25 border border-[#C5A85C]/35 text-[#C5A85C] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-[0.15em] text-[#C5A85C]">Giảng đường</span>
                  </div>
                  <h4 className="font-display font-extrabold text-base uppercase tracking-wider text-[#800020]">Lớp Học Hiện Đại 2.000 m²</h4>
                  <p className="font-sans text-xs text-gray-650 leading-relaxed font-normal">
                    Khu nghiên cứu học thuật đẳng cấp, trang bị công nghệ phòng Lab chuẩn châu Âu giúp sinh viên tiếp thu tối đa nền tảng lý thuyết và nghiên cứu.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal delayMs={150}>
              <div className="group bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x border-b border-[#C5A85C]/35 hover:border-[#C5A85C] hover:shadow-[0_15px_35px_rgba(128,0,32,0.1)] transition-all duration-300 p-8 flex flex-col justify-between h-full transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#ECE5CD]/25 border border-[#C5A85C]/35 text-[#C5A85C] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-[0.15em] text-[#C5A85C]">Kỹ nghệ ẩm thực</span>
                  </div>
                  <h4 className="font-display font-extrabold text-base uppercase tracking-wider text-[#800020]">Bếp Thực Hành Michelin 2.000 m²</h4>
                  <p className="font-sans text-xs text-gray-650 leading-relaxed font-normal">
                    Không gian chế tác ẩm thực chuyên nghiệp, thực hành các kỹ thuật Michelin danh tiếng trực tiếp dưới sự dẫn dắt của các Bếp trưởng xuất chúng Pháp.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal delayMs={200}>
              <div className="group bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x border-b border-[#C5A85C]/35 hover:border-[#C5A85C] hover:shadow-[0_15px_35px_rgba(128,0,32,0.1)] transition-all duration-300 p-8 flex flex-col justify-between h-full transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#ECE5CD]/25 border border-[#C5A85C]/35 text-[#C5A85C] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300">
                      <Wine className="w-5 h-5" />
                    </div>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-[0.15em] text-[#C5A85C]">Nghệ thuật rượu vang</span>
                  </div>
                  <h4 className="font-display font-extrabold text-base uppercase tracking-wider text-[#800020]">Hầm Rượu Cổ &amp; Phòng Thử 500 m²</h4>
                  <p className="font-sans text-xs text-gray-655 leading-relaxed font-normal">
                    Nơi lưu giữ hàng ngàn chai rượu vang thượng hạng chọn lọc từ khắp nơi trên thế giới, phục vụ riêng cho các khóa chuyên sâu về Quản trị rượu vang.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 4 */}
            <ScrollReveal delayMs={250}>
              <div className="group bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x border-b border-[#C5A85C]/35 hover:border-[#C5A85C] hover:shadow-[0_15px_35px_rgba(128,0,32,0.1)] transition-all duration-300 p-8 flex flex-col justify-between h-full transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#ECE5CD]/25 border border-[#C5A85C]/35 text-[#C5A85C] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300">
                      <Pocket className="w-5 h-5" />
                    </div>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-[0.15em] text-[#C5A85C]">Vận hành thực tế</span>
                  </div>
                  <h4 className="font-display font-extrabold text-base uppercase tracking-wider text-[#800020]">Nhà Hàng &amp; Khách Sạn 4 Sao</h4>
                  <p className="font-sans text-xs text-gray-655 leading-relaxed font-normal">
                    Khuôn viên sở hữu khách sạn 4 sao thượng lưu sầm uất và hệ thống nhà hàng hoạt động thực tế, giúp rèn luyện và mài giũá phản xạ dịch vụ chuẩn mực.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 5 */}
            <ScrollReveal delayMs={300}>
              <div className="group bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x border-b border-[#C5A85C]/35 hover:border-[#C5A85C] hover:shadow-[0_15px_35px_rgba(128,0,32,0.1)] transition-all duration-300 p-8 flex flex-col justify-between h-full transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#ECE5CD]/25 border border-[#C5A85C]/35 text-[#C5A85C] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300">
                      <Trees className="w-5 h-5" />
                    </div>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-[0.15em] text-[#C5A85C]">Vườn sinh thái</span>
                  </div>
                  <h4 className="font-display font-extrabold text-base uppercase tracking-wider text-[#800020]">Vườn Nho Riêng Biệt 2.000 Gốc</h4>
                  <p className="font-sans text-xs text-gray-655 leading-relaxed font-normal">
                    Vườn nho sinh thái riêng biệt phục vụ công tác thực chứng, nghiên cứu chuỗi cung ứng rượu vang và quản lý nông nghiệp du lịch sinh thái cao cấp.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Item 6 */}
            <ScrollReveal delayMs={350}>
              <div className="group bg-[#FFFFFF] border-t-4 border-t-[#800020] border-x border-b border-[#C5A85C]/35 hover:border-[#C5A85C] hover:shadow-[0_15px_35px_rgba(128,0,32,0.1)] transition-all duration-300 p-8 flex flex-col justify-between h-full transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#ECE5CD]/25 border border-[#C5A85C]/24 text-[#C5A85C] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-[0.15em] text-[#C5A85C]">Xã hội học tập</span>
                  </div>
                  <h4 className="font-display font-extrabold text-base uppercase tracking-wider text-[#800020]">Cộng Đồng Đa Văn Hóa &amp; BDE</h4>
                  <p className="font-sans text-xs text-gray-655 leading-relaxed font-normal">
                    Hội hội nhóm sôi nổi được bảo trợ bởi Văn phòng Sinh viên (BDE), tổ chức các sự kiện văn hóa, tiệc đón tân sinh viên, và ngày hội doanh nghiệp kết nối.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
