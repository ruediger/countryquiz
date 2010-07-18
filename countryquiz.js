const xhtmluri = "http://www.w3.org/1999/xhtml";

function remove_style(countrycode) {
  var svgobject = document.getElementById("map_tmp_style");
  if(!svgobject) {
    alert("svg tmp style not found");
  }
  if(!svgobject.firstChild) {
    return;
  }
  var svgstyle = svgobject.firstChild.nodeValue;
  var re = new RegExp("^\." + countrycode, "mg");
  var pos = svgstyle.search(re);
  if(pos != -1) {
    var lhs = svgstyle.substring(0, pos);
    svgstyle = svgstyle.substring(pos);
    pos = svgstyle.search(/\}/, "g");
    if(pos == -1) {
      alert("css error");
    }
    svgstyle = lhs + svgstyle.substring(pos+1);
    svgobject.replaceChild(document.createTextNode(svgstyle), svgobject.firstChild);
  }
}

function set_style(countrycode, style) {
  var svgobject = document.getElementById("map_tmp_style");
  if(!svgobject) {
    alert("svg tmp style not found");
  }

  var re = new RegExp("^\." + countrycode, "mg");
  const newstyle = '\n.' + countrycode + ' {\n' + style + '\n}\n';
  if(svgobject.firstChild) {
    var svgstyle = svgobject.firstChild.nodeValue;
    remove_style(countrycode);
    svgstyle += newstyle;
    svgobject.replaceChild(document.createTextNode(svgstyle), svgobject.firstChild);
  }
  else {
    svgobject.appendChild(document.createTextNode(newstyle));
  }
}

var last_guess_country = '';
var guesses = {};
var result_mode = false;

// TODO alt
const countries = [
  { name: "burkina faso",                                 iso: "bf", alt: [] },
  { name: "libyan arab jamahiriya",                       iso: "ly", alt: ["libya"] },
  { name: "madagascar",                                   iso: "mg", alt: [] },
  { name: "cote d'ivoire",                                iso: "ci", alt: ["côte d'ivoire"] },
  { name: "algeria",                                      iso: "dz", alt: [] },
  { name: "cameroon",                                     iso: "cm", alt: [] },
  { name: "botswana",                                     iso: "bw", alt: [] },
  { name: "kenya",                                        iso: "ke", alt: [] },
  { name: "sierra leone",                                 iso: "sl", alt: [] },
  { name: "mali",                                         iso: "ml", alt: [] },
  { name: "democratic republic of the congo",             iso: "cd", alt: ["dr congo", "drc"] },
  { name: "somalia",                                      iso: "so", alt: [] },
  { name: "guinea-bissau",                                iso: "gw", alt: ["republic of guinea-bissau", "república da guiné-bissau", "guiné-bissau"] },
  { name: "ghana",                                        iso: "gh", alt: [] },
  { name: "uganda",                                       iso: "ug", alt: [] },
  { name: "mozambique",                                   iso: "mz", alt: [] },
  { name: "mauritania",                                   iso: "mr", alt: [] },
  { name: "angola",                                       iso: "ao", alt: [] },
  { name: "sudan",                                        iso: "sd", alt: [] },
  { name: "niger",                                        iso: "ne", alt: [] },
  { name: "zambia",                                       iso: "zm", alt: [] },
  { name: "ethiopia",                                     iso: "et", alt: [] },
  { name: "western sahara",                               iso: "eh", alt: ["sáhara occidental"] },
  { name: "chad",                                         iso: "td", alt: [] },
  { name: "guinea",                                       iso: "gn", alt: [] },
  { name: "nigeria",                                      iso: "ng", alt: [] },
  { name: "tunisia",                                      iso: "tn", alt: [] },
  { name: "namibia",                                      iso: "na", alt: [] },
  { name: "south africa",                                 iso: "za", alt: [] },
  { name: "egypt",                                        iso: "eg", alt: [] },
  { name: "tanzania",                                     iso: "tz", alt: ["united republic of tanzania"] },
  { name: "equatorial guinea",                            iso: "gq", alt: [] },
  { name: "lesotho",                                      iso: "ls", alt: [] },
  { name: "burundi",                                      iso: "bi", alt: [] },
  { name: "djibouti",                                     iso: "dj", alt: [] },
  { name: "congo",                                        iso: "cg", alt: ["republic of congo"] },
  { name: "rwanda",                                       iso: "rw", alt: [] },
  { name: "senegal",                                      iso: "sn", alt: [] },
  { name: "togo",                                         iso: "tg", alt: [] },
  { name: "gabon",                                        iso: "ga", alt: [] },
  { name: "malawi",                                       iso: "mw", alt: [] },
  { name: "morocco",                                      iso: "ma", alt: ["kingdom of morocco", "amerruk", "murakuc"] },
  { name: "liberia",                                      iso: "lr", alt: [] },
  { name: "central african republic",                     iso: "cf", alt: ["car"] },
  { name: "zimbabwe",                                     iso: "zw", alt: ["republic of zimbabwe", "southern rhodesia", "republic of rhodesia", "zimbabwe rhodesia"] },
  { name: "benin",                                        iso: "bj", alt: [] },
  { name: "eritrea",                                      iso: "er", alt: [] },
  { name: "swaziland",                                    iso: "sz", alt: [] },
  { name: "gambia",                                       iso: "gm", alt: [] },
  { name: "cape verde",                                   iso: "cv", alt: [] },
  { name: "comoros",                                      iso: "km", alt: [] },
  { name: "mauritius",                                    iso: "mu", alt: [] },
  { name: "sao tome and principe",                        iso: "st", alt: ["são tomé and príncipe", "democratic republic of são tomé and príncipe", "democratic republic of sao tome and principe"] },
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

  remove_style(countrycode);
}

function next(event, last_country) {
  if(!last_country) {
    last_country = last_guess_country;
  }
  if(last_country) {
    for(var i = 0; i < countries.length; ++i) {
      if(countries[i].iso == last_country) {
        ++i;
        for(; i < countries.length; ++i) {
          if(!guesses[countries[i].iso]) {
            break;
          }
        }
        giveguess(event, countries[i].iso);
        return;
      }
    }
  }
  else {
    for(var i = 0; i < countries.length; ++i) {
      if(!guesses[countries[i].iso]) {
        break;
      }
    }
    giveguess(event, countries[i].iso);
  }
}

function giveguess(event, countrycode) {
  if(result_mode) {
    show_solution(event, countrycode); // in result mode rather show the solution and quit
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

  var nextcountry = document.createElementNS(xhtmluri, "input");
  nextcountry.setAttribute("type", "button");
  nextcountry.setAttribute("value", "Next");
  nextcountry.setAttribute("class", "btn");
  nextcountry.setAttribute("onclick", "submit_guess('"+countrycode+"');next(Event, '"+countrycode+"');");
  form.appendChild(nextcountry);
  // } form
  // } div
  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  manip.appendChild(div);
  input.focus(); // in case html5's autofocus is not supported

  set_style(countrycode, "fill: lightblue;");
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
    set_style(countrycode, "fill: Lavender;");
  }
}

function check_guess(guess_, country) {
  var guess = guess_.toLocaleLowerCase();
  if(guess == country.name) {
    return true;
  }
  for each(var alt in country.alt) {
    if(guess == alt) {
      return true;
    }
  }
  return false;
}

function number_of_guesses() {
  var len = 0;
  for(var i in obj) {
    if(obj.hasOwnProperty(i)) {
      ++len;
    }
  }
  return len;
}

function get_country(countrycode) {
  for each(var country in countries) { // TODO slow maybe use assoc array
    if(country.iso == countrycode) {
      return country;
    }
  }
  throw "country not found";
  return null;
}

function show_solution(event, countrycode) {
  if(last_guess_country && last_guess_country != '') {
    close_guess_dialog(last_guess_country);
    // restore correct color
    var oldcountry = get_country(last_guess_country);
    if(guesses[oldcountry.iso]) {
      if(check_guess(guesses[oldcountry.iso], oldcountry)) {
        set_style(oldcountry.iso, "fill: Green;");
      }
      else {
        set_style(oldcountry.iso, "fill: Red;");
      }
    }
    else {
      set_style(oldcountry.iso, "fill: Tomato;");
    }
  }
  last_guess_country = countrycode;
  
  var div = document.createElementNS(xhtmluri, "div");
  div.setAttribute("style", 'position:absolute; left:' + event.clientX + 'px; top: ' + event.clientY + 'px;');
  div.setAttribute("id", "guess_box");
  
  var country = get_country(countrycode);
  
  var text = "This country is named '" + country.name + "'";
  if(country.alt.length > 0) {
    text += " (alternative names and spellings are: ";
    var i = 0;
    for(; i < country.alt.length - 1; ++i) {
      text += "'" + country.alt[i] + "', ";
    }
    text += "'" + country.alt[i] + "')";
  }

  div.appendChild(document.createTextNode(text));
  if(guesses[country.iso]) {
    var sol = document.createElementNS(xhtmluri, "span");
    if(check_guess(guesses[country.iso], country)) {
      sol.setAttribute("class", "correct");
      sol.appendChild(document.createTextNode("Your solution was correct!"));
    }
    else {
      sol.setAttribute("class", "wrong");
      sol.appendChild(document.createTextNode("Your solution " + guesses[country.iso] + " was wrong!"));
    }
    div.appendChild(document.createElementNS(xhtmluri, "br"));
    div.appendChild(sol);
  }

  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  manip.appendChild(div);

  set_style(countrycode, "fill: lightblue;");
}

function check() {
  if(number_of_guesses == 0) {
    alert("you should at least try to guess one country name!");
    return;
  }

  result_mode = true;

  var correct = 0;
  var wrong = 0;

  for each(var country in countries) {
    if(guesses[country.iso]) {
      if(check_guess(guesses[country.iso], country)) {
        set_style(country.iso, "fill: Green;");
        ++correct;
      }
      else {
        set_style(country.iso, "fill: Red;");
        ++wrong;
      }
    }
    else {
      set_style(country.iso, "fill: Tomato;");
    }
  }

  var text = document.createElementNS(xhtmluri, "p");
  text.appendChild(document.createTextNode("You guessed "));

  var correct_html = document.createElementNS(xhtmluri, "span");
  correct_html.setAttribute("class", "correct");
  correct_html.appendChild(document.createTextNode("" + correct +
                                                   " (" + Math.round(correct/countries.length*100) + "%) correct"));
  text.appendChild(correct_html);
  text.appendChild(document.createTextNode(" and "));
  var wrong_html = document.createElementNS(xhtmluri, "span");
  wrong_html.setAttribute("class", "wrong");
  wrong_html.appendChild(document.createTextNode("" + wrong +
                                                 " (" + Math.round(wrong/countries.length*100) + "%) wrong"));
  text.appendChild(wrong_html);
  text.appendChild(document.createTextNode(" out of " + countries.length + " countries"));

  var form = document.createElementNS(xhtmluri, "form");
  var restart = document.createElementNS(xhtmluri, "input");
  restart.setAttribute("type", "submit");
  restart.setAttribute("value", "Restart Quiz");
  restart.setAttribute("class", "btn");
  restart.setAttribute("onclick", "restart_quiz()");
  form.appendChild(restart);

  var result_box = document.createElementNS(xhtmluri, "div");
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

  var svgobject = document.getElementById("map_tmp_style");
  if(!svgobject) {
    alert("svg tmp style not found");
  }
  if(svgobject.firstChild) {
    svgobject.removeChild(svgobject.firstChild);
  }

  result_mode = false;
}
