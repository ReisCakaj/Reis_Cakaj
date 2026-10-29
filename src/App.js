import './App.css';
import DecryptedText from './Components/DecryptedText/DecryptedText';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export const App = () => {
  const form = useRef();
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [copied, setCopied] = useState(false);

  const contactEmail = 'reiscakaj2@gmail.com'; // Replace with your preferred email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    emailjs
      .sendForm('service_y7vkbdd', 'template_wvy3sox', form.current, {
        publicKey: '86qY6w7JINBdyev5l',
      })
      .then(
        () => {
          setSubmitStatus('success');
          form.current.reset();
          setTimeout(() => setSubmitStatus('idle'), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus('idle'), 5000);
        },
      );
  };

  return (
    <div className="App">
      <div className="ambient-glow" />

      {/* Top Cyber / Terminal Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#hero" className="brand-name">
            <DecryptedText
              text="Reis Cakaj"
              animateOn="view"
              effect="scramble"
              sequential={true}
              revealDirection="start"
              speed={60}
              maxIterations={8}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
              clickMode="once"
            />
          </a>
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>SYS.ONLINE // OPEN TO WORK</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#about" className="nav-link">
            <span className="nav-index">01.</span>about
          </a>
          <a href="#skills" className="nav-link">
            <span className="nav-index">02.</span>skills
          </a>
          <a href="#projects" className="nav-link">
            <span className="nav-index">03.</span>projects
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-index">04.</span>contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="section-container hero" id="hero">
        <div className="hero-prompt-bar">
          <span className="hero-prompt-prefix">reis@portfolio:~$</span>
          <span>git status --branch junior-fullstack</span>
        </div>

        <h1 className="hero-title">
          <DecryptedText
            text="Fullstack Developer."
            animateOn="view"
            effect="scramble"
            sequential={true}
            revealDirection="start"
            speed={40}
            maxIterations={10}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
            clickMode="once"
          />
        </h1>

        <p className="hero-subtitle">
          Building clean, responsive web applications with <strong>React</strong> on the frontend and <strong>Laravel</strong> on the backend. Focused on performance, minimal code, and robust user experiences.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <span>[ Explore Projects ↓ ]</span>
          </a>
          <a href="#contact" className="btn-secondary">
            <span>[ Initialize Contact ✉ ]</span>
          </a>
        </div>

        {/* System Specs Strip */}
        <div className="hero-specs">
          <div className="spec-item">
            <span className="spec-label">Core Focus</span>
            <span className="spec-val">React + Laravel Fullstack</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Status</span>
            <span className="spec-val accent">Available for Junior Roles</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Background</span>
            <span className="spec-val">College Student &amp; Web Developer</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Location / Mode</span>
            <span className="spec-val">Remote / On-Site</span>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="section-container" id="about">
        <div className="section-header">
          <div className="section-tag">{'// 01. INTRO_FILE'}</div>
          <h2 className="section-title">
            <DecryptedText
              text="About Me"
              animateOn="view"
              effect="scramble"
              sequential={true}
              speed={40}
              maxIterations={8}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*"
              clickMode="once"
            />
          </h2>
          <p className="section-subtitle">
            Background, current studies, and developer philosophy.
          </p>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <div className="terminal-file-title">~/reis_cakaj/bio.md</div>
            <div className="terminal-badge">READ_ONLY</div>
          </div>
          <div className="terminal-body">
            <div className="about-command">
              <span>reis@portfolio:~$</span> cat biography.txt
            </div>
            <p className="about-text">
              I am a college student with a deep enthusiasm for designing and building web platforms. I specialize in bridging intuitive frontend user interfaces using <strong>React</strong> with reliable, data-driven backends powered by <strong>Laravel &amp; PHP</strong>.
            </p>
            <p className="about-text">
              I love writing structured, maintainable code, implementing clean UI animations, and creating scalable systems that solve real-world problems.
            </p>

            <div className="about-highlights">
              <div className="highlight-box">
                <div className="highlight-title">Frontend Engineering</div>
                <div className="highlight-desc">
                  Crafting fluid component architectures, reactive state workflows, and sleek animations.
                </div>
              </div>
              <div className="highlight-box">
                <div className="highlight-title">Backend Architecture</div>
                <div className="highlight-desc">
                  Designing secure REST APIs, authentication layers, and relational MySQL schemas.
                </div>
              </div>
              <div className="highlight-box">
                <div className="highlight-title">Continuous Growth</div>
                <div className="highlight-desc">
                  Passionate about learning new paradigms, testing methodologies, and web performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container" id="skills">
        <div className="section-header">
          <div className="section-tag">{'// 02. SYSTEM_MODULES'}</div>
          <h2 className="section-title">
            <DecryptedText
              text="Technical Arsenal"
              animateOn="view"
              effect="scramble"
              sequential={true}
              speed={40}
              maxIterations={8}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*"
              clickMode="once"
            />
          </h2>
          <p className="section-subtitle">
            Languages, libraries, frameworks, and developer toolchains I utilize.
          </p>
        </div>

        <div className="skills-grid">
          {/* Frontend Card */}
          <div className="skill-card">
            <div className="skill-category-tag">[MODULE 01] CLIENT-SIDE</div>
            <h3 className="skill-card-title">Frontend</h3>
            <p className="skill-card-desc">
              Building responsive, accessible, and interactive interfaces with modern JavaScript and React component systems.
            </p>
            <div className="skill-tags">
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">JavaScript (ES6+)</span>
              <span className="skill-pill">HTML5 &amp; CSS3</span>
              <span className="skill-pill">Tailwind CSS</span>
              <span className="skill-pill">Motion / Animations</span>
              <span className="skill-pill">Responsive Design</span>
            </div>
          </div>

          {/* Backend Card */}
          <div className="skill-card">
            <div className="skill-category-tag">[MODULE 02] SERVER-SIDE</div>
            <h3 className="skill-card-title">Backend</h3>
            <p className="skill-card-desc">
              Architecting secure server applications, database models, and RESTful web endpoints with Laravel &amp; PHP.
            </p>
            <div className="skill-tags">
              <span className="skill-pill">Laravel</span>
              <span className="skill-pill">PHP</span>
              <span className="skill-pill">MySQL / SQL</span>
              <span className="skill-pill">RESTful APIs</span>
              <span className="skill-pill">MVC Architecture</span>
              <span className="skill-pill">Auth &amp; Middleware</span>
            </div>
          </div>

          {/* Tools & Workflow Card */}
          <div className="skill-card">
            <div className="skill-category-tag">[MODULE 03] TOOLCHAIN</div>
            <h3 className="skill-card-title">Tools &amp; Workflow</h3>
            <p className="skill-card-desc">
              Standard tools and environments used for version control, testing, dependency management, and delivery.
            </p>
            <div className="skill-tags">
              <span className="skill-pill">Git</span>
              <span className="skill-pill">GitHub</span>
              <span className="skill-pill">npm</span>
              <span className="skill-pill">Composer</span>
              <span className="skill-pill">Postman</span>
              <span className="skill-pill">VS Code</span>
              <span className="skill-pill">EmailJS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-container" id="projects">
        <div className="section-header">
          <div className="section-tag">{'// 03. COMPILED_BUILDS'}</div>
          <h2 className="section-title">
            <DecryptedText
              text="Featured Projects"
              animateOn="view"
              effect="scramble"
              sequential={true}
              speed={40}
              maxIterations={8}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*"
              clickMode="once"
            />
          </h2>
          <p className="section-subtitle">
            Selected applications showcasing fullstack architecture and frontend polish.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 1: STOKR */}
          <div className="terminal-window project-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-file-title">stokr_system.php</div>
              <div className="terminal-badge">FULLSTACK</div>
            </div>
            <div className="terminal-body">
              <div className="project-role">Stock &amp; Inventory Management</div>
              <h3 className="project-name">STOKR</h3>
              <p className="project-description">
                A full-featured inventory and stock management web application built with Laravel. Features product tracking, stock level updates, responsive control panels, and structured SQL storage.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Blade</span>
                <span className="tech-tag">Responsive UI</span>
              </div>
              <div className="project-links">
                <span className="project-link">[ Built with Laravel &amp; MySQL ]</span>
              </div>
            </div>
          </div>

          {/* Project 2: Personal Portfolio */}
          <div className="terminal-window project-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-file-title">reiscakaj_portfolio.tsx</div>
              <div className="terminal-badge">REACT_APP</div>
            </div>
            <div className="terminal-body">
              <div className="project-role">Personal Developer Portfolio</div>
              <h3 className="project-name">Reis Cakaj</h3>
              <p className="project-description">
                Interactive retro-cyber minimalist developer portfolio. Features custom encrypted text scrambling animations, terminal-themed interface, EmailJS transmission, and responsive layouts.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Motion</span>
                <span className="tech-tag">EmailJS</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Cyber-Minimal</span>
              </div>
              <div className="project-links">
                <a href="#hero" className="project-link">[ Current Application ✓ ]</a>
              </div>
            </div>
          </div>

          {/* Project 3: Next Build */}
          <div className="terminal-window project-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-file-title">future_build.sh</div>
              <div className="terminal-badge">WIP // 2026</div>
            </div>
            <div className="terminal-body">
              <div className="project-role">Next Fullstack Application</div>
              <h3 className="project-name">
                Next Project<span className="cursor-blink"></span>
              </h3>
              <p className="project-description">
                Currently architecting a new application combining a React SPA frontend with a Laravel RESTful API backend. Exploring real-time events and enhanced state management.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Laravel API</span>
                <span className="tech-tag">Tailwind</span>
                <span className="tech-tag">MySQL</span>
              </div>
              <div className="project-links">
                <span className="project-link" style={{ color: 'var(--accent)' }}>
                  [ Status: Compiling roadmap... ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container" id="contact">
        <div className="section-header">
          <div className="section-tag">{'// 04. TRANSMIT_MESSAGE'}</div>
          <h2 className="section-title">
            <DecryptedText
              text="Contact Me"
              animateOn="view"
              effect="scramble"
              sequential={true}
              speed={40}
              maxIterations={8}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*"
              clickMode="once"
            />
          </h2>
          <p className="section-subtitle">
            Open for junior developer positions, internships, and project collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Info */}
          <div className="contact-info-card">
            <div>
              <div className="contact-statement">
                Whether you have an opportunity, a question about my projects, or simply want to connect, my inbox is always open.
              </div>

              <div className="contact-direct-box">
                <div className="direct-label">Direct Communication</div>
                <div className="direct-email-row">
                  <span className="direct-email">{contactEmail}</span>
                  <button className="copy-btn" onClick={copyToClipboard} type="button">
                    {copied ? '✓ Copied' : '[ Copy Email ]'}
                  </button>
                </div>
              </div>
            </div>

            <div className="hero-specs" style={{ padding: '14px', background: 'rgba(0,0,0,0.3)' }}>
              <div className="spec-item">
                <span className="spec-label">Response Time</span>
                <span className="spec-val accent">&lt; 24 Hours</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Availability</span>
                <span className="spec-val">Immediate</span>
              </div>
            </div>
          </div>

          {/* Terminal Email Form */}
          <div className="terminal-window contact-form-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-file-title">./send_transmission.sh</div>
              <div className="terminal-badge">EMAILJS</div>
            </div>

            <div className="terminal-body">
              <form ref={form} onSubmit={sendEmail} className="terminal-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="user_name">[ 01 ] Your Name</label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Name Surname"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="user_email">[ 02 ] Your Email</label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="example@email.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">[ 03 ] Message Content</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter transmission / inquiry details..."
                    required
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={submitStatus === 'sending'}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {submitStatus === 'sending' ? (
                    <span>[ Transmitting Data... ]</span>
                  ) : (
                    <span>[ Send Message &gt; ]</span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-feedback success">
                    ✓ Transmission sent successfully! I will get back to you shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-feedback error">
                    ⚠ Transmission error. Please try again or reach out directly at {contactEmail}.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-status">
            <span className="status-dot"></span>
            <span>SYS_STATUS: ALL SYSTEMS NOMINAL // © 2026 REIS CAKAJ</span>
          </div>

          <a href="#hero" className="footer-back-to-top">
            [ ↑ return to top ]
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
