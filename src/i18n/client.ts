"use client";

import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect } from "react";
import { getOptions, languages } from "./settings";

const runsOnServerSide = typeof window === "undefined";

// Only initialize once
if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/src/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...getOptions(),
      lng: undefined,
      detection: {
        order: ["path", "htmlTag"],
      },
      preload: runsOnServerSide ? languages : [],
    });
}

export function useTranslation(
  lng: string,
  ns?: string,
  options?: { keyPrefix?: string }
) {
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  // On client side, change language when locale prop changes
  useEffect(() => {
    if (lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  // On server side, change language synchronously
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  return ret;
}
