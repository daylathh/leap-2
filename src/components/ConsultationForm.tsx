import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, ShieldCheck, Sparkles, User, Phone, Mail, School, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface LeadInputs {
  parentName: string;
  phone: string;
  email: string;
  studentSchool: string;
  intakeYear: string;
}

export default function ConsultationForm() {
  const [inputs, setInputs] = useState<LeadInputs>({
    parentName: "",
    phone: "",
    email: "",
    studentSchool: "",
    intakeYear: "2026"
  });

  const [errors, setErrors] = useState<Partial<LeadInputs>>({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<LeadInputs> = {};
    let isValid = true;

    if (!inputs.parentName.trim()) {
      nextErrors.parentName = "Họ và tên phụ huynh không được bỏ trống";
      isValid = false;
    }

    if (!inputs.phone.trim()) {
      nextErrors.phone = "Số điện thoại liên hệ không được bỏ trống";
      isValid = false;
    } else if (!/^\d{9,11}$/.test(inputs.phone.trim().replace(/\s/g, ""))) {
      nextErrors.phone = "Số điện thoại không đúng định dạng";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email.trim()) {
      nextErrors.email = "Email nhận tài liệu không được bỏ trống";
      isValid = false;
    } else if (!emailRegex.test(inputs.email.trim())) {
      nextErrors.email = "Email không đúng định dạng (ví dụ: chaume@gmail.com)";
      isValid = false;
    }

    if (!inputs.studentSchool.trim()) {
      nextErrors.studentSchool = "Tên trường hiện tại của con không được bỏ trống";
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
    <div className="bg-[#FFFFFF] text-[#111827]">
      {/* PART 4: THE LEAP ADVANTAGE */}
      <section id="leap-advantage" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#F9FAFC]">
        {/* Elegant geometric frame lines */}
        <div className="absolute top-12 left-12 w-16 h-[1px] bg-[#C5A85C]/25" />
        <div className="absolute top-12 left-12 [1px] h-16 bg-[#C5A85C]/25" />
        <div className="absolute bottom-12 right-12 w-16 h-[1px] bg-[#C5A85C]/25" />
        <div className="absolute bottom-12 right-12 [1px] h-16 bg-[#C5A85C]/25" />

        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <span className="inline-flex items-center space-x-3 text-[#C5A85C] text-xs tracking-[0.25em] uppercase font-display font-bold mb-4">
                <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
                <span className="gold-text-shimmer font-extrabold flex items-center">EXCLUSIVE PARTNERSHIP REPRESENTATION</span>
                <span className="w-8 h-[2px] bg-[#C5A85C]"></span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4.5xl font-extrabold tracking-widest leading-snug uppercase mb-6 text-[#800020]">
                LEAP Vietnam – Cầu Nối Độc Quyền Dẫn Lối Đến Ferrières Paris
              </h2>
              <div className="w-24 h-[2px] bg-[#C5A85C] mx-auto mb-6" />
              <p className="font-sans font-light text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Quý phụ huynh hoàn toàn dỡ bỏ được nỗi lo lắng về rào cản ngoại ngữ hay các thủ tục hành chính phức tạp của nước Pháp. LEAP Vietnam tự hào là đại diện tuyển sinh chính thức tại Việt Nam, cam kết bảo trợ và nâng đỡ toàn diện cho học viên của mình.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Persuasive advantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Advantage 1 */}
            <ScrollReveal delayMs={100}>
              <div className="bg-[#FFFFFF] p-8 border border-[#C5A85C]/15 hover:border-[#C5A85C]/60 hover:shadow-[0_15px_30px_rgba(128,0,32,0.06)] transition-all duration-300 h-full flex flex-col justify-between relative group">
                <div className="space-y-4">
                  <span className="font-display font-bold text-2xl text-[#C5A85C]/35 tracking-widest block">01</span>
                  <h3 className="font-display font-extrabold text-[#800020] text-base sm:text-lg uppercase tracking-wider">
                    Định Hướng Cá Nhân Hóa 1-1
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                    Đội ngũ chuyên viên giàu kinh nghiệm từ LEAP tiến hành đánh giá chi tiết tố chất, năng lực và tính cách của học viên. Từ đó, định vị và chọn đúng chuyên ngành tối ưu (Ẩm thực, Khách sạn hay Quản lý hàng xa xỉ) khớp hoàn hảo với bản thân con.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C5A85C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </ScrollReveal>

            {/* Advantage 2 */}
            <ScrollReveal delayMs={200}>
              <div className="bg-[#FFFFFF] p-8 border border-[#C5A85C]/15 hover:border-[#C5A85C]/60 hover:shadow-[0_15px_30px_rgba(128,0,32,0.06)] transition-all duration-300 h-full flex flex-col justify-between relative group">
                <div className="space-y-4">
                  <span className="font-display font-bold text-2xl text-[#C5A85C]/35 tracking-widest block">02</span>
                  <h3 className="font-display font-extrabold text-[#800020] text-base sm:text-lg uppercase tracking-wider">
                    Luyện Phỏng Vấn Tiêu Chuẩn Hoàng Gia
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                    Buổi phỏng vấn động lực quyết định đến 75% tổng điểm tuyển sinh. LEAP trực tiếp tư vấn tối ưu hóa hồ sơ năng lực cá nhân, mài sắc thư động lực định hướng, và rèn luyện khẩu khí phỏng vấn chuyên biệt cùng cựu học sinh đại sứ cho học viên.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C5A85C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </ScrollReveal>

            {/* Advantage 3 */}
            <ScrollReveal delayMs={300}>
              <div className="bg-[#FFFFFF] p-8 border border-[#C5A85C]/15 hover:border-[#C5A85C]/60 hover:shadow-[0_15px_30px_rgba(128,0,32,0.06)] transition-all duration-300 h-full flex flex-col justify-between relative group">
                <div className="space-y-4">
                  <span className="font-display font-bold text-2xl text-[#C5A85C]/35 tracking-widest block">03</span>
                  <h3 className="font-display font-extrabold text-[#800020] text-base sm:text-lg uppercase tracking-wider">
                    Hỗ Trợ Visa &amp; Thủ Tục Pháp Lý Trọn Gói
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                    Hoàn tất hồ sơ chuyên nghiệp chuẩn ngoại giao trên cổng Etudes en France (Campus France), đồng hành xử lý các hồ sơ chứng minh năng lực tài chính, xếp đặt lịch phỏng vấn xin Visa Schengen với tỷ lệ phê duyệt xuất sắc đạt tới 99.2%.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C5A85C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* PART 5: REGISTRATION LEAD FORM */}
      <section id="lead-form" className="py-24 bg-[#FFFFFF] border-t border-[#C5A85C]/15 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center space-x-2 text-[#C5A85C] text-xs tracking-[0.25em] uppercase font-display font-bold mb-3">
                <Sparkles className="w-4 h-4 text-[#C5A85C] pointer-events-none animate-pulse" />
                <span className="gold-text-shimmer font-extrabold text-[11px]">ĐĂNG KÝ XÉT TUYỂN CHÍNH THỨC</span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-3.5xl font-extrabold tracking-widest leading-snug uppercase mb-4 text-[#800020]">
                Đăng Ký Đánh Giá Năng Lực Du Học Pháp &amp; Nhận Bộ Tài Liệu Hướng Dẫn Chi Tiết
              </h2>
              <div className="w-24 h-[2px] bg-[#C5A85C] mx-auto mb-6" />
              <p className="font-sans text-xs sm:text-sm text-gray-650 leading-relaxed max-w-2xl mx-auto font-light">
                Chỉ dành riêng cho <span className="text-[#800020] font-extrabold">15 phụ huynh đăng ký sớm nhất trong tháng này</span> để nhận đặc quyền tư vấn trực tiếp 1-1 cùng Giám đốc tuyển sinh của LEAP Vietnam và đại diện trường Ferrières tại Paris.
              </p>
            </div>
          </ScrollReveal>

          {/* Form Container block styled like a royal invitation card */}
          <ScrollReveal delayMs={150}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#C5A85C]/40 shadow-[0_20px_50px_rgba(128,0,32,0.12)]">
              
              {/* Left Column: Privileges list (5 cols on lg) */}
              <div className="lg:col-span-5 bg-[#800020] text-[#FFFFFF] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                {/* Subtle dark pattern background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05)_0%,transparent_80%)]" />
                
                <div className="space-y-8 relative z-10">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] text-[#C5A85C] uppercase font-display font-bold block mb-2">ĐẶC QUYỀN ĐĂNG KÝ SỚM</span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide leading-tight text-white border-b border-[#C5A85C]/30 pb-4">
                      Gia Sản Hoàng Gia
                    </h3>
                  </div>

                  <p className="font-sans font-light text-xs sm:text-sm text-red-100 leading-relaxed">
                    Hoàn tất thông tin đăng ký để nhận ngay gói hỗ trợ định hướng chuyên sâu đồng hành cùng con chinh phục chiếc vé du học tại lâu đài di sản Pháp:
                  </p>

                  <div className="space-y-4 pt-2">
                    {/* Privilege 1 */}
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C5A85C]/20 border border-[#C5A85C]/55 flex items-center justify-center text-[#C5A85C] flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#C5A85C]">1. Cẩm Nang Độc Bản 2026</h4>
                        <p className="font-sans font-light text-xs text-red-100 mt-0.5 leading-relaxed">Bộ tài liệu quy chuẩn học xá, các cơ hội học bổng và quy tắc chuẩn bị phỏng vấn đại sứ tại Pháp.</p>
                      </div>
                    </div>

                    {/* Privilege 2 */}
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C5A85C]/20 border border-[#C5A85C]/55 flex items-center justify-center text-[#C5A85C] flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#C5A85C]">2. Đánh Giá Năng Lực 1-1</h4>
                        <p className="font-sans font-light text-xs text-red-100 mt-0.5 leading-relaxed">Buổi tham vấn chuyên biệt 45 phút trực tiếp cùng Giám đốc tuyển sinh để định vị ngành học phù hợp cho con.</p>
                      </div>
                    </div>

                    {/* Privilege 3 */}
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C5A85C]/20 border border-[#C5A85C]/55 flex items-center justify-center text-[#C5A85C] flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#C5A85C]">3. Vé Mời Sự Kiện Đặc Quyền</h4>
                        <p className="font-sans font-light text-xs text-red-100 mt-0.5 leading-relaxed">Ưu tiên đăng ký tham gia các workshop văn hóa và ẩm thực Pháp do Bếp trưởng Michelin trực thuộc trường chủ trì tại Việt Nam.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#C5A85C]/20 mt-8 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] tracking-[0.1em] font-sans text-gray-300 font-medium font-bold">HÌNH THỨC: TRỰC TIẾP HOẶC TRỰC TUYẾN</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Actuall lead form (7 cols on lg) */}
              <div className="lg:col-span-7 bg-[#FDFBF7] p-8 sm:p-10 relative overflow-hidden text-[#111827]">
                
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Field 1: Parent Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#C5A85C]" />
                        Họ và tên Quý Phụ huynh
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập họ tên đầy đủ của Anh/Chị..."
                        value={inputs.parentName}
                        onChange={(e) => setInputs({ ...inputs, parentName: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#C5A85C]/25 focus:border-[#800020] py-2.5 px-4 text-xs text-[#111827] placeholder-gray-400 focus:outline-none rounded-none font-sans font-medium transition-colors"
                      />
                      {errors.parentName && (
                        <p className="text-[10px] text-red-600 font-semibold italic mt-1">{errors.parentName}</p>
                      )}
                    </div>

                    {/* Field 2 & 3: Phone & Email in a 2-Column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#C5A85C]" />
                          Số điện thoại liên hệ (Có Zalo)
                        </label>
                        <input
                          type="tel"
                          placeholder="Nhập số điện thoại liên hệ..."
                          value={inputs.phone}
                          onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                          className="w-full bg-[#FFFFFF] border border-[#C5A85C]/25 focus:border-[#800020] py-2.5 px-4 text-xs text-[#111827] placeholder-gray-400 focus:outline-none rounded-none font-sans font-medium transition-colors"
                        />
                        {errors.phone && (
                          <p className="text-[10px] text-red-600 font-semibold italic mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#C5A85C]" />
                          Địa chỉ Email nhận tài liệu
                        </label>
                        <input
                          type="email"
                          placeholder="Nhập email để nhận tài liệu..."
                          value={inputs.email}
                          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                          className="w-full bg-[#FFFFFF] border border-[#C5A85C]/25 focus:border-[#800020] py-2.5 px-4 text-xs text-[#111827] placeholder-gray-400 focus:outline-none rounded-none font-sans font-medium transition-colors"
                        />
                        {errors.email && (
                          <p className="text-[10px] text-red-600 font-semibold italic mt-1">{errors.email}</p>
                        )}
                      </div>

                    </div>

                    {/* Field 4 & 5: Student School & Expected Intake Year */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Student School */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                          <School className="w-3.5 h-3.5 text-[#C5A85C]" />
                          Trường Cấp 3 / Đại học của con
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập tên trường học..."
                          value={inputs.studentSchool}
                          onChange={(e) => setInputs({ ...inputs, studentSchool: e.target.value })}
                          className="w-full bg-[#FFFFFF] border border-[#C5A85C]/25 focus:border-[#800020] py-2.5 px-4 text-xs text-[#111827] placeholder-gray-400 focus:outline-none rounded-none font-sans font-medium transition-colors"
                        />
                        {errors.studentSchool && (
                          <p className="text-[10px] text-red-600 font-semibold italic mt-1">{errors.studentSchool}</p>
                        )}
                      </div>

                      {/* Expected intake dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#800020] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#C5A85C]" />
                          Năm dự kiến cho con du học Pháp
                        </label>
                        <div className="relative">
                          <select
                            value={inputs.intakeYear}
                            onChange={(e) => setInputs({ ...inputs, intakeYear: e.target.value })}
                            className="w-full bg-[#FFFFFF] border border-[#C5A85C]/22 focus:border-[#800020] py-2.5 px-4 text-xs text-[#111827] focus:outline-none rounded-none font-sans font-semibold cursor-pointer appearance-none h-[38px]"
                          >
                            <option value="2026">Năm 2026</option>
                            <option value="2027">Năm 2027</option>
                            <option value="Khác">Khác / Chưa xác định</option>
                          </select>
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[9px] text-[#C5A85C] pointer-events-none">▼</div>
                        </div>
                      </div>

                    </div>

                    {/* Submit and privacy protection section */}
                    <div className="pt-4 space-y-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-[#800020] border border-[#C5A85C]/50 hover:bg-[#590012] hover:border-[#C5A85C] text-[#C5A85C] font-display font-extrabold uppercase tracking-[0.2em] text-xs transition-colors duration-300 shadow flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 rounded-none shadow-[0_4px_15px_rgba(128,0,32,0.15)] gold-shimmer-btn text-white"
                      >
                        {loading ? "ĐANG GỬI THƯ MỜI..." : "ĐĂNG KÝ NHẬN TƯ VẤN ĐỘC QUYỀN"}
                      </button>

                      <div className="flex items-center justify-center space-x-2 text-[9px] text-gray-500 uppercase tracking-wider font-sans font-bold leading-relaxed pt-2">
                        <ShieldCheck className="w-4 h-4 text-[#C5A85C] flex-shrink-0" />
                        <span>Mọi thông tin đều được cam kết bảo mật theo tiêu chuẩn ngoại giao</span>
                      </div>
                    </div>

                  </form>
                ) : (
                  /* Success Notification screen block */
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
                        MÃ SỐ BẢO TRỢ ĐÃ ĐỒNG BỘ
                      </span>
                      <h3 className="font-display text-xl font-extrabold tracking-widest text-[#800020] uppercase">
                        Đăng Ký Thành Công!
                      </h3>
                      <p className="font-sans font-semibold text-xs text-gray-700 leading-relaxed">
                        Kính gửi Anh/Chị, thông tin ứng tuyển của học sinh trường <span className="font-extrabold text-[#C5A85C] gold-text-shimmer">{inputs.studentSchool}</span> đã được ghi nhận trên hệ thống tuyển sinh của trường.
                      </p>
                      <p className="text-[11px] text-gray-650 max-w-lg mx-auto leading-relaxed font-light">
                        Đội ngũ Giám đốc tuyển sinh LEAP Vietnam x Ferrières tại Hà Nội &amp; TP. Hồ Chí Minh sẽ trực tiếp liên lạc với Quý phụ huynh qua số điện thoại <strong className="text-gray-950">{inputs.phone}</strong> trong vòng 24 giờ tới để gửi Bộ tài liệu và hẹn lịch tư vấn 1-1. Lịch trình cũng sẽ phản hồi về Email: <strong className="text-gray-950">{inputs.email}</strong>.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setInputs({
                            parentName: "",
                            phone: "",
                            email: "",
                            studentSchool: "",
                            intakeYear: "2026"
                          });
                          setIsSuccess(false);
                        }}
                        className="px-6 py-2 border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-[#C5A85C] text-[10px] tracking-[0.2em] font-display font-bold uppercase rounded-none transition-colors duration-300"
                      >
                        Quay Lại 
                      </button>
                    </div>
                  </motion.div>
                )}

              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
