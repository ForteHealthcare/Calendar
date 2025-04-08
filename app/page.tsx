const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const eventData = {
    title: eventTitle,
    start: startDate,
    end: endDate,
    createdBy: createdBy,
    color: color,
  };

  try {
    await fetch('/api/addEvent', {
      method: 'POST',
      body: JSON.stringify(eventData),
      headers: { 'Content-Type': 'application/json' },
    });

    // Optionally reset form or reload events
    setEventTitle('');
    setStartDate('');
    setEndDate('');
    setCreatedBy('');
    setColor('#0099FF');
  } catch (error) {
    console.error('Error adding event:', error);
  }
};
