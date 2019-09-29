"use strict";

module.exports = {

    title: "POW",
    description: "Run spec, benchmark and impact tests all from one tool",
    head: [

        [ "meta", { "http-equiv": "XA-UA-Compatible", content: "IE=edge" } ],
        [ "link", { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" } ],

    ],

    themeConfig: {

        nav: require( "./config/nav.js" ),
        sidebar: require( "./config/sidebar.js" ),
        sidebarDepth: 0,
        displayAllHeaders: false,
        activeHeaderLinks: true,
        search: true,
        searchMaxSuggestions: 5,
        lastUpdated: false,
        editLinks: false,
        evergreen: false,
        smoothScroll: true,

    },

    plugins: [
        [ "@vuepress/back-to-top", true ],
    ],

    extraWatchFiles: [
        require.resolve( "./config/nav.js" ),
        require.resolve( "./config/sidebar.js" ),
    ],

};
