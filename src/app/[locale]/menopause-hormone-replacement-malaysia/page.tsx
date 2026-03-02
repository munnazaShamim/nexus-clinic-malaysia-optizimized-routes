import MonopauseLanding from "@/src/views/regenerative/Monopause";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MonopauseLanding locale={locale} />;
}
