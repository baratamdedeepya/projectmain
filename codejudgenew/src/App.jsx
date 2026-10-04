import React, { useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PageLayout } from './components/templates/PageLayout';
import { LandingHeroTemplate } from './features/landing/components/templates/LandingHeroTemplate';

function App() {
  const handleStartSolving = useCallback(() => {
    
    const mockupEl = document.querySelector('.perspective-1000');
    if (mockupEl) {
      mockupEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const handleExploreContests = useCallback(() => {
    const mockupEl = document.querySelector('.perspective-1000');
    if (mockupEl) {
      mockupEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const handleSearch = useCallback((query) => {
    console.log('Searching for:', query);
  }, []);

  return (
    <ThemeProvider>
      <PageLayout onSearch={handleSearch}>
        <LandingHeroTemplate
          onStartSolving={handleStartSolving}
          onExploreContests={handleExploreContests}
        />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
