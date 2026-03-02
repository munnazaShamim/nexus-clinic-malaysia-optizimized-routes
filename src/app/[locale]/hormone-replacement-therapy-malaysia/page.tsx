import HormonReplaceLanding from "@/src/views/regenerative/HormoneReplacement";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HormonReplaceLanding locale={locale} />;
}
