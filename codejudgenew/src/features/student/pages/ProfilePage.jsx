
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  Edit3,
  Flame,
  GraduationCap,
  MapPin,
  Medal,
  Target,
  Trophy,
  X,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";

export function ProfilePage() {
  const navigate = useNavigate();

  const [year, setYear] = useState(new Date().getFullYear());
  const [showEdit, setShowEdit] = useState(false);

  const [profile, setProfile] = useState({
    name: "pallavi",
    username: "pallavi23",
    role: "Student",
    course: "B.Tech CSE",
    college: "Aditya Institute of Technology and Management",
    location: "Tekkali, Andhra Pradesh",
    bio: "Passionate about problem solving and building cool things. Always learning!",
    skills: ["C++", "Java", "Python", "DSA", "Web Dev"],
  });

  const [editData, setEditData] = useState(profile);

  // STATISTICS
  const stats = [
    {
      label: "Problems Solved",
      value: "124",
      icon: CheckCircle2,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      label: "Day Streak",
      value: "12",
      icon: Flame,
      color: "bg-orange-100 text-orange-600",
    },
    {
      label: "Global Rank",
      value: "#245",
      icon: Trophy,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Submissions",
      value: "350",
      icon: Send,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  // ACHIEVEMENTS
  const achievements = [
    {
      title: "Problem Solver",
      description: "100+ problems solved",
      icon: Target,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Daily Streak",
      description: "12 days active",
      icon: Flame,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Top Performer",
      description: "Global rank #245",
      icon: Trophy,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Quick Learner",
      description: "Always improving",
      icon: Code2,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Dedicated",
      description: "Consistent practice",
      icon: Medal,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Book Worm",
      description: "Completed 10 topics",
      icon: BookOpen,
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  // RECENT SUBMISSIONS
  const submissions = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      status: "Accepted",
      language: "Java",
      date: "Nov 04, 2026",
    },
    {
      title: "Reverse Linked List",
      difficulty: "Medium",
      status: "Accepted",
      language: "Python",
      date: "Nov 03, 2026",
    },
    {
      title: "Valid Parentheses",
      difficulty: "Easy",
      status: "Accepted",
      language: "Java",
      date: "Nov 02, 2026",
    },
  ];

  // ACTIVITY DATA
  const activity = useMemo(() => {
    const data = {};
    const today = new Date();

    const totalDays =
      Math.floor(
        (new Date(year, 11, 31) - new Date(year, 0, 1)) /
          86400000
      ) + 1;

    for (let i = 0; i < totalDays; i++) {
      const date = new Date(year, 0, i + 1);

      if (date > today) continue;

      const key = [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
      ].join("-");

      const value = (i * 7 + date.getDate() * 3) % 10;

      data[key] = value > 6 ? (value % 5) + 1 : 0;
    }

    return data;
  }, [year]);

  // HEATMAP COLORS
  const getColor = (count) => {
    if (count === 0) return "bg-[#edf1fa]";
    if (count <= 2) return "bg-[#c7d2fe]";
    if (count <= 4) return "bg-[#818cf8]";
    if (count <= 6) return "bg-[#6366f1]";
    return "bg-[#3730a3]";
  };

  // BUILD CALENDAR
  const weeks = useMemo(() => {
    const start = new Date(year, 0, 1);

    start.setDate(
      start.getDate() - ((start.getDay() + 6) % 7)
    );

    const result = [];
    const current = new Date(start);

    while (current.getFullYear() <= year) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date(current);

        const key = [
          date.getFullYear(),
          String(date.getMonth() + 1).padStart(2, "0"),
          String(date.getDate()).padStart(2, "0"),
        ].join("-");

        week.push({
          key,
          count: activity[key] || 0,
          valid: date.getFullYear() === year,
        });

        current.setDate(current.getDate() + 1);
      }

      result.push(week);

      if (current.getFullYear() > year) break;
    }

    return result;
  }, [year, activity]);

  // YEARLY TOTAL
  const yearlyTotal = useMemo(
    () =>
      Object.entries(activity).reduce(
        (sum, [date, count]) =>
          date.startsWith(String(year)) ? sum + count : sum,
        0
      ),
    [year, activity]
  );

  // SAVE PROFILE
  const saveProfile = () => {
    setProfile(editData);
    setShowEdit(false);
  };

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-100/60 px-3 py-4 text-slate-800 sm:px-5 sm:py-5 md:px-6 lg:px-8 lg:py-7">

      <div className="mx-auto flex w-full max-w-[1450px] min-w-0 flex-col gap-4 sm:gap-5 lg:gap-6">

        {/* PROFILE DETAILS */}
        <section className="w-full min-w-0 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm sm:p-5 md:p-6 lg:p-8">

          <div className="flex min-w-0 flex-col gap-5 sm:gap-6 md:flex-row md:items-start">

            {/* AVATAR */}
            <div className="relative mx-auto shrink-0 md:mx-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-indigo-100 bg-indigo-50 text-4xl font-bold text-indigo-700 shadow-sm sm:h-28 sm:w-28 sm:text-5xl lg:h-36 lg:w-36 lg:border-[6px]">
                {profile.name.charAt(0).toUpperCase()}
              </div>

              <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white shadow sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                <Edit3 size={16} />
              </div>
            </div>

            {/* PROFILE INFORMATION */}
            <div className="min-w-0 flex-1">

              {/* NAME + USERNAME + EDIT */}
              <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div className="min-w-0 flex-1 text-center sm:text-left">

                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3">

                    <h1 className="max-w-full break-words text-2xl font-bold leading-tight text-indigo-950 sm:text-3xl lg:text-4xl">
                      {profile.name}
                    </h1>

                    <span className="shrink-0 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {profile.role}
                    </span>

                  </div>

                  <p className="mt-2 break-all text-sm font-medium text-indigo-500">
                    @{profile.username}
                  </p>

                </div>

                <button
                  onClick={() => {
                    setEditData(profile);
                    setShowEdit(true);
                  }}
                  className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 sm:w-auto"
                >
                  <Edit3 size={17} />
                  Edit Profile
                </button>

              </div>

              {/* EDUCATION AND LOCATION */}
              <div className="mt-5 flex min-w-0 flex-col gap-3 text-sm text-slate-600">

                <p className="flex min-w-0 items-start justify-center gap-2 text-center sm:justify-start sm:text-left">
                  <GraduationCap
                    size={19}
                    className="mt-0.5 shrink-0 text-indigo-600"
                  />

                  <span className="min-w-0 break-words">
                    {profile.course} · {profile.college}
                  </span>
                </p>

                <p className="flex items-center justify-center gap-2 sm:justify-start">
                  <MapPin
                    size={19}
                    className="shrink-0 text-indigo-600"
                  />

                  <span className="break-words">
                    {profile.location}
                  </span>
                </p>

              </div>

              {/* BIO */}
              <p className="mt-4 break-words text-center text-sm leading-6 text-slate-600 sm:text-left">
                {profile.bio}
              </p>

              {/* SKILLS */}
              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100 sm:px-4"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="grid min-w-0 grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex min-w-0 items-center gap-3 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:gap-4 sm:p-5"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 lg:h-16 lg:w-16 ${item.color}`}
                >
                  <Icon size={24} />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold text-indigo-950 sm:text-2xl">
                    {item.value}
                  </h2>

                  <p className="mt-1 break-words text-xs text-slate-500 sm:text-sm">
                    {item.label}
                  </p>
                </div>

                <ChevronRight
                  size={20}
                  className="shrink-0 text-indigo-600"
                />
              </div>
            );
          })}

        </section>

        {/* CODING STREAK + ACHIEVEMENTS */}
        <section className="grid min-w-0 grid-cols-1 items-stretch gap-4 lg:gap-5 xl:grid-cols-[1.3fr_0.9fr]">

          {/* CODING STREAK */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-[#e1e8f8] bg-white p-4 shadow-sm sm:p-5 md:p-6">

            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

              <h2 className="flex items-center gap-2 text-base font-bold text-[#10204b] sm:text-lg">
                <Flame
                  size={21}
                  className="shrink-0 text-orange-500"
                />
                Coding Streak
              </h2>

              <div className="flex shrink-0 items-center gap-2">

                <button
                  onClick={() => setYear(year - 1)}
                  aria-label="Previous year"
                  className="rounded-lg p-2 text-[#7085ac] transition hover:bg-[#eef0ff] hover:text-[#6366f1]"
                >
                  <ChevronLeft size={18} />
                </button>

                <span className="min-w-[42px] text-center text-sm font-semibold text-[#10204b]">
                  {year}
                </span>

                <button
                  onClick={() => setYear(year + 1)}
                  disabled={year >= new Date().getFullYear()}
                  aria-label="Next year"
                  className="rounded-lg p-2 text-[#7085ac] transition hover:bg-[#eef0ff] hover:text-[#6366f1] disabled:opacity-30"
                >
                  <ChevronRight size={18} />
                </button>

              </div>
            </div>

            {/* YEARLY TOTAL */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <p className="text-3xl font-bold text-[#10204b] sm:text-4xl">
                {yearlyTotal}
              </p>

              <p className="text-xs text-[#7085ac] sm:text-sm">
                Problems solved this year
              </p>
            </div>

            {/* HEATMAP */}
            <div className="w-full max-w-full overflow-x-auto overflow-y-hidden pb-3 [scrollbar-width:thin] [scrollbar-color:#818cf8_#edf1fa] [&::-webkit-scrollbar]:h-[7px] [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-button]:w-0 [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#edf1fa] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#818cf8] [&::-webkit-scrollbar-thumb:hover]:bg-[#4f46e5]">

              <div className="w-max min-w-[680px]">

                {/* MONTH LABELS */}
                <div className="mb-2 flex gap-[3px]">
                  {weeks.map((week, index) => {
                    const monthStart = week.find(
                      (day) => day.valid && day.key.endsWith("-01")
                    );

                    const monthName = monthStart
                      ? new Date(
                          `${monthStart.key}T00:00:00`
                        ).toLocaleString("en-US", {
                          month: "short",
                        })
                      : "";

                    return (
                      <div
                        key={`month-${index}`}
                        className="relative h-4 w-[10px] shrink-0"
                      >
                        {monthName && (
                          <span className="absolute left-0 whitespace-nowrap text-[10px] font-medium text-[#7085ac]">
                            {monthName}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* HEATMAP GRID */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, index) => (
                    <div
                      key={`week-${index}`}
                      className="flex w-[10px] shrink-0 flex-col gap-[3px]"
                    >
                      {week.map((day) => (
                        <div
                          key={day.key}
                          title={
                            day.valid
                              ? `${day.key}: ${day.count} problems solved`
                              : ""
                          }
                          className={`h-[10px] w-[10px] shrink-0 rounded-[3px] transition-colors ${
                            day.valid
                              ? getColor(day.count)
                              : "invisible"
                          }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* LEGEND */}
            <div className="mt-3 flex flex-col items-start justify-between gap-3 min-[400px]:flex-row min-[400px]:items-center">

              <span className="text-xs text-[#7085ac]">
                Daily activity
              </span>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-[#7085ac]">
                  Less
                </span>

                {[
                  "bg-[#edf1fa]",
                  "bg-[#c7d2fe]",
                  "bg-[#818cf8]",
                  "bg-[#6366f1]",
                  "bg-[#3730a3]",
                ].map((color) => (
                  <span
                    key={color}
                    className={`h-3 w-3 shrink-0 rounded-[3px] ${color}`}
                  />
                ))}

                <span className="text-[10px] text-[#7085ac]">
                  More
                </span>
              </div>

            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="min-w-0 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm sm:p-5 md:p-6">

            <div className="flex items-center justify-between gap-3">

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Award
                    size={22}
                    className="shrink-0 text-indigo-600"
                  />

                  <h2 className="text-lg font-bold text-indigo-950 sm:text-xl">
                    Achievements
                  </h2>
                </div>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Milestones in your coding journey
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600">
                6 badges
              </span>

            </div>

            {/* ACHIEVEMENT CARDS */}
            <div className="mt-5 grid grid-cols-1 gap-x-3 gap-y-4 min-[480px]:grid-cols-2 sm:mt-7 sm:gap-x-4 sm:gap-y-6">

              {achievements.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex min-w-0 items-center gap-3 rounded-xl p-2 transition hover:bg-indigo-50"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${item.color}`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words text-sm font-bold text-indigo-950">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* RECENT SUBMISSIONS */}
        <section className="min-w-0 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm sm:p-5 md:p-6">

          <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">

            <div className="min-w-0">
              <h2 className="text-lg font-bold text-indigo-950 sm:text-xl">
                Recent Submissions
              </h2>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Your latest coding activity
              </p>
            </div>

            <button
              onClick={() => navigate("/student/submissions")}
              className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 min-[420px]:w-auto"
            >
              View All
              <ArrowRight size={17} />
            </button>

          </div>

          {/* RESPONSIVE TABLE */}
          <div className="mt-5 w-full max-w-full overflow-x-auto rounded-lg">

            <table className="w-full min-w-[620px] text-left text-xs sm:min-w-[650px] sm:text-sm">

              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase text-slate-500 sm:text-xs">

                  <th className="whitespace-nowrap px-3 py-4 sm:px-4">
                    Problem
                  </th>

                  <th className="whitespace-nowrap px-3 py-4 sm:px-4">
                    Difficulty
                  </th>

                  <th className="whitespace-nowrap px-3 py-4 sm:px-4">
                    Status
                  </th>

                  <th className="whitespace-nowrap px-3 py-4 sm:px-4">
                    Language
                  </th>

                  <th className="whitespace-nowrap px-3 py-4 sm:px-4">
                    Date
                  </th>

                </tr>
              </thead>

              <tbody>
                {submissions.map((item) => (
                  <tr
                    key={item.title}
                    className="border-b border-slate-50 transition hover:bg-indigo-50/50"
                  >

                    <td className="whitespace-nowrap px-3 py-4 font-semibold text-slate-800 sm:px-4">
                      {item.title}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 sm:px-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.difficulty === "Easy"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {item.difficulty}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 sm:px-4">
                      <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                        <CheckCircle2 size={15} />
                        {item.status}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-slate-600 sm:px-4">
                      {item.language}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-slate-500 sm:px-4">
                      {item.date}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </section>

      </div>

      {/* EDIT PROFILE MODAL */}
      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-3 sm:p-4">

          <div className="my-auto max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:p-6">

            {/* MODAL HEADER */}
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <h2 className="text-lg font-bold text-indigo-950 sm:text-xl">
                Edit Profile
              </h2>

              <button
                onClick={() => setShowEdit(false)}
                aria-label="Close edit profile"
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* FORM FIELDS */}
            <div className="space-y-4">

              {[
                ["name", "Full Name"],
                ["username", "Username"],
                ["role", "Role"],
                ["course", "Course"],
                ["college", "College"],
                ["location", "Location"],
              ].map(([field, label]) => (
                <div key={field}>

                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    {label}
                  </label>

                  <input
                    type="text"
                    value={editData[field]}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        [field]: e.target.value,
                      })
                    }
                    className="w-full min-w-0 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />

                </div>
              ))}

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  About Me
                </label>

                <textarea
                  rows="3"
                  value={editData.bio}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      bio: e.target.value,
                    })
                  }
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">

              <button
                onClick={() => setShowEdit(false)}
                className="w-full rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 sm:w-auto"
              >
                Cancel
              </button>

              <button
                onClick={saveProfile}
                className="w-full rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:w-auto"
              >
                Save Changes
              </button>

            </div>
          </div>
        </div>
      )}

    </main>
  );
}
