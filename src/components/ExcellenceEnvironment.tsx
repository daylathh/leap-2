import { Users, Play, Target, Globe, Landmark, Wine, Flame, Building2, Eye, ShieldCheck, HeartHandshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ExcellenceEnvironment() {
  const campusFacts = [
    { title: "PHÒNG BẾP THỰC HÀNH", value: "2.000 m²", desc: "Dành riêng cho nghiên cứu, phát triển nghệ thuật ẩm thực chuẩn Michelin và huấn luyện tay nghề thực tế.", icon: Flame },
    { title: "KHU VỰC LỚP HỌC", value: "2.000 m²", desc: "Giảng đường đẳng cấp, tích hợp trang thiết bị tương tác công nghệ cao chuẩn mực Châu Âu.", icon: Landmark },
    { title: "HẦM RƯỢU & KHU THỬ RƯỢU", value: "500 m²", desc: "Sở hữu hàng ngàn chai rượu vang tuyển chọn, nơi rèn luyện khứu giác và kiến thức Sommelier thượng lưu.", icon: Wine },
    { title: "KHU LỄ TÂN & SỰ KIỆN", value: "4.500 m²", desc: "Đại sảnh đón tiếp hoàng gia, vận hành trực tiếp các diễn đàn kinh tế và sự kiện ngoại giao quốc tế.", icon: Building2 },
    { title: "VƯỜN NHO HOÀNG TRIỀU", value: "2.000 Gốc", desc: "Khu vực nuôi lớn di sản làm rượu vang Pháp danh giá ngay trong khuôn viên lâu đài lịch sử.", icon: Globe },
    { title: "HUMAN TECH VALLEY", value: "12.000 m²", desc: "Trung tâm đổi mới công nghệ cao, kiến tạo bước đệm chuyển đổi số và AI trong ngành dịch vụ xa sỉ.", icon: Target }
  ];

  return (
    <section id="excellence-environment" className="py-24 bg-[#FAF9F6] relative overflow-hidden text-[#111827]">
      {/* Editorial aesthetic grid lines */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-red-200/20 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-red-200/20 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#800020]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-3 text-[#800020] text-xs tracking-[0.3em] uppercase font-display font-bold mb-4">
              <span className="w-8 h-[1px] bg-[#800020]"></span>
              <span>THE EXCELLENCE ENVIRONMENT</span>
              <span className="w-8 h-[1px] bg-[#800020]"></span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-3.5xl font-extrabold tracking-widest leading-snug uppercase mb-4 text-[#800020]">
              Khẳng Định Giá Trị Của Môi Trường Học Tập Chuẩn Mực
            </h2>
            <div className="w-24 h-[2px] bg-[#800020] mx-auto mb-6" />
            <p className="font-sans font-light text-sm sm:text-base text-gray-750 leading-relaxed max-w-3xl mx-auto">
              Tọa lạc tại lâu đài lịch sử danh giá <strong className="text-[#800020] font-semibold">Château de Ferrières XIX thế kỷ</strong> gần Paris, Ferrières School Paris mang lại không gian học tập di sản tối thượng, hợp nhất triết lý tinh hoa dịch vụ Pháp và phương pháp quản trị hiện đại.
            </p>
          </div>
        </ScrollReveal>

        {/* Château de Ferrières Heritage Gallery */}
        <ScrollReveal delayMs={50}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
            {/* Image 1: Main exterior look (Takes 7 columns on md/lg, gives dramatic epic vibe) */}
            <div className="md:col-span-7 group relative overflow-hidden bg-gray-950 aspect-[16/10] md:aspect-auto md:h-[450px]">
              <img 
                src="/discover-history-image-gallery-image-5-1.jpg" 
                alt="Château de Ferrières Exterior" 
                className="w-full h-full object-cover object-center group-hover:scale-105 duration-700 ease-out transition-transform filter brightness-[0.93]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] tracking-[0.2em] font-display font-extrabold text-[#C5A85C] uppercase block mb-1">KIẾN TRÚC NGOẠI THẤT</span>
                <h4 className="font-display font-bold text-white text-base sm:text-lg uppercase tracking-wider">Lâu Đài Château de Ferrières Thế Kỷ XIX</h4>
                <p className="font-sans font-light text-xs text-red-100/80 mt-1 max-w-lg">Khuôn viên di sản hoàng gia nguy nga rộng lớn, mang đậm dấu ấn kiến trúc Phục Hưng Pháp tinh tế.</p>
              </div>
            </div>

            {/* Inner & Landscape Gallery (Takes 5 columns) */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Image 2: Interior */}
              <div className="group relative overflow-hidden bg-gray-950 aspect-[16/9] md:h-[212px]">
                <img 
                  src="/Ferrieres-en-Brie_-_Chateau_de_Ferrieres_-_Interieur_-8.jpg" 
                  alt="Château de Ferrières Interior"
                  className="w-full h-full object-cover object-center group-hover:scale-105 duration-700 ease-out transition-transform filter brightness-[0.93]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-5 right-5 text-left">
                  <span className="text-[9px] tracking-[0.2em] font-display font-extrabold text-[#C5A85C] uppercase block mb-1">KHÔNG GIAN NỘI THẤT HOÀNG GIA</span>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base uppercase tracking-wider font-extrabold">Đại Sảnh Đón Tiếp &amp; Đọc Sách Hoàng Gia</h4>
                </div>
              </div>

              {/* Image 3: Outdoors / details */}
              <div className="group relative overflow-hidden bg-[#800020] aspect-[16/9] md:h-[212px]">
                <img 
                  src="/discover-history-image-other-1.jpg" 
                  alt="Château de Ferrières Culture"
                  className="w-full h-full object-cover object-center group-hover:scale-105 duration-700 ease-out transition-transform filter brightness-[0.93]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-5 right-5 text-left">
                  <span className="text-[9px] tracking-[0.2em] font-display font-extrabold text-[#C5A85C] uppercase block mb-1">CÁI NÔI NGHỆ THUẬT SỐNG &amp; VĂN HÓA PHÁP</span>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base uppercase tracking-wider font-extrabold">Sự Giao Thoa Di Sản &amp; Thiên Nhiên</h4>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Exclusive PAP Infographic Grid */}
        <ScrollReveal delayMs={100}>
          <div className="bg-white border-2 border-[#800020]/30 shadow-xl overflow-hidden mb-20 rounded-none">
            
            {/* Header Box Row */}
            <div className="bg-[#800020] text-white p-8 sm:p-10 text-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,168,92,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] tracking-[0.25em] text-red-200 font-display font-black block uppercase">
                  MÔ HÌNH ĐÀO TẠO THỰC CHIẾN ĐỘC QUYỀN
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-widest uppercase text-white leading-tight">
                  Chương Trình PAP &amp; Nền Tảng Đẳng Cấp
                </h3>
                <p className="font-sans font-light text-xs sm:text-sm text-red-100 max-w-3xl mx-auto leading-relaxed">
                  Thiết kế tinh giản, kết hợp giữa mô hình rèn luyện thực chứng cao độ, 100% bằng tiếng Anh và trải nghiệm di sản văn hóa hoàng gia hoàng kim nước Pháp.
                </p>
              </div>
            </div>

            {/* Content Columns (1/3 space each) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-150">
              
              {/* Column 1 */}
              <div className="p-8 sm:p-10 hover:bg-[#FAF9F6] transition-colors duration-300 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#800020]/5 border border-[#800020]/20 text-[#800020] flex items-center justify-center font-display font-black">
                      PAP
                    </div>
                  </div>
                  <h4 className="font-display font-black text-base sm:text-lg text-[#800020] uppercase tracking-wider mb-3">
                    Đào Tạo Thực Chiến PAP
                  </h4>
                  <p className="font-sans font-medium text-xs text-gray-500 mb-4 tracking-wider uppercase">
                    Programme Accélérateur de Professionnalisation
                  </p>
                  <p className="font-sans font-light text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Chương trình đặc trưng độc quyền hướng tới mục tiêu kép: Nhúng mình thực chứng (in-situ) vào thực tế ngành Khách sạn, Ẩm thực và Xa xỉ bên cạnh giới chuyên gia xuất sắc; đồng thời trui rèn bản lĩnh để thích ứng trực tiếp với những áp lực và tiêu chuẩn khắt khe nhất của môi trường làm việc thực tế.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="p-8 sm:p-10 hover:bg-[#FAF9F6] transition-colors duration-300 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#800020]/5 border border-[#800020]/20 text-[#800020] flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-display font-black text-base sm:text-lg text-[#800020] uppercase tracking-wider mb-3">
                    Giảng Dạy 100% Tiếng Anh
                  </h4>
                  <p className="font-sans font-medium text-xs text-gray-500 mb-4 tracking-wider uppercase">
                    Global English Instruction
                  </p>
                  <p className="font-sans font-light text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Toàn bộ các chuyên ngành cử nhân và thạc sỹ chất lượng cao tại lâu đài đều được giảng dạy chuẩn bằng tiếng Anh quốc tế, loại bỏ hoàn toàn rào cản tiếng Pháp để các em tự tin học tập, sải cánh gia nhập mạng lưới tài chính đa quốc gia.
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="p-8 sm:p-10 hover:bg-[#FAF9F6] transition-colors duration-300 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#800020]/5 border border-[#800020]/20 text-[#800020] flex items-center justify-center">
                      <Landmark className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-display font-black text-base sm:text-lg text-[#800020] uppercase tracking-wider mb-3">
                    Cái Nôi Dịch Vụ Hoàng Gia Pháp
                  </h4>
                  <p className="font-sans font-medium text-xs text-gray-500 mb-4 tracking-wider uppercase">
                    French Luxury Heritage
                  </p>
                  <p className="font-sans font-light text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Học tập ngay tại tòa lâu đài Château de Ferrières nguy nga cổ kính thế kỷ XIX. Sinh viên được trực tiếp đắm mình vào cái nôi văn hóa dịch vụ cao cấp của nước Pháp, thấu hiểu tường nhận quy tắc ứng xử lễ nghi ngoại giao hoàng triều thanh nhã.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Living Labs Block: Grid of 6 facts */}
        <div className="mb-10">
          <ScrollReveal>
            <div className="text-left max-w-2xl mb-12">
              <span className="text-[10px] tracking-[0.25em] font-display font-black uppercase text-red-700 block mb-2">HỆ SINH THÁI TIỆN LỢI - LIVING LAB</span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#800020] uppercase tracking-wider">
                Cơ Sở Vật Chất &amp; Phòng Thí Nghiệm Sống Động
              </h3>
              <p className="font-sans font-light text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Tất cả học viên đều được đắm mình hàng ngày trong hệ sinh thái thật của trường nhằm trui rèn bản lĩnh nghiệp vụ kiệt xuất:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFacts.map((fact, idx) => {
              const IconComp = fact.icon;
              return (
                <div key={idx} className="h-full">
                  <ScrollReveal delayMs={50 * idx} className="h-full">
                    <div className="bg-white border border-gray-150 p-6 lg:p-8 flex flex-col justify-between h-full hover:shadow-[0_15px_40px_rgba(128,0,32,0.06)] transition-all duration-300 group relative">
                      <div className="absolute top-0 right-0 w-8 h-8 bg-[#FAF9F6] border-l border-b border-gray-250/30 flex items-center justify-center text-[9px] font-mono text-gray-400 group-hover:text-[#800020] transition-colors">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                      
                      <div className="text-left">
                        <div className="w-12 h-12 bg-[#800020]/5 rounded-none flex items-center justify-center text-[#800020] mb-6 group-hover:bg-[#800020] group-hover:text-white transition-colors duration-300">
                          <IconComp className="w-5 h-5 pointer-events-none" />
                        </div>
                        <h4 className="font-display font-black text-lg text-gray-950 uppercase mb-3 group-hover:text-[#850020] transition-colors">
                          {fact.value}
                        </h4>
                        <h5 className="font-display font-extrabold text-[#800020] text-xs uppercase tracking-wider mb-2">
                          {fact.title}
                        </h5>
                        <p className="font-sans font-light text-xs text-gray-500 leading-relaxed">
                          {fact.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
