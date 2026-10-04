import React, { useState } from 'react';
import { Bookmark, MoreHorizontal, ChevronRight } from 'lucide-react';
import { Badge } from '../../../../components/atoms/Badge';
import { TabButton } from '../../../../components/molecules/TabButton';
import { landingProblemData } from '../../data/landingProblemData';

export const ProblemPane = ({ problem = landingProblemData }) => {
  const [activeTab, setActiveTab] = useState('Description');
  const [bookmarked, setBookmarked] = useState(false);

  const tabs = [
    { label: 'Description' },
    { label: 'Editorial' },
    { label: 'Solutions', badge: '12.4K' },
    { label: 'Submissions' },
  ];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#111622] border-r border-slate-200/80 dark:border-slate-800 overflow-y-auto transition-colors">
      
      <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span>Problems</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-700 dark:text-slate-200">{problem.category}</span>
        </div>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 sm:p-5 pb-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
              {problem.title}
            </h2>
            <Badge variant="easy" size="sm">
              {problem.difficulty}
            </Badge>
          </div>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-1.5 rounded-md transition-colors ${
              bookmarked
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
            title="Bookmark Problem"
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        <div className="flex items-center gap-5 mt-4 border-b border-slate-100 dark:border-slate-800 text-xs">
          {tabs.map((tab) => (
            <TabButton
              key={tab.label}
              label={tab.label}
              badge={tab.badge}
              active={activeTab === tab.label}
              onClick={() => setActiveTab(tab.label)}
            />
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-5 pt-2 space-y-4 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
        <p className="whitespace-pre-line text-slate-700 dark:text-slate-300">
          {problem.description}
        </p>

        <div className="space-y-1.5 pt-1">
          <span className="font-bold text-slate-900 dark:text-white text-xs tracking-tight">
            Example 1:
          </span>
          <div className="bg-slate-50/90 dark:bg-[#181f2f] rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 font-mono text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">Input: </strong>
              <span>{problem.example1.input}</span>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">Output: </strong>
              <span>{problem.example1.output}</span>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">Explanation: </strong>
              <span>{problem.example1.explanation}</span>
            </p>
          </div>
        </div>

        <div className="space-y-1.5 pt-1">
          <span className="font-bold text-slate-900 dark:text-white text-xs tracking-tight">
            Example 2:
          </span>
          <div className="bg-slate-50/90 dark:bg-[#181f2f] rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 font-mono text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">Input: </strong>
              <span>{problem.example2.input}</span>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">Output: </strong>
              <span>{problem.example2.output}</span>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">Explanation: </strong>
              <span>{problem.example2.explanation}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
