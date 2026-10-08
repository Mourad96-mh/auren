'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { ZONES, ZONE_COORDS } from '@/lib/site';

const CENTER = [33.55, -7.62];
const RADIUS_M = 38000; // reaches Mohammedia and Berrechid
// Side of the permanent label for each outlying town, so neighbours never overlap.
const LABEL_SIDE = { 'Dar Bouazza': 'left', Bouskoura: 'left', 'Ville Verte': 'right', Mohammedia: 'top', 'Tit Mellil': 'right', Nouaceur: 'right', Berrechid: 'right' };
const OFFSET = { top: [0, -8], left: [-8, 0], right: [8, 0], bottom: [0, 8] };

// Interactive service-area map. Leaflet is only downloaded when the map nears the screen,
// so it never weighs on the first paint. The chip lists work (and stay readable) without it.
export default function ZonesMap() {
  const box = useRef(null);
  const api = useRef(null);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let map;
    let cancelled = false;
    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const L = (await import('leaflet')).default;
        if (cancelled) return;
        const touch = window.matchMedia('(pointer: coarse)').matches;
        const labels = !touch && el.offsetWidth >= 560; // permanent town labels only where they have room
        map = L.map(el, {
          center: CENTER,
          zoom: 10,
          scrollWheelZoom: false, // never hijack the page scroll
          dragging: !touch, // one finger scrolls the page on phones; zoom buttons still work
          attributionControl: true,
          zoomControl: true,
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 16,
          minZoom: 8,
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        L.circle(CENTER, {
          radius: RADIUS_M,
          color: '#80592a',
          weight: 1.5,
          dashArray: '6 8',
          fillColor: '#b08a5b',
          fillOpacity: 0.08,
          interactive: false,
        }).addTo(map);

        const markers = {};
        const all = [];
        for (const [group, names] of [['casablanca', ZONES.casablanca], ['peripherie', ZONES.peripherie]]) {
          for (const name of names) {
            const ll = ZONE_COORDS[name];
            if (!ll) continue;
            const m = L.circleMarker(ll, {
              radius: group === 'casablanca' ? 6 : 7,
              color: '#fff',
              weight: 2,
              fillColor: group === 'casablanca' ? '#80592a' : '#17150f',
              fillOpacity: 1,
            })
              .bindTooltip(name, (() => {
                const side = (labels && group === 'peripherie' && LABEL_SIDE[name]) || 'top';
                return { direction: side, offset: OFFSET[side], className: 'zone-tip', permanent: labels && group === 'peripherie' };
              })())
              .addTo(map);
            m.on('mouseover', () => setActive(name));
            m.on('mouseout', () => setActive(null));
            markers[name] = m;
            all.push(ll);
          }
        }
        map.fitBounds(L.latLngBounds(all), { padding: [36, 36] });
        const home = map.getBounds();

        api.current = {
          focus(name) {
            const m = markers[name];
            if (!m) return;
            Object.values(markers).forEach((x) => x.setStyle({ radius: x === m ? 10 : x.options.fillColor === '#80592a' ? 6 : 7 }));
            map.flyTo(m.getLatLng(), ZONES.casablanca.includes(name) ? 13 : 12, { duration: 0.8 });
            m.openTooltip();
          },
          reset() {
            Object.values(markers).forEach((x) => x.setStyle({ radius: x.options.fillColor === '#80592a' ? 6 : 7 }));
            map.flyToBounds(home, { duration: 0.8 });
          },
        };
        setReady(true);
      },
      { rootMargin: '400px 0px' }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
      if (map) map.remove();
    };
  }, []);

  const pick = (name) => {
    const next = active === name ? null : name;
    setActive(next);
    if (!api.current) return;
    next ? api.current.focus(next) : api.current.reset();
  };

  const chips = (names) => (
    <ul className="zone-list">
      {names.map((z) => (
        <li key={z}>
          <button type="button" className={active === z ? 'is-active' : ''} aria-pressed={active === z} onClick={() => pick(z)}>
            {z}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="zones-map-grid">
      <div className={`zones-map ${ready ? 'is-ready' : ''}`}>
        <div ref={box} className="zones-map-canvas" role="region" aria-label="Carte des zones d’intervention autour de Casablanca" />
        <p className="zones-map-legend" aria-hidden="true">
          <span><i className="dot dot-city" /> Quartiers de Casablanca</span>
          <span><i className="dot dot-region" /> Périphérie et région</span>
          <span><i className="ring" /> Rayon d’intervention ≈ 40 km</span>
        </p>
      </div>
      <div className="zones-lists">
        <h3>Casablanca</h3>
        {chips(ZONES.casablanca)}
        <h3>Périphérie et région</h3>
        {chips(ZONES.peripherie)}
        <p className="zones-hint">Touchez une zone pour la situer sur la carte.</p>
      </div>
    </div>
  );
}
