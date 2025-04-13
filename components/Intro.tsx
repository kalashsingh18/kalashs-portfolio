import Link from 'next/link';

const Intro = () => {
  return (
    <section id="intro" className="s-intro target-section">
      <div className="row intro-content wide">
        <div className="column">
          <div className="text-pretitle with-line">Hello World</div>

          <h1 className="text-huge-title">
            I am Kalash Singh, <br />
            a backend developer <br />
            skilled in Django, <br />
            FastAPI, Node.js, <br />
            express.js, python, <br />
            and React.
          </h1>
        </div>

        <ul className="intro-social">
          <li><a href="#0">Behance</a></li>
          <li><a href="#0">Twitter</a></li>
          <li><a href="#0">Dribbble</a></li>
          <li><a href="#0">Instagram</a></li>
        </ul>
      </div>

      <Link href="#about" className="intro-scrolldown smoothscroll">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
        </svg>
      </Link>
    </section>
  );
};

export default Intro;
