import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube, Linkedin } from "lucide-react"
import { Logo } from "@/components/logo"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="container px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo variant="full" size="md" />
            <p className="text-white/80">
              A center for theological and international studies dedicated to academic excellence, research, and
              community engagement.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-white/80 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-white/80 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-white/80 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/academics#undergraduate" className="text-white/80 hover:text-white transition-colors">
                  Undergraduate Programs
                </Link>
              </li>
              <li>
                <Link href="/academics#graduate" className="text-white/80 hover:text-white transition-colors">
                  Master's Programs
                </Link>
              </li>
              <li>
                <Link href="/academics#doctoral" className="text-white/80 hover:text-white transition-colors">
                  Doctoral Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions#financial-aid" className="text-white/80 hover:text-white transition-colors">
                  Financial Aid
                </Link>
              </li>
              <li>
                <Link href="/about#accreditation" className="text-white/80 hover:text-white transition-colors">
                  Accreditation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                <span className="text-white/80">Megenagna-CMC Rd, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent shrink-0" />
                <span className="text-white/80">+251 927 95 68 70 / +251 912 35 70 38</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent shrink-0" />
                <span className="text-white/80">aiisseminary@gmail.com</span>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} African Institute for International Studies (AIIS). All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-white/60 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

