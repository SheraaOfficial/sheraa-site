
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold text-sheraa-primary mb-8">Privacy Policy</h1>
        </div>
        
        <div className="prose max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Last Updated: May 1, 2025
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            Sharjah Entrepreneurship Center (Sheraa) is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-gray-600 mb-4">
            By accessing or using Sheraa's services, you consent to the practices described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-3">Personal Information</h3>
          <p className="text-gray-600 mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Register for our programs or events</li>
            <li>Apply for membership or partnerships</li>
            <li>Submit inquiries through our contact forms</li>
            <li>Subscribe to newsletters or updates</li>
            <li>Create user accounts or profiles</li>
          </ul>
          <p className="text-gray-600 mb-4">
            This information may include your name, email address, phone number, company details, educational background, 
            professional experience, and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
          <p className="text-gray-600 mb-4">
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referring websites</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Providing and improving our services</li>
            <li>Processing applications for programs and membership</li>
            <li>Communicating with you about events, programs, and updates</li>
            <li>Analyzing website usage and enhancing user experience</li>
            <li>Complying with legal obligations</li>
            <li>Managing our relationship with you</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">4. Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Service providers who perform services on our behalf</li>
            <li>Partners and sponsors (with your consent)</li>
            <li>Government entities when required by law</li>
            <li>Other participants in our programs (limited information and with consent)</li>
          </ul>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">5. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Accessing your personal information</li>
            <li>Correcting inaccurate information</li>
            <li>Deleting your information</li>
            <li>Restricting or objecting to processing</li>
            <li>Data portability</li>
            <li>Withdrawing consent</li>
          </ul>
          <p className="text-gray-600 mb-4">
            To exercise these rights, please contact us using the information provided at the end of this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">6. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
            or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">7. Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last Updated" 
            date at the top of this policy. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">8. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-gray-600 mb-4">
            Email: <a href="mailto:privacy@sheraa.ae" className="text-sheraa-primary hover:underline">privacy@sheraa.ae</a><br />
            Phone: +971 6 509 4000<br />
            Address: Sharjah Research Technology and Innovation Park, Sharjah, UAE
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
