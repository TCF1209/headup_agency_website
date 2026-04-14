/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://headupagency.com",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: (process.env.NEXT_PUBLIC_SITE_URL || "https://headupagency.com") + "/en", hreflang: "en" },
    { href: (process.env.NEXT_PUBLIC_SITE_URL || "https://headupagency.com") + "/zh", hreflang: "zh" },
    { href: (process.env.NEXT_PUBLIC_SITE_URL || "https://headupagency.com") + "/ms", hreflang: "ms" },
  ],
  exclude: ["/api/*"],
};
