import React from 'react';
import { Link } from 'react-router-dom';
import { footerContent } from '@/content/siteContent';

export default function Footer() {
  const { brand, description, quickLinks, socialLinks, legal, copyright, logo } = footerContent;

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-12 h-12 rounded-full object-cover border-2 border-brass"
              />
              <span className="font-display font-bold text-xl">{brand}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">{description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-saffron text-sm transition-colors duration-200 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Connect</h4>
            <ul className="space-y-3 mb-8">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-saffron text-sm transition-colors duration-200 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              {legal.map((item) => (
                <a key={item} href="#" className="block text-white/40 hover:text-white/60 text-xs transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}