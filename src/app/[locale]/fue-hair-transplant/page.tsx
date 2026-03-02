import FUEHairTransplant from "@/src/views/hairTreatment/FUEHairTransplant";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <FUEHairTransplant locale={locale} />;
}
