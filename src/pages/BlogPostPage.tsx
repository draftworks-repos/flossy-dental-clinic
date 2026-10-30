import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight, Lightbulb } from 'lucide-react';
import { articlesData } from '../data/articles';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Related articles
  const relatedArticles = articlesData.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
      {/* Back to Blog */}
      <div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#347BFF] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        {/* Unboxed Metadata */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#667085]">
          <span className="text-[#347BFF] font-semibold">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishDate}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101828] tracking-tight leading-tight">
          {article.title}
        </h1>

        {/* Author Byline */}
        <div className="flex items-center justify-between pt-2 border-y border-[#E5ECF5] py-3">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#E5ECF5]"
            />
            <div>
              <span className="font-heading font-bold text-xs sm:text-sm text-[#101828] block">
                {article.author.name}
              </span>
              <span className="text-[11px] text-[#667085]">{article.author.role}</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: article.title, url: window.location.href });
              }
            }}
            aria-label="Share article"
            className="flex items-center gap-1.5 text-xs text-[#667085] hover:text-[#347BFF] px-3 py-1.5 rounded-lg border border-[#E5ECF5] bg-white cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="relative overflow-hidden rounded-3xl aspect-[16/9] bg-[#EEF5FF] border border-[#E5ECF5]">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-slate max-w-none text-[#101828] leading-relaxed space-y-6">
        <p className="text-base sm:text-lg text-[#334155] font-normal leading-relaxed">
          {article.content.intro}
        </p>

        {article.content.sections.map((section, idx) => (
          <div key={idx} className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101828] tracking-tight">
              {section.heading}
            </h2>
            {section.body.map((para, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base text-[#475467] leading-relaxed">
                {para}
              </p>
            ))}

            {section.tip && (
              <div className="bg-[#EAF3FF] p-4 sm:p-5 rounded-2xl border border-[#D5E6FF] flex items-start gap-3 my-4">
                <Lightbulb className="w-5 h-5 text-[#347BFF] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#101828]">
                  <strong className="font-semibold text-[#347BFF] block mb-0.5">Clinical Note:</strong>
                  {section.tip}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="bg-[#EEF5FF] p-6 rounded-2xl border border-[#E5ECF5] mt-6">
          <h3 className="font-heading font-bold text-base text-[#101828] mb-1.5">
            Key Takeaways & Consultation
          </h3>
          <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
            {article.content.conclusion}
          </p>
        </div>
      </div>

      {/* Related Articles Grid */}
      {relatedArticles.length > 0 && (
        <div className="pt-8 border-t border-[#E5ECF5]">
          <h3 className="font-heading font-bold text-xl text-[#101828] mb-6">
            Related Dental Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="group bg-[#EAF3FF] p-5 rounded-2xl border border-[#D5E6FF] flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="overflow-hidden rounded-xl aspect-[16/10] mb-3 bg-white">
                    <img
                      src={rel.thumbnail}
                      alt={rel.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#347BFF]">{rel.category}</span>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#101828] group-hover:text-[#347BFF] transition-colors mt-1">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-3 mt-3 border-t border-[#D5E6FF] flex items-center gap-1 text-xs font-semibold text-[#101828] group-hover:text-[#347BFF]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
