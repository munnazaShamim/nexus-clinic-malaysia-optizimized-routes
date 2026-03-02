import EDTreatment from "@/src/views/regenerative/EDTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <EDTreatment locale={locale} />;
}
