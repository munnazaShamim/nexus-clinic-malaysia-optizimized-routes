import AcneScarLanding from "@/src/views/skinTreatment/AcneScarTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AcneScarLanding locale={locale} />;
}
