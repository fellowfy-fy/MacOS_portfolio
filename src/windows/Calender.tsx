import { WindowControls } from "#components/index";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  CalendarRange,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Plus,
} from "lucide-react";

const days = [
  { label: "Mon", date: 27 },
  { label: "Tue", date: 28 },
  { label: "Wed", date: 29 },
  { label: "Thu", date: 30 },
  { label: "Fri", date: 31 },
  { label: "Sat", date: 1, isOtherMonth: true },
  { label: "Sun", date: 2, isOtherMonth: true },
  { label: "Mon", date: 3, isToday: true },
  { label: "Tue", date: 4 },
  { label: "Wed", date: 5 },
  { label: "Thu", date: 6 },
  { label: "Fri", date: 7 },
  { label: "Sat", date: 8 },
  { label: "Sun", date: 9 },
  { label: "Mon", date: 10 },
  { label: "Tue", date: 11 },
  { label: "Wed", date: 12 },
  { label: "Thu", date: 13 },
  { label: "Fri", date: 14 },
  { label: "Sat", date: 15 },
  { label: "Sun", date: 16 },
  { label: "Mon", date: 17 },
  { label: "Tue", date: 18 },
  { label: "Wed", date: 19 },
  { label: "Thu", date: 20 },
  { label: "Fri", date: 21 },
  { label: "Sat", date: 22 },
  { label: "Sun", date: 23 },
  { label: "Mon", date: 24 },
  { label: "Tue", date: 25 },
  { label: "Wed", date: 26 },
  { label: "Thu", date: 27 },
  { label: "Fri", date: 28 },
  { label: "Sat", date: 29 },
  { label: "Sun", date: 30 },
];

const events = [
  {
    title: "Design sync",
    time: "09:30 - 10:15",
    place: "Zoom",
    accent: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Product review",
    time: "12:00 - 13:00",
    place: "HQ · Room A",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    title: "Dev showcase",
    time: "16:00 - 17:00",
    place: "Community",
    accent: "bg-emerald-100 text-emerald-700",
  },
];

function Calender() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="calender" />
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarRange size={18} />
          <h2 className="text-gray-700 font-semibold">November Overview</h2>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            className="icon"
            aria-label="Previous month"
            title="Previous month"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="icon"
            aria-label="Next month"
            title="Next month"
          >
            <ChevronRight size={18} />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-blue-500 text-white px-3 py-1.5 text-sm shadow hover:bg-blue-600 transition"
          >
            <Plus size={16} />
            Add event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 p-5 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-b-xl text-gray-700">
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-7 text-xs uppercase tracking-wide text-gray-500 border-b border-gray-100">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="px-3 py-2 text-center font-semibold">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 p-3">
            {days.map(({ label, date, isOtherMonth, isToday }, idx) => (
              <div
                key={`${label}-${date}-${idx}`}
                className={`h-20 rounded-xl border border-gray-100 bg-gray-50/50 p-2 relative transition hover:border-blue-200 hover:bg-blue-50 ${
                  isOtherMonth ? "opacity-50" : ""
                } ${isToday ? "ring-2 ring-blue-400 border-blue-200 bg-blue-50" : ""}`}
              >
                <span className="text-sm font-semibold text-gray-700">
                  {date}
                </span>
                {isToday && (
                  <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    Today
                  </span>
                )}
                {idx === 9 && (
                  <div className="mt-3 text-xs rounded-md px-2 py-1 bg-indigo-100 text-indigo-700">
                    UX sync · 10:00
                  </div>
                )}
                {idx === 22 && (
                  <div className="mt-3 text-xs rounded-md px-2 py-1 bg-amber-100 text-amber-700">
                    Launch prep · 14:00
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Today
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                Monday, Nov 3
              </h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              3 events
            </span>
          </div>

          <div className="space-y-3">
            {events.map(({ title, time, place, accent }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-100 bg-gray-50 p-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className={`text-xs font-semibold px-2 py-1 rounded-full ${accent}`}>
                    {title}
                  </p>
                  <Clock3 size={16} className="text-gray-500" />
                </div>
                <p className="mt-2 text-sm text-gray-700">{time}</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                  <MapPin size={14} />
                  <span>{place}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const CalenderWindow = WindowWrapper(Calender, "calender");
export default CalenderWindow;
