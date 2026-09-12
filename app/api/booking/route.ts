import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const required = ["name", "phone", "date", "time"];
  if (required.some(key => !String(form.get(key) ?? "").trim())) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  console.log("Salon booking request", Object.fromEntries(form.entries()));
  return NextResponse.json({ ok: true });
}