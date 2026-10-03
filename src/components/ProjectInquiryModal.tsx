import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import tabLogo from '../assets/images/botlytices-tab-logo.png';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  'Web Development',
  'Web Design & UI/UX',
  'E-commerce & Web Applications',
  'SEO, Hosting & Website Care',
  'IT Support & Infrastructure',
  'Hardware & Device Support',
  'Software & System Support',
  'Networking & Wi-Fi',
  'Cybersecurity & IT Security',
  'Digital Presence & Branding',
  'Brand Identity & Logo Design',
  'Social Media & Content',
  'Business Profiles & Local Presence',
  'Digital Marketing & Growth',
  'AI Automation',
  'AI Voice Assistants',
  'WhatsApp & Chat Automation',
  'AI Lead Generation',
  'Workflow & Business Automation',
  'Security & Surveillance',
  'CCTV & Video Surveillance',
  'Access Control & Biometrics',
  'Remote Monitoring & Security Systems',
  'Security Maintenance & Upgrades',
];

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState(defaultService || SERVICE_OPTIONS[0]);
  const [budget, setBudget] = useState('$2,500 – $5,000 / £2k – £4k');
  const [preferredContact, setPreferredContact] = useState('Email');
  const [projectDetails, setProjectDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setServiceNeeded(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#07152E]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-[#E6EBF2] rounded-3xl max-w-xl w-full overflow-hidden shadow-[0_24px_60px_-15px_rgba(7,21,46,0.25)] relative my-auto">
        <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E6EBF2] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={tabLogo}
              alt="BOTLYTICES"
              className="w-7 h-7 object-contain rounded-md"
            />
            <div>
              <div className="text-xs font-bold text-[#0A1020]">
                Start a Project · Request Consultation
              </div>
              <div className="text-[11px] text-[#5D687A]">
                Web · IT Support · Digital Presence · AI · Security
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white border border-[#E6EBF2] text-[#5D687A] hover:text-[#0A1020] hover:border-[#006BFF] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F3F7FC] border border-[#E6EBF2] text-[#006BFF] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                Project Request Received
              </h3>
              <p className="text-sm text-[#5D687A] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#0A1020]">{name}</span>. Our team is reviewing your brief for <span className="font-semibold text-[#006BFF]">{serviceNeeded}</span> and will contact you via <span className="font-semibold text-[#0A1020]">{preferredContact}</span> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-7 py-3 text-sm font-semibold btn-primary-gradient cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Business
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Company name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7000 000000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Service *
                  </label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF]"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF]"
                  >
                    <option value="Under $2,500 / £2k">Under $2,500 / £2k</option>
                    <option value="$2,500 – $5,000 / £2k – £4k">$2,500 – $5,000 / £2k – £4k</option>
                    <option value="$5,000 – $15,000 / £4k – £12k">$5,000 – $15,000 / £4k – £12k</option>
                    <option value="$15,000+ / Enterprise">$15,000+ / Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['Email', 'Phone Call', 'WhatsApp'].map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setPreferredContact(method)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        preferredContact === method
                          ? 'bg-[#F3F7FC] border-[#006BFF] text-[#006BFF]'
                          : 'bg-[#F8FAFC] border-[#E6EBF2] text-[#5D687A]'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                  Project Description *
                </label>
                <textarea
                  rows={3}
                  required
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Tell us what you need..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-semibold btn-primary-gradient flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Request a Consultation'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
