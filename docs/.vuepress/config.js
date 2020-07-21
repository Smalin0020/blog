module.exports = {
  theme: 'reco',
  // base: '/blog/',
  title: 'undefined',
  description: '高级前端摸鱼师',
  // 移动端优化
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  locales: { '/': { lang: 'zh-cmn-Hans' } },
  themeConfig: {
    author: 'Smalin',
    type: 'blog',
    authorAvatar: '/avatar.jpeg',
    sidebar: 'auto',
    valineConfig: {
      appId: '5KuEx4E9uD0OnzKxh5vaRD8Q-gzGzoHsz',
      appKey: 'pCv8RXRbeTOtbUTqtazzxHLU',
      visitor: true
    },
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      }
    },
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '标签', link: '/tag/', icon: 'reco-tag' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/dinglin26', icon: 'reco-github' },
          { text: '简历', link: 'https://dinglin26.github.io/blog/views/article/interview/resume.html', icon: 'reco-lock' }
        ]
      }
    ],
    friendLink: [
      {
        title: "YiJun's Blog",
        desc: '大佬大佬',
        email: 'none',
        link: 'https://deeruby.com/',
      }
    ],
    // lastUpdated: '最后修改于', // string | boolean
    // 备案
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',

    // 腾讯公益 404 页面
    noFoundPageByTencent: true
  }
}
