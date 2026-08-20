/**
 * English locale — the reference dictionary.
 *
 * Its shape defines the `Dictionary` type, so every other locale must provide exactly the
 * same keys. Edit English copy here and Hindi copy in `hi.ts`; nothing user facing should
 * ever be written inline in a component or route.
 */

import type {
  AboutMilestoneId,
  AskShreeFeatureId,
  AskShreeQuestionId,
  AudiencePillId,
  ClassScheduleId,
  ContactDetailId,
  ContactTopicId,
  CourseId,
  CourseStepId,
  FreeServiceId,
  GarbhBasicId,
  GlobalStatId,
  InstaReelId,
  JoinProcessStepId,
  JoinRoleId,
  JourneyId,
  KnowledgeArticleId,
  KnowledgeCategoryId,
  LearnTopicId,
  MissionPointId,
  PillarId,
  ResearchCommitmentId,
  ResearchTopicId,
  ScienceStatId,
  SynergyPillarId,
  TestimonialId,
  TimelineId,
  VideoId,
} from "@/content/registry";
import type {
  FooterColumnId,
  FooterLinkId,
  NavChildId,
  NavGroupId,
  NavLinkId,
} from "@/content/navigation";
import type {
  AccentedCopy,
  ArticleCopy,
  CourseCopy,
  InstaReelCopy,
  JourneyCopy,
  NavLinkCopy,
  ResearchTopicCopy,
  ScheduleCopy,
  StatCopy,
  SynergyCopy,
  TestimonialCopy,
  TitledCopy,
  VideoCopy,
} from "../types";

export const en = {
  brand: {
    name: "Balaji Sewarth Vinod Agarwal Foundation",
    prakalp: "Divya Santan Foundation",
    positioning: "A Global Garbh Sanskar Education, Training & Awareness Platform",
    vasudhaiva: "",
    vasudhaivaSub: "One World, One Family",
    logoAlt: "Divya Santan Foundation",
    partnerLogoAlt: "Balaji Sewarth Vinod Agarwal Foundation, Indore",
  },

  common: {
    explore: "Explore",
    startLearning: "Start learning",
    continue: "Continue",
    learnMore: "Learn more",
    selectLanguage: "Select language",
    primaryNavigation: "Primary",
    mobileNavigation: "Mobile navigation",
    socialMedia: "Social media",
    previousSlide: "Previous card",
    nextSlide: "Next card",
    goToSlide: "Go to slide",
  },

  cta: {
    joinFree: "Join Free Classes",
    askShree: "Ask Shree AI",
    guidance: "Get Guidance",
    learn: "Learn Garbh Sanskar",
    needGuidance: "Need Personal Guidance?",
    joinMission: "Join the Mission",
  },

  nav: {
    menu: "Menu",
    links: {
      home: "Home",
      about: "About Us",
      garbhSanskar: "Garbh Sanskar",
      contact: "Contact Us",
    } satisfies Record<NavLinkId, string>,
    mega: { explore: "Explore" },
    groups: { 
      knowledge: "Knowledge", 
      training: "Training",
      freeServices: "Free Services",
      research: "Research",
      joinMission: "Join the Mission"
    } satisfies Record<NavGroupId, string>,
    children: {
      knowledgeCentre: {
        label: "Knowledge Center",
        native: "",
        note: "Articles & month-by-month guides",
      },
      courses: {
        label: "Courses & Training",
        native: "",
        note: "Foundation course, Prerak training",
      },
      freeServices: {
        label: "Free Services",
        native: "",
        note: "Classes, videos, books & AI guidance",
      },
      researchScience: {
        label: "Research & Science",
        native: "",
        note: "Epigenetics, prenatal psychology",
      },
      joinMission: {
        label: "Join the Mission",
        native: "",
        note: "Events, testimonials & volunteer opportunities",
      },
    } satisfies Record<NavChildId, NavLinkCopy>,
  },

  footer: {
    about:
      "We educate, train, create awareness and support research so that every family can nurture healthy, cultured and compassionate generations.",
    office: "Divya Santan Foundation, Indore, Madhya Pradesh, India",
    copyright:
      "Divya Santan Foundation · Supported by Balaji Sewarth Vinod Agarwal Foundation · Demo website",
    columnTitles: {
      learn: "Learn",
      knowledge: "Knowledge",
      courses: "Courses",
      freeServices: "Free Services",
      research: "Research",
      joinMission: "Join Mission",
    } satisfies Record<FooterColumnId, string>,
    links: {
      learnGarbhSanskar: "Learn Garbh Sanskar",
      journeys: "Learning Journeys",
      askShree: "Ask Shree AI",
      knowledgeCentre: "Knowledge Centre",
      monthByMonth: "Month-by-Month",
      garbhSamvad: "Garbh Samvad",
      foundationCourse: "Foundation Course",
      prerakTraining: "Prerak Training",
      certification: "Certification",
      freeClasses: "Free Classes",
      educationalVideos: "Educational Videos",
      publications: "Books & Publications",
      researchScience: "Research & Science",
      researchTopics: "Research Topics",
      collaboration: "Collaboration",
      becomePrerak: "Become a Prerak",
      volunteer: "Volunteer",
      institutionalCsr: "Institutional & CSR",
    } satisfies Record<FooterLinkId, string>,
  },

  errors: {
    notFound: {
      code: "404",
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      action: "Go home",
    },
    generic: {
      title: "This page didn't load",
      body: "Something went wrong on our end. You can try refreshing or head back home.",
      retry: "Try again",
      action: "Go home",
    },
  },

  home: {
    meta: {
      title: "Divya Santan Foundation — ONE STEP TOWARD DIVINE BABY",
      description:
        "A global Garbh Sanskar education, training, awareness and research movement nurturing healthy, cultured and compassionate generations.",
      ogDescription:
        "Education, training, awareness, guidance and research for Garbh Sanskar. One World, One Family.",
    },
    hero: {
      eyebrow: "A global education & awareness movement for Garbh Sanskar",
      title: "ONE STEP TOWARD DIVINE BABY",
      subtitle: "Nurturing Healthy, Cultured & Compassionate Generations",
      native: "",
      support: "Education • Training • Awareness • Guidance • Research",
      imageAlt: "Symbolic illustration of a mother, lotus and connected world — Garbh Sanskar",
      badges: {
        firstDays: "First 1,000 Days",
        neural: "Critical Neural Window",
        vedic: "Vedic + Science",
        epigenetics: "Epigenetics Synthesized",
      },
      pills: {
        planning: { label: "Planning Couple", sub: "Pre-conception" },
        pregnant: { label: "Pregnant Mother", sub: "Pregnancy" },
        father: { label: "Father & Family", sub: "Family" },
        educator: { label: "Educator / Prerak", sub: "Educator" },
      } satisfies Record<AudiencePillId, { label: string; sub: string }>,
    },
    stats: {
      criticalDays: {
        label: "Days",
        sub: "The critical window from conception to age 2",
      },
      brainDevelopment: {
        label: "Brain Development",
        sub: "Occurs before birth and in first 2 years",
      },
      studies: {
        label: "Peer-reviewed studies",
        sub: "On prenatal environment and child outcomes",
      },
      trimesters: { label: "Trimesters", sub: "Fetal senses active from week 8" },
    } satisfies Record<ScienceStatId, StatCopy>,
    foundations: {
      eyebrow: "Foundations & Approach",
      title: "What is Garbh Sanskar & Our 5 Pillars",
      subtitle:
        "Combining ancient intra-uterine nurturing wisdom with a structured 5-pillar educational framework.",
      pillarsLabel: "Our 5 Pillars of Action",
    },
    hub: {
      eyebrow: "Comprehensive Media & Learning Hub",
      title: "Videos, Free Classes, Courses & Knowledge",
      subtitle:
        "Everything in one interactive place — watch reference video lessons, access free classes, browse accredited courses, or read research articles.",
      tabs: {
        videos: " Youtube & Instagram",
        free: "Free Education & Services",
        courses: " Courses & Training",
        knowledge: " Knowledge Articles",
      },
      videos: {
        description:
          "Educational Garbh Sanskar reference YouTube videos. Click any video card to play directly in-page.",
        cta: "Watch All Videos",
        instagramDescription:
          "Follow our Instagram reels for short, inspiring Garbh Sanskar moments. Click any card to watch.",
        instagramCta: "Follow on Instagram",
        youtubeHeading: "YouTube Videos",
        instagramHeading: "Instagram Reels",
      },
      free: {
        description:
          "Our core Garbh Sanskar educational services are, and will remain, 100% free to all families.",
      },
      courses: {
        description:
          "Structured learning tracks certified for parents, educators, Preraks, and academic faculty.",
        cta: "View All Courses",
      },
      knowledge: {
        description:
          "Concise articles based on cultural wisdom and verified developmental science.",
        cta: "Browse Knowledge Base",
      },
    },
    ai: {
      eyebrow: "Learning companion & guidance",
      title: "Ask Shree AI or Get Personal Support",
      subtitle:
        "Your educational companion for Garbh Sanskar. Ask what to learn, or connect with qualified educational consultants.",
      openFull: "Open Full Ask Shree AI",
      bookConsultation: "Book Consultation Guidance",
    },
    ecosystem: {
      eyebrow: "Global Movement & Community",
      title: "Participate, Collaborate & Connect",
      subtitle:
        "Discover how educators, researchers, volunteers, and institutions build the Garbh Sanskar ecosystem together.",
      tabs: {
        join: "Join the Mission",
        global: "Global Reach",
        research: "Research & Evidence",
        testimonials: " Testimonials",
      },
    },
    global: {
      title: "Global Movement & Network",
      stats: {
        regions: "States & regions",
        volunteers: "Volunteers enrolled",
        languages: "Languages, more coming",
      } satisfies Record<GlobalStatId, string>,
    },
    research: {
      windowTitle: "The First 1,000 Days Window",
      windowDesc:
        "Developmental neuroscience acknowledges conception through age two as the primary window for lifelong health, cognition and emotional resilience.",
      cta: "View Full Research & Science",
    },
    finalCta: {
      title: "Begin with knowledge, not obligation",
      body: "Start with a free class, explore the Knowledge Centre, or ask Shree AI where to begin. Personal guidance is always available if you need it.",
      primary: "Join Free Classes",
      secondary: "Get Guidance",
    },
    mobileApp: {
      eyebrow: "Access Garbh Sanskar Anywhere",
      title: "Take the Journey",
      titleAccent: "in Your Pocket",
      native: "गर्भ संस्कार ऐप",
      description: "Access free classes, Ask Shree AI, month-by-month guides, and your personal learning journey — all in Hindi and English.",
      downloadLabel: "Download the app:",
      features: {
        classes: "Free classes and educational videos on the go",
        askShree: "Ask Shree AI anytime, anywhere",
        reminders: "Personalized reminders for daily Garbh Samvad",
        tracking: "Track your learning journey, week by week",
      },
      info: {
        free: "100% Free Forever",
        languages: "Available in Hindi, English & more languages",
        offline: "Works offline once downloaded",
      },
      stats: {
        users: "Active Users",
        rating: "App Rating",
        languages: "Languages",
      },
    },
  },

  synergy: {
    eyebrow: "Convergence of Traditions & Research",
    title: "Where Science Guides the Way to Ancient Wisdom",
    subtitle:
      "21st-century epigenetics, auditory neuroscience, and prenatal psychology directly confirm the timeless Vedic science of intra-uterine nurturing.",
    tabs: {
      matrix: "Unified Synergy Matrix",
      ancient: "Sacred Vedic Wisdom",
      science: "Modern Neuroscience",
    },
    pillarCounter: "Pillar {current} of {total}",
    verifiedImpact: "Verified Impact",
    ancientBadge: "Vedic Practice & Wisdom",
    ancientFootnote: "Sanatan Dharma Core Concept",
    ancientFootnoteNative: "",
    scienceBadge: "Neuroscience & Evidence",
    scienceFootnote: "Peer-Reviewed Scientific Field",
    bridgeLabel: "Synthesized",
    takeawayLabel: "Key Takeaway:",
    takeaway:
      "Modern neuroscience and epigenetics directly validate ancient Ayurvedic rules for Garbh Sanskar — proving that early environment shapes cellular and neural trajectories.",
    researchCta: "View Full Research Papers",
    carouselTitle: "All {total} Synergy Pillars",
    slingBadge: "Swipe / Sling Enabled",
    carouselHint:
      "Swipe horizontally or tap arrows to explore all {total} Vedic & Neuroscience comparative cards.",
    validationLabel: "Validation:",
  },

  askShree: {
    meta: {
      title: "Ask Shree AI — Divya Santan Foundation",
      description:
        "Shree AI is an educational companion for Garbh Sanskar — ask what to learn, when to learn it, and where to find guidance.",
    },
    header: {
      eyebrow: "Learning companion",
      title: "Ask Shree AI",
      native: "",
      intro:
        "Shree helps you find your next lesson. It answers educational questions about Garbh Sanskar and points you to relevant classes, articles and modules.",
    },
    chat: {
      name: "Ask Shree AI",
      role: "Educational companion · demo",
      greeting:
        "Namaste 🙏 I am Shree, your educational companion for Garbh Sanskar. Ask me what to learn, or pick one of the questions below.",
      placeholder: "Ask about learning Garbh Sanskar…",
      inputLabel: "Ask Shree AI a question",
      sendLabel: "Send question",
      disclaimer:
        "Shree AI provides educational guidance and does not replace professional medical consultation.",
      fallback:
        "Thank you for asking. In this demo, Shree AI responds to the example questions shown. In the full platform it will guide you to relevant lessons, articles and classes from our Knowledge Centre.",
    },
    questions: {
      beforePregnancy: {
        question: "What should I learn before pregnancy?",
        answer:
          "Preconception learning usually begins three to six months ahead. Explore the Pre-Conception module in Learn: daily routine, sattvic diet, rest, gentle movement, and preparing the home environment together as a couple.",
      },
      garbhSamvad: {
        question: "What is Garbh Samvad?",
        answer:
          "Garbh Samvad is the practice of conscious communication with the unborn child — speaking, reading, singing, or simply sitting in stillness each day. Our Knowledge Centre has a short guide with daily practices.",
      },
      fifthMonth: {
        question: "What should I learn during the 5th month?",
        answer:
          "Month five in our month-by-month guide covers hearing development, gentle music and mantra listening, iron- and calcium-rich sattvic food, restful sleep posture, and a short daily Garbh Samvad routine.",
      },
      fatherRole: {
        question: "What role can the father play?",
        answer:
          "A great deal. Fathers shape the emotional environment: shared learning, reading aloud, calm conversation, help with daily work, and attending classes together. See Father & Family in Learn.",
      },
      resources: {
        question: "Show me relevant learning resources.",
        answer:
          "Start with the Foundation Course, the Knowledge Centre articles on Garbh Samvad and month-by-month learning, and the free weekly classes — all available in Hindi and English.",
      },
    } satisfies Record<AskShreeQuestionId, { question: string; answer: string }>,
    features: {
      guidesPath: {
        title: "Guides your learning path",
        body: "Suggests where to begin based on your stage — pre-conception, pregnancy or postnatal.",
      },
      connectsResources: {
        title: "Connects you to resources",
        body: "Links questions to Knowledge Centre articles, free classes and learning modules.",
      },
      educationalNotMedical: {
        title: "Educational, not medical",
        body: "Shree never diagnoses or prescribes. For medical concerns, always consult your doctor.",
      },
    } satisfies Record<AskShreeFeatureId, TitledCopy>,
    cta: {
      title: "Prefer speaking to a person?",
      body: "Our educators offer free guidance sessions in Hindi and English.",
      primary: "Get Guidance",
      secondary: "Browse Knowledge Centre",
    },
  },

  about: {
    meta: {
      title: "About — Divya Santan Foundation",
      description:
        "Vision, mission, journey and the five pillars of Divya Santan Foundation, a global Garbh Sanskar education and awareness movement.",
    },
    header: {
      eyebrow: "About",
      title: "Divya Santan Foundation",
      native: "",
      intro:
        "A global Garbh Sanskar education, training and awareness platform. We are an educational and social movement — not a clinic, and not a commercial service.",
    },
    vision: {
      label: "Vision",
      body: "To nurture physically healthy, emotionally balanced, spiritually rooted, culturally connected and socially responsible future generations.",
      native: "",
    },
    mission: {
      label: "Mission",
      points: {
        freeEducation: "Make Garbh Sanskar education free and accessible to every family.",
        trainEducators:
          "Train educators, Preraks and volunteers to carry knowledge into communities.",
        supportResearch: "Support responsible, evidence-oriented research and documentation.",
        globalCommunity: "Build a global, inclusive community rooted in Vasudhaiva Kutumbakam.",
      } satisfies Record<MissionPointId, string>,
    },
    journey: {
      eyebrow: "Our journey",
      title: "How the movement grew",
      milestones: {
        conceptualisation: {
          title: "Conceptualisation",
          body: "Divya Santan Foundation is formed in Indore with an educational and cultural framework.",
        },
        framework: {
          title: "Framework",
          body: "Learning material, month-wise guidance and bilingual booklets are developed.",
        },
        awareness: {
          title: "Awareness",
          body: "Community programmes, awareness sessions and volunteer enrolment begin.",
        },
        training: {
          title: "Training",
          body: "Prerak and faculty training tracks are introduced for capacity building.",
        },
        goingGlobal: {
          title: "Going global",
          body: "Digital platform, multi-language content and institutional collaboration.",
        },
      } satisfies Record<AboutMilestoneId, TitledCopy>,
    },
    approach: { eyebrow: "Our approach", title: "Five Pillars" },
    cta: {
      title: "Learn with us",
      body: "Every part of our core education is open and free. Begin wherever you are.",
      primary: "Learn Garbh Sanskar",
      secondary: "Join the Mission",
    },
  },

  learn: {
    meta: {
      title: "Learn Garbh Sanskar — Divya Santan Foundation",
      description:
        "Structured learning on Garbh Sanskar: pre-conception, pregnancy journey, Garbh Samvad, father and family, Ayurveda and postnatal care.",
    },
    header: {
      eyebrow: "Learn",
      title: "Learn Garbh Sanskar",
      native: "",
      intro:
        "A calm, structured learning path for couples, families, educators and volunteers. Study at your own pace, in Hindi or English.",
    },
    modules: { eyebrow: "Learning modules", title: "Where would you like to begin?" },
    journeys: {
      eyebrow: "Journeys",
      title: "Learn by your journey",
      subtitle: "Each journey is a sequence of learning steps — not a service package.",
    },
    cta: {
      title: "Not sure where to start?",
      body: "Ask Shree AI for a suggested learning path, or join a free introductory class.",
      primary: "Ask Shree AI",
      secondary: "Join Free Classes",
    },
  },

  courses: {
    meta: {
      title: "Courses & Training — Divya Santan Foundation",
      description:
        "Foundation course, couple education, Prerak training, recorded classes and educator certification in Garbh Sanskar.",
    },
    header: {
      eyebrow: "Courses & Training",
      title: "Structured learning tracks",
      native: "",
      intro:
        "Courses are educational programmes designed for families, volunteers and educators. Core community education always remains free.",
    },
    programmes: { eyebrow: "Programmes", title: "Choose your track" },
    how: {
      eyebrow: "How learning works",
      title: "Simple, respectful, self-paced",
      subtitle:
        "Live sessions are recorded, material is bilingual, and no learner is turned away for want of means.",
      steps: {
        enrol: {
          title: "Enrol",
          body: "Register for a course or a free class in Hindi or English.",
        },
        learn: {
          title: "Learn",
          body: "Attend live sessions or study recorded modules at your own pace.",
        },
        practise: {
          title: "Practise & serve",
          body: "Apply learning at home, or train further to teach others.",
        },
      } satisfies Record<CourseStepId, TitledCopy>,
    },
    cta: {
      title: "Start with a free class",
      body: "Attend an introductory session before choosing a longer track.",
      primary: "Join Free Classes",
      secondary: "Ask a Question",
    },
  },

  knowledge: {
    meta: {
      title: "Knowledge Centre — Divya Santan Foundation",
      description:
        "Articles on Garbh Sanskar foundations, pregnancy month-by-month, Garbh Samvad, nutrition, science and cultural traditions.",
    },
    header: {
      eyebrow: "Knowledge Centre",
      title: "Read, reflect, apply",
      native: "",
      intro:
        "Short, carefully written articles for families, students and educators — cultural wisdom presented alongside contemporary understanding.",
    },
    cta: {
      title: "Have a question while reading?",
      body: "Ask Shree AI to point you to the right lesson or article.",
      primary: "Ask Shree AI",
      secondary: "Learn Garbh Sanskar",
    },
  },

  freeServices: {
    meta: {
      title: "Free Education & Services — Divya Santan Foundation",
      description:
        "Free online classes, educational videos, guidance sessions, community awareness programmes and bilingual publications.",
    },
    header: {
      eyebrow: "Free Education",
      title: "Knowledge should never carry a price",
      native: "",
      intro:
        "Our core education is free, always. Guidance and courses exist to support learning — never to gate it.",
    },
    whatIsFree: { eyebrow: "What is free", title: "Open to every family" },
    videos: {
      eyebrow: "Watch & Learn",
      title: "Free Educational Videos",
      subtitle:
        "Watch our Garbh Sanskar video series on YouTube — available in Hindi and English, free for every family.",
      playlistCta: "View Full Playlist on YouTube",
    },
    schedule: {
      eyebrow: "Weekly schedule",
      title: "Upcoming free sessions",
      sessions: {
        introduction: {
          when: "Every Sunday",
          what: "Introduction to Garbh Sanskar",
          meta: "Hindi · 60 min",
        },
        samvadCircle: {
          when: "Every Wednesday",
          what: "Garbh Samvad Practice Circle",
          meta: "Hindi & English · 45 min",
        },
        fathersSession: {
          when: "First Saturday",
          what: "Fathers & Family Session",
          meta: "English · 60 min",
        },
        communityProgramme: {
          when: "Monthly",
          what: "Community Awareness Programme",
          meta: "Regional languages · varies",
        },
      } satisfies Record<ClassScheduleId, ScheduleCopy>,
    },
    cta: {
      title: "Register for a free class",
      body: "Share your details and we will send joining instructions in your preferred language.",
      primary: "Register Now",
      secondary: "See Courses",
    },
  },

  research: {
    meta: {
      title: "Research & Science — Divya Santan Foundation",
      description:
        "Epigenetics, fetal development, prenatal psychology, maternal wellbeing and nutrition — the evidence landscape behind our educational work.",
    },
    header: {
      eyebrow: "Research & Science",
      title: "Tradition studied with care",
      native: "",
      intro:
        "We read the evidence honestly. Where science is clear we teach it; where it is emerging we say so.",
    },
    fields: { eyebrow: "Fields we study", title: "The evidence landscape" },
    commitments: {
      eyebrow: "Our commitments",
      title: "How we handle claims",
      items: {
        noGuarantees: {
          title: "No guarantees",
          body: "We never promise outcomes for a child. Education is not a prediction.",
        },
        citeSource: {
          title: "Cite the source",
          body: "Cultural practice and scientific literature are clearly distinguished.",
        },
        inviteScrutiny: {
          title: "Invite scrutiny",
          body: "We welcome collaboration with universities, hospitals and researchers.",
        },
      } satisfies Record<ResearchCommitmentId, TitledCopy>,
    },
    cta: {
      title: "Collaborate with us",
      body: "Researchers and institutions are invited to study, document and publish with the Foundation.",
      primary: "Propose a Collaboration",
      secondary: "Read Our Articles",
    },
  },

  videos: {
    meta: {
      title: "Videos & Lectures — Divya Santan Foundation",
      description:
        "Watch our Garbh Sanskar educational video series - lectures, workshops, and guided practices available in Hindi and English.",
    },
    header: {
      eyebrow: "Videos & Lectures",
      title: "Learn through video",
      native: "वीडियो के माध्यम से सीखें",
      intro:
        "Access our comprehensive video library covering Garbh Sanskar fundamentals, month-by-month guidance, and expert lectures.",
    },
    featured: {
      eyebrow: "Featured Videos",
      title: "Free Educational Videos",
      subtitle:
        "Watch our Garbh Sanskar video series on YouTube — available in Hindi and English, free for every family.",
      playlistCta: "View Full Playlist on YouTube",
    },
    cta: {
      title: "Want structured learning?",
      body: "Explore our comprehensive courses with structured curriculum and certification.",
      primary: "Get Personal Guidance",
      secondary: "Explore Free Services",
    },
  },

  events: {
    meta: {
      title: "Events & Activities — Divya Santan Foundation",
      description:
        "Join our workshops, seminars, and community gatherings focused on Garbh Sanskar education and awareness.",
    },
    header: {
      eyebrow: "Events & Activities",
      title: "Join our community",
      native: "हमारे समुदाय से जुड़ें",
      intro:
        "Participate in workshops, seminars, and community events to deepen your Garbh Sanskar practice and connect with like-minded families.",
    },
    upcoming: {
      eyebrow: "Upcoming Events",
      title: "What's coming next",
      subtitle:
        "Stay tuned for upcoming workshops, webinars, and community gatherings.",
    },
    past: {
      eyebrow: "Past Events",
      title: "Our activities",
    },
    cta: {
      title: "Want to organize an event?",
      body: "Connect with us to host a Garbh Sanskar workshop or awareness program in your community.",
      primary: "Contact Us",
      secondary: "Join as Volunteer",
    },
  },

  testimonials: {
    meta: {
      title: "Testimonials — Divya Santan Foundation",
      description:
        "Success stories and experiences from families who practiced Garbh Sanskar with our guidance.",
    },
    header: {
      eyebrow: "Success Stories",
      title: "Families share their journey",
      native: "परिवार अपनी यात्रा साझा करते हैं",
      intro:
        "Read heartfelt testimonials from parents who experienced the transformative practice of Garbh Sanskar.",
    },
    stories: {
      eyebrow: "Real Stories",
      title: "Testimonials from families",
      subtitle:
        "Discover how Garbh Sanskar has impacted the lives of families across the world.",
    },
    impact: {
      eyebrow: "Our Impact",
      title: "Making a difference",
      families: "Families Guided",
      births: "Healthy Births",
      satisfaction: "Satisfaction Rate",
    },
    cta: {
      title: "Ready to begin your journey?",
      body: "Join thousands of families who are nurturing conscious, healthy generations through Garbh Sanskar.",
      primary: "Get Started",
      secondary: "Join the Mission",
    },
  },

  join: {
    meta: {
      title: "Join the Mission — Divya Santan Foundation",
      description:
        "Become a Prerak, volunteer, faculty member or consultant, or collaborate with us as an institution or CSR partner.",
    },
    header: {
      eyebrow: "Participate",
      title: "Join the mission",
      native: "",
      intro:
        "This movement grows through people. Choose the role that fits your time, skill and intent.",
    },
    roles: { eyebrow: "Roles", title: "Ways to contribute" },
    process: {
      eyebrow: "Process",
      title: "From interest to service",
      steps: {
        expressInterest: "Express interest",
        orientation: "Orientation",
        training: "Training",
        serve: "Serve your community",
      } satisfies Record<JoinProcessStepId, string>,
    },
    cta: {
      title: "Tell us how you'd like to help",
      body: "Write to us with your role of interest and preferred language.",
      primary: "Contact the Team",
      secondary: "See Training Tracks",
    },
  },

  contact: {
    meta: {
      title: "Contact & Guidance — Divya Santan Foundation",
      description:
        "Reach the Divya Santan Foundation team for free educational guidance, class registration, volunteering or collaboration.",
    },
    header: {
      eyebrow: "Contact",
      title: "Get guidance",
      native: "",
      intro:
        "Ask about classes, courses, volunteering or collaboration. Educational guidance is always free.",
    },
    form: {
      name: "Name",
      contactPoint: "Email or phone",
      subject: "I am writing about",
      message: "Message",
      submit: "Send message",
      success:
        "Thank you — this is a demo form, so nothing was sent. In the live site our team replies within two working days.",
      topics: {
        freeClasses: "Free classes",
        courses: "Courses & training",
        volunteering: "Volunteering / Prerak",
        research: "Research collaboration",
        other: "Something else",
      } satisfies Record<ContactTopicId, string>,
    },
    details: {
      email: "Email",
      phone: "Phone",
      office: "Office",
    } satisfies Record<ContactDetailId, string>,
    officeAddress: "Indore, Madhya Pradesh, India",
    note: {
      title: "A note on guidance",
      body: "Our guidance is educational. For any medical question or concern during pregnancy, please consult your doctor or a qualified healthcare professional.",
    },
  },

  content: {
    basics: {
      preConception: {
        title: "Before Conception",
        native: "",
        body: "Preparing body, mind and home environment together as a couple, months before pregnancy begins.",
      },
      pregnancyJourney: {
        title: "Pregnancy Journey",
        native: "",
        body: "Month-by-month learning on diet, rest, movement, emotions and daily rhythm.",
      },
      garbhSamvad: {
        title: "Garbh Samvad",
        native: "",
        body: "Conscious communication with the unborn child through voice, music, reading and stillness.",
      },
      familyEnvironment: {
        title: "Family & Environment",
        native: "",
        body: "The father, family and surroundings shape the experience of the mother and the child.",
      },
    } satisfies Record<GarbhBasicId, AccentedCopy>,

    timeline: {
      preConception: "Pre-Conception",
      pregnancy: "Pregnancy",
      birth: "Birth",
      earlyLife: "Early Life",
      futureGeneration: "Future Generation",
    } satisfies Record<TimelineId, string>,

    pillars: {
      education: {
        title: "Education",
        native: "",
        body: "Structured, accessible learning on Garbh Sanskar for families everywhere.",
      },
      training: {
        title: "Training",
        native: "",
        body: "Capacity building of Preraks, educators and facilitators.",
      },
      awareness: {
        title: "Awareness",
        native: "",
        body: "Community programmes that carry knowledge to every village and city.",
      },
      research: {
        title: "Research",
        native: "",
        body: "Evidence-oriented study, documentation and academic collaboration.",
      },
      socialTransformation: {
        title: "Social Transformation",
        native: "",
        body: "Stronger families, compassionate society, responsible generations.",
      },
    } satisfies Record<PillarId, AccentedCopy>,

    journeys: {
      planning: {
        title: "Planning Pregnancy",
        native: "",
        body: "Begin with preconception learning as a couple.",
        steps: ["Preconception", "Garbhadhana", "Classes", "Ask Shree"],
      },
      pregnant: {
        title: "I Am Pregnant",
        native: "",
        body: "Month-wise learning on diet, yoga, music and Garbh Samvad.",
        steps: ["Select month", "Daily practice", "Classes", "Ask Shree"],
      },
      fathers: {
        title: "For Fathers & Families",
        native: "",
        body: "Understand the role of the father and the household.",
        steps: ["Understand", "Participate", "Support"],
      },
      educators: {
        title: "For Educators",
        native: "",
        body: "Teach Garbh Sanskar with structured curriculum and material.",
        steps: ["Foundation course", "Faculty track", "Teach"],
      },
      socialWorkers: {
        title: "For Social Workers",
        native: "",
        body: "Carry awareness into communities as a trained Prerak.",
        steps: ["Learn", "Prerak training", "Serve society"],
      },
      researchers: {
        title: "For Researchers",
        native: "",
        body: "Explore evidence, publications and collaboration.",
        steps: ["Research", "Publications", "Collaborate"],
      },
    } satisfies Record<JourneyId, JourneyCopy>,

    learnTopics: {
      whatIs: {
        title: "What is Garbh Sanskar?",
        native: "",
        body: "The idea, its cultural roots and its place in modern family life.",
      },
      preConception: {
        title: "Pre-Conception",
        native: "",
        body: "Preparation of body, mind and environment before pregnancy.",
      },
      pregnancyJourney: {
        title: "Pregnancy Journey",
        native: "",
        body: "Month-by-month learning, routine and reflection.",
      },
      garbhSamvad: {
        title: "Garbh Samvad",
        native: "",
        body: "Conscious communication with the unborn child.",
      },
      fatherFamily: {
        title: "Father & Family",
        native: "",
        body: "Shared responsibility within the household.",
      },
      ayurvedaLifestyle: {
        title: "Ayurveda & Lifestyle",
        native: "",
        body: "Traditional lifestyle wisdom, read responsibly.",
      },
      postnatalCare: {
        title: "Postnatal Care",
        native: "",
        body: "Nurturing continues after birth, for mother and child.",
      },
    } satisfies Record<LearnTopicId, AccentedCopy>,

    freeServices: {
      onlineClasses: {
        title: "Free Online Classes",
        native: "",
        body: "Weekly live sessions in Hindi and English, open to every family.",
      },
      educationalVideos: {
        title: "Free Educational Videos",
        native: "",
        body: "A growing library of short, practical learning videos.",
      },
      guidance: {
        title: "Free Guidance",
        native: "",
        body: "Educational guidance sessions to help you find the right learning path.",
      },
      communityAwareness: {
        title: "Community Awareness",
        native: "",
        body: "Village, school and institution programmes led by trained volunteers.",
      },
      publications: {
        title: "Books & Publications",
        native: "",
        body: "Bilingual booklets and reference material for families and educators.",
      },
    } satisfies Record<FreeServiceId, AccentedCopy>,

    videos: {
      intro: {
        title: "Introduction to Garbh Sanskar",
        native: "",
        description:
          "A foundational overview of conscious prenatal nurturing, Vedic traditions & modern science.",
        category: "Foundations",
      },
      garbhSamvad: {
        title: "Garbh Samvad — Talking to Your Baby",
        native: "",
        description:
          "Daily guide on how to establish a deep, loving connection with your unborn child.",
        category: "Practice",
      },
      musicMantra: {
        title: "Music & Mantra in Pregnancy",
        native: "",
        description:
          "The science and tradition behind acoustic resonance and Vedic mantras during pregnancy.",
        category: "Music & Mantras",
      },
      first1000Days: {
        title: "First 1,000 Days & Epigenetics",
        native: "",
        description:
          "Scientific research on how prenatal atmosphere and maternal state shape fetal brain growth.",
        category: "Science",
      },
      nutrition: {
        title: "Nutrition & Sattvic Diet",
        native: "",
        description: "Dietary principles for a healthy pregnancy rooted in Ayurveda.",
        category: "Nutrition",
      },
      fatherRole: {
        title: "Role of the Father in Garbh Sanskar",
        native: "",
        description: "Why the father's involvement is central to the practice.",
        category: "Family",
      },
      prenatalYoga: {
        title: "Prenatal Yoga & Pranayama",
        native: "",
        description: "Safe breathing and movement practices for every trimester.",
        category: "Wellness",
      },
    } satisfies Record<VideoId, VideoCopy>,

    instagramReels: {
      reelGarbhSanskar: {
        title: "Quick Guide to Garbh Sanskar",
        native: "",
        description: "Short overview of how to start your Garbh Sanskar journey.",
        category: "Foundations",
      },
      reelMantras: {
        title: "Mantras for Pregnancy",
        native: "",
        description: "Calming mantras you can practice daily during pregnancy.",
        category: "Practice",
      },
      reelNutrition: {
        title: "Sattvic Nutrition Tips",
        native: "",
        description: "Simple dietary tips for a healthy pregnancy rooted in Ayurveda.",
        category: "Nutrition",
      },
    } satisfies Record<InstaReelId, InstaReelCopy>,

    courses: {
      foundation: {
        title: "Foundation Course in Garbh Sanskar",
        native: "",
        format: "Online",
        duration: "6 weeks",
        level: "Open to all learners",
        body: "Core concepts, cultural roots and contemporary understanding of conscious nurturing.",
      },
      coupleEducation: {
        title: "Pregnant Couple Education",
        native: "",
        format: "Live + recorded",
        duration: "9 modules",
        level: "For expecting couples",
        body: "Month-wise learning for the couple, covering routine, diet, samvad and family support.",
      },
      prerakTraining: {
        title: "Prerak Training Programme",
        native: "",
        format: "Hybrid",
        duration: "12 weeks",
        level: "For volunteers & social workers",
        body: "Training to carry awareness into communities responsibly and respectfully.",
      },
      recordedLibrary: {
        title: "Recorded Classes Library",
        native: "",
        format: "Self-paced",
        duration: "Ongoing",
        level: "All levels",
        body: "Revisit sessions any time, in Hindi and English, at your own rhythm.",
      },
      educatorCertification: {
        title: "Educator Certification",
        native: "",
        format: "Assessed",
        duration: "16 weeks",
        level: "For faculty track",
        body: "Structured assessment and mentorship for those who wish to teach.",
      },
    } satisfies Record<CourseId, CourseCopy>,

    knowledgeCategories: {
      all: "All",
      foundations: "Foundations",
      pregnancy: "Pregnancy",
      practice: "Practice",
      science: "Science",
      nutrition: "Nutrition",
      family: "Family",
      culture: "Culture",
    } satisfies Record<KnowledgeCategoryId, string>,

    knowledgeArticles: {
      whatIsGarbhSanskar: {
        title: "What is Garbh Sanskar?",
        readTime: "6 min read",
        body: "An introduction to intra-uterine nurturing as an educational and cultural practice.",
      },
      monthByMonth: {
        title: "Pregnancy Month-by-Month",
        readTime: "12 min read",
        body: "What to learn, practise and observe through each month of the journey.",
      },
      garbhSamvad: {
        title: "Garbh Samvad",
        readTime: "5 min read",
        body: "Simple daily ways of communicating with the unborn child.",
      },
      scienceResearch: {
        title: "Science & Research",
        readTime: "9 min read",
        body: "How epigenetics and prenatal psychology inform our educational approach.",
      },
      sattvicDiet: {
        title: "Sattvic Diet Through Pregnancy",
        readTime: "7 min read",
        body: "Traditional food wisdom read alongside contemporary nutrition guidance.",
      },
      fatherRole: {
        title: "The Role of the Father",
        readTime: "4 min read",
        body: "Participation, patience and emotional steadiness within the household.",
      },
      yogaBreathStillness: {
        title: "Yoga, Breath & Stillness",
        readTime: "8 min read",
        body: "Gentle practices suited to different stages, to be learned under guidance.",
      },
      sanskarsThroughAges: {
        title: "Sanskars Through the Ages",
        readTime: "10 min read",
        body: "Cultural continuity of nurturing rituals across Indian traditions.",
      },
    } satisfies Record<KnowledgeArticleId, ArticleCopy>,

    researchTopics: {
      epigenetics: {
        field: "Molecular biology",
        topic: "Epigenetics",
        summary:
          "How environment and lifestyle may influence gene expression during development.",
      },
      fetalDevelopment: {
        field: "Developmental science",
        topic: "Fetal Development",
        summary: "Stage-wise growth of sensory, motor and neurological capacities.",
      },
      prenatalPsychology: {
        field: "Psychology",
        topic: "Prenatal Psychology",
        summary:
          "Studies on responsiveness of the fetus to voice, rhythm and emotional context.",
      },
      maternalStress: {
        field: "Public health",
        topic: "Maternal Stress",
        summary: "Literature on stress, support systems and maternal wellbeing.",
      },
      nutrition: {
        field: "Nutrition science",
        topic: "Nutrition",
        summary: "Dietary patterns during pregnancy and their documented associations.",
      },
      yogaMeditation: {
        field: "Mind-body practice",
        topic: "Yoga & Meditation",
        summary: "Reviews of gentle movement and breath practices in maternal care.",
      },
      musicFetalResponse: {
        field: "Neuroscience",
        topic: "Music & Fetal Response",
        summary: "Observed responses to sound and music in the third trimester.",
      },
    } satisfies Record<ResearchTopicId, ResearchTopicCopy>,

    joinRoles: {
      prerak: {
        title: "Become a Prerak",
        native: "",
        body: "Trained community educators who carry Garbh Sanskar awareness to families.",
      },
      volunteer: {
        title: "Volunteer",
        native: "",
        body: "Contribute time and skills to programmes, translation, media or events.",
      },
      faculty: {
        title: "Become Faculty",
        native: "",
        body: "Teach within our courses after completing the certification track.",
      },
      consultant: {
        title: "Become Consultant",
        native: "",
        body: "Qualified professionals supporting families with educational guidance.",
      },
      institutional: {
        title: "Institutional Collaboration",
        native: "",
        body: "Universities, hospitals and cultural institutions working with us.",
      },
      csr: {
        title: "CSR Collaboration",
        native: "",
        body: "Partner to take free education to underserved communities.",
      },
    } satisfies Record<JoinRoleId, AccentedCopy>,

    testimonials: {
      couples: {
        group: "Couples",
        quote:
          "We began learning nine months before planning our family. The classes helped us build a calmer, more conscious home.",
        name: "Anita & Rohit",
        role: "Learners, Indore",
      },
      students: {
        group: "Students",
        quote:
          "The foundation course connected cultural understanding with what I was reading in developmental science.",
        name: "Meera K.",
        role: "Postgraduate student, Pune",
      },
      volunteers: {
        group: "Volunteers",
        quote:
          "As a Prerak I now hold monthly awareness sessions in three villages. The material is respectful and easy to share.",
        name: "Suresh P.",
        role: "Prerak, Madhya Pradesh",
      },
      faculty: {
        group: "Faculty",
        quote:
          "What I value most is the insistence on responsible, educational language — no promises, only learning.",
        name: "Dr. Kavita S.",
        role: "Faculty, Garbh Sanskar education",
      },
    } satisfies Record<TestimonialId, TestimonialCopy>,

    synergy: {
      soundNeuroscience: {
        category: "Vibrational Science",
        ancientTitle: "Om & Ved Mantras",
        ancientDesc:
          "The primordial sound & rhythmic Vedic mantras generate precise acoustic vibrations that resonate through amniotic fluid.",
        scienceTitle: "Auditory Neuroscience & Synaptogenesis",
        scienceDesc:
          "Fetal auditory pathways respond from Week 18. Structured acoustic stimulation accelerates neural plasticity, auditory cortex development, and resting heart-rate stability.",
        statLabel: "Auditory Response",
        statValue: "Week 18+",
        tags: ["Sound Therapy", "Neural Plasticity", "Acoustic Resonance"],
      },
      epigeneticsLotus: {
        category: "Environmental Epigenetics",
        ancientTitle: "Sattvic Environment",
        ancientDesc:
          "Rooted in purity — serene surroundings, elevated thoughts, and sacred atmosphere shape the developing consciousness.",
        scienceTitle: "Maternal Cortisol & Epigenetic Expression",
        scienceDesc:
          "Maternal emotional calm reduces cortisol transmission through the placenta, optimizing fetal gene expression and neuro-endocrine receptor sensitivity.",
        statLabel: "Epigenetic Window",
        statValue: "1,000 Days",
        tags: ["Epigenetics", "Cortisol Regulation", "Gene Expression"],
      },
      triadEndocrinology: {
        category: "Systemic Harmony",
        ancientTitle: "Trishul Triad Balance",
        ancientDesc:
          "Harmonizing the three essential forces — Physical vitality (Kaya), Emotional peace (Manas), and Spiritual energy (Prana).",
        scienceTitle: "Placental Neuro-Endocrine Axis",
        scienceDesc:
          "Synchronizing maternal metabolic rate, vagal autonomic tone, and endocrine secretions to create optimal oxygenation and fetal cell construction.",
        statLabel: "Systemic Sync",
        statValue: "3-Fold Harmony",
        tags: ["Autonomic Tone", "Hormonal Balance", "Homeostasis"],
      },
      samvadLimbic: {
        category: "Prenatal Psychology",
        ancientTitle: "Swastik & Garbh Samvad",
        ancientDesc:
          "Auspicious intentional dialogue, rhythmic storytelling, and heart-to-heart communication with the child every single day.",
        scienceTitle: "Limbic System & Cardiac Coherence",
        scienceDesc:
          "Maternal voice frequency creates deep limbic bonding. Real-time ultrasound proves fetal heart-rate stabilization and limb relaxation when hearing maternal voice.",
        statLabel: "Brain Development",
        statValue: "70% Pre-birth",
        tags: ["Limbic Wiring", "Maternal Voice", "Bonding Science"],
      },
      aharaEpigenomics: {
        category: "Nutritional Priming",
        ancientTitle: "Sattvic Ahara & Vihara",
        ancientDesc:
          "Pure, seasonal nutrition coupled with daily gentle yoga, conscious breathing (Pranayama), and restful biological rhythm.",
        scienceTitle: "Nutritional Epigenomics & Microbiome",
        scienceDesc:
          "Bioactive micronutrients act as methyl donors modifying chromatin structure, establishing robust metabolic, immune, and gut-microbiome foundations.",
        statLabel: "Lifelong Health Impact",
        statValue: "Peer Reviewed",
        tags: ["Nutritional Epigenetics", "Ayurvedic Ahara", "Metabolic Health"],
      },
      suryaChronobiology: {
        category: "Circadian Science",
        ancientTitle: "Surya Namaskar & Brahma Muhurta",
        ancientDesc:
          "Aligning daily routine with sunrise, gentle morning sunlight exposure, and early natural sleep-wake cycles.",
        scienceTitle: "Melatonin & Fetal Biological Clocks",
        scienceDesc:
          "Natural sunlight exposure regulates maternal melatonin and cortisol circadian pulses, programming fetal suprachiasmatic nucleus biological clocks.",
        statLabel: "Circadian Sync",
        statValue: "24-Hour Rhythm",
        tags: ["Melatonin Regulation", "Chronobiology", "Circadian Clocks"],
      },
      pranayamaRespiratory: {
        category: "Respiratory Physiology",
        ancientTitle: "Pranayama & Anulom-Vilom",
        ancientDesc:
          "Conscious alternate nostril breathing and deep diaphragmatic breath awareness for continuous energetic purity.",
        scienceTitle: "Placental Oxygenation & Vagal Tone",
        scienceDesc:
          "Rhythmic slow breathing increases maternal arterial oxygen partial pressure and enhances cardiac vagal nerve tone, preventing intra-uterine hypoxia.",
        statLabel: "Oxygen Saturation",
        statValue: "Vagal Boost",
        tags: ["Arterial Oxygenation", "Vagal Nerve Tone", "Diaphragmatic Breath"],
      },
      kathaMemory: {
        category: "Cognitive Priming",
        ancientTitle: "Sacred Lore & Katha Recitation",
        ancientDesc:
          "Reading inspiring stories, moral values, and uplifting scriptures out loud to impart early character foundations.",
        scienceTitle: "Temporal Lobe Memory Priming",
        scienceDesc:
          "Electroencephalography (EEG) and auditory evoked potential studies demonstrate that third-trimester fetuses encode phoneme patterns and remember familiar nursery rhymes post-birth.",
        statLabel: "Neural Memory",
        statValue: "Postnatal Memory",
        tags: ["Auditory Encoding", "Phoneme Recognition", "Cognitive Priming"],
      },
    } satisfies Record<SynergyPillarId, SynergyCopy>,
  },
};
