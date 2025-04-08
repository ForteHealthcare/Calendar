import { useState } from "react";

const CalendarApp = () => {
  const [view, setView] = useState<"year" | "month" | "day">("year");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // New state for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#0099FF");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const eventData = {
      title: title,
      date: selectedDate.toISOString().split("T")[0], // Store as YYYY-MM-DD
      description: description,
      color: color,
    };

    try {
      const res = await fetch("/api/addEvent", {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();
      console.log("Event added:", result);

      // Reset form after submission
      setTitle("");
      setDescription("");
      setColor("#0099FF");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
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
        {/* Calendar Component */}
        <CalendarView
          view={view}
          setView={setView}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        {/* Event creation form */}
        <div className="mt-6">
          <h2 className="font-bold">Add New Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block">Event Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block">Event Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block">Event Color</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full p-2"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Add Event
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CalendarApp;
