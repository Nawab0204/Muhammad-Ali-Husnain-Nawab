import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  BookOpen,
  Share2,
  Search,
  ChevronDown,
  ListChecks,
} from 'lucide-react';
import {
  BLOG_ARTICLES,
  BLOG_CATEGORIES,
  BlogArticle,
  BlogCategory,
} from '../data/blogArticles';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';

interface BlogPagesProps {
  selectedSlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const BlogPages: React.FC<BlogPagesProps> = ({
  selectedSlug,
  onNavigate,
  onOpenQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Track reading progress & active Table of Contents section on article detail view
  useEffect(() => {
    if (!selectedSlug) {
      setReadingProgress(0);
      return;
    }

    const article =
      BLOG_ARTICLES.find((a) => a.slug === selectedSlug) || BLOG_ARTICLES[0];
    if (article.sections.length > 0) {
      setActiveSectionId(article.sections[0].id);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setReadingProgress(pct);

      // Update active TOC section based on scroll position
      for (let i = article.sections.length - 1; i >= 0; i--) {
        const secId = article.sections[i].id;
        const el = document.getElementById(secId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSectionId(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedSlug]);

  // ============================================================================
  // INDIVIDUAL BLOG ARTICLE DETAIL PAGE (/blog/[article])
  // ============================================================================
  if (selectedSlug) {
    const currentIndex = BLOG_ARTICLES.findIndex((a) => a.slug === selectedSlug);
    const resolvedIndex = currentIndex >= 0 ? currentIndex : 0;
    const article: BlogArticle = BLOG_ARTICLES[resolvedIndex];

    const prevArticle =
      resolvedIndex > 0 ? BLOG_ARTICLES[resolvedIndex - 1] : null;
    const nextArticle =
      resolvedIndex < BLOG_ARTICLES.length - 1
        ? BLOG_ARTICLES[resolvedIndex + 1]
        : null;

    const relatedArticles = BLOG_ARTICLES.filter(
      (a) => a.slug !== article.slug
    ).slice(0, 3);

    const handleShare = () => {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2500);
      }
    };

    const scrollToSection = (sectionId: string) => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSectionId(sectionId);
      }
    };

    return (
      <div className="bg-[#FFFFFF]">
        {/* Top Reading Progress Indicator */}
        <div className="fixed top-[61px] left-0 w-full h-1 bg-transparent z-40 pointer-events-none">
          <div
            className="h-full bg-[#006BFF] transition-all duration-100"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        <SeoAndBreadcrumb
          title={article.metaTitle}
          description={article.metaDescription}
          path={`/blog/${article.slug}`}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Blog', path: '/blog' },
            { label: article.category, path: '/blog' },
            { label: article.title },
          ]}
          onNavigate={onNavigate}
          faqs={article.articleFaqs}
          articleSchema={{
            headline: article.title,
            datePublished: article.isoPublishedDate,
            dateModified: article.isoUpdatedDate,
            authorName: article.author,
            authorRole: article.authorRole,
            category: article.category,
            readingTime: article.readingTime,
            keywords: article.keywords,
            image: article.image,
          }}
        />

        {/* Semantic Article Container */}
        <article itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="headline" content={article.title} />
          <meta itemProp="description" content={article.metaDescription} />
          <meta itemProp="articleSection" content={article.category} />

          {/* Article Header */}
          <header className="py-12 lg:py-16 bg-[#FFFFFF] border-b border-[#E6EBF2]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onNavigate('/blog')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#5D687A] hover:text-[#006BFF] cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Insights &amp; Guides</span>
                </button>

                <button
                  onClick={() => {
                    setActiveCategory(article.category);
                    onNavigate('/blog');
                  }}
                  className="text-xs font-mono-code font-bold text-[#006BFF] hover:underline uppercase cursor-pointer"
                >
                  Category: {article.category}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[#5D687A]">
                <span className="font-mono-code font-bold text-[#006BFF] uppercase">
                  {article.category}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#006BFF]" />
                  <span>{article.readingTime}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#006BFF]" />
                  <span>Published </span>
                  <time itemProp="datePublished" dateTime={article.isoPublishedDate}>
                    {article.publishedDate}
                  </time>
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  Updated{' '}
                  <time itemProp="dateModified" dateTime={article.isoUpdatedDate}>
                    {article.updatedDate}
                  </time>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.12]">
                {article.title}
              </h1>

              <p className="text-base sm:text-xl text-[#5D687A] leading-relaxed">
                {article.subtitle}
              </p>

              {/* Author & Share Row */}
              <div className="pt-4 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-4 text-xs">
                <div
                  className="flex items-center gap-3"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <div className="w-9 h-9 rounded-full bg-[#F3F7FC] border border-[#E6EBF2] flex items-center justify-center text-[#006BFF]">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0A1020]" itemProp="name">
                      {article.author}
                    </div>
                    <div className="text-[#5D687A]">{article.authorRole}</div>
                  </div>
                </div>

                <button
                  onClick={handleShare}
                  className="px-3.5 py-2 rounded-lg bg-[#F8FAFC] hover:bg-[#F3F7FC] border border-[#E6EBF2] text-xs font-semibold text-[#0A1020] inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#006BFF]" />
                  <span>{copiedShare ? 'Article Link Copied' : 'Share Article'}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Featured Hero Image */}
          <div className="py-8 bg-[#F8FAFC] border-b border-[#E6EBF2]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <figure className="rounded-2xl bg-white border border-[#E6EBF2] p-3 shadow-sm">
                <div className="aspect-16/9 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    itemProp="image"
                    src={article.image}
                    alt={article.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="pt-2.5 px-2 text-xs text-[#5D687A]">
                  {article.imageAlt}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Article Body + Interactive Sticky Table of Contents + Related Service Sidebar */}
          <div className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Sidebar: Interactive Table of Contents & Connected Services */}
                <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                  {/* Table of Contents */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                        Table of Contents
                      </span>
                      <span className="text-[11px] font-mono-code text-[#5D687A]">
                        {Math.round(readingProgress)}% read
                      </span>
                    </div>

                    <nav aria-label="Table of Contents" className="space-y-1.5">
                      {article.sections.map((sec) => {
                        const isCurrent = activeSectionId === sec.id;
                        return (
                          <button
                            key={sec.id}
                            onClick={() => scrollToSection(sec.id)}
                            className={`w-full text-left py-2 px-3 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                              isCurrent
                                ? 'bg-white text-[#006BFF] font-bold border border-[#E6EBF2] shadow-2xs'
                                : 'text-[#5D687A] hover:text-[#0A1020] hover:bg-white/60 font-medium'
                            }`}
                          >
                            <span className="leading-snug">{sec.heading}</span>
                            {isCurrent && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#006BFF] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                      {article.articleFaqs && article.articleFaqs.length > 0 && (
                        <button
                          onClick={() => scrollToSection('article-faq')}
                          className={`w-full text-left py-2 px-3 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer ${
                            activeSectionId === 'article-faq'
                              ? 'bg-white text-[#006BFF] font-bold border border-[#E6EBF2]'
                              : 'text-[#5D687A] hover:text-[#0A1020] font-medium'
                          }`}
                        >
                          Frequently Asked Questions
                        </button>
                      )}
                    </nav>
                  </div>

                  {/* Connected Services Sidebar */}
                  <div className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-4">
                    <div className="text-xs font-bold text-[#0A1020] uppercase tracking-wider">
                      Related BOTLYTICES Services
                    </div>
                    <p className="text-xs text-[#5D687A] leading-relaxed">
                      Need help implementing the strategies covered in this guide? Explore our
                      corresponding service divisions:
                    </p>
                    <div className="space-y-2">
                      {article.relatedServiceLinks.map((srv) => (
                        <button
                          key={srv.path}
                          onClick={() => onNavigate(srv.path)}
                          className="w-full p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#F3F7FC] border border-[#E6EBF2] text-left text-xs font-bold text-[#0A1020] hover:text-[#006BFF] flex items-center justify-between transition-colors cursor-pointer"
                        >
                          <span>{srv.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </aside>

                {/* Main Editorial Body */}
                <div className="lg:col-span-8 space-y-12" itemProp="articleBody">
                  {/* Executive Summary / Key Takeaways Box */}
                  {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                    <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                        <ListChecks className="w-4 h-4" />
                        <span>Key Takeaways (Executive Summary)</span>
                      </div>
                      <ul className="space-y-2.5">
                        {article.keyTakeaways.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm text-[#0A1020] font-medium leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#006BFF] mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Structured H2 / H3 Sections */}
                  {article.sections.map((sec) => (
                    <section
                      key={sec.id}
                      id={sec.id}
                      className="scroll-mt-28 space-y-4"
                    >
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display tracking-tight">
                        {sec.heading}
                      </h2>

                      {sec.paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-base text-[#5D687A] leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}

                      {sec.callout && (
                        <div className="p-6 rounded-2xl bg-[#F3F7FC] border-l-4 border-[#006BFF] space-y-1.5 my-4">
                          <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                            {sec.callout.label}
                          </div>
                          <p className="text-sm sm:text-base font-medium text-[#0A1020] leading-relaxed">
                            {sec.callout.text}
                          </p>
                        </div>
                      )}

                      {sec.subSections && sec.subSections.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          {sec.subSections.map((sub) => (
                            <div
                              key={sub.subHeading}
                              className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2"
                            >
                              <h3 className="text-base font-bold text-[#0A1020] font-display">
                                {sub.subHeading}
                              </h3>
                              <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">
                                {sub.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.checklist && sec.checklist.length > 0 && (
                        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3 mt-4">
                          <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                            Key Implementation Checklist
                          </div>
                          <ul className="space-y-2.5">
                            {sec.checklist.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-[#0A1020] font-medium"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#006BFF] mt-0.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </section>
                  ))}

                  {/* Article-Specific AEO FAQ Section */}
                  {article.articleFaqs && article.articleFaqs.length > 0 && (
                    <section id="article-faq" className="scroll-mt-28 pt-6 border-t border-[#E6EBF2] space-y-4">
                      <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                        Common Questions
                      </div>
                      <h2 className="text-2xl font-bold text-[#0A1020] font-display">
                        Frequently Asked Questions About {article.category}
                      </h2>
                      <div className="space-y-3">
                        {article.articleFaqs.map((faq, idx) => {
                          const isOpen = openFaqIdx === idx;
                          return (
                            <div
                              key={faq.question}
                              className="rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] overflow-hidden"
                            >
                              <button
                                onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                              >
                                <span className="text-sm sm:text-base font-bold text-[#0A1020]">
                                  {faq.question}
                                </span>
                                <ChevronDown
                                  className={`w-4 h-4 text-[#5D687A] shrink-0 transition-transform ${
                                    isOpen ? 'rotate-180 text-[#006BFF]' : ''
                                  }`}
                                />
                              </button>
                              {isOpen && (
                                <div className="px-5 pb-5 pt-2 text-sm text-[#5D687A] leading-relaxed border-t border-[#E6EBF2] bg-white">
                                  {faq.answer}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* SEO Topic Keywords Bar */}
                  <div className="pt-6 border-t border-[#E6EBF2] flex flex-wrap items-center gap-2 text-xs text-[#5D687A]">
                    <span className="font-bold text-[#0A1020] mr-1">Topics Covered:</span>
                    {article.keywords.map((kw, i) => (
                      <React.Fragment key={kw}>
                        {i > 0 && <span aria-hidden="true">·</span>}
                        <span>{kw}</span>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Author Bio Card */}
                  <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="space-y-1.5">
                      <div className="text-xs font-mono-code font-bold text-[#006BFF]">
                        Written by {article.author} ({article.authorRole})
                      </div>
                      <h3 className="text-lg font-bold text-[#0A1020] font-display">
                        Practical Technology &amp; Digital Solutions
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5D687A] max-w-xl">
                        Our engineering and digital specialists design websites, support business IT,
                        build search visibility, deploy AI workflows, and install security systems.
                      </p>
                    </div>
                    <button
                      onClick={() => onOpenQuote(article.category)}
                      className="px-6 py-3 text-xs font-semibold btn-primary-gradient inline-flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Previous / Next Article Navigation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {prevArticle ? (
                      <button
                        onClick={() => onNavigate(`/blog/${prevArticle.slug}`)}
                        className="p-5 rounded-2xl bg-white border border-[#E6EBF2] hover:border-[#006BFF] text-left transition-all cursor-pointer group"
                      >
                        <div className="text-xs text-[#5D687A] flex items-center gap-1 mb-1">
                          <ArrowLeft className="w-3.5 h-3.5 text-[#006BFF]" />
                          <span>Previous Article</span>
                        </div>
                        <div className="text-sm font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors line-clamp-2">
                          {prevArticle.title}
                        </div>
                      </button>
                    ) : (
                      <div />
                    )}

                    {nextArticle && (
                      <button
                        onClick={() => onNavigate(`/blog/${nextArticle.slug}`)}
                        className="p-5 rounded-2xl bg-white border border-[#E6EBF2] hover:border-[#006BFF] text-right transition-all cursor-pointer group"
                      >
                        <div className="text-xs text-[#5D687A] flex items-center justify-end gap-1 mb-1">
                          <span>Next Article</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#006BFF]" />
                        </div>
                        <div className="text-sm font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors line-clamp-2">
                          {nextArticle.title}
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="text-xs text-[#5D687A] mb-1">Continue Reading</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                  Related Insights &amp; Guides
                </h2>
              </div>
              <button
                onClick={() => onNavigate('/blog')}
                className="text-xs font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedArticles.map((rel) => (
                <article
                  key={rel.slug}
                  onClick={() => onNavigate(`/blog/${rel.slug}`)}
                  className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden flex flex-col justify-between premium-card cursor-pointer group"
                >
                  <div>
                    <div className="aspect-16/10 bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                      <img
                        src={rel.image}
                        alt={rel.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#5D687A]">
                        <span className="font-semibold text-[#006BFF]">{rel.category}</span>
                        <span>{rel.readingTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display leading-snug">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-[#5D687A] leading-relaxed line-clamp-3">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-3 border-t border-[#E6EBF2] flex items-center justify-between text-xs">
                    <span className="text-[#5D687A]">{rel.publishedDate}</span>
                    <span className="font-bold text-[#006BFF] inline-flex items-center gap-1">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <div className="text-xs font-mono-code text-[#00C8FF]">Need Practical Help?</div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
                  Ready to apply these technology improvements to your business?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base">
                  Contact our team for a straightforward consultation on your website, SEO, IT, or
                  AI automation goals.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-7 py-4 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ============================================================================
  // BLOG / INSIGHTS INDEX PAGE (/blog)
  // ============================================================================
  const featuredArticle =
    BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesCategory =
      activeCategory === 'All' || article.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === '' ||
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      article.keywords.some((k) => k.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (cat: 'All' | BlogCategory) => {
    if (cat === 'All') return BLOG_ARTICLES.length;
    return BLOG_ARTICLES.filter((a) => a.category === cat).length;
  };

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Insights, Guides & Technology Updates | BOTLYTICES Blog"
        description="Practical articles on websites, SEO, AI automation, IT systems, digital presence and business technology."
        path="/blog"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Blog' },
        ]}
        onNavigate={onNavigate}
        blogPostingList={BLOG_ARTICLES.map((a) => ({
          headline: a.title,
          slug: a.slug,
          datePublished: a.isoPublishedDate,
          category: a.category,
          description: a.metaDescription,
        }))}
      />

      {/* Blog Hero + Search + Category Filter Bar */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-5">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                06 · Knowledge Hub &amp; Technical Insights
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
                Insights, Guides &amp; Technology Updates.
              </h1>
              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed max-w-2xl">
                Practical articles on websites, SEO, AI automation, IT systems, digital presence
                and business technology.
              </p>
            </div>

            {/* Live Article Search */}
            <div className="lg:col-span-4">
              <div className="relative">
                <Search className="w-4 h-4 text-[#5D687A] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs sm:text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                />
              </div>
            </div>
          </div>

          {/* Category Filter Bar with Article Counts */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-[#E6EBF2]">
            {(['All', ...BLOG_CATEGORIES] as const).map((cat) => {
              const count = getCategoryCount(cat);
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#006BFF] text-white shadow-sm'
                      : 'bg-[#F8FAFC] text-[#5D687A] border border-[#E6EBF2] hover:text-[#0A1020]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono-code ${
                      isSelected ? 'text-white/80' : 'text-[#94A3B8]'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article Highlight */}
      {activeCategory === 'All' && searchQuery.trim() === '' && (
        <section className="py-14 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
              onClick={() => onNavigate(`/blog/${featuredArticle.slug}`)}
              className="rounded-3xl bg-white border border-[#E6EBF2] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm hover:border-[#006BFF]/40 transition-colors cursor-pointer group"
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#5D687A]">
                  <span className="font-mono-code font-bold text-[#006BFF] uppercase">
                    Featured Guide · {featuredArticle.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.readingTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display tracking-tight leading-snug">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-[#5D687A] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                {featuredArticle.keyTakeaways && (
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1.5">
                    <div className="text-[11px] font-mono-code font-bold text-[#006BFF] uppercase">
                      What You Will Learn:
                    </div>
                    <p className="text-xs text-[#0A1020] font-medium">
                      {featuredArticle.keyTakeaways[0]}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 text-xs">
                  <time
                    dateTime={featuredArticle.isoPublishedDate}
                    className="text-[#5D687A]"
                  >
                    {featuredArticle.publishedDate}
                  </time>
                  <span className="font-bold text-[#006BFF] inline-flex items-center gap-1.5">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 border border-[#E6EBF2]">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="p-10 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] text-center space-y-3 max-w-xl mx-auto">
              <div className="text-lg font-bold text-[#0A1020] font-display">
                No articles matched your filter
              </div>
              <p className="text-xs sm:text-sm text-[#5D687A]">
                Try resetting the category filter or searching for another technology topic.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#006BFF] text-white text-xs font-semibold cursor-pointer"
              >
                Show All Articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  onClick={() => onNavigate(`/blog/${article.slug}`)}
                  className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden flex flex-col justify-between premium-card cursor-pointer group"
                >
                  <div>
                    <div className="aspect-16/10 bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#5D687A]">
                        <span className="font-semibold text-[#006BFF]">
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-[#006BFF]" />
                          {article.readingTime}
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display leading-snug">
                        {article.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-[#E6EBF2] flex items-center justify-between text-xs">
                    <time
                      dateTime={article.isoPublishedDate}
                      className="text-[#5D687A]"
                    >
                      {article.publishedDate}
                    </time>
                    <span className="font-bold text-[#006BFF] inline-flex items-center gap-1">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="text-xs font-mono-code text-[#00C8FF]">
                Have a Technical Question?
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
                Speak directly with our engineering &amp; digital team.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Whether you need a custom website, SEO/AEO improvements, IT support, or AI
                automation, we are ready to help.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-7 py-4 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
