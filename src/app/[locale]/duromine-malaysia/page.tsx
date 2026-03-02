import PageDuromineMalaysia from "@/src/views/weightlossTreatment/Duromine";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PageDuromineMalaysia locale={locale} />;
}
