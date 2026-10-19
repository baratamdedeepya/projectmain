
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Code2 } from 'lucide-react';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }

    alert('Login UI is working! Authentication will be added later.');
  };

  const inputClass =
    'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15 dark:border-white/10 dark:bg-[#0b0d19] dark:text-white dark:focus:border-indigo-400';

  const labelClass =
    'mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300';

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafbff] px-4 py-6 text-slate-900 dark:bg-[#07090e] dark:text-white">
      <section className="w-full max-w-md">
        <header className="mb-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold tracking-tight">
              Code<span className="text-indigo-600 dark:text-indigo-400">Judge</span>
            </span>
          </Link>

          <Link
            to="/"
            className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            Home
          </Link>
        </header>

        {/* Login card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 dark:border-white/10 dark:bg-[#111321] dark:shadow-black/20 sm:p-8">

          <div className="mb-6">
            <h1 className="text-2xl font-bold ">
              Welcome back!
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Log in to continue your coding journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                College email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@college.edu"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClass}
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => setError('Forgot password feature will be added later.')}
                  className="text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={`${inputClass} pr-11`}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error message
            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )} */}

            {/* Login button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#111321]"
            >
              Log In
            </button>
          </form>

          {/* Signup link */}
          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Sign up
            </Link>
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          CodeJudge · Practice. Learn. Improve.
        </p>
      </section>
    </main>
  );
};
