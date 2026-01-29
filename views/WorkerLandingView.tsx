
import React from 'react';

const WorkerLandingView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-8 md:p-12">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              3-minute check: <span className="text-rose-600">Sleep, Focus, & Recovery</span>
            </h1>
            <p className="text-lg text-slate-600">
              Shift work is hard on the body. This tool helps you see exactly where the strain is hitting hardest.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                What this is
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li>• An educational tool to measure schedule strain</li>
                <li>• A way to identify your specific fatigue signals</li>
                <li>• Private: results are for your eyes only</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                What this isn't
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Not a medical diagnosis</li>
                <li>• Not monitored by your employer</li>
                <li>• Not a pass/fail test</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100">
            <div className="flex gap-4 items-start">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Privacy Promise</h4>
                <p className="text-sm text-slate-500">Your specific answers are 100% private. We do not share individual worker data with management. This is for your professional recovery.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a 
              href="#/worker/check" 
              className="w-full md:w-auto px-12 py-4 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 transition-all text-center shadow-lg shadow-rose-200/50"
            >
              Start Worker Check
            </a>
            <p className="text-sm text-slate-400">Takes about 3 minutes • No login required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerLandingView;
