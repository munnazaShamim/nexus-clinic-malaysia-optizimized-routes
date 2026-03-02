import PigmentationLanding from "@/src/views/skinTreatment/PigmentationTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PigmentationLanding locale={locale} />;
}
