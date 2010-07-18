const xhtmluri = "http://www.w3.org/1999/xhtml";

function giveguess(event, countrycode) {  
  var other = document.createElementNS(xhtmluri, "div");
  other.setAttribute("style", 'position:absolute; left:' + event.clientX + 'px; top: ' + event.clientY +
                     'px; background-color:white; border: 1px solid black;');
  other.appendChild(document.createTextNode("Hello World"));
  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  manip.replaceChild(other, manip.firstChild);
}
