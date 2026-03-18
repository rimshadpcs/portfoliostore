import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const JustLogPage = () => {
  const router = useRouter();
  
  // Same theme system as your main portfolio
  const themes: Record<string, any> = {
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
    },
    midnight: {
      bg: "bg-[#1a1a1a]",
      card: "bg-[#2a2a2a]",
      sidebar: "bg-[#1a1a1a]",
      content: "bg-[#2a2a2a]",
      text: "text-white",
      textLight: "text-gray-400",
      accent: "bg-white",
      accentText: "text-black",
      name: "Midnight"
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
    window.open('https://play.google.com/store/apps/details?id=com.rimapps.justlog', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/workout-tracking-justlog/id6749898793', '_blank');
  };

  const handleReadMoreClick = () => {
    window.open('https://justlog.app', '_blank');
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-['Outfit',_sans-serif]`}>
      {/* Header with back button */}
      <div className={`p-4 md:p-6 border-b border-white/20 ${theme.bg} z-20`}>
        <button
          onClick={handleBackClick}
          className="flex items-center hover:opacity-80 transition"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span>Home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        {/* Hero Section - Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-green-100 rounded-2xl p-8 mb-6 shadow-lg">
            <img 
              src="/images/gymloglogo.png" 
              alt="Just Log" 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Just Log</h1>
          <p className={`${theme.textLight} text-lg md:text-xl leading-relaxed`}>
            Fitness Tracking Made Simple
          </p>
        </div>

        {/* Actions Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl mx-auto items-center justify-center">
          <button
            onClick={handleReadMoreClick}
            className={`bg-transparent border-2 border-current ${theme.text} px-8 h-[48px] rounded-lg font-medium hover:opacity-80 transition flex items-center justify-center text-base shadow-sm whitespace-nowrap`}
          >
            More Info
          </button>

          <button
            onClick={handlePlaystoreClick}
            className="hover:opacity-90 transition flex-shrink-0 flex items-center h-[48px]"
          >
            <img src="/images/google-play.png" alt="Get it on Google Play" className="h-full w-auto object-contain" />
          </button>
          
          <button
            onClick={handleAppStoreClick}
            className="hover:opacity-90 transition flex-shrink-0 flex items-center h-[48px]"
          >
            <img src="/images/app-store.png" alt="Download on the App Store" className="h-full w-auto object-contain" />
          </button>
        </div>

        {/* Divider */}
        <div className={`border-t ${theme.textLight} border-opacity-30 mb-10`}></div>

        {/* About Section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">About the app</h2>
          <p className={`${theme.textLight} text-base md:text-lg leading-relaxed text-center`}>
            Just Log is a minimalist workout tracker built for people frustrated with bloated fitness apps. Workout logging is essential for progress
            - you can't improve what you don't measure, and gym memory is notoriously unreliable. While competitors add social features, meal planning,
            and AI coaches, Just Log focuses on one thing: efficient workout logging. The app includes 800+ exercises, custom routine creation, smart search,
            PR tracking, and color-coded calendar history. Users can track weights, time-based exercises like planks, distance workouts, and daily bodyweight counters.
            True to its minimalist philosophy, Just Log doesn't send notifications, collect unnecessary data, or interrupt your day - keeping everything simple and distraction-free.
            Built with a "just log, no fluff" approach, it offers three clean themes and a freemium £1.79/month versus $9.99 for feature-heavy alternatives. Developed in public over 18 days with real gym testing,
            every feature solves actual workout problems rather than adding complexity. The app targets serious lifters who want to track progress efficiently without fighting cluttered interfaces, annoying notifications, or paying for unused features.
          </p>
        </div>


      </div>
    </div>
  );
};

export default JustLogPage;