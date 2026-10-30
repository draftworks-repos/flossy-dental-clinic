export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  publishDate: string;
  isoDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  thumbnail: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
  relatedSlugs: string[];
}

export const articlesData: BlogArticle[] = [
  {
    slug: "teeth-whitening-guide",
    title: "The Ultimate Guide To Teeth Whitening",
    category: "Cosmetic Dentistry",
    publishDate: "March 22, 2026",
    isoDate: "2026-03-22",
    readTime: "4 min read",
    author: {
      name: "Dr. James Patel",
      role: "Cosmetic Specialist",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80",
    },
    thumbnail:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Learn how modern in-office laser whitening and custom take-home solutions differ, what causes enamel staining, and how to preserve your bright smile safely.",
    content: {
      intro:
        "A bright, radiant smile can boost your self-confidence both socially and professionally. However, daily consumption of coffee, tea, red wine, and natural aging can gradually darken tooth enamel. In this guide, our cosmetic specialists break down the science of whitening.",
      sections: [
        {
          heading: "How Professional Whitening Works",
          body: [
            "Unlike over-the-counter abrasive toothpastes that merely scrub surface stains, professional whitening utilizes high-concentration hydrogen peroxide or carbamide peroxide gels. When activated by specialized LED or laser light, oxygen molecules penetrate microscopic enamel pores to dissolve deep organic discoloration.",
            "In our clinic, treatment takes approximately 60 minutes and yields results between 4 to 8 shades lighter in a single comfortable session.",
          ],
          tip: "Always ensure a dental exam is performed prior to whitening to ensure no active cavities or exposed roots are present.",
        },
        {
          heading: "Preventing Post-Whitening Sensitivity",
          body: [
            "A frequent concern patients voice is temporary tooth sensitivity following whitening. Modern protocols at Draftworks incorporate potassium nitrate and amorphous calcium phosphate desensitizers before and after the gel application.",
            "This seals dentinal tubules and ensures virtually painless recovery without lingering sensitivity.",
          ],
        },
        {
          heading: "Maintaining Your Results",
          body: [
            "To extend your whitening results for years, practice the 'white diet' for the first 48 hours following treatment: avoid dark berries, soy sauce, and pigmented beverages.",
            "Pairing good daily hygiene with annual touch-up trays will keep your enamel luminous.",
          ],
        },
      ],
      conclusion:
        "Whitening your teeth under the supervision of a licensed dentist is safe, fast, and clinically proven. Schedule your consultation with Draftworks today to learn which protocol fits your goals.",
    },
    relatedSlugs: ["essential-tips-healthy-gums", "braces-vs-clear-aligners"],
  },
  {
    slug: "essential-tips-healthy-gums",
    title: "5 Essential Tips For Healthy Gums",
    category: "Oral Health",
    publishDate: "March 15, 2026",
    isoDate: "2026-03-15",
    readTime: "5 min read",
    author: {
      name: "Dr. Michael Carter",
      role: "Chief Dentist",
      avatar:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80",
    },
    thumbnail:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Gum health is the foundational anchor of your teeth. Discover evidence-based daily routines to prevent gingivitis, reduce bleeding, and protect your jawbone.",
    content: {
      intro:
        "Periodontal health is often overlooked until gums begin to bleed, swell, or recede. The truth is that healthy pink gums are the biological foundation keeping your teeth anchored for life.",
      sections: [
        {
          heading: "1. Perfect Your Interdental Cleaning",
          body: [
            "Brushing alone cleans only 60% of tooth surfaces. Plaque biofilm accumulates aggressively in the tight spaces between teeth where bristles cannot reach.",
            "Whether you use traditional waxed floss, interdental proxy brushes, or high-pressure water flossers, daily cleaning between teeth is non-negotiable.",
          ],
        },
        {
          heading: "2. Adopt the 45-Degree Angle Technique",
          body: [
            "Angle your soft-bristled brush at 45 degrees towards your gumline. Use gentle vibrating circular strokes rather than harsh horizontal sawing, which can wear away gum tissue and cause enamel erosion.",
          ],
          tip: "Soft or ultra-soft bristles are always recommended; hard bristles damage both delicate gums and exposed cementum.",
        },
        {
          heading: "3. Address Bleeding Immediately",
          body: [
            "Bleeding gums are not normal. They are the earliest clinical indicator of gingival inflammation. With professional ultrasonic scaling and diligent home care, gingivitis can be completely reversed within two weeks.",
          ],
        },
      ],
      conclusion:
        "Don't wait for minor gum tenderness to evolve into irreversible bone loss. Routine checkups at Draftworks safeguard your oral health.",
    },
    relatedSlugs: ["teeth-whitening-guide", "preventive-care-routine"],
  },
  {
    slug: "braces-vs-clear-aligners",
    title: "Braces Vs. Clear Aligners: Which One Is Better?",
    category: "Orthodontics",
    publishDate: "March 10, 2026",
    isoDate: "2026-03-10",
    readTime: "6 min read",
    author: {
      name: "Dr. Sarah Bennett",
      role: "Chief Orthodontist",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
    },
    thumbnail:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Comparing aesthetics, treatment time, comfort, dietary freedom, and cost between modern clear aligners and ceramic bracket systems.",
    content: {
      intro:
        "Choosing how to straighten your smile is a major decision. Advances in modern orthodontics mean patients now have multiple aesthetic, discreet options available.",
      sections: [
        {
          heading: "Aesthetic Discretion & Lifestyle Flexibility",
          body: [
            "Clear aligners are custom thermoformed plastic trays that sit seamlessly over your dental arch. They are virtually unnoticeable during conversation and can be removed for special events, meals, and sports.",
            "Modern ceramic braces, while fixed, feature translucent brackets that blend with natural tooth enamel, offering a much subtler profile than vintage metal tracks.",
          ],
        },
        {
          heading: "Compliance vs. Convenience",
          body: [
            "Aligners require strict compliance: you must wear them 20 to 22 hours per day, only removing them to eat and drink anything other than cool water.",
            "Fixed braces, by contrast, work 24/7 without requiring you to remember to put them back in after meals.",
          ],
          tip: "Patients who frequently snack or drink coffee throughout the day often find fixed ceramic braces more effortless than constantly removing aligners.",
        },
        {
          heading: "Complex Biomechanical Corrections",
          body: [
            "While aligner technology has advanced to handle severe crowding and crossbites, certain skeletal jaw discrepancies or severely rotated molars respond faster and more reliably to fixed bracket mechanics.",
          ],
        },
      ],
      conclusion:
        "During your initial 3D digital scan at Draftworks, Dr. Sarah Bennett will simulate both treatment trajectories so you can make an empowered choice.",
    },
    relatedSlugs: ["teeth-whitening-guide", "essential-tips-healthy-gums"],
  },
  {
    slug: "preventive-care-routine",
    title: "The Science Behind Modern Dental Sealants",
    category: "Prevention",
    publishDate: "February 28, 2026",
    isoDate: "2026-02-28",
    readTime: "3 min read",
    author: {
      name: "Dr. Michael Carter",
      role: "Chief Dentist",
      avatar:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80",
    },
    thumbnail:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "How microscopic medical resin shields tooth crevices against bacteria and prevents up to 80% of molar cavities in both kids and adults.",
    content: {
      intro:
        "The chewing surfaces of your back molars feature deep grooves called pits and fissures. Often, these anatomical grooves are narrower than a single toothbrush bristle, making them prime territory for food trapping.",
      sections: [
        {
          heading: "A Physical Protective Shield",
          body: [
            "Dental sealants are thin, biocompatible resin coatings painted onto the chewing grooves. They cure under blue light in seconds, creating a glass-smooth barrier that seals out bacteria and food debris.",
          ],
        },
      ],
      conclusion:
        "Sealants are painless, require no drilling or anesthesia, and last for up to 9 years with normal care.",
    },
    relatedSlugs: ["essential-tips-healthy-gums", "teeth-whitening-guide"],
  },
];
