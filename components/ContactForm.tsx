"use client";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("Sending...");
    const res = await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) });
    setStatus(res.ok ? "Thank you. We'll get back to you shortly." : "Something went wrong. Please call us.");
    if (res.ok) e.currentTarget.reset();
  }
  return <form onSubmit={submit} className="grid gap-5 rounded-3xl border border-[#eadedb] bg-white p-7 shadow-sm">
    <div className="grid gap-5 md:grid-cols-2"><Field name="name" label="Full name" required/><Field name="phone" label="Phone number" type="tel" required/></div>
    <Field name="email" label="Email address" type="email"/>
    <label className="grid gap-2 text-sm font-semibold text-[#51484d]">Message<textarea name="message" rows={5} className="rounded-2xl border border-[#eadedb] px-4 py-3 font-normal outline-none focus:border-[#b76e79] focus:ring-4 focus:ring-[#f7eceb]" placeholder="Tell us what you'd like to book or ask about."/></label>
    <button disabled={status === "Sending..."} className="rounded-full bg-[#302426] px-5 py-3 font-semibold text-white hover:bg-[#925560] disabled:opacity-60">{status || "Send Message"}</button>
  </form>;
}
function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-semibold text-[#51484d]">{label}<input name={name} type={type} required={required} className="rounded-2xl border border-[#eadedb] px-4 py-3 font-normal outline-none focus:border-[#b76e79] focus:ring-4 focus:ring-[#f7eceb]"/></label>;
}