import PRPLandingPage from "@/src/views/hairTreatment/PRPHair";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PRPLandingPage locale={locale} />;
}
