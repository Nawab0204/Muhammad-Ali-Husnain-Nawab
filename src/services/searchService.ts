/**
 * Fast cross-site search and discovery service.
 * Powers global search, FAQ filtering, and blog taxonomy matching.
 */

import { APP_ROUTES, RouteDefinition } from '../config/routes';

export interface SearchMatch {
  title: string;
  path: string;
  description: string;
  category: string;
  score: number;
}

export const searchService = {
  /**
   * Performs fuzzy-like keyword search across all registered routes & content
   */
  search(query: string, maxResults: number = 8): SearchMatch[] {
    const term = query.trim().toLowerCase();
    if (!term) return [];

    const matches: SearchMatch[] = [];

    for (const route of APP_ROUTES) {
      const titleLower = route.title.toLowerCase();
      const descLower = route.description.toLowerCase();
      const pathLower = route.path.toLowerCase();

      let score = 0;

      if (titleLower.includes(term)) {
        score += titleLower.startsWith(term) ? 100 : 50;
      }
      if (pathLower.includes(term)) {
        score += 30;
      }
      if (descLower.includes(term)) {
        score += 20;
      }

      if (score > 0) {
        matches.push({
          title: route.breadcrumbLabel || route.title,
          path: route.path,
          description: route.description,
          category: route.category,
          score,
        });
      }
    }

    return matches.sort((a, b) => b.score - a.score).slice(0, maxResults);
  },
};
