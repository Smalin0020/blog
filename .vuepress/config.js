module.exports = {
    title: 'Smalin',
    description: 'Just playing around',
    base: '"/<REPO>/"',
    // locales: {
    //   // 键名是该语言所属的子路径
    //   // 作为特例，默认语言可以使用 '/' 作为其路径。
    //   '/': {
    //     lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //     title: 'VuePress',
    //     description: 'Vue-powered Static Site Generator'
    //   },
    //   '/zh/': {
    //     lang: 'zh-CN',
    //     title: 'VuePress',
    //     description: 'Vue 驱动的静态网站生成器'
    //   }
    // },
    themeConfig: {
      lastUpdated: 'Last Updated', // string | boolean
        // 设置导航菜单
        nav: [
          { text: 'Home', link: '/' },
          { text: 'GitHub', link: 'https://github.com/Smalin0020' },
          { text: 'Resume', link: 'https://smalin0020.github.io/Smalin/' }
          // { text: 'External', link: 'https://google.com' },
        ],
        // 设置侧边栏
        sidebar: [
          {
            title: 'HTML/CSS',
            // collapsable: false,
            children: [
              '../HtmlCss/rem.md',
              '../HtmlCss/flex.md'
            ]
          },
          {
            title: 'JavaScript',
            children: [
              '../JavaScript/string.md',
              '../JavaScript/arrayMethod.md',
              '../JavaScript/object.md',
              '../JavaScript/developNote.md',
              '../JavaScript/CORS.md'
            ]
          },
          {
            title: 'NodeJs',
            children: [
              '../NodeJs/Koa.md'
            ]
          },
          {
            title: 'Vue',
            children: [
              '../Vue/vueRouter.md',
              '../Vue/vueTips.md',
              '../Vue/ElementUiSummarize.md'
            ]
          },
          {
            title: 'WebGL',
            children: [
              '../WebGL/Word2Vec.md',
            ]
          },
          {
            title: 'Linux',
            children: [
              '../Linux/Linux.md',
              '../Linux/python.md'
            ]
          },
          {
            title: 'Tools',
            // collapsable: false,
            children: [
              '../tools/git.md',
              '../tools/vsCode.md',
              '../tools/MacTools.md',
              '../tools/gitDocument.md'
            ]
          },
          // {
          //   title: 'Developer essays',
          //   // collapsable: false,
          //   children: [
          //     '../develop/ElementUiSummarize.md',
          //   ]
          // },
          // {
          //   title: 'Web前端面试',
          //   // collapsable: false,
          //   children: [
          //     '../webFront/mianshi.md'
          //   ]
          // },
        ],
        pages: [
          {
            lastUpdated: 1524027677000,
            path: "/HtmlCss/rem.html",
            title: "rem适配",
            frontmatter: {}
          },
        ]
        // 时间戳
        // themeConfig: {
        //   lastUpdated: 'Last Updated', // string | boolean
        // }
      }
  }