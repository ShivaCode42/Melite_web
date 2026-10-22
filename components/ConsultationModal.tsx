import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  industryName?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  industryName = 'Telekomunikace',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    preferredTime: 'Dopoledne (9:00 - 12:00)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-blue-100 relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a5bb5] to-[#1e6cd9] text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Zavřít"
          >
            <X size={20} />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-semibold text-blue-100 mb-2">
            <Clock size={13} />
            <span>Nezávazně &bull; 30 minut</span>
          </div>

          <h3 className="text-xl font-bold">
            Domluvit 30min konzultaci
          </h3>
          <p className="text-blue-100 text-xs mt-1">
            Zaměřeno na řešení pro: <strong className="text-white">{industryName}</strong>
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Žádost byla úspěšně odeslána
              </h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Děkujeme za váš zájem. Náš specialista na telekomunikační dokumentaci se s vámi spojí během následujícího pracovního dne pro potvrzení termínu.
              </p>
              <button
                onClick={handleResetAndClose}
                className="w-full bg-[#1a5bb5] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors text-sm"
              >
                Rozumím a zavřít
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  required
                  placeholder="např. Jan Novák"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a5bb5] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Společnost / Operátor *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="např. Telco Net s.r.o."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a5bb5] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Telefonní číslo
                  </label>
                  <input
                    type="tel"
                    placeholder="+420 777 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a5bb5] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Pracovní e-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jmeno@operator.cz"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a5bb5] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Preferovaný čas pro hovor
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a5bb5] focus:border-transparent bg-white"
                >
                  <option>Dopoledne (9:00 - 12:00)</option>
                  <option>Brzké odpoledne (12:00 - 14:00)</option>
                  <option>Pozdní odpoledne (14:00 - 17:00)</option>
                  <option>Kdykoliv v pracovní době</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Poznámka / Co konkrétně řešíte (nepovinné)
                </label>
                <textarea
                  rows={2}
                  placeholder="např. Integrace smluv s billingem, skartace dle ČTÚ, NIS2..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a5bb5] focus:border-transparent resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1a5bb5] hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send size={16} />
                  <span>Potvrdit nezávaznou 30min konzultaci</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
                <ShieldCheck size={14} className="text-gray-400" />
                <span>Vaše údaje jsou u nás v naprostém bezpečí. Žádný spam.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
