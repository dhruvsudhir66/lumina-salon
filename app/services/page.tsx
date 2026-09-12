import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return <><PageHero eyebrow="Services & Pricing" title="A considered menu of hair, beauty and self-care." description="Explore our most requested services. Final pricing may vary based on hair length, product usage and consultation."/><section className="section"><Container><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map(s => <ServiceCard key={s.slug} service={s}/>)}</div></Container></section></>;
}