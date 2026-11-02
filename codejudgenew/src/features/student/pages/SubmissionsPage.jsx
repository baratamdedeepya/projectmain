
import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  MemoryStick,
  Code2,
  FileCode2,
} from 'lucide-react';

const submissions = [
  {
    id: 1,
    problem: 'Two Sum',
    language: 'Java',
    status: 'Accepted',
    runtime: '2 ms',
    memory: '42.1 MB',
    date: 'Nov 02, 2026',
  },
  {
    id: 2,
    problem: 'Binary Search',
    language: 'Java',
    status: 'Accepted',
    runtime: '1 ms',
    memory: '40.8 MB',
    date: 'Nov 02, 2026',
  },
  {
    id: 3,
    problem: 'Longest Substring Without Repeating Characters',
    language: 'C++',
    status: 'Wrong Answer',
    runtime: '-',
    memory: '-',
    date: 'Nov 01, 2026',
  },
  {
    id: 4,
    problem: 'Reverse Linked List',
    language: 'Python',
    status: 'Accepted',
    runtime: '8 ms',
    memory: '44.5 MB',
    date: 'Oct 31, 2026',
  },
  {
    id: 5,
    problem: 'Merge Intervals',
    language: 'Java',
    status: 'Time Limit Exceeded',
    runtime: '-',
    memory: '-',
    date: 'Oct 30, 2026',
  },
  {
    id: 6,
    problem: 'Valid Parentheses',
    language: 'Java',
    status: 'Accepted',
    runtime: '3 ms',
    memory: '41.2 MB',
    date: 'Oct 29, 2026',
  },
];

const statusStyles = {
  Accepted:
    'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  'Wrong Answer':
    'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
  'Time Limit Exceeded':
    'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  'Runtime Error':
    'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
};

export const SubmissionsPage = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const acceptedCount = submissions.filter(
    (submission) => submission.status === 'Accepted'
  ).length;

  const successRate = Math.round(
    (acceptedCount / submissions.length) * 100
  );

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch = submission.problem
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' ||
      submission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="font-sans space-y-6">

      {/* Header */}
      <div>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Track your coding journey
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 mt-1">
          Submissions
        </h1>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">
          Review your previous attempts and submission results.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* Total Submissions */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Submissions
            </p>
            <FileCode2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mt-3">
            {submissions.length}
          </h2>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            All coding attempts
          </p>
        </div>

        {/* Accepted */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Accepted
            </p>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mt-3">
            {acceptedCount}
          </h2>

          <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
            Successfully solved
          </p>
        </div>

        {/* Success Rate */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Success Rate
            </p>
            <Code2 className="w-4 h-4 text-amber-500" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mt-3">
            {successRate}%
          </h2>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Accepted submissions
          </p>
        </div>

      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm">

        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by problem name..."
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-100 placeholder:text-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 focus:border-indigo-400 transition"
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            'All',
            'Accepted',
            'Wrong Answer',
            'Time Limit Exceeded',
            'Runtime Error',
          ].map((item) => (
            <button
              key={item}
              onClick={() => setStatusFilter(item)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                statusFilter === item
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Submission History */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">

        <div className="p-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100">
            Submission History
          </h2>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {filteredSubmissions.length} submissions found
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">

            <thead className="bg-slate-50 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-5 py-3 font-medium">Problem</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Language</th>
                <th className="px-5 py-3 font-medium">Runtime</th>
                <th className="px-5 py-3 font-medium">Memory</th>
                <th className="px-5 py-3 font-medium">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {filteredSubmissions.map((submission) => (
                <tr
                  key={submission.id}
                  className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-indigo-50/40 dark:hover:bg-slate-800/70 transition-colors"
                >

                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <FileCode2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {submission.problem}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                      statusStyles[submission.status] ||
                      'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {submission.status === 'Accepted' ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <XCircle className="w-3 h-3" />
                      )}

                      {submission.status}
                    </span>
                  </td>

                  <td className="px-5 py-3.5 text-sm text-slate-600 dark:text-slate-300">
                    {submission.language}
                  </td>

                  <td className="px-5 py-3.5 text-sm text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {submission.runtime}
                    </span>
                  </td>

                  <td className="px-5 py-3.5 text-sm text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <MemoryStick className="w-3.5 h-3.5 text-slate-400" />
                      {submission.memory}
                    </span>
                  </td>

                  <td className="px-5 py-3.5 text-xs text-slate-500 dark:text-slate-400">
                    {submission.date}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Empty State */}
        {filteredSubmissions.length === 0 && (
          <div className="py-10 text-center">
            <Search className="w-7 h-7 text-slate-300 dark:text-slate-600 mx-auto mb-2" />

            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              No submissions found
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try changing your search or filter.
            </p>
          </div>
        )}

      </div>

    </div>
  );
};
