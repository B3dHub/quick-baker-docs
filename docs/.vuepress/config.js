const { description, repository } = require("../../package");
import { defaultTheme } from "vuepress";

export default {
  base: "/quick-baker-docs/",
  title: "Quick Baker",
  description: description,
  head: [
    ["link", { rel: "icon", href: "/img/UN_32.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  theme: defaultTheme({
    logo: "/img/QBAKER_150.png",
    docsRepo: "https://github.com/B3dHub/quick-baker-docs",
    docsBranch: "main",
    docsDir: "docs",
    editLink: false,
    editLinkText: "Edit on Github",
    lastUpdated: true,
    // Navbar
    navbar: [
      {
        text: "Discord",
        link: "https://discord.gg/sdnHHZpWbT",
      },
    ],
    // Sidebar
    sidebarDepth: 1,
    sidebar: {
      "/": [
        {
          title: "",
          collapsable: false,
          children: [
            "quickstart",
            "workflow",
            "bake-groups",
            "groups",
            "objects",
            "maps",
            "bake",
          ],
        },
      ],
    },
  }),
  plugins: ["@vuepress/plugin-search"],
};
