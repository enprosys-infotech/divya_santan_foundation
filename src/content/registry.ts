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

export const JOURNEYS = defineItems([
  { id: "planningCouple", to: "/learn" },
  { id: "pregnantWoman", to: "/knowledge" },
  { id: "socialWorker", to: "/join" },
  { id: "academicPerson", to: "/research" },
  { id: "consultant", to: "/join" },
]);
export type JourneyId = (typeof JOURNEYS)[number]["id"];

/* ── Hero audience pills — same 5 categories, linked to #who-can-benefit ── */

export const AUDIENCE_PILLS = defineItems([
  { id: "planningCouple", to: "/#who-can-benefit" },
  { id: "pregnantWoman", to: "/#who-can-benefit" },
  { id: "socialWorker", to: "/#who-can-benefit" },
  { id: "academicPerson", to: "/#who-can-benefit" },
  { id: "consultant", to: "/#who-can-benefit" },
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

export const VIDEOS = defineItems([
  { id: "intro", youtubeId: "J27Wc4r5yA0", duration: "14:20" },
  { id: "garbhSamvad", youtubeId: "N1_S7CjPz8k", duration: "18:45" },
  { id: "musicMantra", youtubeId: "2OEL4P1rub0", duration: "25:10" },
  { id: "first1000Days", youtubeId: "ws_4kFm5mZg", duration: "12:30" },
  { id: "nutrition", youtubeId: "dQw4w9WgXcQ", duration: "15:00" },
  { id: "fatherRole", youtubeId: "dQw4w9WgXcQ", duration: "16:15" },
  { id: "prenatalYoga", youtubeId: "dQw4w9WgXcQ", duration: "20:00" },
]);
export type VideoId = (typeof VIDEOS)[number]["id"];

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@DivyaSantanPrakalp";

/* ── Instagram Reels library ────────────────────────────────────────────── */

export const INSTAGRAM_REELS = defineItems([
  { id: "reelGarbhSanskar", reelId: "C0example001", duration: "0:58" },
  { id: "reelMantras", reelId: "C0example002", duration: "1:02" },
  { id: "reelNutrition", reelId: "C0example003", duration: "0:45" },
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
  { id: "monthByMonth", category: "pregnancy" },
  { id: "garbhSamvad", category: "practice" },
  { id: "scienceResearch", category: "science" },
  { id: "sattvicDiet", category: "nutrition" },
  { id: "fatherRole", category: "family" },
  { id: "yogaBreathStillness", category: "practice" },
  { id: "sanskarsThroughAges", category: "culture" },
] as const satisfies readonly { id: string; category: KnowledgeCategoryId }[]);
export type KnowledgeArticleId = (typeof KNOWLEDGE_ARTICLES)[number]["id"];

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
  { id: "csr", icon: Handshake },
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

export const COURSE_STEPS = defineItems([
  { id: "enrol" },
  { id: "learn" },
  { id: "practise" },
]);
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
