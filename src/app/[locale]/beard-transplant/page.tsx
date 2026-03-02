import BeardLanding from "@/src/views/hairTreatment/BeardTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <BeardLanding locale={locale} />;
}
