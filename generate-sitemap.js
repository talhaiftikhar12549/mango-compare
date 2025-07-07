// generate-sitemap.js
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";

const SITE_URL = "https://mango-compare.netlify.app"; 

const pages = [
  "/",
  "/mounjaro-compare",
  "/wegovy-compare",
  "/contact-us",
  "/blogs",
  "/wegovy-compare",
  "/login",
  "/register",
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: SITE_URL });
  const pipeline = sitemap.pipe(createGzip());

  for (const page of pages) {
    sitemap.write({ url: page, changefreq: "weekly", priority: 0.8 });
  }

  sitemap.end();

  const data = await streamToPromise(pipeline);

  // Save both compressed and uncompressed versions
  fs.writeFileSync("./public/sitemap.xml.gz", data);
  fs.writeFileSync("./public/sitemap.xml", data.toString());

  console.log("✅ Sitemap generated successfully.");
};

generateSitemap().catch((err) => {
  console.error("❌ Error generating sitemap:", err);
});
