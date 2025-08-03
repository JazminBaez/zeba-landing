
"use client";

import { useState } from "react";
import { useImagePreloader } from "../hooks/useImagePreloader";
import { ImagePreloader } from "../components/ui/zeba-ui/imagePreloader";
import { BackgroundImages } from "../components/ui/zeba-ui/backgroundImages";
import { Navigation } from "../components/navigation/navigation";
import { MainContent } from "../components/menu/mainContent";
import { MobileLogo } from "../components/common/zeba-mobile-logo";
import { ContactModal } from "../components/contact/contactModal";
import { useRouter } from "next/navigation";

export default function EliteFashionLanding() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentBackground, setCurrentBackground] = useState("default");
  const imagesLoaded = useImagePreloader();
  const router = useRouter();

  const handleNavigateToSection = (section: string) => {
    console.log(`Navegando a: ${section}`);
    
    switch(section) {
      case 'models':
        router.push('/models');
        break;
      case 'scouting':
        router.push('/scouting');
        break;
      case 'about':
        router.push('/about');
        break;
      default:
        console.log('Sección no reconocida');
    }
  };
  const openContactModal = () => {
    console.log("Abriendo modal");
    setIsContactModalOpen(true);
    console.log("Estado después:", true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleCategoryHover = (category: string) => {
    setCurrentBackground(category);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ImagePreloader />
      <BackgroundImages currentBackground={currentBackground} />
      <Navigation onContactClick={openContactModal} />
      <MainContent 
        onCategoryHover={handleCategoryHover} 
        onCategoryClick={handleNavigateToSection}
        imagesLoaded={imagesLoaded} 
      />
      <MobileLogo />
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  );
}