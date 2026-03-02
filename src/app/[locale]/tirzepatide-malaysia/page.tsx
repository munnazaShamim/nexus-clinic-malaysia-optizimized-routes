import TirzepatideLanding from "@/src/views/weightlossTreatment/Tirzepatide";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TirzepatideLanding locale={locale} />;
}
