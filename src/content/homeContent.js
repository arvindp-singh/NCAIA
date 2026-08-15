import { IMAGE_BASE } from './siteContent';

export const homePageContent = {
  hero: {
    badge: 'Nonprofit Organization · Virginia, USA',
    title: 'Celebrating Indian Heritage, Building Community',
    titleAccent: ' in America',
    subtitle:
      "NCAIA is a non-profit, non-political organization headquartered in Virginia that brings together Asian Indian Americans from diverse linguistic, cultural, and multi-faith backgrounds. We preserve India's rich heritage through cultural, educational, charitable, and community programs.",
    ctaPrimary: 'Join Our Community',
    ctaSecondary: 'Learn More',
    scrollLabel: 'Scroll',
    image: {
      src: `${IMAGE_BASE}/e16752420_generated_981020d7.png`,
      alt: 'Diverse Indian American community gathering celebrating cultural heritage together in a scenic outdoor setting',
    },
    stats: [
      { value: 50, suffix: '+', label: 'Annual Events' },
      { value: 25, suffix: '+', label: 'Community Partners' },
      { value: null, text: 'Nationwide', label: 'Impact Across the USA' },
    ],
  },
  about: {
    badge: 'Who We Are',
    title: 'About NCAIA',
    paragraphs: [
      'The National Council of Asian Indian Associations (NCAIA), headquartered in Virginia, is a non-profit and non-political organization dedicated to celebrating, preserving, and sharing the rich heritage, values, philosophy, and culture of India in the United States.',
      'We bring together Asian Indian Americans from diverse linguistic, cultural, and multi-faith backgrounds to build community, strengthen understanding, and promote harmony.',
      'We believe our community can honor its roots while contributing meaningfully to the social, cultural, and civic life of America.',
      'Through cultural, educational, charitable, and community-based programs, we strengthen relationships among people across the United States and beyond.',
    ],
    image: {
      src: `${IMAGE_BASE}/89898dc35_generated_d2c81253.png`,
      alt: 'Artistic illustration showing the cultural connection between India and the United States with diverse community members',
    },
  },
  vision: {
    title: 'Our Vision',
    paragraphs: [
      'We envision a vibrant and united community that preserves Indian heritage, embraces diversity, supports future generations, and builds stronger bridges between India and the United States.',
      'Our members serve as goodwill ambassadors who reflect the spirit of a secular, multilingual, and multi-faith India while actively participating in the cultural fabric of America.',
    ],
    image: {
      src: `${IMAGE_BASE}/20fe51c43_generated_4ea3a11e.png`,
      alt: 'Indian American community members gathered on a Virginia landscape during golden hour',
    },
  },
  getInvolved: {
    title: 'Become Part of Our Growing Community',
    subtitle:
      'Whether you want to volunteer, partner, or simply attend an event — every step strengthens our community.',
    actions: [
      { icon: 'Users', label: 'Join Our Community', desc: 'Become a member and be part of a growing family.' },
      { icon: 'HandHeart', label: 'Become a Volunteer', desc: 'Contribute your time and talents to our programs.' },
      { icon: 'Handshake', label: 'Partner With Us', desc: 'Collaborate to create greater community impact.' },
      { icon: 'CalendarDays', label: 'Attend Our Events', desc: 'Participate in cultural celebrations and gatherings.' },
    ],
  },
  contact: {
    badge: 'Reach Out',
    title: 'Contact Us',
    orgName: 'National Council of Asian Indian Associations',
    orgShort: '(NCAIA)',
    followLabel: 'Follow Us',
    items: [
      { icon: 'MapPin', label: 'Headquarters', value: 'Virginia, USA' },
      { icon: 'Globe', label: 'Website', value: 'ncaiausa.org' },
    ],
    socials: ['Facebook', 'Instagram', 'LinkedIn', 'YouTube'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398242.5204615!2d-77.61535!3d38.8951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sVirginia%2C%20USA!5e0!3m2!1sen!2sus!4v1704124800000!5m2!1sen!2sus',
  },
  sponsors: {
    badge: 'With Gratitude',
    title: 'Proud Sponsors',
    subtitle: "We thank our generous sponsors for their continued support of NCAIA's mission.",
    images: [
      { src: `${IMAGE_BASE}/b7b84b3ee_Balagan-New-Logo.png`, alt: 'B & T logo', name: 'B & T', dark: true },
      { src: `${IMAGE_BASE}/cda320e34_Blue_ocean_Diamonds.jpg`, alt: 'Blue Ocean Diamonds logo by Meenal Singh', name: 'Blue Ocean Diamonds', dark: true },
      { src: `${IMAGE_BASE}/520d88baf_Somireddy-law-group_logo2.jpg`, alt: 'Somireddy Law Group logo', name: 'Somireddy Law Group', dark: false },
    ],
  },
};