import GLP1LandingPage from "@/src/views/weightlossTreatment/GLP";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <GLP1LandingPage locale={locale} />;
}
