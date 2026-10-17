import Link from "next/link";
import { portfolio as p } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
export default function NotFound() { return <section className="container empty-state not-found"><p className="eyebrow">404</p><h1>{p.ui.notFound}</h1><p>{p.ui.notFoundDetail}</p><Button asChild><Link href="/">{p.ui.home}</Link></Button></section>; }
