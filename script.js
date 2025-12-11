function load_md(url, elem) {
  var req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)
  document.querySelector(elem).innerHTML = marked.parse(req.responseText)
}
