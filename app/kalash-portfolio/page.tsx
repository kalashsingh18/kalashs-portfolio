export default function KalashPortfolio() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Kalash Singh's Portfolio</h1>
      <p>Welcome to my portfolio page.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>About Me</h2>
        <p>I am Kalash Singh, a backend developer skilled in Django, FastAPI, Node.js, express.js, python, and React.</p>
        <p>I specialize in creating robust, scalable applications using technologies like Django, Django REST Framework, Django Graphene, FastAPI, Node.js, and Express.js.</p>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Experience</h2>
        <div>
          <h3>Indoricoders</h3>
          <p><strong>Backend Developer</strong> | 2023 - Present</p>
          <p>Currently working as a Backend Developer at Indoricoders, specializing in building scalable and efficient systems using technologies like Django, FastAPI, Node.js, and Express.js.</p>
        </div>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Projects</h2>
        <ul>
          <li><strong>ORM to SQL Converter:</strong> Converts ORM queries to raw SQL for better performance.</li>
          <li><strong>Fresh Hive:</strong> Customizable form builder with Google Meet webinar integration.</li>
          <li><strong>Email Scrapper:</strong> Fetches data from Google Sheets and sends automated emails.</li>
        </ul>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Education</h2>
        <div>
          <h3>IPS Academy, Indore</h3>
          <p><strong>B.Tech in CSE (AIML)</strong> | 2024 - Present</p>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <h3>St. Jude's Co-Ed School</h3>
          <p><strong>High School (12th Grade)</strong> | Graduated: 2022</p>
        </div>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Contact</h2>
        <p>Email: kalashchouhan939@gmail.com</p>
        <p>Phone: +917223029969</p>
        <div style={{ marginTop: '1rem' }}>
          <h3>Social</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/kalash-singh-317079282/">LinkedIn</a></li>
            <li><a href="https://github.com/kalashsingh18">GitHub</a></li>
          </ul>
        </div>
      </section>
      
      <footer style={{ marginTop: '3rem', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
        <p>© Designed By Kalash Singh Chouhan {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
