import conf from '../conf.js'
var token = conf.token
var url = conf.url

export default function (state, issue) {
  var xhr = new XMLHttpRequest()
  xhr.onload = (res) => {
    if (res.target.status !== 201) {
      console.error('error in post issue', res)
    } else {
      console.log('success post issue', res)
      state.issues.push(JSON.parse(res.target.responseText))
    }
  }
  xhr.open('POST', url)
  xhr.setRequestHeader('Authorization', 'bearer ' + token)
  xhr.send(JSON.stringify({
    title: issue.title,
    body: issue.body
  }))
}
