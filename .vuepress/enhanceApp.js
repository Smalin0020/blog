function integrateGitalk(router) {
  const linkGitalk = document.createElement('link')
  linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css'
  linkGitalk.rel = 'stylesheet'
  const scriptGitalk = document.createElement('script')
  document.body.appendChild(linkGitalk)
  scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js'
  document.body.appendChild(scriptGitalk)

  router.afterEach((to) => {
    const commentsContainer = document.createElement('div')
    commentsContainer.id = 'gitalk-container'
    commentsContainer.classList.add('content')
    const $page = document.querySelector('.page')
    if ($page) {
      $page.appendChild(commentsContainer)
    }
    if (scriptGitalk.onload) {
      renderGitalk(to.fullPath)
    } else {
      scriptGitalk.onload = () => {
        const commentsContainer = document.createElement('div')
        commentsContainer.id = 'gitalk-container'
        commentsContainer.classList.add('content')
        const $page = document.querySelector('.page')
        if ($page) {
          $page.appendChild(commentsContainer)
          renderGitalk(to.fullPath)
        }
      }
    }
  })
  function renderGitalk(fullPath) {
    const gitalk = new Gitalk({
      clientID: '3dc1fdbc831929cfe08a',
      clientSecret: '2b2ec9cb9427007de3bc72a6590afb94bc3f6d7b',
      repo: 'blog',
      owner: 'smalin0020',
      admin: ['smalin0020'],
      id: 'comment',
      distractionFreeMode: false,
      language: 'zh-CN',
    })

    gitalk.render('gitalk-container')
  }
}

export default ({Vue, options, router, siteData}) => {
  try {
    document && integrateGitalk(router)
  } catch (e) {
    console.error(e.message)
  }
}










// import 'gitalk/dist/gitalk.css'
// import Gitalk from 'gitalk'
//     // require window 
//     const Valine = require('valine');
//     // if (typeof window !== 'undefined') {
//     //   this.window = window
//     //   window.AV = require('leancloud-storage')
      
//     // }
// export default ({
//     Vue, // 当前 VuePress 应用所使用的 Vue 版本
//     options, // 根 Vue 实例的选项
//     router, // 应用程序的路由实例
//     siteData // 网站元数据
//   }) => {
//     // ...使用应用程序级别的增强功能
     
//     new Valine({
//       el: '#vcomments' ,
//       appId: 'WsDFB1fXsAq2R09gzeXUjr8H-gzGzoHsz',// your appId
//       appKey: '1lKXzsXXEkbWsgyOdc2EOk8f', // your appKey
//       notify:false, 
//       verify:false, 
//       avatar:'mm', 
//       placeholder: 'just go go' 
//     });
//   }