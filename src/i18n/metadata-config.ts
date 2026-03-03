import type { Metadata } from "next";

export type Locale = "en" | "ms" | "zh" | "ar" | "id";

const BASE_URL = process.env.BASE_URL!;

export const homeMetadata: Record<Locale, Metadata> = {
  en: {
    title: "Nexus Clinic Kuala Lumpur | Aesthetic and Weight Loss Clinic",
    description:
      "Discover Nexus Clinic in Kuala Lumpur for personalised aesthetic and weight loss treatments. Book injectables, skin and hair care, body and general health plans.",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical: `${BASE_URL}/en`,
      languages: {
        en: `${BASE_URL}/en`,
        ms: `${BASE_URL}/ms`,
        zh: `${BASE_URL}/zh`,
        ar: `${BASE_URL}/ar`,
        id: `${BASE_URL}/id`,
      },
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/en`,
      siteName: "Nexus Clinic Kuala Lumpur",
      title: "Nexus Clinic Kuala Lumpur | Aesthetic and Weight Loss Clinic",
      description:
        "Discover Nexus Clinic in Kuala Lumpur for personalised aesthetic and weight loss treatments. Book injectables, skin and hair care, body and general health plans.",
      images: [
        {
          url: "/images/treatment/face-scan.png",
          width: 1200,
          height: 630,
          alt: "Nexus Clinic Aesthetic & Weight Loss Treatments",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Nexus Clinic Kuala Lumpur | Aesthetic and Weight Loss Clinic",
      description:
        "Personalised aesthetic and weight loss treatments in Kuala Lumpur.",
      images: ["/images/treatment/face-scan.png"],
    },
  },

  ms: {
    title: "Nexus Clinic Kuala Lumpur | Klinik Estetik & Penurunan Berat Badan",
    description:
      "Temui Nexus Clinic di Kuala Lumpur untuk rawatan estetik dan penurunan berat badan yang diperibadikan.",

    robots: { index: true, follow: true },

    alternates: {
      canonical: `${BASE_URL}/ms`,
      languages: {
        en: `${BASE_URL}/en`,
        ms: `${BASE_URL}/ms`,
        zh: `${BASE_URL}/zh`,
        ar: `${BASE_URL}/ar`,
        id: `${BASE_URL}/id`,
      },
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/ms`,
      siteName: "Nexus Clinic Kuala Lumpur",
      title: "Nexus Clinic Kuala Lumpur | Klinik Estetik & Penurunan Berat Badan",
      description:
        "Rawatan estetik dan penurunan berat badan yang diperibadikan di Kuala Lumpur.",
      images: ["/images/treatment/face-scan.png"],
    },
  },

  zh: {
    title: "吉隆坡 Nexus 诊所 | 医美与减重诊所",
    description:
      "探索位于吉隆坡的 Nexus 诊所，提供个性化的医美与体重管理治疗。",

    robots: { index: true, follow: true },

    alternates: {
      canonical: `${BASE_URL}/zh`,
      languages: {
        en: `${BASE_URL}/en`,
        ms: `${BASE_URL}/ms`,
        zh: `${BASE_URL}/zh`,
        ar: `${BASE_URL}/ar`,
        id: `${BASE_URL}/id`,
      },
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/zh`,
      siteName: "Nexus Clinic Kuala Lumpur",
      title: "吉隆坡 Nexus 诊所 | 医美与减重诊所",
      description:
        "吉隆坡专业的医美与体重管理诊所。",
      images: ["/images/treatment/face-scan.png"],
    },
  },

  ar: {
    title: "عيادة نيكسس كوالالمبور | عيادة التجميل وإنقاص الوزن",
    description:
      "اكتشف عيادة نيكسس في كوالالمبور لعلاجات التجميل وإنقاص الوزن المخصصة.",

    robots: { index: true, follow: true },

    alternates: {
      canonical: `${BASE_URL}/ar`,
      languages: {
        en: `${BASE_URL}/en`,
        ms: `${BASE_URL}/ms`,
        zh: `${BASE_URL}/zh`,
        ar: `${BASE_URL}/ar`,
        id: `${BASE_URL}/id`,
      },
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/ar`,
      siteName: "Nexus Clinic Kuala Lumpur",
      title: "عيادة نيكسس كوالالمبور | عيادة التجميل وإنقاص الوزن",
      description:
        "علاجات تجميلية وإنقاص وزن متقدمة في كوالالمبور.",
      images: ["/images/treatment/face-scan.png"],
    },
  },

  id: {
    title: "Nexus Clinic Kuala Lumpur | Klinik Estetika & Penurunan Berat Badan",
    description:
      "Temukan Nexus Clinic di Kuala Lumpur untuk perawatan estetika dan penurunan berat badan.",

    robots: { index: true, follow: true },

    alternates: {
      canonical: `${BASE_URL}/id`,
      languages: {
        en: `${BASE_URL}/en`,
        ms: `${BASE_URL}/ms`,
        zh: `${BASE_URL}/zh`,
        ar: `${BASE_URL}/ar`,
        id: `${BASE_URL}/id`,
      },
    },

    openGraph: {
      type: "website",
      url: `${BASE_URL}/id`,
      siteName: "Nexus Clinic Kuala Lumpur",
      title: "Nexus Clinic Kuala Lumpur | Klinik Estetika & Penurunan Berat Badan",
      description:
        "Perawatan estetika dan penurunan berat badan yang dipersonalisasi.",
      images: ["/images/treatment/face-scan.png"],
    },
  },
};

