export interface AppointmentFormInput {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  doctor?: string;
  date: string;
  timeSlot: string;
  notes?: string;
  isNewPatient?: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateAppointmentForm(input: Partial<AppointmentFormInput>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Basic phone verification: at least 7 digits
  const phoneDigits = (input.phone || "").replace(/\D/g, "");
  if (!input.phone || phoneDigits.length < 7) {
    errors.phone = "Please enter a valid contact phone number (at least 7 digits).";
  }

  if (!input.treatment || input.treatment.trim() === "") {
    errors.treatment = "Please select a dental service or treatment.";
  }

  if (!input.date) {
    errors.date = "Please select a preferred appointment date.";
  } else {
    // Check if date is not in the past
    const selected = new Date(input.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selected.getTime()) || selected < today) {
      errors.date = "Please select today or a future date.";
    }
  }

  if (!input.timeSlot || input.timeSlot.trim() === "") {
    errors.timeSlot = "Please choose a preferred time slot.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function generateAppointmentRef(prefix: string = "FLS"): string {
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${year}-${randomSuffix}`;
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = ('' + phone).replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned[0] === '1') {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}

export function filterArticles<T extends { title: string; category: string; excerpt: string }>(
  articles: T[],
  category: string,
  searchQuery: string
): T[] {
  return articles.filter((article) => {
    const matchesCategory =
      category === "All" || article.category.toLowerCase() === category.toLowerCase();
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
}
