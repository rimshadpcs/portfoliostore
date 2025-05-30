import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

const AlifbaPage = () => {
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
    window.open('https://play.google.com/store/apps/details?id=com.alifba.alifba', '_blank');
  };

  const handlePrivacyClick = () => {
    router.push('/privacy/alifba');
  };

  const handleTermsClick = () => {
    router.push('/terms/alifba');
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-mono`}>
      {/* Header with back button */}
      <div className={`p-3 md:p-4 border-b border-gray-200 ${theme.bg}/90 backdrop-blur-sm`}>
        <button
          onClick={handleBackClick}
          className="flex items-center hover:opacity-80 transition text-sm"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Hero Section - Logo and Title */}
        <div className="text-center mb-6">
          <div className="inline-block bg-green-100 rounded-xl p-4 sm:p-5 mb-4 shadow-md">
          <img
  src="/images/Alifba-profile-pic.png"
  alt="Alifba"
  className="w-32 h-32 sm:w-32 sm:h-32 object-contain"
/>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Alifba</h1>
          <p className={`${theme.textLight} text-sm sm:text-base md:text-lg leading-relaxed px-2`}>
           Duolingo for Muslim kids, making Islamic learning fun and easy for children aged 5-13.
          </p>
        </div>

        {/* Download Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-md mx-auto px-2">
          <button
            onClick={handlePlaystoreClick}
            className={`${theme.accent} ${theme.accentText} py-2 px-4 rounded-md text-center font-medium hover:opacity-90 transition flex-1 text-xs sm:text-sm shadow-md`}
          >
            Download Android
          </button>
          
          <button
            className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md text-center font-medium cursor-not-allowed flex-1 text-xs sm:text-sm"
            disabled
          >
            iOS Coming Soon
          </button>
        </div>

        {/* Divider */}
        <div className={`border-t ${theme.textLight} border-opacity-30 mb-8 mx-2`}></div>

        {/* About Section */}
        <div className="mb-8 px-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">About the app</h2>
          <p className={`${theme.textLight} text-xs sm:text-sm md:text-base leading-relaxed text-center`}>
          Alifba is like Duolingo for Muslim kids, making Islamic learning fun and easy for children aged 5-13. We've created a gentle, engaging way for young learners to discover their faith through bite-sized lessons, interactive games, and beautiful stories.
Children love our friendly characters who guide them through each lesson, while parents appreciate how the app makes Islamic education feel natural and enjoyable. With fun quizzes, Arabic letter tracing, and narrated stories about prophets and Islamic history, kids can learn at their own pace in a safe, ad-free environment.
Every lesson includes high-quality audio, so children can listen and learn even if they're still developing their reading skills. The app rewards progress with badges and achievements, making daily learning something kids actually look forward to. We've designed Alifba to help families share the beauty of Islam with their children in a way that feels modern, accessible, and genuinely engaging.
Whether your child is just beginning to learn about their faith or wants to deepen their understanding, Alifba provides a warm, supportive space where Islamic education comes alive through interactive experiences that children love and parents trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlifbaPage;