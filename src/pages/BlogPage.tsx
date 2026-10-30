import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  BookOpen,
  SlidersHorizontal,
  X,
  Sparkles,
  Check,
} from "lucide-react";
import { articlesData } from "../data/articles";
import { filterArticles } from "../utils/appointment";

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const categories = [
    "All",
    "Cosmetic Dentistry",
    "Oral Health",
    "Orthodontics",
    "Prevention",
  ];

  const filtered = filterArticles(articlesData, selectedCategory, searchQuery);

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28">
      {/* Blog Hero: Full-width, proper-heighted */}
      <section className="w-full bg-[#EEF5FF] rounded-[24px] md:rounded-[36px] py-16 sm:py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border border-[#E5ECF5] text-center flex flex-col items-center justify-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold text-[#347BFF] bg-white border border-[#D5E6FF] shadow-2xs mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Draftworks Insights & Education
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101828] tracking-tight leading-[1.15] max-w-4xl">
          Insights For A <span className="text-[#347BFF]">Healthier Smile</span>
        </h1>
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Evidence-based dental guides, treatment comparisons, and actionable
          oral hygiene habits written directly by our certified dental
          practitioners.
        </p>
      </section>

      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Desktop Category Segmented Tabs (hidden on tablet and mobile) */}
        <div className="hidden lg:flex items-center gap-1.5 p-1 bg-[#EEF5FF] rounded-2xl border border-[#E5ECF5]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-white text-[#347BFF] shadow-xs font-semibold"
                  : "text-[#667085] hover:text-[#101828]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tablet & Mobile Filter Drawer Trigger Button (visible on < lg) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setFilterDrawerOpen(true)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#E5ECF5] bg-white text-xs font-semibold text-[#101828] shadow-2xs hover:bg-[#EEF5FF] transition-all cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#347BFF]" />
            <span>
              Filter Category:{" "}
              <span className="text-[#347BFF] font-bold">
                {selectedCategory}
              </span>
            </span>
          </button>
          {selectedCategory !== "All" && (
            <button
              onClick={() => setSelectedCategory("All")}
              className="p-2.5 rounded-xl border border-[#E5ECF5] bg-white text-xs text-[#667085] hover:text-[#101828]"
              title="Reset Category"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#667085] absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search articles & topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-[#E5ECF5] bg-white focus:outline-none focus:border-[#347BFF] focus:ring-1 focus:ring-[#347BFF]"
          />
        </div>
      </div>

      {/* Slide-over Filter Drawer on Tablet & Mobile */}
      {filterDrawerOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end transition-opacity animate-in fade-in duration-200"
          onClick={() => setFilterDrawerOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white h-full p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5ECF5]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#347BFF]" />
                  <h3 className="font-heading font-bold text-base text-[#101828]">
                    Filter Articles
                  </h3>
                </div>
                <button
                  onClick={() => setFilterDrawerOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#667085] hover:bg-[#EEF5FF]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider block">
                  Select Topic / Category
                </span>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setFilterDrawerOpen(false);
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium transition-all text-left ${
                        selectedCategory === cat
                          ? "bg-[#EEF5FF] text-[#347BFF] font-semibold border border-[#D5E6FF]"
                          : "bg-slate-50 text-[#101828] hover:bg-slate-100 border border-transparent"
                      }`}
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && (
                        <Check className="w-4 h-4 text-[#347BFF]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5ECF5] flex gap-3">
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setFilterDrawerOpen(false);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl border border-[#E5ECF5] text-xs font-semibold text-[#667085] hover:bg-slate-50"
              >
                Reset
              </button>
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="flex-1 py-2.5 px-4 bg-[#347BFF] hover:bg-[#2468E8] text-white text-xs font-semibold rounded-xl"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-[#EEF5FF] rounded-3xl border border-[#E5ECF5]">
          <BookOpen className="w-10 h-10 text-[#667085] mx-auto mb-2 opacity-50" />
          <h3 className="font-heading font-bold text-base text-[#101828]">
            No articles found
          </h3>
          <p className="text-xs text-[#667085] mt-1">
            Try searching with different keywords or switch categories.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-[#347BFF] text-white text-xs font-medium rounded-xl hover:bg-[#2468E8]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="group bg-[#EAF3FF] rounded-2xl p-5 border border-[#D5E6FF] flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Thumbnail */}
                <Link
                  to={`/blog/${article.slug}`}
                  className="block overflow-hidden rounded-xl bg-white aspect-[16/10] mb-4 border border-[#D5E6FF]"
                >
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>

                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-[#667085] mb-2 font-medium">
                  <span className="text-[#347BFF]">{article.category}</span>
                  <span aria-hidden="true" className="text-slate-300">
                    ·
                  </span>
                  <span>{article.publishDate}</span>
                </div>

                {/* Title */}
                <h2 className="font-heading font-bold text-base sm:text-lg text-[#101828] group-hover:text-[#347BFF] transition-colors leading-snug line-clamp-2">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-xs text-[#667085] line-clamp-2 mt-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Read More and Read Time */}
              <div className="pt-4 mt-4 border-t border-[#D5E6FF] flex items-center justify-between">
                <Link
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101828] group-hover:text-[#347BFF] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-[#667085]">
                  {article.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
