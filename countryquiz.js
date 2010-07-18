const xhtmluri = "http://www.w3.org/1999/xhtml";

function svg_style(countrycode, style) {
  var svgobject = document.getElementById(countrycode);
  if(!svgobject) {
    alert("object with id " + countrycode + " not found");
  }
  if(!style) {
    svgobject.removeAttribute("style");
  }
  else {
    svgobject.setAttribute("style", style);
  }
}

var last_guess_country = '';
var guesses = {};

// TODO alt
const countries = [
  { name: "burkina faso",                                 iso: "bf", alt: [] },
  { name: "libyan arab jamahiriya",                       iso: "ly", alt: ["lybia"] },
  { name: "madagascar",                                   iso: "mg", alt: [] },
  { name: "cote d'ivoire",                                iso: "ci", alt: ["côte d'ivoire"] },
  { name: "algeria",                                      iso: "dz", alt: [] },
  { name: "cameroon",                                     iso: "cm", alt: [] },
  { name: "botswana",                                     iso: "bw", alt: [] },
  { name: "kenya",                                        iso: "ke", alt: [] },
  { name: "sierra leone",                                 iso: "sl", alt: [] },
  { name: "mali",                                         iso: "ml", alt: [] },
  { name: "congo",                                        iso: "cd", alt: ["congo, the democratic republic of the", "dr congo"] },
  { name: "somalia",                                      iso: "so", alt: [] },
  { name: "guinea-bissau",                                iso: "gw", alt: [] },
  { name: "ghana",                                        iso: "gh", alt: [] },
  { name: "uganda",                                       iso: "ug", alt: [] },
  { name: "mozambique",                                   iso: "mz", alt: [] },
  { name: "mauritania",                                   iso: "mr", alt: [] },
  { name: "angola",                                       iso: "ao", alt: [] },
  { name: "sudan",                                        iso: "sd", alt: [] },
  { name: "niger",                                        iso: "ne", alt: [] },
  { name: "zambia",                                       iso: "zm", alt: [] },
  { name: "ethiopia",                                     iso: "et", alt: [] },
  { name: "western sahara",                               iso: "eh", alt: [] },
  { name: "chad",                                         iso: "td", alt: [] },
  { name: "guinea",                                       iso: "gn", alt: [] },
  { name: "nigeria",                                      iso: "ng", alt: [] },
  { name: "tunisia",                                      iso: "tn", alt: [] },
  { name: "namibia",                                      iso: "na", alt: [] },
  { name: "south africa",                                 iso: "za", alt: [] },
  { name: "egypt",                                        iso: "eg", alt: [] },
  { name: "tanzania",                                     iso: "tz", alt: ["tanzania, united republic of"] },
  { name: "equatorial guinea",                            iso: "gq", alt: [] },
  { name: "lesotho",                                      iso: "ls", alt: [] },
  { name: "burundi",                                      iso: "bi", alt: [] },
  { name: "djibouti",                                     iso: "dj", alt: [] },
  { name: "congo",                                        iso: "cg", alt: [] },
  { name: "rwanda",                                       iso: "rw", alt: [] },
  { name: "senegal",                                      iso: "sn", alt: [] },
  { name: "togo",                                         iso: "tg", alt: [] },
  { name: "gabon",                                        iso: "ga", alt: [] },
  { name: "malawi",                                       iso: "mw", alt: [] },
  { name: "morocco",                                      iso: "ma", alt: [] },
  { name: "liberia",                                      iso: "lr", alt: [] },
  { name: "central african republic",                     iso: "cf", alt: [] },
  { name: "zimbabwe",                                     iso: "zw", alt: [] },
  { name: "benin",                                        iso: "bj", alt: [] },
  { name: "eritrea",                                      iso: "er", alt: [] },
  { name: "swaziland",                                    iso: "sz", alt: [] },
  { name: "gambia",                                       iso: "gm", alt: [] },
  { name: "cape verde",                                   iso: "cv", alt: [] },
  { name: "comoros",                                      iso: "km", alt: [] },
  { name: "mauritius",                                    iso: "mu", alt: [] },
  { name: "sao tome and principe",                        iso: "st", alt: [] },
  { name: "seychelles",                                   iso: "sc", alt: [] }
];

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

  svg_style(countrycode, null);
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
  label.appendChild(document.createTextNode("Your guess"));
  form.appendChild(label);

  form.appendChild(document.createElementNS(xhtmluri, "br"));

  var input = document.createElementNS(xhtmluri, "input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "countryname_input");
  input.setAttribute("id", "countryname_input");
  input.setAttribute("autofocus", "autofocus"); // html5
  input.setAttribute("placeholder", "country name"); // html5
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

  svg_style(countrycode, "fill: lightblue;");
}

function submit_guess(countrycode) {
  var guess = document.getElementById("countryname_input");
  close_guess_dialog(countrycode);
  last_guess_country = '';
  if(!guess) {
    alert("countryname_input not found");
  }
  if(guess.value == null || guess.value == '') {
    delete guesses[countrycode];
  }
  else {
    guesses[countrycode] = guess.value;
    svg_style(countrycode, "fill: Lavender;");
  }
}

function check() {
  for(var countrycode in guesses) {
    svg_style(countrycode, "fill: Green;");
  }

  var result_div = document.getElementById("result");
  if(!result_div) {
    alert("couldn't find div#result");
  }
}
