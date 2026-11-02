
import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  CheckCircle2,
  Circle,
  ArrowUpRight,
  Code2,
} from 'lucide-react';

const problems = [
  {
    id: 1,
    title: 'Two Sum',
    topic: 'Array',
    difficulty: 'Easy',
    acceptance: '49.2%',
    solved: true,
  },
  {
    id: 2,
    title: 'Reverse Linked List',
    topic: 'Linked List',
    difficulty: 'Easy',
    acceptance: '72.1%',
    solved: true,
  },
  {
    id: 3,
    title: 'Binary Search',
    topic: 'Binary Search',
    difficulty: 'Easy',
    acceptance: '55.8%',
    solved: false,
  },
  {
    id: 4,
    title: 'Longest Substring Without Repeating Characters',
    topic: 'String',
    difficulty: 'Medium',
    acceptance: '35.6%',
    solved: false,
  },
  {
    id: 5,
    title: 'Container With Most Water',
    topic: 'Array',
    difficulty: 'Medium',
    acceptance: '58.3%',
    solved: false,
  },
  {
    id: 6,
    title: 'Merge Intervals',
    topic: 'Array',
    difficulty: 'Medium',
    acceptance: '46.7%',
    solved: true,
  },
  {
    id: 7,
    title: 'Median of Two Sorted Arrays',
    topic: 'Binary Search',
    difficulty: 'Hard',
    acceptance: '41.2%',
    solved: false,
  },
  {
    id: 8,
    title: 'Trapping Rain Water',
    topic: 'Two Pointers',
    difficulty: 'Hard',
    acceptance: '62.5%',
    solved: false,
  },
];

const difficultyStyles = {
  Easy: 'bg-emerald-50 text-emerald-600',
  Medium: 'bg-amber-50 text-amber-600',
  Hard: 'bg-rose-50 text-rose-600',
};

export const ProblemsPage = () => {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('All');
  const [topic, setTopic] = useState('All');
  const [status, setStatus] = useState('All');

  const topics = ['All', ...new Set(problems.map((p) => p.topic))];

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === 'All' || problem.difficulty === difficulty;

    const matchesTopic = topic === 'All' || problem.topic === topic;

    const matchesStatus =
      status === 'All' ||
      (status === 'Solved' && problem.solved) ||
      (status === 'Unsolved' && !problem.solved);

    return (
      matchesSearch &&
      matchesDifficulty &&
      matchesTopic &&
      matchesStatus
    );
  });

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">
            Practice and improve your skills
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Problems
          </h1>

          <p className="text-slate-500 mt-2">
            Challenge yourself with coding problems.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-3 rounded-xl">
          <Code2 className="w-5 h-5" />
          <span className="text-sm font-semibold">
            {problems.filter((p) => p.solved).length} / {problems.length} Solved
          </span>
        </div>
      </div>

      {/* Filters Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

          <input
            type="text"
            placeholder="Search problems by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition"
          />
        </div>

        {/* Difficulty */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          <SlidersHorizontal className="w-4 h-4 text-slate-400 mr-1" />

          {['All', 'Easy', 'Medium', 'Hard'].map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                difficulty === level
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Topic and Status */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">

          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-600 outline-none focus:border-indigo-400"
          >
            {topics.map((item) => (
              <option key={item} value={item}>
                {item === 'All' ? 'All Topics' : item}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-600 outline-none focus:border-indigo-400"
          >
            <option value="All">All Status</option>
            <option value="Solved">Solved</option>
            <option value="Unsolved">Unsolved</option>
          </select>

        </div>
      </div>

      {/* Problem List */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-slate-900">
              Problem Set
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {filteredProblems.length} problems found
            </p>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 text-xs font-semibold text-slate-500 uppercase">
          <div className="col-span-1">Status</div>
          <div className="col-span-5">Problem</div>
          <div className="col-span-2">Topic</div>
          <div className="col-span-2">Difficulty</div>
          <div className="col-span-1">Acceptance</div>
          <div className="col-span-1"></div>
        </div>

        {/* Rows */}
        <div>
          {filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-5 border-b border-slate-100 last:border-0 items-center hover:bg-indigo-50/40 transition-all duration-200 group"
            >

              <div className="md:col-span-1">
                {problem.solved ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300" />
                )}
              </div>

              <div className="md:col-span-5">
                <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {problem.id}. {problem.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 md:hidden">
                  {problem.topic}
                </p>
              </div>

              <div className="md:col-span-2 hidden md:block">
                <span className="text-sm text-slate-500">
                  {problem.topic}
                </span>
              </div>

              <div className="md:col-span-2">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${difficultyStyles[problem.difficulty]}`}>
                  {problem.difficulty}
                </span>
              </div>

              <div className="md:col-span-1 text-sm text-slate-500">
                {problem.acceptance}
              </div>

              <div className="md:col-span-1">
                <button
                  title="Open problem"
                  className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-100 transition"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}

          {filteredProblems.length === 0 && (
            <div className="py-12 text-center">
              <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <p className="font-semibold text-slate-700">
                No problems found
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
