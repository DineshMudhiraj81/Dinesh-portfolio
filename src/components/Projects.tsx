import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Careers at BSIT",
      description: "Full-stack job portal: Apply jobs, resume upload, tracking, admin module. Built with PHP and MySQL",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
      liveUrl: "https://careers.bsitsoftware.com/",
      // githubUrl: "#",
      features: ["Real-time updates", "User authentication", "Job Filtering", "File uploads"]
    },
    {
      title: "Find Your Hostel",
      description: "Platform with hostel listings, booking, reviews, and user profiles and User/Agent modules, filters and wishlist. Built with PHP and MySQL",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
      liveUrl: "https://bsitsoftware.com/FindMyHostel",
      // githubUrl: "#",
      features: ["Amenities", "Bookings", "Reviews", "Ratings", "Pricing", "Filter"]
    }
    // {
    //   title: "Weather Forecast App",
    //   description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information. Responsive design with dark mode support.",
    //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["React", "TypeScript", "OpenWeather API", "Tailwind CSS", "Geolocation"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   features: ["7-day forecast", "Interactive maps", "Location search", "Dark mode"]
    // },
    // {
    //   title: "Social Media Analytics Tool",
    //   description: "Analytics dashboard for social media metrics with data visualization, automated reporting, and multi-platform integration.",
    //   image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["React", "Python", "Flask", "D3.js", "PostgreSQL"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   features: ["Multi-platform data", "Custom reports", "Data visualization", "Scheduled updates"]
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on over the past 2 years. Each project 
            showcases different skills and technologies I've learned and applied.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  {/* <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">More projects available on GitHub</p>
          <a
            href="https://github.com"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 border border-gray-600 hover:border-blue-500/50"
          >
            <Github size={20} className="mr-2" />
            View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;