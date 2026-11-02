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
    <div className="space-y-8">

      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">
            Monday, November 2, 2026
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Welcome back, Student 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Keep learning and improve your coding skills.
          </p>
        </div>

       <button
        onClick={() => navigate('/student/problems')}
        className="group inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-md active:translate-y-0"
        >
          Explore Problems
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 ease-in-out cursor-pointer"            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <div className={`p-2 rounded-xl ${stat.bg}`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-4">
                {stat.value}
              </h2>

              <p className="text-xs text-slate-500 mt-2">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress and Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Problem Progress */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Problem Solving Progress
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Your progress by difficulty
              </p>
            </div>

            <button className="text-sm text-indigo-600 font-semibold">
              View Problems
            </button>
          </div>

          <div className="space-y-6">

            {/* Easy */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-emerald-600 font-semibold">
                  Easy
                </span>
                <span className="text-slate-600">
                  65 / 100
                </span>
              </div>

              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-emerald-500 rounded-full" />
              </div>
            </div>

            {/* Medium */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-amber-600 font-semibold">
                  Medium
                </span>
                <span className="text-slate-600">
                  48 / 150
                </span>
              </div>

              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[32%] bg-amber-500 rounded-full" />
              </div>
            </div>

            {/* Hard */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-rose-600 font-semibold">
                  Hard
                </span>
                <span className="text-slate-600">
                  15 / 100
                </span>
              </div>

              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[15%] bg-rose-500 rounded-full" />
              </div>
            </div>

          </div>
        </div>

        {/* Weekly Goal */}
        <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-indigo-100 text-sm">
                Weekly Goal
              </p>

              <h2 className="text-2xl font-bold mt-2">
                18 / 25
              </h2>
            </div>

            <Target className="w-8 h-8 text-indigo-200" />
          </div>

          <div className="h-2 bg-indigo-400 rounded-full mt-6 overflow-hidden">
            <div className="h-full w-[72%] bg-white rounded-full" />
          </div>

          <p className="text-sm text-indigo-100 mt-4">
            You're 72% of the way to your weekly goal!
          </p>

          <button className="mt-6 flex items-center gap-2 text-sm font-semibold">
            Continue practicing
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">

        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Recent Activity
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your latest coding submissions
            </p>
          </div>

          <Clock className="w-5 h-5 text-slate-400" />
        </div>

        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.name}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
            >
              <div>
                <h3 className="font-semibold text-slate-800">
                  {activity.name}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {activity.difficulty} · {activity.time}
                </p>
              </div>

              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full w-fit ${
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