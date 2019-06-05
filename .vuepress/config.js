module.exports = {
    title: 'Smalin',
    description: 'Just playing around',
    markdown: {
      lineNumbers: true
    },
    // base: '/myBlog/',
    themeConfig: {
      lastUpdated: '最后修改于', // string | boolean
        // 设置导航菜单
        nav: [
          { text: 'Home', link: '/' },
          { text: 'GitHub', link: 'https://github.com/Smalin0020' }
          // { text: 'Resume', link: 'https://smalin0020.github.io/Smalin/' }
        ],
        // 设置侧边栏
        sidebar: [
          {
            title: 'HTML/CSS',
            // collapsable: false,
            children: [
              '../HtmlCss/rem.md',
              '../HtmlCss/flex.md'
              // '../HtmlCss/API.md'
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
              '../NodeJs/Koa.md',
              '../NodeJs/AutoDeploy.md'
            ]
          },
          {
            title: 'Vue',
            children: [
              '../Vue/vueRouter.md',
              '../Vue/vueTips.md',
              '../Vue/ElementUiSummarize.md',
              '../Vue/VueTest.md'
            ]
          },
          {
            title: 'git',
            children: [
              '../git/git.md',
              '../git/gitDocument.md',
              // '../git/github.md',
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
              '../Linux/python.md',
              '../Linux/Jenkins.md',
              '../Linux/Nginx.md'
            ]
          },
          {
            title: 'Tools',
            // collapsable: false,
            children: [
              '../tools/vsCode.md',
              '../tools/MacTools.md'
            ]
          },
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
          }
        ]
      }
  }