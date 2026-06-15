import {
  Brain,
  Sparkles,
  HeartHandshake,
  Wind,
  Activity,
  ShieldCheck,
  Flower2,
  Microscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const BRAND = {
  name: "Curamend",
  legal: "Curamend Healthcare",
  doctor: "Dr. Sunil Saldanha",
  tagline: "Science of the Soul. Healing of the Heart.",
  email: "curamendhealthcare@gmail.com",
  whatsapp: "919321931801",
  primaryPhone: "+91 9321 931801",
};

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Sessions", to: "/sessions" },
  { label: "Science", to: "/science" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
];

export type Stat = { value: number; suffix?: string; label: string; icon: LucideIcon };

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Clients Healed", icon: HeartHandshake },
  { value: 8, suffix: "+", label: "Years of Practice", icon: Activity },
  { value: 3, label: "Clinic Locations", icon: Flower2 },
  { value: 100, suffix: "%", label: "Science-Backed Methods", icon: Microscope },
];

export type ValueCard = {
  eyebrow: string;
  title: string;
  text: string;
  icon: LucideIcon;
  imageUrl: string;
};

export const VALUE_CARDS: ValueCard[] = [
  {
    eyebrow: "Evidence-Based",
    title: "Rooted in Neuroscience",
    text: "Our healing protocols draw from cognitive neuroscience, trauma therapy research, and psychosomatic medicine — validated by decades of clinical evidence.",
    icon: Brain,
    imageUrl: "/neuroscience.png",
  },
  {
    eyebrow: "Spiritually Grounded",
    title: "Ancient Wisdom Activated",
    text: "Integrating breathwork, energy psychology, and consciousness practices refined across millennia of human healing tradition.",
    icon: Sparkles,
    imageUrl: "/spiritual.png",
  },
  {
    eyebrow: "Personally Guided",
    title: "Direct Access to Dr. Saldhana",
    text: "Every session is personally led by Dr. Sunil Saldanha — no assistants, no substitutes. Your healing is his sole focus.",
    icon: HeartHandshake,
    imageUrl: "/guidance.png",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
};

export const SERVICES: Service[] = [
  {
    title: "Emotional Healing Sessions",
    description:
      "Our core offering — transformative group healing sessions held every Saturday for two hours, guiding you toward emotional freedom.",
    icon: HeartHandshake,
    imageUrl: "/service-1.png",
  },
  {
    title: "Individual Consultations",
    description:
      "Private, one-on-one healing sessions for those who need focused, personalised attention and a deeper therapeutic relationship.",
    icon: Sparkles,
    imageUrl: "/service-2.png",
  },
  {
    title: "Trauma Release",
    description:
      "Trauma-informed protocols that address emotional wounds at the root — combining somatic awareness and nervous-system regulation.",
    icon: ShieldCheck,
    imageUrl: "/service-3.png",
  },
  {
    title: "Mindfulness & Breathwork",
    description:
      "Breathwork-based emotional regulation practices that calm the nervous system and restore a felt sense of inner safety.",
    icon: Wind,
    imageUrl: "/service-4.png",
  },
  {
    title: "Energy Psychology",
    description:
      "Integrative energy-based techniques that release stored emotional charge and re-pattern the body's stress response.",
    icon: Activity,
    imageUrl: "/service-5.png",
  },
  {
    title: "Integration & Aftercare",
    description:
      "Structured follow-up and integration practices that help transformation hold long after the session ends.",
    icon: Flower2,
    imageUrl: "/service-6.png",
  },
];

export type Principle = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const SCIENCE_PRINCIPLES: Principle[] = [
  {
    title: "Neuroplasticity",
    text: "The brain physically rewires in response to experience. Guided healing creates the conditions for new, healthier emotional pathways to form.",
    icon: Brain,
  },
  {
    title: "Psychosomatic Connection",
    text: "Emotion lives in the body. We work with the mind–body loop, releasing tension patterns that conventional talk therapy often misses.",
    icon: Activity,
  },
  {
    title: "Trauma-Informed Care",
    text: "Every protocol is designed to keep the nervous system safe, preventing re-traumatisation while gently processing what's stored.",
    icon: ShieldCheck,
  },
  {
    title: "Energy Psychology",
    text: "Evidence-informed techniques that combine cognitive focus with somatic stimulation to discharge emotional intensity rapidly.",
    icon: Sparkles,
  },
];

export const METHODOLOGY_STEPS = [
  { title: "Assessment", text: "Understanding your emotional history and present-day patterns." },
  { title: "Protocol Design", text: "A tailored blend of scientific and spiritual modalities." },
  { title: "Session", text: "Guided two-hour healing work in a held, safe space." },
  { title: "Integration", text: "Practices that anchor the shift into daily life." },
  { title: "Outcome", text: "Measurable, lasting emotional freedom and clarity." },
];

export const PROCESS_STEPS = [
  { title: "Initial Consultation", text: "We listen deeply to where you are and where you long to be." },
  { title: "Assessment", text: "A clear, compassionate map of your emotional landscape." },
  { title: "Healing Protocol", text: "Personalised sessions built on science and spirit." },
  { title: "Integration", text: "Tools and practices to sustain your transformation." },
  { title: "Transformation", text: "A reclaimed sense of peace, presence and possibility." },
];

export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  {
    q: "When are sessions held?",
    a: "Group emotional healing sessions run every Saturday for two hours across all three Curamend locations. Exact timings are confirmed at booking.",
  },
  {
    q: "Do I need any prior experience?",
    a: "Not at all. Sessions are designed for complete beginners as well as those continuing a longer healing journey.",
  },
  {
    q: "Is this a replacement for medical treatment?",
    a: "Curamend complements, and does not replace, medical or psychiatric care. We're happy to work alongside your existing care team.",
  },
  {
    q: "Will Dr. Saldhana personally lead my session?",
    a: "Yes. Every session is personally led by Dr. Sunil Saldanha — no assistants, no substitutes.",
  },
  {
    q: "How many sessions will I need?",
    a: "This varies by individual. Many clients report meaningful clarity within the first few sessions; deeper work unfolds over time.",
  },
  {
    q: "How do I book?",
    a: "Use the booking form on our Contact page, or call us directly. Seats per session are limited.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  city: string;
  rating: number;
  date?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The emotional clarity I gained in just four sessions was more than years of conventional therapy provided. Dr. Saldhana's approach is unlike anything I've experienced.",
    name: "R. M.",
    city: "Mumbai",
    rating: 5,
    date: "Mar 2025",
  },
  {
    quote:
      "I arrived carrying years of grief I couldn't name. I left lighter, clearer, and finally able to breathe. The science behind it gave me trust; the warmth gave me healing.",
    name: "A. K.",
    city: "Thane",
    rating: 5,
    date: "Feb 2025",
  },
  {
    quote:
      "What sets Curamend apart is the honesty — no false promises, just careful, compassionate, evidence-based work. It changed my relationship with myself.",
    name: "S. D.",
    city: "Kalyan",
    rating: 5,
    date: "Jan 2025",
  },
  {
    quote:
      "Every Saturday became the hour I protected most. The group setting felt safe, and Dr. Saldhana's presence was steady and deeply reassuring.",
    name: "P. V.",
    city: "Ghatkopar",
    rating: 5,
    date: "Dec 2024",
  },
  {
    quote:
      "I was sceptical about anything 'spiritual'. The neuroscience grounding won me over, and then the results spoke for themselves.",
    name: "N. J.",
    city: "Mumbai",
    rating: 5,
    date: "Nov 2024",
  },
  {
    quote:
      "After my divorce I felt numb. The breathwork and trauma release work slowly brought me back to life. I'm endlessly grateful.",
    name: "T. R.",
    city: "Thane",
    rating: 5,
    date: "Oct 2024",
  },
  {
    quote:
      "Professional, calm, and genuinely transformative. This is healthcare done with heart and rigour at once.",
    name: "M. S.",
    city: "Kalyan",
    rating: 5,
    date: "Sep 2024",
  },
  {
    quote:
      "I've recommended Curamend to my entire family. The integration practices kept the changes alive long after the sessions ended.",
    name: "K. B.",
    city: "Ghatkopar",
    rating: 5,
    date: "Aug 2024",
  },
  {
    quote:
      "The most human, intelligent healing experience I've had. Dr. Saldhana sees you — really sees you.",
    name: "L. F.",
    city: "Mumbai",
    rating: 5,
    date: "Jul 2024",
  },
];

export type Location = {
  id: string;
  name: string;
  phones: string[];
  address: string;
  mapsQuery: string;
};

export const LOCATIONS: Location[] = [
  {
    id: "thane",
    name: "Thane",
    phones: ["+91-9321931801", "+91-9321931802"],
    address:
      "107, Centrum, Plot No. C-8, Near Satkar Hotel, Wagle Estate, Thane (W) - 400604",
    mapsQuery: "Centrum, Wagle Estate, Thane West 400604",
  },
  {
    id: "ghatkopar",
    name: "Ghatkopar",
    phones: ["+91-8452801143", "+91-9326338924"],
    address:
      "Damji Shamji Corporate Square, Office No. C-802 to 805, Laxmi Nagar, Ghatkopar East, Mumbai - 400075",
    mapsQuery: "Damji Shamji Corporate Square, Ghatkopar East, Mumbai 400075",
  },
  {
    id: "kalyan",
    name: "Kalyan",
    phones: ["+91-8291817475"],
    address:
      "Shop No. 9 & 10, B-Wing, Mohan Tribeca, Near K.M. Agrawal College, Gandhari, Kalyan West - 421301",
    mapsQuery: "Mohan Tribeca, Gandhari, Kalyan West 421301",
  },
];

export const SESSION_INCLUDES = [
  { title: "Guided Healing", text: "Two hours of personally-led emotional healing work." },
  { title: "Breathwork", text: "Nervous-system regulation through guided breath." },
  { title: "Safe Group Container", text: "Small groups held in a confidential space." },
  { title: "Integration Tools", text: "Take-home practices to sustain your shift." },
  { title: "Personal Attention", text: "Direct guidance from Dr. Saldhana throughout." },
  { title: "Aftercare", text: "Follow-up guidance between sessions." },
];

export const SESSION_FACTS = [
  { label: "Every Saturday", icon: "calendar" },
  { label: "2 Hours", icon: "clock" },
  { label: "3 Locations", icon: "pin" },
  { label: "Small Groups", icon: "users" },
];
