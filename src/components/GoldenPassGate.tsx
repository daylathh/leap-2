import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2, ShieldCheck, User, Phone, Mail, Award, Landmark, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface LeadFormInputs {
  fullName: string;
  phone: string;
  email: string;
  courseOfInterest: string;
}

export default function GoldenPassGate() {
  const [inputs, setInputs] = useState<LeadFormInputs>({
    fullName: "",
    phone: "",
    email: "",
    courseOfInterest: "Cập nhật sau / Cần tư vấn thêm"
  });

  const [errors, setErrors] = useState<Partial<LeadFormInputs>>({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<LeadFormInputs> = {};
    let isValid = true;

    if (!inputs.fullName.trim()) {
      nextErrors.fullName = "Họ và tên Phụ huynh/Học sinh không được trống";
      isValid = false;
    }

    if (!inputs.phone.trim()) {
      nextErrors.phone = "Số điện thoại bảo mật không được trống";
      isValid = false;
    } else if (!/^\d{9,11}$/.test(inputs.phone.trim().replace(/\s/g, ""))) {
      nextErrors.phone = "Mã điện thoại không đúng định dạng (Ví dụ: 0912345678)";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email.trim()) {
      nextErrors.email = "Địa chỉ email không được trống";
      isValid = false;
    } else if (!emailRegex.test(inputs.email.trim())) {
      nextErrors.email = "Email không đúng định dạng (Ví dụ: chaume@gmail.com)";
      isValid = false;
    }

    setErrors(nextErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="golden-pass-gate" className="py-24 bg-[#FFFFFF] border-t border-[#C5A85C]/35 relative">
      <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-[#C5A85C]/20 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-[#C5A85C]/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-2 text-[#C5A85C] text-xs tracking-[0.25em] uppercase font-display font-bold mb-3">
              <Sparkles className="w-4 h-4 text-[#C5A85C] pointer-events-none animate-pulse" />
              <span className="gold-text-shimmer font-extrabold text-[11px]">ĐẶC QUYỀN CHUYỂN ĐỔI TỐI CAO - GOLDEN PASS</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest leading-snug uppercase mb-4 text-[#800020]">
              Cổng Đăng Ký Nhận Đặc Quyền Golden Pass
            </h2>
            <div className="w-24 h-[2px] bg-[#C5A85C] mx-auto mb-6" />
            <p className="font-sans text-sm text-gray-650 leading-relaxed max-w-2xl mx-auto font-light">
              Mở cánh cửa bước chân trực tiếp vào giới dịch vụ xa hoa châu Âu với tối ưu đặc quyền tài chính trọn bích, chỉ dành riêng cho các hồ sơ nộp qua Đại diện chính thức <span className="text-[#800020] font-extrabold">LEAP Vietnam</span>.
            </p>
          </div>
        </ScrollReveal>

        {/* The Golden Pass Layout */}
        <ScrollReveal delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#C5A85C]/40 shadow-[0_20px_50px_rgba(128,0,32,0.12)] bg-[#FFFFFF]">
            
            {/* Left Box: 3 privileges (0đ) (5 Columns on lg) */}
            <div className="lg:col-span-5 bg-[#800020] text-[#FFFFFF] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Luxury gold glowing radial background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,92,0.15)_0%,transparent_80%)] pointer-events-none" />
              
              <div className="space-y-8 relative z-10 text-left">
                <div>
                  <span className="text-[10px] tracking-[0.22em] text-[#C5A85C] uppercase font-display font-black block mb-2">ĐẶC QUYỀN 3 PHÂN KHÚC</span>
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider leading-tight text-white border-b border-[#C5A85C]/35 pb-4 gold-text-shimmer">
                    Đặc Quyền Golden Pass 0Đ
                  </h3>
                </div>

                <p className="font-sans font-light text-xs sm:text-sm text-red-100 leading-relaxed">
                  Bảo chứng quyền lợi trọn bích của gia đình và học sinh khi ứng tuyển chính ngạch qua LEAP Vietnam:
                </p>

                <div className="space-y-6 pt-2">
                  
                  {/* Privilege 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C5A85C]/20 border border-[#C5A85C] flex items-center justify-center text-[#C5A85C] flex-shrink-0 font-display font-extrabold text-xs">
                      0đ
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-extrabold uppercase tracking-widest text-[#C5A85C] flex items-center gap-2">
                        <span>1. Miễn 100% Phí Dịch Vụ Tư Vấn</span>
                      </h4>
                      <p className="font-sans font-light text-[11px] text-red-100 mt-1 leading-relaxed">
                        Toàn bộ lộ trình thẩm định hồ sơ, quy hoạch nghề nghiệp và phân tách định vị năng lực cho học viên được hỗ trợ hoàn toàn miễn phí từ đầu.
                      </p>
                    </div>
                  </div>

                  {/* Privilege 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C5A85C]/20 border border-[#C5A85C] flex items-center justify-center text-[#C5A85C] flex-shrink-0 font-display font-extrabold text-xs">
                      0đ
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-extrabold uppercase tracking-widest text-[#C5A85C]">
                        2. Miễn 100% Lệ Phí Thi Tuyển &amp; Xét Duyệt
                      </h4>
                      <p className="font-sans font-light text-[11px] text-red-100 mt-1 leading-relaxed">
                        Thí sinh nộp hồ sơ qua cổng LEAP được hội đồng khảo thí của trường tại Pháp bảo lưu đặc cách toàn bích phí sát hạch lý thuyết và phỏng vấn ngoại giao.
                      </p>
                    </div>
                  </div>

                  {/* Privilege 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E6D19E]/20 border border-[#C5A85C] flex items-center justify-center text-[#C5A85C] flex-shrink-0 font-display font-extrabold text-xs">
                      0đ
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-extrabold uppercase tracking-widest text-[#C5A85C]">
                        3. Bảo Chứng Luyện Phỏng Vấn Visa Pháp Lý
                      </h4>
                      <p className="font-sans font-light text-[11px] text-red-100 mt-1 leading-relaxed">
                        Quy trình giả định thử thách động lực, rèn giũa kỹ năng đối thoại thuyết phục cùng chuyên gia Visa hàng đầu của LEAP, đồng hành minh bạch bảo chứng tuyệt đối.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Secure Assurance Badge */}
              <div className="pt-8 border-t border-[#C5A85C]/20 mt-8 relative z-10 flex items-center gap-2 bg-black/20 p-3">
                <ShieldCheck className="w-5 h-5 text-[#C5A85C] flex-shrink-0" />
                <div>
                  <span className="text-[9px] tracking-[0.1em] font-display text-[#E6D19E] font-bold block">CAM KẾT CỔNG CHÍNH NGẠCH</span>
                  <span className="text-[10px] text-white/85 font-sans">An Toàn Pháp Lý &amp; Tối Ưu Đặc Quyền Riêng</span>
                </div>
              </div>

            </div>

            {/* Right Box: Streamlined 4-field Lead Form (7 Columns on lg) */}
            <div className="lg:col-span-7 bg-[#FAF9F6] p-8 sm:p-10 relative overflow-hidden text-[#111827] flex flex-col justify-center">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Title of form */}
                  <div className="text-left border-b border-[#C5A85C]/20 pb-4 mb-2">
                    <h4 className="font-display font-black text-lg text-[#800020] uppercase tracking-wider">
                      Đăng Ký Đánh Giá 1-1 Với Đại Diện LEAP
                    </h4>
                    <p className="font-sans font-light text-xs text-gray-500">
                      Vui lòng bổ sung đầy đủ thông tin bên dưới để kích hoạt mã số đặc quyền Golden Pass.
                    </p>
                  </div>

                  {/* Field 1: Họ tên Phụ huynh/Học sinh */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#C5A85C]" />
                      Họ và tên Phụ huynh / Học sinh <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập họ tên đầy đủ để tiến hành hồ sơ..."
                      value={inputs.fullName}
                      onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#C5A85C]/35 focus:border-[#800020] py-3 px-4 text-xs text-[#111827] placeholder-gray-400 focus:outline-none rounded-none font-sans font-medium transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-[10px] text-red-600 font-semibold italic mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Dual Column Layout (Phone & Email) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Field 2: Số điện thoại bảo mật */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#C5A85C]" />
                        Số điện thoại bảo mật (Zalo) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Ví dụ: 0912345678"
                        value={inputs.phone}
                        onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#C5A85C]/35 focus:border-[#800020] py-3 px-4 text-xs text-[#111827] placeholder-gray-400 focus:outline-none rounded-none font-sans font-medium transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-600 font-semibold italic mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Field 3: Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#C5A85C]" />
                        Địa chỉ Email liên hệ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="chaume@gmail.com"
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#C5A85C]/35 focus:border-[#800020] py-3 px-4 text-xs text-[#111827] placeholder-gray-400 focus:outline-none rounded-none font-sans font-medium transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-600 font-semibold italic mt-1">{errors.email}</p>
                      )}
                    </div>

                  </div>

                  {/* Field 4: Khóa học quan tâm */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#C5A85C]" />
                      Khóa học / Phân khoa quan tâm
                    </label>
                    <div className="relative">
                      <select
                        value={inputs.courseOfInterest}
                        onChange={(e) => setInputs({ ...inputs, courseOfInterest: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#C5A85C]/35 focus:border-[#800020] py-3 px-4 text-xs text-[#111827] focus:outline-none rounded-none font-sans font-medium cursor-pointer appearance-none h-[42px]"
                      >
                        <option value="Bachelor Ferrières (3 năm) – Quản lý Khách sạn, Nhà hàng & Quy trình Dịch vụ Xa xỉ">Bachelor Ferrières (3 năm) – Quản lý Khách sạn, Nhà hàng &amp; Quy trình Dịch vụ Xa xỉ</option>
                        <option value="IBBA Ferrières (4 năm) – Quản trị Kinh doanh Quốc tế BBA chất lượng cao">IBBA Ferrières (4 năm) – Quản trị Kinh doanh Quốc tế BBA chất lượng cao</option>
                        <option value="Mastère / MSc Ferrières (18 - 24 tháng) – Thạc sĩ Quản trị Khách sạn, Sự kiện &amp; Thương hiệu Xa xỉ">Mastère / MSc Ferrières (18 - 24 tháng) – Thạc sĩ Quản trị Khách sạn, Sự kiện &amp; Thương hiệu Xa xỉ</option>
                        <option value="Cursus Honorum / Grande Ecole (5 năm) – Lộ trình Song bằng &amp; Chứng nhận Tối cao Summum Diploma">Cursus Honorum / Grande Ecole (5 năm) – Lộ trình Song bằng &amp; Chứng nhận Tối cao Summum Diploma</option>
                        <option value="Các khóa đào tạo chuyên sâu ngắn hạn (3 - 11 tháng) – Đầu bếp, Làm bánh, Sommelier">Các khóa đào tạo chuyên sâu ngắn hạn (3 - 11 tháng) – Đầu bếp, Làm bánh, Sommelier</option>
                        <option value="Cập nhật sau / Cần tư vấn thêm">Cập nhật sau / Cần tư vấn thêm</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[9px] text-[#C5A85C] pointer-events-none">▼</div>
                    </div>
                  </div>

                  {/* Submission and policy protection */}
                  <div className="pt-4 space-y-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#800020] border border-[#C5A85C]/50 hover:bg-[#590012] hover:border-[#C5A85C] text-[#C5A85C] hover:text-white font-display font-extrabold uppercase tracking-[0.2em] text-xs transition-colors duration-300 shadow flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 rounded-none shadow-[0_4px_15px_rgba(128,0,32,0.15)] gold-shimmer-btn text-white"
                    >
                      {loading ? "ĐANG GỬI THÔNG TIN..." : "ĐĂNG KÝ NHẬN ĐẶC QUYỀN GOLDEN PASS"}
                    </button>

                    <div className="flex items-center justify-center space-x-2 text-[9px] text-gray-500 uppercase tracking-wider font-sans font-bold leading-relaxed pt-2">
                      <ShieldCheck className="w-4 h-4 text-[#C5A85C] flex-shrink-0" />
                      <span>Thông tin số điện thoại &amp; email được mã hóa bảo mật chuẩn ngoại giao</span>
                    </div>
                  </div>

                </form>
              ) : (
                /* Success screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-6 max-w-xl mx-auto"
                >
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-md">
                    <CheckCircle2 className="w-8 h-8 pointer-events-none" />
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] tracking-[0.25em] text-emerald-700 uppercase font-display border-b border-emerald-500/30 pb-1.5 font-bold inline-block">
                      ĐĂNG KÝ GOLDEN PASS THÀNH CÔNG
                    </span>
                    <h3 className="font-display text-xl font-extrabold tracking-widest text-[#800020] uppercase">
                      Kính Chào Quý Khách!
                    </h3>
                    <p className="font-sans font-semibold text-xs text-gray-700 leading-relaxed">
                      Thông tin nhận đặc quyền của quý khách <span className="font-extrabold text-[#C5A85C] gold-text-shimmer">{inputs.fullName}</span> về phân khoa <span className="font-medium text-gray-900">"{inputs.courseOfInterest}"</span> đã được mã hóa bảo mật thành công.
                    </p>
                    <p className="text-[11px] text-gray-500 max-w-lg mx-auto leading-relaxed font-light">
                      Chuyên viên cao cấp thuộc Đại diện chính thức LEAP Vietnam sẽ trực tiếp liên lạc đến số điện thoại <strong className="text-gray-900">{inputs.phone}</strong> trong vòng 24 giờ tiếp theo để xác minh đặc quyền Golden Pass, đặt lịch tư vấn 1-1 và gửi tài liệu chi tiết qua email <strong className="text-gray-900">{inputs.email}</strong>.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setInputs({
                          fullName: "",
                          phone: "",
                          email: "",
                          courseOfInterest: "Cập nhật sau / Cần tư vấn thêm"
                        });
                        setIsSuccess(false);
                      }}
                      className="px-6 py-2 border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-[#C5A85C] text-[10px] tracking-[0.2em] font-display font-bold uppercase rounded-none transition-colors duration-300"
                    >
                      Bổ sung hồ sơ khác
                    </button>
                  </div>
                </motion.div>
              )}

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
