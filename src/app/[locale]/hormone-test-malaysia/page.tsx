import HormoneTestLanding from "@/src/views/regenerative/HormoneTest";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HormoneTestLanding locale={locale} />;
}
