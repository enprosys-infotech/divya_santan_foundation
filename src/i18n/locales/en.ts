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
        planningCouple: { label: "Planning Pregnancy", sub: "Pre-conception guidance" },
        pregnantWoman: { label: "Pregnant Woman", sub: "Month-by-month journey" },
        socialWorker: { label: "Social Worker", sub: "Become a Prerak" },
        academicPerson: { label: "Academic / Researcher", sub: "Research & evidence" },
        consultant: { label: "Consultant", sub: "Join the mission" },
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
    whoBenefits: {
      eyebrow: "Your Path Starts Here",
      title: "Who Can Benefit?",
      subtitle:
        "Five different visitors — five clear journeys. Find yours below and follow it step by step.",
    },
    foundations: {
      eyebrow: "Foundations & Approach",
      title: "What is Garbh Sanskar & Our 5 Pillars",
      subtitle:
        "Combining ancient intra-uterine nurturing wisdom with a structured 5-pillar educational framework.",
      pillarsLabel: "Our 5 Pillars of Action",
      whatIs: {
        title: "What is Garbh Sanskar?",
        definition: "Garbh Sanskar is derived from two Sanskrit words — Garbh, meaning womb, and Sanskar, meaning refinement, cultivation, and positive transformation.",
        philosophy: "In Vedic philosophy, the womb is regarded as a sacred space where a new life develops physically, mentally, emotionally, and spiritually. Sanskar represents the nurturing of positive thoughts, values, habits, emotions, and consciousness.",
        approach: "Garbh Sanskar is therefore a holistic way of caring for and nurturing the unborn child during pregnancy through healthy lifestyle, nutritious food, positive thoughts, prayer, mantra, meditation, yoga, music, good conduct, family harmony, and appropriate Vedic practices.",
        science: "Modern science also recognizes that the mother's nutrition, health, emotional state, stress levels, lifestyle, and environment can influence pregnancy and fetal development. Practices such as meditation, chanting, relaxation, and positive maternal interaction can help create a peaceful and supportive environment for both mother and baby.",
        principle: {
          title: "A Simple Principle",
          body: "The baby is not merely in the mother's womb — the baby is with the mother every moment. The mother's food, emotions, daily routine, surroundings, conversations, and experiences together create the environment in which the unborn child develops.",
          conclusion: "Garbh Sanskar therefore encourages the mother and family to consciously create a healthy, peaceful, positive, and value-based environment throughout pregnancy.",
        },
        quote: "Garbh Sanskar is the process of nurturing the unborn child with health, positive values, knowledge, emotions, and consciousness from within the womb.",
        disclaimer: "Garbh Sanskar is complementary to modern medical care and not a substitute for it. Every pregnant woman should remain under regular guidance of her gynecologist and follow appropriate medical advice, examinations, investigations, and treatment.",
        source: "Source: The Science of Garbh Sanskar — Dr. Anil Kumar Garg & Dr. Seema Garg",
        whyMatters: {
          title: "Why it matters",
          body: "The aim of Garbh Sanskar is to nurture a baby who is physically, mentally, emotionally, socially, and spiritually healthy. In the modern era, pregnancy is increasingly influenced by stress, unhealthy lifestyle, poor nutrition, environmental toxins, substance exposure, and disturbed family environments. These factors can adversely affect maternal well-being and may also influence fetal growth, brain development, immunity, and long-term health. Garbh Sanskar promotes a holistic approach to pregnancy by integrating physical health, proper nutrition, emotional balance, positive thinking, social harmony, spiritual practices, and appropriate medical care.",
        },
      },
    },
    hub: {
      eyebrow: "Comprehensive Learning & Support Hub",
      title: "Everything You Need — Free & Consultation",
      subtitle:
        "Videos, classes, books, courses, AI guidance and expert consultation — all organized in one place.",
      tabs: {
        videos: "Videos",
        freeServices: "Free Services",
        courses: "Courses",
        knowledge: "Knowledge",
        consultation: "Consultation",
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
      freeServices: {
        title: "Always Free — Core Education",
        description:
          "Our core Garbh Sanskar educational services are, and will remain, 100% free to all families.",
        items: [
          {
            icon: "classes",
            title: "Free Online Guidance Classes",
            body: "Twice-a-month live sessions by Garbh Sanskar counsellors, yoga therapists, music therapists, and nutrition advisors.",
          },
          {
            icon: "ai",
            title: "Ask Shree AI",
            body: "AI companion based on 'Garbh Sanskar Ka Vigyan' by Dr. Anil & Dr. Seema Garg. Get personalized answers for your situation.",
          },
          {
            icon: "booklet",
            title: "Monthly Guidance Booklet",
            body: "Free PDF guiding pregnant women through all 9 months — lifestyle, nutrition, yoga, music, mantras and precautions.",
          },
          {
            icon: "book",
            title: "Garbh Sanskar Ka Vigyan (Book)",
            body: "Comprehensive 400-page book by Dr. Anil & Dr. Seema Garg explaining the science, practices and month-by-month guidance. Available on Amazon.",
          },
          {
            icon: "youtube",
            title: "YouTube Video Series",
            body: "Free scientific video series in Hindi and English. Subscribe to get notified about new educational content.",
          },
          {
            icon: "instagram",
            title: "Instagram Reels",
            body: "Short, inspiring Garbh Sanskar moments and daily wisdom. Follow for bite-sized learning.",
          },
        ],
        schedule: {
          title: "Upcoming Free Classes",
          subtitle: "Join our weekly live sessions — no registration fee, open to all families.",
          sessions: [
            { day: "Every Sunday", topic: "Introduction to Garbh Sanskar", duration: "Hindi · 60 min" },
            { day: "Every Wednesday", topic: "Garbh Samvad Practice Circle", duration: "Hindi & English · 45 min" },
            { day: "First Saturday", topic: "Fathers & Family Session", duration: "English · 60 min" },
            { day: "Monthly", topic: "Community Awareness Programme", duration: "Regional languages" },
          ],
          cta: "Register for Free Class",
        },
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
      consultation: {
        badge: "Expert Support",
        title: "Divyankur — Online Consultation Platform",
        tagline: "Affordable & Convenient Expert Guidance",
        description:
          "For those who need personalized expert guidance, Divyankur connects you with qualified Garbh Sanskar consultants through our mobile app. Download, register, choose a consultation package and connect with an expert.",
        steps: ["Download App", "Register", "Choose Package", "Connect with Expert"],
        note: "Consultation is a supportive service. All core education remains free.",
        cta: "Download Divyankur App",
        androidLabel: "Get it on Google Play",
        iosLabel: "Download on App Store",
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
        testimonials: "Testimonials",
      },
    },
    socialMission: {
      eyebrow: "Our Social Mission",
      title: "A World of Peace, Health & Divine Harmony",
      vasudhaiva: "Vasudhaiva Kutumbakam",
      vasudhaivaMeaning: "The entire world is one family.",
      body: "The primary objective of the Divine Santan Foundation is to foster a world characterized by peace, love, compassion, happiness, health, prosperity, and ultimately, divine harmony. Through a comprehensive approach, we aim to uplift humanity and create a global community where every individual thrives in spiritual fulfillment and material well-being.",
      epigenetics: "The Divine Santan Foundation utilizes the principles of epigenetics to influence the phenotypic expression of genes during pregnancy. By implementing a series of lifestyle, dietary, and spiritual practices, we aim to cultivate a divine environment for the unborn child — nurturing holistic development encompassing physical, mental, emotional, and spiritual dimensions.",
      pillars: [
        { icon: "peace", label: "Peace & Harmony" },
        { icon: "love", label: "Love & Compassion" },
        { icon: "health", label: "Health & Wellness" },
        { icon: "epigenetics", label: "Epigenetics Applied" },
        { icon: "global", label: "Vasudhev Kutumbakam" },
      ],
      cta: "Learn About Our Foundation",
    },
    leadership: {
      eyebrow: "Guided by Vision & Wisdom",
      title: "Our Patrons & Leadership",
      subtitle: "Spiritual masters, medical experts, and visionary philanthropists united in nurturing compassionate generations",
      meetTeam: "Meet the full team",
      important: "Important:",
      members: {
        avdheshanand: {
          name: "Pujya Swami Avdheshanand Giri Ji Maharaj",
          role: "Chief Patron",
          bio: "Spiritual guidance & cultural preservation",
        },
        anil: {
          name: "Dr. Anil Garg",
          role: "Founder & Managing Director",
          bio: "MBBS, MS, MCh · Integrating medicine with ancient wisdom",
        },
        vinod: {
          name: "Shree Vinod Agarwal",
          role: "Founder & Chairman",
          bio: "Philanthropist driving the institutional foundation",
        },
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
    intro: {
      title: "Let's Connect",
      subtitle: "Have a question, want to learn more, or wish to be part of the movement? We'd love to hear from you.",
      support: "Learn • Participate • Collaborate • Grow",
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
    movement: {
      title: "Be Part of the Movement",
      description: "Whether you are a parent, educator, practitioner, researcher, volunteer, or someone curious about Garbh Sanskar, there is a place for you in this journey.",
      ctaExplore: "Explore Education",
      ctaJoin: "Join the Community",
      ctaResources: "Explore Resources",
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
      planningCouple: {
        title: "Couple Planning Pregnancy",
        native: "गर्भधारण की तैयारी",
        body: "Begin months before conception — preparing body, mind, and environment as a couple for a conscious and sacred start.",
        steps: ["Planning Pregnancy", "Preconception Guidance", "Garbhadhana Sanskar", "Classes", "Ask Shree", "Consultation"],
      },
      pregnantWoman: {
        title: "I Am Pregnant",
        native: "मैं गर्भवती हूँ",
        body: "Month-by-month guidance on diet, yoga, music, Garbh Samvad, and precautions — everything a pregnant mother needs.",
        steps: ["I Am Pregnant", "Select Pregnancy Month", "Diet + Yoga + Music + Garbh Samvad + Precautions", "Join Classes", "Ask Shree"],
      },
      socialWorker: {
        title: "Social Worker",
        native: "सामाजिक कार्यकर्ता",
        body: "Learn Garbh Sanskar, complete the Foundation Course, become a trained Prerak, and serve your community.",
        steps: ["Learn Garbh Sanskar", "Foundation Course", "Become Prerak", "Serve Society"],
      },
      academicPerson: {
        title: "Academic Person",
        native: "शोधकर्ता",
        body: "Explore scientific evidence, research publications, academic courses, and collaboration opportunities.",
        steps: ["Research", "Scientific Evidence", "Publications", "Courses", "Collaboration"],
      },
      consultant: {
        title: "Consultant",
        native: "परामर्शदाता",
        body: "Join the mission as a qualified Garbh Sanskar consultant — apply, get verified, train, and begin practice.",
        steps: ["Join the Mission", "Apply as Consultant", "Verification", "Training", "Practice"],
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
  
  aboutPage: {
    labels: {
      tabs: {
        vision: "About DSF & Vision",
        pillars: "Five Pillars",
        journey: "History & Journey",
        leadership: "Leadership & Patrons",
      },
      keyObjectivesTitle: "Our Key Objectives",
      pillarsEyebrow: "20-Year Strategic Pillars",
      pillarsTitle: "Five Pillars of Divya Santan Prakalp",
      historyEyebrow: "History",
      historyTitle: "The Journey of Divya Santan Foundation",
      patronsEyebrow: "Divine Blessings",
      patronsTitle: "Chief Patrons & Patrons",
      patronsSubtitle: "Their blessings and spiritual support are the foundation of this mission.",
      foundersEyebrow: "Governance",
      foundersTitle: "Founders & Board of Directors",
      foundersSubtitle: "The driving force behind the global vision.",
      advisorsEyebrow: "Advisory Council",
      advisorsTitle: "Guided by Wisdom",
      advisorsSubtitle: "Driven by Values. Committed to Nation.",
      councilEyebrow: "Executive Council",
      councilTitle: "Operational Leadership",
      councilSubtitle: "Leading the movement across communities."
    },
    vision: {
      intro: "A step to divine world having Love, Compassion, and Peace.",
      title: "20-Year Vision & Global Roadmap for Garbh Sanskar",
      paragraphs: [
        "Our efforts are dedicated to empowering families, cultivating a cultured society, and filling the world with love, compassion, and peace.",
        "We have complete faith that through Garbh Sanskar, we can nurture divine, cultured, and conscious generations.",
        "Through our thoughts, conduct, and spirit of service, we can make this world more humane, harmonious, and divine.",
        "Modern society is witnessing a rapid rise in congenital disorders, neurodevelopmental conditions such as Autism Spectrum Disorder (ASD) and Attention Deficit Hyperactivity Disorder (ADHD), learning disabilities, emotional instability, anxiety, depression, and lifestyle-related health challenges in children. Scientific evidence increasingly confirms that many of these conditions originate during the prenatal period, influenced by maternal stress, nutrition, emotional state, hormonal balance, lifestyle, and environmental factors.",
        "Despite advances in medical treatment, contemporary healthcare systems primarily address disease after birth, leaving a critical gap in preventive, prenatal, and holistic human development. There is an urgent need for an integrated approach that focuses on conscious conception, prenatal care, and early neuro-psychological nurturing.",
        "Garbh Sanskar is a scientifically aligned, culturally rooted, and holistic life science that addresses this need. It integrates modern medical understanding of fetal development, epigenetics, neuroendocrinology, and mental health with time-tested practices of yoga, meditation, music therapy, positive cognition, ethical values, and lifestyle regulation. This approach supports the physical, mental, emotional, social, and spiritual development of the unborn child while enhancing maternal well-being.",
        "The Divya Santan Foundation (DSF) envisions Garbh Sanskar as a global preventive health and social transformation initiative. Its objective is to nurture healthier progeny, strengthen families, reduce long-term healthcare burdens, and build compassionate, emotionally stable, and value-based societies.",
        "By shifting the focus from disease management to conscious human creation, Garbh Sanskar offers a sustainable solution for public health, mental well-being, and societal harmony. It represents not merely a program, but a transformative movement toward a healthier, more humane, and peaceful world."
      ],
      coreObjectiveTitle: "Core Objective",
      coreObjectiveList: [
        "Healthy progeny",
        "Strong families",
        "Harmonious societies",
        "A compassionate and peaceful world"
      ],
      coreObjectiveDesc: "To scientifically, spiritually, and socially establish Garbh Sanskar as a global discipline that nurtures. The core objective of Garbh Sanskar is to establish it as a global discipline that is recognized and valued across scientific, spiritual, and social dimensions. The aim is to nurture and support the growth of healthy progeny, ensuring that children are born with optimal physical, mental, and emotional well-being. By doing so, Garbh Sanskar also seeks to build strong families that serve as the foundation for a harmonious society. Ultimately, these efforts are directed toward creating a compassionate and peaceful world, where the values of love, understanding, and harmony prevail."
    },
    section8: {
      title: "Divya Santan Foundation - A Section 8 Non-Profit Organization",
      description: "Divya Santan Foundation is a Section 8 non-profit organization dedicated to promoting the science and practice of Garbh Sanskar, conscious parenthood, maternal well-being, and holistic development of future generations.",
      vision: "The Foundation works with a vision of bringing together modern medical science and the wisdom of Ayurveda, Yoga, psychology, neuroscience, epigenetics, and traditional Vedic knowledge to develop Garbh Sanskar as a responsible, evidence-based, ethical, and accessible approach to preconception and prenatal care.",
      whatIsSection8: {
        title: "What is a Section 8 Non-Profit Organization?",
        paragraphs: [
          "A Section 8 Company, established under the Companies Act, 2013, is created to serve charitable, scientific, educational, research, social-welfare, and other public-benefit objectives rather than for private commercial profit.",
          "Any income or surplus generated by such an organization is utilized for advancing its mission and charitable objectives and is not distributed as dividend among its members.",
          "Thus, Divya Santan Foundation is committed to working for public benefit, education, research, healthcare awareness, and social development."
        ]
      },
      keyObjectives: [
        "Promote scientific research and evidence-based understanding of Garbh Sanskar and prenatal development.",
        "Create awareness among couples and families about preconception care, healthy pregnancy, conscious parenting, and maternal and child well-being.",
        "Organize scientific conferences, workshops, educational programs, professional training, and community outreach activities.",
        "Develop structured certificate, diploma, postgraduate, research, and professional training programs in collaboration with universities and academic institutions.",
        "Establish Garbh Sanskar Centres and Prenatal Wellness Clinics providing affordable and accessible guidance to families.",
        "Train Garbh Sanskar counsellors, healthcare professionals, Yoga teachers, nutritionists, psychologists, ASHA workers, Anganwadi workers, volunteers, and community educators.",
        "Develop books, publications, research resources, online courses, mobile applications, tele-consultation, and AI-enabled digital platforms to make authentic knowledge accessible globally.",
        "Preserve and scientifically explore the valuable principles of Vedic wisdom, Ayurveda, Yoga, meditation, music, and traditional Indian knowledge systems.",
        "Promote collaboration among hospitals, universities, research institutions, government bodies, NGOs, and national and international organizations.",
        "Support maternal emotional health, family strengthening, early childhood wellness, and the creation of healthy, compassionate, value-oriented future generations."
      ],
      largerPurpose: {
        title: "Our Larger Purpose",
        paragraphs: [
          "Divya Santan Foundation believes that nation-building begins with the child, and the nurturing of the child begins even before birth.",
          "Our endeavor is therefore not limited to pregnancy care. It is a movement towards creating healthy children, harmonious families, a cultured and compassionate society, a strong nation, and ultimately a more peaceful world.",
          "Healthy Child → Healthy Family → Healthy Society → Strong Nation → Peaceful World",
          "From Garbh Sanskar to Rashtra Sanskar"
        ]
      }
    },
    fivePillars: [
      {
        id: "awareness",
        title: "A. Awareness & Education of Target Audience",
        sections: [
          {
            subtitle: "1. General Population",
            points: [
              "Collaboration with spiritual leaders, saints, katha vachaks, gurus, and religious organizations.",
              "Dissemination of Garbh Sanskar knowledge through religious discourses, spiritual gatherings, and cultural platforms.",
              "Integration of scientific explanations with spiritual wisdom for mass acceptance."
            ],
            body: "Promoting awareness and education about Garbh Sanskar among various segments of society is a key pillar in achieving its core objective. This involves strategic collaboration to facilitate widespread dissemination. The combination of science and spirituality bridges the gap between tradition and modernity."
          },
          {
            subtitle: "2. Students – Future Parents",
            points: [
              "Lectures and workshops in Colleges, Universities, and Educational institutions.",
              "Objective: Sensitize youth early about conscious parenthood and introduce Garbh Sanskar as a life science."
            ]
          },
          {
            subtitle: "3. Expectant Parents",
            points: [
              "Regular Garbh Sanskar classes, meetings, and counseling sessions.",
              "Focus on: Practical guidance, Emotional well-being, and Lifestyle correction.",
              "Simultaneous data collection for scientific evaluation and program refinement."
            ]
          },
          {
            subtitle: "4. Community-Based Organizational Structure",
            points: [
              "Development of a structured propagation model based on Religion, Community, and Region.",
              "Hierarchical framework: City In-charge, State In-charge, National In-charge."
            ]
          },
          {
            subtitle: "5. Central DSP Body – Role",
            points: [
              "Preparation and distribution of printed materials, digital content, videos and training modules.",
              "Providing trained speakers, mentors and master trainers.",
              "Training volunteers and educators to ensure uniform, authentic, and scientific delivery of Garbh Sanskar knowledge."
            ]
          }
        ]
      },
      {
        id: "training",
        title: "B. Educating & Training Concerned Specialists",
        sections: [
          {
            subtitle: "1. Professional Training Programs",
            points: [
              "Workshops, lectures, and online courses for Doctors, Yoga therapists, Music therapists, Psychologists, Counselors, and Spiritual practitioners."
            ],
            body: "To ensure that Garbh Sanskar knowledge is effectively imparted by qualified professionals, a variety of professional training programs are organized to provide hands-on experience and deep theoretical understanding."
          },
          {
            subtitle: "2. Academic Integration",
            points: [
              "Introduction of Diploma courses, Degree programs, and Fellowship programs.",
              "Allied subjects: Yoga, Music therapy, Psychology, Astrology (research-based), and Spiritual sciences."
            ]
          },
          {
            subtitle: "3. University & Government Collaboration",
            points: [
              "Engagement with Universities, Vice Chancellors, Governors, and Government bodies.",
              "Long-term goal: Inclusion of Garbh Sanskar concepts in medical and paramedical curricula."
            ]
          }
        ]
      },
      {
        id: "centres",
        title: "C. Garbh Sanskar Treatment Centres",
        sections: [
          {
            subtitle: "1. Establishment Phase",
            points: [
              "Creation of Garbh Sanskar centres in major cities.",
              "Centres to provide: Guidance, Counseling, and Structured Garbh Sanskar programs."
            ]
          },
          {
            subtitle: "2. Expansion Plan",
            points: [
              "Next 10 years: Expansion across India.",
              "By 20 years: Global presence."
            ]
          },
          {
            subtitle: "3. Global Outreach",
            points: [
              "Establishment of centres in USA, UK, Europe, and other global regions.",
              "Adaptation to local cultures while maintaining core principles."
            ]
          }
        ]
      },
      {
        id: "research",
        title: "D. Research, Data Collection & Scientific Validation",
        sections: [
          {
            subtitle: "1. Research Centres",
            points: [
              "Establishment of dedicated Garbh Sanskar research centres.",
              "Multidisciplinary research involving Medical science, Neuroscience, Psychology, Epigenetics, and Spiritual sciences."
            ]
          },
          {
            subtitle: "2. Academic Research",
            points: [
              "Introduction of PhD programs and Post-doctoral research.",
              "Encouraging evidence-based validation of Garbh Sanskar principles."
            ]
          },
          {
            subtitle: "3. Centralized Data System",
            points: [
              "Creation of a central data repository.",
              "Longitudinal studies for outcome analysis, program improvement, and global publication."
            ]
          }
        ]
      },
      {
        id: "association",
        title: "E. International Association of Garbh Sanskar",
        sections: [
          {
            subtitle: "1. Formation",
            points: [
              "Establishment of a global umbrella organization to connect Institutions, Practitioners, Researchers, and Educators."
            ]
          },
          {
            subtitle: "2. Scientific Exchange",
            points: [
              "Organization of Regional conferences, National conventions, and International congresses.",
              "Knowledge sharing, collaboration, and innovation."
            ]
          },
          {
            subtitle: "3. Standardization & SOP Development",
            points: [
              "Development of Standard Operating Procedures (SOPs) and uniform program structures.",
              "Ensuring authenticity, quality, and global consistency."
            ]
          }
        ]
      }
    ],
    history: [
      {
        title: "From Garbh Sanskar to Rashtra Sanskar",
        body: "Divya Santan Prakalp, now institutionalized as Divya Santan Foundation, a “Section 8 non-profit organization”, was born from a simple yet powerful thought: if we wish to build a better society and a stronger nation, we must begin with the child—even before birth."
      },
      {
        title: "The Beginning of a New Journey",
        body: "After more than three decades of professional and academic work in medicine, surgery, research, and teaching, Dr. Anil Kumar Garg and Dr. Seema Garg felt an increasing desire to contribute more deeply to society and to the well-being of future generations. A turning point came when Dr. Anil Garg attended an HSSF workshop in Mumbai, guided by Shri Gunwant Kothari Ji. The inspiring thoughts of Shri Bhaiyyaji Joshi Ji gave direction to a long-standing inner desire to work for social transformation. Subsequently, Shri Gunwant Kothari Ji encouraged Dr. Garg to work in the field of Garbh Sanskar. Dr. Hitesh Jani, Director of Garbhopnishad Foundation, Jamnagar and Dr. Karishma Nirvani played a major role in scientifically teaching and guiding us."
      },
      {
        title: "Community & Leadership Support",
        body: "Multiple meetings, detailed discussions, and extensive planning sessions were conducted with senior leaders and functionaries associated with RSS, HSSF, IMCTF, and allied organizations. Among those who contributed their valuable time, guidance, and deep thinking were Shri Yogendra Mahant, Shri Vinod Birla, Shri C. Chandramohan Dubey, Shri Rakesh Dubey, Shri Pranjal, Shri Vikas Mishra, Shri Manish Nigam, Dr. Jagdish Joshi, Mrs. Anu Purohit, Dr. Radhika Maheshwari, Shri Vinod Bandy, Mrs. Romsa Sirkanungo, Mrs. Priyanka Vedi, and many other dedicated well-wishers."
      },
      {
        title: "From Interest to Academic Commitment",
        body: "To understand Garbh Sanskar in depth and present it in a responsible and scientific manner, Dr. Anil Garg and Dr. Seema Garg completed a Post Graduate Diploma in Garbh Sanskar from Lucknow University. Now others have also done the diploma from Indore (Dr. Romsha Sirkanongo, Mrs. Milli Chouhan, Mrs. Laxmi Pastariya). Mrs. Anu Purohit has done a one-year post graduate diploma in music therapy from Kashi university. They studied ancient Indian wisdom, prenatal development, modern scientific literature, maternal health, psychology, lifestyle, yoga, meditation, and the various influences that may shape the intrauterine environment."
      },
      {
        title: "Understanding Society Before Starting the Mission",
        body: "Before proceeding further, a grassroots survey was undertaken to understand whether society was ready to accept Garbh Sanskar through a scientific and structured approach. The team travelled through Indore, Rajasthan, villages, tehsils, and different social and cultural communities. The response was overwhelming. Families showed a deep interest in understanding Garbh Sanskar in a practical, scientific, and accessible form."
      },
      {
        title: "Birth of Divya Santan Foundation",
        body: "On 19 May 2024, Divya Santan Prakalp was formally launched with a long-term vision of taking the knowledge and practice of Garbh Sanskar to families across India and eventually throughout the world. Its guiding principle became: “Nation Building Begins in the Womb.”"
      },
      {
        title: "Taking Garbh Sanskar to Society",
        body: "Numerous awareness programs and workshops were subsequently conducted. A major milestone came during the HSSF Lalbagh Mela in December 2024, where approximately 3,000 pregnant mothers and more than 2,000 other participants attended. Around 20,000 Garbh Sanskar booklets were distributed at the grassroots level, and approximately 2,200 Anganwadi workers were trained."
      },
      {
        title: "From Awareness to Service",
        body: "Garbh Sanskar OPD services were started at Geeta Bhawan Hospital, Indore, where trained specialists provide guidance to pregnant women and couples. Services have also been initiated at RK Hospital, Indore. Alongside this, free online Garbh Sanskar classes are being conducted regularly."
      },
      {
        title: "Support and Leadership of Shri Vinod Ji Agarwal",
        body: "An important milestone in the journey of Divya Santan Foundation was the association and support of renowned businessman, entrepreneur, philanthropist, and donor Shri Vinod Ji Agarwal. His guidance, vision, financial support, and provision of essential infrastructure played a significant role in strengthening and expanding the initiative."
      },
      {
        title: "Garbh Sanskar Ka Vigyan",
        body: "To make the subject available in a comprehensive, structured, and scientifically explained form, Dr. Anil Kumar Garg and Dr. Seema Garg authored the book 'Garbh Sanskar Ka Vigyan', a nearly 400-page, full-colour publication integrating ancient Indian wisdom with contemporary scientific understanding. It was formally launched at a grand event at Daly College Auditorium, Indore, graced by Shri Bhaiyyaji Joshi Ji and the Hon'ble Chief Minister of Madhya Pradesh, Dr. Mohan Yadav Ji."
      },
      {
        title: "Technology for a Global Reach",
        body: "To make Garbh Sanskar guidance available irrespective of geography, Divya Santan Foundation is developing a strong digital ecosystem. This includes an online consultation platform, digital educational resources, named as “Divyankur” and an AI-based personalized guidance system 'Ask Shree' for free guidance to pregnant mothers."
      }
    ],
    leadership: {
      patrons: [
        {
          name: "Pujya Swami Avdheshanand Giri Ji Maharaj",
          role: "Chief Patron",
          img: "Avdheshanand-maharaj.png",
          contributions: ["Spiritual Patronage", "National Awareness Support", "Cultural Preservation"],
        },
        {
          name: "Shree Pundrik Goswami Ji Maharaj",
          role: "Patron",
          img: "Pundrik-ji-maharaj.png",
          contributions: ["Spiritual Patronage", "Guidance", "Cultural Preservation"],
        },
        {
          name: "Shreemati Renuka Ji Pundrik",
          role: "Patron",
          img: "Renuka-Ji.png",
          contributions: ["Spiritual Patronage", "Guidance", "National Awareness"],
        }
      ],
      founders: [
        {
          name: "Shree Vinod Agarwal",
          role: "Founder & Chairman",
          img: "vinod-sir.png",
          desc: "Philanthropist and visionary driving the financial and institutional foundation of this national movement.",
        },
        {
          name: "Dr. Anil Kumar Garg",
          role: "Founder & Managing Director",
          credentials: "MBBS, MS, MCh Plastic Surgery, MA-Yog, ABHRS, ISHRS, Diploma in Garbh Sanskar",
          img: "doctor-anil.png",
          desc: "Medical visionary integrating clinical expertise with ancient Garbh Sanskar wisdom for a comprehensive prenatal system.",
        },
        {
          name: "Shree Radhyshyam Sharma (Guruji)",
          role: "Founder & Executive Director",
          img: "sharma-sir.png",
          desc: "Spiritual guide and value-based leadership anchor for the entire movement and its programs.",
        },
        {
          name: "Shree Yogendra Ji Mehant",
          role: "Founder & Executive Director",
          img: "yogendra-sir.png",
          desc: "Operational leader ensuring seamless execution of the strategic plan across all regions of India.",
        },
        {
          name: "Dr. Hitesh Jani",
          role: "Stake Holder",
          img: "hitesh-sir.png",
          desc: "Medical and academic advisor ensuring evidence-based rigor in every program and curriculum.",
        }
      ],
      advisors: [
        {
          name: "Shree Gunwant Kothari",
          role: "National Coordinator, HSSF",
          img: "kothari-ji.png",
          contributions: ["Spiritual Guidance", "Advisory Support", "National Outreach Support"],
        },
        {
          name: "Shree K.E.N. Raghwan",
          role: "All India Go Seva Head",
          img: "raghvan-ji.png",
          contributions: ["Spiritual Guidance", "Advisory Support", "National Outreach Support"],
        }
      ],
      executiveCouncil: [
        "Shri Vinod Birla", "Shri C. Chandramohan Dubey", "Shri Rakesh Dubey", "Shri Pranjal", 
        "Shri Vikas Mishra", "Shri Manish Nigam", "Dr. Jagdish Joshi", "Mrs. Anu Purohit", 
        "Dr. Radhika Maheshwari", "Shri Vinod Bandy", "Mrs. Romsa Sirkanungo", "Mrs. Priyanka Vedi"
      ]
    }
  },
};
