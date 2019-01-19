import conf from '../conf.js'
var url = conf.url

export default function (context, issueContent) {
  var token = localStorage.token

  var xhr = new XMLHttpRequest()
  xhr.onload = (res) => {
    if (res.target.status !== 201) {
      console.error('error in post issue', res)
    } else {
      console.log('success post issue', res)
      context.commit('addIssue', JSON.parse(res.target.responseText))
    }
  }
  xhr.open('POST', url)
  xhr.setRequestHeader('Authorization', 'bearer ' + token)
  xhr.send(JSON.stringify({
    title: issueContent.title,
    body: issueContent.body,
    labels: issueContent.labels
  }))
}
