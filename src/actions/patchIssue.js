import conf from '../conf.js'

var url = conf.url

export default function (context, data) {
  var token = localStorage.token
  var number = data.number
  var body = data.body

  var xhr = new XMLHttpRequest()
  xhr.onload = (res) => {
    if (res.target.status !== 200) {
      console.warn(res)
    } else {
      console.log('patch is successful', res)
      context.commit('editIssue', JSON.stringify(res.target.responseText))
    }
  }
  xhr.open('PATCH', url + `/${number}`)
  xhr.setRequestHeader('Authorization', 'bearer ' + token)
  xhr.send(body)
}
