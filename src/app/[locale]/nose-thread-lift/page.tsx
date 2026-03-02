import NoseThreadLiftLanding from "@/src/views/faceTreatment/NoseTreadLift";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <NoseThreadLiftLanding locale={locale} />;
}
