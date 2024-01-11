import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    /*  "/": [
        "",
        {
          text: "案例",
          icon: "laptop-code",
          prefix: "demo/",
          link: "demo/",
          children: "structure",
        },
        {
          text: "文档",
          icon: "book",
          prefix: "guide/",
          children: "structure",
        },
        {
          text: "幻灯片",
          icon: "person-chalkboard",
          link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
        },
      ],*/
    "/": [],
    "/clause/": ["", {
        text: "bar",
        icon: "book",
        prefix: "bar/",
        children: "structure",
    }, {
        text: "foo",
        icon: "book",
        prefix: "foo/",
        children: "structure",
    }],
    "/command/": ["", {
        text: "bar",
        icon: "book",
        prefix: "bar/",
        children: "structure",
    }, {
        text: "foo",
        icon: "book",
        prefix: "foo/",
        children: "structure",
    }],
    "/skill/": [{
        text: "docker",
        icon: "book",
        prefix: "docker/",
        children: "structure",
    }],
    "/life/": ["", {
        text: "bar",
        icon: "book",
        prefix: "bar/",
        children: "structure",
    }, {
        text: "foo",
        icon: "book",
        prefix: "foo/",
        children: "structure",
    }],
    "/links/": [],
    "/other/": ["", {
        text: "bar",
        icon: "book",
        prefix: "bar/",
        children: "structure",
    }, {
        text: "foo",
        icon: "book",
        prefix: "foo/",
        children: "structure",
    }],
    "/plan/": ["", {
        text: "bar",
        icon: "book",
        prefix: "bar/",
        children: "structure",
    }, {
        text: "foo",
        icon: "book",
        prefix: "foo/",
        children: "structure",
    }],
    "/think/": ["", {
        text: "bar",
        icon: "book",
        prefix: "bar/",
        children: "structure",
    }, {
        text: "foo",
        icon: "book",
        prefix: "foo/",
        children: "structure",
    }],
    "/useful/": ["", {
        text: "bar",
        icon: "book",
        prefix: "bar/",
        children: "structure",
    }, {
        text: "foo",
        icon: "book",
        prefix: "foo/",
        children: "structure",
    }]
});
