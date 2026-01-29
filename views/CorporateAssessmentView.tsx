
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
        const sum = (val as number[]).reduce((a, b) => a + b, 0);
        total += sum;
      } else {
        total += val;
      }
    });
    setScore(total);
    setStage('pre-results');
  };

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStage('summary');
  };

  const getBand = () => {
    if (score <= 10) return {
      label: "Aligned Operation",
      summary: "Your rostering architecture shows high alignment with human biological limits, suggesting low systemic fatigue exposure.",
      observed: ["Consistent recovery windows", "Predictable scheduling patterns", "High visibility into performance cycles"],
      impact: ["Enhanced workforce retention", "Reduced error rates during transitions", "Optimized operational continuity"],
      mitigations: ["Proactive recovery-education access", "Circadian-first schedule modeling options", "Informal peer-support resources"]
    };
    if (score <= 20) return {
      label: "Operational Friction",
      summary: "Current schedule demands are creating intermittent biological misalignment, likely surfacing as performance variance.",
      observed: ["Recurring roster volatility", "Frequent circadian direction changes", "Inconsistent performance visibility"],
      impact: ["Elevated attrition in specific shift blocks", "Increased error density during night windows", "Compensatory behavior reliance"],
      mitigations: ["Supportive recovery tool deployment", "Biological-trough workload adjustments", "Voluntary circadian sync education"]
    };
    return {
      label: "Systemic Exposure",
      summary: "Your roster architecture is in active conflict with human circadian biology, driving high operational risk and attrition.",
      observed: ["Rapid rotation across time-zones", "High density of safety-critical night tasks", "Low visibility into time-of-day risks"],
      impact: ["Systemic fatigue-driven safety incidents", "Structural recruitment challenges", "Chronic physiological strain on teams"],
      mitigations: ["Full Recovery System integration", "Roster-aware biological timing tools", "External circadian risk modeling"]
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
          View Executive Analysis →
        </button>
      </div>
    );
  }

  if (stage === 'gate') {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Executive Summary</h2>
          <p className="text-slate-500">Provide details to unlock the full organizational exposure report.</p>
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
            Access Analysis
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
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-rose-600">Currently Observed</h3>
              <ul className="space-y-3">
                {band.observed.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm flex gap-2"><span>•</span> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-rose-600">Likely Impact</h3>
              <ul className="space-y-3">
                {band.impact.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm flex gap-2"><span>•</span> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-rose-600">Practical Mitigations</h3>
              <ul className="space-y-3">
                {band.mitigations.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm flex gap-2"><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h3 className="font-bold text-rose-900 mb-4 text-sm uppercase tracking-wider">Worker Trust Safeguards</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="text-xs text-rose-800 flex gap-2"><span>✕</span> No individual surveillance or scoring</li>
              <li className="text-xs text-rose-800 flex gap-2"><span>✕</span> No sharing of personal sleep data</li>
              <li className="text-xs text-rose-800 flex gap-2"><span>✕</span> No disciplinary use of assessment data</li>
              <li className="text-xs text-rose-800 flex gap-2"><span>✕</span> No HR enforcement or mandate language</li>
              <li className="text-xs text-rose-800 flex gap-2"><span>✕</span> Support-first, never compliance-first</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Protect Your Workforce Performance</h2>
        <p className="text-slate-500 mb-10 max-w-xl mx-auto">
          SHIFTED is the industry leader in roster-aware biological recovery. Bridge the gap between operational reality and human biological limits.
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
