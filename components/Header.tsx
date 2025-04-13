import Link from 'next/link';

const Header = () => {
  return (
    <header className="s-header">
      <div className="header-mobile">
        <span className="mobile-home-link">
          <Link href="/">Kalash.</Link>
        </span>
        <a className="mobile-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </div>

      <div className="row wide main-nav-wrap">
        <nav className="column lg-12 main-nav">
          <ul>
            <li>
              <Link href="/" className="home-link">
                Kalash.
              </Link>
            </li>
            <li className="current">
              <Link href="#intro" className="smoothscroll">
                Intro
              </Link>
            </li>
            <li>
              <Link href="#about" className="smoothscroll">
                About
              </Link>
            </li>
            <li>
              <Link href="#works" className="smoothscroll">
                Works
              </Link>
            </li>
            <li>
              <Link href="#contact" className="smoothscroll">
                Say Hello
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
