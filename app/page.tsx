import { useState } from "react";
import { CalendarView } from "@/components/calendar-view";
import { EventProvider } from "@/components/event-context";

export default function CalendarApp() {
  const [view, setView] = useState<"year" | "month" | "day">("year");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <EventProvider>
      <div className="min-h-screen bg-background">
        <header className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-10 items-center">
            <div className="container flex h-10 items-center pl-5">
              <a className="flex items-center space-x-2" href="/">
                <span className="font-bold">Forte Sales Calendar</span>
              </a>
            </div>
          </div>
        </header>
        <main className="container py-6">
          <CalendarView
            view={view}
            setView={setView}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </main>
      </div>
    </EventProvider>
  );
}

// CalendarPage can be renamed and exported as a named export if needed
const CalendarPage = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [createdBy, setCreatedBy] = useState(''); // e.g., 'Nigel'
  const [color, setColor] = useState('#0099FF'); // default color

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eventData = {
      title: eventTitle,
      start: startDate,
      end: endDate,
      createdBy,
      color
    };
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
      {/* Add other form fields here */}
      <button type="submit">Create Event</button>
    </form>
  );
};
