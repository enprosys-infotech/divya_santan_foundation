import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { Leaf, Sun, Flower2 } from "lucide-react";

export default function GrievancePolicyPage() {
  const sections = [
    {
      title: "Grievance Redressal Policy",
      content: `Divya Santan Prakalp (the “Trust”, “we”, “our”, or “us”) is a public charitable trust registered under the laws of India under Registration No. [●], having its registered office at 2/1, R.S. Bhandari Marg, Veer Savarkar Chauraha (Janjeerwala), Indore (M.P.) 452001, and operates an integrated digital platform, including its website, mobile application, and other digital interfaces (collectively, the “Platform”), through which it provides Garbh Sanskar programmes, prenatal wellness services, educational content, consultations, donation facilities, and other allied services (collectively, the “Services”).

The Trust is committed to conducting its operations in a transparent, accountable, fair, and user-centric manner. In furtherance of this commitment, the Trust has established this Grievance Redressal Policy (the “Policy”) to provide an accessible, efficient, and transparent mechanism for the submission, acknowledgement, investigation, and resolution of grievances arising in connection with the Platform, the Services, the processing of Personal Data, or any other activity of the Trust.

This Policy applies to all individuals and entities interacting with the Trust or the Platform, including visitors, registered users, beneficiaries, donors, consultants, employees, business partners, and any other stakeholders (collectively referred to as “You”, “Your”, or “User”).

This Policy shall be read in conjunction with the Trust's Privacy Policy, Terms of Service, and other applicable policies published by the Trust from time to time. Unless expressly defined herein, all capitalised terms used in this Policy shall have the meanings assigned to them under the Privacy Policy.

This Policy is published in compliance with Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and establishes the mechanism for addressing grievances relating to, inter alia:
• the Platform or the Services; 
• content made available on the Platform; 
• alleged violations of the Terms of Service or the Privacy Policy; 
• the collection, processing, storage, sharing, retention, or protection of Personal Data; 
• payments, refunds, or service-related concerns; and 
• any other matter connected with the Trust's operations or activities.`
    },
    {
      title: "1. Grievance Officer",
      content: `The Trust has designated a Grievance Officer in accordance with applicable laws, including Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, to receive, examine, and facilitate the resolution of grievances arising under this Policy. The Grievance Officer shall act as the primary point of contact for all grievances and shall endeavour to ensure that every grievance is addressed in a fair, impartial, confidential, and timely manner in accordance with applicable law and the Trust's internal policies.:

Name: [●]
Designation: Grievance Officer
Registered Address: 2/1, R.S. Bhandari Marg, Veer Savarkar Chauraha (Janjeerwala), Indore (M.P.) 452001
Email: santanprakalp@gmail.com
Contact Number: 94257 93409`
    },
    {
      title: "2. What you can report?",
      content: `You may submit a grievance under this Policy in relation to any matter arising out of or connected with the Trust, the Platform, the Services, or the Trust's policies, including, without limitation, the following:

2.1. Any content available on the Platform that is alleged to be unlawful, misleading, defamatory, obscene, infringing, or otherwise in violation of applicable law or the rights of any person.
2.2. Any content or activity that impersonates an individual, infringes intellectual property rights, or discloses Personal Data or other confidential information without lawful authority or consent.
2.3. Any concern relating to the collection, processing, storage, retention, sharing, disclosure, security, or protection of Personal Data or Sensitive Personal Data, or the exercise of rights available under applicable data protection laws.
2.4. Any alleged violation of the Trust's Privacy Policy, Terms of Service, Code of Conduct, or any other policy, guideline, or standard published by the Trust from time to time.
2.5. Any grievance relating to the provision of the Services, including consultations, programmes, payments, refunds, subscriptions, cancellations, technical issues, or the quality or availability of the Platform.
2.6. Any complaint relating to the unauthorised use of a User's name, image, likeness, testimonial, or other personal information.
2.7. Any other matter connected with the Trust's operations, activities, or the use of the Platform or the Services.

Nothing contained in this Policy shall preclude the Trust from considering and addressing any grievance which, in its opinion, merits examination, notwithstanding that it does not fall strictly within the categories specified above.`
    },
    {
      title: "3. How to File a Complaint",
      content: `You may submit a complaint by:
1. Email to the Grievance officer at santanprakalp@gmail.com, with:
• Your name and contact details;
• A description of the grievance, including relevant URLs/ screenshots;
• Any supporting documents; or
2. Submitting a written complaint addressed to the Grievance Officer at the registered office of the Trust; or
3. Using the grievance reporting mechanism or contact form made available on the Platform, where applicable.

The Trust may request such additional information or documents as may be reasonably necessary for the proper investigation and resolution of the grievance.`
    },
    {
      title: "4. Acknowledgment and Resolution Timelines",
      content: `The Trust shall endeavour to process all grievances in a fair, impartial, and timely manner.

4.1. Upon receipt of a grievance, the Trust shall acknowledge the same within the timelines prescribed under applicable law.
4.2. The Trust shall investigate the grievance and communicate its decision or proposed resolution to the User within the timelines prescribed under applicable law or within such extended period as may be reasonably required, where additional information or investigation is necessary.
4.3. The Trust may seek additional information, documents, or clarifications from the User for the purpose of investigating the grievance. The resolution timeline shall be computed after receipt of such information, where applicable.
4.4. Where a grievance relates to content or matters requiring expedited action under applicable law, the Trust shall take such action within the timelines prescribed under the relevant legal or regulatory framework.`
    },
    {
      title: "5. Escalation and Other Remedies",
      content: `5.1. If You are not satisfied with the resolution dissatisfied with the resolution of a grievance, the User may escalate the matter to the following designated authority:

Name: [●]
Designation: [●]
Email: santanprakalp@gmail.com

5.2. Nothing contained in this Policy shall prejudice or restrict a User's right to seek any remedy available under applicable law, including approaching the appropriate statutory authority, tribunal, or court having jurisdiction.`
    },
    {
      title: "6. Confidentiality",
      content: `The Trust shall treat all grievances and the information provided in connection therewith as confidential and shall use or disclose such information only to the extent necessary for investigating and resolving the grievance, complying with applicable law, or protecting the rights and interests of the Trust or any other person.`
    },
    {
      title: "7. Misuse of the Grievance Mechanism",
      content: `You are expected to submit grievances in good faith and with accurate information. The Trust reserves the right to reject or discontinue the processing of any grievance that is frivolous, vexatious, malicious, fraudulent, or otherwise constitutes an abuse of the grievance redressal mechanism, without prejudice to any other rights or remedies available to the Trust under applicable law.`
    },
    {
      title: "8. Review and Amendment of This Policy",
      content: `The Trust reserves the right to review, modify, amend, or update this Policy from time to time to ensure continued compliance with applicable laws, regulatory requirements, operational needs, and best practices. Any revised version of this Policy shall be published on the Platform and shall become effective from the date of such publication, unless otherwise specified.`
    }
  ];

  return (
    <>
      <PageHeader
        title="Grievance Redressal Policy"
        subtitle="Our commitment to transparency, accountability, and addressing your concerns."
        eyebrow="Legal"
      />

      <div className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
          <Leaf className="absolute -left-12 top-20 h-64 w-64 text-green" />
          <Flower2 className="absolute -right-24 bottom-40 h-96 w-96 text-primary" />
          <Sun className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 text-gold" />
        </div>

        <Section className="relative z-10 pt-12 max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="surface-card p-8 shadow-sm">
              <h2 className="mb-4 font-display text-2xl font-bold text-primary">{section.title}</h2>
              <div className="space-y-4">
                {section.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed text-ink text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 text-center pb-12">
            <p className="text-sm text-muted-foreground">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </Section>
      </div>
    </>
  );
}
