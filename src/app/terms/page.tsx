import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - RYFT",
  description: "Read RYFT's Terms of Service to understand your rights and responsibilities when using our commission management platform.",
  keywords: "terms of service, legal terms, user agreement, RYFT, commission management",
  openGraph: {
    title: "Terms of Service - RYFT",
    description: "Read RYFT's Terms of Service to understand your rights and responsibilities when using our commission management platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - RYFT",
    description: "Read RYFT's Terms of Service to understand your rights and responsibilities when using our commission management platform.",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These Terms of Service govern your access to and use of RYFT's website, 
                platform, and related services.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Effective Date: November 2025
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms of Service ("Terms") govern access to and use of Ryft's website, 
                    platform, and related services (collectively, the "Services"). By accessing or 
                    using the Services, you acknowledge and agree to be bound by these Terms. If you 
                    are entering into these Terms on behalf of a company or other legal entity, you 
                    represent that you have the authority to bind such entity to these Terms.
                  </p>
                </section>

                {/* Description of Services */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Description of Services</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft provides AI-driven software solutions for commission automation, compensation 
                    governance, workflow parsing, and related operational analytics. Ryft may introduce 
                    additional features or modify existing capabilities at its discretion.
                  </p>
                </section>

                {/* Eligibility */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Eligibility</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Use of the Services is limited to individuals 18 years of age or older who are 
                    legally capable of entering binding contracts. Use on behalf of an organization is 
                    permitted only by authorized representatives.
                  </p>
                </section>

                {/* Customer Accounts and Responsibilities */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Customer Accounts and Responsibilities</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Customers are responsible for maintaining the confidentiality of account credentials 
                    and for all activities conducted through their accounts. Customers must ensure that 
                    all information provided to Ryft is accurate and kept current.
                  </p>
                </section>

                {/* Acceptable Use */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Acceptable Use</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Customers agree not to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-gray-600">
                    <li>Access or attempt to access systems, data, or networks not intended for their use</li>
                    <li>Circumvent security features or attempt to probe, scan, or test system vulnerabilities</li>
                    <li>Reverse engineer, decompile, or otherwise attempt to extract source code</li>
                    <li>Use the Services in violation of applicable law, industry regulations, or contractual obligations</li>
                    <li>Introduce malware, interfere with system integrity, or disrupt service operations</li>
                  </ul>
                </section>

                {/* Ownership and Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Ownership and Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft retains all rights, title, and interest in and to the Services, including all 
                    underlying software, algorithms, models, documentation, trademarks, and content. 
                    Except for the limited rights expressly granted under these Terms, no rights are 
                    transferred to the Customer.
                  </p>
                </section>

                {/* Customer Data and License Grant */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Customer Data and License Grant</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    "Customer Data" refers to information, files, CRM exports, compensation plans, or 
                    other content uploaded or transmitted to the Services by or on behalf of the Customer.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The Customer retains ownership of all Customer Data. The Customer grants Ryft a 
                    non-exclusive, worldwide, royalty-free license to access, process, store, and use 
                    Customer Data solely for the purpose of providing, securing, and supporting the Services.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft does not use Customer Data for model training unless expressly agreed in writing.
                  </p>
                </section>

                {/* Confidentiality */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Confidentiality</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Each party agrees to maintain the confidentiality of non-public business, technical, 
                    or financial information disclosed by the other party and to use such information only 
                    as necessary to perform obligations under these Terms.
                  </p>
                </section>

                {/* Security Commitments */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Security Commitments</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft employs industry-standard administrative, technical, and physical safeguards to 
                    protect Customer Data, including encryption in transit, audit logging, and strict 
                    access controls. Detailed documentation may be provided to enterprise customers under NDA.
                  </p>
                </section>

                {/* Third-Party Integrations */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Third-Party Integrations</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The Services may connect to third-party platforms (e.g., CRM, ERP, HRIS). Ryft is 
                    not responsible for third-party system availability, functionality, or data handling 
                    practices. Customers are responsible for compliance with any third-party terms 
                    associated with their use.
                  </p>
                </section>

                {/* Beta and Experimental Features */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Beta and Experimental Features</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft may offer beta or experimental features for evaluation. Such features are 
                    provided on an "as-is" basis without warranty and may be modified or removed at any time.
                  </p>
                </section>

                {/* Warranty Disclaimer */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Warranty Disclaimer</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To the fullest extent permitted by law, Ryft disclaims all warranties, express or 
                    implied, including warranties of merchantability, fitness for a specific purpose, 
                    non-infringement, system accuracy, or uninterrupted availability.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">13. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-gray-600">
                    <li>Ryft is not liable for indirect, special, incidental, punitive, or consequential damages</li>
                    <li>Ryft's aggregate liability for all claims arising from or relating to these Terms shall not exceed the amount paid by the Customer to Ryft in the twelve months preceding the claim</li>
                  </ul>
                </section>

                {/* Indemnification */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">14. Indemnification</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Customers agree to indemnify and defend Ryft from claims resulting from Customer's 
                    misuse of the Services, violation of these Terms, or infringement of intellectual 
                    property rights.
                  </p>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">15. Termination</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft may suspend or terminate access to the Services for violations of these Terms 
                    or where necessary to maintain security or compliance. Upon termination, Ryft may 
                    retain Customer Data only as required by law or contractual obligation.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">16. Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms are governed by the laws of the State of Delaware, without regard to 
                    conflict-of-law principles. Any disputes shall be resolved in state or federal 
                    courts located in Delaware.
                  </p>
                </section>

                {/* Modifications */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">17. Modifications</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ryft may update these Terms from time to time. Notice will be provided through the 
                    website or directly to Customers. Continued use of the Services constitutes acceptance 
                    of the modified Terms.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="bg-navy-50 rounded-lg p-6">
                    <div className="space-y-2">
                      <p className="text-navy-900 font-medium">RYFT</p>
                      <p className="text-gray-600">Email: legal@ryft.cloud</p>
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