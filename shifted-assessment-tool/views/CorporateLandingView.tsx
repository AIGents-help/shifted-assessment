
import React from 'react';

const CorporateLandingView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-8 md:p-12">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
              5-minute Workforce <span className="text-rose-600">Fatigue Exposure Check</span>
            </h1>
            <p className="text-lg text-slate-600">
              Identify hidden operational risks by assessing the biological friction within your schedule architecture.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Purpose</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Analyze schedule-related exposure to identify where human factor limitations are impacting safety, retention, and performance.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                This is NOT employee surveillance. We track anonymous operational indicators, not individual medical data.
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-rose-600 rounded-full" />
              </div>
              <span className="font-medium">Quantify systemic fatigue risk across teams</span>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-rose-600 rounded-full" />
              </div>
              <span className="font-medium">Isolate schedule-driven turnover variables</span>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-rose-600 rounded-full" />
              </div>
              <span className="font-medium">Receive executive summary of organizational exposure</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4 border-t border-slate-100">
            <a 
              href="#/corporate/check" 
              className="w-full md:w-auto px-12 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-rose-600 transition-all text-center shadow-lg"
            >
              Run Exposure Check
            </a>
            <p className="text-sm text-slate-400">Decision-maker level check • ~5 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateLandingView;
