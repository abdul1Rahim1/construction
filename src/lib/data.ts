export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Feed", href: "/feed" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 14, suffix: "+", label: "Years of Experience", icon: "🏗️" },
  { value: 10, suffix: "", label: "Architects", icon: "📐" },
  { value: 12, suffix: "", label: "Engineers", icon: "⚙️" },
  { value: 80, suffix: "+", label: "Skilled Labourers", icon: "👷" },
  { value: 160, suffix: "+", label: "Projects Delivered", icon: "🏢" },
];

export type Project = {
  slug: string;
  title: string;
  category: "Government" | "Private";
  location: string;
  year: string;
  image: string;
  tagline: string;
  client: string;
  duration: string;
  scale: string;
  value: string;
  hero: string;
  story: {
    challenge: string;
    approach: string;
    impact: string;
  };
  highlights: string[];
  gallery: string[];
  metrics: { label: string; value: string }[];
  quote: { text: string; author: string; role: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "minnal-m-mahal",
    title: "Minnal M Mahal",
    category: "Private",
    location: "Coimbatore, Tamil Nadu",
    year: "2023",
    image: "/images/minnal_mahal/minnal-lobby.jpeg",
    hero: "/images/minnal_mahal/minnal-hall.jpeg",
    tagline:
      "A landmark marriage hall built for grand celebrations, delivered with precision engineering and premium finishing.",
    client: "Private Client",
    duration: "10 months",
    scale: "2 banquet halls · 1,200-guest capacity",
    value: "₹14 Cr",
    story: {
      challenge:
        "The brief called for a marriage hall that could comfortably host large Tamil Nadu weddings — flexible seating for over a thousand guests, clear sightlines and a grand entrance, all on a tight urban plot.",
      approach:
        "Our engineering team designed a column-free banquet hall using long-span RCC beams, paired with a spacious porch, a dedicated catering block and ample parking. Finishing teams focused on durable, elegant materials suited to daily heavy footfall.",
      impact:
        "Minnal M Mahal opened on schedule and has since hosted hundreds of weddings and functions, becoming one of the region's preferred venues for large gatherings.",
    },
    highlights: [
      "Column-free banquet hall for uninterrupted seating",
      "1,200+ guest capacity across two halls",
      "Dedicated catering and parking blocks",
      "Delivered on schedule with zero safety incidents",
    ],
    gallery: [
      "/images/minnal_mahal/minnal-ceiling.jpeg",
      "/images/minnal_mahal/minnal-entrance.jpeg",
      "/images/minnal_mahal/minnal-corridor.jpeg",
      "/images/minnal_mahal/minnal-lights.jpeg",
      "/images/minnal_mahal/minnal-walkway.jpeg",
    ],
    metrics: [
      { label: "Guest Capacity", value: "1,200+" },
      { label: "Halls", value: "2" },
      { label: "Duration", value: "10 months" },
      { label: "Built-up Area", value: "45,000 sqft" },
    ],
    quote: {
      text: "Our marriage hall project was completed with exceptional workmanship, timely delivery and excellent coordination throughout construction.",
      author: "Minnal M Mahal",
      role: "Marriage Hall · Coimbatore",
    },
  },
  {
    slug: "thangasaras-kalyana-mandapam",
    title: "Thangasaras Kalyana Mandapam",
    category: "Private",
    location: "Coimbatore, Tamil Nadu",
    year: "2022",
    image: "https://images.pexels.com/photos/17206153/pexels-photo-17206153.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hero: "https://images.pexels.com/photos/17206153/pexels-photo-17206153.jpeg?auto=compress&cs=tinysrgb&w=2400",
    tagline:
      "A traditional kalyana mandapam reimagined with modern structural planning and timeless finishing.",
    client: "Private Client",
    duration: "9 months",
    scale: "1 grand hall · 900-guest capacity",
    value: "₹9.5 Cr",
    story: {
      challenge:
        "The client wanted a mandapam that honoured traditional South Indian wedding rituals while offering modern comfort — proper ventilation, ample stage space and easy vehicle access for large families arriving together.",
      approach:
        "We planned a high-ceiling hall with a raised traditional stage, wide colonnades and a naturally ventilated design to reduce dependence on mechanical cooling. Structural works were sequenced to finish ahead of the peak wedding season.",
      impact:
        "The mandapam was handed over ahead of the wedding season and continues to host kalyana functions, naming ceremonies and community events throughout the year.",
    },
    highlights: [
      "Traditional stage design with modern structural detailing",
      "900-guest capacity hall",
      "Naturally ventilated design",
      "Completed ahead of wedding season",
    ],
    gallery: [
      "https://images.pexels.com/photos/16043728/pexels-photo-16043728.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/27333845/pexels-photo-27333845.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/17057001/pexels-photo-17057001.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    metrics: [
      { label: "Guest Capacity", value: "900+" },
      { label: "Halls", value: "1" },
      { label: "Duration", value: "9 months" },
      { label: "Built-up Area", value: "32,000 sqft" },
    ],
    quote: {
      text: "The mandapam construction was handled with great respect for tradition alongside modern quality standards and timely completion.",
      author: "Thangasaras Kalyana Mandapam",
      role: "Marriage Hall · Coimbatore",
    },
  },
  {
    slug: "valliyammal-mahal",
    title: "Valliyammal Mahal",
    category: "Private",
    location: "Pollachi, Tamil Nadu",
    year: "2024",
    image: "https://images.pexels.com/photos/17606660/pexels-photo-17606660.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hero: "https://images.pexels.com/photos/17606660/pexels-photo-17606660.jpeg?auto=compress&cs=tinysrgb&w=2400",
    tagline:
      "A community marriage hall delivering dependable quality and comfort for families across the region.",
    client: "Private Client",
    duration: "11 months",
    scale: "2 halls · 1,000-guest capacity",
    value: "₹11 Cr",
    story: {
      challenge:
        "Valliyammal Mahal needed to serve as a dependable, affordable venue for local families — durable construction, straightforward maintenance and enough flexibility to host multiple events on the same day.",
      approach:
        "We used robust RCC framing, low-maintenance flooring and finishes, and a layout that allows two functions to run independently without disturbing each other. Site work was closely supervised by our engineering team throughout.",
      impact:
        "Valliyammal Mahal has become a trusted venue for weddings and family functions, valued for its upkeep and reliability since handover.",
    },
    highlights: [
      "Two independent halls for simultaneous events",
      "1,000-guest combined capacity",
      "Low-maintenance, durable finishing",
      "Close engineering supervision throughout construction",
    ],
    gallery: [
      "https://images.pexels.com/photos/28976220/pexels-photo-28976220.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/28976226/pexels-photo-28976226.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/19351562/pexels-photo-19351562.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    metrics: [
      { label: "Guest Capacity", value: "1,000+" },
      { label: "Halls", value: "2" },
      { label: "Duration", value: "11 months" },
      { label: "Built-up Area", value: "38,000 sqft" },
    ],
    quote: {
      text: "The entire construction process was managed professionally with dependable quality and timely handover.",
      author: "Valliyammal Mahal",
      role: "Marriage Hall · Pollachi",
    },
  },
  {
    slug: "funmall",
    title: "Funmall",
    category: "Private",
    location: "Coimbatore, Tamil Nadu",
    year: "2023",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
    tagline:
      "A modern retail and entertainment mall built to anchor the neighbourhood's commercial growth.",
    client: "Private Client",
    duration: "18 months",
    scale: "3 retail floors · multiplex & food court",
    value: "₹95 Cr",
    story: {
      challenge:
        "Funmall required a structure that could support a multi-brand retail mix, a multiplex and a busy food court — meaning wide clear spans, heavy floor loading and complex MEP coordination across three floors.",
      approach:
        "Our structural team designed wide-span RCC framing to keep retail floors column-light, while MEP and fire-safety systems were coordinated early with all anchor tenants to avoid rework. Site logistics were phased to keep the surrounding road network clear throughout construction.",
      impact:
        "Funmall opened on schedule and now operates as a busy retail and entertainment destination, with all major systems performing to design from day one.",
    },
    highlights: [
      "Column-light retail floors on wide-span RCC framing",
      "Multiplex and food court integrated into the base build",
      "Early MEP coordination with anchor tenants",
      "Zero disruption to the surrounding road network during construction",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80",
    ],
    metrics: [
      { label: "Retail Floors", value: "3" },
      { label: "Duration", value: "18 months" },
      { label: "Built-up Area", value: "3.6L sqft" },
      { label: "Parking Bays", value: "400+" },
    ],
    quote: {
      text: "The entire commercial construction process was professionally managed with quality workmanship and consistent communication.",
      author: "Funmall",
      role: "Commercial Mall · Coimbatore",
    },
  },
  {
    slug: "itc-welcomhotel",
    title: "ITC WelcomHotel",
    category: "Private",
    location: "Coimbatore, Tamil Nadu",
    year: "2022",
    image: "/images/itc_welcomhotel/itc-exterior.jpeg",
    hero: "/images/itc_welcomhotel/itc-aerial.jpeg",
    tagline:
      "A premium hospitality build delivered to the exacting quality and finishing standards of a national hotel brand.",
    client: "ITC WelcomHotel",
    duration: "24 months",
    scale: "Multi-storey hotel tower · banquet & guest wings",
    value: "₹140 Cr",
    story: {
      challenge:
        "A hotel build of this stature demanded strict adherence to brand specifications — from structural tolerances to finishing quality — across guest rooms, banquet spaces and back-of-house services, with no room for compromise on safety or schedule.",
      approach:
        "We assigned senior engineers to run continuous quality audits against brand specifications, sequenced guest-room and banquet-wing construction in parallel, and maintained rigorous safety protocols across the site through to handover.",
      impact:
        "The hotel was delivered to the brand's exacting finishing standards and is now operational, reflecting Skandha Constructions' capability to deliver at a national hospitality standard.",
    },
    highlights: [
      "Construction executed to national hotel brand specifications",
      "Parallel guest-wing and banquet-wing delivery",
      "Continuous quality audits throughout the build",
      "Zero compromise on safety through handover",
    ],
    gallery: [
      "/images/itc_welcomhotel/itc-corridor.jpeg",
    ],
    metrics: [
      { label: "Duration", value: "24 months" },
      { label: "Category", value: "Hospitality" },
      { label: "Quality Audits", value: "Continuous" },
      { label: "Status", value: "Completed" },
    ],
    quote: {
      text: "The project was delivered with great attention to quality, safety and finishing standards.",
      author: "ITC WelcomHotel",
      role: "Hospitality · Coimbatore",
    },
  },
  {
    slug: "pwd-projects",
    title: "PWD Projects",
    category: "Government",
    location: "Tamil Nadu, India",
    year: "2021–2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2400&q=80",
    tagline:
      "Multiple Public Works Department contracts delivered across Tamil Nadu — roads, public buildings and civic infrastructure.",
    client: "Public Works Department (PWD)",
    duration: "Ongoing multi-year partnership",
    scale: "Multiple roads & civic works",
    value: "Multiple contracts",
    story: {
      challenge:
        "Government infrastructure work demands strict compliance — tendering norms, quality audits, safety protocols and public accountability — delivered on tight civic timelines with minimal disruption to daily public use.",
      approach:
        "Our project management team follows PWD specifications and inspection schedules closely, deploying senior engineers on every contract and maintaining transparent documentation and reporting at every milestone.",
      impact:
        "Skandha Constructions remains an empanelled contractor for the Public Works Department, having delivered multiple road and civic infrastructure contracts across Tamil Nadu to specification and on schedule.",
    },
    highlights: [
      "Empanelled Public Works Department contractor",
      "Multiple roads and civic works completed",
      "Strict adherence to government quality and safety norms",
      "Transparent milestone reporting on every contract",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1600&q=80",
    ],
    metrics: [
      { label: "Contract Type", value: "Government" },
      { label: "Sector", value: "Roads & Civic" },
      { label: "Status", value: "Ongoing" },
      { label: "Region", value: "Tamil Nadu" },
    ],
    quote: {
      text: "Government project execution was handled with full transparency, safety compliance and consistent quality across every contract.",
      author: "PWD Projects",
      role: "Government · Tamil Nadu",
    },
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our marriage hall project was completed with exceptional workmanship, timely delivery and excellent coordination throughout construction.",
    project: "Minnal M Mahal",
  },
  {
    quote:
      "The mandapam construction was handled with great respect for tradition alongside modern quality standards and timely completion.",
    project: "Thangasaras Kalyana Mandapam",
  },
  {
    quote:
      "The entire construction process was managed professionally with dependable quality and timely handover.",
    project: "Valliyammal Mahal",
  },
  {
    quote:
      "The entire commercial construction process was professionally managed with quality workmanship and consistent communication.",
    project: "Funmall",
  },
  {
    quote:
      "The project was delivered with great attention to quality, safety and finishing standards.",
    project: "ITC WelcomHotel",
  },
];

export const CLIENTS = [
  "Minnal M Mahal",
  "Thangasaras Kalyana Mandapam",
  "Valliyammal Mahal",
  "PWD",
  "Funmall",
  "ITC WelcomHotel",
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Vision",
    desc: "We sit down with stakeholders to map ambition, budget and constraints into a single clear brief.",
  },
  {
    step: "02",
    title: "Engineering & Design",
    desc: "Senior engineers and architects translate vision into precision blueprints and 3D walkthroughs.",
  },
  {
    step: "03",
    title: "Mobilization",
    desc: "Crews, machinery and materials are deployed with military-grade logistics and safety standards.",
  },
  {
    step: "04",
    title: "Build & Handover",
    desc: "Transparent reporting, weekly walkthroughs, and a polished handover that exceeds expectations.",
  },
];

// ─── NEW: Portfolio Projects for Residential & Commercial tabs ───────────────

export type PortfolioStatus = "Ongoing" | "Completed";

export type PortfolioProject = {
  id: number;
  name: string;
  location: string;
  type: string;
  status: PortfolioStatus;
  image: string;
};

export const RESIDENTIAL_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    name: "Sakthi Nagar Villas",
    location: "Coimbatore, Tamil Nadu",
    type: "Independent Villas",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sunrise Residency",
    location: "Palladam, Tamil Nadu",
    type: "Multi-Storey Apartments",
    status: "Ongoing",
    image: "https://images.pexels.com/photos/31865990/pexels-photo-31865990.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Independent House Construction",
    location: "Coimbatore, Tamil Nadu",
    type: "Independent House",
    status: "Ongoing",
    image: "/images/ongoing_projects/house2-front.jpeg",
  },
  {
    id: 4,
    name: "Residential Quarters",
    location: "Coimbatore, Tamil Nadu",
    type: "Row Houses",
    status: "Ongoing",
    image: "/images/ongoing_projects/quarters-night2.jpeg",
  },
];

export const COMMERCIAL_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    name: "Minnal M Mahal",
    location: "Coimbatore, Tamil Nadu",
    type: "Marriage Hall & Banquet Venue",
    status: "Completed",
    image: "/images/minnal_mahal/minnal-lobby.jpeg",
  },
  {
    id: 2,
    name: "Thangasaras Kalyana Mandapam",
    location: "Coimbatore, Tamil Nadu",
    type: "Kalyana Mandapam",
    status: "Completed",
    image: "https://images.pexels.com/photos/17206153/pexels-photo-17206153.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Valliyammal Mahal",
    location: "Pollachi, Tamil Nadu",
    type: "Community Marriage Hall",
    status: "Completed",
    image: "https://images.pexels.com/photos/17606660/pexels-photo-17606660.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "ITC WelcomHotel",
    location: "Coimbatore, Tamil Nadu",
    type: "5-Star Hospitality",
    status: "Completed",
    image: "/images/itc_welcomhotel/itc-exterior.jpeg",
  },
  {
    id: 5,
    name: "Industrial Shed Construction",
    location: "Coimbatore, Tamil Nadu",
    type: "Industrial Shed & Warehouse",
    status: "Ongoing",
    image: "/images/ongoing_projects/shed-aisle2.jpeg",
  },
  {
    id: 6,
    name: "Coimbatore Corporation School",
    location: "Coimbatore, Tamil Nadu",
    type: "Government School Building",
    status: "Completed",
    image: "/images/coimbatore_corporation_school/school-facade.jpeg",
  },
];

export type ProgressPhoto = { src: string; alt: string };

export const CONSTRUCTION_PROGRESS_GALLERY: ProgressPhoto[] = [
  { src: "/images/ongoing_projects/house1-front.jpeg", alt: "Independent house under construction, RCC frame stage" },
  { src: "/images/ongoing_projects/house1-side.jpeg", alt: "Independent house under construction, side view" },
  { src: "/images/ongoing_projects/house2-side.jpeg", alt: "Independent house under construction with brick infill" },
  { src: "/images/ongoing_projects/shed-aisle1.jpeg", alt: "Industrial shed construction, interior aisle" },
  { src: "/images/ongoing_projects/quarters-night1.jpeg", alt: "Residential quarters under construction" },
  { src: "/images/ongoing_projects/quarters-finished1.jpeg", alt: "Residential quarters nearing completion" },
  { src: "/images/ongoing_projects/quarters-finished2.jpeg", alt: "Residential quarters nearing completion, wide view" },
  { src: "/images/ongoing_projects/quarters-finished3.jpeg", alt: "Residential quarters nearing completion, evening view" },
  { src: "/images/ongoing_projects/quarters-finished4.jpeg", alt: "Residential quarters nearing completion, corner view" },
  { src: "/images/construction_progress/progress1.jpeg", alt: "Small building under construction with brick and RCC framing" },
  { src: "/images/construction_progress/progress3.jpeg", alt: "Combined footing concrete work at a small building site" },
  { src: "/images/construction_progress/progress5.png", alt: "Workers plastering a small house on bamboo scaffolding" },
  { src: "/images/construction_progress/progress6.png", alt: "Small house facade under construction with bamboo scaffolding" },
  { src: "/images/construction_progress/progress2.jpeg", alt: "Small house nearing completion with worker on the terrace" },
  { src: "/images/construction_progress/progress4.png", alt: "Completed small house with gated compound" },
  { src: "https://images.pexels.com/photos/20339280/pexels-photo-20339280.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Rebar reinforcement mesh laid across a foundation slab" },
  { src: "https://images.pexels.com/photos/14422688/pexels-photo-14422688.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Worker carrying cement at a small building construction site in India" },
  { src: "https://images.pexels.com/photos/16468074/pexels-photo-16468074.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Worker laying bricks at a small house construction site" },
  { src: "https://images.pexels.com/photos/13890649/pexels-photo-13890649.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Workers on scaffolding at a small building construction site in India" },
];
