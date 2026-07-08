"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navLinks, site } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div
            className={cn(
              "grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-full px-5 lg:px-8 transition-all duration-300",
              scrolled ? "glass shadow-[0_10px_40px_-15px_rgba(11,31,77,0.3)] py-2.5" : "py-3"
            )}
          >
            <Link
              href="/"
              aria-label="SKC Career — Home"
              className="flex items-center justify-self-start shrink-0"
            >
              <span className="flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/5">
                <Image
                  src="/logos/skc-logo.png"
                  alt="SKC Career"
                  width={140}
                  height={124}
                  priority
                  className="h-9 w-auto object-contain"
                />
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 justify-self-center">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDesktopMenu(link.href)}
                  onMouseLeave={() => link.children && setOpenDesktopMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors",
                      pathname === link.href && "text-foreground bg-foreground/5"
                    )}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="h-3.5 w-3.5" />}
                  </Link>
                  <AnimatePresence>
                    {link.children && openDesktopMenu === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="glass rounded-2xl p-2 shadow-[0_20px_50px_-15px_rgba(11,31,77,0.3)]">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center justify-self-end">
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href={site.phoneHref}
                  className="hidden xl:flex items-center gap-1.5 whitespace-nowrap shrink-0 text-sm font-medium text-foreground/70 hover:text-foreground"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  {site.phone}
                </a>
                <ThemeToggle />
                <Button variant="gold" size="sm" asChild>
                  <Link href="/booking">Enroll Now</Link>
                </Button>
              </div>

              <div className="flex items-center gap-1 lg:hidden">
                <ThemeToggle />
                <button
                  className="p-2 text-foreground"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-surface p-6 pt-24 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="flex-1 rounded-xl px-3 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5"
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <button
                          className="p-3"
                          onClick={() =>
                            setOpenMobileMenu((v) => (v === link.href ? null : link.href))
                          }
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              openMobileMenu === link.href && "rotate-180"
                            )}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {link.children && openMobileMenu === link.href && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-xl px-3 py-2.5 text-sm text-foreground/60 hover:bg-foreground/5"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
              <Button variant="gold" className="w-full mt-6" asChild>
                <Link href="/booking">Enroll Now</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 lg:hidden">
        <Button variant="gold" size="lg" className="w-full shadow-2xl" asChild>
          <Link href="/booking">Enroll Now</Link>
        </Button>
      </div>
    </>
  );
}
