import { CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";

export const metadata = { title: "Book a Visit" };

export default function BookingPage() {
  return <><PageHero eyebrow="Book a Visit" title="Make some time for yourself." description="Send a booking request and our team will contact you to confirm availability and any details needed before your visit."/><section className="section"><Container className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div className="rounded-3xl bg-[#241d21] p-8 text-white"><CalendarDays className="text-[#e6aeb0]" size={30}/><h2 className="mt-5 font-serif text-4xl">Your next ritual is one click away.</h2><p className="mt-4 text-sm leading-7 text-white/55">Select a preferred date, time and service. This is a request, not an instant confirmation; our team will confirm the final slot.</p><div className="mt-8 grid gap-3 text-sm text-white/65"><div>✓ Mon–Sat appointments</div><div>✓ Consultations for colour & bridal</div><div>✓ Personalised service recommendations</div></div></div><BookingForm/></Container></section></>;
}