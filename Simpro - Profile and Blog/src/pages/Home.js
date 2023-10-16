import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">
        Welcome to Luqman Herifa practicing React.
      </h1>
      <p className="section-description">
        I'm a Junior Software Developer focused on building some things for
        front-end web. I just graduated from college and currently looking for
        new opportunities.
      </p>
    </section>
  );
}
