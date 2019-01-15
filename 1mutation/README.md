## 架构
之前写todoList 时候，每个组件维持着自身的数据，独立向服务器发起请求，缺点
- 代码耦合，虽然是vue单文件组件，但还是把js逻辑代码和静态js代码糅合在一起了
- 组件之间难以通讯

现在
view，state，mutation互相独立

view 触发mutation事件，mutaion做出业务逻辑，和后端通讯，完事后在修改state，state的变化又会使得view做出响应

- TodoList.vue 在创建阶段触发mutation的getIssues函数，这个函数发起ajax请求，获得数据之后在来修改state.issues.
- AddTodo.vue 在按钮被点击后，触发postIssue，请求完数据后在修改statu.issues.

哇，看看这样的代码结构，真的轻松稳定！！

当然，虽然我们可以在其他地方修改state,但是不推荐，这样写代码太乱。注意只在mutation里面修改代码
```
// ...
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```
第一个参数是固定state，然后只能额外传一个参数，你要是想传多个参数，只能把他们写成一个对象或者数组。
```
store.commit('increment', {
  amount: 10
})
```
通过这种方式触发`this.$store.commit('xxx')`
