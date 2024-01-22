import {navbar} from "vuepress-theme-hope";

export default navbar([/*
  "/",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
*/
    "/",
    // "/demo/",
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
    "/clause/",
    "/skill/",
    {
        text: "生活",
        icon: "book",
        prefix: "/life/",
        children: [
            {
                text: "Bar",
                icon: "lightbulb",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Foo",
                icon: "lightbulb",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
    "/links/",
    {
        text: "其他",
        icon: "book",
        prefix: "/other/",
        children: [
            {
                text: "Bar",
                icon: "lightbulb",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Foo",
                icon: "lightbulb",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
    {
        text: "计划",
        icon: "book",
        prefix: "/plan/",
        children: [
            {
                text: "Bar",
                icon: "lightbulb",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Foo",
                icon: "lightbulb",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
    {
        text: "思考",
        icon: "book",
        prefix: "/think/",
        children: [
            {
                text: "Bar",
                icon: "lightbulb",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Foo",
                icon: "lightbulb",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
    {
        text: "有用",
        icon: "book",
        prefix: "/useful/",
        children: [
            {
                text: "Bar",
                icon: "lightbulb",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Foo",
                icon: "lightbulb",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    }
]);
