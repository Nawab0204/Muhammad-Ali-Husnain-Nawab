import React, { useState } from 'react';
import {
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  CreditCard,
  FileText,
  Mail,
  Printer,
  HelpCircle,
  ArrowRight,
  Layers,
  Sparkles,
  Phone,
  Scale,
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import { useApp } from '../context/AppContext';
import { LEGAL_CONFIG, LEGAL_PAGES_META } from '../config/legalConfig';

interface RefundSection {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: React.ReactNode;
}

export const RefundPolicyPage: React.FC<{ onNavigate?: (path: string) => void }> = ({
  onNavigate: propNavigate,
}) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;
  const [activeSectionId, setActiveSectionId] = useState<string>('ref-01');

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

  const SECTIONS: RefundSection[] = [
    {
      id: 'ref-01',
      number: '01',
      title: 'General Refund Principles & Fair Assessment',
      summary: 'Why refunds depend on work performed, milestone completions, and unrecoverable hard costs.',
      content: (
        <div className="space-y-4">
          <p>
            At <strong>{LEGAL_CONFIG.brandName}</strong>, we pride ourselves on professional excellence, transparent scopes, and ethical commercial dealings. Because our services involve customized software engineering, digital design, and dedicated specialist hours, refund eligibility is determined on an equitable basis reflecting:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>The specific service category and agreed scope of work;</li>
            <li>The engineering hours and technical deliverables already completed prior to cancellation;</li>
            <li>Formal milestone sign-offs and client approvals provided;</li>
            <li>Legitimate, unrecoverable out-of-pocket costs already disbursed to third parties (such as domain registrations, third-party software licenses, or hardware purchases);</li>
            <li>Applicable mandatory consumer protection statutes in your jurisdiction.</li>
          </ul>
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-950 font-medium space-y-1">
            <strong>Commitment to Fair Dealing:</strong> We reject arbitrary &quot;No Refunds Under Any Circumstances&quot; policies. If we fail to deliver contracted work or if you cancel before work commences, you are entitled to a fair, lawful, and prompt accounting of funds.
          </div>
        </div>
      ),
    },
    {
      id: 'ref-02',
      number: '02',
      title: 'Website Development & Custom Software Refunds',
      summary: 'Clear stage-by-stage refund rules: pre-commencement, design, staging, and live handover.',
      content: (
        <div className="space-y-4">
          <p>
            Bespoke website design, e-commerce builds, and custom web applications follow a milestone schedule. If a project is cancelled prior to completion:
          </p>
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <strong className="text-[#0A1020]">Stage 1: Prior to Work Commencement</strong>
              <p className="text-[#5D687A] mt-0.5">
                If the Customer cancels in writing before engineering intake, sprint scheduling, or design wireframing begins (and within 14 days of payment), the Customer receives a <strong>100% full refund</strong> of deposit monies paid, less any unavoidable merchant credit-card processing fees.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <strong className="text-[#0A1020]">Stage 2: During Discovery &amp; UI/UX Wireframing</strong>
              <p className="text-[#5D687A] mt-0.5">
                If cancellation occurs after discovery consultations and initial Figma wireframes have commenced but before design sign-off, Botlytices retains a reasonable proportion of the deposit to cover engineering hours worked at standard rates, and refunds the remainder.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <strong className="text-[#0A1020]">Stage 3: Post-Design Approval / During Development</strong>
              <p className="text-[#5D687A] mt-0.5">
                Once the Customer formally approves the UI/UX design architecture and code implementation begins, the initial 50% deposit becomes non-refundable, as it covers completed design assets and allocated developer sprint blocks. Any subsequent unearned milestone balances will not be billed.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <strong className="text-[#0A1020]">Stage 4: Following Staging Sign-Off &amp; Production Launch</strong>
              <p className="text-[#5D687A] mt-0.5">
                Once a website or web application has been approved on staging and deployed to public production servers or source repositories have been transferred, development fees are non-refundable. Post-launch bug fixes are covered under our 14-day warranty and ongoing care plans.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ref-03',
      number: '03',
      title: 'Design & Branding Services',
      summary: 'Logo concepts, brand identity systems, and guidelines.',
      content: (
        <div className="space-y-4">
          <p>
            For standalone graphic design, logo design, and brand identity projects:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>If the Customer rejects all initial design concept directions without requesting revisions, and cancels before revision rounds begin, the Customer is eligible for a <strong>50% refund</strong> of the design fee. In such cases, the Customer retains no copyright, license, or right to use any rejected concepts.</li>
            <li>Once the Customer selects a concept direction, requests revisions, or accepts vector source files, design fees are fully earned and non-refundable.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-04',
      number: '04',
      title: 'Website Maintenance, Hosting & Care Retainers',
      summary: 'Monthly plan cancellation notice, unused prepaid periods, and unrecoverable hosting fees.',
      content: (
        <div className="space-y-4">
          <p>
            Ongoing operational services (such as our $99/mo Business Care plan):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>
              <strong>Monthly Subscription Cancellation:</strong> Monthly care plans may be cancelled at any time by providing <strong>fourteen (14) calendar days written notice</strong> prior to your next renewal date.
            </li>
            <li>
              <strong>Prepaid Cycles:</strong> If you cancel a monthly subscription, service continues through the end of the paid billing month. No partial-month pro-rated refund is provided for the active month during which work and automated backups are performed.
            </li>
            <li>
              <strong>Annual Care Packages:</strong> If you cancel a prepaid 12-month care agreement, unused future months will be refunded on a pro-rata basis, less any annual package discounts received, any emergency repair hours used, and non-refundable third-party domain/server license costs incurred.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-05',
      number: '05',
      title: 'SEO, Content & Digital Marketing Services',
      summary: 'Ongoing search optimization, content deliverables, and media ad spend separation.',
      content: (
        <div className="space-y-4">
          <p>
            Search Engine Optimization and digital marketing engagements are labor-intensive professional services billed on a monthly retainer:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>Because search rankings are governed by third-party search engines (Google, Microsoft) and algorithm updates, refunds cannot be granted simply on the basis of subjective ranking expectations where agreed technical deliverables (audits, schema, metadata, content) have been executed with due care.</li>
            <li><strong>Advertising Budgets:</strong> Media ad spend paid directly to ad platforms (Google Ads, Meta Ads) is non-refundable by Botlytices, as those funds are received and held by the respective third-party advertising networks.</li>
            <li>Monthly SEO retainers may be cancelled with fourteen (14) days notice prior to the next monthly cycle.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-06',
      number: '06',
      title: 'IT Support, Remote Troubleshooting & Systems Labor',
      summary: 'Completed diagnostic sessions, emergency call-outs, and scheduled time.',
      content: (
        <div className="space-y-4">
          <p>
            For hourly IT troubleshooting, remote network configuration, and hardware setups:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>Completed remote IT support sessions, security audits, and diagnostics are billed based on engineering time delivered and are non-refundable once performed.</li>
            <li>If scheduled remote support is cancelled by the Customer at least twenty-four (24) hours in advance, any prepaid hourly fees will be refunded in full or credited to future support.</li>
            <li>Emergency out-of-hours call-out dispatch fees are non-refundable once an engineer has initiated remote access or dispatched to premises.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-07',
      number: '07',
      title: 'AI Automation, Chatbots & Workflow Integrations',
      summary: 'One-time custom implementation fees vs monthly AI model token costs.',
      content: (
        <div className="space-y-4">
          <p>
            AI Voice Assistants, WhatsApp bots, and CRM automation solutions:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li><strong>Setup &amp; Custom Implementation:</strong> One-time engineering setup fees (prompt engineering, RAG knowledge base training, webhook routing) are evaluated under the bespoke development refund rules (Stage 1–4).</li>
            <li><strong>Monthly Maintenance Retainer:</strong> Monthly maintenance and API orchestration retainers can be cancelled with 14 days notice.</li>
            <li><strong>Third-Party Model Usage:</strong> Unused API credits paid directly to external model providers (e.g., OpenAI, Twilio, WhatsApp Cloud API) are subject to those providers&apos; respective refund terms.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-08',
      number: '08',
      title: 'CCTV, Access Control & Physical Security Hardware',
      summary: 'Separation of engineering labor from physical camera/NVR equipment returns.',
      content: (
        <div className="space-y-4">
          <p>
            Physical security installations encompass two distinct components:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li><strong>Engineering &amp; Installation Labor:</strong> Site assessments, cable-pulling, bracket mounting, and NVR IP configuration hours are non-refundable once completed.</li>
            <li><strong>Hardware Units (Cameras, NVRs, Access Terminals):</strong> Physical equipment purchased through Botlytices may be returned within fourteen (14) days of delivery only if unopened, in pristine original packaging, subject to a 15% manufacturer restocking fee and shipping costs. Defective hardware is replaced under the manufacturer&apos;s warranty (12–36 months).</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-09',
      number: '09',
      title: 'Treatment of Upfront Deposits & Milestone Payments',
      summary: 'Why deposits secure dedicated scheduling and how deductions are calculated.',
      content: (
        <div className="space-y-4">
          <p>
            When a Customer engages Botlytices and remits a 50% deposit, we allocate dedicated senior engineering talent, reserve server infrastructure, and turn down competing client bookings.
          </p>
          <p className="text-xs text-[#475569]">
            In the event of an approved cancellation, deductions from deposits are calculated strictly upon documented engineering hours expended at our agreed rate card, plus any non-refundable software licenses purchased on the Customer&apos;s behalf. Arbitrary cancellation penalties are strictly prohibited.
          </p>
        </div>
      ),
    },
    {
      id: 'ref-10',
      number: '10',
      title: 'Statutory Right of Withdrawal & 14-Day Cooling-Off Periods',
      summary: 'UK & EU distance contract rights, express request for immediate work, and digital waiver.',
      content: (
        <div className="space-y-4">
          <p>
            For individual consumers located in the <strong>United Kingdom</strong> (under the <em>Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013</em>) and the <strong>European Union</strong> (under <em>Directive 2011/83/EU</em>):
          </p>
          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2 text-xs text-[#334155]">
            <div className="font-bold text-[#0A1020]">
              14-Day Statutory Distance Selling Cooling-Off Period
            </div>
            <p>
              Consumers contracting at a distance have the statutory right to cancel a service agreement within <strong>fourteen (14) calendar days</strong> from contract conclusion without giving any reason.
            </p>
            <div className="pt-2 border-t border-[#E6EBF2] space-y-1.5">
              <strong>Commencement of Services During the Cooling-Off Window:</strong>
              <p className="text-[#5D687A]">
                If you request that we begin technical engineering work immediately during the 14-day cancellation window:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>You acknowledge that you must pay for all work performed up to the moment you communicate your cancellation.</li>
                <li>If the service has been fully performed within the 14 days upon your express request, you lose your statutory right of cancellation.</li>
                <li>For immediate supply of digital content not on tangible media, your express consent and acknowledgment that you lose the right of withdrawal upon download/deployment will be obtained.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ref-11',
      number: '11',
      title: 'Subscription Cancellation Workflow & Renewals',
      summary: 'Hassle-free cancellation, no dark patterns, and simple email notifications.',
      content: (
        <div className="space-y-4">
          <p>
            We believe in honest partnerships. We do not use &quot;dark patterns&quot;, hidden cancellation phone menus, or artificial exit barriers:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>To cancel any recurring Website Care, IT Support, or SEO subscription, simply send an email to <a href={`mailto:${LEGAL_CONFIG.refundEmail}?subject=Cancel%20Subscription`} className="text-[#0052CC] font-semibold underline">{LEGAL_CONFIG.refundEmail}</a> stating your company name and the subscription you wish to terminate.</li>
            <li>As long as notice is received at least fourteen (14) calendar days prior to your renewal billing date, no future charges will occur.</li>
            <li>Your services will remain fully active through the conclusion of the paid billing month.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-12',
      number: '12',
      title: 'Step-by-Step Formal Refund Request Procedure',
      summary: 'Required submission details, review timelines, and settlement processing.',
      content: (
        <div className="space-y-4">
          <p>
            To submit a formal refund request, please provide the following details:
          </p>
          <div className="p-4 rounded-2xl bg-white border border-[#CBD5E1] text-xs space-y-3">
            <div className="font-bold text-[#0A1020] flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#0052CC]" />
              <span>Refund Submission Information:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-[#475569]">
              <li><strong>Customer Name &amp; Company Name</strong></li>
              <li><strong>Invoice Number or Transaction Reference</strong></li>
              <li><strong>Service / Package Purchased</strong></li>
              <li><strong>Date of Payment &amp; Amount Paid</strong></li>
              <li><strong>Reason for Refund Request</strong> (with relevant supporting documentation)</li>
            </ul>
            <p className="text-[#334155] pt-1 border-t border-[#E6EBF2]">
              Submit your request to: <a href={`mailto:${LEGAL_CONFIG.refundEmail}?subject=Formal%20Refund%20Request`} className="text-[#0052CC] font-bold underline">{LEGAL_CONFIG.refundEmail}</a>
            </p>
          </div>
          <div className="space-y-1 text-xs text-[#475569]">
            <p><strong>Review Timeline:</strong> We formally acknowledge refund submissions within <strong>48 business hours</strong>. Our commercial finance desk reviews the project audit log and provides a formal decision within <strong>seven (7) to ten (10) business days</strong>.</p>
            <p><strong>Disbursement:</strong> Approved refunds are credited directly to the original payment method (credit card, bank wire, or payment processor) within <strong>five (5) to ten (10) banking days</strong> depending on your financial institution.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'ref-13',
      number: '13',
      title: 'Non-Refundable Legitimate Third-Party Disbursals',
      summary: 'Domain registrations, server leases, and third-party API usage fees.',
      content: (
        <div className="space-y-4">
          <p>
            Certain project expenses paid directly to external third-party registrars, cloud infrastructure providers, or telecom carriers are non-refundable once registered:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li><strong>Domain Name Registrations:</strong> ICANN registrars do not permit refund or cancellation of domain registrations once purchased. You retain 100% ownership of the domain.</li>
            <li><strong>Dedicated Cloud Server Leases:</strong> Prepaid hosting environment fees billed by external cloud data centers.</li>
            <li><strong>Premium Software &amp; Plugin Licenses:</strong> Third-party theme, font, or plugin licenses purchased specifically in the Customer&apos;s name.</li>
            <li><strong>Telephony &amp; Messaging Consumption:</strong> WhatsApp Business API conversation fees and SMS transit costs incurred through carriers.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-14',
      number: '14',
      title: 'Defective, Incomplete or Unsatisfactory Deliverables',
      summary: 'Right to rectification, 14-day warranty fixes, and statutory remedies.',
      content: (
        <div className="space-y-4">
          <p>
            If delivered software, network configurations, or digital assets fail to conform to the agreed written Statement of Work:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li><strong>Notice &amp; Rectification Window:</strong> The Customer must notify Botlytices within the 14-day post-launch warranty period describing the discrepancy. Botlytices will promptly investigate, rectify code errors, or re-perform the non-conforming service at zero additional cost.</li>
            <li><strong>Price Adjustment / Refund:</strong> If Botlytices is unable to cure a verifiable material defect within a commercially reasonable timeframe, the Customer is entitled to an appropriate price reduction or refund for the defective deliverable.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-15',
      number: '15',
      title: 'Payment Inquiries, Chargebacks & Dispute Handling',
      summary: 'Request to contact our desk first before filing chargebacks to protect project continuity.',
      content: (
        <div className="space-y-4">
          <p>
            We strive to resolve every client concern cordially, transparently, and swiftly. If you have an inquiry regarding an invoice or transaction:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
            <li>We respectfully ask that you contact our finance desk at <a href={`mailto:${LEGAL_CONFIG.refundEmail}`} className="text-[#0052CC] font-semibold underline">{LEGAL_CONFIG.refundEmail}</a> before initiating a formal bank chargeback or payment dispute. Unilateral payment freezes immediately halt development sprints and lock cloud staging environments automatically.</li>
            <li>We retain detailed work timestamps, design approval records, and repository commit histories for all contracted deliverables, which we provide promptly to resolve any accounting misunderstandings.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ref-16',
      number: '16',
      title: 'Unconditional Preservation of Mandatory Statutory Rights',
      summary: 'Guarantees under UK, EU, Australian, and international consumer protection laws.',
      content: (
        <div className="space-y-4">
          <p>
            This Refund &amp; Cancellation Policy operates in harmony with consumer protection laws. Nothing in this document limits, excludes, or impairs any mandatory statutory consumer guarantees, non-waivable refund remedies, or statutory cooling-off rights available to you under:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#475569]">
            <li>The <strong>Consumer Rights Act 2015</strong> (United Kingdom);</li>
            <li>The <strong>Consumer Rights Directive 2011/83/EU</strong> (European Union);</li>
            <li>The <strong>Competition and Consumer Act 2010 / Australian Consumer Law (ACL)</strong> (Australia);</li>
            <li>The <strong>Consumer Guarantees Act 1993</strong> (New Zealand);</li>
            <li>Applicable federal and provincial consumer protection statutes in <strong>Canada</strong> and consumer laws in the <strong>United States</strong>.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0A1020]">
      <SeoAndBreadcrumb
        title={LEGAL_PAGES_META.refund.title}
        description={LEGAL_PAGES_META.refund.description}
        path={LEGAL_PAGES_META.refund.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Refund Policy' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <section className="pt-14 pb-12 lg:pt-20 lg:pb-16 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FF] border border-[#0052CC]/20 text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Transparent Commercial Billing · Version {LEGAL_CONFIG.version}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-tight">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium">
              &quot;At Botlytices, we aim to provide clearly scoped professional services and transparent billing arrangements. This policy explains how cancellations, refunds, project withdrawals, subscription termination and service-related disputes are handled.&quot;
            </p>
          </div>

          {/* Legal Information Box (Required by Master Specification) */}
          <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E6EBF2]">
              <div>
                <span className="text-[11px] font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                  Billing Governance Registry
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0A1020]">
                  Refund Policy &amp; Settlement Administration
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
                <div className="text-[#5D687A] font-semibold">Refund Desk Contact:</div>
                <div className="text-[#0052CC] font-bold mt-0.5">
                  <a href={`mailto:${LEGAL_CONFIG.refundEmail}`}>{LEGAL_CONFIG.refundEmail}</a>
                </div>
              </div>
            </div>

            {/* Verification Status Notice */}
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Entity Verification Notice:</strong> Corporate registration identity is currently logged under placeholder <span className="font-mono-code font-bold">{LEGAL_CONFIG.registeredEntityName}</span> pending administrative certification. All refund reviews, account settlements, and warranty claims are administered directly through <a href={`mailto:${LEGAL_CONFIG.refundEmail}`} className="underline font-bold">{LEGAL_CONFIG.refundEmail}</a>.
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
                    <span className="text-[11px] font-mono-code text-[#5D687A]">16 Sections</span>
                  </div>

                  <nav aria-label="Refund policy table of contents" className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
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
                      onClick={() => onNavigate('/terms-of-service')}
                      className="w-full text-left text-xs font-semibold text-[#0052CC] hover:underline flex items-center justify-between"
                    >
                      <span>View Terms of Service →</span>
                    </button>
                    <button
                      onClick={() => onNavigate('/privacy-policy')}
                      className="w-full text-left text-xs font-semibold text-[#0052CC] hover:underline flex items-center justify-between"
                    >
                      <span>View Privacy Policy →</span>
                    </button>
                  </div>
                </div>

                {/* Refund Desk Assistance */}
                <div className="p-5 rounded-2xl bg-[#07152E] text-white space-y-3">
                  <div className="text-[11px] font-mono-code text-[#00C8FF]">Billing Questions?</div>
                  <h4 className="text-sm font-bold font-display">
                    Speak With Our Finance Desk
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Have questions about milestone invoices, care plan billing, or refund eligibility?
                  </p>
                  <a
                    href={`mailto:${LEGAL_CONFIG.refundEmail}?subject=${encodeURIComponent('Billing Inquiry / Order Reference')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C8FF] hover:underline pt-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{LEGAL_CONFIG.refundEmail}</span>
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

              {/* Bottom Quick Navigation */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0A1020]">
                    Related Commercial Policies
                  </h4>
                  <p className="text-xs text-[#5D687A]">
                    Review our Terms of Service and Privacy Policy.
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
                    onClick={() => onNavigate('/privacy-policy')}
                    className="px-4 py-2 rounded-xl bg-[#0052CC] text-white text-xs font-bold hover:bg-[#0041A3] transition-colors"
                  >
                    Privacy Policy
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
