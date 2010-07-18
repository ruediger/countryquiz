const xhtmluri = "http://www.w3.org/1999/xhtml";

function giveguess(event, countrycode) {  
  var div = document.createElementNS(xhtmluri, "div");
  div.setAttribute("style", 'position:absolute; left:' + event.clientX + 'px; top: ' + event.clientY +
                     'px; background-color:white; border: 1px solid black;');
  div.appendChild(document.createTextNode("Hello World"));
  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  manip.replaceChild(div, manip.firstChild);

  var svgobject = document.getElementById(countrycode);
  if(!svgobject) {
    alert("object with id " + countrycode + " not found");
  }
  svgobject.setAttribute("style", "fill: lightblue;");
}
