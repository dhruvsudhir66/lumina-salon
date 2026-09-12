import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Container } from "./ui/Container";

export function BookingCta() {
  return <section className="py-10"><Container><div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#f7eceb] px-7 py-8 md:flex-row md:items-center md:px-10">
    <div><div className="flex items-center gap-2 font-semibold text-[#925560]"><CalendarDays size={19}/> Your next glow-up starts here.</div><p className="mt-2 text-sm text-[#746a70]">Reserve a time that works for you and let our team take care of the rest.</p></div>
    <Link href="/booking" className="inline-flex items-center gap-2 rounded-full bg-[#302426] px-6 py-3 text-sm font-semibold text-white hover:bg-[#925560]">Book a Visit <ArrowRight size={16}/></Link>
  </div></Container></section>;
}