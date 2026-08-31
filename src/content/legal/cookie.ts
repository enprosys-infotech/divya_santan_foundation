/**
 * Cookie Policy content in every supported language.
 */
import {
  Cookie,
  BarChart2,
  ShieldCheck,
  Globe,
  Settings,
  AlertTriangle,
  Baby,
  UserCheck,
  RefreshCw,
  Scale,
  Eye,
} from "lucide-react";
import type { LocalizedLegalContent } from "./types";

export const cookieContent: LocalizedLegalContent = {
  en: {
    eyebrow: "Legal",
    title: "Cookie Policy",
    subtitle:
      "This Cookie Policy explains what cookies and similar tracking technologies are, how and why we use them, and your rights under applicable Indian law.",
    preamble: `This Cookie Policy is issued by Divya Santan Prakalp Foundation ("we," "us," "our," "Foundation"), operating the website divyasantanfoundation.com (the "Platform"), through which we provide Garbh Sanskar programs, prenatal guidance, spiritual and wellness consultations, and related services (collectively, the "Services") to expecting parents and their families.\n\nThis Policy explains what cookies and similar tracking technologies are, how and why we use them, and the rights available to you under applicable Indian law, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules"), and the Digital Personal Data Protection Act, 2023 ("DPDP Act") together with the Digital Personal Data Protection Rules, 2025 ("DPDP Rules").\n\nThis Cookie Policy forms an integral part of the Foundation's Privacy Framework and should be read together with the Privacy Policy and the Terms of Service & User Agreement.`,
    sections: [
      {
        icon: Cookie,
        title: "1. What Are Cookies and Similar Technologies?",
        content: `Cookies are small text files containing small amounts of information which are downloaded to your computer or mobile device when you visit our Website and allow the Website to recognize your device. Cookies we place ourselves are called "first-party cookies," and cookies placed by other companies on our behalf are called "third-party cookies."\n\nSimilar technologies include web beacons/conversion pixels (small graphics used in emails and web pages to track whether a message was opened or a page visited) and local storage, which work alongside cookies for the same purposes described below.\n\nDepending on your settings, cookies and similar technologies may collect: your device identifier, IP address, browser/operating system information, and general location information (to the extent permitted under applicable Indian law).`,
      },
      {
        icon: Eye,
        title: "2. Why Do We Use Cookies?",
        content: `Cookies do a number of jobs on our Platform. They:`,
        listItems: [
          "Let you navigate between pages efficiently and remember your preferences",
          "Keep you securely logged in and enable enrollment, scheduling, and payment for our Garbh Sanskar programs and consultations",
          "Help us analyse how our Website and content are used, so we can improve the programs and resources we offer",
          "Facilitate social media interaction (e.g., share buttons, embedded videos of Garbh Sanskar sessions)",
          "Help ensure that any advertisements you see about our programs are more relevant to you",
        ],
      },
      {
        icon: BarChart2,
        title: "3. Do We Use Cookies for Marketing and Analytics?",
        content: `Yes, where you have consented, cookies may be used to personalise Website content, improve user experience and understand browsing preferences. We do not use cookies to infer health conditions or pregnancy status for behavioural advertising or targeted marketing. In some cases, we may associate cookie data with an identifiable individual. For example:`,
        listItems: [
          "If we send you a program update or newsletter email containing web beacons or tracking pixels, we will know whether you opened, read, or clicked through the message.",
          "When you click a link in a marketing email from us, a cookie may log which pages you subsequently view on our Website, even before you register or log in.",
          "Combining data: We may combine information solely for improving our Services, user experience, platform functionality and communications, and not for profiling users for automated decision-making. We do not combine this data with health information you share in consultations for advertising purposes.",
        ],
      },
      {
        icon: Globe,
        title: "4. Do We Use Third Party Cookies?",
        content: `Yes. Some cookies, pixels, and tracking technologies on our Platform are placed by third-party companies who provide us with analytics, payment processing, communication, or advertising services. These companies use code to collect information about how you interact with our Platform — such as pages visited, links clicked, and time spent — only while you are on our Platform (or, if you have consented, across your devices).`,
        tableRows: [
          { purpose: "Website Analytics", providers: "Google Analytics" },
          { purpose: "Payment Processing", providers: "Razorpay / PayU / Cashfree (or similar RBI-authorised gateway)" },
          { purpose: "WhatsApp Communication", providers: "WhatsApp Business API (Meta)" },
          { purpose: "Video Hosting", providers: "YouTube (Google)" },
          { purpose: "Social Media Integration", providers: "Facebook, Instagram (Meta)" },
          { purpose: "Advertising & Retargeting", providers: "Google Ads, Meta Pixel" },
        ],
        tableFooter:
          "The list above is illustrative and may change from time to time. An updated list of material third-party tracking providers will be maintained on the Platform. The Foundation does not control the cookies, tracking technologies, or data processing practices of third-party providers once Users interact directly with their websites or services.",
      },
      {
        icon: Eye,
        title: "5. Do We Use Tracking Technologies Similar to Cookies?",
        content: `Yes. We may use web beacons (including conversion pixels) in marketing emails, our newsletter, or on the Platform for similar purposes as cookies — for example, to determine whether an email was opened or a link was clicked. Web beacons do not place information directly on your device but often work together with cookies to monitor engagement. Everything in this Policy about cookies applies equally to web beacons and similar technologies, unless stated otherwise.`,
      },
      {
        icon: Baby,
        title: "6. Sensitive Personal Data and Health-Related Information",
        content: `Because our Services relate to pregnancy, prenatal care, and family well-being, information you share with us through enrollment forms, consultation bookings, or chat may include details that qualify as Sensitive Personal Data or Information (SPDI) under the SPDI Rules, 2011, such as physical, physiological, and mental health information, medical history relevant to Garbh Sanskar counselling, and pregnancy-related details.\n\nWe do not use cookies to infer, track, or target advertising based on health conditions or pregnancy status. Any sensitive information you provide through forms (not cookies) is handled under the stricter safeguards described in our Privacy Policy, including explicit consent before collection, need-to-know access restrictions, and reasonable security practices mandated under Section 43A of the IT Act and the SPDI Rules.`,
      },
      {
        icon: Settings,
        title: "7. What Types of Cookies Does This Platform Use?",
        content: `Not every cookie listed below is necessarily active on every page. The categories used on our Platform are:`,
        categoryRows: [
          {
            name: "Strictly Necessary Cookies",
            desc: "Essential to let you move around the Platform and use its features such as logging in, enrolling in a program, or completing payment for a consultation. Without these, requested services cannot be provided, and they cannot be switched off. These cookies do not require separate consent.",
          },
          {
            name: "Analytics Cookies",
            desc: "Let us measure and improve Platform performance and understand how visitors engage with our Garbh Sanskar content. May be processed by providers such as Google Analytics. Although generally aggregated or pseudonymised, they may constitute personal data where linkable to an identifiable individual.",
          },
          {
            name: "Performance Cookies",
            desc: "Typically third-party cookies that collect information about your visit — such as which pages you visit most — without identifying you personally. Used only to improve how the Platform works.",
          },
          {
            name: "Functionality Cookies",
            desc: "Remember choices you make (such as language, region, or saved course progress) to provide a more personalized experience. These do not track your activity on other websites or gather data usable for advertising.",
          },
          {
            name: "Advertising & Social Media Cookies",
            desc: "Used to show you more relevant advertisements about our programs, limit repeat ad views, measure campaign effectiveness, enable retargeting, and understand engagement after viewing an ad.",
          },
        ],
      },
      {
        icon: Globe,
        title: "8. Cross-Border Data Transfer",
        content: `Some third-party providers (e.g., global analytics, cloud hosting, or advertising platforms) may process or store cookie-derived data outside India. Under the DPDP Act, cross-border transfer is generally permitted unless the Central Government specifically restricts transfer to a particular country or territory by notification. Where cookie-derived personal data is transferred outside India, such transfer shall be carried out in accordance with applicable law and contractual safeguards adopted by the Foundation.`,
      },
      {
        icon: BarChart2,
        title: "9. Data Retention",
        content: `Cookie retention periods vary by category:`,
        retentionRows: [
          { category: "Strictly Necessary Cookies", retention: "Deleted when your browser session ends" },
          { category: "Analytics/Performance Cookies", retention: "Up to 14–26 months (or as configured by the provider)" },
          { category: "Advertising Cookies", retention: "Up to 12 months, or until consent is withdrawn" },
          { category: "Functionality Cookies", retention: "Up to 12 months, or until preferences change" },
        ],
        tableFooter:
          "Actual retention periods may vary depending upon browser configuration, user preferences, technical requirements and third-party provider settings. Personal data collected through forms in connection with sensitive services is retained under our Privacy Policy and applicable statutory requirements.",
      },
      {
        icon: Settings,
        title: "10. What If I Don't Want Cookies or Similar Technologies?",
        content: `You have several options:`,
        subsections: [
          {
            heading: "a) Cookie Consent Banner / Preference Center",
            content:
              "When you first visit, a consent banner lets you accept all cookies, reject non-essential cookies, or customize preferences by category. You can revisit and change these choices at any time through our Cookie Preference Center (link in the Platform footer).\n\nWithdrawal of consent shall not affect the lawfulness of any processing undertaken prior to such withdrawal.",
          },
          {
            heading: "b) Browser Settings",
            content:
              "• Google Chrome: Settings > Privacy and Security > Cookies and other site data\n• Mozilla Firefox: Settings > Privacy & Security > Cookies and Site Data\n• Safari: Preferences > Privacy > Manage Website Data\n• Microsoft Edge: Settings > Cookies and site permissions\n\nDeleting or blocking cookies may affect your experience — for example, preventing login, program enrollment, or payment.",
          },
          {
            heading: "c) Opting Out of Specific Providers",
            content:
              "• Google Analytics Opt-out Browser Add-on\n• Google Ads Settings (adssettings.google.com)\n• Meta/Facebook Ad Preferences",
          },
          {
            heading: "d) Your Rights as a Data Principal under the DPDP Act",
            content:
              "To the extent cookies process your personal data, you are entitled to:\n• Right to Access a summary of personal data we hold and how it is processed\n• Right to Correction and Erasure — correction of inaccurate data, or erasure once no longer necessary\n• Right to Grievance Redressal — raise concerns with our Grievance Officer (Section 13)\n• Right to Nominate — nominate someone to exercise your rights in case of death or incapacity\n• Right to Withdraw Consent — withdraw consent for non-essential cookies at any time, as easily as it was given\n\nThe above rights are more elaborately discussed under our Privacy Policy.",
          },
        ],
      },
      {
        icon: ShieldCheck,
        title: "11. Data Security",
        content: `We apply reasonable security practices mandated under Section 43A of the IT Act and the SPDI Rules, including:`,
        listItems: [
          "Encryption of data in transit (SSL/TLS)",
          "Access controls limiting who can view cookie/analytics data",
          "Regular security review of third-party integrations",
          "Contractual safeguards with all data processors",
        ],
        footerContent:
          "In the event of a personal data breach affecting cookie-derived or other personal data, we will notify the Data Protection Board of India and affected users as required under the DPDP Rules, without undue delay. We periodically review our technical and organisational measures to ensure they remain appropriate.",
      },
      {
        icon: Baby,
        title: "12. Children's Data",
        content: `Our Services are intended for adults (expecting parents and family members). We do not knowingly direct cookies, behavioural tracking, or targeted advertising at children. Where any part of the Platform is accessed by or on behalf of a minor, processing will be subject to verifiable parental/guardian consent as required under the DPDP Act, without tracking, behavioural monitoring, or targeted advertising directed at children.\n\nWhere the Foundation becomes aware that cookies or similar technologies have inadvertently collected personal data relating to a child without the required consent, such data will be deleted or anonymised as soon as reasonably practicable.`,
      },
      {
        icon: UserCheck,
        title: "13. Grievance Officer / Contact Us",
        content: `For any questions, concerns, or complaints relating to this Cookie Policy or our use of cookies and tracking technologies, please contact our Grievance Officer:`,
        listItems: [
          "Grievance Officer: [Name]",
          "Designation: [Designation]",
          "Email: [Insert Email]",
          "Phone: [Insert Phone]",
          "Registered Address: [Insert Address]",
        ],
      },
      {
        icon: RefreshCw,
        title: "14. Changes to This Cookie Policy",
        content: `We may update this Policy periodically to reflect changes in technology, our practices, or Indian law (including the phased implementation of the DPDP Act and Rules). The "Last Updated" date reflects the most recent revision. Material changes will, where required, be notified through the consent banner or other reasonable means.`,
      },
      {
        icon: Scale,
        title: "15. Governing Law and Jurisdiction",
        content: `This Policy shall be governed by the laws of India. Any disputes arising out of or relating to this Policy shall be subject to the dispute resolution mechanism set out in the Terms of Service & User Agreement. Subject thereto, the courts of [Insert City/State] shall have exclusive jurisdiction.`,
      },
    ],
  },
  hi: {
    eyebrow: "कानूनी",
    title: "कुकी नीति",
    subtitle:
      "यह कुकी नीति बताती है कि कुकीज़ और समान ट्रैकिंग तकनीकें क्या हैं, हम उनका उपयोग कैसे और क्यों करते हैं, और लागू भारतीय कानून के अंतर्गत आपके अधिकार क्या हैं।",
    preamble: `यह कुकी नीति दिव्य संतान प्रकल्प फाउंडेशन ("हम," "हमारा," "फाउंडेशन") द्वारा जारी की गई है, जो वेबसाइट divyasantanfoundation.com (जिसे "प्लेटफ़ॉर्म" कहा गया है) संचालित करती है। इस प्लेटफ़ॉर्म के माध्यम से हम गर्भ संस्कार कार्यक्रम, प्रसवपूर्व मार्गदर्शन, आध्यात्मिक एवं स्वास्थ्य परामर्श और संबंधित सेवाएं (सामूहिक रूप से "सेवाएं") प्रत्याशित माता-पिता और उनके परिवारों को प्रदान करते हैं।\n\nयह नीति बताती है कि कुकीज़ और समान ट्रैकिंग तकनीकें क्या हैं, हम उनका उपयोग कैसे और क्यों करते हैं, और सूचना प्रौद्योगिकी अधिनियम 2000, सूचना प्रौद्योगिकी (उचित सुरक्षा प्रथाएं एवं प्रक्रियाएं तथा संवेदनशील व्यक्तिगत डेटा या सूचना) नियम 2011 ("SPDI नियम") और डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम 2023 ("DPDP अधिनियम") के अंतर्गत आपके अधिकार क्या हैं।\n\nयह कुकी नीति फाउंडेशन के गोपनीयता ढांचे का अभिन्न हिस्सा है और इसे गोपनीयता नीति और सेवा की शर्तें और उपयोगकर्ता समझौते के साथ पढ़ा जाना चाहिए।`,
    sections: [
      {
        icon: Cookie,
        title: "1. कुकीज़ और समान तकनीकें क्या हैं?",
        content: `कुकीज़ छोटी टेक्स्ट फ़ाइलें होती हैं जिनमें थोड़ी मात्रा में जानकारी होती है। जब आप हमारी वेबसाइट पर जाते हैं, तो ये आपके कंप्यूटर या मोबाइल डिवाइस पर डाउनलोड हो जाती हैं और वेबसाइट को आपके डिवाइस को पहचानने में सहायता करती हैं। हमारे द्वारा स्वयं लगाई गई कुकीज़ "प्रथम-पक्ष कुकीज़" कहलाती हैं और अन्य कंपनियों द्वारा हमारी ओर से लगाई गई कुकीज़ "तृतीय-पक्ष कुकीज़" कहलाती हैं।\n\nसमान तकनीकों में वेब बीकन/कन्वर्ज़न पिक्सेल (ईमेल और वेब पेजों में उपयोग किए जाने वाले छोटे ग्राफिक्स जो यह ट्रैक करते हैं कि कोई संदेश खोला गया या कोई पेज देखा गया) और लोकल स्टोरेज शामिल हैं।\n\nआपकी सेटिंग के आधार पर, कुकीज़ और समान तकनीकें निम्नलिखित एकत्र कर सकती हैं: आपकी डिवाइस पहचान, IP पता, ब्राउज़र/ऑपरेटिंग सिस्टम जानकारी और सामान्य स्थान जानकारी।`,
      },
      {
        icon: Eye,
        title: "2. हम कुकीज़ का उपयोग क्यों करते हैं?",
        content: `हमारे प्लेटफ़ॉर्म पर कुकीज़ अनेक कार्य करती हैं। वे:`,
        listItems: [
          "आपको पेजों के बीच कुशलतापूर्वक नेविगेट करने और आपकी प्राथमिकताओं को याद रखने में सहायता करती हैं",
          "आपको सुरक्षित रूप से लॉग इन रखती हैं और हमारे गर्भ संस्कार कार्यक्रमों में नामांकन, शेड्यूलिंग और भुगतान सक्षम करती हैं",
          "हमें यह विश्लेषण करने में सहायता करती हैं कि हमारी वेबसाइट और सामग्री का उपयोग कैसे किया जाता है",
          "सोशल मीडिया इंटरैक्शन को सुगम बनाती हैं (जैसे शेयर बटन, गर्भ संस्कार सत्रों के एम्बेडेड वीडियो)",
          "यह सुनिश्चित करने में सहायता करती हैं कि आप हमारे कार्यक्रमों के बारे में जो विज्ञापन देखते हैं वे आपके लिए अधिक प्रासंगिक हों",
        ],
      },
      {
        icon: BarChart2,
        title: "3. क्या हम मार्केटिंग और विश्लेषण के लिए कुकीज़ का उपयोग करते हैं?",
        content: `हाँ, जहाँ आपने सहमति दी है, वहाँ कुकीज़ का उपयोग वेबसाइट सामग्री को वैयक्तिकृत करने, उपयोगकर्ता अनुभव सुधारने और ब्राउज़िंग प्राथमिकताओं को समझने के लिए किया जा सकता है। हम व्यवहारिक विज्ञापन या लक्षित मार्केटिंग के लिए स्वास्थ्य स्थितियों या गर्भावस्था की स्थिति का अनुमान लगाने के लिए कुकीज़ का उपयोग नहीं करते हैं।`,
        listItems: [
          "यदि हम आपको वेब बीकन या ट्रैकिंग पिक्सेल युक्त कोई कार्यक्रम अपडेट या न्यूज़लेटर ईमेल भेजते हैं, तो हमें पता चल जाएगा कि आपने संदेश खोला, पढ़ा या क्लिक किया।",
          "जब आप हमारे मार्केटिंग ईमेल में किसी लिंक पर क्लिक करते हैं, तो एक कुकी यह रिकॉर्ड कर सकती है कि आपने बाद में हमारी वेबसाइट पर कौन से पेज देखे।",
          "डेटा का संयोजन: हम जानकारी केवल हमारी सेवाओं, उपयोगकर्ता अनुभव और संचार को बेहतर बनाने के लिए संयोजित करते हैं, विज्ञापन उद्देश्यों के लिए स्वास्थ्य जानकारी के साथ नहीं।",
        ],
      },
      {
        icon: Globe,
        title: "4. क्या हम तृतीय-पक्ष कुकीज़ का उपयोग करते हैं?",
        content: `हाँ। हमारे प्लेटफ़ॉर्म पर कुछ कुकीज़, पिक्सेल और ट्रैकिंग तकनीकें तृतीय-पक्ष कंपनियों द्वारा लगाई जाती हैं जो हमें विश्लेषण, भुगतान प्रसंस्करण, संचार या विज्ञापन सेवाएं प्रदान करती हैं।`,
        tableRows: [
          { purpose: "वेबसाइट विश्लेषण", providers: "Google Analytics" },
          { purpose: "भुगतान प्रसंस्करण", providers: "Razorpay / PayU / Cashfree (या समकक्ष RBI-अधिकृत गेटवे)" },
          { purpose: "WhatsApp संचार", providers: "WhatsApp Business API (Meta)" },
          { purpose: "वीडियो होस्टिंग", providers: "YouTube (Google)" },
          { purpose: "सोशल मीडिया एकीकरण", providers: "Facebook, Instagram (Meta)" },
          { purpose: "विज्ञापन और रिटार्गेटिंग", providers: "Google Ads, Meta Pixel" },
        ],
        tableFooter:
          "उपरोक्त सूची उदाहरणात्मक है और समय-समय पर बदल सकती है। फाउंडेशन तृतीय-पक्ष प्रदाताओं की कुकीज़, ट्रैकिंग तकनीकों या डेटा प्रसंस्करण प्रथाओं को नियंत्रित नहीं करता।",
      },
      {
        icon: Eye,
        title: "5. क्या हम कुकीज़ जैसी ट्रैकिंग तकनीकों का उपयोग करते हैं?",
        content: `हाँ। हम मार्केटिंग ईमेल, न्यूज़लेटर, या प्लेटफ़ॉर्म पर कुकीज़ के समान उद्देश्यों के लिए वेब बीकन (कन्वर्ज़न पिक्सेल सहित) का उपयोग कर सकते हैं — उदाहरण के लिए, यह निर्धारित करने के लिए कि कोई ईमेल खोला गया था या कोई लिंक क्लिक किया गया था। इस नीति में कुकीज़ के बारे में जो कुछ भी है वह समान रूप से वेब बीकन और समान तकनीकों पर लागू होता है।`,
      },
      {
        icon: Baby,
        title: "6. संवेदनशील व्यक्तिगत डेटा और स्वास्थ्य-संबंधी जानकारी",
        content: `चूंकि हमारी सेवाएं गर्भावस्था, प्रसवपूर्व देखभाल और पारिवारिक कल्याण से संबंधित हैं, इसलिए आप नामांकन फॉर्म, परामर्श बुकिंग, या चैट के माध्यम से हमारे साथ जो जानकारी साझा करते हैं, उसमें SPDI नियम 2011 के अंतर्गत संवेदनशील व्यक्तिगत डेटा शामिल हो सकता है।\n\nहम स्वास्थ्य स्थितियों या गर्भावस्था की स्थिति के आधार पर विज्ञापन को ट्रैक या लक्षित करने के लिए कुकीज़ का उपयोग नहीं करते हैं। आप फॉर्म के माध्यम से जो भी संवेदनशील जानकारी प्रदान करते हैं वह हमारी गोपनीयता नीति में वर्णित सख्त सुरक्षा उपायों के अंतर्गत संभाली जाती है।`,
      },
      {
        icon: Settings,
        title: "7. यह प्लेटफ़ॉर्म किस प्रकार की कुकीज़ का उपयोग करता है?",
        content: `हर पेज पर नीचे सूचीबद्ध हर कुकी आवश्यक रूप से सक्रिय नहीं होती। हमारे प्लेटफ़ॉर्म पर उपयोग की जाने वाली श्रेणियां हैं:`,
        categoryRows: [
          {
            name: "अत्यंत आवश्यक कुकीज़",
            desc: "लॉग इन, कार्यक्रम में नामांकन, या परामर्श के लिए भुगतान जैसी प्लेटफ़ॉर्म सुविधाओं के उपयोग के लिए आवश्यक। इन्हें बंद नहीं किया जा सकता और इनके लिए अलग सहमति की आवश्यकता नहीं है।",
          },
          {
            name: "विश्लेषण कुकीज़",
            desc: "प्लेटफ़ॉर्म प्रदर्शन को मापने और सुधारने तथा आगंतुक हमारी गर्भ संस्कार सामग्री से कैसे जुड़ते हैं यह समझने के लिए। आमतौर पर Google Analytics जैसे प्रदाताओं द्वारा संसाधित।",
          },
          {
            name: "प्रदर्शन कुकीज़",
            desc: "आमतौर पर तृतीय-पक्ष कुकीज़ जो आपकी व्यक्तिगत पहचान किए बिना आपकी विज़िट के बारे में जानकारी एकत्र करती हैं। केवल प्लेटफ़ॉर्म को बेहतर बनाने के लिए उपयोग किया जाता है।",
          },
          {
            name: "कार्यक्षमता कुकीज़",
            desc: "आपकी भाषा, क्षेत्र या सहेजी गई पाठ्यक्रम प्रगति जैसी पसंद याद रखती हैं। ये अन्य वेबसाइटों पर आपकी गतिविधि को ट्रैक नहीं करतीं।",
          },
          {
            name: "विज्ञापन और सोशल मीडिया कुकीज़",
            desc: "हमारे कार्यक्रमों के बारे में अधिक प्रासंगिक विज्ञापन दिखाने, बार-बार विज्ञापन देखने को सीमित करने और अभियान प्रभावशीलता मापने के लिए उपयोग की जाती हैं।",
          },
        ],
      },
      {
        icon: Globe,
        title: "8. सीमा-पार डेटा स्थानांतरण",
        content: `कुछ तृतीय-पक्ष प्रदाता (जैसे वैश्विक विश्लेषण, क्लाउड होस्टिंग या विज्ञापन प्लेटफ़ॉर्म) कुकी-व्युत्पन्न डेटा को भारत के बाहर संसाधित या संग्रहीत कर सकते हैं। DPDP अधिनियम के अंतर्गत, सीमा-पार स्थानांतरण आम तौर पर तब तक अनुमत है जब तक केंद्र सरकार किसी विशेष देश या क्षेत्र में स्थानांतरण को प्रतिबंधित नहीं करती। जहाँ कुकी-व्युत्पन्न व्यक्तिगत डेटा भारत के बाहर स्थानांतरित किया जाता है, ऐसा स्थानांतरण लागू कानून और फाउंडेशन द्वारा अपनाए गए संविदात्मक सुरक्षा उपायों के अनुसार किया जाएगा।`,
      },
      {
        icon: BarChart2,
        title: "9. डेटा प्रतिधारण",
        content: `कुकी श्रेणी के अनुसार प्रतिधारण अवधि भिन्न होती है:`,
        retentionRows: [
          { category: "अत्यंत आवश्यक कुकीज़", retention: "आपका ब्राउज़र सत्र समाप्त होने पर हटा दी जाती हैं" },
          { category: "विश्लेषण/प्रदर्शन कुकीज़", retention: "14–26 महीने तक (या प्रदाता द्वारा कॉन्फ़िगर किए अनुसार)" },
          { category: "विज्ञापन कुकीज़", retention: "12 महीने तक, या जब तक सहमति वापस न ली जाए" },
          { category: "कार्यक्षमता कुकीज़", retention: "12 महीने तक, या प्राथमिकताएं बदलने तक" },
        ],
        tableFooter:
          "वास्तविक प्रतिधारण अवधि ब्राउज़र कॉन्फ़िगरेशन, उपयोगकर्ता प्राथमिकताओं और तृतीय-पक्ष प्रदाता सेटिंग के आधार पर भिन्न हो सकती है।",
      },
      {
        icon: Settings,
        title: "10. यदि मैं कुकीज़ नहीं चाहता तो क्या होगा?",
        content: `आपके पास कई विकल्प हैं:`,
        subsections: [
          {
            heading: "a) कुकी सहमति बैनर / प्राथमिकता केंद्र",
            content:
              "जब आप पहली बार विज़िट करते हैं, तो एक सहमति बैनर आपको सभी कुकीज़ स्वीकार करने, गैर-आवश्यक कुकीज़ अस्वीकार करने, या श्रेणी के अनुसार प्राथमिकताएं अनुकूलित करने देता है। सहमति वापस लेने से पूर्व में की गई किसी भी प्रक्रिया की वैधता प्रभावित नहीं होगी।",
          },
          {
            heading: "b) ब्राउज़र सेटिंग",
            content:
              "• Google Chrome: Settings > Privacy and Security > Cookies and other site data\n• Mozilla Firefox: Settings > Privacy & Security > Cookies and Site Data\n• Safari: Preferences > Privacy > Manage Website Data\n• Microsoft Edge: Settings > Cookies and site permissions\n\nकुकीज़ को हटाने या ब्लॉक करने से आपका अनुभव प्रभावित हो सकता है — उदाहरण के लिए, लॉगिन, कार्यक्रम नामांकन या भुगतान में बाधा।",
          },
          {
            heading: "c) विशिष्ट प्रदाताओं से ऑप्ट आउट",
            content:
              "• Google Analytics ऑप्ट-आउट ब्राउज़र ऐड-ऑन\n• Google Ads सेटिंग (adssettings.google.com)\n• Meta/Facebook विज्ञापन प्राथमिकताएं",
          },
          {
            heading: "d) DPDP अधिनियम के अंतर्गत डेटा प्रमुख के रूप में आपके अधिकार",
            content:
              "जहाँ तक कुकीज़ आपके व्यक्तिगत डेटा को संसाधित करती हैं, आप अधिकृत हैं:\n• पहुँच का अधिकार — हम किस डेटा को रखते हैं और उसे कैसे संसाधित करते हैं, इसका सारांश\n• सुधार और मिटाने का अधिकार — गलत डेटा को सुधारना या जब आवश्यक न हो तो मिटाना\n• शिकायत निवारण का अधिकार — हमारे शिकायत अधिकारी (धारा 13) के पास चिंताएं उठाना\n• नामांकन का अधिकार — मृत्यु या अक्षमता की स्थिति में अपने अधिकार व्यायाम करने के लिए किसी को नामांकित करना\n• सहमति वापस लेने का अधिकार — गैर-आवश्यक कुकीज़ के लिए किसी भी समय सहमति वापस लेना",
          },
        ],
      },
      {
        icon: ShieldCheck,
        title: "11. डेटा सुरक्षा",
        content: `हम IT अधिनियम की धारा 43A और SPDI नियमों के अंतर्गत अनिवार्य उचित सुरक्षा प्रथाएं लागू करते हैं, जिनमें शामिल हैं:`,
        listItems: [
          "ट्रांजिट में डेटा का एन्क्रिप्शन (SSL/TLS)",
          "पहुँच नियंत्रण जो सीमित करते हैं कि कुकी/विश्लेषण डेटा कौन देख सकता है",
          "तृतीय-पक्ष एकीकरण की नियमित सुरक्षा समीक्षा",
          "सभी डेटा प्रोसेसर के साथ संविदात्मक सुरक्षा उपाय",
        ],
        footerContent:
          "कुकी-व्युत्पन्न या अन्य व्यक्तिगत डेटा को प्रभावित करने वाले व्यक्तिगत डेटा उल्लंघन की स्थिति में, हम DPDP नियमों के तहत डेटा संरक्षण बोर्ड और प्रभावित उपयोगकर्ताओं को बिना अनुचित देरी के सूचित करेंगे।",
      },
      {
        icon: Baby,
        title: "12. बच्चों का डेटा",
        content: `हमारी सेवाएं वयस्कों (प्रत्याशित माता-पिता और परिवार के सदस्यों) के लिए हैं। हम जानबूझकर बच्चों पर कुकीज़, व्यवहारिक ट्रैकिंग या लक्षित विज्ञापन नहीं करते। जहाँ फाउंडेशन को पता चलता है कि कुकीज़ या समान तकनीकों ने अनजाने में आवश्यक सहमति के बिना किसी बच्चे से संबंधित व्यक्तिगत डेटा एकत्र किया है, तो ऐसे डेटा को जल्द से जल्द हटाया या अज्ञात किया जाएगा।`,
      },
      {
        icon: UserCheck,
        title: "13. शिकायत अधिकारी / हमसे संपर्क करें",
        content: `इस कुकी नीति या कुकीज़ और ट्रैकिंग तकनीकों के हमारे उपयोग के बारे में किसी भी प्रश्न, चिंता या शिकायत के लिए, कृपया हमारे शिकायत अधिकारी से संपर्क करें:`,
        listItems: [
          "शिकायत अधिकारी: [नाम]",
          "पदनाम: [पदनाम]",
          "ईमेल: [ईमेल डालें]",
          "फ़ोन: [फ़ोन डालें]",
          "पंजीकृत पता: [पता डालें]",
        ],
      },
      {
        icon: RefreshCw,
        title: "14. इस कुकी नीति में परिवर्तन",
        content: `हम प्रौद्योगिकी, हमारी प्रथाओं, या भारतीय कानून में बदलावों को दर्शाने के लिए इस नीति को समय-समय पर अपडेट कर सकते हैं। "अंतिम अपडेट" तिथि सबसे हालिया संशोधन को दर्शाती है। महत्वपूर्ण परिवर्तनों को, जहाँ आवश्यक हो, सहमति बैनर या अन्य उचित माध्यमों से अधिसूचित किया जाएगा।`,
      },
      {
        icon: Scale,
        title: "15. शासी कानून और अधिकार क्षेत्र",
        content: `यह नीति भारत के कानूनों द्वारा शासित होगी। इस नीति से उत्पन्न या संबंधित किसी भी विवाद को सेवा की शर्तें और उपयोगकर्ता समझौते में निर्धारित विवाद समाधान तंत्र के अधीन किया जाएगा। तदाधीन, इंदौर के न्यायालयों का विशेष अधिकार क्षेत्र होगा।\n\nप्रभावी तिथि: [●]\nअंतिम अपडेट: [●]`,
      },
    ],
  },
};
