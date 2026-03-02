import EczemaLandingPage from "@/src/views/skinTreatment/Eczema";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <EczemaLandingPage locale={locale} />;
}
