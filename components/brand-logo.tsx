import Image from "next/image";
import { portfolio as p } from "@/content/portfolio";

/** CSS chooses the theme variant before hydration; no browser-only render branch. */
export function BrandLogo({ decorative = false }: { decorative?: boolean }) {
  return <span className="brand-logo" role={decorative ? undefined : "img"} aria-label={decorative ? undefined : p.brand.alt} aria-hidden={decorative || undefined}>
    <Image className="brand-logo-dark" src={p.brand.dark} alt="" width={320} height={200} priority />
    <Image className="brand-logo-light" src={p.brand.light} alt="" width={320} height={200} priority />
  </span>;
}
