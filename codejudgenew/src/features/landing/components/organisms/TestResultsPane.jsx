import React from 'react';
import { CheckCircle2, Clock, HardDrive } from 'lucide-react';
import { TabButton } from '../../../../components/molecules/TabButton';

export const TestResultsPane = ({
  testCases = [],
  activeTab = 'testcases',
  onTabChange,
  activeTestCaseId = 1,
  onSelectTestCase,
  isRunning = false,
}) => {
  const tabs = [
    { id: 'testcases', label: 'Test Cases' },
    { id: 'output', label: 'Output' },
    { id: 'submissions', label: 'Submissions' },
  ];

  return (
    <div className="bg-[#121620] border-t border-slate-700/60 p-3 sm:p-4 select-none">
      
      <div className="flex items-center gap-2 mb-3">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            variant="dark"
            label={tab.label}
            active={activeTab === tab.id}
            onClick={() => onTabChange?.(tab.id)}
          />
        ))}
      </div>

      {activeTab === 'testcases' && (
        <div className="space-y-2">
          {isRunning ? (
            <div className="py-6 flex flex-col items-center justify-center gap-2 text-slate-400 text-xs">
              <span className="w-5 h-5 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
              <span>Running test cases against test suites...</span>
            </div>
          ) : (
            testCases.map((tc) => (
              <div
                key={tc.id}
                onClick={() => onSelectTestCase?.(tc.id)}
                className="flex flex-wrap items-center justify-between p-2.5 rounded-lg bg-[#181e2b] border border-slate-800/80 hover:border-slate-700 transition-all text-xs cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-300">
                    {tc.name}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
                    {tc.input}
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-semibold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{tc.status}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{tc.runtime}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <HardDrive className="w-3 h-3 text-slate-500" />
                    <span>{tc.memory}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'output' && (
        <div className="p-3 bg-[#181e2b] rounded-lg font-mono text-xs text-slate-300 space-y-1">
          <p className="text-emerald-400 font-semibold">Standard Output:</p>
          <p className="text-slate-400">[0, 1]</p>
          <p className="text-slate-400">[1, 2]</p>
          <p className="text-slate-500 text-[11px] pt-1">Process finished with exit code 0</p>
        </div>
      )}

      {activeTab === 'submissions' && (
        <div className="p-3 bg-[#181e2b] rounded-lg text-xs space-y-2">
          <div className="flex items-center justify-between text-emerald-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Accepted
            </span>
            <span className="text-slate-400 text-[11px]">Just now</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px] text-slate-300">
            <div className="p-2 bg-[#202738] rounded">
              <span className="text-slate-500 block">Runtime</span>
              <span className="text-slate-200 font-bold">2 ms</span>
              <span className="text-emerald-400 text-[10px] ml-1">Beats 94.8%</span>
            </div>
            <div className="p-2 bg-[#202738] rounded">
              <span className="text-slate-500 block">Memory</span>
              <span className="text-slate-200 font-bold">14.2 MB</span>
              <span className="text-emerald-400 text-[10px] ml-1">Beats 88.5%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
