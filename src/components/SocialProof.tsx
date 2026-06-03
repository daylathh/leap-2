import { useState } from "react";
import { Play, Quote, Star, Award, Sparkles, User, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState<"video" | "quotes">("video");
  const [isPlayingSim, setIsPlayingSim] = useState(false);

  // Elite Parents Quotes
  const parentQuotes = [
    {
      parent: "Bà Nguyễn Khánh Chi",
      position: "Phó Tổng Giám Đốc Tập Đoàn Tài Chính & Ngân Hàng",
      child: "Minh Anh (Cử nhân Khóa 2021, hiện là Trợ lý Giám đốc Vận hành tại tập đoàn Hyatt)",
      quote: "Đưa con sang một đất nước xa xôi tự sinh hoạt là điều khiến gia đình trăn trở suốt lớp 12. May mắn nhờ sự đồng hành của LEAP Vietnam, con không chỉ hoàn tất hồ sơ mà còn được huấn luyện chuẩn phong cách ứng xử của giới phục vụ cao cấp. Sau 4 năm tại lâu đài Ferrières, tôi thực sự ngỡ ngàng trước bản lĩnh ứng đối, sự trưởng thành lịch lãm và tác phong làm việc của con. Đầu tư cho con học tại Ferrières là quyết định đúng đắn nhất của cuộc đời tôi."
    },
    {
      parent: "GS. TS. Bác sĩ Trịnh Văn Thuận",
      position: "Thành viên Hội đồng Y khoa Quốc tế tại Việt Nam",
      child: "Trọng Nghĩa (Thạc sĩ QTKD Luxury Brand Management tại trường)",
      quote: "Ở góc độ khoa học giáo dục, mô hình tâm lý học tích cực của Ferrières thực sự vượt trội. Nó giúp con tôi tự khám phá tiềm năng lớn nhất của chính mình chứ không rập khuôn áp lực. Cháu đi học với nhiều hứng khởi, hòa nhập rất nhanh vào ban đại diện sinh viên (BDE). Sự đồng hành sát sao của đại diện LEAP từ chuẩn bị hồ sơ đến việc hỗ trợ thẻ tạm trú Pháp (OFII) giúp các bậc làm cha làm mẹ như chúng tôi hoàn toàn an tâm ở quê nhà."
    }
  ];

  // Alumni stories
  const alumniVideoSim = {
    title: "Hành trình từ học sinh THPT đến Đại sứ Thương hiệu Louis Vuitton Paris",
    alumnus: "Lê Minh Thảo",
    classYear: "Alumni Cử nhân Quản trị Khách sạn Quốc tế & Luxury 2022",
    description: "Hãy bật xem video ngắn để lắng nghe Thảo chia sẻ cuộc sống thực tế trong khuôn viên lâu đài, rào cản tiếng Anh đã được giải phóng ra sao và LEAP Vietnam đã nâng đỡ cô từ hồ sơ đầu tiên như thế nào.",
    thumbnailUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200"
  };

  return (
    <section id="social-proof" className="py-24 bg-[#FAF9F6] relative overflow-hidden text-[#111827]">
      {/* Visual luxury castle style background assets */}
      <div className="absolute top-12 left-12 w-20 h-[1px] bg-[#C5A85C]/20" />
      <div className="absolute top-12 left-12 w-[1px] h-20 bg-[#C5A85C]/20" />
      <div className="absolute bottom-12 right-12 w-20 h-[1px] bg-[#C5A85C]/20" />
      <div className="absolute bottom-12 right-12 w-[1px] h-20 bg-[#C5A85C]/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-3 text-[#C5A85C] text-xs tracking-[0.3em] uppercase font-display font-bold mb-4">
              <span className="w-8 h-[1px] bg-[#C5A85C]"></span>
              <span className="gold-text-shimmer">SOCIAL PROOF &amp; REAL JOURNEYS</span>
              <span className="w-8 h-[1px] bg-[#C5A85C]"></span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4.5xl font-extrabold tracking-widest leading-snug uppercase mb-6 text-[#800020]">
              Bảo Chứng Thực Tế Từ Người Đi Trước
            </h2>
            <div className="w-24 h-[2px] bg-[#C5A85C] mx-auto mb-6" />
            <p className="font-sans font-light text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Không gì chân thực hơn tiếng lòng tự hào của những bậc làm cha mẹ và thành công rực rỡ của các thế hệ cựu học sinh Việt Nam đi trước.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#ECE5CD]/20 p-1 border border-[#C5A85C]/35">
            <button
              onClick={() => { setActiveTab("video"); setIsPlayingSim(false); }}
              className={`px-8 py-3 font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "video"
                  ? "bg-[#800020] text-white shadow-md border border-[#C5A85C]"
                  : "text-gray-700 hover:text-[#800020]"
              }`}
            >
              Video Câu Chuyện Alumni
            </button>
            <button
              onClick={() => setActiveTab("quotes")}
              className={`px-8 py-3 font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "quotes"
                  ? "bg-[#800020] text-white shadow-md border border-[#C5A85C]"
                  : "text-gray-700 hover:text-[#800020]"
              }`}
            >
              Chia Sẻ Của Cựu Phụ Huynh
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === "video" ? (
          /* Alumni Video Interactive Container */
          <ScrollReveal delayMs={100}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] border-2 border-[#C5A85C]/30 shadow-xl overflow-hidden p-6 sm:p-8 md:p-10">
              
              {/* Simulated Premium Video Box (7 Columns on lg) */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 w-full bg-black group overflow-hidden border border-[#C5A85C]/30 flex items-center justify-center">
                {!isPlayingSim ? (
                  <>
                    {/* Background screen */}
                    <img
                      src={alumniVideoSim.thumbnailUrl}
                      alt="Alumni Video"
                      className="absolute inset-0 w-full h-full object-cover object-center filter opacity-80 brightness-[0.7] group-hover:scale-105 transition-transform duration-550"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient overlap */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                    
                    {/* Play buttons */}
                    <button
                      onClick={() => setIsPlayingSim(true)}
                      className="w-20 h-20 rounded-full bg-white/10 hover:bg-[#800020] text-[#C5A85C] hover:text-white border-2 border-[#C5A85C]/60 flex items-center justify-center backdrop-blur-md cursor-pointer transition-all duration-300 shadow-[0_0_30px_rgba(197,168,92,0.4)] relative z-10 scale-100 group-hover:scale-110"
                    >
                      <Play className="w-8 h-8 fill-current pointer-events-none stroke-none translate-x-[2px]" />
                    </button>

                    <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10 pointer-events-none">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A85C] font-display font-extrabold block mb-1">VIDEO PHỎNG VẤN TRỰC TIẾP</span>
                      <h4 className="font-display font-extrabold text-sm sm:text-base tracking-wide uppercase line-clamp-1">{alumniVideoSim.title}</h4>
                      <p className="font-sans font-light text-xs text-gray-300 mt-1">Đồng hành độc quyền cùng {alumniVideoSim.alumnus}</p>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/60 border border-[#C5A85C]/40 text-[#C5A85C] text-[9px] uppercase tracking-widest font-mono py-1 px-3">
                      Duration: 2:45
                    </div>
                  </>
                ) : (
                  /* Playing Simulation details with subtitle flow */
                  <div className="absolute inset-0 bg-[#0A0506] flex flex-col justify-between p-6 sm:p-8 text-white relative">
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => setIsPlayingSim(false)}
                        className="text-xs uppercase text-[#C5A85C] tracking-widest font-display border border-[#C5A85C]/40 py-1 px-3 cursor-pointer hover:bg-[#800020] hover:text-white"
                      >
                        Tắt Video
                      </button>
                    </div>

                    <div className="text-left py-2">
                      <div className="flex items-center gap-2 text-[#C5A85C] text-[10px] tracking-wider uppercase font-display font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Ký ức Ferrières &amp; LEAP Vietnam</span>
                      </div>
                      <h4 className="text-sm font-display uppercase tracking-wider font-extrabold text-white mt-1 border-b border-[#C5A85C]/20 pb-2">
                        {alumniVideoSim.alumnus}
                      </h4>
                    </div>

                    {/* Subtitle simulation boxes */}
                    <div className="space-y-4 my-auto py-4 text-center max-w-xl mx-auto font-sans">
                      <p className="text-red-100 italic text-sm md:text-base leading-relaxed">
                        "...Ngày đầu đặt chân đến Paris tôi cực kỳ bỡ ngỡ và yếu ngoại ngữ. Thật may, LEAP đã kết nối tôi trực tiếp với các anh chị khóa trên ở học xá lâu đài dỡ bỏ rào cản đó. Khóa thực tập năm 1, các chuyên viên LEAP cũng theo sát tư vấn, rèn kĩ năng phỏng vấn để tôi đỗ kỳ thực tập sang trọng tại đại sảnh của kinh đô ánh sáng..."
                      </p>
                      <div className="flex justify-center items-center gap-1 text-[#C5A85C]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                    </div>

                    <div className="text-center text-[10px] uppercase font-display tracking-widest text-gray-400">
                      Cực kỳ an tâm cùng Cổng Đại Diện tuyển sinh chính thức LEAP Vietnam
                    </div>
                  </div>
                )}
              </div>

              {/* Text Description Box (5 Columns on lg) */}
              <div className="lg:col-span-5 text-left flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#800020]/10 border border-[#800020]/20 py-1.5 px-4 mb-4">
                    <Award className="w-4 h-4 text-[#C5A85C]" />
                    <span className="text-[10px] font-display font-extrabold tracking-widest text-[#800020] uppercase">
                      Hành Trình Khởi Nghiệp Viên Mãn
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#800020] uppercase leading-tight mb-4">
                    {alumniVideoSim.alumnus}
                  </h3>
                  <p className="font-display font-bold text-xs text-[#C5A85C] uppercase tracking-wider mb-3">
                    {alumniVideoSim.classYear}
                  </p>

                  <p className="font-sans font-light text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {alumniVideoSim.description}
                  </p>
                </div>

                <div className="space-y-4 border-t border-[#C5A85C]/25 pt-6">
                  <div className="flex items-center gap-3">
                    <p className="font-sans font-semibold text-xs text-gray-900 uppercase tracking-wide">
                      Được LEAP bảo trợ quy trình tuyển sinh 100%
                    </p>
                  </div>
                  <p className="font-sans font-light text-xs text-gray-500">
                    Sự hỗ trợ toàn bích của LEAP Vietnam trải dài từ lúc làm hồ sơ năng lực, ôn luyện năng lực đàm thoại tiếng Anh, cho tới khi định cư và ổn định công việc bên Pháp.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        ) : (
          /* Parents Quotes Tab Display */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentQuotes.map((q, idx) => (
              <div key={idx} className="h-full">
                <ScrollReveal delayMs={100 * (idx + 1)} className="h-full">
                  <div className="bg-[#FFFFFF] border-l-4 border-l-[#800020] border-y border-r border-[#C5A85C]/25 p-8 shadow-md flex flex-col justify-between h-full relative group">
                  <div className="absolute top-4 right-4 text-[#C5A85C]/20 pointer-events-none">
                    <Quote className="w-14 h-14 pointer-events-none fill-current" />
                  </div>
                  
                  <div className="space-y-6 relative z-10 text-left">
                    {/* Star feedback representation */}
                    <div className="flex items-center gap-1 text-[#C5A85C]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>

                    <p className="font-sans italic text-sm text-gray-700 leading-relaxed">
                      "{q.quote}"
                    </p>
                  </div>

                  <div className="border-t border-[#C5A85C]/25 pt-6 mt-8 text-left relative z-10 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ECE5CD]/30 border border-[#C5A85C]/45 flex items-center justify-center text-[#800020] font-sans font-bold text-xs flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm uppercase text-[#800020]">{q.parent}</h4>
                      <p className="font-sans text-[11px] text-[#C5A85C] font-semibold">{q.position}</p>
                      <p className="font-sans text-[10px] text-gray-500 mt-1 italic">Phụ huynh học sinh: {q.child}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
