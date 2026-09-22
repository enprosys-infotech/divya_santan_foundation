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
  CourseId,
  CourseStepId,
  CompletedEventId,
  FreeServiceId,
  GarbhBasicId,
  InstaReelId,
  JoinProcessStepId,
  JoinRoleId,
  JourneyId,
  KnowledgeArticleId,
  KnowledgeCategoryId,
  KnowledgeGuideId,
  KnowledgeQAId,
  KnowledgeResourceId,
  ScientificReferenceId,
  LearnTopicId,
  MissionPointId,
  PillarId,
  ResearchCommitmentId,
  ResearchTopicId,
  ResultsStatId,
  SuccessStoryId,
  SynergyPillarId,
  TestimonialId,
  TimelineId,
  VideoCategoryId,
  VideoId,
} from "@/content/registry";
import type {
  FooterColumnId,
  FooterLinkId,
  NavChildId,
  NavGroupId,
  NavLinkId,
} from "@/content/navigation";
import avdheshanandPortrait from "@/assets/avdheshanand.jpg";
import type {
  AccentedCopy,
  ArticleCopy,
  CourseCopy,
  CompletedEventCopy,
  GuideStageCopy,
  InstaReelCopy,
  JourneyCopy,
  NavLinkCopy,
  QACopy,
  ResearchTopicCopy,
  ResourceCopy,
  ScheduleCopy,
  ScientificRefCopy,
  StatCopy,
  SuccessStoryCardContent,
  SynergyCopy,
  TestimonialCopy,
  TitledCopy,
  VideoCopy,
} from "../types";
import { CONSULTANTS } from "@/content/consultants";

export const en = {
  brand: {
    name: "Balaji Sewarth Vinod Agarwal Foundation",
    prakalp: "Divya Santan Foundation",
    supportedBy: "supported by",
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
    joinFree: "Available Services",
    askShree: "Ask Shree AI",
    guidance: "Get Guidance",
    learn: "Knowledge Center",
    needGuidance: "Need Personal Guidance?",
    joinMission: "Join the Mission",
    services: {
      title: "Continue with the right support",
      body: "Explore free classes, educational guidance, videos and community services for your next step.",
      action: "Explore available services",
    },
  },

  nav: {
    menu: "Menu",
    links: {
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
    } satisfies Record<NavLinkId, string>,
    mega: { explore: "Explore" },
    groups: {
      knowledge: "Knowledge",
      training: "Training",
      freeServices: "Services",
      research: "Research",
      joinMission: "Join the Mission",
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
        label: "Available Services",
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
    office: "2/1, R.S. Bhandari Marg, Veer Savarkar Chauraha (Janjeerwala), Indore (M.P.) 452001",
    copyright: "Divya Santan Foundation · Supported by Balaji Sewarth Vinod Agarwal Foundation",
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

  legal: {
    eyebrow: "Legal",
    lastUpdated: "Last Updated:",

    privacy: {
      title: "Privacy Policy",
      subtitle:
        "Your privacy is important to us. This Policy explains what data we collect, why we collect it, and how we protect it in accordance with the Digital Personal Data Protection Act, 2023.",
      preamble:
        "PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING THE PLATFORM AND/OR THE SERVICES. THIS POLICY EXPLAINS WHAT DATA WE COLLECT, WHY WE COLLECT IT, AND WHAT WE DO WITH IT. BY USING OUR SERVICES, YOU CONFIRM THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO THIS POLICY.",
      grievanceLink: "View Grievance Redressal Policy →",
    },

    cookie: {
      title: "Cookie Policy",
      subtitle:
        "This Cookie Policy explains what cookies and similar tracking technologies are, how and why we use them, and your rights under applicable Indian law.",
      preamble:
        'This Cookie Policy is issued by Divya Santan Prakalp Foundation ("we," "us," "our," "Foundation"), operating the website divyasantanfoundation.com (the "Platform"). This Policy forms an integral part of the Foundation\'s Privacy Framework and should be read together with the Privacy Policy and the Terms of Service & User Agreement.',
      thirdPartyTable: {
        purposeHeader: "Purpose",
        providersHeader: "Example Providers",
      },
      categoryTable: {
        categoryHeader: "Category",
        descHeader: "Description",
      },
      retentionTable: {
        categoryHeader: "Cookie Category",
        retentionHeader: "Typical Retention",
      },
    },

    grievance: {
      title: "Grievance Redressal Policy",
      subtitle:
        "Our commitment to fair, transparent, and timely resolution of all grievances relating to the Platform, Services, and Personal Data processing.",
    },

    terms: {
      title: "Terms & Conditions",
      subtitle: "Please read these terms carefully before using our website and services.",
    },
  },

  home: {
    meta: {
      title: "Divya Santan Foundation — ONE STEP TOWARDS DIVINE BABY",
      description:
        "A global Garbh Sanskar education, training, awareness and research movement nurturing healthy, cultured and compassionate generations.",
      ogDescription:
        "Education, training, awareness, guidance and research for Garbh Sanskar. One World, One Family.",
    },
    hero: {
      eyebrow: "A global education & awareness movement for Garbh Sanskar",
      title: "ONE STEP TOWARDS DIVINE BABY",
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
        socialWorker: { label: "Volunteer", sub: "Become a Prerak" },
        academicPerson: { label: "Institutional Collaborator", sub: "Shared Purpose" },
        consultant: { label: "Consultant", sub: "Contribute your knowledge" },
      } satisfies Record<AudiencePillId, { label: string; sub: string }>,
    },
    resultsProof: {
      stories: {
        eyebrow: "Real Families, Real Results",
        title: "True Success Stories from Our Community",
        subtitle:
          "Meet the families who embraced Garbh Sanskar and experienced its transformative impact. These are authentic journeys of hope, preparation, and beautiful outcomes.",
      },
      stats: {
        eyebrow: "Our Impact",
        title: "By The Numbers",
        items: {
          healthyBirths: {
            label: "Healthy Births",
            sub: "Through Garbh Sanskar guidance",
          },
          couplesTrained: {
            label: "Couples Trained",
            sub: "Across India and globally",
          },
          satisfaction: {
            label: "Satisfaction Rate",
            sub: "From participating families",
          },
          volunteers: {
            label: "Active Volunteers",
            sub: "Certified Preraks serving communities",
          },
        } satisfies Record<ResultsStatId, StatCopy>,
      },
      videos: {
        eyebrow: "Watch & Learn",
        title: "Educational Videos & Success Stories",
        subtitle:
          "Knowledge sessions, Garbh Sanskar Foundation classes, and testimonials from families who practiced Garbh Sanskar. Watch directly in-page.",
        categories: {
          all: "All",
          knowledge: "Knowledge",
          garbhSanskarFoundation: "Garbh Sanskar Foundation",
          testimonials: "Testimonials",
        } satisfies Record<VideoCategoryId, string>,
        cta: "View Full YouTube Channel",
      },
      reels: {
        eyebrow: "Community Moments",
        title: "Follow Our Journey on Instagram",
        subtitle:
          "Short, inspiring moments from our Garbh Sanskar community — daily wisdom, celebrations, and real-life experiences.",
        cta: "Follow Us on Instagram",
      },
    },
    leadership: {
      eyebrow: "Guided by Vision & Wisdom",
      title: "Our Patrons & Leadership",
      subtitle:
        "Spiritual masters, medical experts, and visionary philanthropists united in nurturing compassionate generations",
      meetTeam: "Meet the full team",
      important: "Important:",
      members: {
        avdheshanand: {
          name: "Pujya Swami Avdheshanand Giri Ji Maharaj",
          role: "Chief Patron",
          bio: "Spiritual guidance & cultural preservation",
        },
        vinod: {
          name: "Shree Vinod Agarwal",
          role: "Founder & Chairman",
          bio: "Philanthropist driving the institutional foundation",
        },
        anil: {
          name: "Dr. Anil Garg",
          role: "Founder & Managing Director",
          bio: "MBBS, MS, MCh · Integrating medicine with ancient wisdom",
        },
      },
    },
    mobileApp: {
      eyebrow: "Access Garbh Sanskar Anywhere",
      title: "Take the Journey",
      titleAccent: "in Your Pocket",
      native: "",
      description:
        "Access free classes, Ask Shree AI, month-by-month guides, and your personal learning journey — all in Hindi and English.",
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
        "Articles, step-by-step guides, Q\u0026A and scientific references on Garbh Sanskar — curated for families, students and educators.",
    },
    header: {
      eyebrow: "Knowledge Centre",
      title: "Read, reflect, apply",
      native: "",
      intro:
        "Carefully written articles, stage-wise guides, answered questions and peer-reviewed science — all in one place, always free.",
    },
    tabs: {
      scienceOfGarbhSanskar: "Science of Garbh Sanskar",
      articles: "Articles \u0026 Blogs",
      guides: "Step-by-Step Guides",
      qa: "Q \u0026 A",
      resources: "Books \u0026 Resources",
      scientific: "Scientific References",
    },
    articlesSection: {
      eyebrow: "Articles \u0026 Blogs",
      title: "Explore our editorial library",
      heroLabel: "Featured Article",
      filterLabel: "Filter by topic",
    },
    guidesSection: {
      eyebrow: "Step-by-Step Guides",
      title: "Your journey, stage by stage",
      subtitle:
        "Follow the natural sequence from pre-marriage preparation through to postnatal care. Click any stage to explore its practices.",
      expandLabel: "Explore this stage",
      collapseLabel: "Close",
    },
    qaSection: {
      eyebrow: "Questions \u0026 Answers",
      title: "Common questions, thoughtful answers",
      subtitle:
        "Answers drawn from \u2018The Science of Garbh Sanskar\u2019 by Dr. Anil Kumar Garg \u0026 Dr. Seema Garg, and from our foundation courses.",
      askShreeBanner: "Have a question not listed here? Ask Shree AI for a personalised answer.",
      askShreeLabel: "Ask Shree AI",
    },
    scientificSection: {
      eyebrow: "Scientific References",
      title: "The evidence base",
      subtitle:
        "Peer-reviewed studies cited in our publications and courses. We present evidence as it is, without overstating claims.",
      disclaimer:
        "These references are educational summaries. Always consult a qualified medical professional for personal health decisions. Garbh Sanskar complements, not replaces, modern obstetric care.",
      viewSource: "View source",
    },
    resourcesSection: {
      eyebrow: "Books \u0026 Resources",
      title: "Knowledge to keep, share and revisit",
      subtitle:
        "Download practical PDFs for your journey, browse supporting documents, or find books available to purchase online.",
      filterLabel: "Browse by format",
      filters: {
        all: "All resources",
        books: "Books",
        documents: "Word documents",
      },
      types: {
        book: "Book",
        document: "Word document",
      },
      download: "Download Word file",
      purchase: "Purchase online",
      view: "View resource",
      note: "Use these resources for learning and reflection. The educational material does not replace advice from a qualified medical professional.",
    },
    cta: {
      title: "Have a question while reading?",
      body: "Ask Shree AI to point you to the right lesson or article.",
      primary: "Ask Shree AI",
      secondary: "Explore the science of Garbh Sanskar",
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
    mainTabs: {
      content: "Free Services",
      videos: "Videos & Lectures",
    },
    heroPills: [
      { label: "Online Classes" },
      { label: "Hospital OPD" },
      { label: "Community" },
      { label: "Global Reach" },
    ],
    heroStats: [
      { value: "1M+", label: "Families Reached", sub: "Across the globe" },
      { value: "100%", label: "Free Education", sub: "No hidden costs" },
    ],
    subtabs: {
      onlineClasses: "Online Classes",
      opd: "Charitable OPD",
    },
    onlineClasses: {
      eyebrow: "Online Classes",
      title: "Learn from anywhere",
      intro:
        "Join our weekly interactive sessions covering pregnancy care, fetal development, and early childhood.",
      sessionInfo: "Our sessions are conducted in Hindi and English.",
      qAndA: "Live Q&A with experts",
      free: "Always free for everyone",
      contact: "Get notified via WhatsApp",
      contactCta: "Contact Us",
      topicsHeading: "Topics Covered",
      topics: [
        { icon: "pregnancy", label: "Pregnancy Care" },
        { icon: "nutrition", label: "Sattvic Diet" },
        { icon: "yoga", label: "Yoga & Breath" },
        { icon: "babyTalk", label: "Garbh Samvad" },
        { icon: "lifestyle", label: "Daily Routine" },
        { icon: "emotional", label: "Emotional Health" },
      ],
      alwaysFreeLabel: "Our Promise",
    },
    qrSection: {
      eyebrow: "Join the Community",
      title: "Scan to connect on WhatsApp",
      body1: "Get instant access to class links and updates.",
      step1: "Open WhatsApp or your camera",
      step2: "Scan the QR code to send us a message",
      scanCta: "Or click here to open WhatsApp",
    },
    opd: {
      eyebrow: "Charitable OPD",
      title: "Holistic care in person",
      intro:
        "A dedicated centre offering guidance, counseling, and medical advice aligned with Garbh Sanskar principles.",
      servicesHeading: "Available Services",
      services: [
        { label: "Pregnancy Counseling" },
        { label: "Nutritional Advice" },
        { label: "Yoga Instruction" },
        { label: "Ayurvedic Guidance" },
      ],
      hospitalLabel: "Current Location",
      hospital: "Charitable Garbh Sanskar OPD",
      currentCity: "Indore, Madhya Pradesh",
      runningStatus: "Currently active and serving families",
      expandingLabel: "Future Vision",
      expansion: "We aim to expand our charitable OPD services to major cities across India.",
      charitableHospitals: "Partnering with charitable hospitals",
      aimLabel: "Our Aim",
      aim: "To provide accessible, holistic maternal care to every section of society, ensuring that traditional wisdom and modern care are available to all.",
      commitmentEyebrow: "Our Commitment",
      commitmentTitle: "A network of care and education",
      visionCards: [
        { title: "Accessible Care", body: "Free guidance and counseling for expectant mothers." },
        { title: "Expert Support", body: "Trained professionals offering holistic advice." },
        { title: "Community Reach", body: "Expanding our footprint to serve more families." },
      ],
    },
    askShree: {
      eyebrow: "AI Assistant",
      title: "Ask Shree AI",
      body: "Get immediate answers to your Garbh Sanskar queries, drawn from our knowledge base and courses.",
      cta: "Open Chat",
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

  servicesPage: {
    meta: {
      title: "Available Services | Divya Santan Foundation",
      description:
        "Explore online guidance, Foundation learning, Indore services, Ask Shree AI and upcoming activities.",
    },
    header: {
      eyebrow: "Services",
      title: "Available Services",
      intro:
        "Find guidance, learning, local support and digital assistance through the Divya Santan Foundation's educational and social mission around Garbh Sanskar.",
    },
    tabs: {
      guidance: { label: "Online Guidance for Pregnant Women", shortLabel: "Online Guidance" },
      learning: {
        label: "Foundation for Couples & Volunteers",
        shortLabel: "Foundation Learning",
      },
      local: { label: "Outdoor Services", shortLabel: "Outdoor Services" },
      askShree: { label: "Ask Shree AI", shortLabel: "Ask Shree AI" },
      upcoming: { label: "Upcoming", shortLabel: "Upcoming" },
    },
    guidance: {
      eyebrow: "Online Guidance for Pregnant Women",
      title: "Online Guidance for Pregnant Women",
      intro:
        "Divya Santaan Foundation conducts free online Garbh Sanskar guidance classes twice every month for pregnant women.",
      sessions:
        "These sessions provide stage-wise guidance during pregnancy by a team of specialists, including Garbh Sanskar Counsellors and other experts, covering maternal wellbeing, healthy lifestyle, emotional balance, prenatal bonding, yoga, nutrition, and related aspects of pregnancy.",
      freeOfCost:
        "The classes are completely free of cost and are designed to support expectant mothers and families with practical and structured guidance throughout pregnancy.",
      registration:
        "For registration, please contact us by phone, WhatsApp, or email using the details given below.",
      registrationAction: "Contact us",
    },
    learning: {
      eyebrow: "Learn • Practice • Serve",
      title: "Structured learning for families, volunteers and Preraks",
      subtitle:
        "The Foundation Course is designed to spread scientific and practical knowledge of Garbh Sanskar through a structured learning journey.",
      courseEyebrow: "Foundation Course",
      courseIntro:
        "A three-month program with 12 weekly classes, with one one-hour session every week.",
      courseDescription:
        "It is designed for volunteers, social workers, interested individuals, couples planning pregnancy, and pregnant mothers who wish to understand the science, philosophy and practical application of Garbh Sanskar.",
      audiences: ["Volunteers", "Social workers", "Couples", "Pregnant mothers"],
      courseCta: "Explore Foundation Course",
      pathways: [
        {
          eyebrow: "01 / Couple education",
          title: "Pregnant Couple",
          body: "Join free online classes for pregnant couples and families, and learn about healthy pregnancy, lifestyle, nutrition, emotional well-being, yoga, meditation and Baby Talk.",
        },
        {
          eyebrow: "02 / Foundation course",
          title: "Learn Systematically",
          body: "Understand the science, philosophy and practical application of Garbh Sanskar through a three-month, 12-class foundation course.",
        },
        {
          eyebrow: "03 / Serve society",
          title: "Become a Prerak",
          body: "Learn Garbh Sanskar, complete the Foundation Course, become a Prerak, and contribute to awareness, local programs and guidance in society.",
        },
      ],
    },
    local: {
      eyebrow: "Education in Indore",
      title: "Garbh Sanskar guidance for families in Indore",
      subtitle:
        "The Foundation's current local OPD and guidance work is based in Indore, bringing education and support closer to pregnant women, couples and families.",
      locationEyebrow: "Currently in Indore",
      locationTitle: "Geeta Bhawan Charitable Hospital",
      locationBody:
        "Regular free Garbh Sanskar OPD and guidance services are currently running here for pregnant women and couples.",
      locationAction: "Contact Us about Indore Guidance",
      blocks: {
        opd: {
          eyebrow: "Free OPD",
          title: "Free OPD & Guidance",
          action: "Contact Us",
          body: "Trained Garbh Sanskar specialists provide guidance to expectant mothers on healthy pregnancy, lifestyle, nutrition, emotional well-being, yoga, meditation, Baby Talk and other important aspects of Garbh Sanskar.",
        },
        awareness: {
          eyebrow: "Indore community",
          title: "Awareness Programs in Indore",
          action: "Contact the Foundation",
          body: "Connect with the Foundation about seminars and educational sessions with local organizations, NGOs, social groups, hospitals and volunteers in Indore.",
        },
        centre: {
          eyebrow: "Future collaboration",
          title: "Start a Garbh Sanskar Centre",
          action: "Discuss an Indore Centre",
          body: "Suitable hospitals, healthcare institutions, NGOs and community organizations in Indore may work with the Foundation to establish a Garbh Sanskar Centre or OPD in association with trained professionals.",
        },
      },
    },
    askShree: {
      eyebrow: "Ask Shree",
      title: "Ask Shree",
      intro:
        "Ask Shree is an AI-based guidance chatbot developed by Divya Santaan Foundation to provide personalized support to couples during pregnancy.",
      basis:
        "The chatbot is based on the book \u201cGarbh Sanskar Ka Vigyan\u201d by Dr. Anil Garg and Dr. Seema Garg. Users can ask questions related to nutrition, yoga, lifestyle, Garbh Sanskar practices, maternal wellbeing, and other common pregnancy-related concerns, and Ask Shree provides guidance drawn from the book.",
      topics: [
        "Nutrition",
        "Yoga",
        "Lifestyle",
        "Garbh Sanskar practices",
        "Maternal wellbeing",
        "Other common pregnancy-related concerns",
      ],
      service:
        "This complimentary service is designed to make reliable Garbh Sanskar guidance easily accessible whenever couples need it.",
      action: "Ask Shree AI",
      disclaimer:
        "For medical problems, emergencies, diagnosis, or treatment decisions, consultation with a qualified healthcare professional is essential.",
    },
    upcoming: {
      eyebrow: "Upcoming",
      title: "Nothing scheduled here yet.",
      body: "Please check again soon for upcoming classes, awareness programs and Foundation activities.",
      categories: ["Workshops", "Online Classes", "Conferences", "Book Launches"],
    },
    start: {
      eyebrow: "Start where you are",
      title: "Choose the next step that feels right",
      subtitle:
        "The Foundation supports couples, pregnant women, families, learners and volunteers at different points in the Garbh Sanskar journey.",
      pathways: [
        { label: "I'm Pregnant", description: "Select a pregnancy journey" },
        { label: "I Want to Learn", description: "Explore Garbh Sanskar" },
        { label: "I Need Local Support", description: "Find local guidance" },
        { label: "I Have a Question", description: "Ask Shree AI" },
      ],
    },
    cta: {
      eyebrow: "A shared beginning",
      title: "Begin your journey with us",
      body: "Explore Garbh Sanskar, ask a question, or connect with the Foundation for guidance and collaboration.",
      explore: "Explore Garbh Sanskar",
      contact: "Contact Us",
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
      native: "",
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
      native: "",
      intro:
        "Participate in workshops, seminars, and community events to deepen your Garbh Sanskar practice and connect with like-minded families.",
    },
    upcoming: {
      eyebrow: "Upcoming Events",
      title: "What's coming next",
      subtitle: "Stay tuned for upcoming workshops, webinars, and community gatherings.",
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
      native: "",
      intro:
        "Read heartfelt testimonials from parents who experienced the transformative practice of Garbh Sanskar.",
    },
    stories: {
      eyebrow: "Real Stories",
      title: "Testimonials from families",
      subtitle: "Discover how Garbh Sanskar has impacted the lives of families across the world.",
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
    navigation: {
      joinMission: "Join the Mission",
      volunteers: "Become a volunteer",
      events: "Events & activities",
      testimonials: "Experiences",
    },
    categories: {
      eyebrow: "Ways to contribute",
      title: "Choose your place in the movement",
      subtitle:
        "Whether you serve families, build an institution, practise as a consultant, or advance research, there is a focused path for your contribution.",
      items: {
        volunteer: {
          title: "Volunteer / Prerak",
          body: "Learn the Foundation Course, carry responsible Garbh Sanskar education into your community, and serve with care.",
        },
        institutionalCollaboration: {
          title: "Institutional Collaboration",
          body: "Partner as a hospital, university, NGO, school, charitable organisation, or community body.",
        },
        consultant: {
          title: "Become a Consultant",
          body: "Explore the consultant directory, apply through the consultation platform, or follow the academic route.",
        },
        academicResearcher: {
          title: "Academic / Researcher",
          body: "Stay connected with upcoming research, academic programmes, conferences, and evidence-led collaboration.",
        },
      },
    },
    pages: {
      volunteer: {
        title: "Volunteer with Divya Santan Foundation",
        intro:
          "Individuals who wish to contribute to this noble and meaningful cause are warmly invited to join Divya Santan Foundation as volunteers.",
        preparationEyebrow: "Before you begin",
        preparationTitle: "Learn the subject properly",
        preparationBody:
          "We encourage volunteers to first read the book \u201cGarbh Sanskar Ka Vigyan\u201d and attend the free Garbh Sanskar Foundation Course conducted by Divya Santan Foundation. This helps them understand the subject properly before creating awareness among friends, relatives, neighbors, and the wider community.",
        contributionEyebrow: "Ways to contribute",
        contributionTitle: "Serve in the way that suits you",
        contributionBody:
          "Volunteers may contribute in their individual capacity by spreading awareness, or they may formally associate with the Foundation and support its various programmes and activities.",
        individualTitle: "Individual capacity",
        individualBody: "Spread awareness among friends, relatives, neighbors, and the wider community.",
        associationTitle: "Formal association",
        associationBody: "Associate with the Foundation and support its various programmes and activities.",
        contactEyebrow: "Join the Foundation",
        contactTitle: "Would you like to volunteer?",
        contactBody:
          "If you would like to volunteer or become a part of Divya Santan Foundation, please contact us by WhatsApp or email using the details given below. We warmly welcome your contribution.",
        contactAction: "Contact us by WhatsApp or email",
      },
      institutionalCollaboration: {
        title: "Institutional Collaboration",
        eyebrow: "Institutional Collaboration",
        intro:
          "Divya Santaan Foundation aims to promote the noble cause of Garbh Sanskar across the world and warmly welcomes collaboration with institutions, NGOs, professionals, community groups, and individuals who share the same vision.",
        narrative: "Institutional Collaboration",
        imageAlt: "Institutional collaboration for Garbh Sanskar",
        roleMeta: "",
        meaningEyebrow: "A shared purpose",
        meaningTitle: "Work independently. Join hands for a common purpose.",
        meaningBody:
          "There is no need to merge with or work under the banner of Divya Santaan Foundation. Every organisation or individual can continue working independently under their own identity while joining hands for a common purpose.",
        networkEyebrow: "Shared work",
        networkTitle: "Together, we can reach more families.",
        networkBody:
          "By sharing knowledge, resources, awareness activities, training, and community initiatives, we can collectively strengthen the Garbh Sanskar movement and help more families benefit from a conscious and value-based approach to parenthood.",
        networkNodes: [
          { title: "Knowledge", body: "" },
          { title: "Resources", body: "" },
          { title: "Awareness activities", body: "" },
          { title: "Training", body: "" },
          { title: "Community initiatives", body: "" },
        ],
        contributionEyebrow: "03 / Shared possibilities",
        contributionTitle: "Where shared purpose can become reach",
        contributionBody:
          "By sharing knowledge, resources, awareness activities, training, and community initiatives, we can collectively strengthen the Garbh Sanskar movement.",
        contributionItems: [
          {
            title: "Awareness programs",
            body: "Bring responsible Garbh Sanskar learning into communities.",
          },
          {
            title: "Educational workshops",
            body: "Create spaces for families, educators and professionals to learn together.",
          },
          {
            title: "Research",
            body: "Support careful study, data collection and scientific validation.",
          },
          {
            title: "Training",
            body: "Build capacity among volunteers, educators and relevant specialists.",
          },
          {
            title: "Academic courses",
            body: "Explore structured learning with universities and institutions.",
          },
          {
            title: "Community outreach",
            body: "Extend practical education to local groups and underserved families.",
          },
          {
            title: "Free guidance",
            body: "Help make appropriate support more accessible through public-benefit initiatives.",
          },
          {
            title: "Garbh Sanskar OPDs",
            body: "Explore guidance services with suitable charitable or healthcare partners.",
          },
          {
            title: "Publications",
            body: "Develop and share carefully prepared educational resources.",
          },
          {
            title: "Digital education",
            body: "Use digital formats to widen access to authentic knowledge.",
          },
        ],
        routeEyebrow: "04 / Opening the conversation",
        routeTitle: "There is no single model for meaningful collaboration.",
        routeBody:
          "Interested institutions can contact the Foundation to understand one another, explore the opportunity and shape an appropriate collaborative model together.",
        routeSteps: ["Contact", "Explore", "Shape a model", "Collaborate"],
        fitEyebrow: "05 / A shared starting point",
        fitTitle: "Could this be a useful meeting of efforts?",
        fitBody:
          "A conversation may be worth beginning when your organisation has a relevant community, capability or area of expertise and shares the Foundation's public-benefit purpose.",
        fitItems: [
          "You represent an institution or organisation with a relevant community or area of expertise.",
          "You want to support education, awareness, research, training or family guidance.",
          "You are open to exploring a model shaped around the real opportunity.",
          "You value authentic, scientifically informed and ethically responsible work.",
        ],
        ctaEyebrow: "Join the shared mission",
        ctaTitle: "We warmly welcome you to join this shared mission.",
        ctaBody:
          "If you or your organisation would like to collaborate with Divya Santaan Foundation, please contact us by WhatsApp, phone, or email using the details given below.",
        ctaPrimary: "Contact us by WhatsApp, phone or email",
        partnershipEyebrow: "Work together",
        partnershipTitle: "A network built around public benefit",
        partnershipBody:
          "We work with organisations that share a commitment to maternal wellbeing, conscious parenthood, education, and healthier future generations.",
        partnerships: [
          {
            title: "Hospitals & OPDs",
            body: "Develop free or accessible Garbh Sanskar guidance, prenatal education, and community OPD programmes.",
          },
          {
            title: "Universities & research centres",
            body: "Create academic courses, studies, publications, and evidence-led learning pathways.",
          },
          {
            title: "NGOs & charitable organisations",
            body: "Extend awareness, classes, publications, and trained support into underserved communities.",
          },
          {
            title: "Schools & community groups",
            body: "Host talks and workshops that introduce young people and families to conscious parenthood.",
          },
        ],
        opportunitiesEyebrow: "Possible collaboration",
        opportunitiesTitle: "Ways to begin together",
        opportunities: [
          "Garbh Sanskar awareness programmes and workshops",
          "Free guidance services and charitable OPDs",
          "Volunteer and specialist training",
          "Academic courses, research, and publications",
          "Digital education and community outreach",
          "Starting a Garbh Sanskar Centre in your city",
        ],
      },
      consultant: {
        title: "Consultants",
        eyebrow: "Consultants",
        intro:
          "Divya Santaan Foundation welcomes qualified consultants and specialists who are directly or indirectly contributing to conscious conception, healthy pregnancy, maternal wellbeing, prenatal care, maternal–fetal attachment, and Garbh Sanskar education. Our consultant network may include Garbh Sanskar Counsellors, gynaecologists and obstetricians, Ayurvedic doctors, endocrinologists, psychiatrists, psychologists, hypnotherapists, yoga therapists, nutritionists, music specialists, and other professionals whose expertise can support couples during preconception and pregnancy.",
        narrative: "Contribute your knowledge to conscious parenthood.",
        imageAlt: "Qualified consultants supporting Garbh Sanskar education",
        roleMeta: "",
        meaningEyebrow: "01 / The role",
        meaningTitle: "Professional knowledge, offered responsibly.",
        meaningBody:
          "The Foundation welcomes qualified professionals who want to contribute knowledge and expertise to Garbh Sanskar and prenatal wellness. Association is grounded in appropriate qualification, verification and professional and ethical standards.",
        mapLabels: ["Expertise", "Guidance", "Knowledge", "Impact"],
        contributionEyebrow: "02 / Where expertise can travel",
        contributionTitle: "Turn a discipline into a shared resource",
        contributionBody:
          "Professionals interested in contributing to this initiative may apply through WhatsApp or email, or by registering as a consultant through our Online Consultation platform.",
        contributionItems: [
          {
            title: "Online classes",
            body: "Share structured learning with couples, families and wider audiences through online education.",
          },
          {
            title: "Counselling",
            body: "Offer guidance within your qualification and scope, with responsible boundaries around medical advice.",
          },
          {
            title: "Workshops & awareness",
            body: "Participate in workshops, community awareness programmes and conversations that make the subject accessible.",
          },
          {
            title: "Training & research",
            body: "Support specialist training, educational content, research and the careful development of the field.",
          },
        ],
        standardsEyebrow: "03 / A responsible association",
        standardsTitle: "Trust is part of the contribution.",
        standardsBody:
          "The consultant route is for qualified professionals who are ready to contribute within their expertise and uphold the Foundation's professional and ethical standards.",
        standardsItems: [
          "Appropriate qualification or relevant professional expertise",
          "Review and verification by the Foundation",
          "Professional, ethical and responsible communication",
          "A willingness to contribute through education, guidance, training or research",
        ],
        ctaEyebrow: "Join the mission",
        ctaTitle: "We warmly welcome qualified professionals.",
        ctaBody:
          "We warmly welcome qualified professionals who wish to contribute their knowledge and expertise to the mission of Divya Santaan Foundation.",
        ctaPrimary: "Contact us by WhatsApp or email",
        ctaSecondary: "Open Online Consultation platform",
        tabs: {
          directory: "Our consultants",
          application: "Become a consultant",
          academic: "Diploma, degree & PhD",
        },
        panels: {
          directory: {
            eyebrow: "Our consultants",
            title: "Qualified professionals supporting families",
            body: "Our consultant network may include Garbh Sanskar Counsellors, gynaecologists and obstetricians, Ayurvedic doctors, endocrinologists, psychiatrists, psychologists, hypnotherapists, yoga therapists, nutritionists, music specialists, and other professionals whose expertise can support couples during preconception and pregnancy.",
            tableHeaders: {
              name: "Full Name",
              qualification: " Highest Qualification",
              specializedCourses: "Specialized Courses / Certifications",
            },
            consultants: CONSULTANTS,
          },
          application: {
            eyebrow: "Become a consultant",
            title: "Choose how you would like to apply",
            body: "Professionals interested in contributing to this initiative may apply by contacting us through WhatsApp or email, or by registering themselves as a consultant through our Online Consultation platform. After registration, our team will contact them for further communication and verification.",
            steps: [
              "Contact us through WhatsApp or email.",
              "Register as a consultant through the Online Consultation platform.",
              "After registration, our team will contact you for further communication and verification.",
            ],
            androidLabel: "Open Online Consultation platform",
            iosLabel: "Get the iOS app",
          },
          academic: {
            eyebrow: "Academic pathway",
            title: "Diploma, degree and PhD opportunities",
            body: "The Foundation is working toward structured academic pathways that connect Garbh Sanskar with medicine, psychology, yoga, nutrition, music, research, and other allied fields.",
            programs: [
              {
                title: "Diploma programmes",
                body: "Structured professional learning for people who want a deeper foundation in Garbh Sanskar.",
              },
              {
                title: "Degree pathways",
                body: "Future university collaborations can connect Garbh Sanskar with allied academic disciplines.",
              },
              {
                title: "PhD & research",
                body: "Evidence-led research opportunities will examine prenatal wellbeing, education, and social impact.",
              },
            ],
          },
        },
      },
      academicResearcher: {
        title: "Research",
        eyebrow: "Research",
        intro:
          "Advancing the science of Garbh Sanskar through careful research, collaboration, and responsible evidence building.",
        contentEyebrow: "Research vision",
        contentTitle: "Advancing the Science of Garbh Sanskar",
        paragraphs: [
          "Divya Santaan Foundation has a long-term vision to promote and support scientific research in Garbh Sanskar and prenatal wellbeing. Our aim is to better understand how different interventions may influence maternal wellbeing, stress, maternal–fetal attachment, and the prenatal developmental environment.",
          "We also encourage carefully designed longitudinal research to explore whether such structured prenatal programmes are associated with infant and childhood developmental outcomes, including cognitive development, while recognizing that these outcomes are influenced by many biological, environmental, and social factors.",
          "Together, let us build a stronger scientific evidence base for Garbh Sanskar—for healthier mothers, stronger maternal–fetal bonding, and healthier future generations.",
        ],
        focusEyebrow: "Areas of interest",
        focusTitle: "A wide, responsible research lens",
        focusAreas: [
          {
            title: "Nutrition",
            body: "Pregnancy-appropriate nutrition and its relationship to maternal and prenatal wellbeing.",
          },
          {
            title: "Meditation & mindfulness",
            body: "Practices that may support maternal calm, stress regulation, and emotional wellbeing.",
          },
          {
            title: "Yoga, music & relaxation",
            body: "Accessible prenatal practices and their possible influence on the developmental environment.",
          },
          {
            title: "Bhavana & maternal–fetal communication",
            body: "The role of intention, attachment, and communication in the prenatal experience.",
          },
        ],
        invitationEyebrow: "An open invitation",
        invitation:
          "We warmly invite researchers, doctors, psychologists, yoga professionals, academicians, universities, research scholars, and students interested in conducting high-quality research in this field. Divya Santaan Foundation welcomes research collaborations and will support suitable scientific projects wherever feasible.",
        contactEyebrow: "Research with us",
        contactTitle: "Propose a research project",
        contactBody:
          "If you are interested in collaborating with us or proposing a research project, please reach out through the contact details below.",
        contactLabels: {
          email: "Email us",
          phone: "Call the Foundation",
          whatsapp: "Message on WhatsApp",
        },
      },
    },
    contactCta: {
      eyebrow: "Continue the conversation",
      title: "Ready to join or collaborate?",
      body: "Tell us how you would like to connect, and our team will guide you to the right next step.",
      action: "Contact Us",
    },
    volunteer: {
      eyebrow: "Become a volunteer / Prerak",
      title: "Carry the learning into your community",
      body: "A Prerak helps families discover a scientific, practical and value-based approach to conscious parenthood. Start by learning, then share the work in a way that fits your time, skills and community.",
      primary: "Become a Prerak",
      secondary: "Explore the Foundation Course",
      note: "Learn first. Serve with care.",
    },
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
    events: {
      eyebrow: "Events & activities",
      title: "Learning becomes a shared practice",
      subtitle:
        "Meet the people carrying Garbh Sanskar education forward through workshops, classes, conferences and community awareness.",
      comingSoonLabel: "Upcoming",
      comingSoonTitle: "The next gathering is taking shape",
      comingSoonBody:
        "New workshops, online classes and awareness programmes are being scheduled. Connect with the team to hear when the next learning circle opens.",
      contactCta: "Ask about the next event",
      formatsLabel: "The activity index",
      catalogue: {
        workshops: {
          title: "Workshops",
          body: "Practical sessions for couples, families, educators and community groups.",
        },
        onlineClasses: {
          title: "Online classes",
          body: "Accessible learning with Garbh Sanskar counsellors and subject experts.",
        },
        conferences: {
          title: "Conferences",
          body: "Conversations that bring medical, academic and social perspectives together.",
        },
        bookLaunches: {
          title: "Book launches",
          body: "New resources that make careful Garbh Sanskar learning easier to carry home.",
        },
        awareness: {
          title: "Awareness programmes",
          body: "Local talks and outreach with hospitals, NGOs, schools and community partners.",
        },
      },
      archiveTitle: "Keep exploring the movement",
      archiveBody:
        "Past activities, photo and video galleries, and news will gather here as the archive grows.",
      archiveLinks: ["Past activities", "Photo gallery", "Video gallery", "News & media"],
      completed: {
        eyebrow: "Completed events",
        title: "The work, remembered in moments",
        subtitle:
          "A growing archive of workshops, learning circles and social outreach. Each story can later be populated directly from the CMS.",
        previous: "Previous gallery image",
        next: "Next gallery image",
        goTo: "Go to gallery image",
        viewDetails: "View event details",
        close: "Close event details",
        items: {
          workshopsSocialOutreach: {
            category: "Workshops & social outreach",
            title: "Workshops & Social Outreach",
            date: "GS-2, GS-3 & GS-4 workshops",
            location: "Divya Santan Foundation programmes",
            summary:
              "A visual record of the first Garbh Sanskar workshop series across GS-2, GS-3 and GS-4.",
            details:
              "The sessions brought educators, families and community participants together to share practical, scientific and value-based learning around conscious parenthood.",
            photoAlts: [
              "First GS workshop stage programme",
              "First GS workshop inauguration",
              "First GS workshop lamp lighting ceremony",
              "First GS workshop community session",
            ],
          },
          udaipurOutreach: {
            category: "Workshops & social outreach",
            title: "Udaipur Garbh Sanskar Workshop",
            date: "10 August 2024",
            location: "Udaipur, Rajasthan",
            summary:
              "A community workshop bringing Garbh Sanskar awareness and shared learning to Udaipur.",
            details:
              "The Udaipur programme created a space for local families, educators and community members to learn together about prenatal care, conscious parenthood and the Foundation's social mission.",
            photoAlts: ["Udaipur Garbh Sanskar workshop speakers", "Udaipur workshop audience"],
          },
        } satisfies Record<CompletedEventId, CompletedEventCopy>,
      },
    },
    testimonialSection: {
      eyebrow: "Experiences",
      title: "What participation feels like",
      subtitle:
        "These reflections show the movement from different sides: families learning, students studying, volunteers serving and faculty teaching.",
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
      eyebrow: "A conversation starts here",
      title: "Reach us in the way that feels right.",
      subtitle:
        "Whether you are looking for guidance, joining as a Prerak, or exploring a collaboration, our team is ready to help you find the right next step.",
      support: "Write • Call • Visit • Connect",
    },
    availability: {
      eyebrow: "A warm welcome",
      title: "Questions are welcome.",
      body: "For educational guidance, class details, or joining the movement, reach out through any channel below. We will help you find the right person and pathway.",
    },
    channels: {
      eyebrow: "Choose your channel",
      title: "Let’s make it easy to reach us.",
      body: "Use the channel that suits your question. A short note about what you are looking for helps us guide you faster.",
      items: {
        email: {
          eyebrow: "For a considered reply",
          title: "Write by email",
          body: "Share your question, role of interest, or collaboration idea with the Foundation team.",
          action: "Open email",
        },
        whatsapp: {
          eyebrow: "For a quick conversation",
          title: "Call or WhatsApp",
          body: "Reach the team directly for class information, guidance, or the next practical step.",
          action: "Open WhatsApp",
        },
        app: {
          eyebrow: "For learning on the move",
          title: "Connect through the app",
          body: "Find classes, reminders, guidance, and Ask Shree in the Divya Santan mobile app.",
          action: "See app options",
        },
        visit: {
          eyebrow: "For an in-person connection",
          title: "Reach our office",
          body: "Visit us in Indore for Foundation conversations, local guidance, and collaboration discussions.",
          action: "Get directions",
        },
      },
    },
    roles: {
      eyebrow: "Joining the movement",
      title: "Tell us the role you are stepping into.",
      body: "You do not need a form to begin. Explore the route that feels closest to your intention, then contact us with a little context about yourself.",
      note: "Every meaningful contribution starts with a conversation.",
      items: [
        {
          title: "Volunteer / Prerak",
          body: "Learn deeply, then help families and communities access thoughtful guidance.",
          action: "Explore this route",
        },
        {
          title: "Consultant",
          body: "Bring your qualified professional knowledge to the Navankur consultation journey.",
          action: "Explore this route",
        },
        {
          title: "Researcher",
          body: "Explore academic exchange, evidence, and research collaboration with the Foundation.",
          action: "Explore this route",
        },
        {
          title: "Institution / NGO",
          body: "Discuss awareness programmes, OPD services, centres, or a collaboration shaped together.",
          action: "Explore this route",
        },
      ],
    },
    note: {
      eyebrow: "Before you reach out",
      title: "Start with the kind of help you need.",
      body: "Our guidance is educational. For medical questions or concerns during pregnancy, please consult your doctor or a qualified healthcare professional. For classes, resources, and free services, begin here.",
      action: "Explore free services",
    },
    office: {
      title: "Foundation office · Indore",
      action: "Open in Maps",
    },
    movement: {
      title: "Be Part of the Movement",
      description:
        "Whether you are a parent, educator, practitioner, researcher, volunteer, or someone curious about Garbh Sanskar, there is a place for you in this journey.",
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
        native: "",
        body: "Begin months before conception — preparing body, mind, and environment as a couple for a conscious and sacred start.",
        steps: [
          "Planning Pregnancy",
          "Preconception Guidance",
          "Garbhadhana Sanskar",
          "Classes",
          "Ask Shree",
          "Consultation",
        ],
      },
      pregnantWoman: {
        title: "I Am Pregnant",
        native: "",
        body: "Month-by-month guidance on diet, yoga, music, Garbh Samvad, and precautions — everything a pregnant mother needs.",
        steps: [
          "I Am Pregnant",
          "Select Pregnancy Month",
          "Diet + Yoga + Music + Garbh Samvad + Precautions",
          "Join Classes",
          "Ask Shree",
        ],
      },
      socialWorker: {
        title: "Social Worker",
        native: "",
        body: "Learn Garbh Sanskar, complete the Foundation Course, become a trained Prerak, and serve your community.",
        steps: ["Learn Garbh Sanskar", "Foundation Course", "Become Prerak", "Serve Society"],
      },
      academicPerson: {
        title: "Institutional Collaborator",
        native: "",
        body: "Collaborate with the mission through research, evidence, and shared initiatives.",
        steps: ["Collaborate with the Mission"],
      },
      consultant: {
        title: "Consultant",
        native: "",
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
      garbhSanskarClass1: {
        title: "Garbh Sanskar Foundation — Class 1",
        native: "",
        description: "Essential foundations and introduction to Garbh Sanskar principles.",
        category: "Garbh Sanskar Foundation",
      },
      garbhSanskarClass2: {
        title: "Garbh Sanskar Foundation — Class 2",
        native: "",
        description: "Deepen your understanding of conscious prenatal nurturing practices.",
        category: "Garbh Sanskar Foundation",
      },
      garbhSanskarClass3: {
        title: "Garbh Sanskar Foundation — Class 3",
        native: "",
        description: "Advanced practices and integration into daily life during pregnancy.",
        category: "Garbh Sanskar Foundation",
      },
      personalityNationBuilding: {
        title:
          "गर्भ में व्यक्तित्व निर्माण से राष्ट्र निर्माण | How to Make Your Baby Intelligent During Pregnancy?",
        native: "",
        description:
          "Understand how conscious prenatal nurturing can support your baby's personality and development.",
        category: "Knowledge",
      },
      divyaSantanSpecialSession: {
        title: "Divya Santan Prakalp Special Session",
        native: "",
        description: "A special Garbh Sanskar session for expecting families.",
        category: "Knowledge",
      },
    } satisfies Record<VideoId, VideoCopy>,

    instagramReels: {
      reelGarbhSanskar: {
        title: "The Science of Garbh Sanskar - Part 1",
        native: "",
        description:
          "Explore the scientific foundation of Garbh Sanskar in the first part of this series.",
        category: "Science",
      },
      reelMantras: {
        title: "The Science of Garbh Sanskar - Part 2",
        native: "",
        description:
          "Learn more about the science behind Garbh Sanskar in the second part of this series.",
        category: "Science",
      },
      reelNutrition: {
        title: "The Science of Garbh Sanskar - Part 3",
        native: "",
        description:
          "Discover further scientific insights into Garbh Sanskar in the third part of this series.",
        category: "Science",
      },
    } satisfies Record<InstaReelId, InstaReelCopy>,

    successStories: {
      ritaAjay: {
        name: "Rita & Ajay Patel",
        location: "Mumbai, Maharashtra",
        category: "Planning Couple",
        photo: "/success-stories/rita-ajay.jpg",
        quote:
          "We began learning Garbh Sanskar six months before conceiving. The practice brought us closer as a couple and helped us prepare emotionally and physically.",
        journey:
          "Attended free classes for 3 months, followed pre-conception guidelines including diet, yoga, and meditation together as a couple.",
        outcome:
          "Healthy baby girl born in April 2023. Rita had a smooth pregnancy with minimal complications.",
      },
      priyaSharma: {
        name: "Priya Sharma",
        location: "Indore, Madhya Pradesh",
        category: "Pregnant Mother",
        photo: "/success-stories/priya-sharma.jpg",
        quote:
          "Garbh Samvad changed everything for me. I could feel my baby responding to my voice and music. It created such a beautiful bond even before birth.",
        journey:
          "Joined during 4th month of pregnancy, practiced daily Garbh Samvad, followed Sattvic diet, attended weekly online classes.",
        outcome:
          "Baby boy born healthy with excellent reflexes. Priya reports feeling calm and connected throughout pregnancy.",
      },
      meenaRaj: {
        name: "Meena & Raj Kumar",
        location: "Delhi",
        category: "First-time Parents",
        photo: "/success-stories/meena-raj.jpg",
        quote:
          "As first-time parents, we were anxious. The foundation gave us knowledge, confidence, and a community of support.",
        journey:
          "Completed Foundation Course together, joined couple education program, practiced together daily for 7 months.",
        outcome:
          "Twin daughters born healthy in June 2024. Both parents felt prepared and empowered throughout the journey.",
      },
      anushkaVinod: {
        name: "Anushka Desai",
        location: "Pune, Maharashtra",
        category: "Working Mother",
        photo: "/success-stories/anushka-vinod.jpg",
        quote:
          "I was worried about balancing work and pregnancy. Garbh Sanskar taught me to prioritize what matters and stay connected to my baby despite my busy schedule.",
        journey:
          "Followed modified schedule for working women, practiced morning and evening Garbh Samvad, used Ask Shree AI for quick guidance.",
        outcome:
          "Healthy baby boy, managed to work until 8th month comfortably, smooth delivery, quick recovery.",
      },
    } satisfies Record<SuccessStoryId, SuccessStoryCardContent>,

    videoCategories: {
      all: "All",
      knowledge: "Knowledge",
      garbhSanskarFoundation: "Garbh Sanskar Foundation",
      testimonials: "Testimonials",
    } satisfies Record<VideoCategoryId, string>,

    resultsStats: {
      healthyBirths: {
        label: "Healthy Births",
        sub: "Through Garbh Sanskar guidance",
      },
      couplesTrained: {
        label: "Couples Trained",
        sub: "Across India and globally",
      },
      satisfaction: {
        label: "Satisfaction Rate",
        sub: "From participating families",
      },
      volunteers: {
        label: "Active Volunteers",
        sub: "Certified Preraks serving communities",
      },
    } satisfies Record<ResultsStatId, StatCopy>,

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
        title: "The Science of Garbh Sanskar",
        readTime: "6 min read",
        body: "An introduction to intra-uterine nurturing as an educational and cultural practice rooted in Vedic wisdom and supported by modern science.",
      },
      ritualOrScience: {
        title: "Garbh Sanskar: Ritual or Science?",
        readTime: "8 min read",
        body: "A balanced exploration of how ancient traditions like mantra chanting and conscious diet align with epigenetics, prenatal psychology, and neuroscience.",
      },
      monthByMonth: {
        title: "Pregnancy Month-by-Month",
        readTime: "12 min read",
        body: "What to learn, practise and observe through each month of the journey.",
      },
      garbhSamvad: {
        title: "Garbh Samvad",
        readTime: "5 min read",
        body: "Simple daily ways of communicating with the unborn child through voice, music, touch and loving intention.",
      },
      scienceResearch: {
        title: "Science \u0026 Research",
        readTime: "9 min read",
        body: "How epigenetics and prenatal psychology inform our educational approach to conscious conception and prenatal care.",
      },
      sattvicDiet: {
        title: "Sattvic Diet Through Pregnancy",
        readTime: "7 min read",
        body: "Traditional food wisdom read alongside contemporary nutrition guidance for maternal and fetal well-being.",
      },
      fatherRole: {
        title: "The Role of the Father",
        readTime: "4 min read",
        body: "Participation, patience and emotional steadiness within the household during the journey of conscious parenthood.",
      },
      yogaBreathStillness: {
        title: "Yoga, Breath \u0026 Stillness",
        readTime: "8 min read",
        body: "Gentle practices suited to different stages, to be learned under expert guidance alongside regular medical care.",
      },
      sanskarsThroughAges: {
        title: "Sanskars Through the Ages",
        readTime: "10 min read",
        body: "Cultural continuity of nurturing rituals — from Garbhadhan to Simantonayan — across Indian traditions.",
      },
    } satisfies Record<KnowledgeArticleId, ArticleCopy>,

    knowledgeResources: {
      garbhSanskarKaVigyan: {
        title: "The Science of Garbh Sanskar",
        body: "The Foundation's comprehensive book connecting traditional Garbh Sanskar wisdom with contemporary scientific understanding.",
        meta: "Book · 400 pages",
      },
      garbhSanskarSection1: {
        title: "Garbh Sanskar Resource — Section 1",
        body: "Download the first section of the Foundation's Garbh Sanskar resource as an editable Word document.",
        meta: "Section 1 · DOCX",
      },
      garbhSanskarSection2: {
        title: "Garbh Sanskar Resource — Section 2",
        body: "Download the second section of the Foundation's Garbh Sanskar resource as an editable Word document.",
        meta: "Section 2 · DOCX",
      },
      garbhSanskarSection3: {
        title: "Garbh Sanskar Resource — Section 3",
        body: "Download the third section of the Foundation's Garbh Sanskar resource as an editable Word document.",
        meta: "Section 3 · DOCX",
      },
      garbhSanskarSection4: {
        title: "Garbh Sanskar Resource — Section 4",
        body: "Download the fourth section of the Foundation's Garbh Sanskar resource as an editable Word document.",
        meta: "Section 4 · DOCX",
      },
      garbhSanskarSection5: {
        title: "Garbh Sanskar Resource — Section 5",
        body: "Download the fifth section of the Foundation's Garbh Sanskar resource as an editable Word document.",
        meta: "Section 5 · DOCX",
      },
      garbhSanskarSection6: {
        title: "Garbh Sanskar Resource — Section 6",
        body: "Download the sixth section of the Foundation's Garbh Sanskar resource as an editable Word document.",
        meta: "Section 6 · DOCX",
      },
    } satisfies Record<KnowledgeResourceId, ResourceCopy>,

    knowledgeGuides: {
      preMarriage: {
        label: "Stage I",
        title: "Pre-Marriage Preparation",
        subtitle: "Laying the foundation before the journey begins",
        body: "Garbh Sanskar begins long before pregnancy. Pre-marriage preparation encompasses physical health, mental clarity, value formation, and the cultivation of a lifestyle that creates the best environment for future conception.",
        steps: [
          "General health check-up and lifestyle assessment",
          "Premarital counselling: medical and Garbh Sanskar perspective",
          "Understanding genetic and family health factors",
          "Developing a sattvic lifestyle: diet, exercise, sleep, addictions",
          "Cultivating emotional maturity and relational skills",
          "Spiritual grounding: prayer, meditation, positive values",
        ],
      },
      preConceptionPrep: {
        label: "Stage II",
        title: "Pre-Conception Preparation",
        subtitle: "3\u20136 months before conception",
        body: "When a couple desires to conceive, a minimum of 3 months of conscious preparation is advised. This phase purifies the body and mind, optimises reproductive health, and creates the most auspicious environment for welcoming a new soul.",
        steps: [
          "Beej Shuddhi — purification of reproductive seeds (Ayurvedic approach)",
          "Blood tests: Hb, blood sugar, thyroid, Vitamin B12, Vitamin D, Ferritin",
          "Nutritional optimisation for both partners",
          "Yoga, pranayama and meditation to reduce stress",
          "Panchakarma detoxification under expert supervision (if advised)",
          "Dream-Child Qualities Chart — identifying values you wish to nurture",
          "Celibacy for seed purification (at least 1 month advised)",
        ],
      },
      garbhadhanaSanskar: {
        label: "Stage III",
        title: "Garbhadhana Sanskar",
        subtitle: "The sacred act of conscious conception",
        body: "Garbhadhana Sanskar is the first of the sixteen Vedic Samskaras. Conception is viewed not merely as a biological act but as a sacred, spiritual, and conscious process — the moment in which a divine soul takes its first step toward earthly life.",
        steps: [
          "Punsavana Sanskar — performed in the 2nd\u20133rd month of pregnancy",
          "Simantonayan Sanskar — performed in the 5th\u20137th month",
          "Choosing an auspicious time (Muhurta) in consultation with your tradition",
          "Purification rituals, prayer and invocation for divine blessing",
          "Maintaining purity of thought, environment and intention",
          "Medical guidance alongside spiritual preparation",
        ],
      },
      pregnancyMonthByMonth: {
        label: "During Pregnancy",
        title: "Month-by-Month Garbh Sanskar",
        subtitle: "A complete guide from Month 1 to Month 9",
        body: "Each month of pregnancy brings distinct developmental milestones for the baby and specific practices for the mother and family. Our monthly guidance covers diet, yoga, music, Garbh Samvad, lifestyle, mantras and emotional care.",
        steps: [
          "Month 1\u20133: Foundation of fetal organs; sattvic diet, rest, gentle yoga",
          "Month 3\u20134: Brain development begins; begin Garbh Samvad and music",
          "Month 5: Fetus hears sound; sing mantras, play classical music",
          "Month 6\u20137: Rapid brain growth; read inspiring stories and scriptures",
          "Month 8: Emotional bonding deepens; meditation and visualisation",
          "Month 9: Preparation for birth; pranayama, calm environment, prayers",
          "Throughout: Regular medical check-ups and gynecologist guidance",
        ],
      },
      postnatalCare: {
        label: "After Birth",
        title: "Postnatal Care \u0026 Early Childhood",
        subtitle: "Continuing the Garbh Sanskar journey after birth",
        body: "The influence of Garbh Sanskar continues after birth. The first three years are critical for brain and emotional development. Conscious parenting, nutritious feeding, emotional security, and early value formation create a strong foundation.",
        steps: [
          "Breastfeeding and Ayurvedic postnatal nutrition for the mother",
          "Baby bonding: skin-to-skin contact, gentle voice and touch",
          "Surya Sadhna (sun gazing/early morning rituals) for mother and child",
          "Gentle mantras, music and reading aloud in the first year",
          "Emotional security: consistent love, presence and positive environment",
          "Early value formation through stories, songs and parental conduct",
        ],
      },
    } satisfies Record<KnowledgeGuideId, GuideStageCopy>,

    knowledgeQA: {
      // Part I: Understanding Garbh Sanskar - Scientific & Practical FAQs
      // Ordered by: science, ayurveda, medical, planning, practice, foundation

      // ═══════════════════════════════════════════════════════════
      // SCIENCE
      // ═══════════════════════════════════════════════════════════
      scientificBasis: {
        question: "What is the modern scientific basis of Garbh Sanskar?",
        answer:
          "During pregnancy, various factors such as nutrition, stress levels, exposure to toxins, maternal health, lifestyle, and the emotional state of the mother can influence the developing fetus. The term 'epigenetics of pregnancy' refers to the study of how environmental factors and lifestyle choices during pregnancy may influence the expression of genes in the developing fetus. Epigenetics involves changes in gene activity without changing the underlying DNA sequence itself. For example, maternal nutrition during pregnancy may influence the epigenetic regulation of genes involved in metabolism. Similarly, exposure to prolonged maternal stress may influence biological pathways involved in stress responses and later health. While modern science may not validate every traditional Garbh Sanskar practice, many evidence-based principles related to nutrition, stress reduction, emotional well-being, healthy lifestyle, and prenatal care are consistent with the broader philosophy of Garbh Sanskar.",
        tag: "Science",
      },
      scientificRationale: {
        question: "What is the scientific rationale for Garbh Sanskar according to modern science?",
        answer:
          "From the perspective of modern science, Garbh Sanskar can be understood as a form of holistic prenatal care and conscious parenting that encourages practices supporting the health and well-being of both mother and developing fetus. Scientific evidence supports the importance of several factors emphasized in Garbh Sanskar, including: appropriate maternal nutrition, regular antenatal care, stress management, emotional well-being, healthy physical activity, adequate sleep, avoidance of tobacco, alcohol, drugs, and harmful environmental exposures, positive family and social support, and appropriate meditation and relaxation practices. Modern science may not validate every traditional Garbh Sanskar practice. Therefore, traditional wisdom should be approached thoughtfully and integrated with evidence-based prenatal care.",
        tag: "Science",
      },
      epigeneticInfluence: {
        question: "Do epigenetic factors influence the concept of Garbh Sanskar?",
        answer:
          "Yes. Epigenetics is highly relevant to understanding how the environment during preconception and pregnancy may influence biological development. Epigenetics refers to changes in gene expression or gene activity without altering the underlying DNA sequence. Factors such as nutrition, lifestyle, stress, environmental exposures, maternal health, and certain emotional or physiological conditions may influence epigenetic processes before and during pregnancy. Therefore, practices associated with Garbh Sanskar—particularly healthy nutrition, stress reduction, positive emotional experiences, healthy lifestyle, and avoidance of harmful exposures—can be understood in the broader context of creating a favourable prenatal environment.",
        tag: "Science",
      },

      // ═══════════════════════════════════════════════════════════
      // AYURVEDA
      // ═══════════════════════════════════════════════════════════
      ayurvedicPerspective: {
        question: "What is Garbh Sanskar according to Ayurvedic science?",
        answer:
          "Garbh Sanskar is a concept rooted in Ayurvedic tradition that focuses on prenatal education, care, and the well-being of both mother and child. According to Ayurveda, the physical, mental, emotional, and spiritual state of the mother during pregnancy can influence the environment in which the unborn child develops. Garbh Sanskar therefore includes practices related to diet, meditation, yoga, music, chanting, prayer, positive thinking, and spiritual reading. Ancient scriptures also describe examples such as Prahlada and his mother Kayadhu, who, according to traditional accounts, received spiritual teachings from Rishi Narada during pregnancy.",
        tag: "Ayurveda",
      },

      // ═══════════════════════════════════════════════════════════
      // MEDICAL
      // ═══════════════════════════════════════════════════════════
      importantToKnow: {
        question: "What is important for me to know before following Garbh Sanskar?",
        answer:
          "While some practices associated with Garbh Sanskar have been scientifically studied and may have potential benefits in promoting maternal well-being and reducing stress during pregnancy, they should be followed thoughtfully and appropriately. The response to different practices may vary from person to person. Most importantly, Garbh Sanskar is not a substitute for medical care during pregnancy. Every pregnant woman should remain under the regular supervision of her gynecologist or other qualified healthcare professional and follow all necessary medical advice, examinations, investigations, medicines, and treatment.",
        tag: "Medical",
      },

      // ═══════════════════════════════════════════════════════════
      // PLANNING
      // ═══════════════════════════════════════════════════════════
      whenToStart: {
        question: "When should the Garbh Sanskar program begin?",
        answer:
          "Garbh Sanskar may ideally begin before conception, when both partners start preparing themselves physically, mentally, emotionally, and spiritually for pregnancy. If pregnancy has already occurred, Garbh Sanskar practices can be started from the first trimester and continued throughout pregnancy. The aim is to support the physical, mental, emotional, and spiritual well-being of the mother while creating a healthy and positive environment for the developing baby. It is never too early or too late to create a positive environment for your child.",
        tag: "Planning",
      },
      benefits: {
        question: "What are the benefits of Garbh Sanskar?",
        answer:
          "Expected benefits include: Supporting Maternal and Fetal Health (healthy nutrition, appropriate yoga, physical activity, and balanced lifestyle), Supporting Emotional Well-being (meditation, relaxation, prayer, love, and peaceful environment), Creating a Positive Developmental Environment, Promoting Peace and Balance, and Strengthening Parent-Baby Bonding (loving communication and conscious interaction). Garbh Sanskar should be practised as part of a healthy lifestyle and always alongside appropriate medical care.",
        tag: "Planning",
      },
      threeMonthPrep: {
        question:
          "What is advised during the three months before conception according to Garbh Sanskar?",
        answer:
          "During the three months before conception, Garbh Sanskar emphasizes preparing both partners physically, mentally, emotionally, and spiritually. Recommended measures include: Healthy Diet (nutritious and balanced for both partners), Maintain Healthy Weight, Regular Exercise, Avoid Harmful Substances (smoking, alcohol, recreational drugs, excessive caffeine), Stress Management (meditation, yoga, breathing exercises), Preconception Medical Check-Up (blood tests, fertility and hormonal assessment), Preconception Supplements (folic acid and vitamins as per medical guidance), Emotional Connection (strengthen communication and bonding), Spiritual Practices (meditation, prayer, chanting), and Reducing Environmental Exposure (minimize pollutants and toxic chemicals). From a physiological perspective, it takes approximately 74 days for healthy sperm development and about 90 days total for mature gametes.",
        tag: "Planning",
      },
      astrologerRole: {
        question:
          "Is there any role of an astrologer in planning conception according to Garbh Sanskar?",
        answer:
          "In some traditions of Garbh Sanskar, couples may consult an astrologer for guidance regarding conception or pregnancy. According to traditional beliefs, astrology may be used to identify auspicious timings or favourable periods for conception. However, the role of astrology in conception and pregnancy is not universally accepted or scientifically proven. Families who value astrology for cultural or spiritual reasons may choose to include it as one aspect of their journey, but medical decisions related to conception and pregnancy should be based on appropriate professional healthcare advice. Personal beliefs, cultural traditions, and medical recommendations can be considered respectfully while making informed decisions.",
        tag: "Planning",
      },
      abstinenceAdvice: {
        question:
          "Is it advisable to avoid sexual contact between partners for three months before conception according to Garbh Sanskar?",
        answer:
          "In some interpretations of Garbh Sanskar, a period of discipline or abstinence before planned conception may be suggested as part of preparing the body, mind, and emotions for pregnancy. The traditional intention is to encourage both partners to focus on physical purification, mental preparation, emotional stability, and spiritual well-being before conception. However, there is currently no established scientific evidence that abstaining from sexual intercourse for a specific period before conception will produce a 'divine' or spiritually superior child. Sexual intercourse is a natural and essential part of conception. Decisions regarding sexual activity should be based on the couple's personal beliefs, circumstances, comfort, mutual understanding, and medical considerations. Open communication, mutual respect, and shared decision-making between partners are important.",
        tag: "Planning",
      },
      whomToConsult: {
        question:
          "I want to plan my baby according to Garbh Sanskar. When and whom should I consult?",
        answer:
          "You may seek guidance from: Garbh Sanskar Practitioner or Counsellor (for structured guidance on lifestyle, diet, emotional well-being, spiritual practices), Ayurvedic Practitioner (for Ayurvedic diet, lifestyle, practices), Yoga Instructor (qualified prenatal yoga professional), Spiritual Guide or Mentor (for particular spiritual or cultural practices), Obstetrician/Gynecologist (essential for preconception and pregnancy-related medical care), and Counsellor or Psychologist (for stress, anxiety, relationship concerns, or emotional challenges). Before consulting any professional, consider their qualifications, credentials, training, and experience. Both partners should openly discuss their intentions and expectations.",
        tag: "Planning",
      },

      // ═══════════════════════════════════════════════════════════
      // PRACTICE
      // ═══════════════════════════════════════════════════════════
      whatIsDone: {
        question: "What is actually done in Garbh Sanskar?",
        answer:
          "The term Garbh Sanskar is derived from Sanskrit. Garbh means the womb or unborn child, while Sanskar refers to refinement, positive impressions, and transformation. Garbh Sanskar includes various practices such as healthy diet, meditation, yoga, music, chanting, prayer, reading spiritual and inspirational literature, positive thinking, and maintaining a peaceful family environment. The purpose is to create positive physical, mental, emotional, and spiritual influences during pregnancy.",
        tag: "Practice",
      },
      howItWorks: {
        question: "How does Garbh Sanskar work?",
        answer:
          "According to Ayurvedic and traditional principles, the environment surrounding the mother—both physical and emotional—is important for the developing fetus. Therefore, Garbh Sanskar emphasizes creating a peaceful, healthy, loving, and harmonious atmosphere during pregnancy. Positive thoughts, emotions, experiences, good nutrition, healthy behaviour, and appropriate spiritual practices are encouraged to support the overall well-being of the mother and the developing child.",
        tag: "Practice",
      },
      commonPractices: {
        question: "What are the common practices followed in Garbh Sanskar?",
        answer:
          "Common practices include: Healthy Diet (nutritious and balanced), Meditation and Yoga (appropriate practices for relaxation and stress reduction), Listening to Music (soothing classical, devotional, or peaceful compositions), Reading Spiritual and Inspirational Texts (prayers and positive affirmations), and Avoiding Negative Influences (minimizing exposure to disturbing media, arguments, excessive stress).",
        tag: "Practice",
      },
      mantraImportance: {
        question: "What is the importance of Mantra during pregnancy?",
        answer:
          "The Sanskrit word Mantra refers to a structured combination of sounds, syllables, and words traditionally used for spiritual practice, meditation, prayer, and mental concentration. In Indian tradition, pregnant women have often been encouraged to listen to or recite prayers, Stotras, and sacred texts. Regular chanting involves rhythm, repetition, controlled breathing, attention, and concentration. These features may help create a sense of calmness, relaxation, mental focus, and emotional stability. Studies on OM chanting, mantra meditation, repetitive prayer, and related practices have explored their effects on relaxation, autonomic regulation, attention, anxiety, and mental well-being. From the perspective of Garbh Sanskar, Mantra may therefore be used as a supportive practice to help the mother maintain a peaceful, positive, and spiritually enriching environment during pregnancy.",
        tag: "Practice",
      },

      // ═══════════════════════════════════════════════════════════
      // FOUNDATION
      // ═══════════════════════════════════════════════════════════
      aimAndInterest: {
        question: "What is your aim in promoting Garbh Sanskar, and why are you interested in it?",
        answer:
          "The primary objective of Divya Santan Foundation is to contribute towards a world characterized by peace, love, compassion, happiness, health, prosperity, and ultimately, harmony. Through a comprehensive approach to Garbh Sanskar, we aim to contribute to the upliftment of humanity and help create a global community where individuals can grow in both spiritual fulfilment and material well-being.",
        tag: "Foundation",
      },
      howToAchieve: {
        question: "How are you going to achieve this? What is your method?",
        answer:
          "Garbh Sanskar, or the Science of Holistic Prenatal Nurturing, brings together lifestyle, nutrition, emotional well-being, and spiritual practices to create a positive environment for the developing child. Modern concepts such as the epigenetics of pregnancy help us understand how maternal health, nutrition, stress, lifestyle, and environmental influences may affect gene expression and fetal development. Garbh Sanskar therefore aims at the holistic nurturing of the unborn child across physical, mental, emotional, social, and spiritual dimensions. Divya Santan Foundation represents an initiative to integrate the ancient wisdom of Garbh Sanskar with relevant modern scientific understanding and promote the concepts of conscious conception and conscious parenting.",
        tag: "Foundation",
      },

      // Part II: About Foundation - Joining, Learning & Supporting
      learnSystematically: {
        question: "How can I learn Garbh Sanskar in a systematic way?",
        answer:
          "Divya Santan Foundation conducts a Garbh Sanskar Foundation Course, designed to provide a structured understanding of the scientific, practical, and philosophical aspects of Garbh Sanskar. The course runs for approximately three months, with one online class of about one hour every week, making a total of 12 sessions. It is useful for couples, pregnant mothers, volunteers, social workers, and anyone interested in learning Garbh Sanskar in depth.",
        tag: "Learning",
      },
      whatIsPrerak: {
        question: "What is a Prerak?",
        answer:
          "A Prerak is a volunteer who wishes to support the mission of Divya Santan Foundation and help spread awareness about Garbh Sanskar in society. A Prerak may help organize awareness programs, connect pregnant couples with appropriate guidance, support community activities, distribute educational material, and encourage families to understand the scientific and practical principles of Garbh Sanskar.",
        tag: "Volunteer",
      },
      becomePrerak: {
        question: "How can I become a Prerak or volunteer?",
        answer:
          "Anyone who has an interest in this cause and wishes to serve society can contact Divya Santan Foundation. We recommend that aspiring Preraks first complete the Garbh Sanskar Foundation Course so that they develop a basic scientific and practical understanding of the subject. After completing the course, they may contact the Foundation through the Contact Us section and express their interest in volunteering.",
        tag: "Volunteer",
      },
      needToBeDoctorPrerak: {
        question: "Do I need to be a doctor to become a Prerak?",
        answer:
          "No. A Prerak does not necessarily have to be a doctor or healthcare professional. Any sincere and socially committed person who is willing to learn, follow the ethical principles of the Foundation, and contribute time toward spreading awareness can become associated as a volunteer. Medical advice, however, should always be given only by appropriately qualified healthcare professionals.",
        tag: "Volunteer",
      },
      becomeCounsellor: {
        question: "How can I become a Garbh Sanskar counsellor?",
        answer:
          "Those who wish to work as Garbh Sanskar counsellors should have appropriate education, training, qualification, or relevant experience in Garbh Sanskar or related areas. Interested individuals may submit their qualifications and professional details to Divya Santan Foundation. The Foundation will review their credentials and guide them regarding suitable opportunities for training, counselling, teaching, or other activities.",
        tag: "Professional",
      },
      facultyMember: {
        question: "Who can become a faculty member of Divya Santan Foundation?",
        answer:
          "The Foundation welcomes qualified professionals from different disciplines related to maternal health, prenatal wellness, education, and Garbh Sanskar. These may include Garbh Sanskar counsellors, allopathic doctors, Ayurvedic doctors, obstetricians and gynecologists, nutritionists, psychologists, yoga specialists, meditation experts, music specialists, astrologers, Pandits/Purohits, educators, researchers, and other suitable professionals. Association with the Foundation is subject to appropriate qualifications, experience, verification, and adherence to its professional and ethical standards.",
        tag: "Professional",
      },
      joinAsFaculty: {
        question: "How can I join Divya Santan Foundation as a faculty member or expert?",
        answer:
          "There are two main ways: You may contact Divya Santan Foundation directly through the Contact Us section and submit your professional details, or you may apply to become associated as an expert through our Navankur online consultation platform. After reviewing your qualifications and area of expertise, our team will contact you regarding further possibilities.",
        tag: "Professional",
      },
      foundationCourse: {
        question: "What is the Garbh Sanskar Foundation Course?",
        answer:
          "The Garbh Sanskar Foundation Course is a short-term educational program of approximately three months. It consists of 12 weekly classes of approximately one hour each, followed by a written assessment. The academic content is primarily based on 'Garbh Sanskar Ka Vigyan' by Dr. Anil Kumar Garg and Dr. Seema Garg. The main purpose of the course is to spread scientific knowledge of Garbh Sanskar and develop informed volunteers and interested individuals who can contribute to society.",
        tag: "Learning",
      },
      freeClassesForCouples: {
        question: "Are there free classes for pregnant couples?",
        answer:
          "Yes. Divya Santan Foundation conducts free online Garbh Sanskar classes twice every month for pregnant couples and families. A team of specialists provides practical guidance, and participants can also ask questions and clarify their doubts during the sessions. For the latest schedule and joining details, please contact the Foundation through the website.",
        tag: "Learning",
      },
      freePersonalGuidance: {
        question: "Does Divya Santan Foundation provide free personal guidance?",
        answer:
          "Yes. The Foundation is working to provide free Garbh Sanskar OPD and counselling services through charitable hospitals and collaborating institutions. At present, regular free Garbh Sanskar guidance is available at Geeta Bhawan Charitable Hospital, Indore, where trained specialists provide guidance to pregnant women and families. The Foundation plans to expand similar services to other cities.",
        tag: "Learning",
      },
      whatIsNavankur: {
        question: "What is Navankur?",
        answer:
          "Navankur is an online consultation platform associated with Divya Santan Foundation. Through Navankur, couples can seek guidance from professionals from different disciplines related to Garbh Sanskar, pregnancy, nutrition, yoga, Ayurveda, emotional well-being, music, and other relevant areas. Users can download the app, register themselves, and select the available consultation options according to their needs.",
        tag: "Consultation",
      },
      whatIsAskShree: {
        question: "What is Ask Shree AI?",
        answer:
          "Ask Shree AI is an AI-based educational guidance system developed using the knowledge framework of 'Garbh Sanskar Ka Vigyan', written by Dr. Anil Kumar Garg and Dr. Seema Garg. Users can ask questions according to their stage of pregnancy, circumstances, or areas of concern and receive relevant educational guidance. Ask Shree AI does not replace medical consultation, diagnosis, or treatment by a qualified healthcare professional.",
        tag: "Consultation",
      },
      hospitalCollaboration: {
        question: "Can a hospital or organization collaborate with Divya Santan Foundation?",
        answer:
          "Yes. Divya Santan Foundation welcomes collaboration with hospitals, universities, educational institutions, NGOs, charitable organizations, research institutions, community groups, and other suitable organizations. Collaboration may include Garbh Sanskar awareness programs, training, research, educational activities, community outreach, free OPD services, and establishment of Garbh Sanskar centres. Interested institutions may contact the Foundation to discuss an appropriate collaborative model.",
        tag: "Collaboration",
      },
      organizeAwareness: {
        question: "Can we organize a Garbh Sanskar awareness program in our city?",
        answer:
          "Yes. Local organizations, NGOs, hospitals, social groups, and institutions may invite Divya Santan Foundation to organize an awareness program. Subject to availability and mutual planning, our team of specialists can conduct educational sessions on the scientific and practical aspects of Garbh Sanskar. Local volunteers and organizations can play an important role in helping such programs reach families in their communities.",
        tag: "Collaboration",
      },
      startCenter: {
        question: "Can we start a Garbh Sanskar Centre or OPD in our city?",
        answer:
          "Yes. One of the long-term objectives of Divya Santan Foundation is to expand Garbh Sanskar Centres and guidance services to different cities. Charitable hospitals, healthcare institutions, NGOs, or suitable organizations interested in establishing a centre or OPD may contact the Foundation. Our team can discuss training, professional support, educational material, and the operational framework according to local needs.",
        tag: "Collaboration",
      },
      supportFoundation: {
        question: "How can I support Divya Santan Foundation?",
        answer:
          "There are many ways to support the mission. You may contribute through: voluntary service, professional expertise, educational support, community networking, infrastructure, research collaboration, sponsorship, or financial assistance. Support received by the Foundation can help expand activities such as free Garbh Sanskar OPDs, online classes, community awareness programs, educational publications, volunteer training, research, and outreach to underserved families.",
        tag: "Support",
      },
      supportWithoutVolunteering: {
        question: "Can I support the Foundation even if I cannot volunteer regularly?",
        answer:
          "Yes. Every contribution is valuable. You may help by spreading awareness, connecting the Foundation with hospitals or organizations, supporting educational activities, sponsoring outreach programs, contributing professional expertise, or providing financial or infrastructural assistance.",
        tag: "Support",
      },
      studentsParticipate: {
        question: "How can students and young people participate?",
        answer:
          "Students and young professionals interested in maternal health, psychology, yoga, Ayurveda, nutrition, social service, research, or Indian knowledge systems may connect with the Foundation. They may participate in educational programs, awareness activities, volunteer initiatives, research-related work, and other suitable projects according to their qualifications and interests.",
        tag: "Support",
      },
      universityResearch: {
        question: "Does Divya Santan Foundation collaborate with universities and researchers?",
        answer:
          "Yes. Promoting scientific research and academic development in Garbh Sanskar and prenatal wellness is an important objective of the Foundation. We welcome collaboration with universities, medical colleges, hospitals, research institutions, scientists, and academicians interested in conducting research, developing educational programs, organizing scientific meetings, or contributing to academic publications.",
        tag: "Collaboration",
      },
      religiousInclusion: {
        question: "Is Garbh Sanskar meant only for people of a particular religion?",
        answer:
          "Garbh Sanskar has deep roots in Vedic and Sanatan traditions, but many of its practical principles—healthy nutrition, emotional well-being, positive family relationships, yoga, meditation, responsible lifestyle, and conscious parenting—have wider relevance. Divya Santan Foundation seeks to share this knowledge respectfully and responsibly while allowing every family to follow its own beliefs, traditions, and medical advice.",
        tag: "Philosophy",
      },
      furtherInformation: {
        question: "Where can I get further information?",
        answer:
          "Please visit the Contact Us section of the Divya Santan Foundation website and submit your query. Our office team will guide you regarding Garbh Sanskar classes, Foundation Course, volunteering, counselling, faculty association, Navankur consultations, free OPD services, institutional collaboration, awareness programs, or support to the Foundation.",
        tag: "Contact",
      },

      // Original questions (keeping for backward compatibility)
      whatIsGarbhSamvad: {
        question: "What is Garbh Samvad and how do we practise it?",
        answer:
          "Garbh Samvad means conscious communication with the unborn child. From around Month 4–5, the fetus can hear external sounds. Parents can sing gently, read inspiring stories, speak words of love, or simply sit quietly in loving awareness. Even 10–15 minutes daily makes a difference.",
        tag: "Practice",
      },
      dietDuringPregnancy: {
        question: "What kind of diet is recommended during pregnancy?",
        answer:
          "Ayurveda recommends a Sattvic diet — fresh, seasonal, unprocessed, nutritious and easy to digest. Modern nutrition also emphasises iron, folate, protein, calcium and healthy fats. Avoid heavy, processed or extremely spiced foods. Always follow your gynecologist's specific dietary advice.",
        tag: "Nutrition",
      },
      fatherParticipation: {
        question: "How can the father participate in Garbh Sanskar?",
        answer:
          "The father's role is vital. He can participate by reading aloud to the unborn child, singing mantras or gentle songs, maintaining a calm and positive home environment, managing family stress, attending antenatal classes together, and supporting the mother's emotional well-being.",
        tag: "Family",
      },
      modernMedicineCompat: {
        question: "Is Garbh Sanskar compatible with modern medical care?",
        answer:
          "Absolutely. Garbh Sanskar is complementary to modern obstetric care, not a substitute for it. Every pregnant woman must remain under the regular guidance of her gynecologist and follow all recommended medical examinations, medicines and treatments. Garbh Sanskar adds a holistic dimension to pregnancy, addressing mental, emotional and spiritual well-being alongside physical health.",
        tag: "Medical",
      },
      vedicSanskars: {
        question: "What are the Vedic Sanskars performed during pregnancy?",
        answer:
          "Three principal Vedic Samskaras are traditionally performed before birth. Garbhadhana Sanskar marks the moment of conscious conception. Punsavana Sanskar is performed in the 2nd–3rd month to bless and protect the developing fetus. Simantonayan Sanskar is a ceremony of joy and blessing conducted in the 5th–7th month. Couples may follow these according to their faith and tradition.",
        tag: "Culture",
      },
    } satisfies Record<KnowledgeQAId, QACopy>,

    scientificRefs: {
      kalyani2011: {
        field: "Neuroscience",
        citation:
          "Kalyani, B. G., Venkatasubramanian, G., et al. (2011). Neurohemodynamic correlates of \u2018OM\u2019 chanting: A pilot fMRI study. International Journal of Yoga, 4(1), 3\u20136.",
        summary:
          "fMRI study demonstrating bilateral deactivation of limbic regions\u2014including the amygdala, hippocampus and orbitofrontal cortex\u2014during OM chanting, similar in effect to vagal nerve stimulation. Indicates a neurological basis for the calming effect of mantra practice.",
        year: "2011",
      },
      bernardi2001: {
        field: "Autonomic Physiology",
        citation:
          "Bernardi, L., Sleight, P., et al. (2001). Effect of rosary prayer and yoga mantras on autonomic cardiovascular rhythms. BMJ, 323, 1446\u20131449.",
        summary:
          "Demonstrates enhanced vagal tone, reduced respiration rate and improved autonomic balance with mantra-based chanting. Provides a cardiovascular mechanism for the parasympathetic (rest-and-digest) effects of rhythmic prayer and mantra.",
        year: "2001",
      },
      streeter2012: {
        field: "Mind-Body Medicine",
        citation:
          "Streeter, C. C., Gerbarg, P. L., et al. (2012). Effects of yoga on the autonomic nervous system, gamma-aminobutyric acid, and allostasis. Medical Hypotheses, 78(5), 571\u2013579.",
        summary:
          "Proposes a neurochemical explanation: increased parasympathetic tone and GABAergic activity correlate with anxiety reduction in yoga practice. Directly relevant to the recommendation of yoga and pranayama during pregnancy for maternal stress management.",
        year: "2012",
      },
      epigeneticsLipton: {
        field: "Epigenetics",
        citation:
          "Lipton, B. H. (2005). The Biology of Belief: Unleashing the Power of Consciousness, Matter and Miracles. Mountain of Love Productions. (Reviewed alongside primary epigenetics literature.)",
        summary:
          "The maternal environment\u2014including nutrition, stress hormones, thoughts and emotional state\u2014can influence gene expression in the developing fetus without altering the underlying DNA sequence. This mechanism, epigenetics, underlies the scientific rationale for Garbh Sanskar\u2019s emphasis on maternal lifestyle.",
        year: "2005",
      },
      prenatalPsychologyVerny: {
        field: "Prenatal Psychology",
        citation:
          "Verny, T., \u0026 Kelly, J. (1981). The Secret Life of the Unborn Child. Summit Books, New York.",
        summary:
          "Foundational text in prenatal psychology, documenting fetal responsiveness to the mother\u2019s voice, emotional state and external stimuli from the second trimester onward. Supports Garbh Samvad and the importance of positive maternal emotional experiences during pregnancy.",
        year: "1981",
      },
      maternalStressGluckman: {
        field: "Developmental Biology",
        citation:
          "Gluckman, P. D., \u0026 Hanson, M. A. (2005). The Fetal Matrix: Evolution, Development and Disease. Cambridge University Press.",
        summary:
          "Documents how prenatal environmental signals\u2014including maternal stress, nutrition and hormonal milieu\u2014programme long-term health and disease susceptibility in the offspring. Provides the developmental biology foundation for preventive prenatal care through Garbh Sanskar.",
        year: "2005",
      },
    } satisfies Record<ScientificReferenceId, ScientificRefCopy>,

    researchTopics: {
      epigenetics: {
        field: "Molecular biology",
        topic: "Epigenetics",
        summary: "How environment and lifestyle may influence gene expression during development.",
      },
      fetalDevelopment: {
        field: "Developmental science",
        topic: "Fetal Development",
        summary: "Stage-wise growth of sensory, motor and neurological capacities.",
      },
      prenatalPsychology: {
        field: "Psychology",
        topic: "Prenatal Psychology",
        summary: "Studies on responsiveness of the fetus to voice, rhythm and emotional context.",
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
      councilSubtitle: "Leading the movement across communities.",
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
        "By shifting the focus from disease management to conscious human creation, Garbh Sanskar offers a sustainable solution for public health, mental well-being, and societal harmony. It represents not merely a program, but a transformative movement towards a healthier, more humane, and peaceful world.",
      ],
      coreObjectiveTitle: "Core Objective",
      coreObjectiveList: [
        "Healthy progeny",
        "Strong families",
        "Harmonious societies",
        "A compassionate and peaceful world",
      ],
      coreObjectiveDesc:
        "To scientifically, spiritually, and socially establish Garbh Sanskar as a global discipline that nurtures. The core objective of Garbh Sanskar is to establish it as a global discipline that is recognized and valued across scientific, spiritual, and social dimensions. The aim is to nurture and support the growth of healthy progeny, ensuring that children are born with optimal physical, mental, and emotional well-being. By doing so, Garbh Sanskar also seeks to build strong families that serve as the foundation for a harmonious society. Ultimately, these efforts are directed toward creating a compassionate and peaceful world, where the values of love, understanding, and harmony prevail.",
    },
    section8: {
      title: "Divya Santan Foundation - A Section 8 Non-Profit Organization",
      description:
        "Divya Santan Foundation is a Section 8 non-profit organization dedicated to promoting the science and practice of Garbh Sanskar, conscious parenthood, maternal well-being, and holistic development of future generations.",
      vision:
        "The Foundation works with a vision of bringing together modern medical science and the wisdom of Ayurveda, Yoga, psychology, neuroscience, epigenetics, and traditional Vedic knowledge to develop Garbh Sanskar as a responsible, evidence-based, ethical, and accessible approach to preconception and prenatal care.",
      whatIsSection8: {
        title: "What is a Section 8 Non-Profit Organization?",
        paragraphs: [
          "A Section 8 Company, established under the Companies Act, 2013, is created to serve charitable, scientific, educational, research, social-welfare, and other public-benefit objectives rather than for private commercial profit.",
          "Any income or surplus generated by such an organization is utilized for advancing its mission and charitable objectives and is not distributed as dividend among its members.",
          "Thus, Divya Santan Foundation is committed to working for public benefit, education, research, healthcare awareness, and social development.",
        ],
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
        "Support maternal emotional health, family strengthening, early childhood wellness, and the creation of healthy, compassionate, value-oriented future generations.",
      ],
      largerPurpose: {
        title: "Our Larger Purpose",
        paragraphs: [
          "Divya Santan Foundation believes that nation-building begins with the child, and the nurturing of the child begins even before birth.",
          "Our endeavor is therefore not limited to pregnancy care. It is a movement towards creating healthy children, harmonious families, a cultured and compassionate society, a strong nation, and ultimately a more peaceful world.",
          "Healthy Child → Healthy Family → Healthy Society → Strong Nation → Peaceful World",
          "From Garbh Sanskar to Rashtra Sanskar",
        ],
      },
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
              "Integration of scientific explanations with spiritual wisdom for mass acceptance.",
            ],
            body: "Promoting awareness and education about Garbh Sanskar among various segments of society is a key pillar in achieving its core objective. This involves strategic collaboration to facilitate widespread dissemination. The combination of science and spirituality bridges the gap between tradition and modernity.",
          },
          {
            subtitle: "2. Students – Future Parents",
            points: [
              "Lectures and workshops in Colleges, Universities, and Educational institutions.",
              "Objective: Sensitize youth early about conscious parenthood and introduce Garbh Sanskar as a life science.",
            ],
          },
          {
            subtitle: "3. Expectant Parents",
            points: [
              "Regular Garbh Sanskar classes, meetings, and counseling sessions.",
              "Focus on: Practical guidance, Emotional well-being, and Lifestyle correction.",
              "Simultaneous data collection for scientific evaluation and program refinement.",
            ],
          },
          {
            subtitle: "4. Community-Based Organizational Structure",
            points: [
              "Development of a structured propagation model based on Religion, Community, and Region.",
              "Hierarchical framework: City In-charge, State In-charge, National In-charge.",
            ],
          },
          {
            subtitle: "5. Central DSP Body – Role",
            points: [
              "Preparation and distribution of printed materials, digital content, videos and training modules.",
              "Providing trained speakers, mentors and master trainers.",
              "Training volunteers and educators to ensure uniform, authentic, and scientific delivery of Garbh Sanskar knowledge.",
            ],
          },
        ],
      },
      {
        id: "training",
        title: "B. Educating & Training Concerned Specialists",
        sections: [
          {
            subtitle: "1. Professional Training Programs",
            points: [
              "Workshops, lectures, and online courses for Doctors, Yoga therapists, Music therapists, Psychologists, Counselors, and Spiritual practitioners.",
            ],
            body: "To ensure that Garbh Sanskar knowledge is effectively imparted by qualified professionals, a variety of professional training programs are organized to provide hands-on experience and deep theoretical understanding.",
          },
          {
            subtitle: "2. Academic Integration",
            points: [
              "Introduction of Diploma courses, Degree programs, and Fellowship programs.",
              "Allied subjects: Yoga, Music therapy, Psychology, Astrology (research-based), and Spiritual sciences.",
            ],
          },
          {
            subtitle: "3. University & Government Collaboration",
            points: [
              "Engagement with Universities, Vice Chancellors, Governors, and Government bodies.",
              "Long-term goal: Inclusion of Garbh Sanskar concepts in medical and paramedical curricula.",
            ],
          },
        ],
      },
      {
        id: "centres",
        title: "C. Garbh Sanskar Treatment Centres",
        sections: [
          {
            subtitle: "1. Establishment Phase",
            points: [
              "Creation of Garbh Sanskar centres in major cities.",
              "Centres to provide: Guidance, Counseling, and Structured Garbh Sanskar programs.",
            ],
          },
          {
            subtitle: "2. Expansion Plan",
            points: ["Next 10 years: Expansion across India.", "By 20 years: Global presence."],
          },
          {
            subtitle: "3. Global Outreach",
            points: [
              "Establishment of centres in USA, UK, Europe, and other global regions.",
              "Adaptation to local cultures while maintaining core principles.",
            ],
          },
        ],
      },
      {
        id: "research",
        title: "D. Research, Data Collection & Scientific Validation",
        sections: [
          {
            subtitle: "1. Research Centres",
            points: [
              "Establishment of dedicated Garbh Sanskar research centres.",
              "Multidisciplinary research involving Medical science, Neuroscience, Psychology, Epigenetics, and Spiritual sciences.",
            ],
          },
          {
            subtitle: "2. Academic Research",
            points: [
              "Introduction of PhD programs and Post-doctoral research.",
              "Encouraging evidence-based validation of Garbh Sanskar principles.",
            ],
          },
          {
            subtitle: "3. Centralized Data System",
            points: [
              "Creation of a central data repository.",
              "Longitudinal studies for outcome analysis, program improvement, and global publication.",
            ],
          },
        ],
      },
      {
        id: "association",
        title: "E. International Association of Garbh Sanskar",
        sections: [
          {
            subtitle: "1. Formation",
            points: [
              "Establishment of a global umbrella organization to connect Institutions, Practitioners, Researchers, and Educators.",
            ],
          },
          {
            subtitle: "2. Scientific Exchange",
            points: [
              "Organization of Regional conferences, National conventions, and International congresses.",
              "Knowledge sharing, collaboration, and innovation.",
            ],
          },
          {
            subtitle: "3. Standardization & SOP Development",
            points: [
              "Development of Standard Operating Procedures (SOPs) and uniform program structures.",
              "Ensuring authenticity, quality, and global consistency.",
            ],
          },
        ],
      },
    ],
    history: [
      {
        title: "From Garbh Sanskar to Rashtra Sanskar",
        body: "Divya Santan Prakalp, now institutionalized as Divya Santan Foundation, a “Section 8 non-profit organization”, was born from a simple yet powerful thought: if we wish to build a better society and a stronger nation, we must begin with the child—even before birth.",
      },
      {
        title: "The Beginning of a New Journey",
        body: "After more than three decades of professional and academic work in medicine, surgery, research, and teaching, Dr. Anil Kumar Garg and Dr. Seema Garg felt an increasing desire to contribute more deeply to society and to the well-being of future generations. A turning point came when Dr. Anil Garg attended an HSSF workshop in Mumbai, guided by Shri Gunwant Kothari Ji. The inspiring thoughts of Shri Bhaiyyaji Joshi Ji gave direction to a long-standing inner desire to work for social transformation. Subsequently, Shri Gunwant Kothari Ji encouraged Dr. Garg to work in the field of Garbh Sanskar. Dr. Hitesh Jani, Director of Garbhopnishad Foundation, Jamnagar and Dr. Karishma Nirvani played a major role in scientifically teaching and guiding us.",
      },
      {
        title: "Community & Leadership Support",
        body: "Multiple meetings, detailed discussions, and extensive planning sessions were conducted with senior leaders and functionaries associated with RSS, HSSF, IMCTF, and allied organizations. Among those who contributed their valuable time, guidance, and deep thinking were Shri Yogendra Mahant, Shri Vinod Birla, Shri Chandramohan Dubey, Shri Rakesh Dubey, Shri Pranjal Mattha, Shri Vikas Mishra, Shri Manish Nigam, Dr. Jagdish Joshi, Mrs. Anu Purohit, Dr. Radhika Maheshwari, Shri Vinod Bandy, Mrs. Romsa Sirkanungo, Mrs. Priyanka Vedi, and many other dedicated well-wishers.",
      },
      {
        title: "From Interest to Academic Commitment",
        body: "To understand Garbh Sanskar in depth and present it in a responsible and scientific manner, Dr. Anil Garg and Dr. Seema Garg completed a Post Graduate Diploma in Garbh Sanskar from Lucknow University. Now others have also done the diploma from Indore (Dr. Romsha Sirkanongo, Mrs. Milli Chouhan, Mrs. Laxmi Pastariya). Mrs. Anu Purohit has done a one-year post graduate diploma in music therapy from Kashi university. They studied ancient Indian wisdom, prenatal development, modern scientific literature, maternal health, psychology, lifestyle, yoga, meditation, and the various influences that may shape the intrauterine environment.",
      },
      {
        title: "Understanding Society Before Starting the Mission",
        body: "Before proceeding further, a grassroots survey was undertaken to understand whether society was ready to accept Garbh Sanskar through a scientific and structured approach. The team travelled through Indore, Rajasthan, villages, tehsils, and different social and cultural communities. The response was overwhelming. Families showed a deep interest in understanding Garbh Sanskar in a practical, scientific, and accessible form.",
      },
      {
        title: "Birth of Divya Santan Foundation",
        body: "On 19 May 2024, Divya Santan Prakalp was formally launched with a long-term vision of taking the knowledge and practice of Garbh Sanskar to families across India and eventually throughout the world. Its guiding principle became: “Nation Building Begins in the Womb.”",
      },
      {
        title: "Taking Garbh Sanskar to Society",
        body: "Numerous awareness programs and workshops were subsequently conducted. A major milestone came during the HSSF Lalbagh Mela in December 2024, where approximately 3,000 pregnant mothers and more than 2,000 other participants attended. Around 20,000 Garbh Sanskar booklets were distributed at the grassroots level, and approximately 2,200 Anganwadi workers were trained.",
      },
      {
        title: "From Awareness to Service",
        body: "Garbh Sanskar OPD services were started at Geeta Bhawan Hospital, Indore, where trained specialists provide guidance to pregnant women and couples. Services have also been initiated at RK Hospital, Indore. Alongside this, free online Garbh Sanskar classes are being conducted regularly.",
      },
      {
        title: "Support and Leadership of Shri Vinod Ji Agarwal",
        body: "An important milestone in the journey of Divya Santan Foundation was the association and support of renowned businessman, entrepreneur, philanthropist, and donor Shri Vinod Ji Agarwal. His guidance, vision, financial support, and provision of essential infrastructure played a significant role in strengthening and expanding the initiative.",
      },
      {
        title: "The Science of Garbh Sanskar",
        body: "To make the subject available in a comprehensive, structured, and scientifically explained form, Dr. Anil Kumar Garg and Dr. Seema Garg authored the book 'Garbh Sanskar Ka Vigyan', a nearly 400-page, full-colour publication integrating ancient Indian wisdom with contemporary scientific understanding. It was formally launched at a grand event at Daly College Auditorium, Indore, graced by Shri Bhaiyyaji Joshi Ji and the Hon'ble Chief Minister of Madhya Pradesh, Dr. Mohan Yadav Ji.",
      },
      {
        title: "Technology for a Global Reach",
        body: "To make Garbh Sanskar guidance available irrespective of geography, Divya Santan Foundation is developing a strong digital ecosystem. This includes an online consultation platform, digital educational resources, named as “Divyankur” and an AI-based personalized guidance system 'Ask Shree' for free guidance to pregnant mothers.",
      },
    ],
    leadership: {
      patrons: [
        {
          name: "Pujya Swami Avdheshanand Giri Ji Maharaj",
          role: "Chief Patron",
          img: avdheshanandPortrait,
          contributions: [
            "Spiritual Patronage",
            "National Awareness Support",
            "Cultural Preservation",
          ],
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
        },
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
          credentials:
            "MBBS, MS, MCh Plastic Surgery, MA-Yog, ABHRS, ISHRS, Diploma in Garbh Sanskar",
          img: "anil-sir.png",
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
        },
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
        },
      ],
      executiveCouncil: [
        "Shri Vinod Birla",
        "Shri Chandramohan Dubey",
        "Shri Rakesh Dubey",
        "Shri Pranjal Mattha",
        "Shri Vikas Mishra",
        "Shri Manish Nigam",
        "Dr. Seema Garg",
        "Dr. Jagdish Joshi",
        "Mrs. Anu Purohit",
        "Dr. Radhika Maheshwari",
        "Shri Vinod Bandy",
        "Mrs. Romsa Sirkanungo",
        "Mrs. Priyanka Vedi",
      ],
    },
  },

  sciencePage: {
    meta: {
      title: "The Science of Garbh Sanskar | Divya Santan Foundation",
      description:
        "Understand Garbh Sanskar through its Sanskrit meaning, prenatal science, research questions and responsible practice.",
    },
    hero: {
      eyebrow: "The Science of Garbh Sanskar",
      title: "A living bridge between wisdom and evidence.",
      intro:
        "Garbh Sanskar brings together a way of seeing life before birth, the biology of the prenatal environment, and a social commitment to healthier generations. This page helps you understand the connections without turning a complex field into promises.",
      primaryAction: "Explore research",
      secondaryAction: "Ask Shree AI",
      mapLabel: "How to read this page",
      map: [
        {
          label: "Meaning",
          body: "The Sanskrit vocabulary gives the tradition its purpose: conscious cultivation, not fear or perfectionism.",
        },
        {
          label: "Mechanism",
          body: "Prenatal health, stress, nutrition, relationships and environment are the pathways that science can study.",
        },
        {
          label: "Mission",
          body: "Education, training and research turn individual insight into a long-term public good.",
        },
      ],
    },
    lenses: {
      eyebrow: "Three lenses",
      title: "A fuller picture needs more than one language.",
      intro:
        "The foundation's approach is neither a rejection of tradition nor a shortcut around evidence. Move through these three lenses to see how the ideas relate and where they should remain distinct.",
      items: {
        meaning: {
          label: "Meaning",
          kicker: "The cultural lens",
          title: "Garbh is a relationship, not only a location.",
          body: "Garbh means the womb and the developing life within it. Sanskar points to refinement, cultivation and the formation of qualities. Together, the phrase asks families to treat the prenatal period as a time of care, intention, values and relationship - not merely as a medical interval.",
        },
        mechanism: {
          label: "Mechanism",
          kicker: "The biological lens",
          title: "The environment around a pregnancy is part of the story.",
          body: "Nutrition, sleep, stress physiology, emotional support, movement, exposure to substances and access to medical care can influence maternal well-being and fetal development. These are testable pathways, while the size and meaning of any effect must be studied carefully rather than assumed.",
        },
        mission: {
          label: "Mission",
          kicker: "The social lens",
          title: "Knowledge becomes useful when it reaches families responsibly.",
          body: "The draft's larger vision is a movement: educate families, train practitioners, support communities, build research capacity and bring prenatal well-being into public conversation. Garbh Sanskar is presented here as a shared responsibility, not a product or a promise of a perfect child.",
        },
      },
    },
    domains: {
      eyebrow: "The research map",
      title: "Where tradition meets questions we can investigate.",
      intro:
        "The following domains come directly from the foundation's proposed research direction. Each one has a different evidence base, so the language of certainty should change with the question.",
      researchAreas: {
        epigenetics: {
          title: "Epigenetics",
          body: "Study how prenatal conditions may relate to gene expression, while keeping association distinct from certainty.",
        },
        fetalLearning: {
          title: "Fetal learning",
          body: "Study sensory experiences before birth without treating them as guaranteed learning outcomes.",
        },
        neuroscience: {
          title: "Neuroscience",
          body: "Explore brain development, stress biology, sensory experience and early relationships during the prenatal period.",
        },
        psychology: {
          title: "Psychology",
          body: "Investigate maternal mental health, emotional support, attachment and the family environment.",
        },
        yoga: {
          title: "Yoga research",
          body: "Evaluate the safety and health effects of yoga, breathing and relaxation practices.",
        },
        ayurveda: {
          title: "Ayurvedic context",
          body: "Study classical references and practices as cultural and historical sources, separately from clinical evidence.",
        },
      },
      evidenceLabel: "What research can examine",
      boundaryLabel: "What to hold carefully",
      tabs: {
        epigenetics: "Epigenetics & gene expression",
        neuroscience: "Prenatal neuroscience",
        wellbeing: "Maternal well-being",
        tradition: "Practice & cultural meaning",
      },
      panels: {
        epigenetics: {
          kicker: "Biology and environment",
          title: "Epigenetics asks how conditions shape expression.",
          body: "The draft identifies epigenetics as one route for understanding how nutrition, stress and environmental exposures may affect gene regulation without changing the DNA sequence. It is a research field that can add precision to the conversation around prenatal life.",
          evidence:
            "Researchers can study measurable markers, maternal exposures, fetal development and later outcomes across well-designed cohorts.",
          boundary:
            "Epigenetic findings do not mean that a thought, mantra or single practice can determine a child's future. Association is not destiny, and individual outcomes are complex.",
          source: "Research direction: epigenetics, prenatal health and long-term development.",
        },
        neuroscience: {
          kicker: "Brain and relationship",
          title: "The prenatal period is also a developmental window.",
          body: "The foundation draft connects prenatal psychology, neurodevelopment and early sensory experience with the importance of a calm, responsive environment. This creates a useful meeting point for neuroscience, mental health and family education.",
          evidence:
            "Research can examine stress biology, sleep, voice and sound exposure, maternal mental health, attachment and early developmental measures.",
          boundary:
            "Sound, chanting and communication may be meaningful practices, but claims about intelligence or guaranteed neurological outcomes need stronger evidence than a compelling story.",
          source: "Research direction: neuroscience, prenatal psychology and neuroendocrinology.",
        },
        wellbeing: {
          kicker: "Health and prevention",
          title: "A supported mother is part of a supported beginning.",
          body: "Garbh Sanskar places nutrition, emotional steadiness, healthy routine, family harmony and appropriate medical care in one frame. The most immediate value is often practical: helping families notice stress, seek care and create a kinder home environment.",
          evidence:
            "Programs can evaluate maternal stress, nutrition, health behaviours, social support, participation and access to qualified care.",
          boundary:
            "Educational guidance cannot replace a gynecologist, mental-health professional, emergency care or an individualized treatment plan.",
          source:
            "Foundation principle: complementary education alongside regular medical guidance.",
        },
        tradition: {
          kicker: "Texts, rituals and translation",
          title: "Ancient language can generate questions without becoming proof.",
          body: "Garbhadhana, Punsavana and Simantonnayana carry historical, ethical and relational meanings. Studying them today involves translation: identifying the value a practice expresses, then asking which parts can be interpreted, tested or adapted with care.",
          evidence:
            "Scholars can compare texts, document lived practice, study acceptability and test whether educational programs improve knowledge, support or well-being.",
          boundary:
            "Cultural importance and scientific validation are different kinds of authority. Respecting one does not require overstating the other.",
          source:
            "Source frame: Garbh Sanskar tradition, Ayurveda and the foundation's education mission.",
        },
      },
    },
    knowledgeCentre: {
      eyebrow: "Garbh Sanskar knowledge centre",
      title: "Simple guidance for everyday learning.",
      intro:
        "Clear articles and practical resources help families explore Garbh Sanskar with curiosity, care and respect for scientific boundaries.",
      topics: [
        {
          title: "Pregnancy care",
          body: "Foundational guidance for a supported and informed pregnancy.",
        },
        {
          title: "Month-by-month",
          body: "Step-by-step information for changing needs across pregnancy.",
        },
        {
          title: "Yoga",
          body: "Simple practices to discuss with qualified professionals.",
        },
        {
          title: "Meditation",
          body: "Accessible ways to understand steadiness, rest and emotional well-being.",
        },
        {
          title: "Prayer",
          body: "Reflective practices understood through personal and cultural meaning.",
        },
        {
          title: "Nutrition",
          body: "Nutritional information that complements individualized medical guidance.",
        },
        {
          title: "Sanskar",
          body: "Articles on values, relationships and conscious family life.",
        },
        {
          title: "Scientific evidence",
          body: "A clear view of what research can examine and where uncertainty remains.",
        },
      ],
    },
    practice: {
      eyebrow: "A responsible way to learn",
      title: "Keep the care. Lose the pressure.",
      intro:
        "The science of Garbh Sanskar should make families more informed and supported, not more anxious. These principles shape how the foundation can teach the subject with humility.",
      principles: [
        {
          title: "Begin with the whole environment",
          body: "Look beyond a single ritual or food. Health, relationships, rest, mental well-being, safety and medical access all belong in the picture.",
        },
        {
          title: "Separate evidence from interpretation",
          body: "Name what is established, what is promising and what is cultural or spiritual meaning. Clear boundaries build trust.",
        },
        {
          title: "Protect the mother's agency",
          body: "No family should be burdened with the belief that every outcome is caused by the mother's thoughts, discipline or devotion.",
        },
        {
          title: "Turn curiosity into better questions",
          body: "Research is not a stamp placed on tradition. It is a disciplined way to learn what helps, for whom, under which conditions and with what limits.",
        },
      ],
    },
    closing: {
      eyebrow: "Continue the learning",
      title: "From understanding to thoughtful action.",
      body: "Read the foundation's wider research commitments or learn through structured courses designed for families, volunteers and educators.",
      primaryAction: "View courses",
      secondaryAction: "Research & commitments",
    },
  },

  learnPage: {
    hero: {
      eyebrow: "Learn Garbh Sanskar",
      nativeEyebrow: "",
      headline1: "Nurturing begins",
      headline2: "before birth.",
      intro:
        "Garbh Sanskar is the ancient, scientifically aligned practice of consciously creating the most favourable environment for an unborn child — encompassing physical health, emotional calm, spiritual awareness, and family harmony.",
      paths: {
        planning: { label: "Planning Pregnancy", sub: "Pre-conception guidance" },
        pregnant: { label: "I Am Pregnant", sub: "Month-by-month guidance" },
        science: { label: "Understand the Science", sub: "Ritual, epigenetics & research" },
      },
    },
    philosophy: {
      eyebrow: "What is Garbh Sanskar?",
      headline1: "Two Sanskrit words.",
      headline2: "One transformative idea.",
      intro:
        "Garbh Sanskar means womb (Garbh) refinement and positive transformation (Sanskar). Together they describe a holistic way of consciously nurturing the unborn child through healthy lifestyle, positive thoughts, prayer, mantra, meditation, yoga, music, good conduct, and family harmony.",
      principleQuote:
        "The baby is not merely in the mother's womb — the baby is with the mother every moment.",
      principleLabel: "Core principle of Garbh Sanskar",
      disclaimer:
        "Garbh Sanskar is complementary to modern medical care, not a substitute. Always remain under the guidance of your gynecologist.",
      tabs: {
        garbh: { label: "Garbh", native: "" },
        sanskar: { label: "Sanskar", native: "" },
        together: { label: "Together", native: "" },
      },
      content: {
        garbh: {
          title: "The Sacred Womb",
          body: "In Vedic philosophy, Garbh is more than a biological space. It is a sacred environment where a new life develops physically, mentally, emotionally, and spiritually. The mother's health, thoughts, emotions, daily routine, and spiritual practices all shape the intrauterine world the child inhabits.",
          quote: "The womb is the first classroom. The mother is the first teacher.",
        },
        sanskar: {
          title: "Refinement & Transformation",
          body: "Sanskar signifies the refinement of thoughts, behaviour, emotions, habits, values, and consciousness. The classical Ayurvedic tradition states: Sansk\u0101ro hi gu\u1e47\u0101ntar\u0101dh\u0101nam uchyate — Sanskar is the process through which qualities are refined and elevated. Just as gold is purified, human personality can be nurtured toward compassion, courage, and spiritual awareness.",
          quote:
            "\u0938\u0902\u0938\u094d\u0915\u093e\u0930\u094b \u0939\u093f \u0917\u0941\u0923\u093e\u0928\u094d\u0924\u0930\u093e\u0927\u093e\u0928\u092e\u0941\u091a\u094d\u092f\u0924\u0947 \u2014 Sanskar transforms qualities into higher qualities.",
        },
        together: {
          title: "Nurturing Before Birth",
          body: "Garbh Sanskar is the conscious creation of the most favourable physical, nutritional, mental, emotional, social, and spiritual environment for the unborn child. It includes nutritious food, healthy lifestyle, positive thoughts, yoga, meditation, prayer, mantra, music, baby talk, family harmony, and appropriate Vedic practices. It is a way of conscious living — not merely a ritual.",
          quote:
            "The baby is not merely in the mother's womb — the baby is with the mother every moment.",
        },
      },
      reference:
        'Reference: Chapter 4 — "Introduction to Garbh Sanskar" · The Science of Garbh Sanskar · Dr. Anil Kumar Garg & Dr. Seema Garg',
    },
    science: {
      eyebrow: "Ritual or Science?",
      headline1: "Both — and that is the point.",
      intro:
        "Garbh Sanskar is not exclusively ritual or science. It is a holistic approach that blends cultural traditions with scientific insights. Ancient descriptions, once considered symbolic, are now being validated by research.",
      keyFindingLabel: "Key Finding",
      tabs: {
        epigenetics: { label: "Epigenetics" },
        bonding: { label: "Bonding" },
        stress: { label: "Stress & Brain" },
        sound: { label: "Sound & OM" },
      },
      content: {
        epigenetics: {
          title: "Epigenetics & Gene Expression",
          body: "Research has shown that a mother's emotions, nutrition, and environment can influence gene expression in the fetus — without altering the genetic code itself. Such changes can even be inherited across generations.",
          finding: "Maternal environment shapes which genes are expressed in the developing child.",
          source: "Modern epigenetic research, multiple peer-reviewed studies",
        },
        bonding: {
          title: "Maternal\u2013Fetal Bonding",
          body: "By the second trimester, the fetus responds to the mother's voice, emotions, and external sounds. Newborns can recognise sounds they heard during gestation, confirming that prenatal communication has real neurological basis.",
          finding:
            "Fetuses begin hearing and responding to external sounds around weeks 18\u201324.",
          source: "Developmental neuroscience, fetal auditory research",
        },
        stress: {
          title: "Maternal Stress & Brain Development",
          body: "Maternal stress leads to the release of cortisol, which can negatively affect fetal brain development. Garbh Sanskar's emphasis on emotional calm, meditation, and family harmony directly addresses this scientifically established pathway.",
          finding:
            "Elevated cortisol during pregnancy is associated with altered fetal neurodevelopment.",
          source: "Federenko et al. (2004), Journal of Clinical Endocrinology & Metabolism",
        },
        sound: {
          title: "OM Chanting & Neurological Effects",
          body: "Research using fMRI has shown that chanting OM decreases activity in the limbic system — including the amygdala, hippocampus, and orbitofrontal cortex — areas associated with stress and anxiety. It increases parasympathetic activity, inducing calm.",
          finding:
            "OM chanting produces bilateral deactivation of limbic regions, similar to vagal nerve stimulation.",
          source:
            "Kalyani et al. (2011), International Journal of Yoga; Bernardi et al. (2001), BMJ",
        },
      },
      reference:
        'Reference: Chapter 5 — "Garbh Sanskar: Is it Ritual or Science?" · The Science of Garbh Sanskar · Dr. Anil Kumar Garg & Dr. Seema Garg',
    },
    preConception: {
      eyebrow: "Before Conception",
      headline1: "Preparation is the",
      headline2: "first Sanskar.",
      intro:
        "A couple should ideally begin a minimum of 3 months of disciplined preparation before conception. Conception is not merely a biological act — it is a sacred spiritual process, a form of penance, a divine calling where a soul descends to earth.",
      devoteQuote:
        "If one desires to bring forth a noble and elevated soul, the couple must prepare with the same devotion a farmer gives to his land — choosing the best seeds, enriching the soil, and sowing at the right time.",
      fourElementsLabel: "Four Essentials for Healthy Conception (Ayurveda)",
      stepsLabel: "Beej Shuddhi \u2014 9 Preparation Steps (Ayurveda)",
      reference:
        'Reference: Chapter 13 — "Pre-Conception Counseling" · The Science of Garbh Sanskar',
      elements: {
        ritukala: { native: "", desc: "Healthy Ovulation", detail: "Regular menstrual cycles" },
        kshetra: { native: "", desc: "Healthy Uterus", detail: "Optimal uterine environment" },
        ambu: { native: "", desc: "Proper Nutrition", detail: "Nourishment for all nine months" },
        beej: { native: "", desc: "Healthy Seeds", detail: "High-quality ovum and sperm" },
      },
      steps: {
        physical: {
          title: "Physical Purification",
          body: "Panchakarma detox, eliminating toxins, balancing doshas. Supports healthy sperm and ovum quality.",
        },
        diet: {
          title: "Diet & Ahara",
          body: "Women: pumpkin seeds, fenugreek, turmeric, milk, ghee. Men: walnuts, almonds, dates, fresh fruits.",
        },
        lifestyle: {
          title: "Lifestyle (Vichar & Vyavahar)",
          body: "Stress-free, regular sleep, loving relationships, no addictions, daily yoga and walking.",
        },
        yoga: {
          title: "Yoga & Meditation",
          body: "Enhances flexibility and reproductive health. Promotes emotional stability and reduces stress.",
        },
        ayurvedic: {
          title: "Ayurvedic Consultation",
          body: "An Ayurvedic physician diagnoses through pulse, tongue, and appearance to offer personalised detox and herbal treatments to improve reproductive potential.",
        },
        panchakarma: {
          title: "Panchakarma",
          body: "Comprehensive detox protocol under expert supervision — Vaman, Virechana, Basti, Nasya — to eliminate toxins that hinder fertility.",
        },
        spiritual: {
          title: "Spiritual Purification",
          body: "Positive energy, peace, and higher consciousness enhance reproductive readiness and influence the incoming soul.",
        },
        health: {
          title: "Health Check-ups",
          body: "Blood tests for hemoglobin, blood sugar, thyroid, Vitamin B12, Vitamin D, and Serum Ferritin for both partners.",
        },
        positiveThinking: {
          title: "Positive Thinking",
          body: "A positive outlook on life, relationships, challenges, and parenting fosters emotional stability. Avoid greed, envy, and anger, which disrupt mental peace.",
        },
      },
    },
    sanskars: {
      eyebrow: "Pregnancy Sanskars",
      headline: "Three sacred rites of pregnancy",
      intro:
        "Classical Indian tradition prescribes three Sanskars during pregnancy — each addressing a different dimension of the child's development.",
      timingLabel: "Timing",
      purposeLabel: "Purpose",
      stages: {
        garbhadhan: {
          label: "Garbhadhana",
          native: "",
          subtitle: "The Divine Process of Conception",
          timing: "At the time of conception",
          purpose: "Inviting a conscious soul",
          body: "Garbhadhana Sanskar treats conception not as a mere biological act but as a sacred spiritual practice \u2014 a form of tapasya through which a divine soul descends to earth. Parents prepare consciously with prayer, positive intention, and emotional harmony. The mental state, environment, and circumstances at conception directly influence the body and soul of the child.",
          highlight:
            "The pregnancy should not occur by coincidence, but as the result of a conscious decision and sacred intention \u2014 not by chance, but by choice.",
        },
        punswan: {
          label: "Punsavana",
          native: "",
          subtitle: "For the Physical Well-being of the Fetus",
          timing: "2\u20133 months after conception",
          purpose: "Physical health and protection",
          body: "Punsavana Sanskar is performed two to three months after conception with the intention that the child will emerge strong, healthy, disease-free, long-lived, intelligent, and beautiful. The Caraka Samhit\u0101 provides detailed guidance on what the mother should avoid and what she should embrace: joyful disposition, peaceful thoughts, and sattvic nourishment.",
          highlight:
            "Everything the mother does shapes the child's constitution. The fetus shares in the mother's physical experiences.",
        },
        simantonayan: {
          label: "Simantonnayana",
          native: "",
          subtitle: "For the Mental Development of the Unborn Child",
          timing: "Later months of pregnancy",
          purpose: "Cognitive and emotional nurturing",
          body: "S\u012bmant means the mind; Unnayana means upliftment. This Sanskar focuses the mother's attention on nurturing the baby's brain and mental growth. The husband applies fragrant oil to his wife's scalp, combs her hair, and accompanies her to a sacred ceremony \u2014 symbolising his love, commitment, and the couple's united intention to create a joyful, nurturing environment.",
          highlight:
            "The child's mind blossoms in harmony with the mother's intellect and lifestyle. The husband's support is not ceremonial \u2014 it is essential.",
        },
      },
    },
    monthJourney: {
      eyebrow: "Month-by-Month Guidance",
      headline1: "Every month has its",
      headline2: "own Garbh Sanskar.",
      intro:
        "Each of the nine months of pregnancy has specific guidance for diet, yoga, meditation, music, Garbh Samvad, and lifestyle. This is a month-specific, stage-aware system drawn from both classical Ayurvedic texts and modern prenatal science.",
      nineMonthsLabel: "Nine Months \xb7 One Journey",
      joinClassesCta: "Join Free Pregnancy Classes",
      practices: {
        diet: { label: "Diet & Nutrition", desc: "Sattvic, nourishing foods by trimester" },
        yoga: { label: "Yoga & Pranayama", desc: "Breath and movement for mother and baby" },
        meditation: { label: "Meditation", desc: "Mindfulness and emotional calm" },
        music: { label: "Music & Mantra", desc: "Healing sound for fetal development" },
        garbhSamvad: { label: "Garbh Samvad", desc: "Loving communication with the unborn child" },
        surya: { label: "Surya Sadhana", desc: "Solar practices and morning rituals" },
        family: { label: "Family\u2019s Role", desc: "Father, family, and home environment" },
        ayurveda: {
          label: "Ayurveda & Lifestyle",
          desc: "Daily regimen aligned with classical texts",
        },
      },
      months: [
        {
          focus: "Foundation",
          desc: "Sattvic diet, rest, positive thoughts. Fetal organs begin forming.",
        },
        {
          focus: "Nourishment",
          desc: "Nutrition intensive. Gentle yoga begins. Emotional bonding.",
        },
        { focus: "Punsavana Sanskar", desc: "Second Sanskar performed. Fetal heartbeat present." },
        {
          focus: "Music & Mantra",
          desc: "Baby begins to hear. Garbh Samvad (talking to baby) begins.",
        },
        {
          focus: "Movement & Bonding",
          desc: "Baby moves. Father's role intensifies. Family harmony essential.",
        },
        {
          focus: "Simantonnayana",
          desc: "Third Sanskar. Mental development focus. Mind-body practices.",
        },
        {
          focus: "Strength & Calm",
          desc: "Rest increases. Pranayama and meditation for birth preparation.",
        },
        {
          focus: "Preparation",
          desc: "Gentle movement. Positive affirmations. Preparation for birth.",
        },
        { focus: "Welcome", desc: "Peace, prayer, and readiness. The soul prepares to arrive." },
      ],
    },
    family: {
      eyebrow: "The Role of the Family",
      headline1: "Garbh Sanskar is not",
      headline2: "a mother\u2019s task alone.",
      intro:
        "The responsibility of bringing a child into the world does not rest solely with the mother. The husband's care, the family's harmony, and the home environment together shape the life of the unborn child. All family members should commit to creating a positive, supportive, stress-free environment throughout pregnancy.",
      familyQuote:
        "The child is not just the son or daughter of the parents \u2014 he or she belongs to the entire family. A new life is entering that will redefine all relationships.",
      roles: {
        husband: {
          role: "The Husband",
          desc: "Emotional security, understanding her fluctuations, standing by her always. His words, actions, and feelings create the child\u2019s first emotional world.",
        },
        family: {
          role: "The Family",
          desc: "Protect the mother from harsh words, mistreatment, and stress. Support her diet, physical needs, and mental well-being. A pregnant woman is in a sacred state.",
        },
        mother: {
          role: "The Mother",
          desc: "Follow a sattvic lifestyle. Avoid anger, jealousy, and arguments. Remain peaceful, kind-hearted, gentle in speech, and loving toward all.",
        },
      },
    },
    extraTopics: {
      postnatal: {
        tag: "After Birth",
        label: "Postnatal Care",
        desc: "Guidance for the first weeks and months after birth \u2014 continuing the Garbh Sanskar journey for the newborn.",
      },
      surya: {
        tag: "Daily Practice",
        label: "Surya Sadhana",
        desc: "Solar-based practices for mother and child \u2014 morning rituals, gratitude, and connection with natural rhythms.",
      },
      ayurveda: {
        tag: "Ancient Wisdom",
        label: "Ayurveda & Lifestyle",
        desc: "Classical dietary regimens, seasonal practices, and dosha-balancing guidance throughout pregnancy.",
      },
      dreamChild: {
        tag: "From the Book",
        label: "Dream-Child Chart",
        desc: "A unique tool from 'Garbh Sanskar Ka Vigyan' \u2014 helps couples consciously identify qualities they wish to nurture.",
      },
    },
    faq: {
      eyebrow: "Common Questions",
      headline: "Before you begin",
      subtitle: "Quick answers for those just discovering Garbh Sanskar.",
      items: [
        {
          q: "Is Garbh Sanskar a substitute for medical care?",
          a: "No. Garbh Sanskar is complementary to modern obstetric and medical care. Every pregnant woman should remain in regular consultation with her gynecologist and follow all recommended medical examinations, vaccinations, and treatments.",
        },
        {
          q: "When should we start?",
          a: "Ideally, 3 months before conception \u2014 during pre-conception preparation. The practices become increasingly important from the first day of pregnancy onwards. But it is never too late to begin.",
        },
        {
          q: "Is there scientific evidence for these practices?",
          a: "Yes, for several key elements. Epigenetics confirms that maternal emotions and lifestyle influence gene expression. Fetal auditory research confirms prenatal learning. fMRI studies validate the neurological effects of mantra chanting. The Foundation\u2019s book provides detailed scientific references for each practice.",
        },
        {
          q: "What about single mothers?",
          a: "In cases of single motherhood, maternal emotional well-being, psychosocial support, and stress-buffering play a decisive role. Evidence shows that positive maternal\u2013fetal bonding, emotional stability, and access to supportive networks contribute significantly to optimal fetal neurodevelopment, independent of family structure.",
        },
        {
          q: "Is Garbh Sanskar only for Hindu families?",
          a: "No. Garbh Sanskar principles are rooted in universal human wisdom. Jainism has its own rich tradition of conception and pregnancy rites. The core principles \u2014 conscious parenthood, positive environment, maternal well-being \u2014 are universal.",
        },
        {
          q: "What is the importance of Mantra during pregnancy?",
          a: "The word Mantra refers to a structured combination of sounds, syllables, and words used for spiritual practice, meditation, and mental concentration. Regular chanting involves rhythm, repetition, controlled breathing, attention, and concentration \u2014 features that may help create calmness, relaxation, and emotional stability. Studies on OM chanting and mantra meditation have explored their effects on relaxation, autonomic regulation, and mental well-being. Mantra should be regarded as a supportive practice and does not replace medical or psychological treatment when such treatment is required.",
        },
        {
          q: "Is there a role for astrology in planning conception?",
          a: "In some traditions, couples may consult an astrologer for guidance on auspicious timing (muhurat) for conception. This is not universally accepted or scientifically proven. Families who value astrology for cultural or spiritual reasons may include it as one aspect of their journey, but medical decisions should always be based on appropriate professional healthcare advice. Astrological consultation is optional and depends on personal belief and tradition.",
        },
        {
          q: "When and whom should I consult to plan Garbh Sanskar?",
          a: "You may consult a trained Garbh Sanskar counsellor for lifestyle, diet, and emotional guidance; an Ayurvedic physician for detox and herbal support; a prenatal yoga instructor; your obstetrician/gynecologist for medical preconception care; and if needed, a psychologist for emotional well-being. Before consulting any professional, check their qualifications and experience. Both partners should discuss their intentions together so the journey of conscious conception is shared.",
        },
      ],
    },
    stepsToFollow: {
      eyebrow: "When & How to Begin",
      headline1: "Six stages of the",
      headline2: "Garbh Sanskar journey.",
      intro:
        "Garbh Sanskar is a very simple yet profound process. Where you begin depends on where you are right now. Below are the six key stages — each with its own guidance and practices.",
      stagesLabel: "The Six Stages",
      stages: [
        {
          number: "I",
          label: "Pre-marriage: Self Preparation",
          sub: "Partner not yet chosen",
          desc: "Focus on physical, mental, emotional, and spiritual self-preparation. Adopt nutritious diet, yoga, meditation, and freedom from addictions. Ayurvedic detoxification may also be considered.",
          color: "primary",
        },
        {
          number: "II",
          label: "Partner Chosen, Marriage Not Fixed",
          sub: "Prospective couple identified",
          desc: "Begin aligning lifestyles. This is the ideal time for subtle practices of purification and readiness. A minimum 3\u20134 month gap between engagement and wedding is advised for preparation.",
          color: "secondary",
        },
        {
          number: "III",
          label: "Pre-Conception Counselling",
          sub: "Planning to conceive",
          desc: "Conception is a sacred spiritual process — a form of tapasya. Prepare for a minimum of 3 months through disciplined diet, yoga, no addictions, and Beej Shuddhi practices.",
          color: "gold",
        },
        {
          number: "IV",
          label: "Consciously Planning Conception",
          sub: "Decided to invite a child",
          desc: "Garbhadhana Sanskar — the sacred rite of conscious conception. Parents prepare through prayer, positive intention, and emotional harmony. Not by chance, but by choice.",
          color: "primary",
        },
        {
          number: "V",
          label: "Pregnancy Confirmed",
          sub: "Antenatal period",
          desc: "Garbh Sanskar becomes a daily way of life — music, mantras, affirmations, yoga, nutrition, and Garbh Samvad. Any month of pregnancy is a good time to begin. You are never late.",
          color: "secondary",
        },
        {
          number: "VI",
          label: "Post-Delivery Care",
          sub: "After the child is born",
          desc: "Continue the Garbh Sanskar environment for the newborn. Focus shifts to postnatal care of mother and holistic nurturing — sustaining the physical health and emotional bond.",
          color: "gold",
        },
      ],
      deepDiveLabel: "Essential Guidance at Each Stage",
      tabs: {
        premarital: {
          label: "Premarital Counselling",
          native: "\u0935\u093f\u0935\u093e\u0939 \u092a\u0942\u0930\u094d\u0935",
        },
        dreamChild: {
          label: "Dream-Child Resolve",
          native: "\u0938\u094d\u0935\u092a\u094d\u0928-\u0936\u093f\u0936\u0941",
        },
        astrology: {
          label: "Astrological Guidance",
          native: "\u091c\u094d\u092f\u094b\u0924\u093f\u0937",
        },
      },
      content: {
        premarital: {
          title: "A Medical & Garbh Sanskar Perspective",
          body: "Premarital counselling helps couples build a healthy, harmonious, and fulfilling life together. It incorporates medical, psychological, and spiritual dimensions to minimise future conflicts and ensure the well-being of future offspring.",
          medicalLabel: "Medical Tests to Consider",
          medical: [
            "Blood Group & Rh Factor compatibility",
            "Genetic screening for hereditary conditions (Thalassemia, Sickle Cell, etc.)",
            "Infectious disease screening — HIV, Hepatitis B & C, Rubella, TORCH",
            "Fertility & hormonal assessment — Thyroid, FSH, LH, Pelvic Ultrasound",
            "Vitamin D, B12, Iron, and general health evaluation",
            "PCOS screening for women due to its impact on fertility",
          ],
          gsLabel: "Garbh Sanskar Perspective",
          gs: "A child\u2019s health and personality begin to take shape even before conception. Therefore, it is essential for the couple to prepare physically, mentally, and spiritually. Seek a partner who is emotionally stable, spiritually inclined, and culturally rooted \u2014 these qualities promote the birth of a virtuous child and marital harmony.",
          note: "Medical decisions should always be based on professional healthcare advice. Astrological consultation is optional and based on personal belief and tradition.",
        },
        dreamChild: {
          title: "Your Dream-Child Resolution",
          body: "Before conception, consciously decide what kind of child you wish to bring into the world. True health extends across four dimensions: Physical, Mental & Emotional, Social, and Spiritual. This resolve \u2014 your Sankalpa \u2014 becomes the guiding intention for all Garbh Sanskar practices.",
          quote:
            "What you repeatedly see, think, and feel \u2014 you attract into your life. The dream you nurture today will illuminate your child\u2019s tomorrow.",
          dimensions: [
            {
              label: "Physically Healthy",
              desc: "Strong body, disease-free, high immunity and endurance.",
            },
            {
              label: "Mentally & Emotionally Balanced",
              desc: "Calm, confident, creative, free from anxiety.",
            },
            {
              label: "Socially Healthy",
              desc: "Respectful, compassionate, connected, responsible citizen.",
            },
            {
              label: "Spiritually Aware",
              desc: "Rooted in values, gratitude, inner peace, and purpose.",
            },
          ],
          practiceLabel: "How to Practice",
          practice:
            "Place an inspiring image of your dream child in your bedroom or meditation space. Each day, visualize your child with those qualities. Write a short paragraph describing your dream child \u2014 appearance, mind, heart, and future. This is your personal Sankalpa.",
          source:
            "From: Dream-Child Questionnaire \xb7 The Science of Garbh Sanskar \xb7 Dr. Anil Garg & Dr. Seema Garg",
        },
        astrology: {
          title: "Astrological Guidance in Garbh Sanskar",
          body: "Traditional Garbh Sanskar recommends astrological consultation at key stages \u2014 matching birth charts (Kundali), identifying auspicious marriage and conception dates (Shubh Muhurat), and suggesting remedial practices when needed.",
          points: [
            {
              label: "Kundali Matching",
              desc: "Birth chart compatibility helps assess likelihood of a harmonious married life and potential for a healthy child.",
            },
            {
              label: "Auspicious Timing (Muhurat)",
              desc: "Certain planetary configurations \u2014 strong positions of Venus and Moon \u2014 are considered beneficial for conception and the well-being of mother and child.",
            },
            {
              label: "Remedial Measures",
              desc: "If horoscopes are incompatible, rituals, mantra chanting, and gemstones may be prescribed to balance planetary influences.",
            },
          ],
          note: "Astrological consultation is optional and depends on personal belief and tradition. Medical decisions must always be based on appropriate professional healthcare advice.",
        },
      },
    },
    cta: {
      headline: "Ready to begin your Garbh Sanskar journey?",
      body: "Join free classes, ask Shree AI for a personalised path, or explore courses designed for couples, families, and educators.",
      freeClasses: "Join Free Classes",
      courses: "Explore Courses",
      guidance: "Get Guidance",
      note: "Core community education is always free \xb7 Available in Hindi and English",
    },
  },
};
