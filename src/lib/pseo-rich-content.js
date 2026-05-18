/**
 * @typedef {Object} RichContentFeature
 * @property {string} heading
 * @property {string} detail
 */

/**
 * @typedef {Object} RichContent
 * @property {string} whyTitle
 * @property {string} whyBody
 * @property {string} featuresTitle
 * @property {RichContentFeature[]} features
 * @property {string} useCasesTitle
 * @property {string} useCasesBody
 * @property {string} deviceGuideTitle
 * @property {string[]} iosSteps
 * @property {string[]} androidSteps
 * @property {string} tipsTitle
 * @property {string} tipsBody
 * @property {string} comparisonTitle
 * @property {string} comparisonBody
 */

/**
 * @typedef {Object} PseoPageEntry
 * @property {string} slug
 * @property {string} [primary_keyword]
 * @property {string} [secondary_keywords]
 * @property {string} [platform]
 * @property {string} [content_type]
 * @property {string} [h1_title]
 * @property {string} [meta_title]
 * @property {string} [meta_desc]
 * @property {string} [intro_text]
 * @property {string} [how_to_use]
 * @property {Array<{ question: string, answer: string }>} [faqs]
 * @property {string} [faq_q]
 * @property {string} [faq_a]
 * @property {RichContent} [richContent]
 */

/**
 * @param {unknown} value
 * @returns {value is RichContent}
 */
export function isRichContent(value) {
  if (!value || typeof value !== "object") return false;
  const rc = /** @type {RichContent} */ (value);
  return (
    typeof rc.whyTitle === "string" &&
    typeof rc.whyBody === "string" &&
    typeof rc.featuresTitle === "string" &&
    Array.isArray(rc.features) &&
    typeof rc.useCasesTitle === "string" &&
    typeof rc.useCasesBody === "string" &&
    typeof rc.deviceGuideTitle === "string" &&
    Array.isArray(rc.iosSteps) &&
    Array.isArray(rc.androidSteps) &&
    typeof rc.tipsTitle === "string" &&
    typeof rc.tipsBody === "string" &&
    typeof rc.comparisonTitle === "string" &&
    typeof rc.comparisonBody === "string"
  );
}
