import DarkEyeCircleLanding from "@/src/views/skinTreatment/DarkEyeCircleTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <DarkEyeCircleLanding locale={locale} />;
}
