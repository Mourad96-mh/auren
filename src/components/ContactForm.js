'use client';

import { useState } from 'react';
import { whatsappLink } from '@/lib/site';
import { SERVICES } from '@/lib/services';
import { IconWhatsApp } from './Icons';

// No backend: the form composes a pre-filled WhatsApp message (encodeURIComponent keeps line breaks).
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      'Bonjour Auren Studio,',
      '',
      `Nom : ${f.get('nom')}`,
      `Téléphone : ${f.get('tel')}`,
      `Besoin : ${f.get('service')}`,
      `Type de projet : ${f.get('type')}`,
      f.get('lieu') ? `Lieu : ${f.get('lieu')}` : null,
      f.get('surface') ? `Surface approximative : ${f.get('surface')} m²` : null,
      '',
      f.get('message') || '',
    ].filter((l) => l !== null);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="nom">Nom et prénom</label>
        <input id="nom" name="nom" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="tel">Téléphone</label>
        <input id="tel" name="tel" type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <div className="field">
        <label htmlFor="service">Votre besoin</label>
        <select id="service" name="service" defaultValue="Projet complet (de l’esquisse à la clé)">
          <option>Projet complet (de l’esquisse à la clé)</option>
          {SERVICES.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="type">Type de projet</label>
        <select id="type" name="type" defaultValue="Villa / maison">
          {['Villa / maison', 'Appartement', 'Immeuble', 'Commerce / restaurant', 'Bureaux', 'Hôtel / riad', 'Équipement / industriel', 'Autre'].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="lieu">Lieu du projet</label>
        <input id="lieu" name="lieu" placeholder="Ex. Casablanca, Californie" />
      </div>
      <div className="field">
        <label htmlFor="surface">Surface approximative (m²)</label>
        <input id="surface" name="surface" inputMode="numeric" />
      </div>
      <div className="field full">
        <label htmlFor="message">Votre projet en quelques mots</label>
        <textarea id="message" name="message" placeholder="Terrain, programme, délais, budget…" />
      </div>
      <div className="full">
        <button type="submit" className="btn btn-wa">
          <IconWhatsApp /> Envoyer sur WhatsApp
        </button>
      </div>
      <p className="form-note full" role="status">
        {sent
          ? 'WhatsApp s’est ouvert avec votre message : il ne reste qu’à l’envoyer.'
          : 'Votre message s’ouvre dans WhatsApp, prêt à être envoyé. Aucune donnée n’est enregistrée sur ce site.'}
      </p>
    </form>
  );
}
