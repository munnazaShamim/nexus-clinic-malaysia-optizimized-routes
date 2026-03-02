export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    width: number;
    height: number;
    sizes?: Record<string, {
      source_url: string;
      width: number;
      height: number;
    }>;
  };
}
export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  jetpack_featured_media_url?: string;
  categories: number[];
  tags: number[];
  // Yoast SEO fields
  yoast_head?: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    canonical?: string;
    og_title?: string;
    og_description?: string;
    og_image?: Array<{
      url: string;
      width?: number;
      height?: number;
      type?: string;
    }>;
    og_url?: string;
    og_type?: string;
    twitter_title?: string;
    twitter_description?: string;
    twitter_image?: string;
    twitter_card?: string;
    schema?: any;
    robots?: {
      index?: string;
      follow?: string;
    };
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: 'category' | 'post_tag';
    }>>;
  };
}