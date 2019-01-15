import conf from '../conf.js'
var token = conf.token
var url = conf.url

export default function getIssues (state) {
  var xhr = new XMLHttpRequest()
  xhr.onload = (res) => {
    if (res.target.status !== 200) {
      console.error(res)
    } else {
      state.issues = JSON.parse(res.target.responseText)
      console.info('it is success to get issues from github')
    }
  }
  xhr.open('GET', url + '?state=all')
  xhr.setRequestHeader('Authorization', 'bearer ' + token)
  xhr.send()
}
