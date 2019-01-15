export default function (state, issue) {
  var newIssues = []
  state.issues.forEach((ele, index) => {
    if (ele.number === issue.number) {
      ele = issue
    }
    newIssues.push(ele)
  })
  state.issues = newIssues
}
