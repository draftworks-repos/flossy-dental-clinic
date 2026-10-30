import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Calendar, Tag } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { articlesData } from '../data/articles';

export const BlogPreviewSection: React.FC = () => {
  const featuredArticles = articlesData.slice(0, 3);

  return (
    <section className="mb-16 md:mb-24 lg:mb-28">
      <SectionHeading
        title="Insights For A Healthier Smile"
        blueWords={['Healthier Smile']}
        description="Explore our blog for expert dental tips, the latest industry insights, and advice on maintaining a healthy, beautiful smile."
        action={{
          label: 'Our Blog',
          icon: BookOpen,
          href: '/blog'
        }}
      />

      {/* Blog Cards: 2 in first row, 3rd in 2nd row on tablet; single column on mobile; 3 in row on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredArticles.map((article) => (
          <article
            key={article.slug}
            className="group bg-[#EAF3FF] rounded-2xl p-5 border border-[#D5E6FF] flex flex-col justify-between transition-all duration-300 hover:shadow-md"
          >
            <div>
              {/* Thumbnail */}
              <Link to={`/blog/${article.slug}`} className="block overflow-hidden rounded-xl bg-white aspect-[16/10] mb-4 border border-[#D5E6FF]">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>

              {/* Clean metadata without pill boxes */}
              <div className="flex items-center gap-2 text-xs text-[#667085] mb-2.5 font-medium">
                <span className="text-[#347BFF]">{article.category}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{article.publishDate}</span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#101828] group-hover:text-[#347BFF] transition-colors leading-snug line-clamp-2">
                <Link to={`/blog/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>
            </div>

            {/* Read More Link */}
            <div className="pt-4 mt-4 border-t border-[#D5E6FF]">
              <Link
                to={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101828] group-hover:text-[#347BFF] transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
