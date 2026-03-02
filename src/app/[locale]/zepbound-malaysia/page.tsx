import ZepboundLanding from "@/src/views/weightlossTreatment/ZepBound";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ZepboundLanding locale={locale} />;
}
