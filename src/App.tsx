import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExcellenceEnvironment from "./components/ExcellenceEnvironment";
import EliteNetworkROI from "./components/EliteNetworkROI";
import SocialProof from "./components/SocialProof";
import GoldenPassGate from "./components/GoldenPassGate";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#240A10] selection:bg-[#D4AF37]/35 selection:text-[#800020] font-sans antialiased overflow-x-hidden">
      {/* Navigation & Identity Header */}
      <Header />

      {/* Khối 1: Hero Section (Định vị tối thượng) */}
      <HeroSection />

      {/* Khối 2: The Excellence Environment (USP Môi trường Giáo dục) */}
      <ExcellenceEnvironment />

      {/* Khối 3: The Elite Network & ROI (Mạng lưới quan hệ & Giá trị nhận lại) */}
      <EliteNetworkROI />

      {/* Khối 4: Social Proof (Bảo chứng thực tế) */}
      <SocialProof />

      {/* Khối 5: The Golden Pass Gate (Khối chuyển đổi tối cao & Đăng ký) */}
      <GoldenPassGate />

      {/* Footer containing LEAP details & addresses */}
      <Footer />
    </div>
  );
}
