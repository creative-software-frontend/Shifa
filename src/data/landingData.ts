import type {
    NavLink, ServiceCard,
    Project, Testimonial, Stat, FooterColumn,
} from '../types';

// ── Local image imports ────────────────────────────────────────────────────
import img0 from '../assets/image/0.jfif';
import img1 from '../assets/image/1.jfif';
import img2 from '../assets/image/2.jfif';
import img3 from '../assets/image/3.jfif';
import img4 from '../assets/image/4.jfif';
import img5 from '../assets/image/5.jfif';
import img6 from '../assets/image/33.jfif';
import img7 from '../assets/image/7.jfif';
import img8 from '../assets/image/31.jfif';
import img9 from '../assets/image/32.jfif';

export { img0, img1, img2, img3, img4, img5, img6, img7, img8, img9 };

export const NAV_LINKS: NavLink[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Company', href: '#',
        children: [
            { label: 'Why Us', href: '/why-us' },
            { label: 'About Us', href: '/about' },
            { label: 'Our Teams', href: '/our-team' },
            { label: 'Career', href: '/careers' },
        ],
    },
    { label: 'Projects', href: '/projects' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
    { label: 'Download Brochure', href: '/download-brochure' },
];



export const SERVICES: ServiceCard[] = [
    {
        id: 1,
        icon: '🏨',
        title: 'Hotel',
        description: 'Premium 5-star hotel suites with guaranteed halal income and world-class hospitality services.',
        color: '#1a237e',
    },
    {
        id: 2,
        icon: '🏢',
        title: 'Apartment',
        description: 'Modern luxury apartments designed for comfortable urban living with premium facilities.',
        color: '#C9A84C',
    },
    {
        id: 3,
        icon: '🗺️',
        title: 'Land',
        description: 'Strategic land plots in prime locations — Cox\'s Bazar, Kuakata, and Padma riverside.',
        color: '#0288D1',
    },
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Padma Grand Hotel',
        location: 'Jazira, Padma Bridge',
        category: 'Hotel',
        image: img4,
        description: 'Situated near the Jazira point of the Padma bridge alongside the Dhaka-Vanga Expressway, the Hotel boasts unparalleled natural beauty.',
        tag: 'Featured',
    },
    {
        id: 2,
        name: 'Bay Sands Hotel',
        location: 'Cox\'s Bazar',
        category: 'Hotel',
        image: img5,
        description: 'World-class 5-star hotel suites at Cox\'s Bazar — the longest sea beach in the world.',
        tag: 'New',
    },
    {
        id: 3,
        name: 'Kuakata Hotel',
        location: 'Kuakata, Bay of Bengal',
        category: 'Hotel',
        image: img7,
        description: 'A natural paradise in the Bay of Bengal — where the sun rises and sets over the same sea.',
    },
    {
        id: 4,
        name: 'One City Residences',
        location: 'Dhaka',
        category: 'Apartment',
        image: img0,
        description: 'Premium urban apartments in the heart of Dhaka with modern amenities and smart living concepts.',
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Abu Nasar Md. Badrul Alam',
        role: 'Share Recuperation Limited',
        company: 'Investor',
        avatar: 'https://ui-avatars.com/api/?name=Abu+Nasar&background=1a237e&color=fff&size=80',
        rating: 5,
        badge: 'new',
        text: 'Shifa Properties Ltd Group provided us with the best hotel suite experience. Their service quality and management excellence is truly world-class.',
    },
    {
        id: 2,
        name: 'Shihab Shariar Khan',
        role: 'Proprietor, D-Eventz',
        company: 'Business Partner',
        avatar: 'https://ui-avatars.com/api/?name=Shihab+Khan&background=C9A84C&color=fff&size=80',
        rating: 5,
        badge: 'new',
        text: 'Shifa Properties Ltd\' projects are bringing beautiful international-standard hotels to Bangladesh. Their investments are highly profitable.',
    },
    {
        id: 3,
        name: 'Mr. Abdul Mahbud Chowdhury',
        role: 'Chairman & Coordinator',
        company: 'LM Partners',
        avatar: 'https://ui-avatars.com/api/?name=Abdul+Chowdhury&background=0288D1&color=fff&size=80',
        rating: 5,
        badge: 'new',
        text: 'Hotel registration process, coordination and overall transparency at Shifa Properties Ltd is phenomenal. I am very happy with their professionalism.',
    },
];

export const STATS: Stat[] = [
    { id: 1, value: '10+', label: 'Years Experience', icon: '🏆' },
    { id: 2, value: '5000+', label: 'Happy Investors', icon: '👥' },
    { id: 3, value: '15+', label: 'Active Projects', icon: '🏗️' },
    { id: 4, value: '3', label: 'Countries', icon: '🌍' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        title: 'Company',
        links: [
            { label: 'Why Us', href: '/why-us' },
            { label: 'About Us', href: '/about' },
            { label: 'Our Teams', href: '/our-team' },
            { label: 'Career', href: '/careers' },
        ],
    },
    {
        title: 'Projects',
        links: [
            { label: 'All Projects', href: '/projects' },
            { label: 'Hotels', href: '/projects' },
            { label: 'Apartments', href: '/projects' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'News Room', href: '/news' },
            { label: 'Download Brochure', href: '/download-brochure' },
            { label: 'CSR', href: '#' },
            { label: 'Contact Us', href: '/contact' },
        ],
    },
];

// ── News Articles ─────────────────────────────────────────────────────────



