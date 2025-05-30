import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

const JustLogTerms = () => {
  const router = useRouter();
  
  const themes = {
    warmSand: {
      bg: "bg-[#f6f1eb]",
      text: "text-[#3d3a38]",
      textLight: "text-[#6d635b]",
      accent: "bg-[#3d3a38]",
      accentText: "text-white",
    },
    lavender: {
      bg: "bg-[#be95be]",
      text: "text-[#3d2f3d]",
      textLight: "text-[#614961]",
      accent: "bg-[#3d2f3d]",
      accentText: "text-white",
    },
    ocean: {
      bg: "bg-[#71a3c1]",
      text: "text-[#253543]",
      textLight: "text-[#3d5a71]",
      accent: "bg-[#253543]",
      accentText: "text-white",
    },
    mint: {
      bg: "bg-[#6dbfb8]",
      text: "text-[#243f3d]",
      textLight: "text-[#3d6b67]",
      accent: "bg-[#243f3d]",
      accentText: "text-white",
    },
    forest: {
      bg: "bg-[#75ba75]",
      text: "text-[#243d24]",
      textLight: "text-[#3d6b3d]",
      accent: "bg-[#243d24]",
      accentText: "text-white",
    }
  };

  const getRandomTheme = () => {
    const themeKeys = Object.keys(themes);
    const randomIndex = Math.floor(Math.random() * themeKeys.length);
    return themeKeys[randomIndex];
  };

  const [activeTheme, setActiveTheme] = useState('warmSand');
  
  useEffect(() => {
    setActiveTheme(getRandomTheme());
  }, []);
  
  const theme = themes[activeTheme];

  const handleBackClick = () => {
    router.push('/projects/justlog');
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-mono`}>
      {/* Header */}
      <div className={`p-4 md:p-6 border-b border-gray-200 ${theme.bg}/90 backdrop-blur-sm`}>
        <button
          onClick={handleBackClick}
          className="flex items-center hover:opacity-80 transition"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Just Log</span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service for Just Log</h1>
        
        <div className={`${theme.textLight} space-y-6 leading-relaxed`}>
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Agreement to Terms</h2>
            <p>
              By using Just Log, you agree to these Terms of Service. If you don't agree, please don't use our app.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Description of Service</h2>
            <p>
              Just Log is a minimalist workout logging application that helps users track their exercise routines, 
              progress, and fitness data. The service is provided on a subscription basis.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Account Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide a valid email address and name</li>
              <li>You're responsible for maintaining the security of your account</li>
              <li>You must be at least 13 years old to use Just Log</li>
              <li>One account per person</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Subscription and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Just Log operates on a subscription model (£1.79/month or £17.99/year)</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You can cancel your subscription at any time through your device's app store</li>
              <li>Refunds are handled according to the app store's refund policy</li>
              <li>Price changes will be communicated in advance</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Acceptable Use</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use Just Log only for personal, non-commercial purposes</li>
              <li>Provide accurate information</li>
              <li>Not attempt to hack, reverse engineer, or compromise the app</li>
              <li>Not create multiple accounts to circumvent limitations</li>
              <li>Not use the app for any illegal purposes</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Your Content and Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You retain ownership of all workout data you create</li>
              <li>You're responsible for backing up important data</li>
              <li>You can export your data at any time</li>
              <li>When you delete your account, all data is permanently removed</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Service Availability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We strive for 99% uptime but can't guarantee uninterrupted service</li>
              <li>We may temporarily suspend service for maintenance</li>
              <li>We're not liable for data loss due to service interruptions</li>
              <li>You should regularly export important data</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Limitations of Liability</h2>
            <p>Just Log is provided "as is" without warranties. We're not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any data loss or corruption</li>
              <li>Interruptions to the service</li>
              <li>Any indirect or consequential damages</li>
              <li>Use of the app for medical or health decisions</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Health and Safety Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Just Log is for tracking purposes only, not medical advice</li>
              <li>Consult healthcare professionals before starting exercise programs</li>
              <li>We're not responsible for injuries related to your workouts</li>
              <li>The app doesn't provide fitness or medical guidance</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Just Log and its features are owned by us</li>
              <li>You can't copy, modify, or distribute our app</li>
              <li>You grant us permission to store and sync your workout data</li>
              <li>We don't claim ownership of your personal workout data</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which explains how we handle your information.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can delete your account at any time</li>
              <li>We may terminate accounts that violate these terms</li>
              <li>Upon termination, your data will be deleted</li>
              <li>These terms survive account termination where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Changes to Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may update these terms occasionally</li>
              <li>Changes will be posted in the app</li>
              <li>Continued use after changes means you accept the updated terms</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Governing Law</h2>
            <p>
              These terms are governed by applicable law, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Contact Information</h2>
            <p>
              Questions about these terms? Contact us at: 
              <a href="mailto:rimshadpcs@gmail.com" className={`ml-1 ${theme.text} hover:opacity-80 underline`}>
                rimshadpcs@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Entire Agreement</h2>
            <p>
              These Terms of Service, along with our Privacy Policy, constitute the entire agreement between you and Just Log.
            </p>
          </section>

          <p className="text-sm italic">
            <em>Last updated: {new Date().toLocaleDateString()}</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JustLogTerms;