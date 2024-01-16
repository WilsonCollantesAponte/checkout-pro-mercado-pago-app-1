export async function POST() {
  return Response.json({ data: "ok" }, { status: 200 });
}

export async function GET() {
  return Response.json(
    { data: "ok", token: process.env.ACCESS_TOKEN },
    { status: 200 }
  );
}
