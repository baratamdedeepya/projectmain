
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
  Accepted: 'bg-emerald-50 text-emerald-600',
  'Wrong Answer': 'bg-rose-50 text-rose-600',
  'Time Limit Exceeded': 'bg-amber-50 text-amber-600',
  'Runtime Error': 'bg-orange-50 text-orange-600',
};

export const SubmissionsPage = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const acceptedCount = submissions.filter(
    (submission) => submission.status === 'Accepted'
  ).length;

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
    <div className="space-y-6">

      {/* Header */}
      <div>
        <p className="text-sm text-slate-500">
          Track your coding journey
        </p>

        <h1 className="text-3xl font-bold text-slate-900 mt-1">
          Submissions
        </h1>

        <p className="text-slate-500 mt-2">
          Review your previous attempts and submission results.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Total Submissions
            </p>
            <FileCode2 className="w-5 h-5 text-indigo-600" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-4">
            {submissions.length}
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            All coding attempts
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Accepted
            </p>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-4">
            {acceptedCount}
          </h2>

          <p className="text-xs text-emerald-600 mt-1">
            Successfully solved
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Success Rate
            </p>
            <Code2 className="w-5 h-5 text-amber-500" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-4">
            {Math.round((acceptedCount / submissions.length) * 100)}%
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Accepted submissions
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
            placeholder="Search by problem name..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition"
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                statusFilter === item
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Submission Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

        <div className="p-5 border-b border-slate-100">
          <h2 className="font-bold text-slate-900">
            Submission History
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {filteredSubmissions.length} submissions found
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">

            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Problem</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Language</th>
                <th className="px-6 py-4 font-semibold">Runtime</th>
                <th className="px-6 py-4 font-semibold">Memory</th>
                <th className="px-6 py-4 font-semibold">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {filteredSubmissions.map((submission) => (
                <tr
                  key={submission.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-indigo-50/40 transition-colors duration-200"
                >

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileCode2 className="w-4 h-4 text-indigo-500 shrink-0" />

                      <span className="font-medium text-slate-800">
                        {submission.problem}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${statusStyles[submission.status] || 'bg-slate-100 text-slate-600'}`}>
                      {submission.status === 'Accepted' ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <XCircle className="w-3.5 h-3.5" />
                      )}

                      {submission.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {submission.language}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {submission.runtime}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    <span className="flex items-center gap-2">
                      <MemoryStick className="w-4 h-4 text-slate-400" />
                      {submission.memory}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {submission.date}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {filteredSubmissions.length === 0 && (
          <div className="py-12 text-center">
            <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />

            <p className="font-semibold text-slate-700">
              No submissions found
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Try changing your search or filter.
            </p>
          </div>
        )}

      </div>

    </div>
  );
};
