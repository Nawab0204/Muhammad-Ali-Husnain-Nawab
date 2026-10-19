/**
 * Latest Engineering Blogs & Technology Guides Section.
 * Features rectangular article cards linking directly to deep technical reads.
 */

import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES } from '../../../data/blogArticles';
import { useApp } from '../../../context/AppContext';

interface HomeBlogSectionProps {
  onNavigate?: (path: string) => void;
}

export const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({ onNavigate }) => {
  const { navigate: contextNavigate } = useApp();
  const navigate = onNavigate || contextNavigate;

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold text-[#006BFF] uppercase tracking-wider">
              Knowledge Hub &amp; Articles
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] tracking-tight">
              Latest Blogs &amp; Technology Guides
            </h2>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Practical insights on web development, SEO &amp; AEO search visibility, AI voice &amp; WhatsApp automation, office networking, and commercial security.
            </p>
          </div>

          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold bg-[#006BFF] hover:bg-[#087CFF] text-white rounded-full inline-flex items-center gap-2 cursor-pointer shrink-0 transition-all shadow-sm"
          >
            <span>View All Blog Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              onClick={() => navigate(`/blog/${article.slug}`)}
              className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#006BFF] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative aspect-video bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#07152E]/85 text-[11px] font-mono font-bold text-[#00C8FF]">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5D687A]">
                    <span>{article.publishedDate}</span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#006BFF]">
                      <BookOpen className="w-3.5 h-3.5" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E6EBF2] flex items-center justify-between text-xs font-bold text-[#006BFF]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
