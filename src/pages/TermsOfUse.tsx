
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-sheraa-primary mb-8">Terms of Use</h1>
        </div>
        
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Last Updated: May 1, 2025
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing or using the Sharjah Entrepreneurship Center (Sheraa) website and services, you agree to be bound by these 
            Terms of Use. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">2. Description of Services</h2>
          <p className="text-gray-600 mb-4">
            Sheraa provides various services to entrepreneurs and startups, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Entrepreneurship programs and incubation</li>
            <li>Mentorship and advisory services</li>
            <li>Networking and community events</li>
            <li>Online resources and educational content</li>
            <li>Funding opportunities and investor connections</li>
          </ul>
          <p className="text-gray-600 mb-4">
            These services may be subject to additional terms and conditions, which will be communicated to you upon enrollment 
            or participation.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">3. User Conduct</h2>
          <p className="text-gray-600 mb-4">
            When using our website and services, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Comply with all applicable laws and regulations</li>
            <li>Provide accurate and complete information</li>
            <li>Respect the intellectual property rights of others</li>
            <li>Not engage in any activity that could damage, disable, or impair our services</li>
            <li>Not attempt to gain unauthorized access to any part of our services</li>
            <li>Not use our services for any illegal or unauthorized purpose</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">4. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content on the Sheraa website, including text, graphics, logos, images, audio, video, and software, is the property 
            of Sheraa or its content suppliers and is protected by international copyright laws. You may not copy, reproduce, distribute, 
            transmit, modify, create derivative works, or publicly display any content without prior written permission from Sheraa.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">5. Program Applications and Eligibility</h2>
          <p className="text-gray-600 mb-4">
            Applications to Sheraa programs are subject to eligibility criteria and evaluation processes. Sheraa reserves the right 
            to accept or reject any application at its sole discretion. Acceptance into any program does not guarantee success or 
            specific outcomes for your business venture.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">6. Confidentiality</h2>
          <p className="text-gray-600 mb-4">
            We respect the confidentiality of information shared by users and program participants. However, unless explicitly 
            stated in a separate confidentiality agreement, information shared with Sheraa should not be assumed to be treated 
            as confidential.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">7. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            Sheraa provides its services on an "as is" and "as available" basis. We do not make any warranties, expressed or implied, 
            regarding the reliability, accuracy, or availability of our services. In no event shall Sheraa be liable for any direct, 
            indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">8. Links to Third-Party Websites</h2>
          <p className="text-gray-600 mb-4">
            Our website may contain links to third-party websites. These links are provided for your convenience only and do not 
            signify our endorsement of these websites. We have no control over the content of linked websites and are not responsible 
            for their content or privacy practices.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">9. Modifications to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on our 
            website. Your continued use of our services after changes are posted constitutes your acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">10. Governing Law</h2>
          <p className="text-gray-600 mb-4">
            These Terms of Use shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any 
            disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of Sharjah.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">11. Contact Information</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or concerns about these Terms of Use, please contact us at:
          </p>
          <p className="text-gray-600 mb-4">
            Email: <a href="mailto:info@sheraa.ae" className="text-sheraa-primary hover:underline">info@sheraa.ae</a><br />
            Phone: +971 6 509 4000<br />
            Address: Sharjah Research Technology and Innovation Park, Sharjah, UAE
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
