import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Code2,
  Trophy,
  BarChart3,
  MessageSquare,
  GraduationCap,
  TrendingUp,
  Award,
} from 'lucide-react';
import { NavItem } from '../../../../components/molecules/NavItem';
import { MetricBadge } from '../../../../components/molecules/MetricBadge';
import { ProblemPane } from './ProblemPane';
import { CodeEditorPane } from './CodeEditorPane';
import { use3DTilt } from '../../hooks/use3DTilt';
import { useIdeRunner } from '../../hooks/useIdeRunner';

export const IdeMockupWindow = () => {
  const containerRef = useRef(null);
  const { tilt, tiltProps } = use3DTilt(4);
  const {
    isRunning,
    isSubmitting,
    activeTab,
    setActiveTab,
    testCases,
    activeTestCaseId,
    setActiveTestCaseId,
    stats,
    runCode,
    submitCode,
  } = useIdeRunner();

  const { scrollY } = useScroll();

  const rawScrollRotateX = useTransform(scrollY, [0, 360], [20, 0]);
  const rawScrollScale = useTransform(scrollY, [0, 360], [0.94, 1]);
  const rawScrollTranslateY = useTransform(scrollY, [0, 360], [25, 0]);

  const scrollRotateX = useSpring(rawScrollRotateX, { stiffness: 100, damping: 26 });
  const scrollScale = useSpring(rawScrollScale, { stiffness: 100, damping: 26 });
  const scrollTranslateY = useSpring(rawScrollTranslateY, { stiffness: 100, damping: 26 });

  const sidebarLinks = [
    { label: 'Problems', icon: Code2, active: true },
    { label: 'Contests', icon: Trophy, active: false },
    { label: 'Leaderboard', icon: BarChart3, active: false },
    { label: 'Discuss', icon: MessageSquare, active: false },
    { label: 'Learn', icon: GraduationCap, active: false },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 perspective-1000 py-6"
    >
      
      <motion.div
        {...tiltProps}
        style={{
          rotateX: scrollRotateX,
          scale: scrollScale,
          y: scrollTranslateY,
          transformPerspective: 1300,
          transformOrigin: 'center 20%',
        }}
        className="w-full bg-[#f8faff] dark:bg-[#0c1017] rounded-2xl sm:rounded-3xl p-2 sm:p-3 md:p-3.5 border border-slate-200/90 dark:border-slate-800 shadow-[0_30px_90px_-20px_rgba(99,102,241,0.22),0_15px_40px_-15px_rgba(0,0,0,0.12)] transition-colors duration-200"
      >
        
        <div className="w-full bg-white dark:bg-[#111622] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xs grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          
          <div className="hidden md:flex lg:col-span-3 flex-col justify-between p-3.5 sm:p-4 bg-[#fcfdfe] dark:bg-[#0b0f17] border-r border-slate-200/70 dark:border-slate-800 select-none">
            
            <div className="space-y-4">
              
              <div className="flex items-baseline gap-1 px-2 py-1 select-none">
                <span className="font-display font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
                  Code<span className="text-indigo-600 dark:text-indigo-400">Judge</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 inline-block" />
              </div>

              <div className="space-y-1">
                {sidebarLinks.map((item) => (
                  <NavItem
                    key={item.label}
                    variant="sidebar"
                    label={item.label}
                    icon={item.icon}
                    active={item.active}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 pt-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 rounded-xl p-3 border border-slate-200/60 dark:border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                YOUR PROGRESS
              </span>
              <div className="divide-y divide-slate-100/80 dark:divide-slate-800">
                <MetricBadge
                  label="Solved"
                  value={stats.solvedCount}
                  iconBg="bg-emerald-500"
                />
                <MetricBadge
                  label="Contest Rating"
                  value={stats.contestRating}
                  icon={TrendingUp}
                  iconBg="bg-indigo-500"
                />
                <MetricBadge
                  label="Global Rank"
                  value={stats.globalRank}
                  icon={Award}
                  iconBg="bg-amber-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 min-h-[400px]">
            <ProblemPane />
          </div>

          <div className="lg:col-span-5 min-h-[440px]">
            <CodeEditorPane
              isRunning={isRunning}
              isSubmitting={isSubmitting}
              onRun={runCode}
              onSubmit={submitCode}
              testCases={testCases}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              activeTestCaseId={activeTestCaseId}
              onSelectTestCase={setActiveTestCaseId}
            />
          </div>

        </div>
      </motion.div>
    </div>
  );
};
