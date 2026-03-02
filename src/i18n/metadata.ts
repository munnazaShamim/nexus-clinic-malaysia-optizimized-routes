import { fallbackLng, languages } from './settings';

export type Locale = typeof languages[number];

export type PageMetadataContent = {
  title: string;
  description: string;
  keywords?: string;
};

export type PageLocaleData = {
  [key in Locale]: PageMetadataContent;
};

export type PageMetadata = {
  [pageName: string]: PageLocaleData;
};

// Base metadata that doesn't change per page
export const siteConfig = {
  name: 'Nexus Clinic',
  url: process.env.BASE_URL,
  twitter: '@nexusclinic',
};

export const pageMetadata: PageMetadata = {
  home: {
    en: {
      title: 'Nexus Clinic Kuala Lumpur | Aesthetic and Weight Loss Clinic',
      description: 'Discover Nexus Clinic in Kuala Lumpur for personalised aesthetic and weight loss treatments. Book injectables, skin and hair care, body and general health plans.',
      keywords: 'aesthetic clinic malaysia, medical clinic, weight loss, hair transplant, skin treatment',
    },
    ms: {
      title: 'Nexus Clinic Malaysia - Klinik Estetik & Perubatan Premium',
      description: 'Klinik estetik terkemuka di Malaysia menawarkan rawatan penurunan berat badan, transplantasi rambut, kulit & perubatan regeneratif. Tempah konsultasi hari ini.',
      keywords: 'klinik estetik malaysia, klinik perubatan, penurunan berat badan, transplantasi rambut, rawatan kulit',
    },
    zh: {
      title: 'Nexus Clinic Malaysia - 顶级美学与医疗诊所',
      description: '马来西亚领先的美学诊所，提供减肥、植发、皮肤治疗和再生医学服务。立即预约咨询。',
      keywords: '美学诊所马来西亚, 医疗诊所, 减肥, 植发, 皮肤治疗',
    },
    ar: {
      title: 'عيادة نيكسوس ماليزيا - عيادة جمالية وطبية فاخرة',
      description: 'عيادة تجميل رائدة في ماليزيا تقدم علاجات إنقاص الوزن وزراعة الشعر والعناية بالبشرة والطب التجديدي. احجز استشارة اليوم.',
      keywords: 'عيادة تجميل ماليزيا, عيادة طبية, إنقاص الوزن, زراعة الشعر, علاج البشرة',
    },
    id: {
      title: 'Nexus Clinic Malaysia - Klinik Estetika & Medis Premium',
      description: 'Klinik estetika terkemuka di Malaysia menawarkan penurunan berat badan, transplantasi rambut, perawatan kulit & pengobatan regeneratif. Konsultasi sekarang.',
      keywords: 'klinik estetika malaysia, klinik medis, penurunan berat badan, transplantasi rambut, perawatan kulit',
    },
  },
  about: {
    en: {
      title: 'About Nexus Clinic - Our Story & Medical Experts',
      description: 'Learn about Nexus Clinic Malaysia. Meet our expert doctors and discover our journey in providing premium aesthetic and medical treatments.',
    },
    ms: {
      title: 'Tentang Nexus Clinic - Kisah Kami & Pakar Perubatan',
      description: 'Ketahui tentang Nexus Clinic Malaysia. Temui doktor pakar kami dan ketahui perjalanan kami dalam menyediakan rawatan estetik dan perubatan premium.',
    },
    zh: {
      title: '关于Nexus Clinic - 我们的故事与医疗专家',
      description: '了解Nexus Clinic Malaysia。认识我们的专家医生，了解我们提供顶级美学和医疗治疗的历程。',
    },
    ar: {
      title: 'عن عيادة نيكسوس - قصتنا وخبراؤنا الطبيون',
      description: 'تعرف على عيادة نيكسوس ماليزيا. قابل أطباءنا الخبراء واكتشف رحلتنا في تقديم علاجات جمالية وطبية متميزة.',
    },
    id: {
      title: 'Tentang Nexus Clinic - Cerita Kami & Pakar Medis',
      description: 'Pelajari tentang Nexus Clinic Malaysia. Temui dokter ahli kami dan temukan perjalanan kami dalam menyediakan perawatan estetika dan medis premium.',
    },
  },
  // Add more pages as needed
};