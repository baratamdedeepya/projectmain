
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Code2,
  Trophy,
  Flame,
  Target,
  ArrowUpRight,
  Clock,
} from 'lucide-react';

const stats = [
  {
    title: 'Problems Solved',
    value: '128',
    description: '18 this week',
    icon: Code2,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    title: 'Current Streak',
    value: '7 Days',
    description: 'Keep it going!',
    icon: Flame,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    title: 'Contest Rating',
    value: '1,420',
    description: '+45 this month',
    icon: Trophy,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    title: 'Accuracy',
    value: '78%',
    description: 'Across all submissions',
    icon: Target,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

const recentActivity = [
  {
    name: 'Two Sum',
    difficulty: 'Easy',
    status: 'Accepted',
    time: 'Today',
  },
  {
    name: 'Binary Search',
    difficulty: 'Easy',
    status: 'Accepted',
    time: 'Yesterday',
  },
  {
    name: 'Longest Substring',
    difficulty: 'Medium',
    status: 'Wrong Answer',
    time: 'Yesterday',
  },
];

export const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      {/* Welcome Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-slate-500">
            Monday, November 2, 2026
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-800">
            Welcome back, Student 👋
          </h1>

          <p className="mt-1.5 text-sm leading-5 text-slate-500">
            Keep learning and improve your coding skills.
          </p>
        </div>

        <button
          onClick={() => navigate('/student/problems')}
          className="group inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-md active:translate-y-0"
        >
          Explore Problems
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500">
                  {stat.title}
                </p>

                <div className={`rounded-xl p-2 ${stat.bg}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-800">
                {stat.value}
              </h2>

              <p className="mt-1.5 text-xs font-normal text-slate-500">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress and Activity */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Problem Progress */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold tracking-tight text-slate-800">
                Problem Solving Progress
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your progress by difficulty
              </p>
            </div>

            <button
              onClick={() => navigate('/student/submissions')}
              className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-700"
            >
              View All
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div className="space-y-5">

            {/* Easy */}
            <div>
              <div className="mb-2 flex justify-between text-xs">
                <span className="font-medium text-emerald-600">
                  Easy
                </span>

                <span className="font-medium text-slate-500">
                  65 / 100
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[65%] rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Medium */}
            <div>
              <div className="mb-2 flex justify-between text-xs">
                <span className="font-medium text-amber-600">
                  Medium
                </span>

                <span className="font-medium text-slate-500">
                  48 / 150
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[32%] rounded-full bg-amber-500" />
              </div>
            </div>

            {/* Hard */}
            <div>
              <div className="mb-2 flex justify-between text-xs">
                <span className="font-medium text-rose-600">
                  Hard
                </span>

                <span className="font-medium text-slate-500">
                  15 / 100
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[15%] rounded-full bg-rose-500" />
              </div>
            </div>

          </div>
        </div>

        {/* Weekly Goal */}
        <div className="rounded-2xl bg-indigo-600 p-6 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-indigo-100">
                Weekly Goal
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                18 / 25
              </h2>
            </div>

            <Target className="h-7 w-7 text-indigo-200" />
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-indigo-400">
            <div className="h-full w-[72%] rounded-full bg-white" />
          </div>

          <p className="mt-4 text-xs leading-5 text-indigo-100">
            You're 72% of the way to your weekly goal!
          </p>

          <button
            onClick={() => navigate('/student/problems')}
            className="mt-5 flex items-center gap-2 text-xs font-medium text-white transition hover:text-indigo-100"
          >
            Continue practicing
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-800">
              Recent Activity
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Your latest coding submissions
            </p>
          </div>

          <Clock className="h-5 w-5 text-slate-400" />
        </div>

        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.name}
              className="flex flex-col gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-sm font-medium text-slate-800">
                  {activity.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {activity.difficulty} · {activity.time}
                </p>
              </div>

              <span
                className={`w-fit rounded-full px-3 py-1.5 text-xs font-medium ${
                  activity.status === 'Accepted'
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'bg-rose-50 text-rose-600'
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
