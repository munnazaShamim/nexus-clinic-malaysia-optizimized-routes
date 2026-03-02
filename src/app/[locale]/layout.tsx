import Navbar from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}