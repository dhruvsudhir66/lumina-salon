import type { Service, Stylist } from "@/types";

export const services: Service[] = [
  { slug: "haircut-styling", name: "Haircut & Styling", category: "Hair", description: "A personalised cut, finish and styling session designed around your face shape and lifestyle.", duration: "60 min", price: "From ₹799", icon: "scissors" },
  { slug: "hair-colour", name: "Hair Colour", category: "Hair", description: "Dimensional colour, global colour and refreshing services using salon-grade products.", duration: "120 min", price: "From ₹2,499", icon: "palette" },
  { slug: "balayage-highlights", name: "Balayage & Highlights", category: "Hair", description: "Soft, natural-looking dimension with a consultation-led colour plan.", duration: "150 min", price: "From ₹3,499", icon: "sparkles" },
  { slug: "hair-spa", name: "Hair Spa", category: "Hair", description: "A relaxing treatment ritual to nourish, condition and revive tired hair.", duration: "45 min", price: "From ₹999", icon: "waves" },
  { slug: "facial", name: "Signature Facial", category: "Beauty", description: "A relaxing facial ritual customised to your skin goals and comfort.", duration: "60 min", price: "From ₹1,299", icon: "flower" },
  { slug: "manicure-pedicure", name: "Manicure & Pedicure", category: "Nails", description: "Clean, shape, care and finish for polished hands and feet.", duration: "75 min", price: "From ₹999", icon: "hand" },
  { slug: "bridal-package", name: "Bridal Beauty", category: "Bridal", description: "A tailored bridal beauty experience planned around your wedding timeline.", duration: "By consultation", price: "Custom quote", icon: "heart" },
  { slug: "makeup", name: "Occasion Makeup", category: "Makeup", description: "Camera-ready makeup for parties, celebrations, shoots and special occasions.", duration: "90 min", price: "From ₹2,499", icon: "wand" }
];

export const stylists: Stylist[] = [
  { name: "Maya Thomas", role: "Creative Director", specialty: "Cuts & Colour", experience: "11 years" },
  { name: "Arjun Mehta", role: "Senior Stylist", specialty: "Men's Grooming & Styling", experience: "8 years" },
  { name: "Riya Nair", role: "Beauty Specialist", specialty: "Skin, Nails & Makeup", experience: "7 years" },
  { name: "Sana Kapoor", role: "Bridal Artist", specialty: "Bridal & Occasion Beauty", experience: "9 years" }
];

export const testimonials = [
  { name: "Aisha R.", service: "Hair Colour", quote: "The consultation was excellent and the colour came out even better than I imagined. Beautiful salon and lovely team." },
  { name: "Neha S.", service: "Haircut & Styling", quote: "Finally found a stylist who actually listens. The whole experience feels premium without being intimidating." },
  { name: "Priya M.", service: "Bridal Beauty", quote: "Lumina handled my bridal look so calmly. Everything was organised, elegant and exactly what I wanted." },
  { name: "Karan V.", service: "Men's Styling", quote: "Great attention to detail and no unnecessary upselling. I walked out feeling fresh and confident." }
];

export const gallery = [
  { title: "Signature Cut", tag: "Hair" },
  { title: "Soft Balayage", tag: "Colour" },
  { title: "Bridal Glow", tag: "Bridal" },
  { title: "Clean Finish", tag: "Grooming" },
  { title: "Nail Ritual", tag: "Beauty" },
  { title: "Studio Details", tag: "The Salon" }
];