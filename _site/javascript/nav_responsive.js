function myFunction() {
  var x = document.getElementById("rightNavLinks");
  if (x.className === "page-links") {
    x.className += " responsive";
  } else {
    x.className = "page-links";
  }
}
