import DoctorMonitoredLanding from "@/src/views/weightlossTreatment/DoctorMonitored";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <DoctorMonitoredLanding locale={locale} />;
}
