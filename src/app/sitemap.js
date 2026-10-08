import { SERVICES } from '@/lib/services';
import { GUIDES } from '@/lib/guides';
import { absUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = 'monthly', lastModified = now) => ({
    url: absUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    page('/', 1, 'weekly'),
    page('/services/', 0.9),
    ...SERVICES.map((s) => page(`/services/${s.slug}/`, 0.9)),
    page('/projets/', 0.7),
    page('/le-studio/', 0.6),
    page('/guides/', 0.6),
    ...GUIDES.map((g) => page(`/guides/${g.slug}/`, 0.7, 'monthly', new Date(g.updated || g.published))),
    page('/contact/', 0.8),
  ];
}
