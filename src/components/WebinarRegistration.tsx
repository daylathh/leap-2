import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, Users, X, Check, BellRing } from "lucide-react";
import { WebinarFormInputs } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function WebinarRegistration() {
  // Target date set to June 15th, 2026 (or dynamic offset based on current date)
  const targetTime = new Date("2026-06-15T19:30:00Z").getTime();
  
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputs, setInputs] = useState<WebinarFormInputs>({ fullname: "", phone: "" });
  const [errors, setErrors] = useState<Partial<WebinarFormInputs>>({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  // Tick every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      let diff = targetTime - now;
      
      // If the static date passed, let's make a dynamic target 7 days ahead
      if (diff <= 0) {
        const futureTarget = now + 7 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000;
        diff = futureTarget - now;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  // Handle modal submit
  const handleModalSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<WebinarFormInputs> = {};
    if (!inputs.fullname.trim()) {
      nextErrors.fullname = "Họ và tên không được để trống";
    }
    if (!inputs.phone) {
      nextErrors.phone = "Số điện thoại không được để trống";
    } else if (!/^\d{10}$/.test(inputs.phone.replace(/\s/g, ""))) {
      nextErrors.phone = "Số điện thoại không hợp lệ (cần đủ 10 chữ số)";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsRegistered(true);
    }, 1000);
  };

  return (
    <section id="webinar" className="py-24 bg-luxury-black text-gray-800 relative overflow-hidden">
      
      {/* Background visual graphics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.06)_0%,rgba(255,255,255,0)_80%)] z-0 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Box Outer Container wrapped with ScrollReveal */}
        <ScrollReveal>
          <div className="border-[2px] gold-metallic-border bg-white rounded-none p-8 sm:p-12 md:p-16 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 gold-foil-bg" />
            
            {/* Urgency Badge */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 gold-shimmer-btn text-burgundy-dark text-[9px] tracking-[0.2em] uppercase font-display font-black px-6 py-2 rounded-none border border-[#F3E5AB]/40 shadow-md shrink-0 flex items-center space-x-2">
              <BellRing className="w-3.5 h-3.5 pointer-events-none animate-bounce" />
              <span>15 SUẤT THAM DỰ GIỚI HẠN</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-4">
              
              {/* Left Portion of Content - 7 Cols */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-3 text-gold-dark text-xs tracking-[0.25em] uppercase font-display font-semibold">
                  <Calendar className="w-4 h-4 text-[#D4AF37] pointer-events-none" />
                  <span className="gold-text-shimmer">WEBINAR TRỰC TUYẾN ĐỘC QUYỀN HỘI VÀNG</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest leading-tight text-burgundy-dark uppercase">
                  Bước Vào Thế Giới<br />
                  <span className="gold-text-shimmer text-gold-dark">Quản Trị Xa Xỉ</span>
                </h2>

                <p className="font-sans font-light text-sm sm:text-base text-gray-700 leading-relaxed">
                  Buổi hội thảo trực tuyến độc quyền cung cấp bức tranh hoàn cảnh hoàng kim về cách thức vận hành của ngành dịch vụ xa hoa bậc nhất tại Pháp. Lắng nghe trực tiếp từ Giám đốc Tuyển sinh Ferrières Paris học thuật cao cấp và cố vấn tối cao LEAP về lộ trình học bổng đặc khu.
                </p>

                {/* Webinar facts list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-burgundy pt-2">
                  <div className="flex items-center space-x-3 bg-white p-4 rounded-none border border-[#D4AF37]/35 shadow-sm font-semibold">
                    <Clock className="w-4 h-4 text-[#D4AF37] pointer-events-none" />
                    <span className="tracking-wide">THỜI GIAN: 19:30 • THỨ BẢY</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white p-4 rounded-none border border-[#D4AF37]/35 shadow-sm font-semibold">
                    <Users className="w-4 h-4 text-[#D4AF37] pointer-events-none" />
                    <span className="tracking-wide">KÊNH TRỰC TUYẾN: ZOOM VIP</span>
                  </div>
                </div>
              </div>

              {/* Right Portion (Countdown Timer & Button) - 5 Cols */}
              <div className="lg:col-span-5 bg-[#FCFAF2] p-8 rounded-none border border-[#D4AF37]/45 text-center flex flex-col justify-center space-y-8 shadow-md text-burgundy-dark">
                
                {/* Event Title descriptor */}
                <div className="space-y-1">
                  <h4 className="font-display text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-bold gold-text-shimmer">Hạn Đăng Ký Còn Lại</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-sans tracking-widest">Thời gian đếm ngược trực tiếp:</p>
                </div>

                {/* Real-time Javascript Countdown clock formatted strictly as Vietnamese */}
                <div className="grid grid-cols-4 gap-2 select-none">
                  
                  {/* Days */}
                  <div className="bg-white border border-[#D4AF37]/35 py-3.5 rounded-none shadow-sm">
                    <div className="font-display text-2xl sm:text-3xl text-[#D4AF37] font-extrabold gold-text-shimmer">{timeLeft.days}</div>
                    <div className="text-[9px] text-burgundy/80 uppercase tracking-widest mt-1 font-display font-semibold">Ngày</div>
                  </div>

                  {/* Hours */}
                  <div className="bg-white border border-[#D4AF37]/35 py-3.5 rounded-none shadow-sm">
                    <div className="font-display text-2xl sm:text-3xl text-[#D4AF37] font-extrabold gold-text-shimmer">{timeLeft.hours}</div>
                    <div className="text-[9px] text-burgundy/80 uppercase tracking-widest mt-1 font-display font-semibold">Giờ</div>
                  </div>

                  {/* Minutes */}
                  <div className="bg-white border border-[#D4AF37]/35 py-3.5 rounded-none shadow-sm">
                    <div className="font-display text-2xl sm:text-3xl text-[#D4AF37] font-extrabold gold-text-shimmer">{timeLeft.minutes}</div>
                    <div className="text-[9px] text-burgundy/80 uppercase tracking-widest mt-1 font-display font-semibold">Phút</div>
                  </div>

                  {/* Seconds */}
                  <div className="bg-white border border-[#D4AF37]/45 py-3.5 rounded-none shadow-sm">
                    <div className="font-display text-2xl sm:text-3xl text-burgundy font-extrabold animate-pulse">{timeLeft.seconds}</div>
                    <div className="text-[9px] text-burgundy/80 uppercase tracking-widest mt-1 font-display font-semibold">Giây</div>
                  </div>

                </div>

                {/* Action Button: Opens the modal with gold metallic sweep */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 gold-shimmer-btn text-burgundy-dark font-display font-bold tracking-[0.2em] text-[10px] uppercase rounded-none shadow-md cursor-pointer"
                >
                  XÁC THỰC GIỮ CHỖ WEBINAR
                </button>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Elegant Modal Pop-up with a Quick Input Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body Container with luxury borders */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="bg-[#FCFAF2] border-[2px] gold-metallic-border p-8 rounded-none max-w-md w-full relative z-10 text-burgundy-dark shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 gold-foil-bg" />

              {/* Close Button Button */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setIsRegistered(false);
                }}
                className="absolute top-4 right-4 text-burgundy hover:text-gold-dark transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 pointer-events-none" />
              </button>

              {!isRegistered ? (
                /* Interactive Webinar Ticket Form */
                <form onSubmit={handleModalSubmit} className="space-y-6">
                  
                  {/* Header Title inside pop-up */}
                  <div className="text-center space-y-2">
                    <span className="text-[9px] uppercase font-display font-bold tracking-[0.2em] text-[#D4AF37] gold-text-shimmer">LUXURY WEBINAR ENTRY TICKET</span>
                    <h3 className="font-display text-xl font-bold tracking-widest text-burgundy uppercase pt-1 font-black">Đăng Ký Giữ Chỗ</h3>
                    <div className="w-16 h-[2px] gold-foil-bg mx-auto" />
                    <p className="text-[11px] text-gray-600 font-sans mt-2">
                      Kính mời Quý phụ huynh và Học viên cung cấp thông tin liên hệ để nhận vé mời Zoom VIP cao cấp trực thuộc ban điều phối LEAP.
                    </p>
                  </div>

                  {/* Input Name */}
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] text-burgundy font-bold mb-1.5">Họ Và Tên *</label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={inputs.fullname}
                      onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#D4AF37]/50 py-2 text-xs placeholder-gray-400 focus:outline-none focus:border-burgundy rounded-none font-sans text-gray-900 font-semibold"
                    />
                    {errors.fullname && (
                      <p className="text-[10px] text-red-600 italic mt-1 font-sans font-semibold">{errors.fullname}</p>
                    )}
                  </div>

                  {/* Input Phone */}
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] text-burgundy font-bold mb-1.5">Số Điện Thoại *</label>
                    <input
                      type="tel"
                      placeholder="0912345678"
                      value={inputs.phone}
                      onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#D4AF37]/50 py-2 text-xs placeholder-gray-400 focus:outline-none focus:border-burgundy rounded-none font-sans text-gray-900 font-semibold"
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-600 italic mt-1 font-sans font-semibold">{errors.phone}</p>
                    )}
                  </div>

                  {/* Submit info */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 gold-shimmer-btn text-burgundy-dark font-display font-bold uppercase tracking-[0.2em] text-[10px] transition-colors rounded-none cursor-pointer shadow-md"
                  >
                    {loading ? "ĐANG GHI NHẬN TICKET..." : "XÁC NHẬN GIỮ CHỖ ĐỘC QUYỀN"}
                  </button>

                  <p className="text-[9px] text-gray-500 text-center font-sans tracking-tight">
                    * Bằng cách đăng ký, Quý vị xác định rằng LEAP sẽ giữ kín thông tin của Quý vị một cách tuyệt đối theo quy chuẩn ngoại giao.
                  </p>

                </form>
              ) : (
                /* Success screen within modal */
                <div className="text-center space-y-6 py-4">
                  <div className="w-16 h-16 bg-emerald-55 border border-emerald-500 rounded-none flex items-center justify-center mx-auto text-emerald-600">
                    <Check className="w-8 h-8 pointer-events-none" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-display font-bold tracking-[0.2em] text-emerald-700">TICKET STATUS: VALIDATED</span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-widest text-emerald-800 uppercase leading-normal">Đại Lộ Thượng Lưu Đã Mở</h3>
                    <p className="text-xs text-burgundy font-sans leading-relaxed font-bold">
                      Kính chúc mừng Quý ứng viên <span className="text-gold-dark font-extrabold">{inputs.fullname}</span> đã đăng ký giữ chỗ thành công! 
                    </p>
                    <p className="text-[11px] text-gray-700 font-sans leading-relaxed">
                      Ban điều phối LEAP đã ghi nhận thông tin đăng ký của Quý vị. Mã QR Thư mời độc quyền và ID phòng Zoom trực tiếp đang được gửi về số điện thoại <strong className="text-burgundy-dark font-semibold">{inputs.phone}</strong>. Kính mong Quý vị lưu ý kiểm tra kỹ tin nhắn SMS.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsRegistered(false);
                    }}
                    className="w-full py-3 border border-burgundy text-burgundy font-display font-bold tracking-[0.2em] text-[10px] uppercase rounded-none hover:bg-burgundy hover:text-white transition-colors cursor-pointer bg-transparent"
                  >
                    Đóng Hộp Thoại
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
