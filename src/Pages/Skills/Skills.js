import React, { useEffect, useState } from 'react';
import './Skills.scss';
import { FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiVisualstudiocode,
  SiSass,
  SiMaterialui
} from 'react-icons/si';

const skillsData = [
  { 
    name: 'Frontend', 
    icon: <FaReact />,
    description: 'Modern web development technologies for building interactive user interfaces',
    skills: [
      { 
        name: 'React', 
        level: 92,
        description: 'Building component-based UIs with hooks, context API, and performance optimization',
        projects: '12 production applications',
        icon: <FaReact />
      },
      { 
        name: 'Next.js', 
        level: 88,
        description: 'Developing SSR/SSG applications with optimized performance and SEO',
        projects: '6 large-scale projects',
        icon: <SiNextdotjs />
      },
      { 
        name: 'TypeScript', 
        level: 85,
        description: 'Implementing type-safe JavaScript for scalable application development',
        projects: '8 typed codebases',
        icon: <SiTypescript />
      },
      { 
        name: 'JavaScript', 
        level: 90,
        description: 'Core language expertise with modern ES6+ features and patterns',
        projects: '15+ projects',
        icon: <SiJavascript />
      },
      { 
        name: 'HTML5', 
        level: 95,
        description: 'Semantic markup and accessibility-focused web development',
        projects: 'All web projects',
        icon: <SiHtml5 />
      },
      { 
        name: 'CSS3', 
        level: 93,
        description: 'Modern styling with Flexbox, Grid, animations and responsive design',
        projects: 'All web projects',
        icon: <SiCss3 />
      },
      { 
        name: 'Sass', 
        level: 90,
        description: 'CSS preprocessor with mixins, variables, and nested rules for maintainable styles',
        projects: '10+ projects',
        icon: <SiSass />
      },
      { 
        name: 'Material UI', 
        level: 85,
        description: 'Building responsive interfaces with React component library and custom themes',
        projects: '7 projects',
        icon: <FaReact />
      },
      { 
        name: 'Responsive Design', 
        level: 94,
        description: 'Creating fluid layouts that adapt to all screen sizes and devices',
        projects: 'All web projects',
        icon: <SiCss3 />
      },
    ]
  },
  {
    name: 'Tools & APIs',
    icon: <FaFigma />,
    description: 'Essential development tools and API integration capabilities',
    skills: [
      { 
        name: 'Git', 
        level: 90,
        description: 'Version control and collaborative development workflows',
        projects: '20+ repositories',
        icon: <FaGitAlt />
      },
      { 
        name: 'VS Code', 
        level: 95,
        description: 'Customized development environment with productivity extensions',
        projects: 'Primary editor for all projects',
        icon: <SiVercel />
      },
      { 
        name: 'Figma', 
        level: 85,
        description: 'UI/UX design collaboration and component handoff',
        projects: '4 design systems',
        icon: <FaFigma />
      },
      { 
        name: 'Vercel', 
        level: 88,
        description: 'Cloud platform for deploying and monitoring web applications',
        projects: '8 deployed projects',
        icon: <SiVercel />
      },
      { 
        name: 'API Integration', 
        level: 87,
        description: 'Connecting frontend applications with backend services and third-party APIs',
        projects: '9 applications',
        icon: <SiJavascript />
      },
      { 
        name: 'REST API', 
        level: 86,
        description: 'Designing and consuming RESTful APIs with proper authentication and error handling',
        projects: '5 backend integrations',
        icon: <SiNextdotjs />
      },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <span className="skills__subtitle">Technical Expertise</span>
          <h2 className="skills__title">Frontend Development Skills</h2>
          <p className="skills__description">
            My proficiency with modern web technologies and essential development tools
          </p>
        </div>

        <div className="skills__categories">
          {skillsData.map((category, index) => (
            <button
              key={index}
              className={`skills__category-btn ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills__category-info">
          <h3>{skillsData[activeCategory].name}</h3>
          <p>{skillsData[activeCategory].description}</p>
        </div>

        <div className="skills__content">
          {skillsData[activeCategory].skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skills__skill-card ${animated ? 'animate' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <div className="skill-content">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <p className="skill-description">{skill.description}</p>
                
                <div className="skill-meta">
                  <span className="projects">{skill.projects}</span>
                  <span className="experience">
                    {skill.level >= 90 ? 'Expert' : 
                     skill.level >= 75 ? 'Advanced' : 
                     skill.level >= 60 ? 'Proficient' : 'Intermediate'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;