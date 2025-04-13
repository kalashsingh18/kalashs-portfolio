'use client';

import { useEffect, useRef, useState } from 'react';
import ThreeBackground from '../../components/ThreeBackground';
import TechLogos3D from '../../components/TechLogos3D';
import ChatBot from '../../components/ChatBot';
import styles from './styles.module.css';

export default function KalashPortfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(`.${styles.section}`);
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingContent}>
          <div className={styles.loadingLogo}>
            <span className="text-gradient">K</span>
          </div>
          <div className={styles.loadingBar}>
            <div className={styles.loadingProgress}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ThreeBackground />
      <TechLogos3D />

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className="text-gradient">K</span>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#about" className="underline-effect">About</a></li>
              <li><a href="#experience" className="underline-effect">Experience</a></li>
              <li><a href="#projects" className="underline-effect">Projects</a></li>
              <li><a href="#education" className="underline-effect">Education</a></li>
              <li><a href="#contact" className="underline-effect">Contact</a></li>
            </ul>
          </nav>
        </header>

        <div className={styles.heroSection}>
          <div className="blur-bg" style={{ top: '20%', left: '10%' }}></div>
          <div className="blur-bg" style={{ top: '60%', right: '10%' }}></div>

          <h1 className={styles.heroTitle}>
            <span>Hi, I'm </span>
            <span className="text-gradient">Kalash Singh</span>
          </h1>
          <h2 className={styles.heroSubtitle}>Full Stack & AI Developer</h2>
          <p className={styles.heroDescription}>
            I build robust, scalable applications using Next.js, Django, and integrate AI/LLMs to create intelligent solutions.
          </p>
          <div className={styles.heroCta}>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-outline">View My Work</a>
          </div>
        </div>

        <section id="about" ref={aboutRef} className={`${styles.section} ${styles.aboutSection}`}>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">01.</span> About Me
          </h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                I'm Kalash Singh Chouhan, a B.Tech CSE AIML student and a passionate full-stack developer.
                I specialize in creating robust, scalable applications using technologies like Django,
                FastAPI, Node.js, Express.js, and Next.js. I have extensive experience integrating AI and LLMs
                into applications to create intelligent, adaptive solutions.
              </p>
              <p>
                My approach to development focuses on creating clean, maintainable code that delivers
                exceptional performance. I've worked on educational platforms using Next.js and integrated
                various LLMs to create AI-powered content. I've also developed an AI travel agent for a US client,
                demonstrating my ability to apply AI technologies to solve real-world problems.
              </p>
            </div>
            <div className={styles.skillsContainer}>
              <h3 className={styles.skillsTitle}>My Tech Stack</h3>
              <div className={styles.skillsList}>
                <div className={`${styles.skillTag} hover-card`}>Next.js</div>
                <div className={`${styles.skillTag} hover-card`}>LLM Integration</div>
                <div className={`${styles.skillTag} hover-card`}>AI Development</div>
                <div className={`${styles.skillTag} hover-card`}>Django</div>
                <div className={`${styles.skillTag} hover-card`}>Django REST</div>
                <div className={`${styles.skillTag} hover-card`}>FastAPI</div>
                <div className={`${styles.skillTag} hover-card`}>Node.js</div>
                <div className={`${styles.skillTag} hover-card`}>Express.js</div>
                <div className={`${styles.skillTag} hover-card`}>Python</div>
                <div className={`${styles.skillTag} hover-card`}>React</div>
                <div className={`${styles.skillTag} hover-card`}>Docker</div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" ref={experienceRef} className={`${styles.section} ${styles.experienceSection}`}>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">02.</span> Experience
          </h2>
          <div className={styles.timelineContainer}>
            <div className={`${styles.timelineItem} hover-card glass`}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.experienceTitle}>Indoricoders</h3>
                <p className={styles.experienceMeta}><strong>Backend Developer</strong></p>
                <p className={styles.experienceTimeframe}>2023 - Present</p>
                <p>
                  Currently working as a Backend Developer at Indoricoders, specializing in building scalable
                  and efficient systems using technologies like Django, FastAPI, Node.js, and Express.js.
                  I design and develop robust APIs, ensuring high performance and maintainability in production environments.
                </p>
                <div className={styles.experienceTags}>
                  <span>Django</span>
                  <span>FastAPI</span>
                  <span>Node.js</span>
                  <span>API Design</span>
                </div>
              </div>
            </div>

            <div className={`${styles.timelineItem} hover-card glass`}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.experienceTitle}>Gurave Educational Platform</h3>
                <p className={styles.experienceMeta}><strong>Full Stack Developer</strong></p>
                <p className={styles.experienceTimeframe}>2023 - 2024</p>
                <p>
                  Worked on an educational platform using Next.js, integrating various LLMs to create educational content.
                  Implemented AI-powered features that generate customized learning materials using ChatGPT API.
                  Developed interactive learning experiences that adapt to individual student needs and learning styles.
                </p>
                <div className={styles.experienceTags}>
                  <span>Next.js</span>
                  <span>LLM Integration</span>
                  <span>ChatGPT API</span>
                  <span>Educational Tech</span>
                </div>
              </div>
            </div>

            <div className={`${styles.timelineItem} hover-card glass`}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.experienceTitle}>AI Travel Agent</h3>
                <p className={styles.experienceMeta}><strong>AI Developer</strong></p>
                <p className={styles.experienceTimeframe}>2023</p>
                <p>
                  Developed an AI-powered travel agent application for a US client. The system uses natural language
                  processing to understand travel preferences, recommend destinations, and create personalized itineraries.
                  Integrated with travel APIs to provide real-time pricing and availability information.
                </p>
                <div className={styles.experienceTags}>
                  <span>AI Development</span>
                  <span>NLP</span>
                  <span>Travel APIs</span>
                  <span>User Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" ref={projectsRef} className={`${styles.section} ${styles.projectsSection}`}>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">03.</span> Projects
          </h2>
          <div className={styles.projectsGrid}>
            <div className={`${styles.projectCard} hover-card glass`}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className={styles.projectTitle}>AI Travel Agent</h3>
              </div>
              <p className={styles.projectDescription}>
                An AI-powered travel assistant that helps users plan trips, find destinations, and create personalized itineraries. Integrates with travel APIs and uses natural language processing to understand user preferences.
              </p>
              <div className={styles.projectTags}>
                <span>AI/ML</span>
                <span>Next.js</span>
                <span>OpenAI API</span>
                <span>Travel APIs</span>
              </div>
            </div>

            <div className={`${styles.projectCard} hover-card glass`}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    <line x1="12" y1="11" x2="12" y2="17"></line>
                    <line x1="9" y1="14" x2="15" y2="14"></line>
                  </svg>
                </div>
                <h3 className={styles.projectTitle}>Gurave LLM Integration</h3>
              </div>
              <p className={styles.projectDescription}>
                Educational content generation system using LLMs like ChatGPT. Creates customized learning materials, quizzes, and interactive exercises based on curriculum requirements and student learning styles.
              </p>
              <div className={styles.projectTags}>
                <span>Next.js</span>
                <span>LLM</span>
                <span>ChatGPT API</span>
                <span>Education</span>
              </div>
            </div>

            <div className={`${styles.projectCard} hover-card glass`}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className={styles.projectTitle}>ORM to SQL Converter</h3>
              </div>
              <p className={styles.projectDescription}>
                Converts ORM queries to raw SQL for better performance. This tool helps developers optimize database queries by providing the equivalent SQL statements for their ORM code.
              </p>
              <div className={styles.projectTags}>
                <span>Python</span>
                <span>Django</span>
                <span>SQL</span>
              </div>
            </div>

            <div className={`${styles.projectCard} hover-card glass`}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className={styles.projectTitle}>Fresh Hive</h3>
              </div>
              <p className={styles.projectDescription}>
                Customizable form builder with Google Meet webinar integration. This platform allows users to create and manage forms for webinar registrations with seamless Google Meet integration.
              </p>
              <div className={styles.projectTags}>
                <span>React</span>
                <span>Node.js</span>
                <span>Google API</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education" ref={educationRef} className={`${styles.section} ${styles.educationSection}`}>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">04.</span> Education
          </h2>
          <div className={styles.educationGrid}>
            <div className={`${styles.educationCard} hover-card glass`}>
              <div className={styles.educationHeader}>
                <h3 className={styles.educationTitle}>IPS Academy, Indore</h3>
                <p className={styles.educationMeta}><strong>B.Tech in CSE (AIML)</strong></p>
                <p className={styles.educationTimeframe}>2024 - Present</p>
              </div>
              <p className={styles.educationDescription}>
                Currently pursuing B.Tech in Computer Science & Engineering with a specialization in
                Artificial Intelligence & Machine Learning (AIML) at IPS Academy, Indore.
                This program has helped me develop strong foundational skills in programming,
                data structures, algorithms, and AI technologies.
              </p>
            </div>

            <div className={`${styles.educationCard} hover-card glass`}>
              <div className={styles.educationHeader}>
                <h3 className={styles.educationTitle}>St. Jude's Co-Ed School</h3>
                <p className={styles.educationMeta}><strong>High School (12th Grade)</strong></p>
                <p className={styles.educationTimeframe}>Graduated: 2022</p>
              </div>
              <p className={styles.educationDescription}>
                Completed my schooling from St. Jude's Co-Ed School, achieving an 85% in the 12th grade.
                This period helped me build a strong foundation in mathematics, science, and critical thinking,
                which later influenced my decision to pursue engineering in the field of computer science.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" ref={contactRef} className={`${styles.section} ${styles.contactSection}`}>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">05.</span> Contact
          </h2>
          <div className={styles.contactGrid}>
            <div className={`${styles.contactCard} hover-card glass`}>
              <h3 className={styles.contactCardTitle}>Get In Touch</h3>
              <p className={styles.contactDescription}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:kalashchouhan939@gmail.com">kalashchouhan939@gmail.com</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+917223029969">+91 7223029969</a>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/kalash-singh-317079282/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/kalashsingh18" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Designed & Built by Kalash Singh Chouhan</p>
        </footer>
      </div>

      <ChatBot />
    </>
  );
}
