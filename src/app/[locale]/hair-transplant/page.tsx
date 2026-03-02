import HairTransplantLanding from "@/src/views/hairTreatment/HairTransplant";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HairTransplantLanding locale={locale} />;
}
