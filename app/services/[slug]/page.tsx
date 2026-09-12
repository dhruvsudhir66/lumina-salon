import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, CheckCircle2 } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ServiceIcon";
import { BookingCta } from "@/components/BookingCta";

const images: Record<string,string> = {
  "haircut-styling":"https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
  "hair-colour":"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
  "balayage-highlights":"https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1400&q=85",
  "hair-spa":"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
  facial:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
  "manicure-pedicure":"https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=85",
  "bridal-package":"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1400&q=85",
  makeup:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=85"
};

export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const service=services.find(s=>s.slug===slug); return {title:service?.name??"Service"};}
export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const service=services.find(s=>s.slug===slug); if(!service) notFound(); return <><section className="hero-salon border-b border-[#eadedb] py-12 md:py-16"><Container><Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a65f69]"><ArrowLeft size={16}/> All Services</Link><div className="mt-8 grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f7e6e4] text-[#a65f69]"><ServiceIcon name={service.icon}/></div><p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-[#b76e79]">{service.category}</p><h1 className="mt-2 font-serif text-5xl leading-tight md:text-6xl">{service.name}</h1><p className="mt-4 max-w-2xl text-base leading-7 text-[#746a70]">{service.description}</p></div><div className="image-wrap relative aspect-[16/10] overflow-hidden rounded-[34px] shadow-xl"><Image src={images[service.slug]} alt={service.name} fill sizes="(min-width:1024px) 55vw,100vw" className="object-cover"/></div></div></Container></section><section className="section"><Container className="grid gap-12 lg:grid-cols-[1.3fr_.7fr]"><div><h2 className="font-serif text-4xl">A considered experience, from start to finish.</h2><p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#746a70]">We take the time to understand your goals, assess what will work best for you and finish with practical aftercare guidance.</p><div className="mt-7 grid gap-4">{["Personalised consultation","Professional products and tools","Stylist-led recommendations","Aftercare guidance"].map(x=><div key={x} className="flex items-center gap-3 rounded-2xl border border-[#eadedb] p-4 text-sm font-medium"><CheckCircle2 size={18} className="text-[#b76e79]"/>{x}</div>)}</div></div><aside className="h-fit rounded-[30px] bg-[#241d21] p-8 text-white shadow-xl"><CalendarDays className="text-[#e6aeb0]"/><p className="mt-5 text-xs uppercase tracking-[.18em] text-white/50">Typical visit</p><h3 className="mt-2 font-serif text-3xl">{service.duration}</h3><p className="mt-2 text-sm text-white/55">{service.price}</p><Link href="/booking" className="mt-7 block rounded-full bg-[#b76e79] px-5 py-3 text-center text-sm font-semibold hover:bg-[#925560]">Book This Service</Link></aside></Container></section><BookingCta/></>}
