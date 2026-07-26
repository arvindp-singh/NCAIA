import React from 'react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'What We Do', href: '#whatwedo' },
  { label: 'Get Involved', href: '#getinvolved' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Facebook', url: 'https://www.facebook.com' },
  { label: 'Instagram', url: 'https://www.instagram.com' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com' },
  { label: 'YouTube', url: 'https://www.youtube.com' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/15bc2f9bc_ncaia_logo.jpeg"
                alt="NCAIA logo — circular emblem with US and Indian flags and US Capitol dome"
                className="w-12 h-12 rounded-full object-cover border-2 border-brass"
              />
              <span className="font-display font-bold text-xl">NCAIA</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              The National Council of Asian Indian Associations — preserving Indian heritage, building
              community, and promoting cultural unity across the United States.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-white/60 hover:text-saffron text-sm transition-colors duration-200 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
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
              <a href="#" className="block text-white/40 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="block text-white/40 hover:text-white/60 text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">
            © 2026 National Council of Asian Indian Associations (NCAIA). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}