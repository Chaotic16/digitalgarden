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
  afterBody: [],
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
    // We moved PageTitle to the main header, so remove it from the sidebar
    // Component.PageTitle(),
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
    Component.DesktopOnly(Component.TableOfContents()), // Keep TOC on right for desktop
    // We're moving Graph and Backlinks to the bottom
    // Component.Graph(),
    // Component.Backlinks(),
  ],
  // Adding Backlinks and Graph to afterBody to put them at the bottom
  afterBody: [
    Component.Backlinks(), // All backlinks will now appear after the main content body
    Component.Graph(),     // Graph will appear after backlinks
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    // We moved PageTitle to the main header, so remove it from the sidebar
    // Component.PageTitle(),
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
  right: [], // For list pages, we don't need a right sidebar typically
  afterBody: [
    Component.Backlinks(), // Backlinks for list pages (if applicable)
    Component.Graph(),     // Graph for list pages (if applicable)
  ],
}