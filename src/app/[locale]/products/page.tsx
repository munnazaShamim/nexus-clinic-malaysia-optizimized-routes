import Products from "@/src/views/Products";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Products locale={locale} />;
}
