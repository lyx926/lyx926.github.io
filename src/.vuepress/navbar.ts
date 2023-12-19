import {navbar} from "vuepress-theme-hope";

export default navbar([
    {text: "首页", icon: "home", link: "/"},
    {
        text: "笔记", icon: "book", link: "/notes/",
        children: [
            "notes/mysql"
        ]
    },
    /*    {
            text: "指南",
            icon: "lightbulb",
            prefix: "/guide/",
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
        }*/,
]);
