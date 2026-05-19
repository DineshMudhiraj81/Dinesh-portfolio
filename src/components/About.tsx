import { Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern development patterns."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-teal-400" />,
      title: "Problem Solving",
      description: "Analytical approach to breaking down complex problems into manageable solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Collaboration",
      description: "Strong communication skills and experience working in agile development teams."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              My Development Journey
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate MERN Stack Developer around 3 years of experience
                building dynamic and scalable web applications that solve real-world
                problems. My journey began with a curiosity about how modern web
                applications work behind the scenes.
              </p>
              <p>
                Starting with HTML, CSS, and JavaScript, I developed a strong interest in
                the problem-solving aspects of programming. Over time, I expanded my
                expertise in the MERN stack (MongoDB, Express.js, React.js, and Node.js)
                to build full-stack applications with modern and efficient architectures.
              </p>
              <p>
                I enjoy working in collaborative team environments, contributing to clean and
                maintainable code, and continuously improving my development skills. Currently,
                I am focused on building scalable full-stack applications, improving performance,
                and exploring advanced technologies such as cloud services, REST APIs, and
                microservices architecture.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">When I'm not coding:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Contributing to open source projects</li>
                <li>• Reading tech blogs and learning new technologies</li>
                <li>• Photography and hiking</li>
                
              </ul>
            </div>
          </div>
          
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;