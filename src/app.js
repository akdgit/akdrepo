let root = document.getElementById("root");
let view = `<div id= "fetchedInfo"> Here's the info from Kuepa </div>
`
root.innerHTML=view;

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));