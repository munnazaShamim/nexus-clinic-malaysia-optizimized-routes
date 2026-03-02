import HypothyroidLanding from "@/src/views/regenerative/Hypothyroidism";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HypothyroidLanding locale={locale} />;
}
