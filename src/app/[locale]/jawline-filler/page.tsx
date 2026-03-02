import JawlineFillerLanding from "@/src/views/faceTreatment/JawlineFiller";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <JawlineFillerLanding locale={locale} />;
}
