import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface SeoAndBreadcrumbProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs: BreadcrumbItem[];
  onNavigate: (path: string) => void;
  faqs?: { question: string; answer: string }[];
  serviceType?: string;
  articleSchema?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    authorRole?: string;
    category?: string;
    readingTime?: string;
    keywords?: string[];
    image?: string;
  };
  blogPostingList?: {
    headline: string;
    slug: string;
    datePublished: string;
    category: string;
    description: string;
  }[];
  hideVisualBreadcrumbs?: boolean;
}

export const SeoAndBreadcrumb: React.FC<SeoAndBreadcrumbProps> = ({
  title,
  description,
  path,
  breadcrumbs,
  onNavigate,
  faqs,
  serviceType,
  articleSchema,
  blogPostingList,
  hideVisualBreadcrumbs,
}) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://botlytices.com';
  const canonicalUrl = `${origin}${path}`;

  useEffect(() => {
    document.title = title;

    const setMetaTag = (selector: string, attr: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const propMatch = selector.match(/property="([^"]+)"/);
          if (propMatch) el.setAttribute('property', propMatch[1]);
        } else if (selector.includes('name=')) {
          const nameMatch = selector.match(/name="([^"]+)"/);
          if (nameMatch) el.setAttribute('name', nameMatch[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    // Canonical URL link element
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag(
      'meta[property="og:type"]',
      'content',
      articleSchema ? 'article' : 'website'
    );
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);

    if (articleSchema) {
      setMetaTag(
        'meta[property="article:published_time"]',
        'content',
        articleSchema.datePublished
      );
      setMetaTag(
        'meta[property="article:modified_time"]',
        'content',
        articleSchema.dateModified
      );
      if (articleSchema.category) {
        setMetaTag('meta[property="article:section"]', 'content', articleSchema.category);
      }
      if (articleSchema.keywords && articleSchema.keywords.length > 0) {
        setMetaTag('meta[name="keywords"]', 'content', articleSchema.keywords.join(', '));
      }
    }
  }, [title, description, path, canonicalUrl, articleSchema]);

  const schemaGraph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: 'BOTLYTICES',
      url: origin,
      description:
        'Technology and digital solutions company providing Web Development, IT Support & Infrastructure, Digital Presence & Branding, AI Automation, and Security & Surveillance.',
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${origin}/#localbusiness`,
      name: 'BOTLYTICES',
      url: origin,
      email: 'info@botlytices.com',
      description:
        'Technology partner delivering custom websites, IT infrastructure, local search & branding, AI voice & WhatsApp automation, and commercial CCTV & access control systems.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.label,
        item: item.path ? `${origin}${item.path}` : canonicalUrl,
      })),
    },
  ];

  if (serviceType) {
    schemaGraph.push({
      '@type': 'Service',
      name: serviceType,
      provider: { '@id': `${origin}/#organization` },
      description,
      url: canonicalUrl,
    });
  }

  if (articleSchema) {
    schemaGraph.push({
      '@type': ['Article', 'BlogPosting'],
      headline: articleSchema.headline,
      description,
      articleSection: articleSchema.category || 'Technology',
      keywords: articleSchema.keywords?.join(', ') || articleSchema.category,
      datePublished: articleSchema.datePublished,
      dateModified: articleSchema.dateModified,
      author: {
        '@type': 'Organization',
        name: articleSchema.authorName,
        jobTitle: articleSchema.authorRole,
      },
      publisher: { '@id': `${origin}/#organization` },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
    });
  }

  if (blogPostingList && blogPostingList.length > 0) {
    schemaGraph.push({
      '@type': 'Blog',
      '@id': `${origin}/blog#blog`,
      name: 'BOTLYTICES Insights, Guides & Technology Updates',
      description,
      publisher: { '@id': `${origin}/#organization` },
      blogPost: blogPostingList.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.headline,
        description: post.description,
        articleSection: post.category,
        datePublished: post.datePublished,
        url: `${origin}/blog/${post.slug}`,
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  const shouldHideVisual = hideVisualBreadcrumbs || path === '/';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': schemaGraph,
          }),
        }}
      />
      {!shouldHideVisual && (
        <div className="bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-[#5D687A]">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={`${crumb.label}-${idx}`}>
                    {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />}
                    {crumb.path && !isLast ? (
                      <button
                        onClick={() => onNavigate(crumb.path!)}
                        className="hover:text-[#006BFF] transition-colors cursor-pointer font-medium"
                      >
                        {crumb.label}
                      </button>
                    ) : (
                      <span className="text-[#0A1020] font-semibold truncate max-w-[260px] sm:max-w-none">
                        {crumb.label}
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
