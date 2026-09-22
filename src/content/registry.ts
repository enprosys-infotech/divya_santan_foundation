/**
 * Content registry — everything about a content item that is *not* language dependent:
 * stable ids, icons, destination routes, YouTube ids, symbols and ordering.
 *
 * The matching copy lives in `src/i18n/locales/<lang>.ts` under `content.*`, keyed by the
 * same ids. Because the locales type those maps as `Record<Id, …>`, TypeScript fails the
 * build if a language is missing an entry — that is what keeps the site fully translated.
 */

import {
  Activity,
  Apple,
  Baby,
  BookMarked,
  BookOpen,
  Brain,
  Building2,
  Compass,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  HandHeart,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Megaphone,
  MessageCircleHeart,
  Music,
  Phone,
  ShieldCheck,
  Sprout,
  UserCheck,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

/** Helper that preserves literal `id` types while keeping the rest structurally typed. */
const defineItems = <const T extends readonly { id: string }[]>(items: T) => items;

/* ── Foundations: "What is Garbh Sanskar" cards ─────────────────────────── */

export const GARBH_BASICS = defineItems([
  { id: "preConception", icon: Sprout, iconVariant: "gold" as const },
  { id: "pregnancyJourney", icon: Baby, iconVariant: "secondary" as const },
  { id: "garbhSamvad", icon: MessageCircleHeart, iconVariant: "primary" as const },
  { id: "familyEnvironment", icon: Users, iconVariant: "primary" as const },
]);
export type GarbhBasicId = (typeof GARBH_BASICS)[number]["id"];

/* ── Lifecycle timeline ─────────────────────────────────────────────────── */

export const TIMELINE = defineItems([
  { id: "preConception" },
  { id: "pregnancy" },
  { id: "birth" },
  { id: "earlyLife" },
  { id: "futureGeneration" },
]);
export type TimelineId = (typeof TIMELINE)[number]["id"];

/* ── Five pillars of action ─────────────────────────────────────────────── */

export const PILLARS = defineItems([
  { id: "education", icon: BookOpen, iconVariant: "secondary" as const },
  { id: "training", icon: GraduationCap, iconVariant: "primary" as const },
  { id: "awareness", icon: Megaphone, iconVariant: "gold" as const },
  { id: "research", icon: FlaskConical, iconVariant: "secondary" as const },
  { id: "socialTransformation", icon: HeartHandshake, iconVariant: "primary" as const },
]);
export type PillarId = (typeof PILLARS)[number]["id"];

/* ── Audience journeys — exactly 5, matching the client's user categories ── */

export const AUDIENCE_JOURNEY_ROUTES = {
  planningCouple: "/journeys/planning-pregnancy",
  pregnantWoman: "/journeys/pregnant-woman",
} as const;
export type AudienceJourneyPageId = keyof typeof AUDIENCE_JOURNEY_ROUTES;

export const MISSION_ROUTES = {
  volunteer: "/join/volunteer",
  institutionalCollaboration: "/join/institutional-collaboration",
  consultant: "/join/consultant",
  academicResearcher: "/join/academic-researcher",
} as const;
export type MissionPageId = keyof typeof MISSION_ROUTES;

export const JOURNEYS = defineItems([
  { id: "planningCouple", to: AUDIENCE_JOURNEY_ROUTES.planningCouple },
  { id: "pregnantWoman", to: AUDIENCE_JOURNEY_ROUTES.pregnantWoman },
  { id: "socialWorker", to: MISSION_ROUTES.volunteer   },
  { id: "academicPerson", to: MISSION_ROUTES.institutionalCollaboration },
  { id: "consultant", to: MISSION_ROUTES.consultant },
]);
export type JourneyId = (typeof JOURNEYS)[number]["id"];

/* ── Hero audience pills — same 5 categories, routed to their next step ── */

export const AUDIENCE_PILLS = defineItems([
  { id: "planningCouple", to: AUDIENCE_JOURNEY_ROUTES.planningCouple },
  { id: "pregnantWoman", to: AUDIENCE_JOURNEY_ROUTES.pregnantWoman },
  { id: "socialWorker", to: MISSION_ROUTES.volunteer   },
  { id: "academicPerson", to: MISSION_ROUTES.institutionalCollaboration },
  { id: "consultant", to: MISSION_ROUTES.consultant },
]);
export type AudiencePillId = (typeof AUDIENCE_PILLS)[number]["id"];

/* ── Learn page modules ─────────────────────────────────────────────────── */

export const LEARN_TOPICS = defineItems([
  { id: "whatIs", icon: BookOpen },
  { id: "preConception", icon: Sprout },
  { id: "pregnancyJourney", icon: Baby },
  { id: "garbhSamvad", icon: MessageCircleHeart },
  { id: "fatherFamily", icon: Users },
  { id: "ayurvedaLifestyle", icon: Leaf },
  { id: "postnatalCare", icon: Apple },
]);
export type LearnTopicId = (typeof LEARN_TOPICS)[number]["id"];

/* ── Free services ──────────────────────────────────────────────────────── */

export const FREE_SERVICES = defineItems([
  { id: "onlineClasses", icon: Video },
  { id: "educationalVideos", icon: BookOpen },
  { id: "guidance", icon: Compass },
  { id: "communityAwareness", icon: Megaphone },
  { id: "publications", icon: BookMarked },
]);
export type FreeServiceId = (typeof FREE_SERVICES)[number]["id"];

/* ── Video library ──────────────────────────────────────────────────────── */

export const VIDEO_CATEGORIES = defineItems([
  { id: "all" },
  { id: "knowledge" },
  { id: "garbhSanskarFoundation" },
  { id: "testimonials" },
]);
export type VideoCategoryId = (typeof VIDEO_CATEGORIES)[number]["id"];

export const VIDEOS = defineItems([
  { id: "garbhSanskarClass1", youtubeId: "17hrYEs1y8U", duration: "class 1", category: "garbhSanskarFoundation" as const },
  { id: "garbhSanskarClass2", youtubeId: "nXnWU7fghoU", duration: "class 2", category: "garbhSanskarFoundation" as const },
  { id: "garbhSanskarClass3", youtubeId: "k_AHbfulzq8", duration: "class 3", category: "garbhSanskarFoundation" as const },
  { id: "personalityNationBuilding", youtubeId: "1niF9R9A9AM", category: "knowledge" as const },
  { id: "divyaSantanSpecialSession", youtubeId: "SwYsQR0MymA", category: "knowledge" as const },
]);
export type VideoId = (typeof VIDEOS)[number]["id"];

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@DivyaSantanPrakalp";

/* ── Instagram Reels library ────────────────────────────────────────────── */

export const INSTAGRAM_REELS = defineItems([
  { id: "reelGarbhSanskar", reelId: "DWA72A0iNsL", duration: "0:58" },
  { id: "reelMantras", reelId: "DWOKBTUjXJy", duration: "1:02" },
  { id: "reelNutrition", reelId: "DWs14UAkbpL", duration: "0:45" },
]);
export type InstaReelId = (typeof INSTAGRAM_REELS)[number]["id"];

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/divyasantanprakalp/";

/* ── Courses ────────────────────────────────────────────────────────────── */

export const COURSES = defineItems([
  { id: "foundation" },
  { id: "coupleEducation" },
  { id: "prerakTraining" },
  { id: "recordedLibrary" },
  { id: "educatorCertification" },
]);
export type CourseId = (typeof COURSES)[number]["id"];

/* ── Knowledge centre ───────────────────────────────────────────────────── */

export const KNOWLEDGE_CATEGORIES = defineItems([
  { id: "all" },
  { id: "foundations" },
  { id: "pregnancy" },
  { id: "practice" },
  { id: "science" },
  { id: "nutrition" },
  { id: "family" },
  { id: "culture" },
]);
export type KnowledgeCategoryId = (typeof KNOWLEDGE_CATEGORIES)[number]["id"];

export const KNOWLEDGE_ARTICLES = defineItems([
  { id: "whatIsGarbhSanskar", category: "foundations" },
  { id: "ritualOrScience", category: "science" },
  { id: "monthByMonth", category: "pregnancy" },
  { id: "garbhSamvad", category: "practice" },
  { id: "scienceResearch", category: "science" },
  { id: "sattvicDiet", category: "nutrition" },
  { id: "fatherRole", category: "family" },
  { id: "yogaBreathStillness", category: "practice" },
  { id: "sanskarsThroughAges", category: "culture" },
] as const satisfies readonly { id: string; category: KnowledgeCategoryId }[]);
export type KnowledgeArticleId = (typeof KNOWLEDGE_ARTICLES)[number]["id"];

/* ── Knowledge Centre: Step-by-Step Guides ──────────────────────────────── */

export const KNOWLEDGE_GUIDES = defineItems([
  { id: "preMarriage" },
  { id: "preConceptionPrep" },
  { id: "garbhadhanaSanskar" },
  { id: "pregnancyMonthByMonth" },
  { id: "postnatalCare" },
]);
export type KnowledgeGuideId = (typeof KNOWLEDGE_GUIDES)[number]["id"];

/* ── Knowledge Centre: Q & A ────────────────────────────────────────────── */

export const KNOWLEDGE_QA = defineItems([
  // Part I: Understanding Garbh Sanskar - Scientific & Practical FAQs
  // Ordered by: science, ayurveda, medical, planning, practice, foundation
  
  // Science
  { id: "scientificBasis", tag: "science" },
  { id: "scientificRationale", tag: "science" },
  { id: "epigeneticInfluence", tag: "science" },
  
  // Ayurveda
  { id: "ayurvedicPerspective", tag: "ayurveda" },
  
  // Medical
  { id: "importantToKnow", tag: "medical" },
  
  // Planning
  { id: "whenToStart", tag: "planning" },
  { id: "benefits", tag: "planning" },
  { id: "threeMonthPrep", tag: "planning" },
  { id: "astrologerRole", tag: "planning" },
  { id: "abstinenceAdvice", tag: "planning" },
  { id: "whomToConsult", tag: "planning" },
  
  // Practice
  { id: "whatIsDone", tag: "practice" },
  { id: "howItWorks", tag: "practice" },
  { id: "commonPractices", tag: "practice" },
  { id: "mantraImportance", tag: "practice" },
  
  // Foundation
  { id: "aimAndInterest", tag: "foundation" },
  { id: "howToAchieve", tag: "foundation" },
  
  // Part II: About Foundation - Joining, Learning & Supporting
  { id: "learnSystematically", tag: "learning" },
  { id: "whatIsPrerak", tag: "volunteer" },
  { id: "becomePrerak", tag: "volunteer" },
  { id: "needToBeDoctorPrerak", tag: "volunteer" },
  { id: "becomeCounsellor", tag: "professional" },
  { id: "facultyMember", tag: "professional" },
  { id: "joinAsFaculty", tag: "professional" },
  { id: "foundationCourse", tag: "learning" },
  { id: "freeClassesForCouples", tag: "learning" },
  { id: "freePersonalGuidance", tag: "learning" },
  { id: "whatIsNavankur", tag: "consultation" },
  { id: "whatIsAskShree", tag: "consultation" },
  { id: "hospitalCollaboration", tag: "collaboration" },
  { id: "organizeAwareness", tag: "collaboration" },
  { id: "startCenter", tag: "collaboration" },
  { id: "supportFoundation", tag: "support" },
  { id: "supportWithoutVolunteering", tag: "support" },
  { id: "studentsParticipate", tag: "support" },
  { id: "universityResearch", tag: "collaboration" },
  { id: "religiousInclusion", tag: "philosophy" },
  { id: "furtherInformation", tag: "contact" },
  
  // Original questions (keeping for compatibility)
  { id: "whatIsGarbhSamvad", tag: "practice" },
  { id: "dietDuringPregnancy", tag: "nutrition" },
  { id: "fatherParticipation", tag: "family" },
  { id: "modernMedicineCompat", tag: "medical" },
  { id: "vedicSanskars", tag: "culture" },
]);
export type KnowledgeQAId = (typeof KNOWLEDGE_QA)[number]["id"];

/* ── Knowledge Centre: Books and resources ──────────────────────────────── */

export const KNOWLEDGE_RESOURCES = defineItems([
  {
    id: "garbhSanskarKaVigyan",
    type: "book",
    access: "purchase",
    href: "https://amzn.in/d/0hJTxeEv",
  },
  {
    id: "garbhSanskarSection1",
    type: "document",
    access: "download",
    href: "https://docs.google.com/document/d/1ENZAA7osX5VResVHCCkuH2lLei2z_ovk/export?format=docx",
  },
  {
    id: "garbhSanskarSection2",
    type: "document",
    access: "download",
    href: "https://docs.google.com/document/d/14pbNwBllehAulHvDXjWDOLL4_lqFkQVj/export?format=docx",
  },
  {
    id: "garbhSanskarSection3",
    type: "document",
    access: "download",
    href: "https://docs.google.com/document/d/1OCJnQHgCOqpvzB1WJ1_xszM3-hSWrZML/export?format=docx",
  },
  {
    id: "garbhSanskarSection4",
    type: "document",
    access: "download",
    href: "https://docs.google.com/document/d/1Qfi49biqqXR_TCPqr3PzA-w5ll-cNWxv/export?format=docx",
  },
  {
    id: "garbhSanskarSection5",
    type: "document",
    access: "download",
    href: "https://docs.google.com/document/d/1Z4sZ3M7hGchTzcESiDaV2w-g-U22zxC3/export?format=docx",
  },
  {
    id: "garbhSanskarSection6",
    type: "document",
    access: "download",
    href: "https://docs.google.com/document/d/1sNYR2KId4FeeQPloSobr2IxRyfI88ldg/export?format=docx",
  },
] as const satisfies readonly {
  id: string;
  type: "book" | "document";
  access: "download" | "purchase" | "external";
  href: string;
}[]);
export type KnowledgeResourceId = (typeof KNOWLEDGE_RESOURCES)[number]["id"];

/* ── Knowledge Centre: Scientific References ────────────────────────────── */

export const SCIENTIFIC_REFERENCES = defineItems([
  { id: "kalyani2011" },
  { id: "bernardi2001" },
  { id: "streeter2012" },
  { id: "epigeneticsLipton" },
  { id: "prenatalPsychologyVerny" },
  { id: "maternalStressGluckman" },
]);
export type ScientificReferenceId = (typeof SCIENTIFIC_REFERENCES)[number]["id"];

/* ── Research fields ────────────────────────────────────────────────────── */

export const RESEARCH_TOPICS = defineItems([
  { id: "epigenetics" },
  { id: "fetalDevelopment" },
  { id: "prenatalPsychology" },
  { id: "maternalStress" },
  { id: "nutrition" },
  { id: "yogaMeditation" },
  { id: "musicFetalResponse" },
]);
export type ResearchTopicId = (typeof RESEARCH_TOPICS)[number]["id"];

/* ── Ways to join ───────────────────────────────────────────────────────── */

export const JOIN_ROLES = defineItems([
  { id: "prerak", icon: HandHeart },
  { id: "volunteer", icon: Users },
  { id: "faculty", icon: GraduationCap },
  { id: "consultant", icon: UserCheck },
  { id: "institutional", icon: Building2 },
]);
export type JoinRoleId = (typeof JOIN_ROLES)[number]["id"];

export const JOIN_PROCESS_STEPS = defineItems([
  { id: "expressInterest" },
  { id: "orientation" },
  { id: "training" },
  { id: "serve" },
]);
export type JoinProcessStepId = (typeof JOIN_PROCESS_STEPS)[number]["id"];

/* ── Testimonials ───────────────────────────────────────────────────────── */

export const TESTIMONIALS = defineItems([
  { id: "couples" },
  { id: "students" },
  { id: "volunteers" },
  { id: "faculty" },
]);
export type TestimonialId = (typeof TESTIMONIALS)[number]["id"];

/* ── Completed events ───────────────────────────────────────────────────── */

export const COMPLETED_EVENTS = defineItems([
  {
    id: "workshopsSocialOutreach",
    photos: [
      "/first workshop of GS.jpg",
      "/first workshop of GS-2.jpg",
      "/first workshop of GS-3.jpg.png",
      "/first workshop of GS-4.jpg",
    ],
  },
  {
    id: "udaipurOutreach",
    photos: ["/udaipur-1.jpg", "/udaipur-2.jpg"],
  },
]);
export type CompletedEventId = (typeof COMPLETED_EVENTS)[number]["id"];

/* ── Success Stories (Results-oriented testimonials with photos) ─────────── */

export const SUCCESS_STORIES = defineItems([
  { id: "ritaAjay", category: "couple", hasPhoto: true },
  { id: "priyaSharma", category: "pregnantWoman", hasPhoto: true },
  { id: "meenaRaj", category: "couple", hasPhoto: true },
  { id: "anushkaVinod", category: "pregnantWoman", hasPhoto: true },
]);
export type SuccessStoryId = (typeof SUCCESS_STORIES)[number]["id"];

/* ── Results & Impact Statistics ────────────────────────────────────────── */

export const RESULTS_STATS = defineItems([
  { id: "healthyBirths", value: "500+", icon: Baby },
  { id: "couplesTrained", value: "1,000+", icon: Users },
  { id: "satisfaction", value: "95%", icon: HeartHandshake },
  { id: "volunteers", value: "100+", icon: HandHeart },
]);
export type ResultsStatId = (typeof RESULTS_STATS)[number]["id"];

/* ── Ancient wisdom ↔ modern science synergy pillars ────────────────────── */

export const SYNERGY_PILLARS = defineItems([
  { id: "soundNeuroscience", symbol: "ॐ" },
  { id: "epigeneticsLotus", symbol: "🪷" },
  { id: "triadEndocrinology", symbol: "🔱" },
  { id: "samvadLimbic", symbol: "卐" },
  { id: "aharaEpigenomics", symbol: "🌿" },
  { id: "suryaChronobiology", symbol: "☀️" },
  { id: "pranayamaRespiratory", symbol: "🫁" },
  { id: "kathaMemory", symbol: "📜" },
]);
export type SynergyPillarId = (typeof SYNERGY_PILLARS)[number]["id"];

/* ── Homepage stat banners ──────────────────────────────────────────────── */

export const SCIENCE_STATS = defineItems([
  { id: "criticalDays", value: "1,000+" },
  { id: "brainDevelopment", value: "70%" },
  { id: "studies", value: "25,000+" },
  { id: "trimesters", value: "3" },
]);
export type ScienceStatId = (typeof SCIENCE_STATS)[number]["id"];

export const GLOBAL_STATS = defineItems([
  { id: "regions", value: "12+" },
  { id: "volunteers", value: "100+" },
  { id: "languages", value: "2" },
]);
export type GlobalStatId = (typeof GLOBAL_STATS)[number]["id"];

/* ── Free class schedule ────────────────────────────────────────────────── */

export const CLASS_SCHEDULE = defineItems([
  { id: "introduction" },
  { id: "samvadCircle" },
  { id: "fathersSession" },
  { id: "communityProgramme" },
]);
export type ClassScheduleId = (typeof CLASS_SCHEDULE)[number]["id"];

/* ── About page ─────────────────────────────────────────────────────────── */

export const ABOUT_MILESTONES = defineItems([
  { id: "conceptualisation" },
  { id: "framework" },
  { id: "awareness" },
  { id: "training" },
  { id: "goingGlobal" },
]);
export type AboutMilestoneId = (typeof ABOUT_MILESTONES)[number]["id"];

export const MISSION_POINTS = defineItems([
  { id: "freeEducation" },
  { id: "trainEducators" },
  { id: "supportResearch" },
  { id: "globalCommunity" },
]);
export type MissionPointId = (typeof MISSION_POINTS)[number]["id"];

/* ── Courses page: how learning works ───────────────────────────────────── */

export const COURSE_STEPS = defineItems([{ id: "enrol" }, { id: "learn" }, { id: "practise" }]);
export type CourseStepId = (typeof COURSE_STEPS)[number]["id"];

/* ── Research page: editorial commitments ───────────────────────────────── */

export const RESEARCH_COMMITMENTS = defineItems([
  { id: "noGuarantees" },
  { id: "citeSource" },
  { id: "inviteScrutiny" },
]);
export type ResearchCommitmentId = (typeof RESEARCH_COMMITMENTS)[number]["id"];

/* ── Ask Shree ──────────────────────────────────────────────────────────── */

export const ASK_SHREE_QUESTIONS = defineItems([
  { id: "beforePregnancy" },
  { id: "garbhSamvad" },
  { id: "fifthMonth" },
  { id: "fatherRole" },
  { id: "resources" },
]);
export type AskShreeQuestionId = (typeof ASK_SHREE_QUESTIONS)[number]["id"];

export const ASK_SHREE_FEATURES = defineItems([
  { id: "guidesPath", icon: Compass },
  { id: "connectsResources", icon: BookOpen },
  { id: "educationalNotMedical", icon: ShieldCheck },
]);
export type AskShreeFeatureId = (typeof ASK_SHREE_FEATURES)[number]["id"];

/* ── Contact ────────────────────────────────────────────────────────────── */

export const CONTACT_TOPICS = defineItems([
  { id: "freeClasses" },
  { id: "courses" },
  { id: "volunteering" },
  { id: "research" },
  { id: "other" },
]);
export type ContactTopicId = (typeof CONTACT_TOPICS)[number]["id"];

export const CONTACT_DETAIL_FIELDS = defineItems([
  { id: "email", icon: Mail },
  { id: "phone", icon: Phone },
  { id: "office", icon: MapPin },
]);
export type ContactDetailId = (typeof CONTACT_DETAIL_FIELDS)[number]["id"];

/* ── Misc icon exports used by page-local layouts ───────────────────────── */

export const PRACTICE_ICONS: Record<string, LucideIcon> = { Music, Brain, Activity, Globe2 };
