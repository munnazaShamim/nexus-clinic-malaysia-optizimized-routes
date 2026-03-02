import TestosteroneLanding from "@/src/views/regenerative/Testosterone";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TestosteroneLanding locale={locale} />;
}
