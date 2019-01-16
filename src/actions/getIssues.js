import conf from '../conf.js'

var url = conf.url

export default function getIssues (context) {
  var token = localStorage.token

  var xhr = new XMLHttpRequest()
  xhr.onload = (res) => {
    if (res.target.status === 401) {
      context.commit('changeLoginState', false)
      console.error('token is outdate', res)
    } else if (res.target.status !== 200) {
      console.log('some error in getting issues')
      console.error(res)
    } else {
      context.commit('initIssues', JSON.parse(res.target.responseText))
      console.info('it is success to get issues from github')
    }
  }
  xhr.open('GET', url + '?state=all')
  xhr.setRequestHeader('Authorization', 'bearer ' + token)
  xhr.send()
}
