import React from "react";
import Link from "next/link";

interface NavigationProps {
  onContactClick: () => void;
}

export const Navigation = ({ onContactClick }: NavigationProps) => (
  <nav className="relative z-10 flex items-center p-8 md:p-12">
    <div className="w-full flex justify-end">
      <div className="flex items-center space-x-8 text-white mr-0 md:mr-12">
        <Link
          href="https://www.instagram.com/zebamanagement?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="text-sm md:text-base lg:text-lg font-light tracking-wide hover:opacity-70 transition-opacity duration-150 font-secondary"
        >
          Instagram
        </Link>
        <button
          className="text-sm md:text-base lg:text-lg font-light tracking-wide hover:opacity-70 transition-opacity duration-150 font-secondary cursor-pointer"
          onClick={onContactClick}
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
);