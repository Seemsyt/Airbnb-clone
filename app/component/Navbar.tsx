"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { LogOut, Menu, Plus, UserCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchFilter from "./SearchFilter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "#" },
  { label: "Properties", href: "/properties" },
  { label: "Profile", href: "/profile" },
  { label: "Conversation", href: "/conversation" },
];

const AUTH_STORAGE_KEY = "eccomerce_auth";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const syncAuthState = () => {
      if (typeof window === "undefined") return;
      setIsLoggedIn(Boolean(window.localStorage.getItem(AUTH_STORAGE_KEY)));
    };

    syncAuthState();
    window.addEventListener("storage", syncAuthState);
    window.addEventListener("auth-change", syncAuthState);

    return () => {
      window.removeEventListener("storage", syncAuthState);
      window.removeEventListener("auth-change", syncAuthState);
    };
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    window.dispatchEvent(new Event("auth-change"));
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b border-zinc-200/70 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={30}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 text-sm font-medium text-zinc-700">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-zinc-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <SearchFilter />

          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <Button asChild size="sm" className="gap-1.5">
                  <Link href="/add-property" className="flex items-center gap-1.5">
                    <Plus className="h-4 w-4" />
                    Add property
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/myProperties">My properties</Link>
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="outline" size="sm" className="gap-1.5">
                  <Link href="/login" className="flex items-center gap-1.5">
                    <UserCircle2 className="h-4 w-4" />
                    Log in
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>
        </div>

        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-200 md:hidden"
          >
            <div className="space-y-4 px-4 py-4">
              <ul className="space-y-2">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <SearchFilter className="w-full" inputClassName="w-full" />

              {isLoggedIn ? (
                <div className="grid grid-cols-3 gap-2">
                  <Button asChild size="sm" className="gap-1.5">
                    <Link
                      href="/add-property"
                      className="flex items-center gap-1.5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Plus className="h-4 w-4" />
                      Add
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/myProperties" onClick={() => setIsMobileMenuOpen(false)}>
                      My props
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="gap-1.5">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Log in
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="gap-1.5">
                    <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign up
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
