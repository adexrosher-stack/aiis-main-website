"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchDialog } from "@/components/search-dialog"
import { Logo } from "@/components/logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Logo variant="full" size="md" />

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    pathname === "/"
                      ? "text-primary font-semibold"
                      : isScrolled
                        ? "text-foreground"
                        : "text-foreground dark:text-white",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent",
                    pathname.startsWith("/about")
                      ? "text-primary font-semibold"
                      : isScrolled
                        ? "text-foreground"
                        : "text-foreground dark:text-white",
                  )}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/about"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">About AIIS</div>
                          <p className="text-sm leading-tight text-white/90">
                            Learn about our mission, vision, and approach to theological education.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about?tab=mission" title="Who are we?">
                      Discover our purpose and goals
                    </ListItem>
                    <ListItem href="/about?tab=approach" title="Our Approach">
                      Our approach to teaching and learning
                    </ListItem>
                    <ListItem href="/about?tab=accreditation" title="Accreditation">
                      Our academic credentials and partnerships
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/faculty"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    pathname === "/faculty"
                      ? "text-primary font-semibold"
                      : isScrolled
                        ? "text-foreground"
                        : "text-foreground dark:text-white",
                  )}
                >
                  Faculty
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent",
                    pathname.startsWith("/academics")
                      ? "text-primary font-semibold"
                      : isScrolled
                        ? "text-foreground"
                        : "text-foreground dark:text-white",
                  )}
                >
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/academics#undergraduate" title="Undergraduate Programs">
                      Bachelor's degrees and diplomas
                    </ListItem>
                    <ListItem href="/academics#graduate" title="Graduate Programs">
                      Master's level education
                    </ListItem>
                    <ListItem href="/academics#doctoral" title="Doctoral Programs">
                      PhD and advanced research degrees
                    </ListItem>
                    <ListItem href="/academics#certificates" title="Certificate Programs">
                      Short-term specialized training
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/admissions"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    pathname === "/admissions"
                      ? "text-primary font-semibold"
                      : isScrolled
                        ? "text-foreground"
                        : "text-foreground dark:text-white",
                  )}
                >
                  Admissions
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/events"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    pathname === "/events"
                      ? "text-primary font-semibold"
                      : isScrolled
                        ? "text-foreground"
                        : "text-foreground dark:text-white",
                  )}
                >
                  Knowledge & Events
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    pathname === "/contact"
                      ? "text-primary font-semibold"
                      : isScrolled
                        ? "text-foreground"
                        : "text-foreground dark:text-white",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <SearchDialog />
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="ml-2">
            <Link href="/login">
              <User className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
          <Button asChild variant="default" size="sm" className="ml-2">
            <Link href="/admissions">Apply Now</Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden gap-2">
          <SearchDialog />
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="ml-2">
            <Link href="/login">
              <User className="h-4 w-4" />
              <span className="sr-only">Login</span>
            </Link>
          </Button>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background md:hidden"
        >
          <div className="container flex h-20 items-center justify-between px-4">
            <Logo variant="full" size="md" />
            <div className="flex items-center gap-2">
              <button onClick={toggleMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
          </div>
          <nav className="container grid gap-6 px-4 pb-8 pt-6">
            <Link
              href="/"
              className="flex items-center justify-between text-lg font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Home
              <span className="text-primary">→</span>
            </Link>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Link href="/about" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                  About
                </Link>
                <span className="text-primary">→</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pl-4">
                <Link
                  href="/about?tab=mission"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  Who are We?
                </Link>
                <Link
                  href="/about?tab=approach"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  Our Approach
                </Link>
                <Link
                  href="/about?tab=accreditation"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  Accreditation
                </Link>
              </div>
            </div>
            <Link
              href="/faculty"
              className="flex items-center justify-between text-lg font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Faculty
              <span className="text-primary">→</span>
            </Link>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Link href="/academics" className="text-lg font-medium hover:text-primary" onClick={toggleMenu}>
                  Academics
                </Link>
                <span className="text-primary">→</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pl-4">
                <Link
                  href="/academics#undergraduate"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  Undergraduate
                </Link>
                <Link
                  href="/academics#graduate"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  Graduate
                </Link>
                <Link
                  href="/academics#doctoral"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  Doctoral
                </Link>
                <Link
                  href="/academics#certificates"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  Certificates
                </Link>
              </div>
            </div>
            <Link
              href="/admissions"
              className="flex items-center justify-between text-lg font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Admissions
              <span className="text-primary">→</span>
            </Link>
            <Link
              href="/events"
              className="flex items-center justify-between text-lg font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Knowledge & Events
              <span className="text-primary">→</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-between text-lg font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
              <span className="text-primary">→</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center justify-between text-lg font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Login
              <span className="text-primary">→</span>
            </Link>
            <Button asChild className="w-full mt-4">
              <Link href="/admissions" onClick={toggleMenu}>
                Apply Now
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"