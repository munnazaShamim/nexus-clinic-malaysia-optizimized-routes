import HydraFacialLandingPage from "@/src/views/skinTreatment/Hrdrafracial";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HydraFacialLandingPage locale={locale} />;
}
