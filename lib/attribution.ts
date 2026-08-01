"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "studyit_attribution";

export interface AttributionData {
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referred_by?: string;
}

/**
 * Parses current URL parameters and stores attribution data in sessionStorage.
 * This ensures the data survives page reloads and navigation before signup.
 */
export function useAttribution(): AttributionData {
  const [data, setData] = useState<AttributionData>({});

  useEffect(() => {
    try {
      // 1. Load existing from storage
      const stored = sessionStorage.getItem(STORAGE_KEY);
      const existingData: AttributionData = stored ? JSON.parse(stored) : {};

      // 2. Parse current URL
      const params = new URLSearchParams(window.location.search);
      let updated = false;
      const newData = { ...existingData };

      const fields = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
      ];

      fields.forEach((field) => {
        const val = params.get(field);
        if (val && newData[field as keyof AttributionData] !== val) {
          (newData as any)[field] = val;
          updated = true;
        }
      });

      // Special handling for referral and source
      const ref = params.get("ref");
      if (ref && newData.referred_by !== ref) {
        newData.referred_by = ref;
        updated = true;
      }

      // Infer general source
      if (!newData.source) {
        if (newData.utm_source) {
          newData.source = newData.utm_source;
          updated = true;
        } else if (newData.referred_by) {
          newData.source = "referral";
          updated = true;
        } else if (document.referrer) {
          try {
            const referrerUrl = new URL(document.referrer);
            if (!referrerUrl.hostname.includes("studyit.in")) {
              newData.source = referrerUrl.hostname;
              updated = true;
            }
          } catch (e) {
            // Invalid referrer URL, ignore
          }
        } else {
          newData.source = "direct";
          updated = true;
        }
      }

      // 3. Save if updated
      if (updated) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        setData(newData);
      } else {
        setData(existingData);
      }
    } catch (e) {
      console.warn("Attribution tracking failed:", e);
    }
  }, []);

  return data;
}
