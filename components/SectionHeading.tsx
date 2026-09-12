export function SectionHeading({ eyebrow, title, description, center = true }: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
    <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b76e79]">{eyebrow}</p>
    <h2 className="mt-3 font-serif text-4xl leading-tight text-[#241d21] md:text-5xl">{title}</h2>
    {description && <p className="mt-4 text-[15px] leading-7 text-[#746a70]">{description}</p>}
  </div>;
}