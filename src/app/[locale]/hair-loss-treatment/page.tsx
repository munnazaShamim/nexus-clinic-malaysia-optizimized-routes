import HairLossTreatment from "@/src/views/hairTreatment/HairLossTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HairLossTreatment locale={locale} />;
}
