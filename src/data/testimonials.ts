export interface Testimonial {
  id: string;
  name: string;
  title: string;
  comment: string;
  rating: number;
  avatar: string;
  treatment: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    name: "Jessica Reynolds",
    title: "The Best Dental Care!",
    comment:
      "Dr. Michael Carter and his team made my smile brighter with their amazing teeth whitening service. The results were far beyond my expectations!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    treatment: "Teeth Whitening",
  },
  {
    id: "review-2",
    name: "Mark Thompson",
    title: "A Pain-Free Experience!",
    comment:
      "I was nervous about getting dental implants, but Dr. James Patel made the process smooth and painless. I can finally smile with confidence!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    treatment: "Dental Implants",
  },
  {
    id: "review-3",
    name: "Emily Watson",
    title: "The Perfect Smile",
    comment:
      "At Draftworks, Dr. Sarah Bennett helped me straighten my teeth with clear aligners. The process was easy, and the results are amazing!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    treatment: "Clear Aligners",
  },
  {
    id: "review-4",
    name: "David Chen",
    title: "Exceptional Staff & Modern Tech",
    comment:
      "The 3D dental imaging and digital diagnostics are incredible. You can see everything clearly on screen and they walk you through every step.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    treatment: "Cosmetic Restoration",
  },
];
