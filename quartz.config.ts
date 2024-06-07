import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "𓆩ꨄ︎𓆪",
    enableSPA: true,
    enablePopovers: false,
    analytics: null,
    locale: "en-US",
    baseUrl: "janvichawla.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Cormorant Garamond", // Cormorant Garamond
        body: "Adobe Garamond Pro", // Adobe Garamond Pro
        code: "Red Hat Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8", // faf8f8
          lightgray: "#e5e5e5", // e5e5e5
          gray: "#b8b8b8", // b8b8b8
          darkgray: "#4e4e4e", //4e4e4e
          dark: "#2b2b2b", // 2b2b2b
          secondary: "#558", //284b63
          tertiary: "#99d", //84a59d
          highlight: "rgba(219, 225, 249, 0.15)", // rgba(143, 159, 169, 0.15) 
        },
        darkMode: {
          light: "#161619", // 161618
          lightgray: "#334", // 393639
          gray: "#646468", // 646464
          darkgray: "#d4d4d4", // d4d4d4
          dark: "#ebebec", // ebebec 
          secondary: "#99d", // 7b97aa
          tertiary: "#558", // 84a59d
          highlight: "rgba(143, 159, 169, 0.15)", // rgba(143, 159, 169, 0.15)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["git", "frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        // uses themes bundled with Shikiji, see https://shikiji.netlify.app/themes
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        // set this to 'true' to use the background color of the Shikiji theme
        // if set to 'false', will use Quartz theme colors for background
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
