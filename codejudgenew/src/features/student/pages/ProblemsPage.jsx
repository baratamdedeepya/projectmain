
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
  Easy: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  Medium: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  Hard: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
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
    <div className="font-sans space-y-6 dark:bg-slate-950">

      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
            Practice and improve your skills
          </p>

          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            Problems
          </h1>

          <p className="mt-1.5 text-sm font-normal text-slate-500 dark:text-slate-400">
            Challenge yourself with coding problems.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-lg bg-indigo-50 px-3.5 py-2.5 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
          <Code2 className="h-4 w-4" />

          <span className="text-xs font-medium">
            {problems.filter((p) => p.solved).length} / {problems.length} Solved
          </span>
        </div>
      </div>

      {/* Filters Card */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search problems by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-normal text-slate-700 placeholder:text-slate-400 transition focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:bg-slate-800 dark:focus:ring-indigo-900/50"
          />
        </div>

        {/* Difficulty Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <SlidersHorizontal className="mr-1 h-4 w-4 text-slate-400" />

          {['All', 'Easy', 'Medium', 'Hard'].map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                difficulty === level
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Topic and Status */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">

          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-normal text-slate-600 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:ring-indigo-900/50"
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
            className="flex-1 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-normal text-slate-600 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:ring-indigo-900/50"
          >
            <option value="All">All Status</option>
            <option value="Solved">Solved</option>
            <option value="Unsolved">Unsolved</option>
          </select>

        </div>
      </div>

      {/* Problem List */}
      <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

        {/* List Heading */}
        <div className="flex items-center justify-between border-b border-slate-100 p-5 dark:border-slate-800">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
              Problem Set
            </h2>

            <p className="mt-1 text-xs font-normal text-slate-500 dark:text-slate-400">
              {filteredProblems.length} problems found
            </p>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden grid-cols-12 gap-4 bg-slate-50/80 px-6 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800/70 dark:text-slate-400 md:grid">
          <div className="col-span-1">Status</div>
          <div className="col-span-5">Problem</div>
          <div className="col-span-2">Topic</div>
          <div className="col-span-2">Difficulty</div>
          <div className="col-span-1">Acceptance</div>
          <div className="col-span-1"></div>
        </div>

        {/* Problem Rows */}
        <div>
          {filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="group grid grid-cols-1 items-center gap-3 border-b border-slate-100 px-5 py-4 transition-colors duration-200 last:border-0 hover:bg-indigo-50/30 md:grid-cols-12 md:gap-4 md:px-6 dark:border-slate-800 dark:hover:bg-slate-800/60"
            >

              {/* Status */}
              <div className="md:col-span-1">
                {problem.solved ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Circle className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                )}
              </div>

              {/* Problem Name */}
              <div className="md:col-span-5">
                <h3 className="text-sm font-medium leading-5 text-slate-700 transition-colors group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-400">
                  {problem.id}. {problem.title}
                </h3>

                <p className="mt-1 text-xs font-normal text-slate-400 md:hidden dark:text-slate-500">
                  {problem.topic}
                </p>
              </div>

              {/* Topic */}
              <div className="hidden md:col-span-2 md:block">
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                  {problem.topic}
                </span>
              </div>

              {/* Difficulty */}
              <div className="md:col-span-2">
                <span
                  className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${difficultyStyles[problem.difficulty]}`}
                >
                  {problem.difficulty}
                </span>
              </div>

              {/* Acceptance */}
              <div className="text-xs font-medium text-slate-500 md:col-span-1 dark:text-slate-400">
                {problem.acceptance}
              </div>

              {/* Open Button */}
              <div className="md:col-span-1">
                <button
                  title="Open problem"
                  className="rounded-md p-1.5 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}

          {/* Empty State */}
          {filteredProblems.length === 0 && (
            <div className="py-12 text-center">
              <Search className="mx-auto mb-3 h-7 w-7 text-slate-300 dark:text-slate-600" />

              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                No problems found
              </p>

              <p className="mt-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
