
import { useState } from 'react';
import { User, Mail, GraduationCap, Code2, Pencil } from 'lucide-react';

export const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: 'Pallavi',
    email: 'pallavi@example.com',
    branch: 'Computer Science Engineering',
    year: '3rd Year',
    college: 'Your College Name',
    bio: 'Aspiring software developer passionate about Java and DSA.',
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="font-sans space-y-5">
      {/* Page Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
            My Profile
          </h1>
          <p className="mt-1 text-xs font-normal text-slate-500">
            Manage your personal information
          </p>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 rounded-lg bg-indigo-500 px-3.5 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-indigo-600"
        >
          <Pencil size={14} />
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
            <User size={34} strokeWidth={1.7} />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-slate-800">
              {profile.name}
            </h2>

            <p className="mt-0.5 text-xs text-slate-500">
              Student · {profile.year}
            </p>

            <span className="mt-2 inline-block rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-600">
              Code Judge Student
            </span>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-base font-semibold text-slate-800">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { label: 'Full Name', name: 'name' },
            { label: 'Email Address', name: 'email' },
            { label: 'Branch', name: 'branch' },
            { label: 'Year', name: 'year' },
            { label: 'College', name: 'college', full: true },
          ].map((field) => (
            <div
              key={field.name}
              className={field.full ? 'md:col-span-2' : ''}
            >
              <label className="mb-1.5 block text-xs font-medium text-slate-500">
                {field.label}
              </label>

              <input
                name={field.name}
                value={profile[field.name]}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 disabled:bg-slate-50 disabled:text-slate-600"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="mb-1.5 block text-xs font-medium text-slate-500">
              Bio
            </label>

            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              disabled={!isEditing}
              rows={3}
              className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 disabled:bg-slate-50 disabled:text-slate-600"
            />
          </div>
        </div>
      </div>

      {/* Coding Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <Code2 className="mb-2.5 text-indigo-500" size={20} />
          <p className="text-xs font-medium text-slate-500">
            Problems Solved
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-800">120</h3>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <GraduationCap className="mb-2.5 text-indigo-500" size={20} />
          <p className="text-xs font-medium text-slate-500">
            Contest Participations
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-800">8</h3>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <Mail className="mb-2.5 text-indigo-500" size={20} />
          <p className="text-xs font-medium text-slate-500">
            Member Since
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-800">2026</h3>
        </div>
      </div>
    </div>
  );
};
