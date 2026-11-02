
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
  Upcoming: 'bg-indigo-50 text-indigo-600',
  Live: 'bg-rose-50 text-rose-600',
  Completed: 'bg-slate-100 text-slate-500',
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
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">
            Compete, learn and grow
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Contests
          </h1>

          <p className="text-slate-500 mt-2">
            Participate in coding contests and challenge yourself.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-3 rounded-xl">
          <Trophy className="w-5 h-5" />
          <span className="text-sm font-semibold">
            Coding Arena
          </span>
        </div>
      </div>

      {/* Contest Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Upcoming Contests
            </p>
            <CalendarDays className="w-5 h-5 text-indigo-600" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-4">
            {contests.filter((c) => c.status === 'Upcoming').length}
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Don't miss your next challenge
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Contests Participated
            </p>
            <Trophy className="w-5 h-5 text-amber-500" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-4">
            8
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Keep building your experience
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Best Contest Rank
            </p>
            <Users className="w-5 h-5 text-emerald-600" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-4">
            #24
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Your personal best
          </p>
        </div>

      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contests..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition"
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {['All', 'Upcoming', 'Live', 'Completed'].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === item
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Contest Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {filteredContests.map((contest) => (
          <div
            key={contest.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300"
          >

            <div className="flex items-start justify-between gap-3">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <Trophy className="w-6 h-6 text-indigo-600" />
              </div>

              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${statusStyles[contest.status]}`}>
                {contest.status === 'Live' && (
                  <Radio className="inline w-3 h-3 mr-1" />
                )}
                {contest.status}
              </span>
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-5">
              {contest.title}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              {contest.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-5 text-sm text-slate-500">

              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-indigo-500" />
                {contest.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-500" />
                {contest.duration}
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-500" />
                {contest.participants} participants
              </div>

            </div>

            <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">

              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                {contest.type}
              </span>

              <button
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  contest.status === 'Completed'
                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md'
                }`}
              >
                {contest.status === 'Completed' ? 'View Results' : 'Join Contest'}
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        ))}

      </div>

      {filteredContests.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
          <Trophy className="w-10 h-10 text-slate-300 mx-auto mb-3" />

          <h3 className="font-semibold text-slate-800">
            No contests found
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Try changing your search or filter.
          </p>
        </div>
      )}

    </div>
  );
};
