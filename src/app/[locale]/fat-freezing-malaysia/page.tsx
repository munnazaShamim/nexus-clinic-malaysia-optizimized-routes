import FatFreezingLanding from "@/src/views/weightlossTreatment/FatFreezing";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <FatFreezingLanding locale={locale} />;
}
