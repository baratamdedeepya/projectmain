
import React, { useState } from 'react';
import {
  Trophy,
  CalendarDays,
  Clock,
  Users,
  ArrowUpRight,
  Search,
  Radio,
} from 'lucide-react';

const contests = [
  {
    id: 1,
    title: 'Code Judge Weekly Challenge',
    description: 'Solve algorithmic problems and improve your coding skills.',
    date: 'Nov 05, 2026',
    time: '6:00 PM',
    duration: '90 min',
    participants: 245,
    status: 'Upcoming',
    type: 'Weekly',
  },
  {
    id: 2,
    title: 'DSA Sprint Challenge',
    description: 'Test your data structures and algorithms knowledge.',
    date: 'Nov 08, 2026',
    time: '10:00 AM',
    duration: '120 min',
    participants: 180,
    status: 'Upcoming',
    type: 'DSA',
  },
  {
    id: 3,
    title: 'Monthly Coding Arena',
    description: 'Compete with other students in a coding competition.',
    date: 'Nov 12, 2026',
    time: '5:00 PM',
    duration: '180 min',
    participants: 520,
    status: 'Upcoming',
    type: 'Monthly',
  },
  {
    id: 4,
    title: 'Beginner Coding Battle',
    description: 'A friendly contest for beginner programmers.',
    date: 'Oct 25, 2026',
    time: '11:00 AM',
    duration: '60 min',
    participants: 150,
    status: 'Completed',
    type: 'Beginner',
  },
];

const statusStyles = {
  Upcoming:
    'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
  Live:
    'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
  Completed:
    'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
};

export const ContestsPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredContests = contests.filter((contest) => {
    const matchesSearch = contest.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === 'All' || contest.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="font-sans space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
            Compete, learn and grow
          </p>

          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            Contests
          </h1>

          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            Participate in coding contests and challenge yourself.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-lg bg-indigo-50 dark:bg-indigo-900/30 px-3.5 py-2.5 text-indigo-600 dark:text-indigo-400">
          <Trophy className="h-4 w-4" />
          <span className="text-xs font-medium">
            Coding Arena
          </span>
        </div>
      </div>

      {/* Contest Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        {[
          {
            title: 'Upcoming Contests',
            value: contests.filter((c) => c.status === 'Upcoming').length,
            description: "Don't miss your next challenge",
            icon: CalendarDays,
            color: 'text-indigo-500 dark:text-indigo-400',
          },
          {
            title: 'Contests Participated',
            value: '8',
            description: 'Keep building your experience',
            icon: Trophy,
            color: 'text-amber-500 dark:text-amber-400',
          },
          {
            title: 'Best Contest Rank',
            value: '#24',
            description: 'Your personal best',
            icon: Users,
            color: 'text-emerald-500 dark:text-emerald-400',
          },
        ].map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {stat.title}
                </p>

                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
                {stat.value}
              </h2>

              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                {stat.description}
              </p>
            </div>
          );
        })}

      </div>

      {/* Search and Filters */}
      <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">

        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contests..."
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 py-2.5 pl-10 pr-4 text-sm text-slate-700 dark:text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-indigo-50 dark:focus:ring-indigo-900/50"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {['All', 'Upcoming', 'Live', 'Completed'].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                filter === item
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Contest Cards */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

        {filteredContests.map((contest) => (
          <div
            key={contest.id}
            className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-md"
          >

            <div className="flex items-start justify-between gap-3">
              <div className="rounded-lg bg-indigo-50 dark:bg-indigo-900/30 p-2.5">
                <Trophy className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              </div>

              <span
                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[contest.status]}`}
              >
                {contest.status === 'Live' && (
                  <Radio className="mr-1 h-3 w-3" />
                )}
                {contest.status}
              </span>
            </div>

            <h2 className="mt-4 text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
              {contest.title}
            </h2>

            <p className="mt-1.5 text-xs font-normal leading-5 text-slate-500 dark:text-slate-400">
              {contest.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">

              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
                {contest.date}
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
                {contest.duration}
              </div>

              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
                {contest.participants} participants
              </div>

            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">

              <span className="rounded-md bg-slate-50 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                {contest.type}
              </span>

              <button
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                  contest.status === 'Completed'
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    : 'bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-sm'
                }`}
              >
                {contest.status === 'Completed'
                  ? 'View Results'
                  : 'Join Contest'}

                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Empty State */}
      {filteredContests.length === 0 && (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center">
          <Trophy className="mx-auto mb-3 h-8 w-8 text-slate-300 dark:text-slate-600" />

          <h3 className="text-sm font-medium text-slate-700 dark:text-slate-200">
            No contests found
          </h3>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Try changing your search or filter.
          </p>
        </div>
      )}

    </div>
  );
};
