var token = localStorage.token
var url = 'https://api.github.com/repos/saltfish666/todo-list/issues'

export default {
  token,
  url,
  labels: ['todo', 'note', 'aim']
}
