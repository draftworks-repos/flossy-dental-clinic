import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, ChevronDown, Menu, X, PhoneCall } from "lucide-react";
import { siteConfig } from "../data/site";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const handleOpenDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setPagesDropdownOpen(true);
  };

  const handleCloseDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setPagesDropdownOpen(false);
    }, 250);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5ECF5] transition-all">
        <div className="page-content-padding py-3.5 flex items-center justify-between">
          {/* Clinic Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#347BFF] rounded-lg"
            onClick={closeMobile}
          >
            <div className="w-8 h-8 rounded-full bg-[#EAF3FF] flex items-center justify-center text-[#347BFF] transition-transform duration-200 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M4 10c0 4.418 3.582 8 8 8s8-3.582 8-8" />
                <path d="M9 13a3 3 0 0 0 6 0" />
              </svg>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-[#101828]">
              Draftworks
            </span>
          </Link>

          {/* Desktop Navigation (visible on lg screens, hidden on tablet and mobile) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#101828]">
            <Link
              to="/"
              className={`transition-colors py-1 hover:text-[#347BFF] ${
                isActive("/")
                  ? "text-[#347BFF] font-semibold"
                  : "text-[#101828]"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors py-1 hover:text-[#347BFF] ${
                isActive("/about")
                  ? "text-[#347BFF] font-semibold"
                  : "text-[#101828]"
              }`}
            >
              About Us
            </Link>

            <Link
              to="/services"
              className={`transition-colors py-1 hover:text-[#347BFF] ${
                isActive("/services")
                  ? "text-[#347BFF] font-semibold"
                  : "text-[#101828]"
              }`}
            >
              Services
            </Link>

            {/* Switched blog with contact */}
            <Link
              to="/contact"
              className={`transition-colors py-1 hover:text-[#347BFF] ${
                isActive("/contact")
                  ? "text-[#347BFF] font-semibold"
                  : "text-[#101828]"
              }`}
            >
              Contact
            </Link>

            {/* Dropdown renamed from Pages to More */}
            <div
              className="relative py-2"
              onMouseEnter={handleOpenDropdown}
              onMouseLeave={handleCloseDropdown}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#347BFF] cursor-pointer focus:outline-none"
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                aria-expanded={pagesDropdownOpen}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    pagesDropdownOpen
                      ? "rotate-180 text-[#347BFF]"
                      : "text-[#667085]"
                  }`}
                />
              </button>

              {pagesDropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-1.5 w-60 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleOpenDropdown}
                  onMouseLeave={handleCloseDropdown}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[#E5ECF5] py-2 overflow-hidden">
                    <Link
                      to="/services"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs text-[#101828] hover:bg-[#EEF5FF] hover:text-[#347BFF] transition-colors"
                    >
                      <span className="font-semibold block">
                        All Treatments
                      </span>
                      <span className="text-[11px] text-[#667085]">
                        Comprehensive care & pricing
                      </span>
                    </Link>
                    <Link
                      to="/about#team"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs text-[#101828] hover:bg-[#EEF5FF] hover:text-[#347BFF] transition-colors"
                    >
                      <span className="font-semibold block">Our Dentists</span>
                      <span className="text-[11px] text-[#667085]">
                        Meet our clinical specialists
                      </span>
                    </Link>
                    <Link
                      to="/services#faq"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs text-[#101828] hover:bg-[#EEF5FF] hover:text-[#347BFF] transition-colors"
                    >
                      <span className="font-semibold block">Patient FAQ</span>
                      <span className="text-[11px] text-[#667085]">
                        Insurance, pain relief & visits
                      </span>
                    </Link>
                    {/* Switched contact & directions to blog */}
                    <Link
                      to="/blog"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs text-[#101828] hover:bg-[#EEF5FF] hover:text-[#347BFF] transition-colors"
                    >
                      <span className="font-semibold block">
                        Dental Blog & Insights
                      </span>
                      <span className="text-[11px] text-[#667085]">
                        Guides, care advice & tips
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Action on Right (lg screens): Book an Appointment */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-[#347BFF] hover:bg-[#2468E8] shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book An Appointment</span>
            </button>
          </div>

          {/* Tablet and Mobile Hamburger Menu Toggle (visible on < lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              aria-label="Quick appointment"
              className="p-2 rounded-xl text-[#347BFF] bg-[#EEF5FF] hover:bg-[#E0EEFF] active:scale-95"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-[#101828] hover:bg-[#EEF5FF] active:scale-95 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Tablet & Mobile Navigation Drawer as an OVERLAY (doesn't push the page) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[61px] z-50 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          onClick={closeMobile}
        >
          <div
            className="bg-white border-b border-[#E5ECF5] px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-61px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2.5 text-base font-medium text-[#101828]">
              <Link
                to="/"
                onClick={closeMobile}
                className={`py-2 px-3 rounded-xl ${
                  isActive("/")
                    ? "bg-[#EEF5FF] text-[#347BFF] font-semibold"
                    : "hover:bg-slate-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMobile}
                className={`py-2 px-3 rounded-xl ${
                  isActive("/about")
                    ? "bg-[#EEF5FF] text-[#347BFF] font-semibold"
                    : "hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={closeMobile}
                className={`py-2 px-3 rounded-xl ${
                  isActive("/services")
                    ? "bg-[#EEF5FF] text-[#347BFF] font-semibold"
                    : "hover:bg-slate-50"
                }`}
              >
                Services & Treatments
              </Link>
              <Link
                to="/contact"
                onClick={closeMobile}
                className={`py-2 px-3 rounded-xl ${
                  isActive("/contact")
                    ? "bg-[#EEF5FF] text-[#347BFF] font-semibold"
                    : "hover:bg-slate-50"
                }`}
              >
                Contact & Location
              </Link>
              {/* <Link
                to="/blog"
                onClick={closeMobile}
                className={`py-2 px-3 rounded-xl ${
                  isActive('/blog') ? 'bg-[#EEF5FF] text-[#347BFF] font-semibold' : 'hover:bg-slate-50'
                }`}
              >
                Dental Blog & Insights
              </Link> */}

              <div className="pt-4 mt-2 border-t border-[#E5ECF5] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    closeMobile();
                    onOpenBooking();
                  }}
                  className="flex-1 py-3 px-4 bg-[#347BFF] hover:bg-[#2468E8] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book An Appointment</span>
                </button>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="py-3 px-4 bg-[#EEF5FF] text-[#347BFF] font-semibold rounded-xl flex items-center justify-center gap-2 text-sm text-center"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
