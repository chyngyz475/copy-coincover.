import React from 'react';
import './MobileBlog.css';

const MobileBlog = () => {
  const articles = [
    {
      title: "7 reasons why internal key recovery and backup is riskier than you think",
      image: "/assets/img/blog-1.jpg",
      url: "/blog/internal-key-recovery"
    },
    {
      title: "A look ahead at 6 emerging security threats for crypto platforms in 2025",
      image: "/assets/img/blog-2.jpg",
      url: "/blog/security-threats-2025"
    },
    {
      title: "How business continuity planning can protect institutional crypto assets",
      image: "/assets/img/blog-3.jpg",
      url: "/blog/business-continuity"
    }
  ];

  return (
    <section className="mobile-blog">
      <div className="mobile-blog__container">
        <div className="mobile-blog__header">
          <h2 className="mobile-blog__title">You might also like</h2>
          <a href="/blog" className="mobile-blog__see-all">See all stories</a>
        </div>
        <div className="mobile-blog__grid">
          {articles.map((article, index) => (
            <article key={index} className="mobile-blog__card">
              <div className="mobile-blog__image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="mobile-blog__content">
                <h3 className="mobile-blog__card-title">
                  <a href={article.url}>{article.title}</a>
                </h3>
                <a href={article.url} className="mobile-blog__read-more">Read more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileBlog;
