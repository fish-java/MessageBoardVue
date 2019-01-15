import conf from '../conf.js'
var token = conf.token
var url = conf.url

export default function (state, data) {
  var number = data.number
  var body = data.body

  var xhr = new XMLHttpRequest()
  xhr.onload = (res) => {
    if (res.target.status !== 200) {
      console.warn(res)
    } else {
      console.log('patch is successful', res)

      // state.issues 没有被检查。。。 我去，和vue中的不一样。。。
      var newIssues = []

      state.issues.forEach((ele, index) => {
        // 擦，后面这个number是字符！！！
        if (ele.number === Number(number)) {
          ele = JSON.parse(res.target.responseText)
          // state.issues = [] 傻屌了，怎么能在foreach 中这样做呢？
        }
        newIssues.push(ele)
      })
      state.issues = newIssues
      console.log(state)
    }
  }
  xhr.open('PATCH', url + `/${number}`)
  xhr.setRequestHeader('Authorization', 'bearer ' + token)
  xhr.send(body)
}
