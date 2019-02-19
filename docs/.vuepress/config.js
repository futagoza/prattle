"use strict";

module.exports = {

    title: "POW",
    description: "Run spec, benchmark and impact tests all from one tool",
    head: [

        [ "meta", { "http-equiv": "XA-UA-Compatible", content: "IE=edge" } ],
        [ "link", { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" } ],

    ],
    themeConfig: {

        nav: [
            {
                text: "Documentation",
                items: [
                    {
                        text: "Guides",
                        link: "/guides/getting-started",
                    },
                    {
                        text: "API",
                        link: "/guides/javascript-api",
                    },
                    {
                        text: "Compatibility",
                        link: "/guides/compatibility",
                    },
                ],
            },
            {
                text: "Development",
                items: [
                    {
                        text: "Contribute",
                        link: "/development",
                    },
                    {
                        text: "Changelog",
                        link: "/changelog",
                    },
                    {
                        text: "Source code",
                        link: "https://github.com/pegjs/pegjs",
                    },
                    {
                        text: "Issue tracker",
                        link: "https://github.com/pegjs/pegjs/issues",
                    },
                ],
            },
        ],
        sidebar: false,
        // sidebarDepth: 0,
        // displayAllHeaders: false,
        // activeHeaderLinks: true,
        search: true,
        searchMaxSuggestions: 5,
        lastUpdated: false,
        editLinks: false,
        evergreen: false,

    },

};
