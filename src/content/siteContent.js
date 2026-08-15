export const IMAGE_BASE = 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97';

const logo = {
  src: `${IMAGE_BASE}/15bc2f9bc_ncaia_logo.jpeg`,
  alt: 'NCAIA logo — circular emblem with US and Indian flags and US Capitol dome',
};

export const navbarContent = {
  brand: 'NCAIA',
  logo,
  homeLink: { label: 'Home', to: '/#home' },
  pageLinks: [
    { label: 'About', to: '/about' },
    { label: 'Events', to: '/events' },
  ],
  anchorLinks: [
    { label: 'Get Involved', to: '/#getinvolved' },
    { label: 'Contact', to: '/#contact' },
  ],
  cta: { label: 'Join Our Community', to: '/#getinvolved' },
};

export const footerContent = {
  brand: 'NCAIA',
  logo,
  description:
    'The National Council of Asian Indian Associations — preserving Indian heritage, building community, and promoting cultural unity across the United States.',
  quickLinks: [
    { label: 'Home', to: '/#home' },
    { label: 'About', to: '/about' },
    { label: 'Mission', to: '/about#mission' },
    { label: 'What We Do', to: '/about#whatwedo' },
    { label: 'Get Involved', to: '/#getinvolved' },
    { label: 'Contact', to: '/#contact' },
  ],
  socialLinks: [
    { label: 'Facebook', url: 'https://www.facebook.com' },
    { label: 'Instagram', url: 'https://www.instagram.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com' },
    { label: 'YouTube', url: 'https://www.youtube.com' },
  ],
  legal: ['Privacy Policy', 'Terms of Service'],
  copyright: '© 2026 National Council of Asian Indian Associations (NCAIA). All Rights Reserved.',
};