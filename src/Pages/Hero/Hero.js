import React, { useEffect, useRef } from 'react';
import './Hero.scss';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero__tech-canvas"></canvas>
      <div className="hero__tech-icons">
        {['React', 'JavaScript', 'CSS3', 'HTML5', 'Node.js', 'UI/UX', 'Animation', 'TypeScript', 'Sass', 'Next.js'].map((tech, i) => {
          const xPos = `${Math.random() * 70 + 15}%`;
          const yPos = `${Math.random() * 70 + 15}%`;
          const delay = `${i * 0.15}s`;
          const duration = `${Math.random() * 5 + 5}s`;
          const size = `${Math.random() * 0.5 + 0.8}em`;

          return (
            <div
              key={tech}
              className="hero__tech-icon"
              style={{
                '--delay': delay,
                '--duration': duration,
                '--x-pos': xPos,
                '--y-pos': yPos,
                '--size': size,
                '--hue': `${Math.random() * 60 + 200}`
              }}
              data-tech={tech}
            >
              {tech}
            </div>
          );
        })}
      </div>


      <div className="hero__container">
        <div className="hero__glass-card">
          <div className="hero__content">

            <div className="hero__badge">Innovative Developer</div>
            <h1 className="hero__title">
              <span className="hero__title-line">Digital</span>
              <span className="hero__title-line hero__title-line--glitch" data-text="Architect">Architect</span>
            </h1>

            <p className="hero__description">
              Crafting immersive digital landscapes at the intersection of design and technology.
            </p>

            <div className="hero__cta-container">
              <a href="#projects" className="hero__cta hero__cta--primary">
                <span>Explore Projects</span>
                <div className="hero__cta-hover"></div>
              </a>
              <a href="#contact" className="hero__cta hero__cta--secondary">
                <span>Initiate Contact</span>
                <div className="hero__cta-hover"></div>
              </a>
            </div>
          </div>
        </div>



        <div className="hero__hologram">
          <div className="hero__hologram-container">
            <img
              src={require("../../Images/IMG20250205101458.jpg")}
              alt="Holographic Profile"
              className="hero__profile-image"
            />
            <div className="hero__hologram-effect"></div>
            <div className="hero__hologram-grid"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;