import fs from "fs";
import path from "path";
import matter from "gray-matter";

type DocsItems = {
  [key: string]: string;
};

// Docs path =>
export const DOCS_PATH = path.join(process.cwd(), "docs");
export const docsFilePaths = fs
  .readdirSync(DOCS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

// Get docs slugs =>
export function getAllDocsSlugs(): string[] {
  return fs.readdirSync(DOCS_PATH);
}

// Get doc by slug =>
export function getDocumentBySlug(
  slug: string,
  fields: string[] = []
): DocsItems {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(DOCS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items: DocsItems = {};

  // Ensure only the minimal needed data is exposed =>
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

// Get all docs =>
export function getAllDocs(fields: string[] = []): DocsItems[] {
  const slugs = getAllDocsSlugs();
  const posts = slugs.map((slug) => getDocumentBySlug(slug, fields));
  return posts;
}
