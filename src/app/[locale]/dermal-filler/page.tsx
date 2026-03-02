import DermalFillersLanding from "@/src/views/faceTreatment/DermalFiller";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <DermalFillersLanding locale={locale} />;
}
