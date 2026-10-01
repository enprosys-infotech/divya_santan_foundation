/**
 * Markdown fetch + frontmatter parse utility.
 *
 * Blog .md files live in public/Blogs/ and are served as static assets.
 * We fetch them at runtime so no Vite import pipeline is needed.
 *
 * Frontmatter is parsed with a minimal hand-rolled parser so we avoid adding
 * a separate gray-matter bundle to the client. It handles the YAML subset
 * actually used in our blog files: string values (quoted or unquoted) and
 * booleans.
 */

export interface FrontmatterData {
  title?: string;
  slug?: string;
  category?: string;
  language?: string;
  author?: string;
  publishedAt?: string;
  sourceFile?: string;
  reviewRequired?: boolean;
  [key: string]: unknown;
}

export interface ParsedMarkdown {
  frontmatter: FrontmatterData;
  /** Raw markdown body with frontmatter block stripped. */
  content: string;
}

/**
 * Parse a minimal YAML frontmatter block (the `---…---` at the top of a file).
 * Handles: quoted strings, unquoted strings, booleans, and ignores everything else.
 */
function parseFrontmatter(raw: string): FrontmatterData {
  const data: FrontmatterData = {};

  for (const line of raw.split("\n")) {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    const trimmed = rawValue.trim();

    if (trimmed === "true") {
      data[key] = true;
    } else if (trimmed === "false") {
      data[key] = false;
    } else {
      // Strip surrounding quotes (single or double)
      data[key] = trimmed.replace(/^["']|["']$/g, "");
    }
  }

  return data;
}

/**
 * Split a raw markdown string into its frontmatter block and body.
 * Returns empty frontmatter if no `---` delimiters are found.
 */
function splitFrontmatter(raw: string): { yaml: string; body: string } {
  const trimmed = raw.trimStart();
  if (!trimmed.startsWith("---")) {
    return { yaml: "", body: raw };
  }

  const closeIndex = trimmed.indexOf("---", 3);
  if (closeIndex === -1) {
    return { yaml: "", body: raw };
  }

  const yaml = trimmed.slice(3, closeIndex).trim();
  const body = trimmed.slice(closeIndex + 3).trimStart();
  return { yaml, body };
}

/**
 * Fetch and parse a markdown file from the public folder.
 *
 * @param publicPath  The path as served from the public root, e.g. "/Blogs/01-foo.md"
 * @throws            When the network request fails or returns a non-OK status
 */
export async function fetchMarkdown(publicPath: string): Promise<ParsedMarkdown> {
  const response = await fetch(publicPath);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch markdown at "${publicPath}": ${response.status} ${response.statusText}`,
    );
  }

  const raw = await response.text();
  const { yaml, body } = splitFrontmatter(raw);
  const frontmatter = parseFrontmatter(yaml);

  return { frontmatter, content: body };
}
