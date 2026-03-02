import ChinFillerLanding from "@/src/views/faceTreatment/ChinFiller";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ChinFillerLanding locale={locale} />;
}
