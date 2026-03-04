import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      value: "nanidinesh965@gmail.com",
      href: "mailto:nanidinesh965@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-teal-400" />,
      title: "Phone",
      value: "7286881281",
      href: "tel:+917286881281"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      href: "https://github.com/DineshMudhiraj81",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dinesh-kumar-28b091260",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex-shrink-0 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-all duration-200 transform hover:scale-110 p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500/50`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;