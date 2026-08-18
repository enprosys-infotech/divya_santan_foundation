/**
 * Builds the localized `<head>` meta tags every route declares, so page titles and
 * descriptions follow the selected language just like on-page copy.
 */

export interface SeoInput {
  title: string;
  description: string;
  /** Optional override when the social share description differs from the meta one. */
  ogDescription?: string;
}

export function seo({ title, description, ogDescription }: SeoInput) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: ogDescription ?? description },
    ],
  };
}
