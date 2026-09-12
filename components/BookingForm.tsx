"use client";
import { FormEvent, useState } from "react";
import { services } from "@/data/site";

export function BookingForm() {
  const [status, setStatus] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("Requesting...");
    const res = await fetch("/api/booking", { method: "POST", body: new FormData(e.currentTarget) });
    setStatus(res.ok ? "Request received. We'll contact you to confirm your slot." : "Unable to submit. Please call us directly.");
    if (res.ok) e.currentTarget.reset();
  }
  return <form onSubmit={submit} className="grid gap-5 rounded-3xl border border-[#eadedb] bg-white p-7 shadow-sm">
    <div className="grid gap-5 md:grid-cols-2"><Field name="name" label="Full name" required/><Field name="phone" label="Phone number" type="tel" required/></div>
    <div className="grid gap-5 md:grid-cols-2"><Field name="date" label="Preferred date" type="date" required/><Field name="time" label="Preferred time" type="time" required/></div>
    <label className="grid gap-2 text-sm font-semibold text-[#51484d]">Service<select name="service" className="rounded-2xl border border-[#eadedb] px-4 py-3 font-normal">{services.map(s => <option key={s.slug}>{s.name}</option>)}</select></label>
    <label className="grid gap-2 text-sm font-semibold text-[#51484d]">Notes<textarea name="notes" rows={4} className="rounded-2xl border border-[#eadedb] px-4 py-3 font-normal" placeholder="Anything we should know?"/></label>
    <button disabled={status === "Requesting..."} className="rounded-full bg-[#b76e79] px-5 py-3 font-semibold text-white hover:bg-[#925560] disabled:opacity-60">{status || "Request Appointment"}</button>
  </form>;
}
function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-semibold text-[#51484d]">{label}<input name={name} type={type} required={required} className="rounded-2xl border border-[#eadedb] px-4 py-3 font-normal outline-none focus:border-[#b76e79] focus:ring-4 focus:ring-[#f7eceb]"/></label>;
}