export async function POST(request: Request) {
  const eventData = await request.json();

  const res = await fetch('https://script.google.com/macros/s/AKfycbwMHKyjOQLma7mtYkHsVaAetb7cSaX31G1Ow-q1FzcWXb0ceNwgx3A8vJjlH9ydOpk/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
