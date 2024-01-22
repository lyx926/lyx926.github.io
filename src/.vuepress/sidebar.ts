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
    "/clause/": [],
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
        text: "command",
        icon: "book",
        prefix: "command/",
        children: "structure",
    },{
        text: "docker",
        icon: "book",
        prefix: "docker/",
        children: "structure",
    },{
        text: "java",
        icon: "book",
        prefix: "java/",
        children: "structure",
    },{
        text: "linux",
        icon: "book",
        prefix: "linux/",
        children: "structure",
    },{
        text: "mysql",
        icon: "book",
        prefix: "mysql/",
        children: "structure",
    },{
        text: "nginx",
        icon: "book",
        prefix: "nginx/",
        children: "structure",
    },{
        text: "script",
        icon: "book",
        prefix: "script/",
        children: "structure",
    },{
        text: "vue",
        icon: "book",
        prefix: "vue/",
        children: "structure",
    },{
        text: "windows",
        icon: "book",
        prefix: "windows/",
        children: "structure",
    },],
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
