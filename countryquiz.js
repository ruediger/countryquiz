const xhtmluri = "http://www.w3.org/1999/xhtml";

function giveguess(event, countrycode) {  
  var div = document.createElementNS(xhtmluri, "div");
  div.setAttribute("style", 'position:absolute; left:' + event.clientX + 'px; top: ' + event.clientY +
                     'px; background-color:white; border: 1px solid black;');
  // div {
  var form = document.createElementNS(xhtmluri, "form");
  div.appendChild(form);
  // form {

  var label = document.createElementNS(xhtmluri, "label");
  label.setAttribute("for", "countryname_input");
  label.appendChild(document.createTextNode("Name of country"));
  form.appendChild(label);

  var input = document.createElementNS(xhtmluri, "input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "countryname_input");
  form.appendChild(input);

  form.appendChild(document.createElementNS(xhtmluri, "br"));

  var submit = document.createElementNS(xhtmluri, "input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.setAttribute("onclick", "submit_guess('"+countrycode+"')");
  form.appendChild(submit);

  var cancel = document.createElementNS(xhtmluri, "input");
  cancel.setAttribute("type", "button");
  cancel.setAttribute("value", "Cancel");
  cancel.setAttribute("onclick", "close_guess_dialog('"+countrycode+"')");
  form.appendChild(cancel);
  // } form
  // } div

  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  if(manip.firstChild) {
    manip.replaceChild(div, manip.firstChild);
  }
  else {
    manip.appendChild(div);
  }

  var svgobject = document.getElementById(countrycode);
  if(!svgobject) {
    alert("object with id " + countrycode + " not found");
  }
  svgobject.setAttribute("style", "fill: lightblue;");
}

function close_guess_dialog(countrycode) {
  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  manip.removeChild(manip.firstChild);

  var svgobject = document.getElementById(countrycode);
  if(!svgobject) {
    alert("object with id " + countrycode + " not found");
  }
  svgobject.removeAttribute("style");
}

function submit_guess(countrycode) {
  
  close_guess_dialog(countrycode);
}
