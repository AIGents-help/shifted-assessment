
import React, { useState } from 'react';
import Assessment from '../components/Assessment';
import { CORPORATE_QUESTIONS, BOOK_CALL_URL, PURCHASE_URL } from '../constants';

const CorporateAssessmentView: React.FC = () => {
  const [stage, setStage] = useState<'assessment' | 'pre-results' | 'gate' | 'summary'>('assessment');
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '' });

  const calculateScore = (answers: Record<number, number | number[]>) => {
    let total = 0;
    Object.entries(answers).forEach(([id, val]) => {
      if (Array.isArray(val)) {
        // Multi-select for fatigue indicators
        const sum = (val as number[]).reduce((a, b) => a + b, 0);
        total += Math.min(sum, 3); // Cap at 3 as per requirements
      } else {
        total += val;
      }
    });
    setScore(total);
    setStage('pre-results');
    console.log('Corporate Assessment Completed. Total Score:', total);
  };

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Corporate Lead Captured:', formData);
    setStage('summary');
  };

  const getBand = () => {
    if (score <= 10) return {
      label: "Contained Exposure",
      summary: "Your current schedule structures provide a baseline level of protection against systemic fatigue.",
      exposure: ["Low rotation frequency", "Predictable schedule changes", "Formal incident review", "Controlled nighttime tasking"],
      reductions: ["Maintain existing rest protocols", "Introduce proactive recovery training", "Audit high-risk window tasks", "Formalize fatigue reporting"]
    };
    if (score <= 20) return {
      label: "Unmanaged Risk",
      summary: "Operational demands are outpacing recovery timeframes, creating hidden safety and productivity gaps.",
      exposure: ["Schedule volatility (>weekly changes)", "Inconsistent rest windows", "Lack of fatigue-specific tracking", "Reactive incident investigations"],
      reductions: ["Standardize schedule notice (min 48h)", "Implement Circadian Alertness Training", "Track fatigue-related absenteeism", "Establish Fatigue Safety Committee"]
    };
    return {
      label: "Systemic Fatigue Exposure",
      summary: "Fatigue is baked into your schedule architecture, likely driving turnover and safety incidents.",
      exposure: ["Rapid day-night rotation", "High density of night-critical tasks", "No cost-of-fatigue quantification", "Low policy confidence"],
      reductions: ["Structural roster redesign", "Immediate supervisor fatigue training", "External operational fatigue audit", "Comprehensive Recovery System deployment"]
    };
  };

  const band = getBand();

  if (stage === 'assessment') {
    return (
      <Assessment 
        questions={CORPORATE_QUESTIONS} 
        onComplete={calculateScore} 
        title="Fatigue Exposure Check"
        privacyNotice="Individual employee data is not collected. This is organizational screening."
      />
    );
  }

  if (stage === 'pre-results') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 md:p-12 text-center shadow-sm">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Analysis Complete</h2>
        <p className="text-slate-500 mb-10">Based on operational inputs, your workforce exposure band is:</p>
        
        <div className="mb-10 p-6 bg-slate-900 rounded-2xl border border-slate-800 inline-block text-white">
          <span className="text-2xl font-black uppercase tracking-tight">{band.label}</span>
        </div>

        <p className="text-slate-600 mb-10 max-w-md mx-auto">{band.summary}</p>

        <button 
          onClick={() => setStage('gate')}
          className="px-12 py-4 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 transition-all shadow-lg shadow-rose-200/50"
        >
          Download Executive Summary PDF →
        </button>
      </div>
    );
  }

  if (stage === 'gate') {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Get the Executive Summary</h2>
          <p className="text-slate-500">Enter your details to receive the full organizational risk breakdown and remediation checklist.</p>
        </div>
        
        <form onSubmit={handleGateSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
              <input required type="text" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Company Email</label>
              <input required type="email" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Company Name</label>
            <input required type="text" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Your Role</label>
            <select className="w-full p-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-rose-500 outline-none" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
              <option>Director / VP of Safety</option>
              <option>HR Manager / Business Partner</option>
              <option>Operations / Plant Manager</option>
              <option>Executive / Owner</option>
            </select>
          </div>
          <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-rose-600 transition-all shadow-lg">
            View Analysis
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-900 p-8 md:p-12 text-white">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-rose-500 mb-2">Executive Summary</h2>
          <h1 className="text-4xl font-black mb-4">{band.label}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{band.summary}</p>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-rose-600 rounded-full" />
                Exposure Drivers
              </h3>
              <ul className="space-y-4">
                {band.exposure.map((ex, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="bg-rose-50 text-rose-600 p-1 rounded font-bold text-xs">Ex-{i+1}</span>
                    <span className="text-slate-600">{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-emerald-500 rounded-full" />
                Recommended Reductions
              </h3>
              <ul className="space-y-4">
                {band.reductions.map((red, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="bg-emerald-50 text-emerald-600 p-1 rounded font-bold text-xs">Step</span>
                    <span className="text-slate-600">{red}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Protect Your Workforce Performance</h2>
        <p className="text-slate-500 mb-10 max-w-xl mx-auto">
          SHIFTED is the industry leader in roster-aware biological recovery. Deploy the CBT + Digital system to reduce fatigue-driven risk by up to 40%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={BOOK_CALL_URL} target="_blank" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
            Book Implementation Call
          </a>
          <a href={PURCHASE_URL} target="_blank" className="px-10 py-4 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 transition-all">
            Deploy SHIFTED System
          </a>
        </div>
      </div>
    </div>
  );
};

export default CorporateAssessmentView;
