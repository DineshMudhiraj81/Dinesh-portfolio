import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 80 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "CodeIgnator", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "PHP", level: 90 },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Git", level: 85 },
        { name: "Git Hub", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I work with regularly and my proficiency
            levels based on 3 years of hands-on experience and continuous
            learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Docker",
              "Kubernetes",
              "GraphQL",
              "React Native",
              "Vue.js",
              "Rust",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-blue-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
