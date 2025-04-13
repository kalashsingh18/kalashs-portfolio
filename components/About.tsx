import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row about-info wide" data-animate-block>
        <div className="column lg-6 md-12 about-info__pic-block">
          <img
            src="/images/about-photo.jpeg"
            srcSet="/images/about-photo.jpeg 1x, /images/about-photo.jpeg 2x"
            alt="Kalash Singh"
            className="about-info__pic"
            data-animate-el
          />
        </div>

        <div className="column lg-6 md-12">
          <div className="about-info__text">
            <h2 className="text-pretitle with-line" data-animate-el>
              About
            </h2>
            <p className="attention-getter" data-animate-el>
              I'm Kalash Singh Chouhan, a B.Tech CSE AIML student and a passionate backend developer.
              I specialize in creating robust, scalable applications using technologies like Django,
              Django REST Framework, Django Graphene, FastAPI, Node.js, and Express.js.
              On the frontend, I am proficient in React and familiar with HTML and CSS.
              I'm driven by a love for problem-solving and constantly seek opportunities to learn and grow.
            </p>
            <a href="/images/1725817376858.pdf.pdf" className="btn btn--medium u-fullwidth" download>
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="row about-expertise" data-animate-block>
        <div className="column lg-12">
          <h2 className="text-pretitle" data-animate-el>
            Expertise
          </h2>

          <ul className="skills-list h1" data-animate-el style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <strong>Backend Development:</strong> Django, Django REST Framework, Django Graphene, FastAPI, Node.js, Express.js
            </li>
            <li style={{ marginBottom: '15px' }}>
              <strong>Frontend Development:</strong> React
            </li>
            <li style={{ marginBottom: '15px' }}>
              <strong>Web Design:</strong> Familiar with HTML and CSS
            </li>
            <li>
              <strong>DevOps & Tools:</strong> Docker
            </li>
          </ul>
        </div>
      </div>

      <div className="row about-timelines" data-animate-block>
        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle" data-animate-el>
            Experience
          </h2>

          <div className="timeline" data-animate-el>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Indoricoders</h4>
                <h5 className="timeline__meta">Backend Developer</h5>
                <p className="timeline__timeframe">2023 - Present</p>
              </div>
              <div className="timeline__desc">
                <p>
                  Currently working as a Backend Developer at Indoricoders, specializing in building scalable and efficient systems using technologies like Django, FastAPI, Node.js, and Express.js. I design and develop robust APIs, ensuring high performance and maintainability in production environments.
                </p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Personal Projects</h4>
                <h5 className="timeline__meta">Backend Developer</h5>
                <p className="timeline__timeframe">2023 - Present</p>
              </div>
              <div className="timeline__desc">
                <p>Developed several backend projects:</p>
                <ul>
                  <li><strong>ORM to SQL Converter:</strong> Converts ORM queries to raw SQL for better performance.</li>
                  <li><strong>Fresh Hive:</strong> Customizable form builder with Google Meet webinar integration.</li>
                  <li><strong>Email Scrapper:</strong> Fetches data from Google Sheets and sends automated emails.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle" data-animate-el>
            Education
          </h2>

          <div className="timeline" data-animate-el>
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">IPS Academy, Indore</h4>
                <h5 className="timeline__meta">B.Tech in CSE (AIML)</h5>
                <p className="timeline__timeframe">2024 - Present</p>
              </div>
              <div className="timeline__desc">
                <p>
                  Currently pursuing B.Tech in Computer Science & Engineering with a specialization in Artificial Intelligence & Machine Learning (AIML) at IPS Academy, Indore. This program has helped me develop strong foundational skills in programming, data structures, algorithms, and AI technologies.
                </p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">St. Jude's Co-Ed School</h4>
                <h5 className="timeline__meta">High School (12th Grade)</h5>
                <p className="timeline__timeframe">Graduated: 2022</p>
              </div>
              <div className="timeline__desc">
                <p>
                  Completed my schooling from St. Jude's Co-Ed School, achieving an 85% in the 12th grade. This period helped me build a strong foundation in mathematics, science, and critical thinking, which later influenced my decision to pursue engineering in the field of computer science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
