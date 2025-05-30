import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  theme: any;
  onBack: () => void;
  project: {
    id: string;
    name: string;
    logo: string;
    description: string;
    about: string;
    playstoreUrl?: string;
    appstoreUrl?: string;
    privacyPolicy?: string;
    termsOfService?: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ theme, onBack, project }) => {
  const handlePlaystoreClick = () => {
    if (project.playstoreUrl) {
      window.open(project.playstoreUrl, '_blank');
    }
  };

  const handleAppstoreClick = () => {
    // For now, just show "Coming Soon" - no action
    console.log('App Store - Coming Soon');
  };

  const handlePrivacyClick = () => {
    if (project.privacyPolicy) {
      // For now, just log - later we'll navigate to privacy page
      console.log('Privacy Policy clicked');
    }
  };

  const handleTermsClick = () => {
    if (project.termsOfService) {
      // For now, just log - later we'll navigate to terms page
      console.log('Terms of Service clicked');
    }
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-mono`}>
      {/* Header with back button */}
      <div className={`p-4 md:p-6 border-b border-gray-200 ${theme.bg}/90 backdrop-blur-sm`}>
        <button
          onClick={onBack}
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
          <div className="inline-block bg-green-100 rounded-full p-8 mb-6">
            <img 
              src={project.logo} 
              alt={project.name} 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.name}</h1>
          <p className={`${theme.textLight} text-lg`}>{project.description}</p>
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
            onClick={handleAppstoreClick}
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
            {project.about}
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

export default ProjectDetail;