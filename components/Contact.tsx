import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="row contact-top">
        <div className="column lg-12">
          <h2 className="text-pretitle">Get In Touch</h2>

          <p className="h1">
            I'd love to connect with you! Whether you have a question about backend development, need
            insights on API design, or just want to chat about programming, scalable systems, or emerging
            tech — feel free to reach out!
          </p>
        </div>
      </div>

      <div className="row contact-bottom">
        <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
          <h3 className="text-pretitle">Reach me at</h3>
          <p className="contact-links">
            <a href="mailto:kalashchouhan939@gmail.com" className="mailtoui">
              kalashchouhan's mail
            </a>{' '}
            <br />
            <a href="tel:+917223029969">+917223029969</a>
          </p>
        </div>
        <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
          <h3 className="text-pretitle">Social</h3>
          <ul className="contact-social">
            <li>
              <a href="https://www.linkedin.com/in/kalash-singh-317079282/">LinkedIn</a>
            </li>
            <li>
              <a href="#0">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/kalashsingh18">Github</a>
            </li>
          </ul>
        </div>
        <div className="column lg-4 md-12 contact-block">
          <a
            href="mailto:kalashchouhan939@gmail.com"
            className="mailtoui btn btn--medium u-fullwidth contact-btn"
          >
            Say Hello.
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
