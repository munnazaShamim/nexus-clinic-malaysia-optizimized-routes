import HomePageNexus from "@/src/views/HomePage";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomePageNexus locale={locale} />;
}
