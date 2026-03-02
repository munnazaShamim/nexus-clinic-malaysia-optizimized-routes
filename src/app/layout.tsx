import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexus Clinic Kuala Lumpur | Aesthetic and Weight Loss Clinic',
  description: 'Discover Nexus Clinic in Kuala Lumpur for personalised aesthetic and weight loss treatments. Book injectables, skin and hair care, body and general health plans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}