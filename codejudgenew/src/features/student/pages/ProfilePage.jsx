
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
    <div className="space-y-6">
      {/* Page Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            My Profile
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your personal information
          </p>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
        >
          <Pencil size={16} />
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
            <User size={42} />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-800">
              {profile.name}
            </h2>
            <p className="text-sm text-gray-500">
              Student · {profile.year}
            </p>
            <span className="mt-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
              Code Judge Student
            </span>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold text-gray-800">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-gray-500">
              Full Name
            </label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-500">
              Email Address
            </label>
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-500">
              Branch
            </label>
            <input
              name="branch"
              value={profile.branch}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-500">
              Year
            </label>
            <input
              name="year"
              value={profile.year}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 disabled:bg-gray-50"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-gray-500">
              College
            </label>
            <input
              name="college"
              value={profile.college}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 disabled:bg-gray-50"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-gray-500">
              Bio
            </label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              disabled={!isEditing}
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 disabled:bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Coding Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <Code2 className="mb-3 text-indigo-600" size={24} />
          <p className="text-sm text-gray-500">Problems Solved</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-800">120</h3>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <GraduationCap className="mb-3 text-indigo-600" size={24} />
          <p className="text-sm text-gray-500">Contest Participations</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-800">8</h3>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <Mail className="mb-3 text-indigo-600" size={24} />
          <p className="text-sm text-gray-500">Member Since</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-800">2026</h3>
        </div>
      </div>
    </div>
  );
};
