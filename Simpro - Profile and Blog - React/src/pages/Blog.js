import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArcticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    document.title = "Blog";

    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();

      setArcticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Blog</h2>
      <p className="section-description">
        This web just for practicing React. Here is an article from Space Flight
        News for you.
      </p>

      {loading && <i>Loading articles...</i>}
      {!loading && (
        <div className="articles">
          {articles.map(function (article) {
            return (
              <article key={article.id} className="article">
                <h2 className="article-title">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <time className="article-time">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
