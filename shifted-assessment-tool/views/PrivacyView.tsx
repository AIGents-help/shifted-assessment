
import React from 'react';

const PrivacyView: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Privacy & Legal</h1>
      
      <section className="space-y-6 text-slate-600">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Educational Purpose</h2>
          <p>The SHIFTED Assessment Tool is designed for educational and informational purposes only. It is not a medical diagnostic tool and should not be used as a substitute for professional medical advice, diagnosis, or treatment.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Worker Privacy</h2>
          <p>Individual worker responses are strictly private. We collect email addresses only for the purpose of sending results and requested information. We do not provide employee-level data or individual responses to corporate management or employers.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Corporate Data</h2>
          <p>Corporate screening data is treated as confidential operational information. Results are provided to the requestor to assist in organizational safety and performance improvement.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Data Security</h2>
          <p>We use industry-standard encryption and security measures to protect the information you provide. We do not sell your personal data to third parties.</p>
        </div>

        <div className="pt-8 border-t border-slate-100 italic text-sm">
          By using this tool, you acknowledge that SHIFTED is not responsible for any operational or personal decisions made based on the educational assessment results.
        </div>
      </section>

      <div className="mt-12 text-center">
        <a href="#/" className="text-rose-600 font-bold">← Back to Home</a>
      </div>
    </div>
  );
};

export default PrivacyView;
