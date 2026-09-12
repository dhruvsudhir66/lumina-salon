import Image from "next/image";
import { Container } from "./ui/Container";

export function PageHero({ eyebrow, title, description, image = "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85" }: { eyebrow:string; title:string; description:string; image?:string }) {
  return <section className="hero-salon border-b border-[#eadedb] py-14 md:py-20"><Container className="grid items-center gap-10 lg:grid-cols-[1fr_.75fr]"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#b76e79]">{eyebrow}</p><h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.06] text-[#241d21] md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-[#746a70]">{description}</p></div><div className="image-wrap relative hidden aspect-[4/3] overflow-hidden rounded-[34px] shadow-2xl lg:block"><Image src={image} alt="Lumina salon interior" fill sizes="(min-width: 1024px) 38vw, 0px" className="object-cover" priority/></div></Container></section>;
}
