useEffect(() => {
  const fetchEvents = async () => {
    const res = await fetch('/api/getEvents');
    const data = await res.json();
    setEvents(data); // Assuming you set the events in state
  };
  fetchEvents();
}, []);
