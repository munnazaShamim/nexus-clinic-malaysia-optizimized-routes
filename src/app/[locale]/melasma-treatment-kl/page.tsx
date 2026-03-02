import MelasmaLanding from "@/src/views/skinTreatment/MelasmaTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MelasmaLanding locale={locale} />;
}
