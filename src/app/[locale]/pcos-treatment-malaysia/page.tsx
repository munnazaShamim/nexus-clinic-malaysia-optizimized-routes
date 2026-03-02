import PCOSPage from "@/src/views/regenerative/PCOSTreatment";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PCOSPage locale={locale} />;
}
