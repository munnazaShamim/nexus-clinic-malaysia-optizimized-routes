import MinoxidilLanding from "@/src/views/hairTreatment/MinoxidilTreatment";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MinoxidilLanding locale={locale} />;
}
