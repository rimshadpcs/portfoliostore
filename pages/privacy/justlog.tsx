import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

const JustLogPrivacy = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy for Just Log</h1>
        
        <div className={`${theme.textLight} space-y-6 leading-relaxed`}>
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Our Commitment to Privacy</h2>
            <p>
              Just Log is built with privacy at its core. We believe your workout data should remain yours, 
              and we've designed our app to collect only the minimal information necessary to provide our service.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Information We Collect</h2>
            <h3 className={`text-lg font-semibold ${theme.text} mb-2`}>Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Email address</strong>: Required for account creation and subscription management</li>
              <li><strong>Name</strong>: Used for personalization within the app</li>
              <li><strong>Workout data</strong>: Exercise logs, routines, and progress data you create</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Information We Do NOT Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Location data</li>
              <li>Device contacts</li>
              <li>Camera or microphone access</li>
              <li>Social media information</li>
              <li>Health data from other apps</li>
              <li>Browsing history</li>
              <li>Any data from other apps on your device</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>How We Use Your Information</h2>
            <p>We use your information solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide the Just Log service</li>
              <li>Manage your account and subscription</li>
              <li>Sync your workout data across your devices</li>
              <li>Provide customer support when requested</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>What We Don't Do</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No notifications</strong>: We don't send push notifications, emails, or any form of marketing communications</li>
              <li><strong>No data selling</strong>: We never sell, rent, or share your personal information with third parties</li>
              <li><strong>No tracking</strong>: We don't track your behavior outside the app</li>
              <li><strong>No analytics</strong>: We don't use third-party analytics services that collect personal data</li>
              <li><strong>No social features</strong>: We don't share your data with social networks</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Data Storage and Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your data is stored securely using industry-standard encryption</li>
              <li>We use Firebase for secure cloud storage and synchronization</li>
              <li>Your workout data is only accessible by you</li>
              <li>We implement reasonable security measures to protect your information</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your data is retained for as long as your account is active</li>
              <li>When you delete your account, all associated data is permanently removed</li>
              <li>You can export your workout data at any time before account deletion</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and all associated data</li>
              <li>Export your workout data</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Children's Privacy</h2>
            <p>
              Just Log is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Changes to This Policy</h2>
            <p>
              We may update this privacy policy occasionally. Any changes will be posted in the app 
              and on our website. Continued use of the app after changes constitutes acceptance of 
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${theme.text} mb-3`}>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or your data, contact us at: 
              <a href="mailto:rimshadpcs@gmail.com" className={`ml-1 ${theme.text} hover:opacity-80 underline`}>
                rimshadpcs@gmail.com
              </a>
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

export default JustLogPrivacy;