export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Eleanor Vance",
    role: "Operations Director",
    company: "St Jude's Care Home Group",
    avatar: "/images/testimonial-care.png",
    quote: "HUNEZ didn't give us a generic 100-page report. They came into our care homes, understood our staff shifts and resident needs, and gave us practical steps that cut our heating bills and emissions within weeks.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Thorne",
    role: "Managing Director",
    company: "Thorne & Sons Logistics",
    avatar: "/images/testimonial-hospitality.png",
    quote: "As an SME, we felt overwhelmed by corporate net zero jargon. Dr Masse and Dr Desmond made carbon footprinting understandable and commercially realistic for our fleet and facilities.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sarah Lin",
    role: "General Manager",
    company: "Boutique Stay & Dining Co",
    avatar: "/images/testimonial-sarah.png",
    quote: "The human-centred approach made all the difference. Our kitchen and front-of-house teams are genuinely engaged in our sustainability goals now.",
    rating: 5,
  },
];
