const { gfmHeadingId } = window.markedGfmHeadingId;
const { marked } = window.marked;

marked.use(gfmHeadingId());

function load_md(url, elem) {
  var req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  //we check for returning the index file, because some webservers always return that
  //so, if it's .html (and not .md) just act like it doesn't exist
  if (!req.responseText.includes('!DOCTYPE html')) {
    document.querySelector(elem).innerHTML = marked.parse(req.responseText)
    return true
  }

  return false
}

let page = new URLSearchParams(window.location.search).get('p')
if (page === null) {
  page = ''
}

page = page.replace('-', '/')
if (!load_md('./' + page + '.md', '#content>div')) {
  window.location.href = "?p=home"
}
