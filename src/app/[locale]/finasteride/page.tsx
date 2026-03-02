import FinasterideLanding from "@/src/views/hairTreatment/Finasteride";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FinasterideLanding locale={locale} />;
}
