export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "insurance-financing",
    category: "Payment & Insurance",
    question: "Do you accept dental insurance and offer financing plans?",
    answer:
      "Yes! Draftworks accepts most major PPO dental insurance providers including Delta Dental, MetLife, Cigna, Aetna, and Guardian. For out-of-pocket costs or elective cosmetic procedures, we offer flexible 0% interest monthly payment options through CareCredit and our in-house membership wellness plan.",
  },
  {
    id: "pain-free",
    category: "Comfort & Care",
    question: "Is dental treatment truly pain-free?",
    answer:
      "We prioritize patient comfort at every phase. We utilize needle-free topical numbing buffers, computerized local anesthesia delivery (which prevents the pressure sensation of injections), and warm lavender comfort pillows. For nervous patients, light nitrous oxide sedation is also available.",
  },
  {
    id: "emergency-visits",
    category: "Appointments",
    question: "How quickly can I be seen for a dental emergency?",
    answer:
      "We reserve daily priority slots specifically for dental emergencies, toothaches, or broken crowns. Contact our direct emergency line and our on-call dental team will see you same-day or within 24 hours.",
  },
  {
    id: "first-visit",
    category: "Appointments",
    question: "What should I expect during my first visit to Draftworks?",
    answer:
      "Your initial 60-minute visit includes high-definition digital x-rays, intraoral 3D camera photography, a thorough periodontal health assessment, an oral cancer screening, and one-on-one consultation with your dentist to discuss your personal smile goals.",
  },
  {
    id: "whitening-safety",
    category: "Treatments",
    question: "Does professional whitening damage tooth enamel?",
    answer:
      "No. Professional whitening works by oxidizing organic pigment molecules embedded inside tooth pores. It does not dissolve or weaken the inorganic hydroxyapatite crystals that compose healthy enamel.",
  },
];
