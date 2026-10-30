export interface Dentist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  education: string;
  experienceYears: number;
  socials: {
    chat?: string;
    website?: string;
    linkedin?: string;
    share?: string;
  };
}

export const dentistsData: Dentist[] = [
  {
    id: "dr-michael-carter",
    name: "Dr. Michael Carter",
    title: "Chief Dentist",
    specialty: "Restorative & Implant Dentistry",
    bio: "With over 14 years of clinical experience, Dr. Carter leads our clinic with a focus on minimally invasive dental restoration and guided implant precision.",
    image: "/assets/aistudio/dentist-headshot-1.webp",
    education: "D.D.S. University of California, San Francisco",
    experienceYears: 14,
    socials: {
      chat: "#",
      website: "#",
      linkedin: "https://linkedin.com",
      share: "#",
    },
  },
  {
    id: "dr-sarah-bennett",
    name: "Dr. Sarah Bennett",
    title: "Chief Orthodontist",
    specialty: "Clear Aligners & Aesthetic Braces",
    bio: "Dr. Bennett specializes in modern orthodontic alignment, crafting seamless smiles for teens and adults using digital 3D planning and clear aligners.",
    image: "/assets/aistudio/dentist.webp",
    education: "M.S. Orthodontics, Columbia University",
    experienceYears: 11,
    socials: {
      chat: "#",
      website: "#",
      linkedin: "https://linkedin.com",
      share: "#",
    },
  },
  {
    id: "dr-james-patel",
    name: "Dr. James Patel",
    title: "Cosmetic Specialist",
    specialty: "Veneers & Digital Smile Design",
    bio: "Known for his meticulous artistic touch, Dr. Patel designs lifelike porcelain veneers and aesthetic dental restorations with gentle, pain-free technique.",
    image: "/assets/aistudio/dentist-headshot-2.webp",
    education: "D.M.D. Harvard School of Dental Medicine",
    experienceYears: 9,
    socials: {
      chat: "#",
      website: "#",
      linkedin: "https://linkedin.com",
      share: "#",
    },
  },
];
