import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  CheckCircle2,
  Send,
  AlertCircle,
  Contact,
  Compass,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "../data/site";
import { treatmentsData } from "../data/treatments";
import { dentistsData } from "../data/dentists";
import {
  validateAppointmentForm,
  generateAppointmentRef,
} from "../utils/appointment";

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const offerParam = searchParams.get("offer");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "teeth-whitening",
    doctor: "dr-michael-carter",
    date: "",
    timeSlot: "10:00 AM",
    notes:
      offerParam === "welcome" ? "Claiming $99 Welcome Special Package" : "",
    isNewPatient: offerParam === "welcome",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const todayStr = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateAppointmentForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const ref = generateAppointmentRef();
    setSubmittedRef(ref);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      treatment: "teeth-whitening",
      doctor: "dr-michael-carter",
      date: "",
      timeSlot: "10:00 AM",
      notes: "",
      isNewPatient: true,
    });
  };

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28">
      {/* Contact Hero: Full-width, proper-heighted section */}
      <section className="w-full bg-[#EEF5FF] rounded-[24px] md:rounded-[36px] py-16 sm:py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border border-[#E5ECF5] text-center flex flex-col items-center justify-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold text-[#347BFF] bg-white border border-[#D5E6FF] shadow-2xs mb-4">
          <Contact className="w-3.5 h-3.5" />
          Patient Support & Scheduling
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101828] tracking-tight leading-[1.15] max-w-4xl">
          We're Here For Your <span className="text-[#347BFF]">Smile</span>
        </h1>
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Have a question about our treatments, insurance coverage, or need to
          schedule an appointment? Reach out via our booking form or contact our
          front desk directly.
        </p>

        {/* Quick contact pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#101828]">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#D5E6FF]">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Same-Day Emergency Slots</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#D5E6FF]">
            <span className="w-2 h-2 rounded-full bg-[#347BFF]"></span>
            <span>Free On-Site Parking</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#D5E6FF]">
            <span className="w-2 h-2 rounded-full bg-[#347BFF]"></span>
            <span>PPO Insurance In-Network</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Form with Validation */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5ECF5] shadow-xs">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101828]">
              {submittedRef
                ? "Appointment Request Confirmed"
                : "Request An Appointment"}
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-1">
              Fill in your details below and our scheduling team will reserve
              your spot.
            </p>
          </div>

          {submittedRef ? (
            <div className="bg-[#EAF3FF] rounded-2xl p-6 border border-[#D5E6FF] space-y-4 text-center animate-in fade-in duration-200">
              <div className="w-14 h-14 bg-white text-[#347BFF] rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#101828]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] mt-1 max-w-md mx-auto">
                  Your request has been logged locally in our clinic scheduling
                  queue.
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 text-left border border-[#D5E6FF] space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-[#667085]">Reservation ID:</span>
                  <span className="font-mono font-bold text-[#347BFF]">
                    {submittedRef}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#667085]">Date & Time:</span>
                  <span className="font-semibold text-[#101828]">
                    {formData.date} at {formData.timeSlot}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#667085]">Service:</span>
                  <span className="font-semibold text-[#101828]">
                    {formData.treatment}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#667085]">Contact:</span>
                  <span className="font-semibold text-[#101828]">
                    {formData.phone}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="py-2.5 px-5 bg-[#347BFF] hover:bg-[#2468E8] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Schedule Another Visit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Jessica Reynolds"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.name
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#E5ECF5]"
                    } focus:outline-none focus:border-[#347BFF]`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="jessica@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.email
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#E5ECF5]"
                    } focus:outline-none focus:border-[#347BFF]`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 019-2834"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.phone
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#E5ECF5]"
                    } focus:outline-none focus:border-[#347BFF]`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-treatment"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Select Treatment <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5ECF5] focus:outline-none focus:border-[#347BFF] bg-white cursor-pointer"
                  >
                    {treatmentsData.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-date"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-date"
                    name="date"
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.date
                        ? "border-red-400 bg-red-50/20"
                        : "border-[#E5ECF5]"
                    } focus:outline-none focus:border-[#347BFF] bg-white`}
                  />
                  {errors.date && (
                    <p className="text-xs text-red-600 mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-timeSlot"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Preferred Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5ECF5] focus:outline-none focus:border-[#347BFF] bg-white cursor-pointer"
                  >
                    <option value="09:00 AM">09:00 AM - Morning</option>
                    <option value="10:30 AM">10:30 AM - Morning</option>
                    <option value="01:30 PM">01:30 PM - Afternoon</option>
                    <option value="03:00 PM">03:00 PM - Afternoon</option>
                    <option value="04:30 PM">04:30 PM - Late Day</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-notes"
                  className="block text-xs font-semibold text-[#101828] mb-1"
                >
                  Additional Notes or Questions
                </label>
                <textarea
                  id="contact-notes"
                  name="notes"
                  rows={3}
                  placeholder="Tell us about any specific dental symptoms, anxieties, or questions you have..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5ECF5] focus:outline-none focus:border-[#347BFF]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="contact-isNewPatient"
                  name="isNewPatient"
                  type="checkbox"
                  checked={formData.isNewPatient}
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-[#347BFF] focus:ring-[#347BFF] border-[#E5ECF5] cursor-pointer"
                />
                <label
                  htmlFor="contact-isNewPatient"
                  className="text-xs text-[#667085] cursor-pointer"
                >
                  I am a new patient (eligible for the{" "}
                  <span className="text-[#347BFF] font-medium">
                    $99 Welcome Special
                  </span>
                  )
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#347BFF] hover:bg-[#2468E8] text-white font-medium rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Submit Appointment Request</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Contact Cards, Hours & Map Area */}
        <div className="lg:col-span-5 space-y-6">
          {/* Clinic Contact Information Card */}
          <div className="bg-[#EAF3FF] rounded-3xl p-6 sm:p-7 border border-[#D5E6FF] space-y-4">
            <h3 className="font-heading font-bold text-base sm:text-lg text-[#101828]">
              Clinic Contact Details
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#475467]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#347BFF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#101828] block">
                    Our Practice
                  </span>
                  <span>{siteConfig.contact.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#347BFF] shrink-0" />
                <div>
                  <span className="font-semibold text-[#101828] block">
                    Phone Inquiries
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                    className="text-[#347BFF] hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#347BFF] shrink-0" />
                <div>
                  <span className="font-semibold text-[#101828] block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#347BFF] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#E5ECF5] shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-[#347BFF]" />
              <h3 className="font-heading font-bold text-sm sm:text-base text-[#101828]">
                Office Hours
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-[#667085]">Monday - Friday</span>
                <span className="font-semibold text-[#101828]">
                  9:00 AM - 6:00 PM
                </span>
              </li>
              <li className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-[#667085]">Saturday</span>
                <span className="font-semibold text-[#101828]">
                  10:00 AM - 4:00 PM
                </span>
              </li>
              <li className="flex justify-between items-center py-1.5">
                <span className="text-[#667085]">Sunday</span>
                <span className="text-amber-600 font-medium">
                  Closed (Emergency Line Active)
                </span>
              </li>
            </ul>
          </div>

          {/* Map Embed / Directions Placeholder */}
          <div className="bg-white rounded-3xl p-6 border border-[#E5ECF5] shadow-xs overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading font-bold text-sm text-[#101828]">
                Interactive Location Map
              </h4>
              <span className="text-[11px] text-[#347BFF] bg-[#EEF5FF] px-2 py-0.5 rounded-md font-medium">
                Free Parking Available
              </span>
            </div>

            {/* Stylized Map Canvas */}
            <div className="relative aspect-[16/9] rounded-2xl bg-[#EEF5FF] border border-[#D5E6FF] overflow-hidden flex items-center justify-center text-center p-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#347BFF] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#101828]">
                  {siteConfig.fullName}
                </div>
                <p className="text-[11px] text-[#667085]">
                  {siteConfig.contact.address}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#347BFF] font-semibold hover:underline pt-1"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Open in Google Maps & Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
