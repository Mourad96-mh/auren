import JsonLd from './JsonLd';
import { faqLd } from '@/lib/seo';

export default function Faq({ items, title = 'Questions fréquentes', id = 'faq' }) {
  return (
    <section className="section faq" aria-labelledby={`${id}-title`}>
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id={`${id}-title`} className="h2">{title}</h2>
        </div>
        <div className="faq-list">
          {items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqLd(items)} />
    </section>
  );
}
