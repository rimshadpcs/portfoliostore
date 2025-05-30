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
    // Replace with your actual Play Store URL for Alifba
    window.open('https://play.google.com/store/apps/details?id=your.alifba.app', '_blank');
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
      <div className="max-w-2xl mx-auto p-6 md:p-8">
        {/* App Icon and Title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 rounded-full p-8 mb-6">
            <img 
              src="/images/Alifba-profile-pic.png" 
              alt="Alifba" 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Alifba</h1>
          <p className={`${theme.textLight} text-lg`}>Learn Arabic the Smart Way</p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Play Store Button */}
          <button
            onClick={handlePlaystoreClick}
            className={`${theme.accent} ${theme.accentText} py-3 px-6 rounded-lg text-center font-medium hover:opacity-90 transition flex-1`}
          >
            Download Android
          </button>
          
          {/* App Store Button - Coming Soon */}
          <button
            className="bg-gray-300 text-gray-600 py-3 px-6 rounded-lg text-center font-medium cursor-not-allowed flex-1"
            disabled
          >
            iOS Coming Soon
          </button>
        </div>

        {/* About the App */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">About the app</h2>
          <p className={`${theme.textLight} leading-relaxed`}>
            Alifba is an innovative educational app designed to make learning Arabic engaging and effective. 
            Using AI-powered lessons and interactive exercises, Alifba helps users of all ages master the Arabic alphabet, 
            pronunciation, and basic vocabulary. The app combines traditional learning methods with modern technology 
            to create a comprehensive Arabic learning experience.
          </p>
        </div>

        {/* Get Help Link */}
        <div className="mb-8">
          <a 
            href="mailto:rimshadpcs@gmail.com" 
            className={`${theme.textLight} hover:opacity-80 transition inline-flex items-center`}
          >
            Get Help 
            <span className="ml-2">↗</span>
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handlePrivacyClick}
            className={`${theme.accent} ${theme.accentText} py-2 px-4 rounded-lg text-center font-medium hover:opacity-90 transition flex-1`}
          >
            Privacy Policy
          </button>
          
          <button
            onClick={handleTermsClick}
            className={`${theme.accent} ${theme.accentText} py-2 px-4 rounded-lg text-center font-medium hover:opacity-90 transition flex-1`}
          >
            Terms of Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlifbaPage;