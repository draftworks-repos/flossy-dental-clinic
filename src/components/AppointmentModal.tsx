import React, { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Stethoscope,
} from "lucide-react";
import { treatmentsData } from "../data/treatments";
import { dentistsData } from "../data/dentists";
import {
  validateAppointmentForm,
  generateAppointmentRef,
} from "../utils/appointment";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
  initialDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
  initialDoctor,
}) => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: initialTreatment || "teeth-whitening",
    doctor: initialDoctor || "dr-michael-carter",
    date: "",
    timeSlot: "10:00 AM",
    notes: "",
    isNewPatient: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedRef, setConfirmedRef] = useState("");

  if (!isOpen) return null;

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
    setConfirmedRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setConfirmedRef("");
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
    onClose();
  };

  const selectedTreatmentObj = treatmentsData.find(
    (t) => t.id === formData.treatment,
  );
  const selectedDoctorObj = dentistsData.find((d) => d.id === formData.doctor);

  // Today in YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5ECF5] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5ECF5] bg-[#EEF5FF]">
          <div>
            <span className="text-xs font-semibold text-[#347BFF] uppercase tracking-wider">
              Draftworks Dental Clinic
            </span>
            <h3
              id="appointment-modal-title"
              className="text-xl font-bold text-[#101828]"
            >
              {isSubmitted ? "Appointment Confirmed" : "Book An Appointment"}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#667085] hover:text-[#101828] hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 bg-[#EEF5FF] text-[#347BFF] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#101828]">
                  You're Scheduled!
                </h4>
                <p className="text-sm text-[#667085] mt-1 max-w-md mx-auto">
                  We've reserved your dental appointment. A confirmation email
                  and SMS reminder have been dispatched to your contact details.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-[#EAF3FF] rounded-2xl p-5 text-left border border-[#D5E6FF] space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#D5E6FF]">
                  <span className="text-xs font-semibold text-[#347BFF] uppercase">
                    Reference ID
                  </span>
                  <span className="text-sm font-mono font-bold text-[#101828] bg-white px-2.5 py-0.5 rounded-md border border-[#D5E6FF]">
                    {confirmedRef}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#667085] block">Patient Name</span>
                    <span className="font-semibold text-[#101828] text-sm">
                      {formData.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#667085] block">
                      Selected Treatment
                    </span>
                    <span className="font-semibold text-[#101828] text-sm">
                      {selectedTreatmentObj?.title || formData.treatment}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#667085] block">Date & Time</span>
                    <span className="font-semibold text-[#101828] text-sm">
                      {formData.date} at {formData.timeSlot}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#667085] block">
                      Assigned Doctor
                    </span>
                    <span className="font-semibold text-[#101828] text-sm">
                      {selectedDoctorObj?.name || "Assigned on arrival"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="w-full py-3 px-4 bg-[#347BFF] hover:bg-[#2468E8] text-white font-medium rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="modal-name"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#667085] absolute left-3 top-3" />
                    <input
                      id="modal-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Jessica Reynolds"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.name
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#E5ECF5]"
                      } focus:outline-none focus:border-[#347BFF] focus:ring-1 focus:ring-[#347BFF]`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="modal-email"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#667085] absolute left-3 top-3" />
                    <input
                      id="modal-email"
                      name="email"
                      type="email"
                      placeholder="e.g. jessica@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.email
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#E5ECF5]"
                      } focus:outline-none focus:border-[#347BFF] focus:ring-1 focus:ring-[#347BFF]`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-phone"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#667085] absolute left-3 top-3" />
                    <input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. (555) 019-2834"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.phone
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#E5ECF5]"
                      } focus:outline-none focus:border-[#347BFF] focus:ring-1 focus:ring-[#347BFF]`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Treatment */}
                <div>
                  <label
                    htmlFor="modal-treatment"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Treatment <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Stethoscope className="w-4 h-4 text-[#667085] absolute left-3 top-3" />
                    <select
                      id="modal-treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#E5ECF5] focus:outline-none focus:border-[#347BFF] bg-white cursor-pointer"
                    >
                      {treatmentsData.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.treatment && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.treatment}
                    </p>
                  )}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-date"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#667085] absolute left-3 top-3" />
                    <input
                      id="modal-date"
                      name="date"
                      type="date"
                      min={todayStr}
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.date
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#E5ECF5]"
                      } focus:outline-none focus:border-[#347BFF] bg-white`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-red-600 mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-time"
                    className="block text-xs font-semibold text-[#101828] mb-1"
                  >
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#667085] absolute left-3 top-3" />
                    <select
                      id="modal-time"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#E5ECF5] focus:outline-none focus:border-[#347BFF] bg-white cursor-pointer"
                    >
                      <option value="09:00 AM">09:00 AM - Morning</option>
                      <option value="10:00 AM">10:00 AM - Morning</option>
                      <option value="11:30 AM">11:30 AM - Morning</option>
                      <option value="01:30 PM">01:30 PM - Afternoon</option>
                      <option value="03:00 PM">03:00 PM - Afternoon</option>
                      <option value="04:30 PM">04:30 PM - Evening</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Doctor */}
              <div>
                <label
                  htmlFor="modal-doctor"
                  className="block text-xs font-semibold text-[#101828] mb-1"
                >
                  Doctor Preference
                </label>
                <select
                  id="modal-doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5ECF5] focus:outline-none focus:border-[#347BFF] bg-white cursor-pointer"
                >
                  <option value="first-available">
                    First Available Specialist
                  </option>
                  {dentistsData.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.title})
                    </option>
                  ))}
                </select>
              </div>

              {/* New Patient Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  id="modal-isNewPatient"
                  name="isNewPatient"
                  type="checkbox"
                  checked={formData.isNewPatient}
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-[#347BFF] focus:ring-[#347BFF] border-[#E5ECF5] cursor-pointer"
                />
                <label
                  htmlFor="modal-isNewPatient"
                  className="text-xs text-[#667085] cursor-pointer"
                >
                  I am a new patient (qualifies for the{" "}
                  <span className="text-[#347BFF] font-medium">
                    $99 Welcome Special
                  </span>
                  )
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#347BFF] hover:bg-[#2468E8] text-white font-medium rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Reservation</span>
                </button>
                <p className="text-[11px] text-[#667085] text-center mt-2">
                  No payment required today. Cancel or reschedule anytime with
                  24h notice.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
