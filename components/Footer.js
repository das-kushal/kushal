"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      <div className="container mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-lg text-gray-100">Kushal Das</span>
            <p className="text-sm text-gray-500">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Designed and built with Next.js and Tailwind CSS
          </p>

          <nav aria-label="Social links" className="flex items-center gap-3">
            {[
              { href: "https://github.com/das-kushal", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/kushal-das-3936b3211/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:kushaldas30102002@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-colors duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
