const { gfmHeadingId } = window.markedGfmHeadingId;
const { marked } = window.marked;

marked.use({
  gfm: true,
}, gfmHeadingId());

function load_md(url, elem) {
  var req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null);
  document.querySelector(elem).innerHTML = marked.parse(req.responseText)
}
