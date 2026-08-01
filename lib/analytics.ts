// lib/analytics.ts
// Centralized analytics event tracking.
//
// Currently a stub — components call track() semantically so that
// real analytics (e.g. Plausible, PostHog, Google Analytics) can be
// connected later without changing any component code.

import type { AnalyticsEvent, AnalyticsProperties } from "@/types";

const isDev = process.env.NODE_ENV === "development";

/**
 * Track an analytics event.
 *
 * @param event - The semantic event name
 * @param properties - Optional key/value metadata
 *
 * @example
 * track("hero_join_clicked", { source: "hero" });
 */
export function track(
  event: AnalyticsEvent,
  properties?: AnalyticsProperties
): void {
  if (isDev) {
    console.log(`[Analytics] ${event}`, properties ?? "");
  }

  // TODO: Connect to real analytics provider before production launch.
  // Example integrations:
  //
  // Plausible:
  //   window.plausible?.(event, { props: properties });
  //
  // PostHog:
  //   posthog.capture(event, properties);
  //
  // Google Analytics 4:
  //   window.gtag?.("event", event, properties);
}

/**
 * Track a page view.
 */
export function trackPageView(path: string): void {
  track("landing_page_view", { path });
}
