import { useEffect } from "react";

export default function Contact() {
  useEffect(function () {
    document.title = "Contact";
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-description">
        I'm currently looking for new opportunities and experiences. If you have
        an offer, question, or just want to say halo, we can connect via social
        media and I'll try my best to get back to you!
      </p>
      <ul className="contact-list">
        <li className="contact-item">
          <a
            href="mailto:luqmanherifa@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </li>
        <li className="contact-item">
          <a
            href="https://www.linkedin.com/in/luqmanherifa"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="contact-item">
          <a
            href="https://github.com/luqmanherifa"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
