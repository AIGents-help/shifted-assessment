
import React, { useState } from 'react';
import Assessment from '../components/Assessment';
import { WORKER_QUESTIONS, PURCHASE_URL } from '../constants';

const WorkerAssessmentView: React.FC = () => {
  const [stage, setStage] = useState<'assessment' | 'pre-results' | 'gate' | 'full-results'>('assessment');
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', shiftType: 'Rotating' });

  const calculateScore = (answers: Record<number, number | number[]>) => {
    let total = 0;
    Object.values(answers).forEach(val => {
      if (typeof val === 'number') total += val;
    });
    setScore(total);
    setStage('pre-results');
    console.log('Worker Assessment Completed. Score:', total);
  };

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead Captured:', formData);
    setStage('full-results');
  };

  const getTier = () => {
    if (score <= 12) return {
      label: "Managing Well (With Strain)",
      description: "You are maintaining stability, but your body is still absorbing the physiological costs of shift work.",
      bullets: ["Higher caffeine sensitivity", "Occasional 'zoning out' mid-shift", "Sleep quality is 'okay' but fragile"],
      helps: ["Strategic power naps (15m)", "Consistent light exposure patterns", "Scheduled hydration breaks"]
    };
    if (score <= 24) return {
      label: "Coping, Not Fully Recovering",
      description: "Your recovery cycles are inconsistent, leading to accumulated fatigue and reduced focus.",
      bullets: ["Frequent morning fog", "Appetite disruptions", "Weekend 'crash sleep' dependency"],
      helps: ["Anchor sleep protocols", "Blue-light blocking routine", "Advanced metabolic timing"]
    };
    return {
      label: "Running on Compensation",
      description: "You are relying on high-stress biological pathways to get through shifts; burnout risk is high.",
      bullets: ["Constant mental fatigue", "Regular headaches or strain", "Chronic feeling of 'never done'"],
      helps: ["Full SHIFTED recovery protocol", "Circadian reset strategies", "Professional fatigue consultation"]
    };
  };

  const tier = getTier();

  if (stage === 'assessment') {
    return (
      <Assessment 
        questions={WORKER_QUESTIONS} 
        onComplete={calculateScore} 
        title="Worker Check-in"
        privacyNotice="Your individual data is never reported to your employer."
      />
    );
  }

  if (stage === 'pre-results') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 md:p-12 text-center shadow-sm">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Check-in Complete</h2>
        <p className="text-slate-500 mb-10">Based on your responses, your fatigue band is:</p>
        
        <div className="mb-10 p-6 bg-rose-50 rounded-2xl border border-rose-100 inline-block">
          <span className="text-2xl font-black text-rose-600 uppercase tracking-tight">{tier.label}</span>
        </div>

        <p className="text-slate-600 mb-8 max-w-md mx-auto">{tier.description}</p>

        <button 
          onClick={() => setStage('gate')}
          className="px-12 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-rose-600 transition-all shadow-lg"
        >
          See Full Recovery Breakdown →
        </button>
      </div>
    );
  }

  if (stage === 'gate') {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Get your recovery plan</h2>
        <p className="text-slate-500 mb-8">We'll send you a detailed breakdown of your results plus a starter guide for your shift type.</p>
        
        <form onSubmit={handleGateSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">First Name</label>
            <input 
              required
              type="text" 
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" 
              placeholder="e.g. Alex"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" 
              placeholder="alex@example.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Current Shift Type</label>
            <select 
              className="w-full p-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-rose-500 outline-none"
              value={formData.shiftType}
              onChange={e => setFormData({...formData, shiftType: e.target.value})}
            >
              <option>Fixed Nights</option>
              <option>Rotating Shifts</option>
              <option>On-Call / Variable</option>
              <option>Long-Haul Day</option>
            </select>
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 transition-all shadow-lg shadow-rose-200/50"
          >
            Show My Results
          </button>
          <p className="text-center text-xs text-slate-400 mt-4">
            By submitting, you agree to receive SHIFTED recovery insights. Unsubscribe anytime.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-rose-600 mb-2">Detailed Results</h2>
        <h1 className="text-4xl font-black text-slate-900 mb-4">{tier.label}</h1>
        <p className="text-lg text-slate-600 mb-10">{tier.description}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Common Signs</h3>
            <ul className="space-y-3">
              {tier.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-slate-600 text-sm">
                  <span className="text-rose-600 font-bold">•</span> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Immediate Steps</h3>
            <ul className="space-y-3">
              {tier.helps.map((h, i) => (
                <li key={i} className="flex gap-3 text-slate-600 text-sm">
                  <span className="text-emerald-500 font-bold">✓</span> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-grow">
              <h2 className="text-3xl font-black mb-4">Master Your Shift.</h2>
              <p className="text-slate-400 mb-8 max-w-lg">
                The full SHIFTED Recovery System provides the CBT protocols, biological timing tools, and mobile support to eliminate chronic shift-work fatigue.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={PURCHASE_URL}
                  target="_blank"
                  className="px-8 py-4 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 transition-all text-center"
                >
                  Buy SHIFTED Bundle
                </a>
              </div>
            </div>
            <div className="w-full md:w-64 bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Included in Bundle</div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><span>📚</span> The SHIFTED Book</li>
                <li className="flex gap-2"><span>📱</span> Recovery Companion App</li>
                <li className="flex gap-2"><span>🧠</span> CBT-I for Shift Workers</li>
                <li className="flex gap-2"><span>⌚</span> Circadian Sync Guide</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </div>
    </div>
  );
};

export default WorkerAssessmentView;
