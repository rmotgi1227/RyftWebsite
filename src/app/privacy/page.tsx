import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - RYFT",
  description: "Learn how RYFT collects, uses, and protects your information. Our commitment to enterprise-grade security and responsible data management.",
  keywords: "privacy policy, data protection, security, RYFT, privacy rights",
  openGraph: {
    title: "Privacy Policy - RYFT",
    description: "Learn how RYFT collects, uses, and protects your information. Our commitment to enterprise-grade security and responsible data management.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - RYFT",
    description: "Learn how RYFT collects, uses, and protects your information. Our commitment to enterprise-grade security and responsible data management.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This Privacy Policy outlines how RYFT collects, uses, stores, and protects 
                information when you interact with our website or services.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Effective Date: November 2025
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                
                {/* Overview */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Overview</h2>
                  <p className="text-gray-600 leading-relaxed">
                    This Privacy Policy outlines how Ryft collects, uses, stores, and protects 
                    information when Customers or site visitors interact with our website or Services. 
                    Ryft is committed to enterprise-grade security and responsible data management.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Information We Collect</h2>
                  
                  <div className="space-y-6">
                    {/* Information Provided by Users */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">2.1 Information Provided by Users</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Contact information: name, email, phone number, company details</li>
                        <li>Authentication credentials</li>
                        <li>Business documents, compensation plans, CRM/ERP/HRS exports, and other Customer Data uploaded to the Services</li>
                      </ul>
                    </div>

                    {/* Automatically Collected Information */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">2.2 Automatically Collected Information</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Technical data: browser type, IP address, device identifiers</li>
                        <li>Usage data: timestamps, page interactions, feature usage patterns</li>
                        <li>Cookies and tracking technologies</li>
                      </ul>
                    </div>

                    {/* Information from Integrations */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">2.3 Information from Integrations</h3>
                      <p className="text-gray-600">
                        When authorized, the Services may access third-party systems to retrieve 
                        relevant data for processing.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Use of Information */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Use of Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Ryft uses collected information to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-gray-600 mb-4">
                    <li>Deliver and support the Services</li>
                    <li>Provide AI-driven analysis, automation, and workflow processing</li>
                    <li>Improve product performance and conduct internal analytics</li>
                    <li>Communicate service updates, maintenance notices, and security alerts</li>
                    <li>Ensure system security, audit activities, and prevent fraud</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Ryft does not use Customer Data for marketing or advertising.
                  </p>
                </section>

                {/* Legal Basis for Processing */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Legal Basis for Processing (for applicable jurisdictions)</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Processing may be based on:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-gray-600">
                    <li>Performance of a contract</li>
                    <li>Legitimate business interests in improving and securing the Services</li>
                    <li>Compliance with legal obligations</li>
                    <li>Consent, where required</li>
                  </ul>
                </section>

                {/* Data Sharing and Transfers */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Data Sharing and Transfers</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Ryft does not sell personal data. Ryft may share information with:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-gray-600 mb-4">
                    <li>Infrastructure providers (e.g., hosting, compute, storage)</li>
                    <li>Third-party subprocessors under written data-processing agreements</li>
                    <li>Legal authorities where required by law</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Data may be processed in the United States or other jurisdictions with adequate safeguards.
                  </p>
                </section>

                {/* Data Retention */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Data Retention</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Customer Data is retained only as long as necessary to fulfill the purposes outlined 
                    in this Policy or to comply with legal obligations. Customers may request deletion 
                    of data at any time, subject to technical and legal limitations.
                  </p>
                </section>

                {/* Security Measures */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Security Measures</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft employs encryption, access control, network segmentation, vulnerability scanning, 
                    audit logging, and continuous monitoring. Additional documentation may be provided to 
                    enterprise customers.
                  </p>
                </section>

                {/* Customer Rights */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Customer Rights</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Depending on jurisdiction, Customers may have rights to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-gray-600 mb-4">
                    <li>Access, correct, or delete personal data</li>
                    <li>Request export or portability</li>
                    <li>Restrict or object to processing</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Requests may be submitted to{' '}
                    <a href="mailto:privacy@ryft.cloud" className="text-accent-600 underline">
                      privacy@ryft.cloud
                    </a>.
                  </p>
                </section>

                {/* International Data Transfers */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">9. International Data Transfers</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Where data is transferred outside the originating region, Ryft implements contractual 
                    safeguards such as Standard Contractual Clauses.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Children's Privacy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft does not knowingly collect or process personal information from individuals under 18.
                  </p>
                </section>

                {/* Policy Updates */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Policy Updates</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft may update this Privacy Policy periodically. Continued use of the Services 
                    indicates acceptance of the revised Policy.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Contact</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    For privacy-related inquiries, contact us:
                  </p>
                  
                  <div className="bg-navy-50 rounded-lg p-6">
                    <div className="space-y-2">
                      <p className="text-navy-900 font-medium">RYFT</p>
                      <p className="text-gray-600">
                        Privacy inquiries:{' '}
                        <a href="mailto:privacy@ryft.cloud" className="text-accent-600 underline">
                          privacy@ryft.cloud
                        </a>
                      </p>
                      <p className="text-gray-600">
                        Legal inquiries:{' '}
                        <a href="mailto:legal@ryft.cloud" className="text-accent-600 underline">
                          legal@ryft.cloud
                        </a>
                      </p>
                      <p className="text-gray-600">
                        Contact Page:{' '}
                        <a href="/contact" className="text-accent-600 underline">
                          /contact
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}