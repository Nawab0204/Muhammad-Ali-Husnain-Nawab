/**
 * Sitemap & Google Search Console Services.
 * Generates XML schemas, verifies sitemap completeness, and produces structured data.
 */

import { APP_ROUTES, RouteDefinition } from '../config/routes';
import { env } from '../config/env';

export interface SitemapXmlItem {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export const sitemapService = {
  /**
   * Get all indexable routes
   */
  getAllRoutes(): RouteDefinition[] {
    return APP_ROUTES;
  },

  /**
   * Generate canonical absolute URL for a given path
   */
  getAbsoluteUrl(path: string, baseUrl: string = env.appUrl): string {
    const cleanBase = baseUrl.replace(/\/+$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBase}${cleanPath === '/' ? '' : cleanPath}`;
  },

  /**
   * Generates standard XML sitemap string conforming to sitemaps.org/schemas/sitemap/0.9
   */
  generateSitemapXml(baseUrl: string = env.appUrl, lastmodDate: string = new Date().toISOString().split('T')[0]): string {
    const routes = this.getAllRoutes();
    
    const itemsXml = routes
      .map((route) => {
        const fullUrl = this.getAbsoluteUrl(route.path, baseUrl);
        return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmodDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
      })
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${itemsXml}
</urlset>`;
  },

  /**
   * Generates robots.txt content referencing the sitemap
   */
  generateRobotsTxt(baseUrl: string = env.appUrl): string {
    const sitemapUrl = `${baseUrl.replace(/\/+$/, '')}/sitemap.xml`;
    return `# Robots.txt for BOTLYTICES Digital Solutions
# Ensures complete search engine indexability for Googlebot, Bingbot, and AI search agents

User-agent: *
Allow: /

# Canonical Sitemap index
Sitemap: ${sitemapUrl}
`;
  },
};
