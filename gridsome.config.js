module.exports = {
  siteName: "DerekGilbert.io",
  siteUrl: "https://DerekGilbert.io",
  siteDescription:
    "An expression of code, politics & things I think about. Read at your own parrel",

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        route: "/:slug",
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Tool",
        path: "content/tools/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Book",
        path: "content/books/*.md"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/thanks", "/contact"],
        config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5
          },
          "tag/*": {
            changefreq: "weekly",
            priority: 0.5
          },
          "/about": {
            changefreq: "monthly",
            priority: 0.7
          }
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
