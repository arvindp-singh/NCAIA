import { IMAGE_BASE } from './siteContent';

export const aboutPageContent = {
  header: {
    title: 'About NCAIA',
    subtitle:
      'Preserving Indian heritage, building community, and promoting cultural unity across the United States.',
  },
  mission: {
    title: 'Our Mission',
    paragraphs: [
      'Our mission is to preserve and promote the time-honored traditions, values, and cultural heritage of India while fostering unity, mutual respect, and stronger ties between Indian Americans and the broader American community.',
      'We serve our members through educational, cultural, charitable, leadership, and community initiatives that inspire service, strengthen relationships, and celebrate diversity.',
    ],
    image: {
      src: `${IMAGE_BASE}/1b9de6e95_generated_4d093b07.png`,
      alt: 'Traditional Indian cultural textures including lit diyas, silk fabric, and marigold flowers',
    },
  },
  whatWeDo: {
    badge: 'Our Programs',
    title: 'What We Do',
    cards: [
      { icon: 'Globe', title: 'Cultural Programs', desc: 'Organize educational, cultural, social, and charitable programs across the United States.', color: 'bg-saffron/10 text-saffron' },
      { icon: 'Music', title: 'Promote Indian Heritage', desc: 'Celebrate dance, music, art, cuisine, yoga, language, and traditions.', color: 'bg-emerald/10 text-emerald' },
      { icon: 'Sparkles', title: 'Festivals', desc: "Celebrate Holi, Diwali, Navaratri, Baisakhi, Eid, India's Independence Day, and Republic Day.", color: 'bg-brass/10 text-brass-dark' },
      { icon: 'Award', title: 'Community Recognition', desc: 'Honor achievers, community leaders, embassy officials, volunteers, and distinguished guests.', color: 'bg-navy/10 text-navy' },
      { icon: 'Heart', title: 'Philanthropy', desc: 'Support peace, non-violence, mental health, business growth, and community development.', color: 'bg-rose-50 text-rose-600' },
      { icon: 'Handshake', title: 'Partnerships', desc: 'Collaborate with nonprofits, cultural organizations, educational institutions, and local communities.', color: 'bg-saffron/10 text-saffron' },
      { icon: 'Users', title: 'Women & Youth Leadership', desc: "Advance Nari Shakti, women's empowerment, youth leadership, mentorship, and volunteerism.", color: 'bg-emerald/10 text-emerald' },
      { icon: 'GraduationCap', title: 'Education & Innovation', desc: 'Promote education, STEM, AI, digital advancement, sanitation, literacy, healthcare, and rural development.', color: 'bg-navy/10 text-navy' },
    ],
  },
  values: {
    badge: 'What Guides Us',
    title: 'Our Values',
    values: [
      { icon: 'Link2', label: 'Unity', color: 'from-saffron to-saffron-dark' },
      { icon: 'HeartHandshake', label: 'Inclusivity', color: 'from-emerald to-emerald-dark' },
      { icon: 'Flag', label: 'Cultural Pride', color: 'from-brass to-brass-dark' },
      { icon: 'Handshake', label: 'Service', color: 'from-navy to-navy-dark' },
      { icon: 'Leaf', label: 'Peace', color: 'from-emerald to-emerald-dark' },
      { icon: 'BookOpen', label: 'Respect for All Faiths & Languages', color: 'from-saffron to-brass-dark' },
    ],
    footer:
      'We are guided by secularism, inclusivity, service, cultural pride, unity, peace, and respect for every language, culture, and faith.',
  },
  impact: {
    badge: 'Making a Difference',
    title: 'Community Impact',
    areas: [
      { icon: 'ArrowLeftRight', title: 'Cultural Exchange', desc: 'Bridging traditions between India and America through festivals, arts, and shared experiences.' },
      { icon: 'GraduationCap', title: 'Education', desc: 'Supporting STEM, literacy, mentorship, and educational advancement for all generations.' },
      { icon: 'Trophy', title: 'Leadership Development', desc: 'Empowering community leaders, women, and youth to take charge and make a difference.' },
      { icon: 'HeartHandshake', title: 'Community Service', desc: 'Volunteering, philanthropy, and supporting underserved communities nationwide.' },
    ],
    paragraphs: [
      'NCAIA is committed to improving quality of life through cultural exchange, education, service, leadership, philanthropy, and cooperation.',
      'We also actively participate in and support celebrations of other cultures because stronger communities are built through understanding and mutual respect.',
    ],
  },
  leadership: {
    badge: 'Our Team',
    title: 'Leadership',
    term: 'NCAIA HQ-VA Board 2025-2027',
    subtitle: 'Dedicated leaders guiding our mission forward.',
    groups: [
      {
        icon: 'Crown',
        title: 'Executive Committee',
        members: [
          { name: 'Nayna Desai', role: 'Chairperson' },
          { name: 'Srinivas Tatipamula', role: 'President' },
          { name: 'Dr. Yogendra Gupta', role: 'Past President' },
          { name: 'Sashi Agrawal', role: 'Co-Chairperson' },
        ],
      },
      {
        icon: 'Users',
        title: 'Board Members',
        members: [
          { name: 'Rajaram Srinivasan', role: 'Executive Vice President' },
          { name: 'Raj Chudasma', role: 'Treasurer' },
          { name: 'Promila Gupta', role: 'Vice President – Organization' },
          { name: 'Jaya Telukuntla', role: 'Vice President – Community Affairs' },
          { name: 'Ramu Mundrathi', role: 'Vice President – Media' },
          { name: 'Meenal Singh', role: 'Vice President – Cultural' },
          { name: 'Nilam Chudasama', role: 'Vice President – Social Media' },
          { name: 'Divya Alamanda', role: 'General Secretary' },
          { name: 'Arvind Pratap Singh Jadon', role: 'Joint Secretary – IT' },
          { name: 'Ashwini Singh', role: 'Joint Secretary – Cultural' },
          { name: 'Neha Gupta', role: 'Joint Secretary – Comm. Affairs' },
          { name: 'Sunil Singh', role: 'Trustee Chairman' },
          { name: 'Kripa Shankar Singh', role: 'Trustee Co-Chair' },
          { name: 'BabuRao Samala', role: 'Trustee' },
          { name: 'Sardar Ratan Singh', role: 'Trustee' },
        ],
      },
      {
        icon: 'Lightbulb',
        title: 'Advisory Council',
        members: [
          { name: 'Sambhu Banik', role: 'Senior Advisor' },
          { name: 'Alok Srivastava', role: 'Senior Advisor' },
        ],
      },
    ],
  },
};