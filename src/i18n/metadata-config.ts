import { Metadata } from 'next';

// Define all possible locales
export type Locale = 'en' | 'ms' | 'zh' | 'ar' | 'id';

// Home page metadata for each locale
export const homeMetadata: Record<Locale, Metadata> = {
  en: {
    title: 'Nexus Clinic Malaysia - Premium Aesthetic & Medical Clinic',
    description: 'Leading aesthetic clinic in Malaysia offering weight loss, hair transplant, skin treatments & regenerative medicine. Book consultation today.',
    openGraph: {
      title: 'Nexus Clinic Malaysia - Premium Aesthetic & Medical Clinic',
      description: 'Leading aesthetic clinic in Malaysia offering weight loss, hair transplant, skin treatments & regenerative medicine.',
      images: ['/images/og-image.jpg'],
    },
  },
  ms: {
    title: 'Nexus Clinic Malaysia - Klinik Estetik & Perubatan Premium',
    description: 'Klinik estetik terkemuka di Malaysia menawarkan rawatan penurunan berat badan, transplantasi rambut, kulit & perubatan regeneratif. Tempah konsultasi hari ini.',
    openGraph: {
      title: 'Nexus Clinic Malaysia - Klinik Estetik & Perubatan Premium',
      description: 'Klinik estetik terkemuka di Malaysia menawarkan rawatan penurunan berat badan, transplantasi rambut, kulit & perubatan regeneratif.',
      images: ['/images/og-image.jpg'],
    },
  },
  zh: {
    title: 'Nexus Clinic Malaysia - 顶级美学与医疗诊所',
    description: '马来西亚领先的美学诊所，提供减肥、植发、皮肤治疗和再生医学服务。立即预约咨询。',
    openGraph: {
      title: 'Nexus Clinic Malaysia - 顶级美学与医疗诊所',
      description: '马来西亚领先的美学诊所，提供减肥、植发、皮肤治疗和再生医学服务。',
      images: ['/images/og-image.jpg'],
    },
  },
  ar: {
    title: 'عيادة نيكسوس ماليزيا - عيادة جمالية وطبية فاخرة',
    description: 'عيادة تجميل رائدة في ماليزيا تقدم علاجات إنقاص الوزن وزراعة الشعر والعناية بالبشرة والطب التجديدي. احجز استشارة اليوم.',
    openGraph: {
      title: 'عيادة نيكسوس ماليزيا - عيادة جمالية وطبية فاخرة',
      description: 'عيادة تجميل رائدة في ماليزيا تقدم علاجات إنقاص الوزن وزراعة الشعر والعناية بالبشرة والطب التجديدي.',
      images: ['/images/og-image.jpg'],
    },
  },
  id: {
    title: 'Nexus Clinic Malaysia - Klinik Estetika & Medis Premium',
    description: 'Klinik estetika terkemuka di Malaysia menawarkan penurunan berat badan, transplantasi rambut, perawatan kulit & pengobatan regeneratif. Konsultasi sekarang.',
    openGraph: {
      title: 'Nexus Clinic Malaysia - Klinik Estetika & Medis Premium',
      description: 'Klinik estetika terkemuka di Malaysia menawarkan penurunan berat badan, transplantasi rambut, perawatan kulit & pengobatan regeneratif.',
      images: ['/images/og-image.jpg'],
    },
  },
};

// Treatment page metadata generator
export const getTreatmentMetadata = (locale: Locale, treatment: string): Metadata => {
  const treatmentName = treatment.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const titles: Record<Locale, string> = {
    en: `${treatmentName} Treatment in Malaysia | Nexus Clinic`,
    ms: `Rawatan ${treatmentName} di Malaysia | Nexus Clinic`,
    zh: `马来西亚${treatmentName}治疗 | Nexus Clinic`,
    ar: `علاج ${treatmentName} في ماليزيا | عيادة نيكسوس`,
    id: `Perawatan ${treatmentName} di Malaysia | Nexus Clinic`,
  };
  
  const descriptions: Record<Locale, string> = {
    en: `Expert ${treatmentName.toLowerCase()} treatment in Malaysia. Book consultation with our specialist doctors at Nexus Clinic.`,
    ms: `Rawatan ${treatmentName.toLowerCase()} pakar di Malaysia. Tempah konsultasi dengan doktor pakar kami di Nexus Clinic.`,
    zh: `马来西亚专业的${treatmentName}治疗。立即预约Nexus Clinic的专家医生咨询。`,
    ar: `علاج ${treatmentName.toLowerCase()} خبير في ماليزيا. احجز استشارة مع أطبائنا المتخصصين في عيادة نيكسوس.`,
    id: `Perawatan ${treatmentName.toLowerCase()} ahli di Malaysia. Konsultasi dengan dokter spesialis kami di Nexus Clinic.`,
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      images: ['/images/og-image.jpg'],
    },
  };
};