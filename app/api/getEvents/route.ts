export async function GET() {
  const res = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec');
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
export async function POST(request: Request) {
  const eventData = await request.json();

  const res = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
