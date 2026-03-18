import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useRouter } from 'next/router';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } }
};

const TiltCard = ({ children, onClick, className, innerClassName = "w-full h-full flex items-center justify-center" }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={(e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`cursor-pointer ${className}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className={innerClassName}>
        {children}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const router = useRouter();

  // Theme definitions
  const themes: Record<string, any> = {
    warmSand: {
      bg: "from-[#f6f1eb] to-[#e6dfd6]",
      card: "bg-white/40",
      sidebar: "bg-[#f6f1eb]/80",
      content: "bg-[#eee5db]/60",
      text: "text-[#3d3a38]",
      textLight: "text-[#6d635b]",
      accent: "bg-[#3d3a38]",
      accentText: "text-white",
      name: "Warm Sand",
      blobColor: "bg-[#d9b89e]"
    },
    lavender: {
      bg: "from-[#be95be] to-[#a67ba6]",
      card: "bg-white/30",
      sidebar: "bg-[#be95be]/80",
      content: "bg-[#d3b7d3]/60",
      text: "text-[#3d2f3d]",
      textLight: "text-[#614961]",
      accent: "bg-[#3d2f3d]",
      accentText: "text-white",
      name: "Lavender Dreams",
      blobColor: "bg-[#8e6b8e]"
    },
    ocean: {
      bg: "from-[#71a3c1] to-[#5d8aa6]",
      card: "bg-white/30",
      sidebar: "bg-[#71a3c1]/80",
      content: "bg-[#91b8d0]/60",
      text: "text-[#253543]",
      textLight: "text-[#3d5a71]",
      accent: "bg-[#253543]",
      accentText: "text-white",
      name: "Ocean Blue",
      blobColor: "bg-[#4e7da1]"
    },
    mint: {
      bg: "from-[#6dbfb8] to-[#56a69e]",
      card: "bg-white/30",
      sidebar: "bg-[#6dbfb8]/80",
      content: "bg-[#90d0ca]/60",
      text: "text-[#243f3d]",
      textLight: "text-[#3d6b67]",
      accent: "bg-[#243f3d]",
      accentText: "text-white",
      name: "Mint Green",
      blobColor: "bg-[#4e968f]"
    },
    forest: {
      bg: "from-[#75ba75] to-[#5e9e5e]",
      card: "bg-white/30",
      sidebar: "bg-[#75ba75]/80",
      content: "bg-[#97cc97]/60",
      text: "text-[#243d24]",
      textLight: "text-[#3d6b3d]",
      accent: "bg-[#243d24]",
      accentText: "text-white",
      name: "Forest Green",
      blobColor: "bg-[#528c52]"
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

  // State for sunglasses easter egg
  const [isPanelHovered, setIsPanelHovered] = useState(false);

  // Handle project click
  const handleProjectClick = (projectId, e) => {
    e.stopPropagation();
    if (projectId === 'tabi') {
      // Redirect to external website
      window.open('https://www.youtube.com/watch?v=CY0_cpD24gM', '_blank');
    } else {
      // Navigate to internal project page
      router.push(`/projects/${projectId}`);
    }
  };

  return (
    <div
      className={`relative flex flex-col min-h-screen bg-gradient-to-br ${theme.bg} ${theme.text} font-['Outfit',_sans-serif] overflow-hidden`}
      onClick={handleInteraction} // Change theme on any click
    >
      {/* Dynamic Animated Background Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 pointer-events-none -mr-40 -mt-20 ${theme.blobColor}`}
      />
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -80, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 pointer-events-none -ml-32 -mb-20 ${theme.blobColor}`}
      />

      {/* Navigation */}
      <nav className={`p-3 md:p-4 flex items-center justify-between border-b border-white/20 sticky top-0 bg-transparent backdrop-blur-md z-20`}>
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
          <div 
            className={`md:w-2/5 p-4 md:p-6 flex items-start justify-center ${theme.sidebar}`}
            onMouseEnter={() => setIsPanelHovered(true)}
            onMouseLeave={() => setIsPanelHovered(false)}
          >
            <div className="max-w-sm sticky top-24">
              <div 
                className="relative rounded-2xl overflow-hidden mb-4 bg-gray-100 max-w-xs mx-auto shadow-md group border border-white/20"
              >
                <img
                  src="/images/profile.png"
                  alt="Profile"
                  className="w-full h-auto object-contain"
                />

                {/* Thug Life Glasses Easter Egg */}
                <motion.div
                  initial={{ y: -100, x: 0, opacity: 0 }}
                  animate={isPanelHovered ? "hover" : "initial"}
                  variants={{
                    initial: { y: -100, opacity: 0 },
                    hover: {
                      y: 30, // VERTICAL POSITION
                      x: 10, // HORIZONTAL POSITION (POSITIVE = RIGHT, NEGATIVE = LEFT)
                      opacity: 1,
                      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.1 }
                    }
                  }}
                  className="absolute left-0 right-0 flex justify-center pointer-events-none"
                  style={{ top: 0 }}
                >
                  <img
                    src="/images/dealwithit.png"
                    alt="Deal with it"
                    className="w-1/4 object-contain filter drop-shadow-md"
                  />
                </motion.div>
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

              <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                {/* Project 1 - Alifba */}
                <motion.div 
                  variants={itemVariants} 
                  className="text-center" 
                  style={{ perspective: 1000 }}
                  onMouseEnter={() => setIsPanelHovered(true)}
                  onMouseLeave={() => setIsPanelHovered(false)}
                >
                  <TiltCard
                    className={`rounded-xl overflow-hidden ${theme.card} backdrop-blur-xl border border-white/30 shadow-sm hover:shadow-2xl mb-2 aspect-square`}
                    onClick={(e: any) => handleProjectClick('alifba', e)}
                  >
                    <img
                      src="/images/Alifba-profile-pic.png"
                      alt="Alifba app"
                      className="max-h-[90%] max-w-[90%] object-contain"
                    />
                  </TiltCard>
                  <h3 className="font-medium text-xs">Alifba</h3>
                </motion.div>

                {/* Project 2 - Just Log (formerly GymLog) */}
                <motion.div 
                  variants={itemVariants} 
                  className="text-center" 
                  style={{ perspective: 1000 }}
                  onMouseEnter={() => setIsPanelHovered(true)}
                  onMouseLeave={() => setIsPanelHovered(false)}
                >
                  <TiltCard
                    className={`rounded-xl overflow-hidden ${theme.card} backdrop-blur-xl border border-white/30 shadow-sm hover:shadow-2xl mb-2 aspect-square`}
                    onClick={(e: any) => handleProjectClick('justlog', e)}
                  >
                    <img
                      src="/images/gymloglogo.png"
                      alt="Just Log app"
                      className="max-h-[90%] max-w-[90%] object-contain"
                    />
                  </TiltCard>
                  <h3 className="font-medium text-xs">Just Log</h3>
                </motion.div>

                {/* Project 3 - Tabi */}
                <motion.div 
                  variants={itemVariants} 
                  className="text-center" 
                  style={{ perspective: 1000 }}
                  onMouseEnter={() => setIsPanelHovered(true)}
                  onMouseLeave={() => setIsPanelHovered(false)}
                >
                  <TiltCard
                    className={`rounded-xl overflow-hidden ${theme.card} backdrop-blur-xl border border-white/30 shadow-sm hover:shadow-2xl mb-2 aspect-square`}
                    onClick={(e: any) => handleProjectClick('tabi', e)}
                  >
                    <img
                      src="/images/tabi_icon.jpg"
                      alt="Tabi - Coming soon"
                      className="max-h-[85%] max-w-[85%] object-contain rounded-[20%]"
                    />
                  </TiltCard>
                  <h3 className="font-medium text-xs">Tabi - Coming soon</h3>
                </motion.div>

                {/* Project Placeholder - For symmetrical grid */}
                <motion.div variants={itemVariants} className="text-center" style={{ perspective: 1000 }}>
                  <TiltCard className={`rounded-xl overflow-hidden ${theme.card} backdrop-blur-xl border border-white/30 shadow-sm hover:shadow-2xl mb-2 aspect-square`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-1/3 h-1/3 text-gray-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </TiltCard>
                  <h3 className="font-medium text-xs">Coming Soon</h3>
                </motion.div>
              </motion.div>

              {/* Articles Section */}
              <h2 className="text-lg md:text-xl font-bold mb-4 text-center" id="articles">
                My Articles
              </h2>

              <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                {/* Medium Profile */}
                <motion.div variants={itemVariants} className="text-center col-span-3 md:col-span-4" style={{ perspective: 1000 }}>
                  <a href="https://medium.com/@rimshadmohamed" target="_blank" rel="noopener noreferrer">
                    <TiltCard innerClassName="w-full h-full flex items-center justify-start pl-4" className={`rounded-xl overflow-hidden ${theme.card} backdrop-blur-xl border border-white/30 shadow-sm hover:shadow-2xl mb-2 h-12 w-full block`}>
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 shadow-sm flex-shrink-0">
                        <svg viewBox="0 0 1043.63 592.71" className="w-4 h-4">
                          <g data-name="Layer 2">
                            <g data-name="Layer 1">
                              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="font-medium text-xs whitespace-nowrap">Follow me on Medium</span>
                    </TiltCard>
                  </a>
                </motion.div>

                {/* Article 1 */}
                <motion.div 
                  variants={itemVariants} 
                  className="text-center" 
                  style={{ perspective: 1000 }}
                  onMouseEnter={() => setIsPanelHovered(true)}
                  onMouseLeave={() => setIsPanelHovered(false)}
                >
                  <a href="https://influencermagazine.uk/2023/10/faith-based-edtech-empowering-kids-and-parents/#google_vignette" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <TiltCard className={`rounded-xl overflow-hidden ${theme.card} backdrop-blur-xl border border-white/30 shadow-sm hover:shadow-2xl mb-2 aspect-square`}>
                      <img src="/images/art1.png" alt="Faith-Based EdTech" className="max-h-[90%] max-w-[90%] object-contain" />
                    </TiltCard>
                    <h3 className="font-medium text-xs">Faith-Based EdTech</h3>
                  </a>
                </motion.div>

                {/* Article 2 */}
                <motion.div 
                  variants={itemVariants} 
                  className="text-center" 
                  style={{ perspective: 1000 }}
                  onMouseEnter={() => setIsPanelHovered(true)}
                  onMouseLeave={() => setIsPanelHovered(false)}
                >
                  <a href="https://www.technology.org/2024/08/10/llm-and-ai-agents-next-frontier-in-edtech/" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <TiltCard className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-lg mb-2 aspect-square`}>
                      <img src="/images/art2.png" alt="AI agents" className="max-h-[90%] max-w-[90%] object-contain" />
                    </TiltCard>
                    <h3 className="font-medium text-xs">LLM and AI Agents</h3>
                  </a>
                </motion.div>

                {/* Article 3 */}
                <motion.div 
                  variants={itemVariants} 
                  className="text-center" 
                  style={{ perspective: 1000 }}
                  onMouseEnter={() => setIsPanelHovered(true)}
                  onMouseLeave={() => setIsPanelHovered(false)}
                >
                  <a href="https://www.technology.org/2024/01/05/how-ai-is-helping-spirituality-and-religious-education-a-new-ai-field-in-the-growing/" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <TiltCard className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-lg mb-2 aspect-square`}>
                      <img src="/images/art3.png" alt="Faith-Based LLM" className="max-h-[90%] max-w-[90%] object-contain" />
                    </TiltCard>
                    <h3 className="font-medium text-xs">AI in Religious Education</h3>
                  </a>
                </motion.div>

                {/* Article Placeholder */}
                <motion.div variants={itemVariants} className="text-center" style={{ perspective: 1000 }}>
                  <TiltCard className={`rounded-xl overflow-hidden ${theme.card} shadow-sm hover:shadow-lg mb-2 aspect-square`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-1/3 h-1/3 text-gray-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </TiltCard>
                  <h3 className="font-medium text-xs">Coming Soon</h3>
                </motion.div>
              </motion.div>
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