import { Award, GraduationCap, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function GoldenPassBenefits() {
  return (
    <section className="py-24 bg-ivory text-burgundy-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Balanced Single Column */}
        <div className="max-w-5xl mx-auto">
          
          {/* Exclusive Golden Pass Benefits */}
          <div className="space-y-12">
            <ScrollReveal>
              <div className="space-y-6 text-center flex flex-col items-center">
                <span className="inline-flex items-center space-x-3 text-gold-dark text-xs tracking-[0.25em] uppercase font-display font-bold">
                  <span className="w-8 h-[2px] gold-foil-bg"></span>
                  <span className="gold-text-shimmer">ĐẶC QUYỀN VỆ SĨ VIỆT NAM TRỰC TIẾP</span>
                  <span className="w-8 h-[2px] gold-foil-bg"></span>
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest leading-tight text-burgundy-dark uppercase">
                  Đặc Quyền Vượt Trội Khi Qua LEAP
                </h2>
                <div className="w-24 h-[3px] gold-foil-bg mx-auto shadow-[0_1px_10px_rgba(170,124,17,0.3)]" />
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <p className="font-sans font-light text-base md:text-lg text-gray-700 leading-relaxed text-center-mx-auto text-center max-w-3xl mx-auto">
                Nhận sự đồng hành và bảo trợ toàn diện từ văn phòng LEAP mang lại cho Quý học viên lợi thế ưu tiên vượt trội khi ứng tuyển trước hội đồng tuyển chọn hoàng gia của Học viện Ferrières tại Pháp.
              </p>
            </ScrollReveal>

            {/* Bulleted list of exclusive benefits */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 font-sans pt-8">
              
              <ScrollReveal delayMs={150}>
                <li className="flex flex-col items-center text-center space-y-5 bg-white p-8 luxury-gold-border rounded-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-14 h-14 flex items-center justify-center text-[#D4AF37] luxury-gold-border rounded-full bg-[#FAF2D3]/30">
                    <Award className="w-6 h-6 pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-burgundy tracking-wider mb-3 uppercase">
                      Ưu Tiên Xét Học Bổng Đặc Quyền 30% - 50%
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Hội đồng LEAP làm việc trực tiếp với phòng tài chính học viện Ferrières để ưu tiên xem xét phê duyệt học bổng tài năng trị giá lên tới 30% - 50% tổng học phí.
                    </p>
                  </div>
                </li>
              </ScrollReveal>

              <ScrollReveal delayMs={200}>
                <li className="flex flex-col items-center text-center space-y-5 bg-white p-8 luxury-gold-border rounded-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-14 h-14 flex items-center justify-center text-[#D4AF37] luxury-gold-border rounded-full bg-[#FAF2D3]/30">
                    <GraduationCap className="w-6 h-6 pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-burgundy tracking-wider mb-3 uppercase">
                      Huấn Luyện Phỏng Vấn 1:1
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Chương trình huấn luyện tác phong, thần thái quý tộc, và kịch bản phỏng vấn trực tiếp cùng cựu học sinh hoàng gia hoặc đại sứ của trường tại Việt Nam trước ngày xét tuyển.
                    </p>
                  </div>
                </li>
              </ScrollReveal>

              <ScrollReveal delayMs={250}>
                <li className="flex flex-col items-center text-center space-y-5 bg-white p-8 luxury-gold-border rounded-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-14 h-14 flex items-center justify-center text-[#D4AF37] luxury-gold-border rounded-full bg-[#FAF2D3]/30">
                    <FileText className="w-6 h-6 pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-burgundy tracking-wider mb-3 uppercase">
                      Bảo Trợ 100% Hồ Sơ &amp; Visa Du Học
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Xử lý hoàn tất hồ sơ pháp lý, dịch thuật công chứng tư pháp chuẩn ngành ngoại giao, mở tài khoản phí ký quỹ và hồ sơ xin Visa Schengen đạt tỷ lệ đỗ thực tế 99.2%.
                    </p>
                  </div>
                </li>
              </ScrollReveal>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
