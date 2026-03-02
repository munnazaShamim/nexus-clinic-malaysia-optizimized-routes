import LipFillerLanding from "@/src/views/faceTreatment/LipFiller";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <LipFillerLanding locale={locale} />;
}
