
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomeView from './views/HomeView';
import WorkerLandingView from './views/WorkerLandingView';
import WorkerAssessmentView from './views/WorkerAssessmentView';
import CorporateLandingView from './views/CorporateLandingView';
import CorporateAssessmentView from './views/CorporateAssessmentView';
import PrivacyView from './views/PrivacyView';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    switch (route) {
      case '#/':
        return <HomeView />;
      case '#/worker':
        return <WorkerLandingView />;
      case '#/worker/check':
        return <WorkerAssessmentView />;
      case '#/corporate':
        return <CorporateLandingView />;
      case '#/corporate/check':
        return <CorporateAssessmentView />;
      case '#/privacy':
        return <PrivacyView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <Layout>
      {renderView()}
    </Layout>
  );
};

export default App;
