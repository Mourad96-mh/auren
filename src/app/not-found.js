import Link from 'next/link';

export const metadata = { title: { absolute: 'Page introuvable | Auren Studio' }, robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '70vh' }}>
      <div className="container">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="h1">Cette page n’existe pas (ou plus).</h1>
        <p className="lead">Le plan a peut-être changé. Repartez de l’accueil ou découvrez nos services.</p>
        <div className="hero-actions" style={{ marginTop: 30 }}>
          <Link className="btn btn-dark" href="/" prefetch={false}>Accueil</Link>
          <Link className="btn btn-outline" href="/services/" prefetch={false}>Nos services</Link>
        </div>
      </div>
    </section>
  );
}
