import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useRouter } from 'next/router';

const Portfolio = () => {
  const router = useRouter();
  
  // Theme definitions
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
  
  // Function to get a random theme
  const getRandomTheme = () => {
    const themeKeys = Object.keys(themes);
    const randomIndex = Math.floor(Math.random() * themeKeys.length);
    return themeKeys[randomIndex];
  };
  
  // Set initial theme to a random one
  const [activeTheme, setActiveTheme] = useState('warmSand');
  
  // Change theme on page load/refresh
  useEffect(() => {
    setActiveTheme(getRandomTheme());
  }, []);
  
  // Use the active theme
  const theme = themes[activeTheme];
  
  // Count user interactions to change theme
  const [interactionCount, setInteractionCount] = useState(0);
  
  // Change theme after certain number of interactions
  useEffect(() => {
    if (interactionCount > 0 && interactionCount % 3 === 0) {
      setActiveTheme(getRandomTheme());
    }
  }, [interactionCount]);
  
  // Track user interactions
  const handleInteraction = () => {
    setInteractionCount(prev => prev + 1);
  };

  // Handle project click
  const handleProjectClick = (projectId, e) => {
    e.stopPropagation();
    if (projectId === 'alifba-landing') {
      // Redirect to external website
      window.open('https://alifba.xyz', '_blank');
    } else {
      // Navigate to internal project page
      router.push(`/projects/${projectId}`);
    }
  };

  return (
    <div 
      className={`flex flex-col min-h-screen ${theme.bg} ${theme.text} font-mono`}
      onClick={handleInteraction} // Change theme on any click
    >
      {/* Navigation */}
      <nav className={`p-3 md:p-4 flex items-center justify-between border-b border-gray-200 sticky top-0 ${theme.bg}/90 backdrop-blur-sm z-10`}>
        <a href="#" className="text-lg font-bold hover:opacity-80 transition">rimshad.dev</a>
        <div className="hidden md:flex">
          <a href="#" className="ml-4 hover:opacity-80 transition text-sm">Home</a>
          <a href="#about" className="ml-4 hover:opacity-80 transition text-sm">About</a>
          <a href="#projects" className="ml-4 hover:opacity-80 transition text-sm">Projects</a>
          <a href="#articles" className="ml-4 hover:opacity-80 transition text-sm">Articles</a>
          
          {/* Current Theme Indicator */}
          <div className="ml-4 flex items-center">
            <span className="text-xs">{theme.name}</span>
            <div className={`ml-1 w-2 h-2 rounded-full ${theme.accent}`}></div>
          </div>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Profile */}
          <div className={`md:w-2/5 p-4 md:p-6 flex items-start justify-center ${theme.sidebar}`}>
            <div className="max-w-sm sticky top-24">
              <div className="rounded-2xl overflow-hidden mb-4 bg-gray-100 max-w-xs mx-auto shadow-md">
                <img 
                  src="/images/profile.png" 
                  alt="Profile" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <h1 className="text-center text-xl md:text-2xl font-bold mb-1">hi, i'm Rimshad</h1>
              <p className="text-center mb-3 text-sm">welcome to my app store</p>
              
              {/* Contact Button */}
              <div className="mb-4">
                <a 
                  href="mailto:rimshadpcs@gmail.com" 
                  className={`${theme.accent} ${theme.accentText} py-1.5 px-4 rounded-full text-xs flex items-center justify-center mx-auto w-auto hover:opacity-90 transition shadow`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Me</span>
                </a>
              </div>
              
              <div id="about" className="mb-6">
                <h2 className="text-lg font-bold mb-3 inline-flex items-center">
                  <span className={`w-6 h-6 inline-flex items-center justify-center ${theme.accent} ${theme.accentText} rounded-full mr-2 text-xs`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  About Me
                </h2>
                <p className={`mb-3 ${theme.textLight} leading-relaxed text-sm`}>
                    Hey there! I'm passionate about building AI agents and mobile apps that actually solve real problems. 
                    I've spent the last few years crafting mobile apps and other applications - I build in public, 
                    and I also work quietly behind the scenes on stealth projects.
                </p>
                <p className={`mb-3 ${theme.textLight} leading-relaxed text-sm`}>
                    My journey started with a CS degree, followed by a Masters in Data Science and AI. I love blending 
                    technical skills with creative thinking to create digital experiences that feel special.
                    You'll also find me contributing to open source - it's my way of giving back to the 
                    community that's taught me so much. And I've written a few articles along the way.
                </p>
              </div>
              
              <button 
                className={`${theme.accent} ${theme.accentText} py-2 px-6 rounded-full text-sm flex items-center justify-between w-full mb-4 hover:opacity-90 transition shadow`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent double counting the click
                  setActiveTheme(getRandomTheme()); // Change theme on button click
                }}
              >
                <span>Change Theme</span>
                <span>→</span>
              </button>
              
              <div className="flex space-x-3 mt-4 justify-center">
                <a href="https://github.com/rimshadpcs/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition shadow-sm">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-rimshad/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition shadow-sm">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/mohamedrimshad/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition shadow-sm">
                  <Instagram size={18} />
                </a>
                <a href="https://x.com/RIMSHADPCS" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition shadow-sm">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Projects and Articles */}
          <div className={`md:w-3/5 ${theme.content} py-4 md:py-6 px-4 md:px-6`} id="projects">
            <div className="max-w-2xl mx-auto">
              {/* Projects Section */}
              <h2 className="text-lg md:text-xl font-bold mb-4 text-center" id="projects">
                My Projects
              </h2>
              
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                {/* Project 1 - Alifba */}
                <div className="text-center">
                  <div 
                    className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 aspect-square flex items-center justify-center p-2`}
                    onClick={(e) => handleProjectClick('alifba', e)}
                  >
                    <img 
                      src="/images/Alifba-profile-pic.png" 
                      alt="Alifba app" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-xs">Alifba</h3>
                </div>
                
                {/* Project 2 - Just Log (formerly GymLog) */}
                <div className="text-center">
                  <div 
                    className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 aspect-square flex items-center justify-center p-2`}
                    onClick={(e) => handleProjectClick('justlog', e)}
                  >
                    <img 
                      src="/images/gymloglogo.png" 
                      alt="Just Log app" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-xs">Just Log</h3>
                </div>
                
                {/* Project 3 - Alifba Landing */}
                <div className="text-center">
                  <div 
                    className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 aspect-square flex items-center justify-center p-2`}
                    onClick={(e) => handleProjectClick('alifba-landing', e)}
                  >
                    <img 
                      src="/images/newlogo.png" 
                      alt="Alifba landing page" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-xs">Alifba Landing</h3>
                </div>

                {/* Project Placeholder - For symmetrical grid */}
                <div className="text-center">
                  <div className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 aspect-square flex items-center justify-center p-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-1/3 h-1/3 text-gray-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-xs">Coming Soon</h3>
                </div>
              </div>
              
              {/* Articles Section */}
              <h2 className="text-lg md:text-xl font-bold mb-4 text-center" id="articles">
                My Articles
              </h2>
              
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                {/* Medium Profile */}
                <div className="text-center col-span-3 md:col-span-4">
                  <a href="https://medium.com/@rimshadmohamed" target="_blank" rel="noopener noreferrer">
                    <div className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 h-12 flex items-center justify-start px-3`}>
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2 shadow-sm">
                        <svg viewBox="0 0 1043.63 592.71" className="w-4 h-4">
                          <g data-name="Layer 2">
                            <g data-name="Layer 1">
                              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="font-medium text-xs">Follow me on Medium</span>
                    </div>
                  </a>
                </div>
                
                {/* Article 1 */}
                <div className="text-center">
                  <a href="https://influencermagazine.uk/2023/10/faith-based-edtech-empowering-kids-and-parents/#google_vignette" target="_blank" rel="noopener noreferrer">
                    <div className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 aspect-square flex items-center justify-center p-2`}>
                      <img
                        src="/images/art1.png"
                        alt="Faith-Based EdTech"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-xs">Faith-Based EdTech</h3>
                  </a>
                </div>
                
                {/* Article 2 */}
                <div className="text-center">
                  <a href="https://www.technology.org/2024/08/10/llm-and-ai-agents-next-frontier-in-edtech/" target="_blank" rel="noopener noreferrer">
                    <div className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 aspect-square flex items-center justify-center p-2`}>
                      <img
                        src="/images/art2.png"
                        alt="AI agents"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-xs">LLM and AI Agents</h3>
                  </a>
                </div>
                
                {/* Article 3 */}
                <div className="text-center">
                  <a href="https://www.technology.org/2024/01/05/how-ai-is-helping-spirituality-and-religious-education-a-new-ai-field-in-the-growing/" target="_blank" rel="noopener noreferrer">
                    <div className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 aspect-square flex items-center justify-center p-2`}>
                      <img
                        src="/images/art3.png"
                        alt="Faith-Based LLM"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-xs">AI in Religious Education</h3>
                  </a>
                </div>

                {/* Article Placeholder */}
                <div className="text-center">
                  <div className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer mb-2 aspect-square flex items-center justify-center p-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-1/3 h-1/3 text-gray-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-xs">Coming Soon</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className={`p-4 text-center border-t border-gray-200 ${theme.bg}`}>
        <p className={`${theme.textLight} text-xs`}>© {new Date().getFullYear()} Rimshad. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;