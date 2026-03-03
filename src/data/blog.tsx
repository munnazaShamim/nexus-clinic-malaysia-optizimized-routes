import { Sparkles, Leaf, Heart, Zap, BookOpen } from "lucide-react";
import type { Category, TagColorConfig } from "../types/blog";

export const categories: Category[] = [
  { label: "All", icon: <BookOpen size={14} />, value: "all" },
  { label: "Skincare", icon: <Sparkles size={14} />, value: "skincare" },
  { label: "Weight Loss", icon: <Leaf size={14} />, value: "weight" },
  { label: "Anti-Aging", icon: <Heart size={14} />, value: "aging" },
  { label: "Treatments", icon: <Zap size={14} />, value: "treatments" },
];

export const tagColors: Record<string, TagColorConfig> = {
  Skincare: { bg: "bg-rose-50", text: "text-rose-600", dot: "bg-rose-400" },
  "Weight Loss": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-400",
  },
  Laser: { bg: "bg-purple-50", text: "text-purple-600", dot: "bg-purple-400" },
  "Anti-Aging": { bg: "bg-teal-50", text: "text-teal-600", dot: "bg-teal-400" },
  "Clinic Guide": {
    bg: "bg-blue-50",
    text: "text-blue-600",
    dot: "bg-blue-400",
  },
  "GLP-1": {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
  },
  "First Visit": {
    bg: "bg-pink-50",
    text: "text-pink-600",
    dot: "bg-pink-400",
  },
};

export const defaultTagColor: TagColorConfig = {
  bg: "bg-gray-100",
  text: "text-gray-600",
  dot: "bg-gray-400",
};