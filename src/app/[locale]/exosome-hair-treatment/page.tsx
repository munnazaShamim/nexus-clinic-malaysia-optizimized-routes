import ExosomeLanding from "@/src/views/hairTreatment/ExosomeHair";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ExosomeLanding locale={locale} />;
}
