// quartz.layout.ts

import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  // Adding a header component to hold the logo and potentially the title
  header: [
    Component.PageTitle(), // This will display your site title (Chaotic's Garden)
  ],
  // >>> PUT BACKLINKS AND GRAPH HERE FOR ALL PAGES <<<
  afterBody: [
    Component.Backlinks(), // All backlinks will now appear after the main content body on ALL pages
    Component.Graph(),     // Graph will appear after backlinks on ALL pages
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "My Substack": "https://pranjalsaxena.substack.com/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()), // Keep TOC on right for desktop if desired
    // REMOVED Backlinks and Graph from here as they are now in sharedPageComponents.afterBody
  ],
  // 'afterBody' is not a valid property for PageLayout, so it's removed
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [], // For list pages, we typically don't need a right sidebar unless you want one
  // 'afterBody' is not a valid property for PageLayout, so it's removed
}