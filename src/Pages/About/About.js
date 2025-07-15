import React from 'react';
import { FaReact, FaGitAlt, FaFigma, FaSass, FaBootstrap } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiWebpack,
  SiVite,
  SiVercel,
  SiVisualstudio,
  SiAdobephotoshop,
  SiBootstrap
} from 'react-icons/si';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="section__header">
        <h2 className="section__title">Frontend Expertise</h2>
      </div>

      <div className="about__container">
        <div className="about__content">
          <div className="about__description-container">
            <p className="about__description">
              Software developer with over 1 year of experience building responsive, user-friendly
              web applications using modern technologies. Specialized in creating accessible,
              performant interfaces with clean code architecture and pixel-perfect implementation.
            </p>
            <div className="highlight-box">
              <p className="highlight-text">
                Passionate about UI/UX principles, component-driven development, and staying current
                with emerging web technologies.
              </p>
            </div>
        <span className="section__subtitle">My technical toolkit</span>

          </div>

          <div className="tech-stack">
            <div className="tech-stack__category">
              <h3 className="tech-category__title">

                <span className="title-icon">💻</span> Core Technologies
              </h3>
              <ul className="tech-list">
                <li className="tech-item">
                  <SiJavascript className="tech-icon" style={{ color: '#F7DF1E' }} />
                  <span className="tech-name">JavaScript (ES6+)</span>
                </li>
                <li className="tech-item">
                  <SiTypescript className="tech-icon" style={{ color: '#3178C6' }} />
                  <span className="tech-name">TypeScript</span>
                </li>
                <li className="tech-item">
                  <SiHtml5 className="tech-icon" style={{ color: '#E34F26' }} />
                  <span className="tech-name">HTML5</span>
                </li>
                <li className="tech-item">
                  <SiCss3 className="tech-icon" style={{ color: '#1572B6' }} />
                  <span className="tech-name">CSS3</span>
                </li>
              </ul>
            </div>

            <div className="tech-stack__category">
              <h3 className="tech-category__title">
                <span className="title-icon">🛠️</span> Frameworks & Libraries
              </h3>
              <ul className="tech-list">
                <li className="tech-item">
                  <FaReact className="tech-icon" style={{ color: '#61DAFB' }} />
                  <span className="tech-name">React.js</span>
                </li>
                <li className="tech-item">
                  <SiNextdotjs className="tech-icon" style={{ color: '#000000' }} />
                  <span className="tech-name">Next.js</span>
                </li>
                <li className="tech-item">
                  <SiTailwindcss className="tech-icon" style={{ color: '#38B2AC' }} />
                  <span className="tech-name">Tailwind CSS</span>
                </li>
                <li className="tech-item">
                  <SiBootstrap className="tech-icon" style={{ color: '#7952B3' }} />
                  <span className="tech-name">Bootstrap</span>
                </li>
                <li className="tech-item">
                  <SiStyledcomponents className="tech-icon" style={{ color: '#DB7093' }} />
                  <span className="tech-name">Styled Components</span>
                </li>
                <li className="tech-item">
                  <FaSass className="tech-icon" style={{ color: '#CC6699' }} />
                  <span className="tech-name">Sass/SCSS</span>
                </li>
              </ul>
            </div>

            <div className="tech-stack__category">
              <h3 className="tech-category__title">
                <span className="title-icon">🔧</span> Tools & Workflow
              </h3>
              <ul className="tech-list">
                <li className="tech-item">
                  <FaGitAlt className="tech-icon" style={{ color: '#F05032' }} />
                  <span className="tech-name">Git/GitHub</span>
                </li>
                <li className="tech-item">
                  <SiVercel className="tech-icon" style={{ color: '#000000' }} />
                  <span className="tech-name">Vercel</span>
                </li>
                <li className="tech-item">
                  <SiVercel className="tech-icon" style={{ color: '#007ACC' }} />
                  <span className="tech-name">VS Code</span>
                </li>
                <li className="tech-item">
                  <FaFigma className="tech-icon" style={{ color: '#F24E1E' }} />
                  <span className="tech-name">Figma</span>
                </li>
                <li className="tech-item">
                  <SiAdobephotoshop className="tech-icon" style={{ color: '#31A8FF' }} />
                  <span className="tech-name">Photoshop</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;