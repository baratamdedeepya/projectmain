import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ThreeHeroBackground } from '../organisms/ThreeHeroBackground';
import { HeroHeadline } from '../organisms/HeroHeadline';
import { IdeMockupWindow } from '../organisms/IdeMockupWindow';
import { FeaturesSection } from '../organisms/FeaturesSection';

export const LandingHeroTemplate = ({ onStartSolving, onExploreContests }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-glow-orb',
        { scale: 0.85, opacity: 0.3 },
        {
          scale: 1.1,
          opacity: 0.65,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 1.5,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#fafbff] dark:bg-[#07090e] selection:bg-indigo-500/20 selection:text-indigo-600 pb-24 sm:pb-32 transition-colors duration-200"
    >
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        <div className="gsap-glow-orb absolute -top-24 -left-24 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-br from-sky-300/40 via-indigo-300/25 dark:from-sky-500/20 dark:via-indigo-600/15 to-transparent blur-[120px]" />

        <div className="gsap-glow-orb absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[450px] sm:w-[800px] sm:h-[500px] rounded-full bg-gradient-to-r from-violet-300/25 via-purple-200/20 dark:from-violet-600/20 dark:via-purple-700/15 to-transparent blur-[130px]" />

        <div className="gsap-glow-orb absolute -top-16 -right-24 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-bl from-orange-300/30 via-amber-200/20 dark:from-orange-500/20 dark:via-amber-600/15 to-transparent blur-[120px]" />

        <div className="absolute top-[520px] left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-gradient-to-t from-indigo-200/20 dark:from-indigo-600/15 via-purple-100/10 to-transparent blur-[140px]" />
      </div>

      <ThreeHeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        
        <HeroHeadline
          onStartSolving={onStartSolving}
          onExploreContests={onExploreContests}
        />

        <div className="mt-6 sm:mt-10">
          <IdeMockupWindow />
        </div>

        <FeaturesSection />
      </div>
    </div>
  );
};
