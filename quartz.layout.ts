import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.TagList(),
    Component.ContentMeta(),
    // Component.ArticleTitle(),
  ], 
  footer: 
    Component.Footer({
      links: {
        // "𓆩ꨄ︎𓆪": "/",
        "LinkedIn": "https://linkedin.com/in/janvichawla",
        Instagram: "https://instagram.com/janvichx",
        Quartz: "https://quartz.jzhao.xyz/"
      },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.Darkmode(),
    // Component.Breadcrumbs({
    //   rootName: "Home", // 𓆩ꨄ︎𓆪
    //   hideOnRoot: false,
    //   showCurrentPage: false
    // }),
    // Component.PageTitle(),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    // Component.TagList(),
  ],
  left: [
    // Component.PageTitle(),
    // Component.ContentMeta(),
    // Component.TagList(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    // Component.Breadcrumbs({
    //   rootName: "𓆩ꨄ︎𓆪",
    //   hideOnRoot: false,
    //   showCurrentPage: false
    // }),
    // Component.DesktopOnly(Component.Explorer()),
    // Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks()
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    // Component.Darkmode(),
    // Component.Breadcrumbs({
    //   rootName: "Home",
    //   hideOnRoot: false,
    //   showCurrentPage: false
    // }),
    // Component.PageTitle(),
    Component.ArticleTitle(),
    // Component.ContentMeta()
  ],
  left: [
    // Component.PageTitle(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    // Component.Breadcrumbs({
    //   rootName: "𓆩ꨄ︎𓆪",
    //   hideOnRoot: false,
    //   showCurrentPage: false
    // }),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
