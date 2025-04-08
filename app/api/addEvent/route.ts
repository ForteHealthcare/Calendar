export async function POST(request: Request) {
  const eventData = await request.json(); // Retrieve event data from the frontend

  // Send event data to Google Sheets via Google Apps Script
  const res = await fetch('https://script.google.com/macros/s/AKfycbwMHKyjOQLma7mtYkHsVaAetb7cSaX31G1Ow-q1FzcWXb0ceNwgx3A8vJjlH9ydOpk/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });

  const data = await res.json(); // Get response from Google Sheets
  return new Response(JSON.stringify(data), { status: 200 }); // Send success response to frontend
}
