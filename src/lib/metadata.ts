// src/lib/metadata.ts
import { Metadata } from 'next';
import { fallbackLng, languages } from '@/src/i18n/settings';
import { pageMetadata, type Locale } from '@/src/i18n/metadata';

type GenerateMetadataProps = {
  params: { locale: string } | Promise<{ locale: string }>;
  pageName?: string;
  treatmentSlug?: string;
  customTitle?: string;
  customDescription?: string;
};

export async function generateLocalizedMetadata({
  params,
  pageName = 'home',
  treatmentSlug,
  customTitle,
  customDescription,
}: GenerateMetadataProps): Promise<Metadata> {
  // Await params if it's a promise
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  
  // Get the base metadata for this page
  let title = customTitle;
  let description = customDescription;
  
  if (!title || !description) {
    // Check if page exists in metadata
    if (pageName && pageMetadata[pageName]) {
      const pageMeta = pageMetadata[pageName];
      // Use the requested locale or fallback to English
      const metaContent = pageMeta[locale] || pageMeta[fallbackLng as Locale];
      title = metaContent.title;
      description = metaContent.description;
    } else if (treatmentSlug) {
      // For treatment pages, generate dynamic metadata
      title = `${treatmentSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Treatment in Malaysia | Nexus Clinic`;
      description = `Expert ${treatmentSlug.split('-').join(' ')} treatment in Malaysia. Book consultation with our specialist doctors at Nexus Clinic.`;
    } else {
      // Ultimate fallback
      title = 'Nexus Clinic Malaysia';
      description = 'Premium aesthetic and medical clinic in Malaysia';
    }
  }

  // Build the canonical URL
  const baseUrl = process.env.BASE_URL;
  let path = '';
  
  if (treatmentSlug) {
    path = `/${treatmentSlug}`;
  } else if (pageName && pageName !== 'home') {
    path = `/${pageName}`;
  }
  
  const canonical = locale === fallbackLng 
    ? `${baseUrl}${path}` 
    : `${baseUrl}/${locale}${path}`;

  // Generate alternates for all languages
  const languages: Record<string, string> = {};
  
  // Import languages from settings
  const localeList = ['en', 'ms', 'zh', 'ar', 'id'];
  
  localeList.forEach((lang) => {
    if (lang === fallbackLng) {
      languages[lang] = `${baseUrl}${path}`;
      languages['x-default'] = `${baseUrl}${path}`; // x-default is usually the default language
    } else {
      languages[lang] = `${baseUrl}/${lang}${path}`;
    }
  });

  return {
    title,
    description,
    keywords: pageName === 'home' && pageMetadata.home[locale]?.keywords 
      ? pageMetadata.home[locale].keywords 
      : undefined,
    
    // Open Graph
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Nexus Clinic',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale,
      type: 'website',
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-image.jpg'],
    },

    // Alternates for SEO
    alternates: {
      canonical: canonical,
      languages: languages,
    },

    // Robots - keep it simple
    robots: {
      index: true,
      follow: true,
    },

    // Remove verification - not needed
  };
}