import React from 'react';
import { EditorToolbar } from '../molecules/EditorToolbar';
import { TestResultsPane } from './TestResultsPane';

export const CodeEditorPane = ({
  code,
  language = 'Python 3',
  onRun,
  onSubmit,
  isRunning = false,
  isSubmitting = false,
  testCases = [],
  activeTab = 'testcases',
  onTabChange,
  activeTestCaseId = 1,
  onSelectTestCase,
}) => {
  
  const codeLines = [
    { num: 1, content: (
      <span>
        <span className="text-[#e2777a]">class</span>{' '}
        <span className="text-[#f08d49] font-medium">Solution</span>:
      </span>
    )},
    { num: 2, content: (
      <span className="pl-4">
        <span className="text-[#e2777a]">def</span>{' '}
        <span className="text-[#61afef] font-medium">twoSum</span>(
        <span className="text-[#e06c75]">self</span>,{' '}
        <span className="text-[#e5c07b]">nums</span>: List[
        <span className="text-[#98c379]">int</span>],{' '}
        <span className="text-[#e5c07b]">target</span>:{' '}
        <span className="text-[#98c379]">int</span>) -&gt; List[
        <span className="text-[#98c379]">int</span>]:
      </span>
    )},
    { num: 3, content: (
      <span className="pl-8">
        <span className="text-[#abb2bf]">seen</span> = {'{}'}
      </span>
    )},
    { num: 4, content: (
      <span className="pl-8">
        <span className="text-[#c678dd]">for</span>{' '}
        <span className="text-[#e5c07b]">i</span>,{' '}
        <span className="text-[#e5c07b]">num</span>{' '}
        <span className="text-[#c678dd]">in</span>{' '}
        <span className="text-[#61afef]">enumerate</span>(nums):
      </span>
    )},
    { num: 5, content: (
      <span className="pl-12">
        <span className="text-[#c678dd]">if</span>{' '}
        <span className="text-[#abb2bf]">target</span> -{' '}
        <span className="text-[#abb2bf]">num</span>{' '}
        <span className="text-[#c678dd]">in</span> seen:
      </span>
    )},
    { num: 6, content: (
      <span className="pl-16">
        <span className="text-[#c678dd]">return</span> [seen[target - num], i]
      </span>
    )},
    { num: 7, content: (
      <span className="pl-8">
        <span className="text-[#abb2bf]">seen[num]</span> = i
      </span>
    )},
    { num: 8, content: <span>&nbsp;</span> },
    { num: 9, content: <span>&nbsp;</span> },
  ];

  return (
    <div className="flex flex-col h-full bg-[#151922] text-slate-200 overflow-hidden font-mono text-xs">
      
      <EditorToolbar
        language={language}
        onRun={onRun}
        onSubmit={onSubmit}
        isRunning={isRunning}
        isSubmitting={isSubmitting}
      />

      <div className="flex-1 p-3 sm:p-4 overflow-x-auto bg-[#131720] select-text">
        <div className="space-y-1 leading-6">
          {codeLines.map((line) => (
            <div key={line.num} className="flex items-start group">
              <span className="w-8 text-right pr-4 text-slate-600 select-none text-[11px] group-hover:text-slate-400 transition-colors">
                {line.num}
              </span>
              <span className="flex-1 font-mono text-xs tracking-wide">
                {line.content}
              </span>
            </div>
          ))}
        </div>
      </div>

      <TestResultsPane
        testCases={testCases}
        activeTab={activeTab}
        onTabChange={onTabChange}
        activeTestCaseId={activeTestCaseId}
        onSelectTestCase={onSelectTestCase}
        isRunning={isRunning}
      />
    </div>
  );
};
