import React from 'react';
import { Play, Send, ChevronDown, Sun, RotateCcw } from 'lucide-react';
import { Button } from '../../../../components/atoms/Button';

export const EditorToolbar = ({
  language = 'Python 3',
  onLanguageChange,
  onRun,
  onSubmit,
  isRunning = false,
  isSubmitting = false,
}) => {
  return (
    <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#171c26] border-b border-slate-700/60 select-none">
      
      <div className="flex items-center gap-2">
        <button
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-200 bg-[#222836] hover:bg-[#2b3345] border border-slate-700/70 rounded-md transition-colors"
          title="Select Programming Language"
        >
          
          <span className="text-sm">🐍</span>
          <span>{language}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        
        <button
          className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-md transition-colors"
          title="Toggle Theme"
        >
          <Sun className="w-3.5 h-3.5" />
        </button>

        <button
          className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-md transition-colors"
          title="Code History"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        <Button
          variant="editorRun"
          size="sm"
          icon={Play}
          loading={isRunning}
          onClick={onRun}
          className="h-7 text-xs font-medium"
        >
          Run
        </Button>

        <Button
          variant="submit"
          size="sm"
          icon={Send}
          loading={isSubmitting}
          onClick={onSubmit}
          className="h-7 text-xs font-semibold shadow-indigo-600/30"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
