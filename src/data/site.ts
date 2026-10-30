export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; description?: string }[];
}

export const siteConfig = {
  name: "Draftworks",
  fullName: "Draftworks Dental Clinic",
  tagline: "Creating Beautiful Smiles With Expert Care",
  description:
    "At Draftworks, we believe that a healthy smile is the key to confidence and well-being. Our expert team provides top-quality, patient-centered care in a comfortable environment.",
  contact: {
    address: "123 Smile Avenue, Suite 400, Dental City, CA 90210",
    phone: "+1 (555) 123-4567",
    emergencyPhone: "+1 (555) 999-DENT",
    email: "contact@Draftworksdental.com",
    supportEmail: "care@Draftworksdental.com",
  },
  hours: [
    { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { days: "Sunday", hours: "Closed (Emergency On-Call)" },
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "YouTube", url: "https://youtube.com" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    {
      label: "Pages",
      href: "#",
      dropdown: [
        {
          label: "All Treatments",
          href: "/services",
          description: "Comprehensive dental services",
        },
        {
          label: "Meet Our Doctors",
          href: "/about#team",
          description: "Expert dental practitioners",
        },
        {
          label: "Patient FAQ",
          href: "/services#faq",
          description: "Common questions answered",
        },
        {
          label: "Special Offer",
          href: "/contact?offer=welcome",
          description: "New patient welcome package",
        },
        {
          label: "Contact Clinic",
          href: "/contact",
          description: "Directions, hours & inquiries",
        },
      ],
    },
  ],
};
