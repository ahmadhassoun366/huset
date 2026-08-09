import { BRAND } from '../content/site'

/**
 * Replaces the `{brand}` placeholder in copy with the current company name.
 * Use this for any string that mentions the company — quotes, headings, body
 * text — so a rename in `BRAND.name` flows through the whole site.
 */
export const brand = (text: string): string =>
  text.replace(/\{brand\}/g, BRAND.name)

/** Sets the browser tab title as "<page> · <company>". */
export const pageTitle = (title?: string): string =>
  title ? `${title} · ${BRAND.name}` : `${BRAND.name} – ${BRAND.tagline}`
