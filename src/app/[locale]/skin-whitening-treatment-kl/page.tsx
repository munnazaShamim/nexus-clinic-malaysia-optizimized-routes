import SkinWhiteningLanding from "@/src/views/skinTreatment/SkinWhitening";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <SkinWhiteningLanding locale={locale} />;
}
