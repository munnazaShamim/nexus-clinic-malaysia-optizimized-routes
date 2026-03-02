import AcneLandingPage from "@/src/views/skinTreatment/AcneTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AcneLandingPage locale={locale} />;
}
