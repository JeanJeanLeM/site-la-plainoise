import { siteData } from "@/lib/siteData";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <p className="eyebrow">Boulangerie & Patisserie</p>
          <h1>{siteData.name}</h1>
          <p>{siteData.tagline}</p>
          <p>{siteData.description}</p>
          <div className="actions">
            <a className="button primary" href={siteData.phoneLink}>
              Appeler
            </a>
            <a
              className="button secondary"
              href={siteData.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Voir sur Google Maps
            </a>
          </div>
        </div>
        <img src={siteData.heroImages[0]} alt={siteData.name} />
      </section>

      <section className="grid">
        <article className="card">
          <h2>Notre histoire</h2>
          <p>{siteData.story}</p>
        </article>
        <article className="card">
          <h2>Cuisine</h2>
          <p>{siteData.cuisine}</p>
        </article>
      </section>

      <section className="gallery">
        {siteData.heroImages.map((src) => (
          <img key={src} src={src} alt={siteData.name} />
        ))}
      </section>

      <section className="grid">
        <article className="card">
          <h2>Horaires</h2>
          <ul>
            {siteData.openingHours.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2>Contact</h2>
          <p>{siteData.address}</p>
          <a
            className="button primary"
            href={siteData.phoneLink}
            style={{ marginTop: "0.75rem", display: "inline-block" }}
          >
            {siteData.phoneDisplay}
          </a>
        </article>
      </section>

      <section className="card">
        <h2>Avis clients</h2>
        <div className="reviews">
          {siteData.reviews.map((review) => (
            <blockquote key={review.author}>
              <p>{review.text}</p>
              <footer>
                {review.author} - {"★".repeat(review.rating)}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="footer-cta">
        <a className="button primary" href={siteData.phoneLink}>
          Reserver
        </a>
        <a
          className="button secondary"
          href={siteData.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Adresse & itineraire
        </a>
      </section>
    </main>
  );
}
