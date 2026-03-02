import HomePageNexus from "@/src/views/HomePage";
import { homeMetadata } from "@/src/i18n/metadata-config";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return homeMetadata[locale as keyof typeof homeMetadata] || homeMetadata.en;
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <HomePageNexus locale={locale} />;
}