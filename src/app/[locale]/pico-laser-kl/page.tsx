import PicoLaserLanding from "@/src/views/skinTreatment/PicoLaser";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PicoLaserLanding locale={locale} />;
}
