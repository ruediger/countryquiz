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
var result_mode = false;

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
  if(result_mode) {
    return;
  }

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
  result_mode = true;

  var correct = 0;
  var wrong = 0;

  for each(var country in countries) {
    if(guesses[country.iso]) {
      if(guesses[country.iso] == country.name) { // TODO lowercase and alt!
        svg_style(country.iso, "fill: Green;");
        ++correct;
      }
      else {
        svg_style(country.iso, "fill: Red;");
        ++wrong;
      }
    }
    else {
      svg_style(country.iso, "fill: Tomato;");
    }
  }

  var text = document.createElementNS(xhtmluri, "p");
  text.appendChild(document.createTextNode("You guessed "));

  var correct_html = document.createElementNS(xhtmluri, "span");
  correct_html.setAttribute("id", "correct");
  correct_html.appendChild(document.createTextNode("" + correct + " (" + (correct/countries.length*100) + "%) correct"));
  text.appendChild(correct_html);
  text.appendChild(document.createTextNode(" and "));
  var wrong_html = document.createElementNS(xhtmluri, "span");
  wrong_html.setAttribute("id", "wrong");
  wrong_html.appendChild(document.createTextNode("" + wrong + " (" + (wrong/countries.length*100) + "%) wrong"));
  text.appendChild(wrong_html);
  text.appendChild(document.createTextNode(" out of " + countries.length + " countries"));

  var form = document.createElementNS(xhtmluri, "form");
  var restart = document.createElementNS(xhtmluri, "input");
  restart.setAttribute("type", "submit");
  restart.setAttribute("value", "Restart Quiz");
  restart.setAttribute("class", "btn");
  restart.setAttribute("onclick", "restart_quiz()");
  form.appendChild(restart);

  var result_box = document.createElementNS(xhtmluri, "result_box");
  result_box.setAttribute("id", "result_box");
  result_box.appendChild(text);
  result_box.appendChild(form);

  var result_div = document.getElementById("result");
  if(!result_div) {
    alert("couldn't find div#result");
  }
  result_div.appendChild(result_box);
}

function restart_quiz() {
  var result_div = document.getElementById("result");
  if(!result_div) {
    alert("couldn't find div#result");
  }
  while(result_div.childNodes.length >= 1) {
    result_div.removeChild(result_div.firstChild);
  }

  guesses = {};
  last_guess_country = '';

  for each(var country in countries) {
    svg_style(country.iso);
  }

  result_mode = false;
}
