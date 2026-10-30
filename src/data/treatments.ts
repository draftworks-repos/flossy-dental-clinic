export interface Treatment {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  duration: string;
  priceEstimate: string;
  recoveryTime: string;
  isFeaturedHomepage?: boolean;
}

export const treatmentsData: Treatment[] = [
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Teeth Whitening",
    tagline: "Brighten your smile up to 8 shades lighter",
    shortDescription:
      "Brighten your smile with safe and effective professional whitening treatments.",
    fullDescription:
      "Our professional in-office laser whitening and custom take-home kits deliver dramatic, enamel-safe brightening in as little as 60 minutes. We use calibrated dental-grade hydrogen peroxide solutions with active desensitizing agents for maximum comfort.",
    image: "/temp/clinic-6.webp",
    iconName: "Sparkles",
    features: [
      "In-office 1-hour fast whitening",
      "Custom-fitted night trays included",
      "Zero enamel damage guarantee",
      "Pre-treatment sensitivity buffer",
    ],
    duration: "60 - 90 mins",
    priceEstimate: "$299 - $499",
    recoveryTime: "Immediate",
    isFeaturedHomepage: true,
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "Dental Implants",
    tagline: "Permanent, natural-looking tooth replacement",
    shortDescription:
      "Restore missing teeth permanently with natural-looking dental implants.",
    fullDescription:
      "Replace missing teeth with biocompatible titanium or ceramic roots topped with bespoke porcelain crowns. Implants preserve your facial jawbone structure, match your natural bite strength, and look completely authentic.",
    image: "/temp/clinic-5.webp",
    iconName: "Layers",
    features: [
      "3D guided surgical precision",
      "Grade-5 biocompatible titanium",
      "Custom shade matching",
      "Lifetime structural warranty",
    ],
    duration: "2 - 3 visits",
    priceEstimate: "$1,800 - $3,500",
    recoveryTime: "2 - 5 days",
    isFeaturedHomepage: true,
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    category: "Cosmetic Dentistry",
    tagline: "Artistic smile makeovers tailored to you",
    shortDescription:
      "Enhance the look of your smile with veneers, bonding, and more.",
    fullDescription:
      "Transform chipped, discolored, or uneven teeth with custom porcelain veneers, composite bonding, and gum contouring. Each smile makeover starts with a digital 3D preview so you can approve your ideal smile before treatment begins.",
    image: "/temp/clinic-7.webp",
    iconName: "Smile",
    features: [
      "Ultra-thin porcelain veneers",
      "Micro-invasive composite bonding",
      "Digital smile design preview",
      "Natural translucency matching",
    ],
    duration: "1 - 2 appointments",
    priceEstimate: "$600 - $2,200 per tooth",
    recoveryTime: "1 - 2 days",
    isFeaturedHomepage: true,
  },
  {
    id: "general-dentistry",
    title: "General Dentistry",
    category: "General Dentistry",
    tagline: "Comprehensive checkups, cleanings, and tooth care",
    shortDescription:
      "Comprehensive diagnostic exams, gentle hygiene cleanings, and routine oral health maintenance.",
    fullDescription:
      "From ultrasonic tartar removal to low-radiation digital x-rays and cavity screenings, our general dentistry keeps your teeth and gums healthy year-round.",
    image: "/temp/dentist-headshot-1.webp",
    iconName: "Stethoscope",
    features: [
      "Ultrasonic tartar removal",
      "Digital low-radiation 3D imaging",
      "Oral cancer screening",
      "Personalized preventive regimen",
    ],
    duration: "45 - 60 mins",
    priceEstimate: "$120 - $250",
    recoveryTime: "None",
  },
  {
    id: "braces-and-aligners",
    title: "Braces and Clear Aligners",
    category: "Orthodontics",
    tagline: "Discreet alignment for teens and adults",
    shortDescription:
      "Straighten misaligned teeth comfortably using custom clear aligners or low-profile ceramic braces.",
    fullDescription:
      "Achieve optimal alignment without cumbersome metal wires. Our clear aligners are virtually invisible, removable for eating and brushing, and engineered to guide your teeth gently into place.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    iconName: "Compass",
    features: [
      "Nearly invisible aligner trays",
      "3D digital progression simulation",
      "Removable for eating & hygiene",
      "Progress checks every 6-8 weeks",
    ],
    duration: "6 - 18 months",
    priceEstimate: "$2,800 - $4,800",
    recoveryTime: "None",
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Endodontics",
    tagline: "Gentle pain relief and natural tooth preservation",
    shortDescription:
      "Painless root canal therapy designed to relieve infection and save your natural tooth.",
    fullDescription:
      "Modern root canal treatment is comfortable and routine. Using rotary endodontics and local anesthesia, we eliminate infected pulp, sterilize the root canals, and protect the tooth with a durable crown.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    iconName: "ShieldAlert",
    features: [
      "Painless computerized anesthesia",
      "Rotary microscopic instrumentation",
      "Saves damaged natural tooth",
      "Reinforced protective ceramic seal",
    ],
    duration: "60 - 90 mins",
    priceEstimate: "$750 - $1,400",
    recoveryTime: "1 - 3 days",
  },
  {
    id: "preventive-care",
    title: "Preventive Care",
    category: "Prevention",
    tagline: "Early detection and fluoride sealants",
    shortDescription:
      "Protective fluoride treatments, fissure sealants, and periodontal therapies to prevent decay.",
    fullDescription:
      "Stop cavities before they start with high-adhesion sealants and remineralizing fluoride varnish. Ideal for patients prone to decay or with sensitive tooth necks.",
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80",
    iconName: "ShieldCheck",
    features: [
      "Medical enamel sealants",
      "Targeted remineralization varnish",
      "Periodontal pocket monitoring",
      "Salivary microbiome testing",
    ],
    duration: "30 - 45 mins",
    priceEstimate: "$80 - $180",
    recoveryTime: "None",
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    category: "Pediatric",
    tagline: "Warm, anxiety-free dental visits for children",
    shortDescription:
      "Gentle, fun dental care tailored to kids, building lifelong confidence in healthy smiles.",
    fullDescription:
      "Our pediatric team specializes in positive, child-centered visits. We teach playful brushing techniques, apply gentle dental sealants, and ensure your little one leaves smiling every time.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    iconName: "HeartHandshake",
    features: [
      "Gentle, stress-free environment",
      "Child-sized instruments",
      "Cavity prevention coaching",
      "Complimentary reward treasure box",
    ],
    duration: "30 - 45 mins",
    priceEstimate: "$90 - $160",
    recoveryTime: "None",
  },
];
