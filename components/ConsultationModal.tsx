import React, { useState, useEffect } from 'react';
import { X, Mail, Clock, Copy, Check, Phone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  industryName?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  industryName,
}) => {
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const email = 'info@melite.cz';
  const subject = industryName 
    ? `Poptávka konzultace SIESE — ${industryName}`
    : 'Poptávka konzultace SIESE';
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-[#1e6cd9] via-[#1a5bb5] to-[#0d3b82] text-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-white/20 p-8 sm:p-10 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-20"
          aria-label="Zavřít"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Header pill badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-medium text-blue-100 mb-6">
            <Clock size={13} className="text-blue-200" />
            <span>
              {industryName ? `Konzultace • ${industryName}` : 'Nezávazná konzultace'}
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
            Kontaktujte nás na mailu{' '}
            <br className="hidden sm:inline" />
            <a 
              href={mailtoUrl}
              className="underline decoration-white/60 hover:decoration-white hover:text-blue-100 transition-colors"
            >
              {email}
            </a>{' '}
            nebo 👇
          </h3>

          {/* Copy email helper */}
          <button
            onClick={handleCopyEmail}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs text-blue-200 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-1 rounded-md border border-white/15 transition-all mb-8 active:scale-95"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-300" />
                <span className="text-emerald-200 font-medium">Email zkopírován do schránky!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Kopírovat adresu {email}</span>
              </>
            )}
          </button>

          {/* Main Action Button — opens user's email client */}
          <a
            href={mailtoUrl}
            className="w-full max-w-md bg-white text-[#1a5bb5] hover:bg-blue-50 font-bold py-4 px-6 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-2.5 mb-6 group cursor-pointer"
          >
            <Mail size={20} className="text-[#1a5bb5] group-hover:scale-110 transition-transform" />
            <span>Napsat zprávu</span>
          </a>

          {/* Response guarantee subtext */}
          <p className="text-blue-100/90 text-xs sm:text-sm font-light flex items-center justify-center gap-2">
            <Clock size={15} className="text-blue-200 shrink-0" />
            <span>Na zprávy odpovídáme zpravidla do 24 hodin.</span>
          </p>

          {/* Alternative phone info */}
          <div className="w-full mt-8 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-200/90">
            <a 
              href="tel:+420530515200" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} />
              <span>+420 530 515 200</span>
            </a>
            <span className="text-blue-200/70">Po–Pá 9:00–17:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
