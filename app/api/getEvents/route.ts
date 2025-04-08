export async function GET() {
  const res = await fetch('https://script.google.com/macros/s/AKfycbwMHKyjOQLma7mtYkHsVaAetb7cSaX31G1Ow-q1FzcWXb0ceNwgx3A8vJjlH9ydOpk/exec');
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}

