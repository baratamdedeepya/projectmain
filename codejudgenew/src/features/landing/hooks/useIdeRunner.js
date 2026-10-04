import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { landingProblemData } from '../data/landingProblemData';

export const useIdeRunner = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('testcases'); 
  const [testCases, setTestCases] = useState(landingProblemData.testCases);
  const [stats, setStats] = useState(landingProblemData.stats);
  const [lastSubmissionStatus, setLastSubmissionStatus] = useState('Accepted');
  const [activeTestCaseId, setActiveTestCaseId] = useState(1);

  const runCode = useCallback(() => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setActiveTab('testcases');
    }, 600);
  }, []);

  const submitCode = useCallback(() => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLastSubmissionStatus('Accepted');
      setActiveTab('testcases');

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'],
        });
      } catch (err) {
        
      }

      setStats((prev) => ({
        ...prev,
        solvedCount: prev.solvedCount === 142 ? 143 : prev.solvedCount,
      }));
    }, 900);
  }, []);

  return {
    isRunning,
    isSubmitting,
    activeTab,
    setActiveTab,
    testCases,
    activeTestCaseId,
    setActiveTestCaseId,
    stats,
    lastSubmissionStatus,
    runCode,
    submitCode,
  };
};
