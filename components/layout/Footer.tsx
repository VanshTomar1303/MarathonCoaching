import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/social-icons";
import { site, footerLinks } from "@/constants/site";
import { branches } from "@/constants/locations";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,white,transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              <span className="flex items-center justify-center rounded-lg bg-white p-1.5">
                <Image
                  src="/logos/skc-logo.png"
                  alt="SKC Career"
                  width={140}
                  height={124}
                  className="h-12 w-auto object-contain"
                />
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-5">{site.mission}</p>
            <div className="flex gap-3">
              <a href={site.social.facebook} aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={site.social.twitter} aria-label="Twitter" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a href={site.social.youtube} aria-label="YouTube" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol title="Programs" links={footerLinks.programs} />
          <FooterCol title="Company" links={footerLinks.company} />
          <FooterCol title="Resources" links={footerLinks.resources} />
          <FooterCol title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-y border-white/10 py-6">
          <a href={site.phoneHref} className="flex items-center gap-3 text-sm text-white/70 hover:text-gold">
            <Phone className="h-4 w-4 shrink-0" /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-gold">
            <Mail className="h-4 w-4 shrink-0" /> {site.email}
          </a>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold">
            <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp {site.whatsapp}
          </a>
          {branches.map((b) => (
            <div key={b.name} className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                <span className="block text-white/90 font-medium">{b.name}</span>
                {b.address}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {site.androidApp && (
              <a href={site.androidApp} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                Get the Android App
              </a>
            )}
            <span>{site.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-heading font-medium text-sm mb-4 text-white/90">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/55 hover:text-gold transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
