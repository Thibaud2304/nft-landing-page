fetch("index.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("index").innerHTML = data;
  });