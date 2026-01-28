
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#/" className="text-2xl font-bold tracking-tighter text-slate-900">
            SHIFT<span className="text-rose-600">ED</span>
          </a>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="#/worker" className="text-slate-600 hover:text-rose-600">Worker</a>
            <a href="#/corporate" className="text-slate-600 hover:text-rose-600">Corporate</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} SHIFTED. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#/privacy" className="text-slate-600 hover:text-rose-600">Privacy</a>
              <a href="#/terms" className="text-slate-600 hover:text-rose-600">Terms</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 text-xs text-slate-400 text-center">
            Educational resource only. Not medical advice. Assessment data is handled according to our privacy policy.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
