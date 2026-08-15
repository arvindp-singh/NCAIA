import { IMAGE_BASE } from './siteContent';

export const eventsPageContent = {
  header: {
    title: 'Our Events',
    subtitle:
      "A collection of moments from NCAIA's gatherings — celebrating community, culture, and connection.",
  },
  events: [
    {
      id: 'dcmwelcome',
      badge: 'Looking Back',
      title: 'Past DCM Welcome Event',
      description:
        'A look back at our previous DCM Welcome event — celebrating community, culture, and connection.',
      theme: 'dark',
      grid: 'grid-cols-2 md:grid-cols-4',
      minImageHeight: 'min-h-[200px]',
      images: [
        { src: `${IMAGE_BASE}/1c5a8afe4_AST02889.jpg`, alt: 'Group photo at the DCM Welcome event with award plaque presentations', label: 'Awards Presentation' },
        { src: `${IMAGE_BASE}/f52086f77_AST02895.jpg`, alt: 'Group of attendees on stage at the DCM Welcome event', label: 'On Stage' },
        { src: `${IMAGE_BASE}/ebb84012a_AST02989.jpg`, alt: 'Group portrait of guests at the DCM Welcome reception', label: 'Welcome Reception' },
        { src: `${IMAGE_BASE}/687767005_AST02994.jpg`, alt: 'Ten guests posing at the DCM Welcome event', label: 'Guests Together' },
        { src: `${IMAGE_BASE}/c37c023a5_AST02995.jpg`, alt: 'Group of eleven attendees behind a dining table at the DCM Welcome event', label: 'Banquet Table' },
        { src: `${IMAGE_BASE}/b126d4b60_AST02999.jpg`, alt: 'Seven women posing in a line at the DCM Welcome event', label: 'Community Members' },
        { src: `${IMAGE_BASE}/110610320_AST02998.jpg`, alt: 'Group of fourteen people posing at the DCM Welcome event', label: 'Event Group' },
        { src: `${IMAGE_BASE}/200519fb0_AST029991.jpg`, alt: 'Seven women in traditional attire at the DCM Welcome event', label: 'In Traditional Attire' },
        { src: `${IMAGE_BASE}/3e4159e5f_AST03003.jpg`, alt: 'Four people posing in front of the Indian flag backdrop at the DCM Welcome event', label: 'Flag Backdrop' },
        { src: `${IMAGE_BASE}/ee86dee33_AST03005.jpg`, alt: 'Group of twelve adults posing together at the DCM Welcome event', label: 'Group Portrait' },
      ],
    },
    {
      id: 'rajivfarewell',
      badge: 'A Special Farewell',
      title: 'Rajiv Ahuja Farewell',
      description:
        'Honoring Rajiv Ahuja for his dedication and contributions to the Indian American community.',
      theme: 'light',
      grid: 'grid-cols-1 md:grid-cols-3',
      minImageHeight: 'min-h-[280px]',
      images: [
        { src: `${IMAGE_BASE}/8d59aba9e_WhatsAppImage2026-08-10at235706.jpeg`, alt: 'Rajiv Ahuja holding a framed plaque at his farewell event', label: 'Honoring Rajiv Ahuja' },
        { src: `${IMAGE_BASE}/d6492485e_WhatsAppImage2026-08-10at2357051.jpeg`, alt: 'Group of attendees posing at the Rajiv Ahuja farewell event', label: 'Group Photo' },
        { src: `${IMAGE_BASE}/b3f65fd39_WhatsAppImage2026-08-10at235705.jpeg`, alt: 'Community members gathered at the Rajiv Ahuja farewell', label: 'Community Gathering' },
      ],
    },
  ],
};