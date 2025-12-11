const { gfmHeadingId } = window.markedGfmHeadingId;
const { marked } = window.marked;

marked.use(gfmHeadingId());

function load_md(url, elem) {
  var req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)
  let response = req.responseText
  if (response) {
    document.querySelector(elem).innerHTML = marked.parse(req.responseText)
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  let page = new URLSearchParams(window.location.search).get('p')
  if (page) {
    page = page.replace('-', '/')
    if (page == 'home') {
      load_md('./README.md', '#content>div')
    } else {
      load_md('./' + page + '/README.md', '#content>div')
    }
  }
  else {
    window.location.href = "?p=home"
  }
});
