/**
 * Privacy Policy content in every supported language.
 * Rendered by `LegalDocumentBody` on the legal page and inside the "Important Notes" modal.
 */
import { Shield, Lock, Eye, FileText, Users, Globe, Bell, Mail } from "lucide-react";
import type { LegalSection } from "./types";

import type { LocalizedLegalContent } from './types';

export const privacyContent: LocalizedLegalContent = {
  en: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    subtitle: 'This policy explains how we collect, use, and protect your personal information.',
    sections: [
  {
    icon: FileText,
    title: "1. Introduction & Scope",
    subsections: [
      {
        heading: "1.1. About the Trust and the Platform",
        content: `Divya Santan Prakalp (the "Trust", "We", "Our", or "Us") is a public charitable trust registered under the laws of India, having its registered office at 2/1, R.S. Bhandari Marg, Veer Savarkar Chauraha (Janjeerwala), Indore (M.P.) 452001. The Trust owns, operates, and manages the website divyasantanfoundation.com (collectively, the "Platform").`,
      },
      {
        heading: "1.2. Purpose and Applicability",
        content: `We respect the privacy of individuals and are committed to protecting their personal data. This Privacy Policy ("Policy") explains how We collect, use, disclose, store, and otherwise process your Personal Data when you access, register on, log in to, or otherwise use the services offered on our Platform. This Policy applies to all natural persons who interact with the Platform, whether as visitors, registered users, donors, or beneficiaries (collectively, "You", "Your", or "Data Principal").`,
      },
      {
        heading: "1.3. Legal Framework & Compliance",
        content: `This Policy is formulated and regularly updated in accordance with:\n• The Digital Personal Data Protection Act, 2023 ("DPDP Act") of India and any rules, regulations, or notifications issued thereunder;\n• The Information Technology Act, 2000 (to the extent applicable); and\n• Applicable global and international data protection standards and best practices, where we cater to or interact with users residing outside of India.`,
      },
      {
        heading: "1.4. Consent",
        content: `By registering on, accessing, or using the Platform, you acknowledge that you have read and understood this Policy. To the extent required under applicable local laws (including the DPDP Act for Indian residents), you explicitly consent to the collection, storage, processing, and transfer of your Personal Data as described in this Policy. If you do not agree with the terms of this Policy, please do not access or use our Platform.`,
      },
      {
        heading: "1.5. Age Eligibility Restriction",
        content: `The Platform and its Services (including all Garbh Sanskar programs) are strictly intended for use by individuals who are 18 years of age or older and possess the legal capacity to form a binding contract. The Trust does not knowingly collect, solicit, or process Personal Data from children under the age of 18. If We learn that We have inadvertently collected Personal Data from a child under 18 without verifiable parental or guardian consent, We will take immediate steps to delete that information from our servers. If you believe a minor has provided us with data, please contact our Grievance Officer immediately.`,
      },
    ],
  },
  {
    icon: Eye,
    title: "2. Definitions",
    content: `For the purpose of this Privacy Policy, the following terms shall have the following meanings:

2.1. "Consent" means any freely given, specific, informed, unconditional, and unambiguous indication of the Data Principal's wishes by which they, by a statement or by a clear affirmative action, signify agreement to the processing of their Personal Data.

2.2. "Data Fiduciary" means any person who alone or in conjunction with other persons determines the purpose and means of processing of Personal Data. (For the purpose of international users, this term corresponds to a "Data Controller" under global frameworks like the GDPR). For this Policy, the Trust is the Data Fiduciary.

2.3. "Data Principal" means the individual to whom the Personal Data relates. (Note: While the DPDP Act defines a Data Principal to include the parent or lawful guardian of a child under 18 or a person with a disability, this Platform is strictly intended for individuals who are 18 years of age or older, as detailed in Section 1.5).

2.4. "Data Processor" means any person who processes Personal Data on behalf of the Data Fiduciary.

2.5. "Digital Personal Data" means Personal Data that is in digital form, or is initially collected in non-digital form and subsequently digitized.

2.6. "Personal Data" means any data about an individual who is identifiable by or in relation to such data.

2.7. "Personal Data Breach" means any unauthorized processing of Personal Data or accidental disclosure, acquisition, sharing, use, alteration, destruction, or loss of access to Personal Data that compromises the confidentiality, integrity, or availability of Personal Data.

2.8. "Platform" means the website divyasantanfoundation.com, any mobile applications, or digital interfaces owned and operated by the Trust.

2.9. "Processing" in relation to Personal Data means a wholly or partly automated operation or set of operations performed on digital Personal Data, including operations such as collection, recording, organization, structuring, storage, adaptation, retrieval, use, alignment or combination, indexing, sharing, disclosure by transmission, dissemination or otherwise making available, restriction, erasure, or destruction.

2.10. "Services" means the various facilities, features, functionalities, or charitable programs offered by the Trust through the Platform, including but not limited to registration, logging in, content access, donation facilities, or beneficiary programs.

2.11. "Sensitive Personal Data" or "Special Category Data" means Personal Data that requires a higher level of protection due to its sensitive nature, including:
• Health Data: Information relating to your pregnancy (e.g., gestational age, due date, physical or mental health indicators, dietary and lifestyle habits, or medical history shared during consultations).
• Financial Data: Bank account details, credit/debit card numbers, or other payment instrument details used for donations or paid services.`,
  },
  {
    icon: Users,
    title: "3. Information We Collect",
    content: `We collect only the Personal Data that is necessary to provide you with our Garbh Sanskar services, improve the Platform, and comply with our legal obligations.

3.1. Information You Provide Directly to Us

Account Registration & Profile Data: When you register or create a profile on our Platform, we collect your name, date of birth/time/place of birth, email address, mobile/telephone number, postal address, gender, and login credentials.

Garbh Sanskar & Health-Related Data (Sensitive Personal Data): To personalize your prenatal programs, we collect information regarding your pregnancy and health, which may include:
• Gestational age, expected due date (EDD), and pregnancy milestones.
• Lifestyle habits, dietary preferences, sleep patterns, and daily routines.
• Physical or mental wellness indicators, emotional health notes, and spiritual or wellness goals.
• Any medical history, symptoms, or reports you voluntarily share with our consultants or instructors during online sessions.
• Spouse/partner personal details including medical records.
• Any other data based upon necessity.

Financial & Transactional Data: If you purchase a paid program/course, our third-party payment gateways collect billing details, credit/debit card numbers, bank account details, UPI IDs, or other payment instrument details. (Note: The Trust does not store your full card numbers or banking passwords on its servers).

Communication Data: Any information you provide when you contact our customer support, fill out feedback forms, participate in surveys, share comments or testimonials, ask questions to experts, or interact with us via email or chat.

3.2. Information Collected Automatically

When you visit or use our Platform, We (and Our analytics partners) automatically collect certain technical data from your device, including:
• Log and Usage Data: IP addresses, browser type, operating system, internet service provider (ISP), pages viewed, time and date of access, time spent on specific pages, and other clickstream data.
• Device Data: Device model, unique device identifiers, and mobile network information.
• Cookies and Tracking Technologies: We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can manage your cookie preferences through your browser settings, though disabling them may affect certain functionalities of the Platform.

3.3. Information Collected from Third Parties

Social Media Logins: If you choose to log in or link your account via third-party services like Google, Apple, or Facebook, we receive authentication data from those platforms (e.g., your public profile name and email address) as permitted by your privacy settings on those platforms.`,
  },
  {
    icon: Lock,
    title: "4. How We Use Your Data",
    subsections: [
      {
        heading: "4.1. For Providing and Personalizing the Services",
        content: `• Account Management: To create, maintain, and securely administer your user profile and account.\n• Astrological & Spiritual Personalization: To calculate and deliver personalized Nakshatra, Muhurat, and Vedic astrological alignments relevant to your prenatal journey.\n• Garbh Sanskar Content Delivery: To curate and provide prenatal educational materials, lifestyle trackers, meditation schedules, and wellness content tailored to your current week or stage of pregnancy.\n• Consultations & Live Sessions: To facilitate online consultations, webinars, or interactive training sessions with our qualified experts and instructors.`,
      },
      {
        heading: "4.2. For Administrative and Transactional Functions",
        content: `• Payment Processing: To process invoices, issue receipts, and securely handle payments for premium courses or consultations through authorized third-party gateways.\n• Timeline Communications: To send you automated operational notifications, scheduling updates, technical alerts, and contextual milestones based on your specific pregnancy timeline.`,
      },
      {
        heading: "4.3. For Marketing and Engagement (Strictly Opt-In)",
        content: `• Promotional Communications: With your explicit, affirmative consent, we may send you newsletters, information about new Garbh Sanskar modules, community events, or specialized workshops.\n• Withdrawal: You can opt out of these marketing communications at any time by clicking the "Unsubscribe" link in our emails or updating your preferences in your account settings.`,
      },
      {
        heading: "4.4. For Technical Improvement and Security",
        content: `• Platform Optimization: To analyze usage trends, evaluate the effectiveness of our Garbh Sanskar modules, fix bugs, and improve the overall user experience and performance of the website.\n• Security & Fraud Prevention: To protect our Platform, users, and the Trust against cybersecurity threats, fraudulent transactions, unauthorized access, and other illegal activities.`,
      },
      {
        heading: "4.5. For Legal Compliance",
        content: `• Statutory Obligations: To fulfill our obligations under applicable Indian laws (such as tax laws for donations/payments) and international regulations.\n• Lawful Requests: To respond to valid legal processes, court orders, or requests from law enforcement or government authorities in accordance with the DPDP Act and other relevant statutes.`,
      },
    ],
  },
  {
    icon: Shield,
    title: "5. Legal Basis and Consent Management",
    subsections: [
      {
        heading: "5.1. Consent & Right to Withdraw",
        content: `For users in India, processing is based on your explicit Consent.\n• Withdrawal: You may withdraw your consent at any time by emailing us at santanprakalp@gmail.com.\n• Effect: Withdrawal does not affect the lawfulness of past processing, but it may restrict our ability to continue providing you with personalized Garbh Sanskar services.`,
      },
      {
        heading: "5.2. Third-Party Data (Spouse/Family)",
        content: `If you provide personal data belonging to a third party (such as your spouse's birth details for custom calculations), you confirm and warrant that you have obtained their explicit consent to share their data with us.`,
      },
      {
        heading: "5.3. International Legal Bases (GDPR & Global Standards)",
        content: `For international users, we also process your data under the following lawful grounds:\n• Contractual Necessity: To deliver the courses, consultations, or services you register or pay for.\n• Legitimate Interests: To secure our Platform, fix technical bugs, and improve user experience.\n• Legal Compliance: To meet tax, accounting, and statutory obligations.`,
      },
    ],
  },
  {
    icon: Users,
    title: "6. Data Sharing and Disclosure",
    content: `We do not sell, rent, or trade your Personal Data. We only share your information with trusted third parties in the limited circumstances described below, subject to strict confidentiality obligations.

6.1. Third-Party Service Providers (Data Processors)

We engage authorized third-party service providers to perform operational functions on our behalf. These entities act as our Data Processors and are strictly bound by data processing agreements and confidentiality obligations:
• Payment Gateways: To process secure domestic and international donations and course fees.
• Cloud Infrastructure & Hosting: To securely store data on encrypted cloud servers.
• Communication Providers: To deliver automated emails, SMS notifications, and pregnancy timeline reminders.
• Technical Integration Partners: Authorized API providers utilized to calculate accurate Panchang, Nakshatra, and astronomical data.

6.2. Legal and Regulatory Compliance

We may disclose your Personal Data to government authorities, law enforcement agencies, or courts if required to do so by applicable Indian or international laws, or in response to a valid court order, warrant, or regulatory request under the DPDP Act, 2023.

6.3. Restructuring or Institutional Transfer

In the event that the Trust undergoes any institutional restructuring, merger, amalgamation, or transfer of assets, your Personal Data may be transferred to the successor entity, subject to the condition that the receiving party agrees to provide an equivalent level of privacy protection as committed to in this Policy.`,
  },
  {
    icon: Lock,
    title: "7. Data Storage and Security",
    subsections: [
      {
        heading: "7.1. Storage and Location",
        content: `Your Personal Data is stored on secure servers located in India. Access to this data is strictly limited to authorized personnel on a strict "need-to-know" basis.`,
      },
      {
        heading: "7.2. Security Measures",
        content: `In compliance with the DPDP Act, 2023 and industry standards, we implement robust technical and organizational security practices to prevent unauthorized access, alteration, or disclosure:\n• Encryption: Data is encrypted both in transit (using SSL/TLS technology) and at rest.\n• Access Controls: Strict multi-factor authentication and role-based access for our team.\n• Monitoring: Regular security audits, vulnerability reviews, and system checks.`,
      },
      {
        heading: "7.3. Security Disclaimer",
        content: `While we employ industry-standard safeguards to protect your data, no method of digital transmission or electronic storage is 100% secure. Consequently, we cannot guarantee its absolute security.`,
      },
    ],
  },
  {
    icon: FileText,
    title: "8. Data Retention and Erasure",
    content: `8.1. Retention Period: We retain your Personal Data only for as long as necessary to fulfill the purposes outlined in this Policy, manage your active user account, or satisfy applicable legal, tax, or accounting requirements.

8.2. Data Erasure: In compliance with the DPDP Act, 2023, we will permanently delete or anonymize your data when the purpose for its collection has been fulfilled, when you withdraw your consent, or upon a formal account deletion request.

8.3. Statutory Obligations: We may retain specific transactional, financial, or dispute-related records for longer periods if required to comply with mandatory statutory timelines under Indian or international laws.`,
  },
  {
    icon: Shield,
    title: "9. Your Rights as a Data Principal",
    content: `Under applicable data protection laws (including India's DPDP Act, 2023 and global frameworks like the GDPR), you possess the following enforceable rights regarding your Personal Data:

• Right to Access: You can request a summary of the Personal Data we hold about you, the processing activities undertaken, and the identities of third parties with whom your data has been shared.

• Right to Correction & Updating: You have the right to correct, complete, or update any inaccurate or misleading personal information stored on our Platform.

• Right to Erasure: You can request the permanent deletion of your Personal Data when the purpose for its collection has been fulfilled, or once you choose to withdraw your consent.

• Right to Object: You have an absolute right to object to the use of your data for promotional or marketing purposes at any time, or to any data processing that you feel impacts your fundamental rights.

• Right to Grievance Redressal: You have the right to lodge a complaint regarding the processing of your Personal Data, any alleged violation of this Privacy Policy, or any service-related concern through the Trust's Grievance Redressal Policy, which is available on the Platform.

9.1. How to Exercise Your Rights

To exercise any of the rights listed above, please submit a written request via email to our dedicated data privacy desk at santanprakalp@gmail.com. We will verify your identity and respond to your statutory request within the timelines prescribed by applicable local law.`,
  },
  {
    icon: Bell,
    title: "10. Grievance Redressal",
    content: `The Trust has implemented a separate Grievance Redressal Policy, available on the Platform, which sets out the procedure for submission, investigation, and resolution of grievances relating to this Privacy Policy, the processing of Personal Data, and the exercise of Data Principal rights. All grievances shall be dealt with in accordance with the said Policy and applicable law.`,
    link: { label: "View Grievance Redressal Policy →", to: "/grievance-redressal" },
  },
  {
    icon: Eye,
    title: "11. Cookie and Tracking",
    content: `Please see our separate Cookie & Tracking Policy for details on cookies, analytics tools, and how to manage your tracking preferences.`,
  },
  {
    icon: Globe,
    title: "12. Cross-Border Data Transfers",
    subsections: [
      {
        heading: "12.1. Statutory Compliance",
        content: `In compliance with the DPDP Act, 2023, we may transfer or store your Personal Data on servers or cloud infrastructure located outside of India. We ensure that such transfers are never made to any country or territory restricted or blacklisted by the Central Government of India. Where data is processed outside India by our third-party vendors or processors, we mandate strict contractual safeguards to guarantee that the recipient protects your data with an equivalent level of security, confidentiality, and statutory compliance.`,
      },
      {
        heading: "12.2. International Safeguards",
        content: `For users accessing the Platform from jurisdictions with stricter cross-border rules (such as the EU/UK under the GDPR), we implement appropriate technical safeguards (including standard data processing agreements) to ensure your data remains protected when processed in India or other locations.`,
      },
    ],
  },
  {
    icon: Bell,
    title: "13. Changes to this Privacy Policy and Your Acceptance",
    content: `13.1. Policy Updates: We may update this Privacy Policy periodically. Material changes will be communicated via the Platform or email, with the "Last Updated" date revised accordingly.

13.2. Acceptance: Your continued use of the Platform will confirm Your understanding and acceptance of this Privacy Policy and any changes made to it from time to time.`,
  },
  {
    icon: Mail,
    title: "14. Contact Us",
    content: `For general feedback, institutional questions, comments, or technical requests regarding this Privacy Policy or our Services, you can reach our support team at santanprakalp@gmail.com.

Note: For legal complaints or statutory data access requests, please contact our Grievance Officer directly as described in Section 10 and our Grievance Redressal Policy.`,
  },
    ],
  },
  hi: {
    eyebrow: 'कानूनी',
    title: 'गोपनीयता नीति',
    subtitle: 'यह नीति बताती है कि हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र करते हैं, उसका उपयोग करते हैं और उसकी सुरक्षा कैसे करते हैं।',
    sections: [
  {
    icon: FileText,
    title: "1. परिचय एवं दायरा",
    subsections: [
      {
        heading: "1.1. ट्रस्ट और प्लेटफ़ॉर्म के बारे में",
        content: `दिव्य संतान प्रकल्प ("ट्रस्ट", "हम", "हमारा", या "हमें") भारत के कानूनों के अंतर्गत पंजीकृत एक सार्वजनिक धर्मार्थ न्यास है, जिसका पंजीकरण संख्या [पंजीकरण संख्या डालें] है और पंजीकृत कार्यालय [पंजीकृत पता डालें] पर स्थित है। ट्रस्ट वेबसाइट [वेबसाइट URL / डोमेन नाम डालें] (सामूहिक रूप से "प्लेटफ़ॉर्म") का स्वामित्व, संचालन और प्रबंधन करता है।`,
      },
      {
        heading: "1.2. उद्देश्य और प्रयोज्यता",
        content: `हम व्यक्तियों की गोपनीयता का सम्मान करते हैं और उनके व्यक्तिगत डेटा की सुरक्षा के प्रति प्रतिबद्ध हैं। यह गोपनीयता नीति ("नीति") बताती है कि हम आपके व्यक्तिगत डेटा को कैसे एकत्र, उपयोग, प्रकट, संग्रहीत और अन्यथा संसाधित करते हैं। यह नीति सभी प्राकृतिक व्यक्तियों पर लागू होती है जो प्लेटफ़ॉर्म के साथ इंटरैक्ट करते हैं, चाहे वे आगंतुक, पंजीकृत उपयोगकर्ता, दानकर्ता, या लाभार्थी हों।`,
      },
      {
        heading: "1.3. कानूनी ढांचा और अनुपालन",
        content: `यह नीति निम्नलिखित के अनुसार तैयार और नियमित रूप से अद्यतन की जाती है:\n• डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 ("DPDP अधिनियम") और इसके अंतर्गत जारी नियम;\n• सूचना प्रौद्योगिकी अधिनियम, 2000 (जहाँ तक लागू); और\n• लागू वैश्विक और अंतर्राष्ट्रीय डेटा संरक्षण मानक।`,
      },
      {
        heading: "1.4. सहमति",
        content: `प्लेटफ़ॉर्म पर पंजीकरण करके, उसे एक्सेस करके या उपयोग करके, आप स्वीकार करते हैं कि आपने इस नीति को पढ़ और समझ लिया है। यदि आप इस नीति की शर्तों से सहमत नहीं हैं, तो कृपया हमारे प्लेटफ़ॉर्म का उपयोग न करें।`,
      },
      {
        heading: "1.5. आयु पात्रता प्रतिबंध",
        content: `प्लेटफ़ॉर्म और इसकी सेवाएं (सभी गर्भ संस्कार कार्यक्रमों सहित) केवल 18 वर्ष या उससे अधिक आयु के व्यक्तियों के लिए हैं। ट्रस्ट 18 वर्ष से कम उम्र के बच्चों से व्यक्तिगत डेटा एकत्र नहीं करता है। यदि आपको लगता है कि किसी नाबालिग ने हमें डेटा प्रदान किया है, तो कृपया तुरंत हमारे शिकायत अधिकारी से संपर्क करें।`,
      },
    ],
  },
  {
    icon: Eye,
    title: "2. परिभाषाएं",
    content: `इस गोपनीयता नीति के प्रयोजन के लिए, निम्नलिखित शब्दों के निम्नलिखित अर्थ होंगे:

2.1. "सहमति" का अर्थ है डेटा प्रमुख की इच्छाओं का कोई भी स्वतंत्र रूप से दिया गया, विशिष्ट, सूचित, बिना शर्त और स्पष्ट संकेत।

2.2. "डेटा न्यासी" का अर्थ है कोई भी व्यक्ति जो अकेले या अन्य व्यक्तियों के साथ मिलकर व्यक्तिगत डेटा के प्रसंस्करण के उद्देश्य और साधन निर्धारित करता है। इस नीति के लिए ट्रस्ट डेटा न्यासी है।

2.3. "डेटा प्रमुख" का अर्थ है वह व्यक्ति जिससे व्यक्तिगत डेटा संबंधित है।

2.4. "डेटा प्रोसेसर" का अर्थ है कोई भी व्यक्ति जो डेटा न्यासी की ओर से व्यक्तिगत डेटा को संसाधित करता है।

2.5. "डिजिटल व्यक्तिगत डेटा" का अर्थ है डिजिटल रूप में व्यक्तिगत डेटा।

2.6. "व्यक्तिगत डेटा" का अर्थ है किसी व्यक्ति के बारे में कोई भी डेटा जो उस डेटा से पहचाना जा सकता है।

2.7. "व्यक्तिगत डेटा उल्लंघन" का अर्थ है व्यक्तिगत डेटा की कोई भी अनधिकृत प्रसंस्करण या आकस्मिक प्रकटीकरण।

2.8. "प्लेटफ़ॉर्म" का अर्थ है वेबसाइट [वेबसाइट URL / डोमेन नाम डालें], कोई भी मोबाइल एप्लिकेशन, या ट्रस्ट द्वारा स्वामित्व और संचालित डिजिटल इंटरफेस।

2.9. "संसाधन" का अर्थ है डिजिटल व्यक्तिगत डेटा पर की जाने वाली कोई भी स्वचालित कार्रवाई, जिसमें संग्रह, भंडारण, उपयोग, प्रकटीकरण, साझाकरण, मिटाना आदि शामिल हैं।

2.10. "सेवाएं" का अर्थ है ट्रस्ट द्वारा प्लेटफ़ॉर्म के माध्यम से प्रदान की जाने वाली विभिन्न सुविधाएं, जिनमें पंजीकरण, सामग्री पहुँच, दान सुविधाएं, या लाभार्थी कार्यक्रम शामिल हैं।

2.11. "संवेदनशील व्यक्तिगत डेटा" में शामिल हैं:
• स्वास्थ्य डेटा: आपकी गर्भावस्था से संबंधित जानकारी।
• वित्तीय डेटा: बैंक खाता विवरण, क्रेडिट/डेबिट कार्ड नंबर।`,
  },
  {
    icon: Users,
    title: "3. हम कौन सी जानकारी एकत्र करते हैं",
    content: `हम केवल वही व्यक्तिगत डेटा एकत्र करते हैं जो हमारी गर्भ संस्कार सेवाएं प्रदान करने, प्लेटफ़ॉर्म में सुधार करने और हमारी कानूनी बाध्यताओं का पालन करने के लिए आवश्यक है।

3.1. आपके द्वारा सीधे प्रदान की गई जानकारी

खाता पंजीकरण और प्रोफ़ाइल डेटा: आपका नाम, जन्म तिथि/समय/स्थान, ईमेल पता, मोबाइल/टेलीफोन नंबर, डाक पता, लिंग और लॉगिन क्रेडेंशियल।

गर्भ संस्कार और स्वास्थ्य-संबंधी डेटा: गर्भकालीन आयु, अपेक्षित नियत तिथि, जीवनशैली की आदतें, आहार प्राथमिकताएं, नींद के पैटर्न, शारीरिक या मानसिक स्वास्थ्य संकेतक, पति/पत्नी के व्यक्तिगत विवरण सहित चिकित्सा रिकॉर्ड।

वित्तीय और लेनदेन डेटा: यदि आप कोई सशुल्क कार्यक्रम/पाठ्यक्रम खरीदते हैं, तो हमारे तृतीय-पक्ष भुगतान गेटवे बिलिंग विवरण एकत्र करते हैं। (नोट: ट्रस्ट आपके पूर्ण कार्ड नंबर या बैंकिंग पासवर्ड संग्रहीत नहीं करता।)

संचार डेटा: जब आप हमारे ग्राहक सहायता से संपर्क करते हैं, फ़ीडबैक फॉर्म भरते हैं, सर्वेक्षण में भाग लेते हैं, या ईमेल या चैट के माध्यम से हमसे इंटरैक्ट करते हैं तो आपके द्वारा प्रदान की गई कोई भी जानकारी।

3.2. स्वचालित रूप से एकत्र की गई जानकारी

• लॉग और उपयोग डेटा: IP पते, ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, देखे गए पेज, एक्सेस का समय और तिथि।
• डिवाइस डेटा: डिवाइस मॉडल, अद्वितीय डिवाइस पहचानकर्ता।
• कुकीज़ और ट्रैकिंग तकनीकें: आपके ब्राउज़िंग अनुभव को बेहतर बनाने के लिए।

3.3. तृतीय पक्षों से एकत्र की गई जानकारी

सोशल मीडिया लॉगिन: यदि आप Google, Apple, या Facebook जैसी तृतीय-पक्ष सेवाओं के माध्यम से लॉग इन करते हैं, तो हम उन प्लेटफ़ॉर्म से प्रमाणीकरण डेटा प्राप्त करते हैं।`,
  },
  {
    icon: Lock,
    title: "4. हम आपके डेटा का उपयोग कैसे करते हैं",
    subsections: [
      {
        heading: "4.1. सेवाएं प्रदान करने और वैयक्तिकृत करने के लिए",
        content: `• खाता प्रबंधन: आपके उपयोगकर्ता प्रोफ़ाइल और खाते को सुरक्षित रूप से बनाना और प्रबंधित करना।\n• आध्यात्मिक वैयक्तिकरण: व्यक्तिगत नक्षत्र, मुहूर्त और वैदिक ज्योतिषीय संरेखण प्रदान करना।\n• गर्भ संस्कार सामग्री वितरण: आपकी गर्भावस्था के चरण के अनुसार सामग्री।\n• परामर्श और लाइव सत्र: हमारे विशेषज्ञों के साथ ऑनलाइन परामर्श।`,
      },
      {
        heading: "4.2. प्रशासनिक और लेनदेन कार्यों के लिए",
        content: `• भुगतान प्रसंस्करण: प्रीमियम पाठ्यक्रमों या परामर्श के लिए भुगतान संभालना।\n• टाइमलाइन संचार: आपकी गर्भावस्था टाइमलाइन के आधार पर स्वचालित सूचनाएं भेजना।`,
      },
      {
        heading: "4.3. मार्केटिंग और सहभागिता के लिए (केवल ऑप्ट-इन)",
        content: `• प्रचार संचार: आपकी स्पष्ट सहमति के साथ, हम न्यूज़लेटर, नए गर्भ संस्कार मॉड्यूल के बारे में जानकारी भेज सकते हैं।\n• वापसी: आप किसी भी समय हमारे ईमेल में "अनसब्सक्राइब" लिंक पर क्लिक करके ऑप्ट आउट कर सकते हैं।`,
      },
      {
        heading: "4.4. तकनीकी सुधार और सुरक्षा के लिए",
        content: `• प्लेटफ़ॉर्म अनुकूलन: उपयोग रुझानों का विश्लेषण करना और समग्र उपयोगकर्ता अनुभव में सुधार करना।\n• सुरक्षा और धोखाधड़ी रोकथाम: साइबर सुरक्षा खतरों से सुरक्षा।`,
      },
      {
        heading: "4.5. कानूनी अनुपालन के लिए",
        content: `• वैधानिक दायित्व: लागू भारतीय कानूनों के अंतर्गत हमारे दायित्वों को पूरा करना।\n• वैध अनुरोध: कानून प्रवर्तन या सरकारी प्राधिकरणों से वैध कानूनी प्रक्रियाओं का जवाब देना।`,
      },
    ],
  },
  {
    icon: Shield,
    title: "5. कानूनी आधार और सहमति प्रबंधन",
    subsections: [
      {
        heading: "5.1. सहमति और वापस लेने का अधिकार",
        content: `भारत में उपयोगकर्ताओं के लिए, प्रसंस्करण आपकी स्पष्ट सहमति पर आधारित है।\n• वापसी: आप किसी भी समय [ईमेल पता डालें] पर ईमेल करके अपनी सहमति वापस ले सकते हैं।\n• प्रभाव: वापसी पिछले प्रसंस्करण की वैधता को प्रभावित नहीं करती, लेकिन यह हमारी व्यक्तिगत सेवाएं जारी रखने की क्षमता को सीमित कर सकती है।`,
      },
      {
        heading: "5.2. तृतीय-पक्ष डेटा (पति/पत्नी/परिवार)",
        content: `यदि आप किसी तृतीय पक्ष का व्यक्तिगत डेटा प्रदान करते हैं, तो आप पुष्टि करते हैं कि आपने उनकी स्पष्ट सहमति प्राप्त की है।`,
      },
      {
        heading: "5.3. अंतर्राष्ट्रीय कानूनी आधार (GDPR और वैश्विक मानक)",
        content: `अंतर्राष्ट्रीय उपयोगकर्ताओं के लिए, हम निम्नलिखित के अंतर्गत भी डेटा संसाधित करते हैं:\n• संविदात्मक आवश्यकता: आपके द्वारा पंजीकृत या भुगतान किए गए पाठ्यक्रम या परामर्श प्रदान करने के लिए।\n• वैध हित: हमारे प्लेटफ़ॉर्म को सुरक्षित करने और उपयोगकर्ता अनुभव में सुधार के लिए।\n• कानूनी अनुपालन: कर और लेखांकन दायित्वों को पूरा करने के लिए।`,
      },
    ],
  },
  {
    icon: Users,
    title: "6. डेटा साझाकरण और प्रकटीकरण",
    content: `हम आपका व्यक्तिगत डेटा बेचते, किराए पर देते या व्यापार नहीं करते। हम केवल नीचे वर्णित सीमित परिस्थितियों में विश्वसनीय तृतीय पक्षों के साथ आपकी जानकारी साझा करते हैं।

6.1. तृतीय-पक्ष सेवा प्रदाता (डेटा प्रोसेसर)

• भुगतान गेटवे: घरेलू और अंतर्राष्ट्रीय दान और पाठ्यक्रम शुल्क प्रसंस्करण के लिए।
• क्लाउड इन्फ्रास्ट्रक्चर और होस्टिंग: एन्क्रिप्टेड क्लाउड सर्वर पर डेटा संग्रहीत करने के लिए।
• संचार प्रदाता: स्वचालित ईमेल, SMS सूचनाएं और गर्भावस्था टाइमलाइन अनुस्मारक प्रदान करने के लिए।
• तकनीकी एकीकरण भागीदार: पंचांग, नक्षत्र और खगोलीय डेटा की गणना के लिए।

6.2. कानूनी और नियामक अनुपालन

हम DPDP अधिनियम 2023 के अंतर्गत किसी वैध न्यायालय आदेश, वारंट, या नियामक अनुरोध के जवाब में आपका व्यक्तिगत डेटा सरकारी प्राधिकरणों को प्रकट कर सकते हैं।

6.3. पुनर्गठन या संस्थागत स्थानांतरण

ट्रस्ट के किसी भी पुनर्गठन, विलय, या संपत्ति हस्तांतरण की स्थिति में, आपका व्यक्तिगत डेटा उत्तराधिकारी इकाई को स्थानांतरित किया जा सकता है।`,
  },
  {
    icon: Lock,
    title: "7. डेटा भंडारण और सुरक्षा",
    subsections: [
      {
        heading: "7.1. भंडारण और स्थान",
        content: `आपका व्यक्तिगत डेटा [देश/क्षेत्र डालें] में स्थित सुरक्षित सर्वर पर संग्रहीत है। इस डेटा तक पहुँच "आवश्यकता-के-आधार" पर अधिकृत कर्मियों तक सीमित है।`,
      },
      {
        heading: "7.2. सुरक्षा उपाय",
        content: `DPDP अधिनियम 2023 और उद्योग मानकों के अनुपालन में, हम मजबूत तकनीकी और संगठनात्मक सुरक्षा प्रथाएं लागू करते हैं:\n• एन्क्रिप्शन: डेटा ट्रांज़िट में (SSL/TLS) और आराम पर एन्क्रिप्टेड है।\n• एक्सेस नियंत्रण: सख्त बहु-कारक प्रमाणीकरण।\n• निगरानी: नियमित सुरक्षा ऑडिट और भेद्यता समीक्षाएं।`,
      },
      {
        heading: "7.3. सुरक्षा अस्वीकरण",
        content: `हालांकि हम उद्योग-मानक सुरक्षा उपाय अपनाते हैं, डिजिटल ट्रांसमिशन का कोई भी तरीका 100% सुरक्षित नहीं है।`,
      },
    ],
  },
  {
    icon: FileText,
    title: "8. डेटा प्रतिधारण और मिटाना",
    content: `8.1. प्रतिधारण अवधि: हम आपका व्यक्तिगत डेटा केवल उतने समय के लिए रखते हैं जितना इस नीति में उल्लिखित उद्देश्यों को पूरा करने के लिए आवश्यक है।

8.2. डेटा मिटाना: DPDP अधिनियम 2023 के अनुपालन में, हम आपके डेटा को स्थायी रूप से हटा देंगे जब संग्रह का उद्देश्य पूरा हो जाएगा या जब आप अपनी सहमति वापस लेंगे।

8.3. वैधानिक दायित्व: हम कुछ विशिष्ट लेनदेन और वित्तीय रिकॉर्ड लंबी अवधि के लिए रख सकते हैं यदि भारतीय या अंतर्राष्ट्रीय कानूनों के अंतर्गत आवश्यक हो।`,
  },
  {
    icon: Shield,
    title: "9. डेटा प्रमुख के रूप में आपके अधिकार",
    content: `लागू डेटा संरक्षण कानूनों (भारत के DPDP अधिनियम 2023 और GDPR जैसे वैश्विक ढांचे सहित) के अंतर्गत, आपके पास निम्नलिखित प्रवर्तनीय अधिकार हैं:

• पहुँच का अधिकार: आप हमारे द्वारा रखे गए व्यक्तिगत डेटा का सारांश मांग सकते हैं।

• सुधार और अद्यतन का अधिकार: आपके पास किसी भी गलत जानकारी को सुधारने का अधिकार है।

• मिटाने का अधिकार: आप अपने व्यक्तिगत डेटा के स्थायी विलोपन का अनुरोध कर सकते हैं।

• आपत्ति का अधिकार: आपको प्रचार या मार्केटिंग उद्देश्यों के लिए अपने डेटा के उपयोग पर आपत्ति करने का पूर्ण अधिकार है।

• शिकायत निवारण का अधिकार: आपको इस गोपनीयता नीति के किसी भी कथित उल्लंघन के बारे में शिकायत दर्ज करने का अधिकार है।

9.1. अपने अधिकारों का प्रयोग कैसे करें

किसी भी सूचीबद्ध अधिकार का प्रयोग करने के लिए, [ईमेल पता डालें] पर हमारे डेटा गोपनीयता डेस्क पर एक लिखित अनुरोध सबमिट करें।`,
  },
  {
    icon: Bell,
    title: "10. शिकायत निवारण",
    content: `ट्रस्ट ने एक अलग शिकायत निवारण नीति लागू की है, जो प्लेटफ़ॉर्म पर उपलब्ध है, जो इस गोपनीयता नीति, व्यक्तिगत डेटा के प्रसंस्करण और डेटा प्रमुख अधिकारों के प्रयोग से संबंधित शिकायतों के सबमिशन, जांच और समाधान की प्रक्रिया निर्धारित करती है।`,
    link: { label: "शिकायत निवारण नीति देखें →", to: "/grievance-redressal" },
  },
  {
    icon: Eye,
    title: "11. कुकी और ट्रैकिंग",
    content: `कुकीज़, विश्लेषण उपकरणों और अपनी ट्रैकिंग प्राथमिकताओं को प्रबंधित करने के बारे में विवरण के लिए हमारी अलग कुकी और ट्रैकिंग नीति देखें।`,
  },
  {
    icon: Globe,
    title: "12. सीमा-पार डेटा स्थानांतरण",
    subsections: [
      {
        heading: "12.1. वैधानिक अनुपालन",
        content: `DPDP अधिनियम 2023 के अनुपालन में, हम आपके व्यक्तिगत डेटा को भारत के बाहर स्थित सर्वर या क्लाउड इन्फ्रास्ट्रक्चर पर स्थानांतरित या संग्रहीत कर सकते हैं। हम सुनिश्चित करते हैं कि ऐसे स्थानांतरण कभी भी केंद्र सरकार द्वारा प्रतिबंधित किसी भी देश को नहीं किए जाते।`,
      },
      {
        heading: "12.2. अंतर्राष्ट्रीय सुरक्षा उपाय",
        content: `EU/UK जैसे कड़े सीमा-पार नियमों वाले क्षेत्राधिकारों से प्लेटफ़ॉर्म एक्सेस करने वाले उपयोगकर्ताओं के लिए, हम उचित तकनीकी सुरक्षा उपाय लागू करते हैं।`,
      },
    ],
  },
  {
    icon: Bell,
    title: "13. इस गोपनीयता नीति में बदलाव और आपकी स्वीकृति",
    content: `13.1. नीति अपडेट: हम इस गोपनीयता नीति को समय-समय पर अपडेट कर सकते हैं। महत्वपूर्ण बदलाव प्लेटफ़ॉर्म या ईमेल के माध्यम से सूचित किए जाएंगे।

13.2. स्वीकृति: प्लेटफ़ॉर्म का आपका निरंतर उपयोग इस गोपनीयता नीति और उसमें किए गए किसी भी बदलाव की आपकी समझ और स्वीकृति की पुष्टि करेगा।`,
  },
  {
    icon: Mail,
    title: "14. हमसे संपर्क करें",
    content: `इस गोपनीयता नीति या हमारी सेवाओं के बारे में सामान्य प्रतिक्रिया, संस्थागत प्रश्न, टिप्पणी, या तकनीकी अनुरोध के लिए, आप हमारी सहायता टीम से [सामान्य सहायता ईमेल डालें] पर संपर्क कर सकते हैं।

नोट: कानूनी शिकायत या वैधानिक डेटा एक्सेस अनुरोध के लिए, कृपया धारा 10 और हमारी शिकायत निवारण नीति में वर्णित अनुसार हमारे शिकायत अधिकारी से सीधे संपर्क करें।`,
  },
]
  }
};