import type { ReactNode } from "react";
import { FAQItem } from "../utils/faqExtractor";

export type CategoryValue = "all" | "skincare" | "weight" | "aging" | "treatments";

export interface Category {
  label: string;
  icon: ReactNode;
  value: CategoryValue;
}

export interface Post {
  id: number;
  category: Omit<CategoryValue, "all">;
  tag: string;
  title: string;
  content?: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
  featured: boolean;
  
    seo?: {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    robots?: string;
  };
  faqs?: FAQItem[];
}

export interface TagColorConfig {
  bg: string;
  text: string;
  dot: string;
}