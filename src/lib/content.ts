import {
  Baby,
  BookOpen,
  Brain,
  Users,
  Sprout,
  GraduationCap,
  Megaphone,
  FlaskConical,
  HeartHandshake,
  Music,
  Leaf,
  Apple,
  Activity,
  Globe2,
  Video,
  BookMarked,
  MessageCircleHeart,
  HandHeart,
  Building2,
  Handshake,
  UserCheck,
  Compass,
} from "lucide-react";

export const garbhSanskarBasics = [
  {
    icon: Sprout,
    title: "Before Conception",
    hindi: "गर्भधारण से पूर्व",
    body: "Preparing body, mind and home environment together as a couple, months before pregnancy begins.",
  },
  {
    icon: Baby,
    title: "Pregnancy Journey",
    hindi: "गर्भावस्था यात्रा",
    body: "Month-by-month learning on diet, rest, movement, emotions and daily rhythm.",
  },
  {
    icon: MessageCircleHeart,
    title: "Garbh Samvad",
    hindi: "गर्भ संवाद",
    body: "Conscious communication with the unborn child through voice, music, reading and stillness.",
  },
  {
    icon: Users,
    title: "Family & Environment",
    hindi: "परिवार एवं वातावरण",
    body: "The father, family and surroundings shape the experience of the mother and the child.",
  },
];

export const timeline = [
  { label: "Pre-Conception", hindi: "गर्भधारण पूर्व" },
  { label: "Pregnancy", hindi: "गर्भावस्था" },
  { label: "Birth", hindi: "जन्म" },
  { label: "Early Life", hindi: "प्रारंभिक जीवन" },
  { label: "Future Generation", hindi: "भावी पीढ़ी" },
];

export const pillars = [
  {
    icon: BookOpen,
    title: "Education",
    hindi: "शिक्षा",
    body: "Structured, accessible learning on Garbh Sanskar for families everywhere.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    hindi: "प्रशिक्षण",
    body: "Capacity building of Preraks, educators and facilitators.",
  },
  {
    icon: Megaphone,
    title: "Awareness",
    hindi: "जनजागरण",
    body: "Community programmes that carry knowledge to every village and city.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    hindi: "अनुसंधान",
    body: "Evidence-oriented study, documentation and academic collaboration.",
  },
  {
    icon: HeartHandshake,
    title: "Social Transformation",
    hindi: "सामाजिक परिवर्तन",
    body: "Stronger families, compassionate society, responsible generations.",
  },
];

export const journeys = [
  {
    title: "Planning Pregnancy",
    body: "Begin with preconception learning as a couple.",
    steps: ["Preconception", "Garbhadhana", "Classes", "Ask Shree"],
    to: "/learn",
  },
  {
    title: "I Am Pregnant",
    body: "Month-wise learning on diet, yoga, music and Garbh Samvad.",
    steps: ["Select month", "Daily practice", "Classes", "Ask Shree"],
    to: "/knowledge",
  },
  {
    title: "For Fathers & Families",
    body: "Understand the role of the father and the household.",
    steps: ["Understand", "Participate", "Support"],
    to: "/learn",
  },
  {
    title: "For Educators",
    body: "Teach Garbh Sanskar with structured curriculum and material.",
    steps: ["Foundation course", "Faculty track", "Teach"],
    to: "/courses",
  },
  {
    title: "For Social Workers",
    body: "Carry awareness into communities as a trained Prerak.",
    steps: ["Learn", "Prerak training", "Serve society"],
    to: "/join",
  },
  {
    title: "For Researchers",
    body: "Explore evidence, publications and collaboration.",
    steps: ["Research", "Publications", "Collaborate"],
    to: "/research",
  },
];

export const knowledgeArticles = [
  {
    category: "Foundations",
    title: "What is Garbh Sanskar?",
    readTime: "6 min read",
    body: "An introduction to intra-uterine nurturing as an educational and cultural practice.",
  },
  {
    category: "Pregnancy",
    title: "Pregnancy Month-by-Month",
    readTime: "12 min read",
    body: "What to learn, practise and observe through each month of the journey.",
  },
  {
    category: "Practice",
    title: "Garbh Samvad",
    readTime: "5 min read",
    body: "Simple daily ways of communicating with the unborn child.",
  },
  {
    category: "Science",
    title: "Science & Research",
    readTime: "9 min read",
    body: "How epigenetics and prenatal psychology inform our educational approach.",
  },
  {
    category: "Nutrition",
    title: "Sattvic Diet Through Pregnancy",
    readTime: "7 min read",
    body: "Traditional food wisdom read alongside contemporary nutrition guidance.",
  },
  {
    category: "Family",
    title: "The Role of the Father",
    readTime: "4 min read",
    body: "Participation, patience and emotional steadiness within the household.",
  },
  {
    category: "Practice",
    title: "Yoga, Breath & Stillness",
    readTime: "8 min read",
    body: "Gentle practices suited to different stages, to be learned under guidance.",
  },
  {
    category: "Culture",
    title: "Sanskars Through the Ages",
    readTime: "10 min read",
    body: "Cultural continuity of nurturing rituals across Indian traditions.",
  },
];

export const knowledgeCategories = [
  "All",
  "Foundations",
  "Pregnancy",
  "Practice",
  "Science",
  "Nutrition",
  "Family",
  "Culture",
];

export const freeServices = [
  {
    icon: Video,
    title: "Free Online Classes",
    hindi: "नि:शुल्क ऑनलाइन कक्षाएँ",
    body: "Weekly live sessions in Hindi and English, open to every family.",
  },
  {
    icon: BookOpen,
    title: "Free Educational Videos",
    hindi: "शैक्षणिक वीडियो",
    body: "A growing library of short, practical learning videos.",
  },
  {
    icon: Compass,
    title: "Free Guidance",
    hindi: "नि:शुल्क मार्गदर्शन",
    body: "Educational guidance sessions to help you find the right learning path.",
  },
  {
    icon: Megaphone,
    title: "Community Awareness",
    hindi: "सामुदायिक जनजागरण",
    body: "Village, school and institution programmes led by trained volunteers.",
  },
  {
    icon: BookMarked,
    title: "Books & Publications",
    hindi: "पुस्तकें एवं प्रकाशन",
    body: "Bilingual booklets and reference material for families and educators.",
  },
];

// Shared free video library — reused on the homepage teaser and the Free Services page
export const freeVideos = [
  {
    id: "J27Wc4r5yA0",
    youtubeId: "J27Wc4r5yA0",
    title: "Introduction to Garbh Sanskar",
    hindi: "गर्भ संस्कार का परिचय",
    desc: "A foundational overview of conscious prenatal nurturing, Vedic traditions & modern science.",
    duration: "14:20",
    category: "Foundations",
  },
  {
    id: "N1_S7CjPz8k",
    youtubeId: "N1_S7CjPz8k",
    title: "Garbh Samvad — Talking to Your Baby",
    hindi: "गर्भ संवाद साधना",
    desc: "Daily guide on how to establish a deep, loving connection with your unborn child.",
    duration: "18:45",
    category: "Practice",
  },
  {
    id: "2OEL4P1rub0",
    youtubeId: "2OEL4P1rub0",
    title: "Music & Mantra in Pregnancy",
    hindi: "गर्भावस्था में संगीत और मंत्र",
    desc: "The science and tradition behind acoustic resonance and Vedic mantras during pregnancy.",
    duration: "25:10",
    category: "Music & Mantras",
  },
  {
    id: "ws_4kFm5mZg",
    youtubeId: "ws_4kFm5mZg",
    title: "First 1,000 Days & Epigenetics",
    hindi: "प्रथम 1000 दिन एवं एपिजेनेटिक्स",
    desc: "Scientific research on how prenatal atmosphere and maternal state shape fetal brain growth.",
    duration: "12:30",
    category: "Science",
  },
  {
    id: "dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    title: "Nutrition & Sattvic Diet",
    hindi: "पोषण और सात्विक आहार",
    desc: "Dietary principles for a healthy pregnancy rooted in Ayurveda.",
    duration: "15:00",
    category: "Nutrition",
  },
  {
    id: "dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    title: "Role of the Father in Garbh Sanskar",
    hindi: "पिता की भूमिका",
    desc: "Why the father's involvement is central to the practice.",
    duration: "16:15",
    category: "Family",
  },
  {
    id: "dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    title: "Prenatal Yoga & Pranayama",
    hindi: "प्रसव-पूर्व योग",
    desc: "Safe breathing and movement practices for every trimester.",
    duration: "20:00",
    category: "Wellness",
  },
];

export const courses = [
  {
    title: "Foundation Course in Garbh Sanskar",
    format: "Online",
    duration: "6 weeks",
    level: "Open to all learners",
    body: "Core concepts, cultural roots and contemporary understanding of conscious nurturing.",
  },
  {
    title: "Pregnant Couple Education",
    format: "Live + recorded",
    duration: "9 modules",
    level: "For expecting couples",
    body: "Month-wise learning for the couple, covering routine, diet, samvad and family support.",
  },
  {
    title: "Prerak Training Programme",
    format: "Hybrid",
    duration: "12 weeks",
    level: "For volunteers & social workers",
    body: "Training to carry awareness into communities responsibly and respectfully.",
  },
  {
    title: "Recorded Classes Library",
    format: "Self-paced",
    duration: "Ongoing",
    level: "All levels",
    body: "Revisit sessions any time, in Hindi and English, at your own rhythm.",
  },
  {
    title: "Educator Certification",
    format: "Assessed",
    duration: "16 weeks",
    level: "For faculty track",
    body: "Structured assessment and mentorship for those who wish to teach.",
  },
];

export const researchTopics = [
  {
    field: "Molecular biology",
    topic: "Epigenetics",
    summary: "How environment and lifestyle may influence gene expression during development.",
  },
  {
    field: "Developmental science",
    topic: "Fetal Development",
    summary: "Stage-wise growth of sensory, motor and neurological capacities.",
  },
  {
    field: "Psychology",
    topic: "Prenatal Psychology",
    summary: "Studies on responsiveness of the fetus to voice, rhythm and emotional context.",
  },
  {
    field: "Public health",
    topic: "Maternal Stress",
    summary: "Literature on stress, support systems and maternal wellbeing.",
  },
  {
    field: "Nutrition science",
    topic: "Nutrition",
    summary: "Dietary patterns during pregnancy and their documented associations.",
  },
  {
    field: "Mind-body practice",
    topic: "Yoga & Meditation",
    summary: "Reviews of gentle movement and breath practices in maternal care.",
  },
  {
    field: "Neuroscience",
    topic: "Music & Fetal Response",
    summary: "Observed responses to sound and music in the third trimester.",
  },
];

export const joinRoles = [
  {
    icon: HandHeart,
    title: "Become a Prerak",
    body: "Trained community educators who carry Garbh Sanskar awareness to families.",
  },
  {
    icon: Users,
    title: "Volunteer",
    body: "Contribute time and skills to programmes, translation, media or events.",
  },
  {
    icon: GraduationCap,
    title: "Become Faculty",
    body: "Teach within our courses after completing the certification track.",
  },
  {
    icon: UserCheck,
    title: "Become Consultant",
    body: "Qualified professionals supporting families with educational guidance.",
  },
  {
    icon: Building2,
    title: "Institutional Collaboration",
    body: "Universities, hospitals and cultural institutions working with us.",
  },
  {
    icon: Handshake,
    title: "CSR Collaboration",
    body: "Partner to take free education to underserved communities.",
  },
];

export const testimonials = [
  {
    group: "Couples",
    quote:
      "We began learning nine months before planning our family. The classes helped us build a calmer, more conscious home.",
    name: "Anita & Rohit",
    role: "Learners, Indore",
  },
  {
    group: "Students",
    quote:
      "The foundation course connected cultural understanding with what I was reading in developmental science.",
    name: "Meera K.",
    role: "Postgraduate student, Pune",
  },
  {
    group: "Volunteers",
    quote:
      "As a Prerak I now hold monthly awareness sessions in three villages. The material is respectful and easy to share.",
    name: "Suresh P.",
    role: "Prerak, Madhya Pradesh",
  },
  {
    group: "Faculty",
    quote:
      "What I value most is the insistence on responsible, educational language — no promises, only learning.",
    name: "Dr. Kavita S.",
    role: "Faculty, Garbh Sanskar education",
  },
];

export const learnTopics = [
  {
    icon: BookOpen,
    title: "What is Garbh Sanskar?",
    hindi: "गर्भ संस्कार क्या है?",
    body: "The idea, its cultural roots and its place in modern family life.",
  },
  {
    icon: Sprout,
    title: "Pre-Conception",
    hindi: "गर्भधारण से पूर्व",
    body: "Preparation of body, mind and environment before pregnancy.",
  },
  {
    icon: Baby,
    title: "Pregnancy Journey",
    hindi: "गर्भावस्था यात्रा",
    body: "Month-by-month learning, routine and reflection.",
  },
  {
    icon: MessageCircleHeart,
    title: "Garbh Samvad",
    hindi: "गर्भ संवाद",
    body: "Conscious communication with the unborn child.",
  },
  {
    icon: Users,
    title: "Father & Family",
    hindi: "पिता एवं परिवार",
    body: "Shared responsibility within the household.",
  },
  {
    icon: Leaf,
    title: "Ayurveda & Lifestyle",
    hindi: "आयुर्वेद एवं जीवनशैली",
    body: "Traditional lifestyle wisdom, read responsibly.",
  },
  {
    icon: Apple,
    title: "Postnatal Care",
    hindi: "प्रसवोत्तर देखभाल",
    body: "Nurturing continues after birth, for mother and child.",
  },
];

export const practiceIcons = { Music, Brain, Activity, Globe2 };

export const ancientScienceSynergy = [
  {
    id: "sound-neuroscience",
    category: "Vibrational Science",
    symbol: "ॐ",
    ancientTitle: "Om & Ved Mantras (मंत्र उच्चारण)",
    ancientDesc: "The primordial sound & rhythmic Vedic mantras generate precise acoustic vibrations that resonate through amniotic fluid.",
    scienceTitle: "Auditory Neuroscience & Synaptogenesis",
    scienceDesc: "Fetal auditory pathways respond from Week 18. Structured acoustic stimulation accelerates neural plasticity, auditory cortex development, and resting heart-rate stability.",
    statLabel: "Auditory Response",
    statValue: "Week 18+",
    tags: ["Sound Therapy", "Neural Plasticity", "Acoustic Resonance"],
  },
  {
    id: "epigenetics-lotus",
    category: "Environmental Epigenetics",
    symbol: "🪷",
    ancientTitle: "Sattvic Environment (कमलवत जीवन)",
    ancientDesc: "Rooted in purity — serene surroundings, elevated thoughts, and sacred atmosphere shape the developing consciousness.",
    scienceTitle: "Maternal Cortisol & Epigenetic Expression",
    scienceDesc: "Maternal emotional calm reduces cortisol transmission through the placenta, optimizing fetal gene expression and neuro-endocrine receptor sensitivity.",
    statLabel: "Epigenetic Window",
    statValue: "1,000 Days",
    tags: ["Epigenetics", "Cortisol Regulation", "Gene Expression"],
  },
  {
    id: "triad-endocrinology",
    category: "Systemic Harmony",
    symbol: "🔱",
    ancientTitle: "Trishul Triad Balance (त्रिशूल संतुलन)",
    ancientDesc: "Harmonizing the three essential forces — Physical vitality (Kaya), Emotional peace (Manas), and Spiritual energy (Prana).",
    scienceTitle: "Placental Neuro-Endocrine Axis",
    scienceDesc: "Synchronizing maternal metabolic rate, vagal autonomic tone, and endocrine secretions to create optimal oxygenation and fetal cell construction.",
    statLabel: "Systemic Sync",
    statValue: "3-Fold Harmony",
    tags: ["Autonomic Tone", "Hormonal Balance", "Homeostasis"],
  },
  {
    id: "samvad-limbic",
    category: "Prenatal Psychology",
    symbol: "卐",
    ancientTitle: "Swastik & Garbh Samvad (गर्भ संवाद)",
    ancientDesc: "Auspicious intentional dialogue, rhythmic storytelling, and heart-to-heart communication with the child every single day.",
    scienceTitle: "Limbic System & Cardiac Coherence",
    scienceDesc: "Maternal voice frequency creates deep limbic bonding. Real-time ultrasound proves fetal heart-rate stabilization and limb relaxation when hearing maternal voice.",
    statLabel: "Brain Development",
    statValue: "70% Pre-birth",
    tags: ["Limbic Wiring", "Maternal Voice", "Bonding Science"],
  },
  {
    id: "ahara-epigenomics",
    category: "Nutritional Priming",
    symbol: "🌿",
    ancientTitle: "Sattvic Ahara & Vihara (आहार-विहार)",
    ancientDesc: "Pure, seasonal nutrition coupled with daily gentle yoga, conscious breathing (Pranayama), and restful biological rhythm.",
    scienceTitle: "Nutritional Epigenomics & Microbiome",
    scienceDesc: "Bioactive micronutrients act as methyl donors modifying chromatin structure, establishing robust metabolic, immune, and gut-microbiome foundations.",
    statLabel: "Lifelong Health Impact",
    statValue: "Peer Reviewed",
    tags: ["Nutritional Epigenetics", "Ayurvedic Ahara", "Metabolic Health"],
  },
  {
    id: "surya-chronobiology",
    category: "Circadian Science",
    symbol: "☀️",
    ancientTitle: "Surya Namaskar & Brahma Muhurta (सूर्य उपासना)",
    ancientDesc: "Aligning daily routine with sunrise, gentle morning sunlight exposure, and early natural sleep-wake cycles.",
    scienceTitle: "Melatonin & Fetal Biological Clocks",
    scienceDesc: "Natural sunlight exposure regulates maternal melatonin and cortisol circadian pulses, programming fetal suprachiasmatic nucleus biological clocks.",
    statLabel: "Circadian Sync",
    statValue: "24-Hour Rhythm",
    tags: ["Melatonin Regulation", "Chronobiology", "Circadian Clocks"],
  },
  {
    id: "pranayama-respiratory",
    category: "Respiratory Physiology",
    symbol: "🫁",
    ancientTitle: "Pranayama & Anulom-Vilom (प्राणवायु संवाद)",
    ancientDesc: "Conscious alternate nostril breathing and deep diaphragmatic breath awareness for continuous energetic purity.",
    scienceTitle: "Placental Oxygenation & Vagal Tone",
    scienceDesc: "Rhythmic slow breathing increases maternal arterial oxygen partial pressure ($PaO_2$) and enhances cardiac vagal nerve tone, preventing intra-uterine hypoxia.",
    statLabel: "Oxygen Saturation",
    statValue: "Vagal Boost",
    tags: ["Arterial Oxygenation", "Vagal Nerve Tone", "Diaphragmatic Breath"],
  },
  {
    id: "katha-memory",
    category: "Cognitive Priming",
    symbol: "📜",
    ancientTitle: "Sacred Lore & Katha Recitation (संस्कार कथा)",
    ancientDesc: "Reading inspiring stories, moral values, and uplifting scriptures out loud to impart early character foundations.",
    scienceTitle: "Temporal Lobe Memory Priming",
    scienceDesc: "Electroencephalography (EEG) and auditory evoke potential studies demonstrate that third-trimester fetuses encode phoneme patterns and remember familiar nursery rhymes post-birth.",
    statLabel: "Neural Memory",
    statValue: "Postnatal Memory",
    tags: ["Auditory Encoding", "Phoneme Recognition", "Cognitive Priming"],
  },
];


