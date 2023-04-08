export async function POST(req: Request) {
  const { page } = await req.json();
  return new Response(JSON.stringify({ message: "page=" + page }));
}
