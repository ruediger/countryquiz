const xhtmluri = "http://www.w3.org/1999/xhtml";

var last_guess_country = '';
var guesses = {};

function close_guess_dialog(countrycode) {
  if(!countrycode || countrycode == '') {
    return;
  }

  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  else if(manip.firstChild) {
    manip.removeChild(manip.firstChild);
  }

  var svgobject = document.getElementById(countrycode);
  if(!svgobject) {
    alert("object with id " + countrycode + " not found");
  }
  svgobject.removeAttribute("style");
}

function giveguess(event, countrycode) {
  close_guess_dialog(last_guess_country);
  last_guess_country = countrycode;

  var div = document.createElementNS(xhtmluri, "div");
  div.setAttribute("style", 'position:absolute; left:' + event.clientX + 'px; top: ' + event.clientY + 'px;');
  div.setAttribute("id", "guess_box");
  // div {
  var form = document.createElementNS(xhtmluri, "form");
  div.appendChild(form);
  // form {

  var label = document.createElementNS(xhtmluri, "label");
  label.setAttribute("for", "countryname_input");
  label.appendChild(document.createTextNode("Name of country"));
  form.appendChild(label);

  form.appendChild(document.createElementNS(xhtmluri, "br"));

  var input = document.createElementNS(xhtmluri, "input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "countryname_input");
  input.setAttribute("id", "countryname_input");
  input.setAttribute("autofocus", "autofocus"); // html5
  if(guesses[countrycode]) {
    input.setAttribute("value", guesses[countrycode]);
  }
  form.appendChild(input);

  form.appendChild(document.createElementNS(xhtmluri, "br"));

  var submit = document.createElementNS(xhtmluri, "input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.setAttribute("class", "btn");
  submit.setAttribute("onclick", "submit_guess('"+countrycode+"')");
  form.appendChild(submit);

  var cancel = document.createElementNS(xhtmluri, "input");
  cancel.setAttribute("type", "button");
  cancel.setAttribute("value", "Cancel");
  cancel.setAttribute("class", "btn");
  cancel.setAttribute("onclick", "close_guess_dialog('"+countrycode+"')");
  form.appendChild(cancel);
  // } form
  // } div
  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  manip.appendChild(div);
  input.focus(); // in case html5's autofocus is not supported

  var svgobject = document.getElementById(countrycode);
  if(!svgobject) {
    alert("object with id " + countrycode + " not found");
  }
  svgobject.setAttribute("style", "fill: lightblue;");
}

function submit_guess(countrycode) {
  var guess = document.getElementById("countryname_input");
  close_guess_dialog(countrycode);
  if(!guess) {
    alert("countryname_input not found");
  }
  if(guess.value == null || guess.value == '') {
    delete guesses[countrycode];
  }
  else {
    guesses[countrycode] = guess.value;
    var svgobject = document.getElementById(countrycode);
    if(!svgobject) {
      alert("object with id " + countrycode + " not found");
    }
    svgobject.setAttribute("style", "fill: Lavender;");
  }
}
