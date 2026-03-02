import MounjaroLanding from "@/src/views/weightlossTreatment/Mounjaro";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MounjaroLanding locale={locale} />;
}
