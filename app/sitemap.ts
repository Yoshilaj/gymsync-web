import type { MetadataRoute } from 'next';

const BASE = 'https://gymsyncapp.me';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/support`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/privacy-policy`, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE}/terms-of-service`, changeFrequency: 'monthly', priority: 0.3 },
  ];
}
