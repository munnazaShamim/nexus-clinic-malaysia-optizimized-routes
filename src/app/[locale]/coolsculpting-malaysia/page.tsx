import CoolSculptingLanding from "@/src/views/weightlossTreatment/Coolsculpting";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CoolSculptingLanding locale={locale} />;
}
