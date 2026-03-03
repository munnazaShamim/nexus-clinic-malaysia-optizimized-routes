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
// export const metadata: Metadata ={
//   title: "Nexus Clinic Kuala Lumpur | Aesthetic and Weight Loss Clinic",
//   description: "Discover Nexus Clinic in Kuala Lumpur for personalised aesthetic and weight loss treatments. Book injectables, skin and hair care, body and general health plans.",
//   alternates:{
//     canonical: process.env.BASE_URL,
//   }
// }

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <HomePageNexus locale={locale} />;
}