import AntiAgingLanding from "@/src/views/regenerative/AntiAging";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AntiAgingLanding locale={locale} />;
}
