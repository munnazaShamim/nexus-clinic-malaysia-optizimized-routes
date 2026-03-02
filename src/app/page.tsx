import { redirect } from 'next/navigation';
import { fallbackLng } from '../i18n/settings';

// This page handles the root URL (/) and redirects to the default locale
export default function RootPage() {
  redirect(`/${fallbackLng}`);
}