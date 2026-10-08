import { absUrl } from '@/lib/site';

export const dynamic = 'force-static';

// AI answer engines are welcomed explicitly so the studio can be cited (GEO).
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot-Extended',
  'CCBot',
];

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }, ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/' }))],
    sitemap: absUrl('/sitemap.xml'),
    host: absUrl('/'),
  };
}
