import Link from 'next/link';
import { IconArrow, IconWhatsApp, IconPhone } from '@/components/Icons';
import { pageMeta } from '@/lib/seo';

// Living reference of the tokens in globals.css. Not indexed, not in the sitemap.
export const metadata = {
  ...pageMeta({
    title: 'Design system | Auren Studio',
    description: 'Couleurs, typographie, espacements et composants du site Auren Studio.',
    path: '/design-system/',
  }),
  robots: { index: false, follow: false },
};

const COLORS = [
  { group: 'Fonds', items: [['--bg', '#f4f1eb', 'Fond principal (pierre)'], ['--bg-2', '#ebe6dc', 'Sections alternées'], ['--surface', '#ffffff', 'Cartes, formulaires'], ['--dark', '#14130f', 'Sections sombres, hero'], ['--dark-2', '#1f1d18', 'Pied de page']] },
  { group: 'Texte', items: [['--ink', '#17150f', 'Titres'], ['--ink-2', '#3f3a32', 'Texte courant'], ['--muted', '#645d52', 'Texte secondaire · 5,3:1'], ['--on-dark', '#f4f1eb', 'Titres sur fond sombre'], ['--on-dark-2', '#bdb5a7', 'Texte sur fond sombre']] },
  { group: 'Accent bronze', items: [['--accent', '#b08a5b', 'Filets, puces (jamais du texte)'], ['--accent-ink', '#80592a', 'Accent texte sur clair · 5,0:1'], ['--accent-light', '#d2b48a', 'Accent texte sur sombre'], ['--accent-pale', '#e7d3b5', 'Accent sur photo / vidéo'], ['--line', '#ddd5c7', 'Bordures']] },
  { group: 'Action', items: [['--wa', '#0d7d3e', 'Boutons WhatsApp · 5,2:1'], ['#25d366', '#25d366', 'Bouton flottant (icône seule)']] },
];

const TYPE = [
  ['--fs-display', '40 → 76 px', 'Cormorant 500 · interlignage 1', 'Titre du hero (une seule fois par site)', 'display', 'Tous vos projets'],
  ['--fs-4xl', '38 → 68 px', 'Cormorant 500 · 1,02', 'H1 des pages, chiffres clés, bandeau défilant', 'display', 'Conception architecturale'],
  ['--fs-3xl', '32 → 54 px', 'Cormorant 500 · 1,08', 'H2 de section, citation', 'display', 'Six expertises, un même interlocuteur'],
  ['--fs-2xl', '28 → 40 px', 'Cormorant 500 · 1,08', 'H2 d’article, liste des services, menu mobile', 'display', 'Les étapes de la mission'],
  ['--fs-xl', '24 → 30 px', 'Cormorant 500 · 1,2', 'H3 : cartes, étapes, piliers', 'display', 'Un seul interlocuteur'],
  ['--fs-lg', '20 → 24 px', 'Cormorant 400–500 · 1,3', 'Questions FAQ, numéros, petits titres', 'display', 'Combien coûte un architecte à Casablanca ?'],
  ['--fs-md', '17 → 21 px', 'Manrope 400 · 1,65', 'Chapeau (lead), sous-titre du hero', 'sans', 'Nous accompagnons particuliers, investisseurs et entreprises de l’étude du terrain à la remise des clés.'],
  ['--fs-base', '16 → 17 px', 'Manrope 400 · 1,7', 'Texte courant, champs de formulaire', 'sans', 'Le dossier est ensuite étudié par une commission qui vérifie sa conformité au document d’urbanisme.'],
  ['--fs-sm', '15 px', 'Manrope 400–600', 'Boutons, navigation, texte des cartes, pied de page', 'sans', 'Préparation des plans à autoriser et suivi du dossier.'],
  ['--fs-xs', '14 px', 'Manrope 400–600', 'Fil d’Ariane, libellés de champ, notes, mentions', 'sans', 'Photographies d’illustration. Nos réalisations seront présentées projet par projet.'],
  ['--fs-label', '13 px', 'Manrope 600 · capitales · +0,2em', 'Surtitres et étiquettes uniquement (jamais de phrase)', 'label', 'Nos services'],
];

const SPACE = [['--space-3xs', 4], ['--space-2xs', 8], ['--space-xs', 12], ['--space-sm', 16], ['--space-md', 24], ['--space-lg', 32], ['--space-xl', 48], ['--space-2xl', 64], ['--space-3xl', 96], ['--space-4xl', 128]];

export default function DesignSystem() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Référence interne</p>
        <h1 className="h1">Design system</h1>
        <p className="lead">
          Toutes les tailles, couleurs, espacements et durées du site sont des variables définies une seule fois dans{' '}
          <code>src/app/globals.css</code>. Les composants n’utilisent que ces variables : changer une valeur ici la change partout.
        </p>

        <div className="ds-section">
          <h2>Couleurs</h2>
          <p className="ds-note">Pierre, encre et bronze. Chaque couleur de texte respecte le contraste WCAG AA sur son fond prévu.</p>
          {COLORS.map((g) => (
            <div key={g.group} style={{ marginTop: 'var(--space-lg)' }}>
              <h3 className="h3" style={{ fontSize: 'var(--fs-lg)' }}>{g.group}</h3>
              <div className="ds-swatches">
                {g.items.map(([v, hex, use]) => (
                  <div key={v} className="ds-swatch">
                    <i style={{ background: hex }} />
                    <div>
                      <b>{v}</b>
                      <code>{hex}</code>
                      <div style={{ padding: 0, marginTop: 4, color: 'var(--muted)' }}>{use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="ds-section">
          <h2>Typographie</h2>
          <p className="ds-note">
            Deux familles : <b>Cormorant Garamond</b> pour les titres et les chiffres, <b>Manrope</b> pour le texte et l’interface.
            Une seule échelle fluide de 11 tailles, du mobile (360 px) au bureau (1440 px). Aucun texte sous 13 px, et 13 px est
            réservé aux étiquettes en capitales : une phrase ne descend jamais sous 15 px.
          </p>
          <div className="ds-type">
            {TYPE.map(([v, range, spec, use, kind, sample]) => (
              <div key={v} className="ds-type-row">
                <div className="meta">
                  <b>{v}</b>
                  {range}
                  <br />
                  {spec}
                  <br />
                  {use}
                </div>
                <div
                  className="sample"
                  style={
                    kind === 'display'
                      ? { fontFamily: 'var(--font-display-stack)', fontSize: `var(${v})`, lineHeight: 1.08, letterSpacing: 'var(--tracking-heading)' }
                      : kind === 'label'
                        ? { fontSize: `var(${v})`, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent-ink)' }
                        : { fontSize: `var(${v})` }
                  }
                >
                  {kind === 'display' && v === '--fs-display' ? (
                    <>
                      {sample} <em style={{ color: 'var(--accent-ink)' }}>à la clé.</em>
                    </>
                  ) : (
                    sample
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-section">
          <h2>Espacements</h2>
          <p className="ds-note">
            Base 4 px. Les sections utilisent <code>--section-y</code> (88 → 160 px) et <code>--section-y-sm</code> (60 → 100 px), les
            colonnes <code>--gap-columns</code> (40 → 96 px). Conteneur 1280 px, marges latérales <code>--gutter</code> 20 → 48 px.
          </p>
          <div className="ds-space">
            {SPACE.map(([v, px]) => (
              <div key={v} className="ds-space-row">
                <code>{v} · {px}</code>
                <i style={{ width: px * 3 }} />
              </div>
            ))}
          </div>
        </div>

        <div className="ds-section">
          <h2>Boutons et liens</h2>
          <p className="ds-note">Hauteur 52 px (cible tactile), texte <code>--fs-sm</code> semi-gras. Le vert est réservé à WhatsApp.</p>
          <div className="ds-row">
            <span className="btn btn-wa"><IconWhatsApp /> Parler de mon projet</span>
            <span className="btn btn-dark">Bouton sombre</span>
            <span className="btn btn-outline">Bouton contour</span>
            <Link className="link-arrow" href="/services/" prefetch={false}>Lien fléché <IconArrow /></Link>
          </div>
          <div className="ds-row ds-dark" style={{ marginTop: 'var(--space-md)' }}>
            <span className="btn btn-light"><IconPhone /> Bouton clair</span>
            <span className="btn btn-ghost">Bouton transparent</span>
            <span className="link-arrow light">Lien sur fond sombre <IconArrow /></span>
          </div>
        </div>

        <div className="ds-section">
          <h2>Mouvement</h2>
          <p className="ds-note">
            Courbe <code>--ease</code> pour tout, <code>--ease-curtain</code> pour l’ouverture des images. Les blocs apparaissent en
            fondu montant ; les photos s’ouvrent comme un rideau ; les grandes images défilent en parallaxe ; la ligne de la méthode
            se trace au défilement. Tout est coupé quand l’utilisateur demande moins
            d’animations (<code>prefers-reduced-motion</code>), et le titre du hero n’est jamais masqué pour garder un LCP rapide.
          </p>
        </div>
      </div>
    </section>
  );
}
