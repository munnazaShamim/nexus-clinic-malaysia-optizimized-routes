import HairMesotherapyLanding from "@/src/views/hairTreatment/HairMesotherapy";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HairMesotherapyLanding locale={locale} />;
}
