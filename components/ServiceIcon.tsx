import { Brush, Crown, Flower2, Hand, Heart, Palette, Scissors, Sparkles, WandSparkles, Waves } from "lucide-react";
const icons = { scissors: Scissors, palette: Palette, sparkles: Sparkles, waves: Waves, flower: Flower2, hand: Hand, heart: Heart, wand: WandSparkles, crown: Crown, brush: Brush };
export function ServiceIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons] ?? Sparkles;
  return <Icon size={23} strokeWidth={1.7}/>;
}