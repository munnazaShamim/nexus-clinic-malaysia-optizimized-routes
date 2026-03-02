import MasseterBotoxPage from "@/src/views/faceTreatment/MasseterBotox";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MasseterBotoxPage locale={locale} />;
}
