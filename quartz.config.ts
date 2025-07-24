// quartz.config.ts

import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Chaotic's Garden",
    pageTitleSuffix: "My online digital Zettelkasten",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    // >>> IMPORTANT: CHANGE THIS TO YOUR ACTUAL GITHUB PAGES URL <<<
    baseUrl: "https://Chaotic16.github.io/digitalgarden/", // <--- CONFIRM THIS IS YOUR URL
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Montserrat", // Set headings to Montserrat
        body: "Roboto",       // Set body text to Roboto
        code: "IBM Plex Mono", // Keep your code font
      },
      colors: {
        lightMode: {
          light: "#fdfbd4",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#212125",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: [
    Plugin.FrontMatter(),
    Plugin.CreatedModifiedDate({
      priority: ["frontmatter", "git", "filesystem"],
    }),
    Plugin.SyntaxHighlighting({
      theme: {
        light: "github-light",
        dark: "github-dark",
      },
      keepBackground: false,
    }),
    Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
    Plugin.GitHubFlavoredMarkdown(),
    Plugin.TableOfContents(),
    Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
    Plugin.Description(),
    Plugin.Latex({ renderEngine: "katex" }),
    Plugin.RemoveDrafts(),
    Plugin.AliasRedirects(),
    Plugin.ComponentResources(),
    Plugin.ContentPage(),
    Plugin.FolderPage({
      // Sort option for notes within folders
      sort: [{ key: "title", order: "asc" }], // Sort by title alphabetically
    }),
    Plugin.TagPage({
      // Sort option for notes within tag pages
      sort: [{ key: "title", order: "asc" }], // Sort by title alphabetically
    }),
    Plugin.ContentIndex({
      enableSiteMap: true,
      enableRSS: true,
      // Sort option for the main site index (e.g., your homepage if it lists notes)
      sort: [
        { key: "modified", order: "desc" }, // Sort by last modified date, newest first
        { key: "title", order: "asc" },     // Then by title alphabetically
      ],
    }),
    Plugin.Assets(),
    Plugin.Static(),
    Plugin.Favicon(),
    Plugin.NotFoundPage(),
    Plugin.CustomOgImages(),
  ],
}

export default config