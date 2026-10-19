
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Code2 } from 'lucide-react';

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    collegeEmail: '',
    college: '',
    year: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (formData.password.length < 8) {
      setError('Password must contain at least 8 characters.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    alert('Signup UI is working! Authentication will be added later.');
  };

  const inputClass =
    'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15 dark:border-white/10 dark:bg-[#0b0d19] dark:text-white dark:focus:border-indigo-400';

  const labelClass =
    'mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300';

  return (
    <main className="flex min-h-screen items-center justify-center  px-4 py-6 text-slate-900 dark:bg-[#07090e] dark:text-white">
      <section className="w-full max-w-xl">

        {/* Logo and home link */}
        <header className="mb-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold ">
              Code<span className="text-indigo-600 dark:text-indigo-400">Judge</span>
            </span>
          </Link>

          <Link
            to="/"
            className="text-sm text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            Back to home
          </Link>
        </header>

        {/* Signup card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/40 dark:border-white/10 dark:bg-[#111321] dark:shadow-black/208 sm:p-7">

          <div className="mb-5">
            <h1 className="text-2xl font-bold tracking-tight">
              Create your account
            </h1>
            <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
              Join CodeJudge and start your coding journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full name */}
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            {/* College email */}
            <div>
              <label htmlFor="collegeEmail" className={labelClass}>
                College email
              </label>
              <input
                id="collegeEmail"
                name="collegeEmail"
                type="email"
                placeholder="you@college.edu"
                value={formData.collegeEmail}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            {/* College and year */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="college" className={labelClass}>
                  College / University
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  placeholder="Enter college name"
                  value={formData.college}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="year" className={labelClass}>
                  Year of study
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Minimum 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                  className={`${inputClass} pr-11`}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              <label htmlFor="confirmPassword" className={labelClass}>
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`${inputClass}`}
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((previous) => !previous)
                  }
                  aria-label={
                    showConfirmPassword ? 'Hide password' : 'Show password'
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Validation error */}
            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#111321]"
            >
              Create Account
            </button>
          </form>

          {/* Login link */}
          <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Log in
            </Link>
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          CodeJudge · Practice. Learn. Improve.
        </p>
      </section>
    </main>
  );
};
