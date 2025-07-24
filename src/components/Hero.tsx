import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Dinesh kumar
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            PHP Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications with modern technologies. 
            2+ years of experience building scalable solutions and bringing ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nanidinesh965@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;