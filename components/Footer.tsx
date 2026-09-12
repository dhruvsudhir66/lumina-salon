import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#241d21] text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div><Logo light/><p className="mt-5 max-w-xs text-sm leading-6 text-white/55">A modern beauty studio for thoughtful hair, beauty and self-care experiences.</p></div>
        <div><h3 className="text-sm font-semibold">Explore</h3><div className="mt-4 grid gap-3 text-sm text-white/55"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/team">Our Team</Link><Link href="/gallery">Gallery</Link></div></div>
        <div><h3 className="text-sm font-semibold">Visit Us</h3><div className="mt-4 grid gap-3 text-sm text-white/55"><span className="flex gap-2"><MapPin size={16}/> 24 Residency Road, Bangalore</span><span className="flex gap-2"><Phone size={16}/> +91 98765 43210</span><span className="flex gap-2"><Mail size={16}/> hello@luminasalon.in</span></div></div>
        <div><h3 className="text-sm font-semibold">Follow</h3><div className="mt-4 flex gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-white/10"><Instagram size={17}/></span></div></div>
      </Container>
      <div className="border-t border-white/10"><Container className="flex flex-col gap-2 py-5 text-xs text-white/35 md:flex-row md:justify-between"><span>© {new Date().getFullYear()} Lumina Salon & Beauty. All rights reserved.</span><span>Privacy Policy · Terms</span></Container></div>
    </footer>
  );
}