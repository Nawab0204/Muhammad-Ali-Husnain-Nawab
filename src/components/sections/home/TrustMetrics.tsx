/**
 * Trust Metrics & Proof Bar Component.
 * Displays key SLA commitments, success rates, and deployments with quantitative precision.
 */

import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';

export const TrustMetrics: React.FC = () => {
  return (
    <section className="py-8 bg-[#F7F9FC] border-b border-[#E6EBF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#006BFF]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0A1020]">100% Guaranteed SLA</div>
              <div className="text-xs text-[#5D687A]">Direct Engineering Support</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#006BFF]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0A1020]">100% Success Rate</div>
              <div className="text-xs text-[#5D687A]">Verified Client Delivery</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#006BFF]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0A1020]">100+ Systems Deployed</div>
              <div className="text-xs text-[#5D687A]">Web, AI & IT Infrastructure</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#006BFF]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0A1020]">24/7 Monitoring Available</div>
              <div className="text-xs text-[#5D687A]">Proactive IT & CCTV Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
