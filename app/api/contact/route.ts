import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  if (!name || !phone) return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  console.log("Salon contact enquiry", Object.fromEntries(form.entries()));
  return NextResponse.json({ ok: true });
}