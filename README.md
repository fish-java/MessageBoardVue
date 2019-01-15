# vue-todoList

mutation 应该只用来修改数据。

view --触发事件--> --dispatch--> action function --commit--> mutation 函数 --直接修改--> state

- 整个组件系统应该专注于UI层面以及在什么事件触发什么函数
- ajax请求等业务逻辑应该交给 actions
- 有mutation 来修改state
- state变化后会重新渲染view
