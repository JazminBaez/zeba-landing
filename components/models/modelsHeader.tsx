import React from "react";
import { Search, Heart, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ZebaLogo } from "../common/zeba-logo";

export const ModelsHeader = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            {/* Logo más grande */}
            <div className="w-24 h-12"> {/* Era w-16 h-8, ahora w-24 h-12 */}
              <a href="/" className="flex items-center">
                <ZebaLogo color="black" />
              </a>
            </div>
            <nav className="hidden md:flex">
              <a href="#" className="text-black font-medium border-b-2 border-black pb-1">
                Mainboard
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Heart className="w-5 h-5 text-gray-600" />
            <Search className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};
