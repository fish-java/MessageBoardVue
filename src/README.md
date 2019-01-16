# 架构
- /
  Home.vue
- /login
  Login.vue

- 用户登录首页 
- Home.vue初始化
- created阶段触发actions.getIssues 
  - 如果返回403错误
    - 就修改 state.isLogin 
    - 触发 Home.vue 对它的watch函数
    - 跳转到 /login 的登录页面
  - 如果返回200
    - mutations.initIssues(issues)
    - state的变化view自动做出反应

- 点击提交任务
  - 触发actions.postIssue
  - 发起ajax请求
  - 如果请求成功，说明数据提交到了github上面，我们在手动
    的修改state

- 点击open close issue
  - 触发actions.patchIssue
  - 发起AJAX请求
  - 如果请求成功，说明数据提交到了github上面，我们在手动
    的修改state

登录的逻辑比较复杂，我也不知道怎么简化。
首先全局都使用了localStorage.token这个数据来获得token，这是需要用文档说明的。然后我是通过getIssues的返回结果来判断是否成功登录。如果登录失败应该跳转路由的，但是在actions.getIssues中我不知道如何跳转，我只能通过在state中设置一个isLogin的变量，然后通过Home.vue里面的watch函数监听。。。。

