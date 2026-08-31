/**
 * Grievance Redressal Policy content in every supported language.
 */
import {
  ShieldAlert,
  UserCheck,
  FileSearch,
  Clock,
  ArrowUpCircle,
  Lock,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import type { LegalSection } from "./types";

import type { LocalizedLegalContent } from './types';

export const grievanceContent: LocalizedLegalContent = {
  en: {
    eyebrow: 'Legal',
    title: 'Grievance Redressal Policy',
    subtitle: 'Our policy and procedures for addressing your concerns and grievances.',
    sections: [
  {
    icon: UserCheck,
    title: "1. Grievance Officer",
    content: `The Trust has designated a Grievance Officer in accordance with applicable laws, including Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, to receive, examine, and facilitate the resolution of grievances arising under this Policy. The Grievance Officer shall act as the primary point of contact for all grievances and shall endeavour to ensure that every grievance is addressed in a fair, impartial, confidential, and timely manner in accordance with applicable law and the Trust's internal policies.`,
    listItems: [
      "Name: [●]",
      "Designation: Grievance Officer",
      "Registered Address: [●]",
      "Email: [●]",
      "Contact Number: [●]",
    ],
  },
  {
    icon: FileSearch,
    title: "2. What You Can Report",
    content: `You may submit a grievance under this Policy in relation to any matter arising out of or connected with the Trust, the Platform, the Services, or the Trust's policies, including, without limitation, the following:`,
    listItems: [
      "2.1. Any content available on the Platform that is alleged to be unlawful, misleading, defamatory, obscene, infringing, or otherwise in violation of applicable law or the rights of any person.",
      "2.2. Any content or activity that impersonates an individual, infringes intellectual property rights, or discloses Personal Data or other confidential information without lawful authority or consent.",
      "2.3. Any concern relating to the collection, processing, storage, retention, sharing, disclosure, security, or protection of Personal Data or Sensitive Personal Data, or the exercise of rights available under applicable data protection laws.",
      "2.4. Any alleged violation of the Trust's Privacy Policy, Terms of Service, Code of Conduct, or any other policy, guideline, or standard published by the Trust from time to time.",
      "2.5. Any grievance relating to the provision of the Services, including consultations, programmes, payments, refunds, subscriptions, cancellations, technical issues, or the quality or availability of the Platform.",
      "2.6. Any complaint relating to the unauthorised use of a User's name, image, likeness, testimonial, or other personal information.",
      "2.7. Any other matter connected with the Trust's operations, activities, or the use of the Platform or the Services.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "3. How to File a Complaint",
    content: `You may submit a complaint through any of the following channels:`,
    listItems: [
      "Email: Send your complaint to the Grievance Officer at santanprakalp@gmail.com, including your name and contact details, a description of the grievance (with relevant URLs/screenshots), and any supporting documents.",
      "Written Complaint: Submit a written complaint addressed to the Grievance Officer at the registered office of the Trust.",
      "Online Form: Use the grievance reporting mechanism or contact form made available on the Platform, where applicable.",
    ],
  },
  {
    icon: Clock,
    title: "4. Acknowledgment and Resolution Timelines",
    content: `The Trust shall endeavour to process all grievances in a fair, impartial, and timely manner:`,
    listItems: [
      "4.1. Upon receipt of a grievance, the Trust shall acknowledge the same within the timelines prescribed under applicable law.",
      "4.2. The Trust shall investigate the grievance and communicate its decision or proposed resolution to the User within the timelines prescribed under applicable law or within such extended period as may be reasonably required, where additional information or investigation is necessary.",
      "4.3. The Trust may seek additional information, documents, or clarifications from the User for the purpose of investigating the grievance. The resolution timeline shall be computed after receipt of such information, where applicable.",
      "4.4. Where a grievance relates to content or matters requiring expedited action under applicable law, the Trust shall take such action within the timelines prescribed under the relevant legal or regulatory framework.",
    ],
  },
  {
    icon: ArrowUpCircle,
    title: "5. Escalation and Other Remedies",
    content: `5.1. If you are not satisfied with the resolution of a grievance, you may escalate the matter to the following designated authority:`,
    listItems: [
      "Name: [●]",
      "Designation: [●]",
      "Email: [●]",
      "5.2. Nothing contained in this Policy shall prejudice or restrict a User's right to seek any remedy available under applicable law, including approaching the appropriate statutory authority, tribunal, or court having jurisdiction.",
    ],
  },
  {
    icon: Lock,
    title: "6. Confidentiality",
    content: `The Trust shall treat all grievances and the information provided in connection therewith as confidential and shall use or disclose such information only to the extent necessary for investigating and resolving the grievance, complying with applicable law, or protecting the rights and interests of the Trust or any other person.`,
  },
  {
    icon: AlertTriangle,
    title: "7. Misuse of the Grievance Mechanism",
    content: `You are expected to submit grievances in good faith and with accurate information. The Trust reserves the right to reject or discontinue the processing of any grievance that is frivolous, vexatious, malicious, fraudulent, or otherwise constitutes an abuse of the grievance redressal mechanism, without prejudice to any other rights or remedies available to the Trust under applicable law.`,
  },
    ],
  },
  hi: {
    eyebrow: 'कानूनी',
    title: 'शिकायत निवारण नीति',
    subtitle: 'आपकी चिंताओं और शिकायतों को दूर करने के लिए हमारी नीति और प्रक्रियाएं।',
    sections: [
  {
    icon: UserCheck,
    title: "1. शिकायत अधिकारी",
    content: `ट्रस्ट ने सूचना प्रौद्योगिकी (मध्यस्थ दिशानिर्देश और डिजिटल मीडिया आचार संहिता) नियम, 2021 के नियम 3(2) सहित लागू कानूनों के अनुसार एक शिकायत अधिकारी नियुक्त किया है। शिकायत अधिकारी सभी शिकायतों के लिए संपर्क का प्राथमिक बिंदु होगा।`,
    listItems: [
      "नाम: [•]",
      "पदनाम: शिकायत अधिकारी",
      "पंजीकृत पता: [•]",
      "ईमेल: [•]",
      "संपर्क नंबर: [•]",
    ],
  },
  {
    icon: FileSearch,
    title: "2. आप क्या रिपोर्ट कर सकते हैं",
    content: `आप इस नीति के अंतर्गत ट्रस्ट, प्लेटफ़ॉर्म, सेवाओं, या ट्रस्ट की नीतियों से संबंधित किसी भी मामले में शिकायत दर्ज कर सकते हैं, जिनमें शामिल हैं:`,
    listItems: [
      "2.1. प्लेटफ़ॉर्म पर उपलब्ध कोई भी सामग्री जो अवैध, भ्रामक, मानहानिकारक, अश्लील, उल्लंघनकारी, या लागू कानून का उल्लंघन करने वाली होने का आरोप हो।",
      "2.2. कोई भी सामग्री या गतिविधि जो किसी व्यक्ति का अनुकरण करती हो, बौद्धिक संपत्ति अधिकारों का उल्लंघन करती हो, या सहमति के बिना व्यक्तिगत डेटा उजागर करती हो।",
      "2.3. व्यक्तिगत डेटा के संग्रह, प्रसंस्करण, भंडारण, संधारण, साझाकरण, प्रकटीकरण, सुरक्षा, या संवेदनशील डेटा के संरक्षण से संबंधित कोई भी चिंता।",
      "2.4. ट्रस्ट की गोपनीयता नीति, सेवा की शर्तें, आचार संहिता, या किसी अन्य नीति, दिशानिर्देश या मानक का किसी भी कथित उल्लंघन।",
      "2.5. सेवाओं से संबंधित कोई भी शिकायत, जिसमें भुगतान, धनवापसी, सदस्यता, रद्दीकरण, तकनीकी समस्याएं, या प्लेटफ़ॉर्म की गुणवत्ता शामिल हैं।",
      "2.6. किसी उपयोगकर्ता के नाम, छवि, प्रतिरूप, अनुशंसा, या अन्य व्यक्तिगत जानकारी के अनधिकृत उपयोग से संबंधित कोई भी शिकायत।",
      "2.7. ट्रस्ट के संचालन, गतिविधियों, या प्लेटफ़ॉर्म के उपयोग से जुड़ा कोई भी अन्य मामला।",
    ],
  },
  {
    icon: ShieldAlert,
    title: "3. शिकायत कैसे दर्ज करें",
    content: `आप निम्नलिखित माध्यमों से शिकायत दर्ज कर सकते हैं:`,
    listItems: [
      "ईमेल: [ईमेल डालें] पर शिकायत अधिकारी को अपने नाम, संपर्क विवरण, शिकायत का विवरण और सहायक दस्तावेज़ों सहित ईमेल भेजें।",
      "लिखित शिकायत: ट्रस्ट के पंजीकृत कार्यालय के पते पर शिकायत अधिकारी को संबोधित लिखित शिकायत भेजें।",
      "ऑनलाइन फॉर्म: जहाँ लागू हो, प्लेटय़र पर उपलब्ध शिकायत रिपोर्टिंग तंत्र या संपर्क फ़ॉर्म का उपयोग करें।",
    ],
  },
  {
    icon: Clock,
    title: "4. स्वीकृति और समाधान समयसीमा",
    content: `ट्रस्ट सभी शिकायतों को न्यायसंगत, निष्पक्ष, और समयमै तरीके से निपटाने का प्रयास करेगा:`,
    listItems: [
      "4.1. शिकायत मिलने पर, ट्रस्ट लागू कानून के अंतर्गत निर्धारित समयसीमा के भीतर उसे स्वीकार करेगा।",
      "4.2. ट्रस्ट शिकायत की जांच करेगा और लागू कानून के अंतर्गत निर्धारित समयसीमा के कंदर उपयोगकर्ता को अपना निर्णय सूचित करेगा।",
      "4.3. ट्रस्ट शिकायत की जांच के उद्देश्य से उपयोगकर्ता से अतिरिक्त जानकारी, दस्तावेज़, या स्पष्टीकरण मांग सकता है।",
      "4.4. जहाँ शिकायत त्वरित कार्रवाई अपेक्षा करने वाले मामलों से संबंधित हो, ट्रस्ट लागू कानूनी ढांचे के अंतर्गत निर्धारित समयसीमा के भीतर कार्रवाई करेगा।",
    ],
  },
  {
    icon: ArrowUpCircle,
    title: "5. बढ़ाना और अन्य उपचार",
    content: `5.1. यदि आप शिकायत के समाधान से संतुष्ट नहीं हैं, तो आप निम्नलिखित नामित प्राधिकरण को मामला बढ़ा सकते हैं:`,
    listItems: [
      "नाम: [•]",
      "पदनाम: [•]",
      "ईमेल: [•]",
      "5.2. इस नीति में कुछ भी उपयोगकर्ता के अधिकार को सीमित नहीं करता है कि वह लागू कानून के अंतर्गत उपलब्ध कोई भी उपचार कर सके।",
    ],
  },
  {
    icon: Lock,
    title: "6. गोपनीयता",
    content: `ट्रस्ट सभी शिकायतों और उनसे संबंधित जानकारी को गोपनीय रखेगा और ऐसी जानकारी का उपयोग या प्रकटीकरण केवल शिकायत की जांच और समाधान, लागू कानून का पालन, या ट्रस्ट के अधिकारों की सुरक्षा के लिए आवश्यक सीमा तक करेगा।`,
  },
  {
    icon: AlertTriangle,
    title: "7. शिकायत तंत्र का दुरुपयोग",
    content: `आपसे अपेक्षा की जाती है कि आप सद्भावना से और सटीक जानकारी के साथ शिकायतें दर्ज करें। ट्रस्ट किसी भी शिकायत को अस्वीकार या बंद करने का अधिकार रखता है जो तुच्छ, उत्पीड़नकारी, दुर्भावनापूर्ण, धोखाधड़ीपूर्ण, या शिकायत निवारण तंत्र के दुरुपयोग का गठन करती हो।`,
  },
  {
    icon: RefreshCw,
    title: "8. इस नीति की समीक्षा और संशोधन",
    content: `ट्रस्ट इस नीति की समीक्षा, संशोधन, परिवर्तन या अद्यतन करने का अधिकार रखता है। इस नीति का कोई भी संशोधित संस्करण प्लेटय़र पर प्रकाशित किया जाएगा और प्रकाशन की तिथि से प्रभावी होगा।`,
  },
]
  }
};
