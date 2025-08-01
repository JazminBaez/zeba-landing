import React from "react";
import { ContactForm } from "./contactForm";
import { useCopyToast } from "../../hooks/useCopyToast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { copyMessage, showCopyMessage } = useCopyToast();

  const handleCopy = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    showCopyMessage(message);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl p-8 m-4 max-w-md w-full transform transition-all duration-300 animate-slideUp">
        {/* Toast */}
        {copyMessage && (
          <div className="absolute top-4 left-4 right-4 flex justify-center z-10">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-slideUp">
              {copyMessage}
            </div>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 font-primary">Contact</h2>
          <p className="text-gray-600 font-secondary">Get in touch with ZEBA Management</p>
        </div>

        {/* Contact Form */}
        <ContactForm 
          email="info@zebamanagement.com"
          phone="+56 9 1234 5678"
          onCopy={handleCopy}
        />
      </div>
    </div>
  );
};