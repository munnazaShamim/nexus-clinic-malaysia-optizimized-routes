import StemCellLanding from "@/src/views/regenerative/StemCell";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <StemCellLanding locale={locale} />;
}
