import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy - RYFT",
  description: "Learn about how RYFT uses cookies to enhance your website experience and protect your privacy.",
  keywords: "cookie policy, privacy, cookies, data protection, RYFT",
  openGraph: {
    title: "Cookie Policy - RYFT",
    description: "Learn about how RYFT uses cookies to enhance your website experience and protect your privacy.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - RYFT",
    description: "Learn about how RYFT uses cookies to enhance your website experience and protect your privacy.",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This Cookie Policy explains how RYFT uses cookies and similar tracking technologies 
                when you visit our website.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                
                {/* What are Cookies */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">What are Cookies?</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you 
                    visit a website. They are widely used to make websites work more efficiently and provide 
                    information to website owners.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Cookies allow websites to recognize your device and store some information about your 
                    preferences or past actions to enhance your browsing experience.
                  </p>
                </section>

                {/* How We Use Cookies */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Cookies</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We use cookies for several purposes to enhance your experience on our website:
                  </p>
                  
                  <div className="grid gap-6">
                    {/* Necessary Cookies */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                        Necessary Cookies (Always Active)
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        These cookies are essential for the basic functionality of our website. 
                        They enable core features like security, network management, and accessibility.
                      </p>
                      <div className="bg-gray-50 rounded p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Session management and authentication</li>
                          <li>• Website security and fraud prevention</li>
                          <li>• Basic website functionality</li>
                          <li>• Cookie preference storage</li>
                        </ul>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-accent-500 rounded-full mr-3"></span>
                        Analytics Cookies (Optional)
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        These cookies help us understand how visitors interact with our website by 
                        collecting and reporting information anonymously.
                      </p>
                      <div className="bg-gray-50 rounded p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Purpose:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Track website usage and performance</li>
                          <li>• Understand user behavior and preferences</li>
                          <li>• Improve website content and functionality</li>
                          <li>• Generate statistical reports</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-medium text-gray-900 mb-2">Third-party Services:</h4>
                          <p className="text-sm text-gray-600">
                            We use Google Analytics to collect this information. You can learn more about 
                            Google's privacy practices at{' '}
                            <a href="https://policies.google.com/privacy" className="text-accent-600 underline" target="_blank" rel="noopener noreferrer">
                              https://policies.google.com/privacy
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3 flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                        Marketing Cookies (Optional)
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        These cookies are used to deliver personalized content and advertisements. 
                        Currently, we do not use marketing cookies, but this may change in the future.
                      </p>
                      <div className="bg-gray-50 rounded p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Future Use:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Personalized content delivery</li>
                          <li>• Targeted advertising</li>
                          <li>• Social media integration</li>
                          <li>• Cross-platform tracking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Managing Your Cookie Preferences */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Managing Your Cookie Preferences</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    You have several options for managing cookies on our website:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                      <h3 className="font-semibold text-navy-900 mb-2">Cookie Consent Banner</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        When you first visit our website, you'll see a cookie consent banner that allows you to 
                        accept all cookies, reject optional cookies, or manage your preferences in detail.
                      </p>
                    </div>
                    
                    <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                      <h3 className="font-semibold text-navy-900 mb-2">Browser Settings</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Most web browsers allow you to control cookies through their settings. You can set your 
                        browser to refuse cookies or to alert you when cookies are being sent.
                      </p>
                    </div>
                    
                    <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                      <h3 className="font-semibold text-navy-900 mb-2">Opt-out Links</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        For analytics cookies, you can opt out directly:
                      </p>
                      <ul className="text-sm text-gray-600">
                        <li>
                          • Google Analytics:{' '}
                          <a 
                            href="https://tools.google.com/dlpage/gaoptout" 
                            className="text-accent-600 underline"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Browser Add-on
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Third-party Cookies */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Third-party Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our website may contain embedded content or services from third parties. These services 
                    may set their own cookies when you interact with them:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-navy-900 mb-3">Current Third-party Services:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="font-medium text-navy-900 w-32 flex-shrink-0">Google Analytics:</span>
                        <span className="text-gray-600 text-sm">Web analytics service (only with your consent)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-navy-900 w-32 flex-shrink-0">Calendly:</span>
                        <span className="text-gray-600 text-sm">Appointment scheduling widget (necessary for functionality)</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Cookie Retention */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Cookie Retention</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Different cookies are stored for different periods:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-navy-900 mb-2">Session Cookies</h3>
                      <p className="text-gray-600 text-sm">
                        Deleted when you close your browser
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-navy-900 mb-2">Persistent Cookies</h3>
                      <p className="text-gray-600 text-sm">
                        Stored for up to 2 years or until you delete them
                      </p>
                    </div>
                  </div>
                </section>

                {/* Updates to This Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Updates to This Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for legal, operational, or regulatory reasons. We encourage you to review this policy 
                    periodically to stay informed about our use of cookies.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                  </p>
                  
                  <div className="bg-navy-50 rounded-lg p-6">
                    <div className="space-y-2">
                      <p className="text-navy-900 font-medium">RYFT</p>
                      <p className="text-gray-600">Email: hello@ryft.com</p>
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