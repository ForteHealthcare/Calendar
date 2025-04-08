"use client"

import { useState } from "react"
import { CalendarView } from "@/components/calendar-view"
import { EventProvider } from "@/components/event-context"

export default function CalendarApp() {
  const [view, setView] = useState<"year" | "month" | "day">("year")
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

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
          <CalendarView view={view} setView={setView} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </main>
      </div>
    </EventProvider>
  )
}
import { useState } from 'react';

const CalendarPage = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [createdBy, setCreatedBy] = useState(''); // e.g., 'Nigel'
  const [color, setColor] = useState('#0099FF'); // default color
  
  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents default form submission

    const eventData = {
      title: eventTitle,
      start: startDate,
      end: endDate,
      createdBy: createdBy,
      color: color,
    };

    try {
      // Send the event data to the backend (API)
      await fetch('/api/addEvent', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: { 'Content-Type': 'application/json' },
      });

      // Optionally reset the form after successful submission
      setEventTitle('');
      setStartDate('');
      setEndDate('');
      setCreatedBy('');
      setColor('#0099FF');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
      <h1>Calendar</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Title:</label>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Created By:</label>
          <input
            type="text"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default CalendarPage;

