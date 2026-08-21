import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { Leaf, Sun, Flower2 } from "lucide-react";

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: `By accessing and using this website (divyasankalpfoundation.com), you accept and agree to be bound by the terms, conditions, and notices contained herein. If you do not agree to abide by the above, please do not use this service.

Divya Sankalp Foundation reserves the right to modify these Terms and Conditions at any time. Your continued use of the Site following the posting of revised Terms and Conditions means that you accept and agree to the changes. It is your responsibility to review these Terms and Conditions regularly.`,
    },
    {
      title: "2. Use License",
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Divya Sankalp Foundation' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

- Modifying or copying the materials
- Using the materials for any commercial purpose or for any public display
- Attempting to decompile or reverse engineer any software contained on the website
- Removing any copyright or other proprietary notations from the materials
- Transferring the materials to another person or "mirroring" the materials on any other server
- Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the website`,
    },
    {
      title: "3. Disclaimer",
      content: `The materials on Divya Sankalp Foundation' website are provided on an 'as is' basis. Divya Sankalp Foundation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

Further, Divya Sankalp Foundation does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.`,
    },
    {
      title: "4. Limitations",
      content: `In no event shall Divya Sankalp Foundation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Divya Sankalp Foundation' website, even if Divya Sankalp Foundation or an authorized representative has been notified orally or in writing of the possibility of such damage.`,
    },
    {
      title: "5. Accuracy of Materials",
      content: `The materials appearing on Divya Sankalp Foundation' website could include technical, typographical, or photographic errors. Divya Sankalp Foundation does not warrant that any of the materials on its website are accurate, complete, or current. Divya Sankalp Foundation may make changes to the materials contained on its website at any time without notice.

Divya Sankalp Foundation does not make any commitment to update the materials.`,
    },
    {
      title: "6. Links",
      content: `Divya Sankalp Foundation has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Divya Sankalp Foundation of the site. Use of any such linked website is at the user's own risk.

If you believe that any linked site contains objectionable material or infringes on your rights, please contact us.`,
    },
    {
      title: "7. Modifications",
      content: `Divya Sankalp Foundation may revise these Terms and Conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions.`,
    },
    {
      title: "8. Product Information and Descriptions",
      content: `We strive to provide accurate descriptions and pricing for all products on our website. However:

- Product descriptions, prices, and availability are subject to change without notice
- Images may vary slightly from actual products due to lighting, camera settings, or screen display
- Colors may appear different depending on monitor settings
- We reserve the right to correct any errors or omissions in product information

While we make every effort to ensure accuracy, we do not warrant that product descriptions, pricing, or other content is error-free.`,
    },
    {
      title: "9. Pricing and Availability",
      content: `a) All prices are subject to change without notice
b) Products are subject to availability
c) We reserve the right to limit quantities
d) We reserve the right to discontinue any product at any time
e) Prices do not include applicable taxes, which will be calculated and shown at checkout

If a product is not available or there is a pricing error, we will notify you and give you the option to cancel your order or wait for restock.`,
    },
    {
      title: "10. Order Acceptance",
      content: `We reserve the right to refuse, cancel, or limit any order for any reason. This includes orders that appear to be placed by minors, orders that violate our policies, or orders that seem fraudulent or suspicious.

An order is not binding on us until we send you an order confirmation. We reserve the right to cancel or modify orders after they have been placed but before they have been dispatched.`,
    },
    {
      title: "11. Payment Terms",
      content: `a) Payment is due in full at the time of purchase
b) We accept various payment methods including credit cards, debit cards, and online payment gateways
c) All payments are processed securely through encrypted payment gateways
d) By providing payment information, you represent that you are authorized to use the payment method
e) You are responsible for any unauthorized use of your payment method
f) We reserve the right to refuse payment from any source we believe is suspicious or fraudulent`,
    },
    {
      title: "12. Shipping and Delivery",
      content: `a) We will make reasonable efforts to ship orders promptly, typically within 3-7 business days
b) Shipping times are estimates and not guaranteed
c) We are not responsible for delays caused by courier services or unforeseen circumstances
d) Risk of loss transfers to you once the product is handed to the shipping carrier
e) Shipping costs and delivery times vary based on location
f) International shipping may be subject to customs duties and taxes

For order tracking, you will receive a tracking number via email.`,
    },
    {
      title: "13. Returns and Refunds Policy",
      content: `a) Returns must be initiated within 7 days of receiving the product
b) Products must be in original, unused condition with all packaging and tags intact
c) Items cannot be returned if they have been worn, damaged, or altered
d) Once we receive and inspect the returned item, we will process your refund within 5-7 business days
e) Refunds will be issued to the original payment method
f) Shipping costs are non-refundable unless the return is due to our error
g) We may deduct return shipping costs from the refund

Returns must be shipped back to our warehouse at the customer's expense.`,
    },
    {
      title: "14. Damaged or Defective Products",
      content: `If you receive a damaged or defective product:

a) Contact us within 2 days of receiving the product with photos/evidence
b) Do not return the item without authorization
c) We will investigate and offer a replacement or refund at our discretion
d) We will arrange pickup of the damaged item if necessary`,
    },
    {
      title: "15. Intellectual Property Rights",
      content: `All content on Divya Sankalp Foundation' website, including text, graphics, logos, images, and software, is the property of Divya Sankalp Foundation or its content suppliers and is protected by international copyright laws.

You may not reproduce, distribute, transmit, modify, or create derivative works based on this content without prior written permission from Divya Sankalp Foundation.`,
    },
    {
      title: "16. User Accounts",
      content: `If you create an account on our website, you agree to:

a) Provide accurate, complete, and current information
b) Maintain the confidentiality of your password and account information
c) Accept responsibility for all activities that occur under your account
d) Notify us immediately of any unauthorized use of your account
e) Not use the account for any unlawful or prohibited purpose

We reserve the right to suspend or terminate your account if you violate these terms.`,
    },
    {
      title: "17. Prohibited Activities",
      content: `You agree not to:

a) Engage in any illegal activity or violate any law
b) Harass, abuse, or threaten other users or our staff
c) Use automated tools to access the website without permission
d) Attempt to gain unauthorized access to our systems
e) Post offensive, abusive, or defamatory content
f) Engage in spamming or unsolicited commercial activities
g) Violate intellectual property rights
h) Collect or compile personal information of other users

Violation of these terms may result in account termination and legal action.`,
    },
    {
      title: "18. Limitation of Liability",
      content: `To the fullest extent permitted by law, Divya Sankalp Foundation, its directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, even if informed of the possibility of such damage.

Our total liability shall not exceed the purchase price of the product.`,
    },
    {
      title: "19. Indemnification",
      content: `You agree to indemnify and hold harmless Divya Sankalp Foundation, its directors, officers, employees, and agents from any and all claims, damages, losses, and expenses (including legal fees) arising from or relating to your use of the website or violation of these Terms and Conditions.`,
    },
    {
      title: "20. Dispute Resolution",
      content: `a) These Terms and Conditions are governed by and construed in accordance with the laws of India
b) Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your Location/City]
c) We encourage you to contact us directly to resolve any disputes before taking legal action

Email: support@adaahjewels.in
Phone: +91 8817740689`,
    },
    {
      title: "21. Cancellation Policy",
      content: `a) Orders can be cancelled within 24 hours of placement if not yet dispatched
b) Cancellation requests must be made through your account or by contacting our support team
c) Refunds for cancelled orders will be processed to your original payment method within 5-7 business days
d) If an order has already been dispatched, you must follow the return policy`,
    },
    {
      title: "22. Customer Support",
      content: `We are committed to providing excellent customer service. If you have any questions, concerns, or complaints:

Email: support@adaahjewels.in
Phone: +91 8817740689
Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST

We typically respond to inquiries within 24-48 hours.`,
    },
    {
      title: "23. Entire Agreement",
      content: `These Terms and Conditions, along with our Privacy Policy, constitute the entire agreement between you and Divya Sankalp Foundation regarding your use of the website. If any provision of these terms is found to be unenforceable, the remaining provisions will continue in effect.`,
    },
  ];

  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website and services."
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
