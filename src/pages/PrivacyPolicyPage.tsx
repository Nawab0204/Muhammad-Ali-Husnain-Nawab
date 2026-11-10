import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Globe,
  UserCheck,
  FileText,
  Mail,
  Cookie,
  AlertTriangle,
  Server,
  Bot,
  Settings,
  Printer,
  CheckCircle2,
  Phone,
  HelpCircle,
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import { useApp } from '../context/AppContext';
import { LEGAL_CONFIG, LEGAL_PAGES_META } from '../config/legalConfig';

interface PrivacySection {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: React.ReactNode;
}

export const PrivacyPolicyPage: React.FC<{ onNavigate?: (path: string) => void }> = ({
  onNavigate: propNavigate,
}) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;
  const [activeSectionId, setActiveSectionId] = useState<string>('priv-01');

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
  };

  const handlePrint = () => {
    window.print();
  };

  const SECTIONS: PrivacySection[] = [
    {
      id: 'priv-01',
      number: '01',
      title: 'Business Identity & Privacy Contact Desk',
      summary: 'Data controller details, dedicated privacy contact email, and response SLAs.',
      content: (
        <div className="space-y-4">
          <p>
            This Privacy Policy applies to personal information collected by <strong>{LEGAL_CONFIG.brandName}</strong> acting as a data controller or data processor where applicable.
          </p>
          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2 text-xs">
            <div className="font-mono-code font-bold text-[#0052CC] uppercase">
              Privacy &amp; Data Governance Contacts
            </div>
            <ul className="space-y-1 text-[#334155]">
              <li><strong>Brand &amp; Operating Name:</strong> {LEGAL_CONFIG.brandName}</li>
              <li><strong>Formal Entity Name:</strong> <span className="font-mono-code text-amber-700 bg-amber-50 px-1 py-0.5 rounded">{LEGAL_CONFIG.registeredEntityName}</span></li>
              <li><strong>Statutory Registered Office:</strong> <span className="font-mono-code text-amber-700 bg-amber-50 px-1 py-0.5 rounded">{LEGAL_CONFIG.registeredStatutoryAddress}</span></li>
              <li><strong>Designated Privacy Contact:</strong> <a href={`mailto:${LEGAL_CONFIG.privacyEmail}?subject=Privacy%20Inquiry`} className="text-[#0052CC] underline">{LEGAL_CONFIG.privacyEmail}</a> (Subject: Attention: Privacy Coordinator)</li>
              <li><strong>Official Business Inquiries:</strong> <a href={`mailto:${LEGAL_CONFIG.officialEmail}`} className="text-[#0052CC] underline">{LEGAL_CONFIG.officialEmail}</a></li>
              <li><strong>Technical Helpdesk:</strong> {LEGAL_CONFIG.phone}</li>
            </ul>
          </div>
          <p className="text-xs text-[#475569]">
            We review and acknowledge all verified privacy inquiries, data subject access requests (DSARs), or deletion requests within <strong>forty-eight (48) business hours</strong>.
          </p>
        </div>
      ),
    },
    {
      id: 'priv-02',
      number: '02',
      title: 'Categories of Personal Information Collected',
      summary: 'Accurate catalog of data collected via forms, engineering contracts, and web telemetry.',
      content: (
        <div className="space-y-4">
          <p>
            We only collect personal information that is reasonably necessary to respond to your inquiries, prepare technical quotes, deliver contracted technology services, and maintain our systems:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Direct Inquiry &amp; Quotation Details:</strong> Name, business name, corporate or personal email address, telephone/WhatsApp number, country/region, subject of interest, and project description provided via our website forms or email.
            </li>
            <li>
              <strong>Commercial Transaction Information:</strong> Invoices, payment transaction identifiers, service package selected, billing currency, billing address, and bank/wire confirmation records. <em>Important: We do not process or store credit/debit card numbers directly on our servers; payments are processed through secure, PCI-DSS compliant third-party payment gateways.</em>
            </li>
            <li>
              <strong>Client Technical Project Credentials:</strong> Server SSH credentials, domain DNS panel access, CMS logins, staging database dumps, and API keys supplied by clients under contract. All credentials are stored in encrypted vaults and destroyed post-handover.
            </li>
            <li>
              <strong>Technical Web Logs &amp; Telemetry:</strong> Standard non-identifying server request headers (IP address, operating system, browser user-agent, referring URL, timestamp). We do not correlate server logs with individual personal identities for profiling.
            </li>
            <li>
              <strong>AI &amp; Messaging Interactions:</strong> Transcripts of customer inquiries submitted through our website FAQ bot or official WhatsApp Business API endpoints, retained to route tickets and verify technical scope.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'priv-03',
      number: '03',
      title: 'Lawful Collection Channels & Transmission',
      summary: 'How information enters our systems directly from users and verified channels.',
      content: (
        <div className="space-y-4">
          <p>
            Personal data is gathered primarily through direct interactions where you knowingly provide it:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li><strong>Interactive Contact &amp; Quotation Forms:</strong> Information submitted via forms on <a href="https://botlytices.com" className="text-[#0052CC] underline">https://botlytices.com</a>.</li>
            <li><strong>Direct Communications:</strong> Inquiries sent to <a href={`mailto:${LEGAL_CONFIG.officialEmail}`} className="text-[#0052CC] underline">{LEGAL_CONFIG.officialEmail}</a>, phone calls to {LEGAL_CONFIG.phone}, or messages sent to our official WhatsApp support channel ({LEGAL_CONFIG.whatsapp}).</li>
            <li><strong>Contract Execution:</strong> Formal statements of work, proposals, master service agreements, and onboarding questionnaires.</li>
            <li><strong>Automated Essential Cookies:</strong> Minimal session and regional currency cookies placed on your browser to support site security and currency switching.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'priv-04',
      number: '04',
      title: 'Specific Business Purposes for Processing',
      summary: 'Why your data is processed: quotations, delivery, ongoing care, and legal duties.',
      content: (
        <div className="space-y-4">
          <p>
            We process personal data solely for clear, lawful, and disclosed business purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>To review project briefs and prepare accurate, customized technical quotations.</li>
            <li>To execute web development, IT network engineering, digital presence optimization, AI automation, and CCTV installations.</li>
            <li>To provide ongoing monthly website care, software patch updates, uptime monitoring, and emergency helpdesk assistance.</li>
            <li>To administer customer invoicing, process milestone settlements, and maintain statutory corporate accounting records.</li>
            <li>To protect our website infrastructure, prevent Denial-of-Service (DDoS) attacks, detect fraud, and ensure firewall integrity.</li>
            <li>To comply with applicable tax, regulatory, and corporate record-keeping requirements.</li>
          </ul>
          <div className="p-3.5 rounded-2xl bg-[#EBF3FF] border border-[#0052CC]/20 text-xs text-[#0052CC] font-medium">
            <strong>Strict Anti-Data-Broker Policy:</strong> We never sell, rent, monetize, or disclose your personal data or project briefs to third-party data brokers, advertising aggregators, or external marketing firms.
          </div>
        </div>
      ),
    },
    {
      id: 'priv-05',
      number: '05',
      title: 'Purpose & Lawful Basis Processing Matrix',
      summary: 'Transparent mapping of activities to GDPR Article 6 and international legal grounds.',
      content: (
        <div className="space-y-4">
          <p>
            In accordance with the EU/UK General Data Protection Regulation (GDPR) and international privacy laws requiring an explicit legal basis:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-[#E6EBF2] rounded-2xl overflow-hidden">
              <thead className="bg-[#F8FAFC] border-b border-[#E6EBF2] font-mono-code text-[#0A1020]">
                <tr>
                  <th className="p-3">Processing Purpose</th>
                  <th className="p-3">Categories of Data</th>
                  <th className="p-3">Primary Lawful Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6EBF2] text-[#334155]">
                <tr>
                  <td className="p-3 font-medium">Responding to contact &amp; quotation requests</td>
                  <td className="p-3">Name, email, phone, project scope</td>
                  <td className="p-3">
                    <strong>Contractual Necessity:</strong> Steps taken at the data subject&apos;s request prior to entering into a contract (GDPR Art. 6(1)(b)).
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Performing contracted engineering services</td>
                  <td className="p-3">Customer contact, server credentials, project files</td>
                  <td className="p-3">
                    <strong>Contract Performance:</strong> Necessary for the performance of a contract to which the customer is party (GDPR Art. 6(1)(b)).
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Financial invoicing &amp; accounting compliance</td>
                  <td className="p-3">Billing address, transaction records, invoice logs</td>
                  <td className="p-3">
                    <strong>Legal Obligation:</strong> Compliance with statutory tax, audit, and commercial accounting laws (GDPR Art. 6(1)(c)).
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Platform security &amp; DDoS mitigation</td>
                  <td className="p-3">IP address, server request logs, user agent</td>
                  <td className="p-3">
                    <strong>Legitimate Interests:</strong> Protecting the integrity and availability of our network and client infrastructure (GDPR Art. 6(1)(f)).
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Optional non-essential cookies / currency remember</td>
                  <td className="p-3">Browser storage preference, selected market code</td>
                  <td className="p-3">
                    <strong>Consent:</strong> Freely given affirmative consent via our Cookie Preferences tool (GDPR Art. 6(1)(a)).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'priv-06',
      number: '06',
      title: 'Cookies, Local Storage & Consent Mechanism',
      summary: 'Strictly necessary security cookies, preference storage, and zero behavioral ad trackers.',
      content: (
        <div className="space-y-4">
          <p>
            Botlytices practices minimal, privacy-first technical cookie management in compliance with the EU ePrivacy Directive and international standards:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>
              <strong>Strictly Necessary Cookies:</strong> Essential for cryptographic CSRF defense, secure session tokens, and server load distribution. These do not store personal profiles.
            </li>
            <li>
              <strong>Functional &amp; Currency Preferences:</strong> Stores your chosen international currency (USD, GBP, CAD, AUD, NZD, EUR, or AED) in `localStorage` so prices render accurately.
            </li>
            <li>
              <strong>Zero Cross-Site Ad-Tracking Pixels:</strong> We deliberately <strong>do not embed Facebook Pixel, TikTok tracking tags, Google AdSense, or programmatic retargeting cookies</strong> on our website.
            </li>
          </ul>
          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-[#0A1020]">
                Control Your Cookie Preferences At Any Time
              </div>
              <p className="text-[11px] text-[#5D687A]">
                You can review, modify, or withdraw non-essential cookie permissions whenever you visit.
              </p>
            </div>
            <button
              onClick={handleOpenCookiePreferences}
              className="px-4 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#0041A3] text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Open Cookie Settings</span>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'priv-07',
      number: '07',
      title: 'Verified Third-Party Providers & Subprocessors',
      summary: 'Actual cloud hosting, email delivery, and messaging systems utilized.',
      content: (
        <div className="space-y-4">
          <p>
            In operating our services, Botlytices engages vetted, industry-leading third-party service providers acting under strict confidentiality and security commitments:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
              <span className="font-bold text-[#0A1020]">Cloud Infrastructure &amp; Edge CDN</span>
              <p className="text-[#5D687A]">AWS / Cloudflare / Vercel (High-security edge routing, SSL/TLS termination, and DDoS mitigation).</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
              <span className="font-bold text-[#0A1020]">Inquiry Transmission &amp; Email Delivery</span>
              <p className="text-[#5D687A]">EmailJS / Google Workspace (Encrypted TLS transmission of contact forms directly to botlytices@gmail.com).</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
              <span className="font-bold text-[#0A1020]">Messaging &amp; Telephony APIs</span>
              <p className="text-[#5D687A]">Meta WhatsApp Business Cloud API / Twilio (Secure customer messaging and automated inquiry dispatch).</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
              <span className="font-bold text-[#0A1020]">Payment Processors</span>
              <p className="text-[#5D687A]">Stripe / Bank Wire Clearing (PCI-DSS Level 1 certified processors; no raw card data touches Botlytices servers).</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'priv-08',
      number: '08',
      title: 'International Cross-Border Data Transfers',
      summary: 'Safeguards for serving clients in the US, UK, Canada, Australia, NZ, EU, and UAE.',
      content: (
        <div className="space-y-4">
          <p>
            Because Botlytices serves commercial clients across the United States, United Kingdom, Canada, Australia, New Zealand, Ireland, the wider European Union, the UAE, and Pakistan, personal information may be accessed or stored on secure cloud servers located outside your home country:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>European Union &amp; UK Transfers:</strong> Where personal data originating in the EEA or UK is transferred to infrastructure outside the EEA/UK without an adequacy decision, we execute standard contractual clauses (EU SCCs) or the UK International Data Transfer Addendum (IDTA).
            </li>
            <li>
              <strong>Canada (PIPEDA):</strong> We adhere to the fair information principles established under the Personal Information Protection and Electronic Documents Act (PIPEDA).
            </li>
            <li>
              <strong>Australia (Privacy Act 1988):</strong> Cross-border disclosures comply with Australian Privacy Principle (APP) 8, ensuring overseas recipients provide comparable privacy protections.
            </li>
            <li>
              <strong>New Zealand (Privacy Act 2020):</strong> Information transferred overseas meets Information Privacy Principle (IPP) 12 safeguards.
            </li>
            <li>
              <strong>United Arab Emirates:</strong> Data processing complies with the principles of UAE Federal Decree-Law No. 45/2021 on Personal Data Protection.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'priv-09',
      number: '09',
      title: 'Data Retention Schedule & Automated Purging',
      summary: 'Specific retention limits for project briefs, staging credentials, and financial logs.',
      content: (
        <div className="space-y-4">
          <p>
            We adhere to the principle of storage limitation, keeping personal information only as long as necessary to fulfill the original purpose or comply with legal requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Website Inquiry Briefs:</strong> Retained for up to <strong>twenty-four (24) months</strong> to support historical project continuity, warranty claims, or future contract expansions, after which records are archived or deleted.
            </li>
            <li>
              <strong>Client Development Credentials &amp; Staging Databases:</strong> Server passwords, temporary API tokens, and development database dumps are permanently purged within <strong>thirty (30) calendar days</strong> following project handover and verified live deployment.
            </li>
            <li>
              <strong>Financial &amp; Invoicing Records:</strong> Retained for <strong>seven (7) years</strong> to comply with mandatory statutory corporate accounting, audit, and tax regulations.
            </li>
            <li>
              <strong>Server Access &amp; Security Logs:</strong> Retained for a maximum rolling window of <strong>ninety (90) days</strong> for intrusion detection and firewall auditing, after which logs are automatically overwritten.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'priv-10',
      number: '10',
      title: 'Technical & Organizational Security Safeguards',
      summary: 'TLS 1.3 encryption, secret vaulting, role-based access, and realistic internet limits.',
      content: (
        <div className="space-y-4">
          <p>
            We implement defense-in-depth administrative, technical, and physical security measures to safeguard personal information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li><strong>Transit Encryption:</strong> All communications between your browser and our servers are encrypted using modern Transport Layer Security (TLS 1.3 / SSL) with HTTP Strict Transport Security (HSTS) enforced.</li>
            <li><strong>Encrypted Secret Managers:</strong> Client API tokens, SSH keys, and staging credentials are stored exclusively inside encrypted secrets vaults with automated key rotation.</li>
            <li><strong>Principle of Least Privilege:</strong> Access to customer codebases and project files is restricted strictly to assigned senior engineers who require access to complete deliverables.</li>
            <li><strong>Two-Factor Authentication:</strong> Mandated across all administrative developer panels, cloud consoles, repository managers, and corporate communication tools.</li>
          </ul>
          <p className="text-xs text-[#5D687A]">
            * Realistic Internet Security Reality: While we employ professional security practices, no internet transmission or electronic storage method can guarantee absolute 100% security against all potential zero-day vulnerabilities.
          </p>
        </div>
      ),
    },
    {
      id: 'priv-11',
      number: '11',
      title: 'Universal Customer Privacy Rights & Exercise Procedures',
      summary: 'Right to access, correct, delete, port, or restrict data, and how to request it.',
      content: (
        <div className="space-y-4">
          <p>
            Regardless of your geographic location, Botlytices respects your fundamental privacy rights:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <strong>Right of Access:</strong> You may request a copy of the personal information we hold about you.
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <strong>Right to Rectification:</strong> You may request prompt correction of inaccurate or incomplete records.
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <strong>Right to Erasure (&quot;Be Forgotten&quot;):</strong> You may request permanent deletion of your information, subject to statutory tax retention rules.
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <strong>Right to Restriction &amp; Objection:</strong> You may object to or restrict processing where based on legitimate interests.
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#0052CC]/30 text-xs space-y-2">
            <div className="font-bold text-[#0A1020] flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#0052CC]" />
              <span>How to Exercise Your Privacy Rights:</span>
            </div>
            <p className="text-[#334155]">
              Email our designated privacy desk at <a href={`mailto:${LEGAL_CONFIG.privacyEmail}?subject=Privacy%20Request`} className="text-[#0052CC] font-bold underline">{LEGAL_CONFIG.privacyEmail}</a> with the subject line <strong>&quot;Data Privacy Request - [Your Name]&quot;</strong>. We verify your identity and process requests within <strong>thirty (30) days</strong> at zero administrative charge.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'priv-12',
      number: '12',
      title: 'European Union & United Kingdom Specific Provisions',
      summary: 'Territorial scope, supervisory authorities, and UK ICO complaint pathways.',
      content: (
        <div className="space-y-4">
          <p>
            For individuals and businesses located in the European Economic Area (EEA) and the United Kingdom, our processing complies with the <strong>EU General Data Protection Regulation (Regulation (EU) 2016/679)</strong> and the <strong>UK Data Protection Act 2018 / UK GDPR</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>You have the right to lodge a complaint with your local data protection supervisory authority (such as the <strong>Information Commissioner&apos;s Office (ICO)</strong> in the United Kingdom or the relevant Data Protection Authority in your EU Member State).</li>
            <li>We do not carry out automated individual decision-making or profiling that produces legal or similarly significant effects.</li>
            <li>EU/UK Representative &amp; DPO Notice: In accordance with Article 27 and Article 37 of the GDPR, Botlytices currently maintains a designated internal Privacy Coordinator. If formal appointment of an external EU/UK representative becomes mandatory under scale thresholds, such appointment will be registered and notified here.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'priv-13',
      number: '13',
      title: 'United States State Privacy Disclosures (CCPA / CPRA)',
      summary: 'Disclosures under California Consumer Privacy Act and other US state laws.',
      content: (
        <div className="space-y-4">
          <p>
            This section supplements our policy for residents of California, Colorado, Virginia, Connecticut, and other US states with consumer data privacy legislation:
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="font-bold text-[#0A1020]">
              Notice of Collection &amp; No Sale / No Sharing Declaration
            </div>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Categories Collected:</strong> Identifiers (name, email, phone, IP), commercial records, professional details, and internet activity telemetry.</li>
              <li><strong>Zero Sale of Personal Data:</strong> We do not sell personal data for monetary or other valuable consideration under California Civil Code Section 1798.140.</li>
              <li><strong>Zero Sharing for Cross-Context Behavioral Ads:</strong> We do not share consumer personal data with third parties for cross-context behavioral advertising.</li>
              <li><strong>Sensitive Personal Information:</strong> We do not collect or process sensitive personal information for the purpose of inferring consumer characteristics.</li>
            </ul>
          </div>
          <p className="text-xs text-[#475569]">
            California residents may designate an authorized agent to submit requests on their behalf, provided verified written authorization is provided.
          </p>
        </div>
      ),
    },
    {
      id: 'priv-14',
      number: '14',
      title: 'Artificial Intelligence, Voice Recording & Chatbot Data',
      summary: 'Enterprise LLM data privacy, WhatsApp pipelines, and telephony disclosures.',
      content: (
        <div className="space-y-4">
          <p>
            As part of our AI Automation division, we build, configure, and maintain automated voice and chat systems:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Enterprise Zero-Training Commitments:</strong> When integrating external LLMs (e.g., OpenAI, Anthropic, Google Gemini), we utilize commercial enterprise API endpoints whose data privacy terms explicitly state that customer prompts and API inputs <strong>are not used to train public foundation models</strong>.
            </li>
            <li>
              <strong>Voice Call Recordings &amp; Consent:</strong> When implementing AI telephone agents for clients, system configurations mandate audible call disclosures (e.g., &quot;This call is handled by an automated assistant and may be recorded for quality assurance&quot;) in compliance with all relevant telecommunications laws.
            </li>
            <li>
              <strong>WhatsApp Business Data:</strong> Inquiries routed through official WhatsApp Business APIs are transmitted through Meta&apos;s encrypted enterprise cloud infrastructure in accordance with the WhatsApp Business Terms of Service.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'priv-15',
      number: '15',
      title: 'Children&apos;s Online Privacy Protection &amp; Age Limits',
      summary: 'Services are strictly designed for commercial enterprises and adults 18+.',
      content: (
        <div className="space-y-4">
          <p>
            Botlytices provides professional commercial technology engineering, web development, IT, and business automation solutions exclusively to commercial enterprises, business owners, and adults aged <strong>eighteen (18) years or older</strong>.
          </p>
          <p className="text-xs text-[#475569]">
            Our website and services are not directed toward children under 16 years of age (or under 13 in the US under COPPA). We do not knowingly collect personal data from minors. If you believe a minor has submitted personal information through our website, please email <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="text-[#0052CC] underline">{LEGAL_CONFIG.privacyEmail}</a> immediately for prompt deletion.
          </p>
        </div>
      ),
    },
    {
      id: 'priv-16',
      number: '16',
      title: 'Security Incident Protocol, Breach Notification & Complaints',
      summary: 'Incident response protocol and statutory notification deadlines.',
      content: (
        <div className="space-y-4">
          <p>
            Botlytices maintains an active technical security response protocol to detect, investigate, and contain potential unauthorized data access incidents:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>In the event of a verified security incident resulting in a personal data breach affecting client data, we will notify affected customers without undue delay.</li>
            <li>Notifications will adhere to applicable statutory timelines (such as the <strong>72-hour notification threshold</strong> under Article 33 of the GDPR where applicable to data controllers).</li>
            <li>Notices will detail the nature of the breach, categories of data affected, containment measures taken, and recommended mitigations.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'priv-17',
      number: '17',
      title: 'Privacy Policy Updates, Versioning & Communications',
      summary: 'How policy changes are communicated, version numbers, and archiving.',
      content: (
        <div className="space-y-4">
          <p>
            We may update this Privacy Policy from time to time to reflect operational changes, new service features, or revised regulatory obligations.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>Any updates will be published directly on this page with an updated &quot;Last Updated&quot; date and version identifier.</li>
            <li>If we introduce material changes to how personal data is collected or processed, we will provide prominent notice on our website homepage or notify active contracted clients via email prior to the changes taking effect.</li>
            <li>We encourage you to review this policy periodically to stay informed about our data protection standards.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0A1020]">
      <SeoAndBreadcrumb
        title={LEGAL_PAGES_META.privacy.title}
        description={LEGAL_PAGES_META.privacy.description}
        path={LEGAL_PAGES_META.privacy.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Privacy Policy' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <section className="pt-14 pb-12 lg:pt-20 lg:pb-16 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FF] border border-[#0052CC]/20 text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>International Data Privacy · Version {LEGAL_CONFIG.version}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium">
              &quot;At Botlytices, we respect your privacy and are committed to handling personal information responsibly. This Privacy Policy explains what information we collect, why we collect it, how we use and protect it, when it may be shared and what rights individuals may have under applicable privacy laws.&quot;
            </p>
          </div>

          {/* Legal Information Box (Required by Master Specification) */}
          <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E6EBF2]">
              <div>
                <span className="text-[11px] font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                  Data Governance Registry
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0A1020]">
                  Privacy Administration &amp; Identity Details
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#0052CC] text-[#334155] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Policy</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div>
                <div className="text-[#5D687A] font-semibold">Effective Date:</div>
                <div className="text-[#0A1020] font-bold mt-0.5">{LEGAL_CONFIG.effectiveDate}</div>
              </div>
              <div>
                <div className="text-[#5D687A] font-semibold">Last Updated:</div>
                <div className="text-[#0A1020] font-bold mt-0.5">{LEGAL_CONFIG.lastUpdated}</div>
              </div>
              <div>
                <div className="text-[#5D687A] font-semibold">Responsible Entity:</div>
                <div className="text-[#0A1020] font-bold mt-0.5">{LEGAL_CONFIG.brandName}</div>
              </div>
              <div>
                <div className="text-[#5D687A] font-semibold">Privacy Contact:</div>
                <div className="text-[#0052CC] font-bold mt-0.5">
                  <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`}>{LEGAL_CONFIG.privacyEmail}</a>
                </div>
              </div>
            </div>

            {/* Verification Status Notice */}
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Statutory Entity Notice:</strong> Corporate registration identity is currently logged under placeholder <span className="font-mono-code font-bold">{LEGAL_CONFIG.registeredEntityName}</span> pending administrative certification. All data subject requests are processed directly by our privacy coordinator via <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`} className="underline font-bold">{LEGAL_CONFIG.privacyEmail}</a>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Table of Contents */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-4 xl:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                      Table of Contents
                    </span>
                    <span className="text-[11px] font-mono-code text-[#5D687A]">17 Sections</span>
                  </div>

                  <nav aria-label="Privacy table of contents" className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                    {SECTIONS.map((sec) => {
                      const isActive = activeSectionId === sec.id;
                      return (
                        <button
                          key={sec.id}
                          onClick={() => scrollToSection(sec.id)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between gap-2 cursor-pointer ${
                            isActive
                              ? 'bg-[#0052CC] text-white font-bold shadow-xs'
                              : 'text-[#475569] hover:bg-white hover:text-[#0A1020]'
                          }`}
                        >
                          <span className="truncate">
                            <span className="font-mono-code opacity-75 mr-1.5">{sec.number}.</span>
                            {sec.title}
                          </span>
                        </button>
                      );
                    })}
                  </nav>

                  <div className="pt-3 border-t border-[#E6EBF2] space-y-2">
                    <button
                      onClick={handleOpenCookiePreferences}
                      className="w-full text-left text-xs font-semibold text-[#0052CC] hover:underline flex items-center gap-1.5"
                    >
                      <Cookie className="w-3.5 h-3.5" />
                      <span>Configure Cookie Preferences</span>
                    </button>
                    <button
                      onClick={() => onNavigate('/terms-of-service')}
                      className="w-full text-left text-xs font-semibold text-[#0052CC] hover:underline flex items-center justify-between"
                    >
                      <span>View Terms of Service →</span>
                    </button>
                    <button
                      onClick={() => onNavigate('/refund-policy')}
                      className="w-full text-left text-xs font-semibold text-[#0052CC] hover:underline flex items-center justify-between"
                    >
                      <span>View Refund Policy →</span>
                    </button>
                  </div>
                </div>

                {/* Privacy Rights Helpdesk Card */}
                <div className="p-5 rounded-2xl bg-[#07152E] text-white space-y-3">
                  <div className="text-[11px] font-mono-code text-[#00C8FF]">Submit Data Request</div>
                  <h4 className="text-sm font-bold font-display">
                    Exercise Your Privacy Rights
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Request an export of your inquiry records or exercise your right to deletion:
                  </p>
                  <a
                    href={`mailto:${LEGAL_CONFIG.privacyEmail}?subject=${encodeURIComponent('Data Subject Access Request (DSAR)')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C8FF] hover:underline pt-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{LEGAL_CONFIG.privacyEmail}</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Core Policy Body */}
            <main className="lg:col-span-8 xl:col-span-8 space-y-10">
              {SECTIONS.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E6EBF2] shadow-2xs space-y-5 scroll-mt-24 transition-all hover:border-[#CBD5E1]"
                >
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E6EBF2]">
                    <div>
                      <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                        Section {sec.number}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0A1020] font-display mt-0.5">
                        {sec.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs text-[#5D687A] italic pb-1">
                    Summary: {sec.summary}
                  </p>

                  <div className="text-xs sm:text-sm text-[#334155] leading-relaxed space-y-3">
                    {sec.content}
                  </div>
                </article>
              ))}

              {/* Bottom Policy Switcher */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0A1020]">
                    Related Legal Policies
                  </h4>
                  <p className="text-xs text-[#5D687A]">
                    Examine our commercial operating rules and cancellation rights.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('/terms-of-service')}
                    className="px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-xs font-semibold text-[#0A1020] hover:border-[#0052CC] transition-colors"
                  >
                    Terms of Service
                  </button>
                  <button
                    onClick={() => onNavigate('/refund-policy')}
                    className="px-4 py-2 rounded-xl bg-[#0052CC] text-white text-xs font-bold hover:bg-[#0041A3] transition-colors"
                  >
                    Refund Policy
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};
