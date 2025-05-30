import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

const JustLogPage = () => {
  const router = useRouter();
  
  // Same theme system as your main portfolio
  const themes = {
    warmSand: {
      bg: "bg-[#f6f1eb]",
      card: "bg-white", 
      sidebar: "bg-[#f6f1eb]",
      content: "bg-[#eee5db]",
      text: "text-[#3d3a38]",
      textLight: "text-[#6d635b]",
      accent: "bg-[#3d3a38]",
      accentText: "text-white",
      name: "Warm Sand"
    },
    lavender: {
      bg: "bg-[#be95be]",
      card: "bg-white", 
      sidebar: "bg-[#be95be]",
      content: "bg-[#d3b7d3]",
      text: "text-[#3d2f3d]",
      textLight: "text-[#614961]",
      accent: "bg-[#3d2f3d]",
      accentText: "text-white",
      name: "Lavender Dreams"
    },
    ocean: {
      bg: "bg-[#71a3c1]",
      card: "bg-white", 
      sidebar: "bg-[#71a3c1]",
      content: "bg-[#91b8d0]",
      text: "text-[#253543]",
      textLight: "text-[#3d5a71]",
      accent: "bg-[#253543]",
      accentText: "text-white",
      name: "Ocean Blue"
    },
    mint: {
      bg: "bg-[#6dbfb8]",
      card: "bg-white", 
      sidebar: "bg-[#6dbfb8]",
      content: "bg-[#90d0ca]",
      text: "text-[#243f3d]",
      textLight: "text-[#3d6b67]",
      accent: "bg-[#243f3d]",
      accentText: "text-white",
      name: "Mint Green"
    },
    forest: {
      bg: "bg-[#75ba75]",
      card: "bg-white", 
      sidebar: "bg-[#75ba75]",
      content: "bg-[#97cc97]",
      text: "text-[#243d24]",
      textLight: "text-[#3d6b3d]",
      accent: "bg-[#243d24]",
      accentText: "text-white",
      name: "Forest Green"
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
    router.push('/');
  };

  const handlePlaystoreClick = () => {
    // Replace with your actual Play Store URL
    window.open('https://play.google.com/store/apps/details?id=your.justlog.app', '_blank');
  };

  const handlePrivacyClick = () => {
    router.push('/privacy/justlog');
  };

  const handleTermsClick = () => {
    router.push('/terms/justlog');
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-mono`}>
      {/* Header with back button */}
      <div className={`p-4 md:p-6 border-b border-gray-200 ${theme.bg}/90 backdrop-blur-sm`}>
        <button
          onClick={handleBackClick}
          className="flex items-center hover:opacity-80 transition"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span>Home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
        {/* Hero Section - Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-green-100 rounded-2xl p-6 sm:p-8 mb-6 shadow-lg">
            <img 
              src="/images/gymloglogo.png" 
              alt="Just Log" 
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Just Log</h1>
          <p className={`${theme.textLight} text-base sm:text-lg md:text-xl leading-relaxed px-4`}>
            Fitness Tracking Made Simple
          </p>
        </div>

        {/* Download Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-lg mx-auto px-4">
          <button
            onClick={handlePlaystoreClick}
            className={`${theme.accent} ${theme.accentText} py-3 px-6 rounded-lg text-center font-medium hover:opacity-90 transition flex-1 text-sm sm:text-base shadow-lg`}
          >
            Download Android
          </button>
          
          <button
            className="bg-gray-300 text-gray-600 py-3 px-6 rounded-lg text-center font-medium cursor-not-allowed flex-1 text-sm sm:text-base"
            disabled
          >
            iOS Coming Soon
          </button>
        </div>

        {/* Divider */}
        <div className={`border-t ${theme.textLight} border-opacity-30 mb-10 mx-4`}></div>

        {/* About Section */}
        <div className="mb-10 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">About the app</h2>
          <p className={`${theme.textLight} text-sm sm:text-base md:text-lg leading-relaxed text-center`}>
            Just Log is a minimalist workout tracker built for people frustrated with bloated fitness apps. Workout logging is essential for progress
            - you can't improve what you don't measure, and gym memory is notoriously unreliable. While competitors add social features, meal planning,
            and AI coaches, Just Log focuses on one thing: efficient workout logging. The app includes 800+ exercises, custom routine creation, smart search,
            PR tracking, and color-coded calendar history. Users can track weights, time-based exercises like planks, distance workouts, and daily bodyweight counters.
            True to its minimalist philosophy, Just Log doesn't send notifications, collect unnecessary data, or interrupt your day - keeping everything simple and distraction-free.
            Built with a "just log, no fluff" approach, it offers three clean themes and a freemium £1.79/month versus $9.99 for feature-heavy alternatives. Developed in public over 18 days with real gym testing,
            every feature solves actual workout problems rather than adding complexity. The app targets serious lifters who want to track progress efficiently without fighting cluttered interfaces, annoying notifications, or paying for unused features.
          </p>
        </div>

        {/* Divider */}
        <div className={`border-t ${theme.textLight} border-opacity-30 mb-10 mx-4`}></div>

        {/* Action Buttons Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-4">
          <button
            onClick={handlePrivacyClick}
            className={`${theme.accent} ${theme.accentText} py-2 sm:py-3 px-2 sm:px-4 rounded-lg text-center font-medium hover:opacity-90 transition text-xs sm:text-sm lg:text-base`}
          >
            Privacy Policy
          </button>
          
          <button
            onClick={handleTermsClick}
            className={`${theme.accent} ${theme.accentText} py-2 sm:py-3 px-2 sm:px-4 rounded-lg text-center font-medium hover:opacity-90 transition text-xs sm:text-sm lg:text-base`}
          >
            Terms of Service
          </button>

          <a
            href="https://tally.so/r/w4y9ao"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black py-2 sm:py-3 px-2 sm:px-4 rounded-lg text-center font-medium hover:bg-gray-100 transition border border-gray-200 text-xs sm:text-sm lg:text-base"
          >
            Feedback
          </a>
          
          <a
            href="https://tally.so/r/wzoGEE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black py-2 sm:py-3 px-2 sm:px-4 rounded-lg text-center font-medium hover:bg-gray-100 transition border border-gray-200 text-xs sm:text-sm lg:text-base"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default JustLogPage;