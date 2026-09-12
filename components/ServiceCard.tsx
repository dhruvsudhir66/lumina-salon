import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { ServiceIcon } from "./ServiceIcon";

const images: Record<string,string> = {
  "haircut-styling":"https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=82",
  "hair-colour":"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=82",
  "balayage-highlights":"https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=82",
  "hair-spa":"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=82",
  facial:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=82",
  "manicure-pedicure":"https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=82",
  "bridal-package":"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=900&q=82",
  makeup:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=82"
};

export function ServiceCard({ service }: { service: Service }) {
  return <Link href={`/services/${service.slug}`} className="group overflow-hidden rounded-[28px] border border-[#eadedb] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8f4e59]/10"><div className="image-wrap relative aspect-[4/3] overflow-hidden"><Image src={images[service.slug]} alt={service.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover"/></div><div className="p-6"><div className="flex items-center justify-between gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#f9eeee] text-[#a65f69]"><ServiceIcon name={service.icon}/></span><span className="text-xs font-semibold text-[#b76e79]">{service.price}</span></div><h3 className="mt-5 font-serif text-2xl text-[#241d21]">{service.name}</h3><p className="mt-2 text-sm leading-6 text-[#746a70]">{service.description}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#925560]">Explore <ArrowUpRight size={16}/></span></div></Link>;
}
