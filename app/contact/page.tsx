import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Come say hello." description="Questions about a service, pricing or your next appointment? Our team would love to hear from you."/><section className="section"><Container className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div className="grid content-start gap-5">{[[MapPin,"Visit Us","24 Residency Road, Bangalore"],[Phone,"Call Us","+91 98765 43210"],[Mail,"Email Us","hello@luminasalon.in"],[Clock3,"Hours","Mon–Sat · 10:00 AM – 8:00 PM"]].map(([I,a,b])=>{const Icon=I as typeof MapPin; return <div key={String(a)} className="rounded-3xl border border-[#eadedb] p-6"><Icon className="text-[#b76e79]"/><h3 className="mt-4 font-semibold">{String(a)}</h3><p className="mt-1 text-sm text-[#746a70]">{String(b)}</p></div>})}</div><ContactForm/></Container></section></>;
}