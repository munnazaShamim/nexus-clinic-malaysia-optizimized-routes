import MoleRemovalLanding from "@/src/views/skinTreatment/MoleRemoval";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MoleRemovalLanding locale={locale} />;
}
