import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
// import api from "./src/services/api.js"; // Adjust the import path as necessary
import axios from "axios";

// ✅ You do NOT need to import fetch in Node.js 18+
const SITE_URL = process.env.SITE_URL;
const VITE_API_URL = process.env.VITE_API_URL;

const staticPages = [
  "/",
  "/mounjaro-compare",
  "/wegovy-compare",
  "/contact-us",
  "/blogs",
  "/login",
  "/posts",
  "/register",
];

async function fetchBlogSlugs() {
  try {
    const response = await axios.get(`${VITE_API_URL}/api/blogs`);
    const blogs = response.data.data;

    if (!Array.isArray(blogs)) {
      throw new Error("Invalid API response format");
    }

    return blogs.map((blog) => `/${blog.slug}`);
  } catch (error) {
    console.error("❌ Failed to fetch blogs from API:", error);
    return [];
  }
}

async function generateSitemap() {
  const blogPages = await fetchBlogSlugs();
  const allPages = [...staticPages, ...blogPages];

  const sitemap = new SitemapStream({ hostname: SITE_URL });

  for (const url of allPages) {
    sitemap.write({ url, changefreq: "weekly", priority: 0.8 });
  }

  sitemap.end();

  const xml = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", xml.toString());

  console.log("✅ Sitemap generated with", allPages.length, "pages.");
}

generateSitemap().catch((err) => {
  console.error("❌ Sitemap generation failed:", err);
});
