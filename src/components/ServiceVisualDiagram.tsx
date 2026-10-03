import React, { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  Server, 
  Wifi, 
  ShieldCheck, 
  MapPin, 
  Bot, 
  PhoneCall, 
  MessageSquare, 
  Camera, 
  Fingerprint, 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  Layers, 
  Search, 
  Database,
  RefreshCw,
  Lock
} from 'lucide-react';
import { SubcategoryPageData } from '../data/siteArchitecture';

interface ServiceVisualDiagramProps {
  visualType: SubcategoryPageData['visualType'];
  onNavigate: (path: string) => void;
}

export const ServiceVisualDiagram: React.FC<ServiceVisualDiagramProps> = ({ visualType }) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeCallStep, setActiveCallStep] = useState<number>(0);

  // 1. WEB DESIGN & UI/UX — Interactive Mobile vs Desktop + Design System + Prototype Preview
  if (visualType === 'ui-ux-system') {
    return (
      <div className="space-y-8">
        {/* Top Controls: Mobile vs Desktop Switcher */}
        <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6EBF2]">
            <div>
              <div className="text-xs text-[#5D687A] mb-1">Interactive Layout Comparison · Responsive Breakpoints</div>
              <h3 className="text-xl font-bold text-[#0A1020] font-display">
                Mobile vs. Desktop Adaptive Architecture
              </h3>
            </div>
            <div className="flex items-center gap-1 p-1 bg-[#F3F7FC] border border-[#E6EBF2] rounded-lg self-start">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewportMode === 'desktop' ? 'bg-white text-[#0A1020] shadow-xs' : 'text-[#5D687A] hover:text-[#0A1020]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop (1440px)</span>
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewportMode === 'mobile' ? 'bg-white text-[#0A1020] shadow-xs' : 'text-[#5D687A] hover:text-[#0A1020]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile-First (390px)</span>
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Viewport Wireframe */}
            <div className="lg:col-span-7 flex justify-center bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl p-6">
              {viewportMode === 'desktop' ? (
                <div className="w-full bg-white border border-[#E6EBF2] rounded-lg p-4 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E6EBF2]">
                    <div className="w-24 h-3 bg-[#0A1020] rounded-xs" />
                    <div className="flex gap-3">
                      <div className="w-12 h-2.5 bg-[#CBD5E1] rounded-xs" />
                      <div className="w-12 h-2.5 bg-[#CBD5E1] rounded-xs" />
                      <div className="w-12 h-2.5 bg-[#CBD5E1] rounded-xs" />
                    </div>
                    <div className="w-20 h-6 bg-[#006BFF] rounded-md" />
                  </div>
                  <div className="grid grid-cols-12 gap-4 items-center py-2">
                    <div className="col-span-6 space-y-2.5">
                      <div className="w-3/4 h-4 bg-[#0A1020] rounded-xs" />
                      <div className="w-full h-4 bg-[#006BFF]/80 rounded-xs" />
                      <div className="w-5/6 h-2.5 bg-[#94A3B8] rounded-xs" />
                      <div className="pt-2 flex gap-2">
                        <div className="w-24 h-7 bg-[#006BFF] rounded-md" />
                        <div className="w-24 h-7 border border-[#CBD5E1] rounded-md" />
                      </div>
                    </div>
                    <div className="col-span-6 aspect-video bg-[#F3F7FC] border border-[#E6EBF2] rounded-lg flex items-center justify-center text-xs font-mono-code text-[#006BFF]">
                      16:9 Visual Stage
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#E6EBF2]">
                    <div className="p-2.5 bg-[#F8FAFC] rounded border border-[#E6EBF2] text-[11px] font-medium text-[#0A1020]">01. Value Prop</div>
                    <div className="p-2.5 bg-[#F8FAFC] rounded border border-[#E6EBF2] text-[11px] font-medium text-[#0A1020]">02. Social Proof</div>
                    <div className="p-2.5 bg-[#F8FAFC] rounded border border-[#E6EBF2] text-[11px] font-medium text-[#0A1020]">03. Direct CTA</div>
                  </div>
                </div>
              ) : (
                <div className="w-64 bg-white border-2 border-[#0A1020] rounded-2xl p-3.5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E6EBF2]">
                    <div className="w-16 h-3 bg-[#0A1020] rounded-xs" />
                    <div className="w-5 h-4 bg-[#F3F7FC] border border-[#E6EBF2] rounded-xs" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-3.5 bg-[#0A1020] rounded-xs" />
                    <div className="w-4/5 h-3.5 bg-[#006BFF] rounded-xs" />
                    <div className="w-full h-2 bg-[#94A3B8] rounded-xs" />
                  </div>
                  <div className="aspect-video bg-[#F3F7FC] border border-[#E6EBF2] rounded-lg flex items-center justify-center text-[11px] font-mono-code text-[#006BFF]">
                    Mobile-First Media
                  </div>
                  <div className="w-full py-2 bg-[#006BFF] text-white text-center rounded-md text-[11px] font-semibold">
                    Thumb-Zone Primary CTA (44px+)
                  </div>
                </div>
              )}
            </div>

            {/* Design System & Final Prototype Specifications */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                <div className="text-xs font-semibold text-[#006BFF] mb-1">01. Design System Foundation</div>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Standardized typography scales, color tokens, spacing units, and accessible button states defined in Figma before coding.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                <div className="text-xs font-semibold text-[#006BFF] mb-1">02. Interactive Figma Prototype</div>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Click through every desktop and mobile screen, test navigation menus, and approve the exact layout prior to build.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                <div className="text-xs font-semibold text-[#006BFF] mb-1">03. Conversion-Focused Hierarchy</div>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Clear headlines, visual trust proof, and zero-friction enquiry forms placed where users naturally look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. WEB DEVELOPMENT LIFECYCLE (Design -> Development -> Testing -> Launch)
  if (visualType === 'web-dev-lifecycle') {
    const stages = [
      { step: 'Stage 01', name: 'Design', detail: 'Approved Figma UI/UX, responsive grids & component specs' },
      { step: 'Stage 02', name: 'Development', detail: 'Clean React / Next.js / WordPress / Shopify engineering & APIs' },
      { step: 'Stage 03', name: 'Testing', detail: 'Cross-device QA, Core Web Vitals speed & security verification' },
      { step: 'Stage 04', name: 'Launch', detail: 'Zero-downtime DNS cutover, SSL encryption & analytics live' },
    ];
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">Engineering Delivery Pipeline</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            Design → Development → Testing → Launch
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stages.map((st, i) => (
            <div key={st.name} className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#5D687A] mb-2">
                  <span className="font-mono-code font-semibold text-[#006BFF]">{st.step}</span>
                  {i < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] hidden md:block" />}
                </div>
                <div className="text-base font-bold text-[#0A1020] font-display">{st.name}</div>
                <p className="text-xs text-[#5D687A] mt-2 leading-relaxed">{st.detail}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E6EBF2] text-[11px] font-medium text-[#0A1020] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF]" />
                <span>Verified Deliverable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3. E-COMMERCE & WEB APPLICATIONS ARCHITECTURE DIAGRAM
  if (visualType === 'ecommerce-arch') {
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">System Architecture Diagram</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            Connected Storefront, Checkout, Portal & Back-Office Architecture
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3">
            <div className="text-xs font-mono-code font-semibold text-[#006BFF]">01. Customer Layer</div>
            <div className="text-base font-bold text-[#0A1020]">Storefront & Client Portal</div>
            <ul className="space-y-2 text-xs text-[#5D687A] pt-1">
              <li className="flex items-center justify-between py-1.5 border-b border-[#E6EBF2]">
                <span>Product Catalog & Filters</span>
                <span className="text-[#0A1020] font-medium">Fast UI</span>
              </li>
              <li className="flex items-center justify-between py-1.5 border-b border-[#E6EBF2]">
                <span>Booking & Reservation Calendar</span>
                <span className="text-[#0A1020] font-medium">Real-Time</span>
              </li>
              <li className="flex items-center justify-between py-1.5">
                <span>Customer Account Portal</span>
                <span className="text-[#0A1020] font-medium">Authenticated</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#F3F7FC] border border-[#006BFF]/30 space-y-3">
            <div className="text-xs font-mono-code font-semibold text-[#006BFF]">02. Commerce & Logic Engine</div>
            <div className="text-base font-bold text-[#0A1020]">Checkout, Payments & APIs</div>
            <ul className="space-y-2 text-xs text-[#5D687A] pt-1">
              <li className="flex items-center justify-between py-1.5 border-b border-[#E6EBF2]">
                <span>Stripe / Apple Pay / PayPal</span>
                <span className="text-[#006BFF] font-semibold">PCI Secure</span>
              </li>
              <li className="flex items-center justify-between py-1.5 border-b border-[#E6EBF2]">
                <span>Inventory & Stock Control</span>
                <span className="text-[#006BFF] font-semibold">Live Sync</span>
              </li>
              <li className="flex items-center justify-between py-1.5">
                <span>Custom Business Rules & Tax</span>
                <span className="text-[#006BFF] font-semibold">Automated</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3">
            <div className="text-xs font-mono-code font-semibold text-[#006BFF]">03. Operations Layer</div>
            <div className="text-base font-bold text-[#0A1020]">Admin Dashboards & CRM</div>
            <ul className="space-y-2 text-xs text-[#5D687A] pt-1">
              <li className="flex items-center justify-between py-1.5 border-b border-[#E6EBF2]">
                <span>Order & Fulfillment Dashboard</span>
                <span className="text-[#0A1020] font-medium">Centralized</span>
              </li>
              <li className="flex items-center justify-between py-1.5 border-b border-[#E6EBF2]">
                <span>CRM & Accounting Webhooks</span>
                <span className="text-[#0A1020] font-medium">2-Way API</span>
              </li>
              <li className="flex items-center justify-between py-1.5">
                <span>Automated Customer Alerts</span>
                <span className="text-[#0A1020] font-medium">Email / SMS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 4. SEO, AEO/GEO, DOMAIN & HOSTING, WEBSITE CARE 4-QUADRANT MATRIX
  if (visualType === 'seo-aeo-care') {
    const quadrants = [
      {
        title: '01. SEO (Search Engine Optimization)',
        items: ['Technical SEO & Core Web Vitals', 'On-Page & Local SEO', 'Google Search Console & XML Sitemaps', 'Schema.org Markup & Internal Linking'],
      },
      {
        title: '02. AEO / GEO (AI Search Visibility)',
        items: ['Answer Engine Optimization (ChatGPT / Perplexity)', 'Generative Engine Optimization (Google AI)', 'Structured Entity & FAQ Architecture', 'Direct Citation-Ready Content'],
      },
      {
        title: '03. Domain, DNS & Cloud Hosting',
        items: ['Domain Registration & DNS Management', 'SSL Encryption Certificates', 'Fast Managed Cloud Hosting', 'Business Email Setup &Zero-Downtime Migration'],
      },
      {
        title: '04. Ongoing Website Care',
        items: ['Core & Plugin Security Updates', 'Automated Daily Off-Site Backups', '24/7 Malware & Uptime Monitoring', 'Speed Optimization & Content Updates'],
      },
    ];
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">Complete Search & Infrastructure Stack</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            SEO · AEO / GEO · Domain & Hosting · Website Care
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quadrants.map((q) => (
            <div key={q.title} className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <h4 className="text-base font-bold text-[#0A1020] font-display mb-3">{q.title}</h4>
              <ul className="space-y-2">
                {q.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-xs sm:text-sm text-[#5D687A]">
                    <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 5. NETWORKING & WI-FI TOPOLOGY DIAGRAM
  if (visualType === 'network-topology') {
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">Network Topology Blueprint</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            Structured Cabling, Managed Switches & Segmented VLAN Architecture
          </h3>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <div className="text-xs font-mono-code font-semibold text-[#006BFF]">Layer 1 · Gateway</div>
              <div className="text-sm font-bold text-[#0A1020] mt-1">Fiber WAN & Hardware Firewall Router</div>
              <p className="text-xs text-[#5D687A] mt-1">Primary fiber line + 4G/5G failover, intrusion prevention, and VPN gateway.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <div className="text-xs font-mono-code font-semibold text-[#006BFF]">Layer 2 · Core Switching</div>
              <div className="text-sm font-bold text-[#0A1020] mt-1">Managed PoE+ Switch & Cat6 Patch Rack</div>
              <p className="text-xs text-[#5D687A] mt-1">Certified Cat5e / Cat6 / Cat6a structured cabling terminated into labeled patch panels.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <div className="text-xs font-mono-code font-semibold text-[#006BFF]">Layer 3 · Wireless & Ports</div>
              <div className="text-sm font-bold text-[#0A1020] mt-1">Ceiling Wi-Fi Access Points & Wall Ports</div>
              <p className="text-xs text-[#5D687A] mt-1">Seamless roaming business Wi-Fi and gigabit desk ethernet ports.</p>
            </div>
          </div>

          {/* Segmented VLANs */}
          <div className="pt-2">
            <div className="text-xs font-semibold text-[#0A1020] mb-3">Isolated VLAN Segmentation for Security & Performance:</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-lg bg-[#F3F7FC] border border-[#E6EBF2]">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">VLAN 10 · Corporate</div>
                <div className="text-xs text-[#0A1020] font-medium mt-0.5">Staff PCs, Laptops & Servers</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[#F3F7FC] border border-[#E6EBF2]">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">VLAN 20 · Voice & Peripherals</div>
                <div className="text-xs text-[#0A1020] font-medium mt-0.5">VoIP Phones, Printers & Scanners</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[#F3F7FC] border border-[#E6EBF2]">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">VLAN 30 · Physical Security</div>
                <div className="text-xs text-[#0A1020] font-medium mt-0.5">4K IP CCTV & Door Access Control</div>
              </div>
              <div className="p-3.5 rounded-lg bg-[#F3F7FC] border border-[#E6EBF2]">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">VLAN 40 · Isolated Guest</div>
                <div className="text-xs text-[#0A1020] font-medium mt-0.5">Visitor Wi-Fi (Internet Only)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. DIGITAL PRESENCE MAP (Google, Apple, Bing, Maps, Social Media, Website, Directories)
  if (visualType === 'digital-presence-map') {
    const channels = [
      { name: 'Google Business Profile', role: 'Google Search & Local 3-Pack', status: 'Verified & Optimized' },
      { name: 'Apple Business Connect', role: 'Apple Maps, iPhone & Siri', status: 'Verified & Optimized' },
      { name: 'Bing Places', role: 'Microsoft Bing Search & Maps', status: 'Synchronized' },
      { name: 'Maps & Navigation', role: 'Pin Accuracy, Hours & Directions', status: 'Geotagged' },
      { name: 'Social Media Channels', role: 'Instagram, LinkedIn, FB & TikTok', status: 'Brand Aligned' },
      { name: 'Business Directories', role: 'Consistent Name, Address & Phone (NAP)', status: 'Citation Locked' },
    ];
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">Digital Presence Map</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            Every Search Engine, Map & Directory Connected Back to Your Website
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0A1020] text-white space-y-3">
            <div className="text-xs font-mono-code text-[#00C8FF]">Central Authority Hub</div>
            <div className="text-xl font-bold font-display">Your Business Website</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Structured with LocalBusiness Schema.org JSON-LD, verified contact details, service pages, and direct booking/enquiry capture.
            </p>
            <div className="pt-2 text-xs text-[#00C8FF] font-medium">
              100% NAP Data Consistency ↔ All Channels
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {channels.map((ch) => (
              <div key={ch.name} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold text-[#0A1020]">{ch.name}</div>
                  <div className="text-xs text-[#5D687A] mt-0.5">{ch.role}</div>
                </div>
                <div className="mt-3 pt-2 border-t border-[#E6EBF2] text-[11px] font-medium text-[#006BFF] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{ch.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 7. AI VOICE ASSISTANTS — INTERACTIVE CALL-FLOW VISUALIZATION
  if (visualType === 'voice-call-flow') {
    const callSteps = [
      {
        title: '01. Inbound or Outbound Call Triggered',
        summary: 'Customer calls your business number (or submits a website form triggering an instant outbound call).',
        transcript: 'AI Assistant: "Hello, thank you for calling. How can I help you today?"',
      },
      {
        title: '02. Intent Recognition & FAQ Answering',
        summary: 'The voice assistant answers questions about your services, coverage area, and pricing using your approved knowledge base.',
        transcript: 'Caller: "Do you have availability for a showroom consultation this week?"',
      },
      {
        title: '03. Lead Qualification & Live Calendar Check',
        summary: 'Collects caller name, service needed, and checks real-time slots in Google or Outlook Calendar.',
        transcript: 'AI Assistant: "We have Thursday at 11:00 AM or Friday at 2:30 PM available. Which works best for you?"',
      },
      {
        title: '04. Appointment Booked, CRM Synced & Human Transfer',
        summary: 'Confirms the booking via SMS/WhatsApp, logs the transcript in your CRM, or warm-transfers urgent calls to staff.',
        transcript: 'System Action: Calendar slot reserved · CRM contact created · SMS confirmation sent.',
      },
    ];
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">Interactive Call-Flow Visualization</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            How Your 24/7 AI Voice Assistant Handles Calls Step-by-Step
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-6 space-y-2.5">
            {callSteps.map((cs, idx) => (
              <button
                key={cs.title}
                onClick={() => setActiveCallStep(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeCallStep === idx
                    ? 'bg-[#F3F7FC] border-[#006BFF] text-[#0A1020]'
                    : 'bg-[#F8FAFC] border-[#E6EBF2] text-[#5D687A] hover:text-[#0A1020]'
                }`}
              >
                <div className="text-sm font-bold text-[#0A1020]">{cs.title}</div>
                <div className="text-xs text-[#5D687A] mt-1">{cs.summary}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0A1020] text-white space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#00C8FF]" />
                <span className="text-xs font-mono-code uppercase tracking-wider text-slate-300">
                  Live Call Simulation · Step 0{activeCallStep + 1}
                </span>
              </div>
              <span className="text-xs font-mono-code text-emerald-400">Active 24/7</span>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-slate-400">What Happens at This Stage:</div>
              <div className="text-base font-semibold text-white">
                {callSteps[activeCallStep].summary}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-code text-[#00C8FF] leading-relaxed">
              {callSteps[activeCallStep].transcript}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="font-bold text-white">Inbound / Outbound</div>
                <div className="text-[11px] text-slate-400">Call Modes</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="font-bold text-white">Calendar & CRM</div>
                <div className="text-[11px] text-slate-400">Direct Sync</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="font-bold text-white">Human Handoff</div>
                <div className="text-[11px] text-slate-400">Warm Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 8. WHATSAPP & CHAT AUTOMATION PIPELINE
  if (visualType === 'whatsapp-pipeline') {
    const chatFlow = [
      { step: '01', label: 'Customer Message', desc: 'Inbound message on WhatsApp, Website Chat, Instagram, or Facebook.' },
      { step: '02', label: 'AI Understands', desc: 'Identifies service question, booking request, or support enquiry.' },
      { step: '03', label: 'AI Responds', desc: 'Replies in under 3 seconds with accurate business details.' },
      { step: '04', label: 'Lead Captured', desc: 'Collects customer name, phone, email, and project requirements.' },
      { step: '05', label: 'CRM Updated', desc: 'Creates contact, logs conversation history, and books calendar slot.' },
      { step: '06', label: 'Human Handoff if Required', desc: 'Alerts your team immediately whenever personal assistance is needed.' },
    ];
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">Messaging Automation Flow</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            Customer Message → AI Understands → AI Responds → Lead Captured → CRM Updated → Human Handoff
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {chatFlow.map((node) => (
            <div key={node.step} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono-code font-bold text-[#006BFF] mb-1.5">Step {node.step}</div>
                <div className="text-sm font-bold text-[#0A1020]">{node.label}</div>
                <p className="text-xs text-[#5D687A] mt-1.5 leading-relaxed">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 9. WORKFLOW & BUSINESS AUTOMATION MAP (n8n, Make, Zapier, APIs)
  if (visualType === 'workflow-automation-map') {
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">Multi-App Workflow Architecture</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            Automated Data Synchronization Across Your Business Tools
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2.5">
            <div className="text-xs font-mono-code font-semibold text-[#006BFF]">01. Triggers & Inputs</div>
            <div className="text-sm font-bold text-[#0A1020]">Where Data Enters</div>
            <ul className="space-y-1.5 text-xs text-[#5D687A]">
              <li>· Website Quote & Booking Forms</li>
              <li>· Incoming Emails & PDF Documents</li>
              <li>· WhatsApp & Phone Voice Enquiries</li>
              <li>· Stripe Payments & E-Commerce Orders</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#F3F7FC] border border-[#006BFF]/30 space-y-2.5">
            <div className="text-xs font-mono-code font-semibold text-[#006BFF]">02. Orchestration Engine</div>
            <div className="text-sm font-bold text-[#0A1020]">n8n · Make · Zapier · Custom APIs</div>
            <ul className="space-y-1.5 text-xs text-[#5D687A]">
              <li>· Data Formatting & Validation</li>
              <li>· AI Document & Email Extraction</li>
              <li>· Conditional Routing Rules</li>
              <li>· Error Handling & Execution Logs</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2.5">
            <div className="text-xs font-mono-code font-semibold text-[#006BFF]">03. Automated Actions</div>
            <div className="text-sm font-bold text-[#0A1020]">Instant Destination Updates</div>
            <ul className="space-y-1.5 text-xs text-[#5D687A]">
              <li>· CRM Deal & Contact Creation</li>
              <li>· Google Sheets & Airtable Sync</li>
              <li>· Calendar Invites & Client Emails</li>
              <li>· Slack / Teams / WhatsApp Staff Alerts</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 10. CCTV & VIDEO SURVEILLANCE INSTALLATION ARCHITECTURE
  if (visualType === 'cctv-coverage-grid') {
    const zones = [
      { type: '4K Dome Cameras', location: 'Reception, Offices & Retail Floors', spec: 'Discreet wide-angle indoor coverage + audio' },
      { type: '4K Weatherproof Bullet Cameras', location: 'Building Perimeter, Car Parks & Loading Bays', spec: 'IP67 weatherproof + long-range night vision' },
      { type: 'PTZ (Pan-Tilt-Zoom) Cameras', location: 'Large Yards, Warehouses & Compounds', spec: '360° optical zoom & smart auto-tracking' },
      { type: 'PoE NVR & Mobile Viewing', location: 'Secure Server Rack + Smartphone App', spec: '24/7 local recording + encrypted iOS/Android live view' },
    ];
    return (
      <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
        <div className="mb-6">
          <div className="text-xs text-[#5D687A] mb-1">CCTV Coverage & Recording Blueprint</div>
          <h3 className="text-xl font-bold text-[#0A1020] font-display">
            Indoor, Outdoor & Perimeter 4K Surveillance Architecture
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {zones.map((z) => (
            <div key={z.type} className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between">
              <div>
                <Camera className="w-5 h-5 text-[#006BFF] mb-3" />
                <div className="text-sm font-bold text-[#0A1020]">{z.type}</div>
                <div className="text-xs font-semibold text-[#006BFF] mt-1">{z.location}</div>
                <p className="text-xs text-[#5D687A] mt-2 leading-relaxed">{z.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // DEFAULT STRUCTURED SYSTEM ARCHITECTURE MATRIX FOR REMAINING SUBCATEGORIES
  const defaultConfigs: Record<string, { subtitle: string; heading: string; columns: { label: string; title: string; points: string[] }[] }> = {
    'hardware-diagnostics': {
      subtitle: 'Workstation & Peripheral Lifecycle',
      heading: 'Hardware Diagnostics, Upgrades & Office Device Standardization',
      columns: [
        { label: '01. Workstations', title: 'Desktops & Laptops', points: ['Hardware diagnostics & repairs', 'NVMe SSD & DDR4/DDR5 RAM upgrades', 'Dual/ultrawide monitor desk setups'] },
        { label: '02. Office Peripherals', title: 'Printers & Scanners', points: ['Static IP network printer mapping', 'Scan-to-email & scan-to-folder setup', 'Multi-function device troubleshooting'] },
        { label: '03. Continuity', title: 'Preventive Maintenance', points: ['Thermal cleaning & disk health checks', 'New employee day-one PC preparation', 'Fast remote & on-site support'] },
      ],
    },
    'software-stack': {
      subtitle: 'Operating System & Cloud Administration',
      heading: 'Windows, Microsoft 365, Business Email & Data Backup Architecture',
      columns: [
        { label: '01. Operating System', title: 'Windows & Mac OS', points: ['Clean OS installations & updates', 'Driver & software standardization', 'Startup & performance optimization'] },
        { label: '02. Cloud Productivity', title: 'Microsoft 365 & Email', points: ['Custom domain email & Exchange', 'SharePoint, OneDrive & Teams setup', 'Zero-loss mailbox & data migration'] },
        { label: '03. Governance', title: 'Accounts & Backups', points: ['Staff onboarding/offboarding accounts', 'Role-based file permissions', 'Automated cloud & local backups'] },
      ],
    },
    'cyber-defense': {
      subtitle: 'Defensive Business Security Stack',
      heading: 'Endpoint, Identity, Network & Backup Protection Layers',
      columns: [
        { label: '01. Identity & Access', title: 'MFA & Account Lockdown', points: ['Multi-Factor Authentication (MFA)', 'Password policies & least privilege', 'Email SPF / DKIM / DMARC security'] },
        { label: '02. Device & Network', title: 'EDR & Firewall Hardening', points: ['Managed Antivirus / EDR protection', 'Full-disk encryption (BitLocker)', 'Hardware firewall & VPN security'] },
        { label: '03. Recovery', title: 'Immutable Backups & Audits', points: ['Ransomware-proof off-site backups', 'Malware remediation & cleanup', 'Periodic security audits'] },
      ],
    },
    'brand-identity-kit': {
      subtitle: 'Brand Identity System Mockup',
      heading: 'Unified Visual Assets Across Web, Social & Print',
      columns: [
        { label: '01. Core Marks', title: 'Logo & Vector System', points: ['Primary, icon & monochrome logos', 'Scalable SVG, EPS, PDF & PNG files', 'Logo redesign & vectorization'] },
        { label: '02. Visual Standards', title: 'Colors, Fonts & Guidelines', points: ['HEX, RGB & CMYK color palettes', 'Heading & body typography pairings', 'Clear brand usage rulebook'] },
        { label: '03. Ready Collateral', title: 'Cards & Digital Brand Kit', points: ['Print-ready business card designs', 'Social profile avatars & cover banners', 'Organized cloud asset library'] },
      ],
    },
    'social-content-grid': {
      subtitle: 'Multi-Platform Social Media Grid',
      heading: 'Structured Visual Content Across Instagram, LinkedIn, Facebook & TikTok',
      columns: [
        { label: '01. Profile Foundation', title: 'Setup & Optimization', points: ['Aligned bios, links & contact buttons', 'Branded profile & cover graphics', 'Instagram highlight cover icons'] },
        { label: '02. Visual Formats', title: 'Posts, Carousels & Reels', points: ['Branded single-image service posts', 'Educational multi-slide carousels', 'Short-form vertical Reels graphics'] },
        { label: '03. Consistency', title: 'Calendars & Management', points: ['Monthly planned content calendars', 'Tailored captions & hashtags', 'Scheduled publishing & reporting'] },
      ],
    },
    'growth-funnel': {
      subtitle: 'Search-to-Lead Conversion Funnel',
      heading: 'Turning Local Search & Campaign Traffic Into Tracked Enquiries',
      columns: [
        { label: '01. Discovery', title: 'Local SEO & Paid Search', points: ['High-intent Google search rankings', 'Targeted Google & social campaigns', 'Local map pack visibility'] },
        { label: '02. Conversion', title: 'Dedicated Landing Pages', points: ['Fast, message-matched landing pages', 'Clear call, quote & WhatsApp CTAs', '5-star review & trust integration'] },
        { label: '03. Attribution', title: 'Analytics & Reporting', points: ['GA4 & Tag Manager event tracking', 'Call & form conversion attribution', 'Clear monthly ROI summaries'] },
      ],
    },
    'lead-gen-engine': {
      subtitle: 'Automated Sales Pipeline Architecture',
      heading: 'Lead Discovery → Qualification → Multi-Step Follow-Up → Booked Call',
      columns: [
        { label: '01. Capture & Score', title: 'Discovery & Qualification', points: ['Inbound & B2B lead capture', 'Automated budget & service scoring', 'Instant speed-to-lead response'] },
        { label: '02. Nurture', title: 'Automated Follow-Ups', points: ['Personalized email follow-up sequences', 'Pending quote check-in reminders', 'Auto-pause when prospect replies'] },
        { label: '03. Handoff', title: 'CRM & Calendar Booking', points: ['Automatic CRM contact & deal entry', 'Direct calendar appointment booking', 'Sales team notification summary'] },
      ],
    },
    'biometric-access-matrix': {
      subtitle: 'Door Access & Attendance Architecture',
      heading: 'Biometric, RFID & PIN Access Control With Staff Attendance Logs',
      columns: [
        { label: '01. Credentials', title: 'Biometrics, Cards & PINs', points: ['Touchless facial recognition terminals', 'Fingerprint & RFID keycard readers', 'Multi-credential PIN + card pads'] },
        { label: '02. Door Hardware', title: 'Locks & Safety Releases', points: ['Heavy-duty magnetic & strike locks', 'Touchless exit buttons & break-glass', 'Fire alarm relay & battery backup'] },
        { label: '03. Administration', title: 'Attendance & Visitor Logs', points: ['Automated employee clock-in reports', 'Instant lost-card revocation', 'Role-based door time schedules'] },
      ],
    },
    'remote-monitoring-hub': {
      subtitle: 'Centralized Security Operations',
      heading: 'Live Mobile Viewing, Smart AI Intrusion Alerts & Multi-Site Control',
      columns: [
        { label: '01. Live Access', title: 'Mobile & Desktop Viewing', points: ['Encrypted iOS & Android viewing apps', 'Multi-camera live desktop grids', 'Instant timeline playback & clip export'] },
        { label: '02. Smart Detection', title: 'AI Intrusion Notifications', points: ['Human & vehicle motion filtering', 'Virtual perimeter line-crossing alerts', 'Scheduled after-hours push notifications'] },
        { label: '03. Multi-Site', title: 'Centralized Management', points: ['View multiple branches in one app', 'Role-based staff viewing permissions', 'Recorder & camera health alerts'] },
      ],
    },
    'security-maintenance-plan': {
      subtitle: 'Preventive Security Lifecycle',
      heading: 'Routine Diagnostics, Storage Upgrades & Rapid Technical Repairs',
      columns: [
        { label: '01. Inspection', title: 'Camera & Recorder Audits', points: ['Checking all camera angles & night IR', 'Cleaning outdoor lenses & housings', 'Testing PoE switches & power supplies'] },
        { label: '02. Upgrades', title: 'Storage & Camera Swaps', points: ['Surveillance hard drive expansion', 'Replacing blurry or dead cameras', 'Recorder firmware security updates'] },
        { label: '03. Continuity', title: 'Maintenance Contracts', points: ['Scheduled preventive site visits', 'Mobile viewing reconnection support', 'Priority technician callouts'] },
      ],
    },
  };

  const config = defaultConfigs[visualType] || defaultConfigs['hardware-diagnostics'];

  return (
    <div className="bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-8">
      <div className="mb-6">
        <div className="text-xs text-[#5D687A] mb-1">{config.subtitle}</div>
        <h3 className="text-xl font-bold text-[#0A1020] font-display">{config.heading}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {config.columns.map((col) => (
          <div key={col.title} className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
            <div className="text-xs font-mono-code font-semibold text-[#006BFF] mb-1">{col.label}</div>
            <h4 className="text-base font-bold text-[#0A1020] font-display mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-xs text-[#5D687A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
