import React, { useState } from 'react';
import {
  Scale,
  ShieldAlert,
  ShieldCheck,
  FileText,
  CreditCard,
  Layers,
  Code2,
  Server,
  Globe,
  Bot,
  Camera,
  Lock,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Printer,
  Mail,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import { useApp } from '../context/AppContext';
import { LEGAL_CONFIG, LEGAL_PAGES_META } from '../config/legalConfig';

interface Section {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: React.ReactNode;
}

export const TermsOfServicePage: React.FC<{ onNavigate?: (path: string) => void }> = ({
  onNavigate: propNavigate,
}) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-01');

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const SECTIONS: Section[] = [
    {
      id: 'sec-01',
      number: '01',
      title: 'Business Identity & Agreement Formation',
      summary: 'Who contracts with you, how agreements are formed, and official contact channels.',
      content: (
        <div className="space-y-4">
          <p>
            These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;Customer&quot;, &quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) and <strong>{LEGAL_CONFIG.brandName}</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>
          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2 text-xs">
            <div className="font-mono-code font-bold text-[#0052CC] uppercase">
              Official Contracting Entity &amp; Verified Contact Channels
            </div>
            <ul className="space-y-1 text-[#334155]">
              <li><strong>Brand Name:</strong> {LEGAL_CONFIG.brandName}</li>
              <li><strong>Legal Entity Name:</strong> <span className="font-mono-code text-amber-700 bg-amber-50 px-1 py-0.5 rounded">{LEGAL_CONFIG.registeredEntityName}</span></li>
              <li><strong>Registration Number:</strong> <span className="font-mono-code text-amber-700 bg-amber-50 px-1 py-0.5 rounded">{LEGAL_CONFIG.registrationNumber}</span></li>
              <li><strong>Statutory Registered Address:</strong> <span className="font-mono-code text-amber-700 bg-amber-50 px-1 py-0.5 rounded">{LEGAL_CONFIG.registeredStatutoryAddress}</span></li>
              <li><strong>Operating Delivery Hub:</strong> {LEGAL_CONFIG.operatingHeadquarters}</li>
              <li><strong>Official Business Inquiries:</strong> <a href={`mailto:${LEGAL_CONFIG.officialEmail}`} className="text-[#0052CC] underline">{LEGAL_CONFIG.officialEmail}</a></li>
              <li><strong>Direct Technical Telephone:</strong> {LEGAL_CONFIG.phone}</li>
              <li><strong>Direct WhatsApp Channel:</strong> {LEGAL_CONFIG.whatsapp}</li>
            </ul>
          </div>
          <p>
            <strong>Contract Formation Point:</strong> A binding contract is formed upon the earliest occurrence of any of the following events:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>Customer issues written or electronic acceptance of a formal Botlytices Project Proposal, Quotation, or Statement of Work (SOW);</li>
            <li>Customer executes a formal master services agreement, retainer schedule, or electronic agreement;</li>
            <li>Customer remits an initial project commencement deposit, milestone invoice, or recurring service subscription fee;</li>
            <li>Customer provides explicit written or messaging authorization to schedule engineering hours or commence technical work.</li>
          </ul>
          <p className="text-xs text-[#5D687A]">
            * Note regarding unverified corporate registration details: As set out in our public launch compliance audit, formal statutory corporate registration particulars are undergoing administrative certification. In the interim, this agreement binds the operating business under commercial principles of contract.
          </p>
        </div>
      ),
    },
    {
      id: 'sec-02',
      number: '02',
      title: 'Scope of Services & Five Business Divisions',
      summary: 'The five operating divisions covered, custom quotations, and advertised benchmark rates.',
      content: (
        <div className="space-y-4">
          <p>
            Botlytices operates as a specialized engineering, technology development, and managed systems consultancy structured across five primary business divisions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
              <span className="font-mono-code font-bold text-[#0052CC]">01. Web Development</span>
              <p className="text-[#5D687A]">
                Custom responsive websites, UI/UX design, e-commerce stores (Shopify, WooCommerce), full-stack web applications, website maintenance, hosting, and performance care.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
              <span className="font-mono-code font-bold text-[#0052CC]">02. IT Support &amp; Infrastructure</span>
              <p className="text-[#5D687A]">
                Hardware troubleshooting, workstation maintenance, business networking, Wi-Fi mesh optimization, remote IT helpdesk, server administration, and cybersecurity hardening.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
              <span className="font-mono-code font-bold text-[#0052CC]">03. Digital Presence &amp; Branding</span>
              <p className="text-[#5D687A]">
                Brand identity systems, logo design, Google Business Profile optimization, Apple Maps, Bing Places, local SEO, AEO (AI engine search), and paid ad management.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
              <span className="font-mono-code font-bold text-[#0052CC]">04. AI Automation</span>
              <p className="text-[#5D687A]">
                AI voice telephone assistants, WhatsApp business automation, 24/7 web chat agents, automated CRM lead capture pipelines, and multi-app business workflows.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1 md:col-span-2">
              <span className="font-mono-code font-bold text-[#0052CC]">05. Security &amp; Surveillance</span>
              <p className="text-[#5D687A]">
                Commercial CCTV layout planning, remote camera streaming configuration, NVR/DVR setup, biometric access control terminals, security maintenance, and site assessments.
              </p>
            </div>
          </div>
          <p className="text-xs text-[#475569] leading-relaxed">
            <strong>Advertised Starting Rates vs Custom Scopes:</strong> Rates published on our international pricing card (such as entry 5-page websites at $1,199 / £899 / €1,099 or monthly care at $99) represent defined baseline scopes. Enterprise requirements, multi-branch networks, custom API architectures, high-sku e-commerce databases, and on-site physical hardware installations require tailored Statements of Work. Advertised starting rates do not constitute an irrevocable open offer for unlimited customized engineering.
          </p>
        </div>
      ),
    },
    {
      id: 'sec-03',
      number: '03',
      title: 'Customer Eligibility, Materials & Responsibilities',
      summary: 'Client supply of materials, credentials, timely feedback, and impact of delays.',
      content: (
        <div className="space-y-4">
          <p>
            Successful project delivery requires active, timely, and lawful collaboration from the Customer. By engaging Botlytices, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Information Accuracy:</strong> Supply complete, true, and up-to-date business details, legal disclosures, and technical parameters required for implementation.
            </li>
            <li>
              <strong>Content &amp; Asset Rights:</strong> Supply all necessary brand copy, logos, graphics, product databases, and media in appropriate formats. You warrant that you own or have obtained all necessary licenses, permissions, and copyright clearances for materials provided to us.
            </li>
            <li>
              <strong>Credential &amp; Infrastructure Access:</strong> Provide authorized, secure administrative access to relevant third-party services (domain registrars, DNS managers, cloud hosting panels, payment gateways, Google Workspace, telephony trunks, or site network switches) necessary to perform agreed deliverables.
            </li>
            <li>
              <strong>Timely Reviews &amp; Approvals:</strong> Review submitted design drafts, wireframes, staging deployments, and functional milestones within <strong>five (5) business days</strong> of receipt.
            </li>
            <li>
              <strong>Lawful Purpose Guarantee:</strong> Not use our software, servers, bots, automations, or networks for deceptive marketing, phishing, illegal gambling, counterfeit commerce, unauthorized surveillance, harassment, or transmission of malware.
            </li>
          </ul>
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs space-y-1.5">
            <div className="font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>Project Delivery Timeline &amp; Customer-Side Delays</span>
            </div>
            <p>
              Delivery estimates provided in proposals depend strictly upon timely Customer responses. If a project is delayed by more than twenty (20) business days due to missing client content, inaccessible accounts, or failure to review milestones, Botlytices reserves the right to reschedule engineering sprints and adjust completion timelines.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'sec-04',
      number: '04',
      title: 'Quotes, Pricing, Deposits & Payment Structures',
      summary: '50/30/20 milestones, currencies, pass-through costs, and late payments.',
      content: (
        <div className="space-y-4">
          <p>
            All commercial terms, fee structures, and milestone breakdowns are explicitly defined in written project proposals or itemized invoices.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Quotation Validity:</strong> Written quotations remain valid for <strong>thirty (30) calendar days</strong> from the date of issue unless otherwise stated in writing.
            </li>
            <li>
              <strong>Standard Milestone Schedule:</strong> Unless alternate terms are agreed in writing, bespoke development projects operate on a structured milestone schedule:
              <ul className="list-circle pl-5 pt-1 space-y-1 text-slate-600">
                <li><strong>50% Initial Deposit:</strong> Due prior to project scheduling, requirements intake, and engineering sprint commencement.</li>
                <li><strong>30% Milestone Payment:</strong> Due upon completion and approval of UI/UX design architectures, core staging prototype, or mid-project milestone.</li>
                <li><strong>20% Final Balance:</strong> Due upon staging completion, pre-flight Quality Assurance sign-off, and prior to live public deployment or credential transfer.</li>
              </ul>
            </li>
            <li>
              <strong>Recurring Subscriptions:</strong> Ongoing Website Care, IT Support Retainers, Local SEO Management, and AI Assistant retainers are billed on a monthly cycle in advance.
            </li>
            <li>
              <strong>Direct Pass-Through Expenses:</strong> Third-party expenses—including domain registrations, hosting server fees, premium WordPress/Shopify plugin licenses, Meta WhatsApp messaging API utility fees, OpenAI/telephony API token usage, physical CCTV hardware units, Cat6 structured cabling, and direct Google/Meta advertising spend—are separate from Botlytices professional engineering fees and are billed at direct cost or remitted directly to the respective providers.
            </li>
            <li>
              <strong>Currencies &amp; Taxes:</strong> Fees are quoted in the regional currency agreed upon (USD, GBP, CAD, AUD, NZD, EUR, or AED). Fees exclude local sales tax, VAT, or withholding taxes unless explicitly indicated. The Customer is responsible for any applicable local taxes mandated in their jurisdiction.
            </li>
            <li>
              <strong>Late Payments:</strong> Invoices not paid within fourteen (14) days of the due date may incur administrative interest at 1.5% per month (or the maximum statutory rate permitted by applicable law) and may lead to temporary suspension of active development sprints or managed support.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-05',
      number: '05',
      title: 'Project Scope, Revisions & Change Requests',
      summary: 'Distinguishing included scope from new features and the formal change protocol.',
      content: (
        <div className="space-y-4">
          <p>
            Every Botlytices engagement is defined by an agreed scope of work. To maintain strict delivery schedules and budget predictability, clear boundaries govern revisions and scope modifications:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Included Design Revisions:</strong> Standard fixed-scope website and design packages include up to <strong>two (2) rounds of consolidated revisions</strong> during the UI/UX design phase prior to code implementation.
            </li>
            <li>
              <strong>Definition of Change Request:</strong> Any request for new page layouts, structural database changes, extra API integrations, custom checkout workflows, or feature redesigns made after design approval is classified as an out-of-scope Change Request.
            </li>
            <li>
              <strong>Change Approval Protocol:</strong> Before any out-of-scope work begins, Botlytices will provide a written Change Order specifying the estimated technical hours, fee adjustment, and schedule impact. Work commences only upon Customer written approval.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-06',
      number: '06',
      title: 'Website Development, Code & Digital Standards',
      summary: 'Browser compatibility, client acceptance, third-party APIs, and post-launch grace period.',
      content: (
        <div className="space-y-4">
          <p>
            All web applications, content management systems, and e-commerce stores engineered by Botlytices adhere to modern standards of performance, security, and accessibility:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Cross-Browser &amp; Device Compatibility:</strong> We test and guarantee responsive functionality across current major evergreen browsers (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge) and modern iOS/Android mobile screens. We do not support obsolete browsers (such as Internet Explorer).
            </li>
            <li>
              <strong>Open-Source &amp; Third-Party Plugins:</strong> When utilizing open-source libraries (e.g. React, Tailwind CSS, Next.js) or commercial plugins, such components remain subject to their respective licenses. While Botlytices inspects and hardens third-party integrations, we cannot warrant that upstream third-party developers will never alter their APIs or software terms.
            </li>
            <li>
              <strong>Client Acceptance &amp; Launch Handover:</strong> Upon staging completion, the Customer is granted a formal review period of five (5) business days. Functional issues reported during this window will be rectified promptly. Formal launch or production deployment constitutes technical acceptance.
            </li>
            <li>
              <strong>14-Day Post-Launch Warranty Window:</strong> All bespoke website builds include fourteen (14) calendar days of complimentary post-launch bug fixing covering any functional discrepancy between the delivered site and the signed specification.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-07',
      number: '07',
      title: 'Website Maintenance, Hosting & Backup Limitations',
      summary: 'Scope of maintenance retainers, backup duties, and server uptime realities.',
      content: (
        <div className="space-y-4">
          <p>
            Website Maintenance packages (such as our $99/mo Business Care plan) provide scheduled operational oversight to keep systems healthy and secure:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Maintenance Inclusions:</strong> Scheduled weekly/monthly software updates (CMS core, plugins, security patches), off-site automated backups, uptime monitoring, and small content updates as specified in the tier.
            </li>
            <li>
              <strong>Maintenance Exclusions:</strong> Maintenance retainers do not cover new page design, bespoke feature engineering, redesign of existing templates, or troubleshooting issues caused by Customer-installed plugins or third-party server modifications.
            </li>
            <li>
              <strong>Hosting Dependencies:</strong> Where hosting is managed by Botlytices through enterprise cloud providers (e.g., AWS, Cloudflare, Vercel), we maintain industry-leading infrastructure. However, no internet hosting provider can guarantee 100.00% uptime. Downtime resulting from global upstream internet carrier outages, DDoS attacks, or scheduled data center maintenance does not constitute a breach of this Agreement.
            </li>
            <li>
              <strong>Backup Responsibilities:</strong> While Botlytices maintains routine disaster recovery backups for active care subscribers, Customers operating mission-critical databases are advised to retain secondary offsite archive copies of their proprietary customer data.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-08',
      number: '08',
      title: 'SEO, Digital Marketing & Online Presence Realities',
      summary: 'No ranking guarantees, algorithm volatility, and ad budget separation.',
      content: (
        <div className="space-y-4">
          <p>
            Botlytices delivers ethical, white-hat Search Engine Optimization (SEO), AI Engine Optimization (AEO), and local search visibility services based on current search engine guidelines:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>No Unconditional Ranking Guarantees:</strong> Organic search ranking algorithms operated by Google, Apple, Microsoft Bing, and AI engines (such as OpenAI SearchGPT and Perplexity) are proprietary and subject to unannounced updates. <strong>Botlytices does not and cannot guarantee specific #1 search rankings, traffic volumes, or sales conversions</strong> unless an explicit, lawfully verifiable contractual guarantee is agreed in writing.
            </li>
            <li>
              <strong>Third-Party Platform Discretion:</strong> Verifications and suspensions on Google Business Profile, Apple Business Connect, or social platforms are governed exclusively by their respective platform policies. Botlytices assists with proper documentation and appeal filings but cannot override platform governance decisions.
            </li>
            <li>
              <strong>Advertising Budgets:</strong> Management fees charged by Botlytices compensate our strategic setup, audience targeting, and ongoing campaign optimization. All media ad spend remitted directly to Google Ads, Meta Ads, or LinkedIn Ads is separate and non-refundable.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-09',
      number: '09',
      title: 'IT Support, Remote Access & Cybersecurity Defenses',
      summary: 'Remote helpdesk protocols, device authorizations, and realistic cyber defense scope.',
      content: (
        <div className="space-y-4">
          <p>
            Our IT Support and Systems division delivers workstation support, cloud migrations, local networking, and cybersecurity hardening under professional care standards:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Remote Access Authorization:</strong> By requesting remote troubleshooting, the Customer authorizes our certified engineers to access designated computers, servers, or firewalls via secure encrypted remote sessions. Customer personnel may observe remote sessions at all times.
            </li>
            <li>
              <strong>Pre-Service Data Backup Obligation:</strong> Prior to requesting hardware servicing, system upgrades, or operating system reinstalls, the Customer is strictly responsible for ensuring that all mission-critical data files are backed up to secure offsite media.
            </li>
            <li>
              <strong>Cybersecurity Scope &amp; Realistic Limitations:</strong> We implement defense-in-depth security measures (firewalls, endpoint protection, multi-factor authentication, DNS filtering). However, because cyber threats, zero-day exploits, advanced persistent threats (APTs), and social engineering evolve continuously, <strong>no IT consultancy can warrant absolute immunity from cyber attacks, malware, or targeted intrusions</strong>. Botlytices exercises reasonable professional skill and diligence but is not an insurer against unforeseen third-party criminal cyber acts.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-10',
      number: '10',
      title: 'Artificial Intelligence (AI) Services & Automated Systems',
      summary: 'Voice agents, chatbots, hallucination risks, human verification, and telephony compliance.',
      content: (
        <div className="space-y-4">
          <p>
            Botlytices engineers generative AI voice assistants, WhatsApp automated dispatchers, and workflow bots leveraging enterprise Large Language Model (LLM) APIs:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Nature of AI &amp; Human Oversight Requirement:</strong> Large Language Models generate responses based on probabilistic pattern matching. While we implement strict system prompts and retrieval-augmented generation (RAG) bounds, <strong>AI systems may occasionally produce inaccurate, incomplete, or unexpected outputs (&quot;hallucinations&quot;)</strong>. The Customer agrees that AI systems must not be used without human oversight for mission-critical legal, medical, life-safety, or regulated financial decisions.
            </li>
            <li>
              <strong>Customer Verification Duty:</strong> The Customer is responsible for testing, reviewing, and approving system prompt instructions, knowledge bases, and escalation paths configured for their AI assistant.
            </li>
            <li>
              <strong>Telephony &amp; Recording Disclosures:</strong> If the Customer deploys AI voice calling agents or call recording features, the Customer warrants compliance with all applicable two-party consent laws, FCC/TCPA regulations (in the US), Ofcom rules (in the UK), and equivalent international telecommunications disclosure requirements.
            </li>
            <li>
              <strong>No Model Training on Private Data:</strong> Botlytices configures AI integrations using commercial enterprise APIs whose terms expressly prohibit using Customer API data to train general foundation models.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-11',
      number: '11',
      title: 'CCTV, Physical Surveillance & Access Control',
      summary: 'Hardware ownership, installation scope, and Customer privacy compliance.',
      content: (
        <div className="space-y-4">
          <p>
            For on-premises physical security installations, video surveillance networks, and biometric access control terminals:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Premises Access &amp; Permits:</strong> The Customer is responsible for providing safe, unobstructed physical access to installation premises, ensuring electrical infrastructure is code-compliant, and securing any required landlord or municipal permits.
            </li>
            <li>
              <strong>Hardware Warranties:</strong> All cameras, network video recorders (NVRs), hard drives, and biometric terminals supplied by Botlytices carry their respective manufacturer hardware warranties (typically 12–36 months). Botlytices assists with warranty claim processing.
            </li>
            <li>
              <strong>Customer Privacy &amp; Surveillance Notice Obligations:</strong> The Customer is solely responsible for determining the lawful basis for surveillance on their premises, posting conspicuous public CCTV signage, complying with employee workplace privacy laws, and managing video retention periods in accordance with local regulations.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-12',
      number: '12',
      title: 'Intellectual Property, Ownership & Portfolio Rights',
      summary: 'Clear division between client-owned deliverables, Botlytices reusable tools, and portfolio display.',
      content: (
        <div className="space-y-4">
          <p>
            We maintain strict respect for intellectual property rights with zero ambiguity regarding ownership:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Customer-Owned Pre-Existing Materials:</strong> The Customer retains 100% full ownership of all logos, trademarks, content, images, databases, and proprietary business methodologies provided to Botlytices.
            </li>
            <li>
              <strong>Deliverables Transfer Upon Full Payment:</strong> Subject to receipt of 100% full and final payment for the project, <strong>all intellectual property rights in the bespoke website code, custom UI designs, graphics, and unique deliverables engineered specifically for the Customer transfer unconditionally to the Customer</strong>.
            </li>
            <li>
              <strong>Botlytices Reusable Engineering Tools:</strong> Botlytices retains ownership of pre-existing engineering tools, backend starter frameworks, reusable configuration scripts, and foundational methodologies (&quot;Company Tools&quot;). To the extent Company Tools are embedded within deliverables, Botlytices grants the Customer an irrevocable, perpetual, worldwide, royalty-free license to use, modify, and operate such tools in connection with the project.
            </li>
            <li>
              <strong>Portfolio &amp; Case Study Rights:</strong> Botlytices may display completed, publicly launched website screenshots, design samples, and high-level descriptions of project challenges in our professional portfolio and case studies, respecting all Customer confidentiality restrictions and non-disclosure agreements.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-13',
      number: '13',
      title: 'Confidentiality, Non-Disclosure & Data Processing',
      summary: 'Mutual confidentiality obligations and formal Data Processing Agreement availability.',
      content: (
        <div className="space-y-4">
          <p>
            Both parties agree to protect each other&apos;s proprietary information with strict professional standards:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Mutual Confidentiality:</strong> Neither party will disclose, publish, or share non-public business strategies, customer databases, technical architectures, server credentials, or financial details shared during the engagement without prior written consent.
            </li>
            <li>
              <strong>Standard of Care:</strong> Each party will maintain the other&apos;s confidential information with the same degree of care it exercises for its own confidential data, and no less than a reasonable degree of care.
            </li>
            <li>
              <strong>Data Processing Agreement (DPA):</strong> Where Botlytices processes personal data on behalf of an enterprise Customer governed by the EU/UK GDPR or relevant international data protection laws, the parties will execute a standard Data Processing Agreement incorporating appropriate Standard Contractual Clauses (SCCs).
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-14',
      number: '14',
      title: 'Warranties, Service Standards & Statutory Rights',
      summary: 'Professional care standards and unconditional preservation of consumer guarantees.',
      content: (
        <div className="space-y-4">
          <p>
            Botlytices warrants that all services will be executed with reasonable professional care, skill, and diligence consistent with prevailing industry standards.
          </p>
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-950 text-xs space-y-1.5">
            <div className="font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Unconditional Preservation of Mandatory Consumer Statutory Rights</span>
            </div>
            <p>
              Nothing in these Terms excludes, restricts, or modifies any statutory consumer guarantees, non-excludable rights, or remedies to which you are entitled under applicable law, including the <strong>UK Consumer Rights Act 2015</strong>, the <strong>Australian Consumer Law (ACL)</strong>, the <strong>New Zealand Consumer Guarantees Act 1993</strong>, or relevant European Union consumer directives where you contract as a consumer.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'sec-15',
      number: '15',
      title: 'Limitation of Liability & Commercial Risk Allocation',
      summary: 'Commercially reasonable caps for business clients and statutory exclusions.',
      content: (
        <div className="space-y-4">
          <p>
            To the maximum extent permitted by applicable law, the commercial liabilities of the parties are apportioned as follows:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Exclusion of Consequential Losses:</strong> Neither party shall be liable to the other for indirect, incidental, punitive, or consequential damages, including loss of anticipated profits, loss of business revenue, loss of business goodwill, or loss of third-party platform data.
            </li>
            <li>
              <strong>Commercial Liability Cap (B2B):</strong> For business-to-business contracts, the total aggregate liability of Botlytices arising under or in connection with any project or service shall be strictly capped at <strong>the total fees paid by the Customer to Botlytices for the specific service during the twelve (12) months preceding the incident giving rise to liability</strong>.
            </li>
            <li>
              <strong>Non-Excludable Liability:</strong> Nothing in these Terms limits or excludes liability for:
              <ul className="list-circle pl-5 pt-1 space-y-1 text-slate-600">
                <li>Death or personal injury caused by negligence;</li>
                <li>Fraud or fraudulent misrepresentation;</li>
                <li>Willful misconduct or gross negligence where prohibited by applicable statute;</li>
                <li>Any other liability that cannot lawfully be limited or excluded under governing law.</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-16',
      number: '16',
      title: 'Mutual Indemnification & Exclusions',
      summary: 'Proportionate protection against third-party copyright claims and illegal content.',
      content: (
        <div className="space-y-4">
          <p>
            The parties maintain balanced, mutual indemnification protections:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Customer Indemnity:</strong> The Customer agrees to defend and indemnify Botlytices from third-party claims, liabilities, and legal expenses arising from: (a) content, images, trademarks, or databases supplied by the Customer that infringe third-party intellectual property or privacy rights; or (b) Customer misuse of our services in violation of applicable laws.
            </li>
            <li>
              <strong>Botlytices Indemnity:</strong> Botlytices agrees to defend and indemnify the Customer from third-party claims alleging that custom software code written originally by Botlytices infringes a valid patent or copyright, provided the Customer promptly notifies Botlytices in writing.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-17',
      number: '17',
      title: 'Suspension, Cancellation & Contract Termination',
      summary: 'Conditions for terminating projects, monthly care subscriptions, and handover.',
      content: (
        <div className="space-y-4">
          <p>
            Agreements may be terminated under the following conditions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Termination for Convenience (Recurring Subscriptions):</strong> Either party may cancel ongoing monthly Website Care, IT Support, or SEO retainers by providing <strong>fourteen (14) calendar days written notice</strong> prior to the next billing cycle.
            </li>
            <li>
              <strong>Termination for Cause / Material Breach:</strong> Either party may terminate an active agreement immediately if the other party commits a material breach and fails to cure such breach within fourteen (14) days of receiving written notice.
            </li>
            <li>
              <strong>Termination of Fixed-Price Projects:</strong> If the Customer cancels a bespoke project prior to completion, financial adjustments and refund entitlements are governed strictly by our <a href="/refund-policy" className="text-[#0052CC] font-semibold underline">Refund &amp; Cancellation Policy</a> based on hours completed and unrecoverable hard costs incurred.
            </li>
            <li>
              <strong>Handover on Termination:</strong> Upon termination and settlement of all outstanding invoices, Botlytices will provide all completed files, design assets, and administrative credentials to the Customer in an orderly manner.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sec-18',
      number: '18',
      title: 'Informal Dispute Resolution & Governing Jurisdiction',
      summary: 'Friendly consultation first, formal escalation steps, and applicable law notes.',
      content: (
        <div className="space-y-4">
          <p>
            In the event of any question, misunderstanding, or dispute arising out of an engagement, both parties agree to follow an efficient, cost-effective resolution pathway:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Informal Engineering Consultation:</strong> The Customer agrees to contact our senior lead desk at <a href={`mailto:${LEGAL_CONFIG.officialEmail}`} className="text-[#0052CC] underline">{LEGAL_CONFIG.officialEmail}</a> describing the issue. Both parties agree to confer in good faith for at least fifteen (15) business days to reach an amicable resolution.
            </li>
            <li>
              <strong>Mediation / Formal Resolution:</strong> If an informal resolution cannot be achieved, the parties agree to explore neutral commercial mediation before initiating formal court proceedings.
            </li>
            <li>
              <strong>Governing Law Notice:</strong> {LEGAL_CONFIG.applicableLawFallbackNotice} Formal statutory corporate jurisdiction is subject to final corporate registration confirmation. Nothing herein deprives consumers of the mandatory protection of the courts in their habitual country of residence.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: 'sec-19',
      number: '19',
      title: 'General Commercial Provisions & Severability',
      summary: 'Entire agreement, severability, force majeure, electronic notices, and amendments.',
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#475569]">
            <li>
              <strong>Entire Agreement:</strong> These Terms of Service, together with the relevant signed Proposal, Quotation, or Statement of Work, constitute the entire agreement between the parties regarding the subject matter.
            </li>
            <li>
              <strong>Severability:</strong> If any provision of these Terms is determined by a court of competent jurisdiction to be invalid, unlawful, or unenforceable, that provision will be modified to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
            </li>
            <li>
              <strong>Force Majeure:</strong> Neither party shall be liable for delivery delays or failure to perform caused by events beyond reasonable control, including natural disasters, acts of war, regional telecommunication carrier outages, major power grid failures, or government trade embargoes.
            </li>
            <li>
              <strong>Electronic Communications &amp; Signatures:</strong> Both parties agree that agreements executed electronically or approvals confirmed via authenticated corporate email or messaging carry full legal validity.
            </li>
            <li>
              <strong>Policy Amendments:</strong> Botlytices may update these Terms periodically to reflect changes in regulatory standards or service additions. Material revisions will be posted with an updated &quot;Last Updated&quot; date.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0A1020]">
      <SeoAndBreadcrumb
        title={LEGAL_PAGES_META.terms.title}
        description={LEGAL_PAGES_META.terms.description}
        path={LEGAL_PAGES_META.terms.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Terms of Service' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <section className="pt-14 pb-12 lg:pt-20 lg:pb-16 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FF] border border-[#0052CC]/20 text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Commercial Terms of Service · Version {LEGAL_CONFIG.version}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-tight">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium">
              &quot;These Terms of Service govern your access to the Botlytices website and the purchase or use of services provided by Botlytices. They explain the conditions under which we provide our technology, development, digital, automation and security services, together with the respective responsibilities of Botlytices and its customers.&quot;
            </p>
          </div>

          {/* Legal Information Box (Required by Master Specification) */}
          <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E6EBF2]">
              <div>
                <span className="text-[11px] font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                  Document Governance Registry
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0A1020]">
                  Commercial Information &amp; Entity Status
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#0052CC] text-[#334155] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
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
                <div className="text-[#5D687A] font-semibold">Responsible Business:</div>
                <div className="text-[#0A1020] font-bold mt-0.5">{LEGAL_CONFIG.brandName}</div>
              </div>
              <div>
                <div className="text-[#5D687A] font-semibold">Official Contact:</div>
                <div className="text-[#0052CC] font-bold mt-0.5">
                  <a href={`mailto:${LEGAL_CONFIG.officialEmail}`}>{LEGAL_CONFIG.officialEmail}</a>
                </div>
              </div>
            </div>

            {/* Verification Status Notice */}
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Entity Verification Status Notice:</strong> Formal corporate registration particulars are undergoing administrative certification under national registry standards. Contractual relations are presently governed under general commercial principles of contract. All contact, technical delivery, and customer-rights channels remain fully active and supported.
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
                    <span className="text-[11px] font-mono-code text-[#5D687A]">19 Sections</span>
                  </div>

                  <nav aria-label="Terms table of contents" className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
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
                      onClick={() => onNavigate('/privacy-policy')}
                      className="w-full text-left text-xs font-semibold text-[#0052CC] hover:underline flex items-center justify-between"
                    >
                      <span>View Privacy Policy →</span>
                    </button>
                    <button
                      onClick={() => onNavigate('/refund-policy')}
                      className="w-full text-left text-xs font-semibold text-[#0052CC] hover:underline flex items-center justify-between"
                    >
                      <span>View Refund &amp; Cancellation Policy →</span>
                    </button>
                  </div>
                </div>

                {/* Quick Consultation Bridge */}
                <div className="p-5 rounded-2xl bg-[#07152E] text-white space-y-3">
                  <div className="text-[11px] font-mono-code text-[#00C8FF]">Need Scope Clarification?</div>
                  <h4 className="text-sm font-bold font-display">
                    Speak Directly With Our Engineering Desk
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Have questions regarding custom contract terms, bespoke SLAs, or non-disclosure agreements?
                  </p>
                  <a
                    href={`mailto:${LEGAL_CONFIG.officialEmail}?subject=${encodeURIComponent('Terms of Service Scope Inquiry')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C8FF] hover:underline pt-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{LEGAL_CONFIG.officialEmail}</span>
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

              {/* Bottom Quick Navigation & Help */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0A1020]">
                    Related Commercial Policies
                  </h4>
                  <p className="text-xs text-[#5D687A]">
                    Review how your information is handled and our cancellation principles.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('/privacy-policy')}
                    className="px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-xs font-semibold text-[#0A1020] hover:border-[#0052CC] transition-colors"
                  >
                    Privacy Policy
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
