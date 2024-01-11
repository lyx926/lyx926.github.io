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
    {
        text: "短句",
        icon: "book",
        prefix: "/clause/",
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
        text: "命令",
        icon: "book",
        prefix: "/command/",
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
        text: "脚本",
        icon: "book",
        prefix: "/script/",
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
    {
        text: "链接",
        icon: "book",
        prefix: "/links/",
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
        text: "软件",
        icon: "book",
        prefix: "/soft/",
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
