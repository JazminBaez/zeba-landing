import React from "react";
import { ZebaLogo } from "./zeba-logo";

export const MobileLogo = () => (
  <div className="md:hidden relative z-10 flex justify-center pb-8 order-1">
    <div className="text-center">
      <div className="w-24">
        <ZebaLogo />
      </div>
      <p className="text-xs text-white/90 font-light tracking-[0.2em] mt-1 font-sans drop-shadow-md">
        MANAGEMENT
      </p>
    </div>
  </div>
);