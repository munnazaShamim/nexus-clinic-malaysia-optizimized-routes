import PageOzempicMalaysia from "@/src/views/weightlossTreatment/PageOzempicMalaysia";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PageOzempicMalaysia locale={locale} />;
}
