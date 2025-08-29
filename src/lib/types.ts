export interface Badge {
  label: string;
  icon: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  badges: Badge[];
}

export interface Testimonial {
  name: string;
  feedback: string;
  imageUrl: string;
}