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
    id: "kenneth-nkembeng",
    name: "Kenneth Ekokobe (Fuanke) Nkembeng",
    role: "Director of Operations",
    company: "Commercial & Ecological Solutions",
    avatar: "/images/kenneth-nkembeng.jpg",
    quote:
      "Working with HUNEZ transformed our operational approach to net zero. Their human-centred methodologies helped our teams cut waste and lower energy consumption seamlessly without compromising performance.",
    rating: 5,
  },
  {
    id: "dikum-steve",
    name: "Engineer Dikum Steve",
    role: "Chief Engineer & Technical Lead",
    company: "Engineering & Infrastructure Services",
    avatar: "/images/dikum-steve.jpg",
    quote:
      "The technical rigor and practical science HUNEZ brings is outstanding. They helped us quantify Scope 1 and 2 emissions accurately and build a realistic, commercially viable carbon reduction roadmap.",
    rating: 5,
  },
  {
    id: "t1",
    name: "Eleanor Vance",
    role: "Operations Director",
    company: "St Jude's Care Home Group",
    avatar: "/images/testimonial-care.png",
    quote:
      "HUNEZ didn't give us a generic 100-page report. They came into our care homes, understood our staff shifts and resident needs, and gave us practical steps that cut our heating bills and emissions within weeks.",
    rating: 5,
  },
];
