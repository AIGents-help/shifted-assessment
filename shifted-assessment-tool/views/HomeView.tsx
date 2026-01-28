
import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          SHIFTED <span className="text-rose-600">Schedule Impact Check</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Understand how your roster architecture influences human biology, safety, and recovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Worker Card */}
        <a 
          href="#/worker"
          className="group block bg-white border border-slate-200 rounded-3xl p-8 hover:border-rose-600 hover:ring-1 hover:ring-rose-600 transition-all shadow-sm hover:shadow-xl"
        >
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-50 transition-colors">
            <svg className="w-6 h-6 text-slate-600 group-hover:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">I’m a shift worker</h2>
          <p className="text-slate-500 mb-8">Personal check-up on sleep debt, alertness levels, and recovery patterns.</p>
          <div className="flex items-center text-rose-600 font-bold">
            Start Check-in <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>

        {/* Corporate Card */}
        <a 
          href="#/corporate"
          className="group block bg-white border border-slate-200 rounded-3xl p-8 hover:border-rose-600 hover:ring-1 hover:ring-rose-600 transition-all shadow-sm hover:shadow-xl"
        >
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-50 transition-colors">
            <svg className="w-6 h-6 text-slate-600 group-hover:text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">I’m HR / Safety / Ops</h2>
          <p className="text-slate-500 mb-8">Workforce-level screening for fatigue exposure and operational risk bands.</p>
          <div className="flex items-center text-rose-600 font-bold">
            Run Exposure Check <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>
      </div>
      
      <div className="mt-20 p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 bg-white p-4 rounded-xl shadow-sm">
            <span className="text-2xl font-black text-rose-600">SHIFTED</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Built for the frontline.</h3>
            <p className="text-slate-600 text-sm">Our assessments are designed to bridge the gap between operational reality and human biological limits. No judgment, just actionable data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
