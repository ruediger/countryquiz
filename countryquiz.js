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
  var re = new RegExp("^\\." + countrycode, "mg");
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

  var re = new RegExp("^\\." + countrycode, "mg");
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
var answers = {};
var result_mode = false;

const countries = [
  { name: "burkina faso",                     iso: "bf", alt: ["burkina", "republic of upper volta"] },
  { name: "libyan arab jamahiriya",           iso: "ly", alt: ["libya", "ليبيا", "ⵍⵉⴱⵢⴰ", "great socialist people's libyan arab jamahiriya", "الجماهيرية العربية الليبية الشعبية الإشتراكية العظمى", "al-jamāhīriyyah al-ʿarabiyyah al-lībiyyah aš-šaʿbiyyah al-ištirākiyyah al-ʿuẓmā", /*de*/"sozialistische libysch-arabische volks-dschamahirija", /*de*/"libyen"] },
  { name: "madagascar",                       iso: "mg", alt: ["republic of madagascar", "repoblikan'i madagasikara", "république de madagascar", "malagasy republic", "république malgache", /*de*/"madagaskar"] },
  { name: "cote d'ivoire",                    iso: "ci", alt: ["côte d'ivoire", "ivory coast", /*de*/"elfenbeinküste"] },
  { name: "algeria",                          iso: "dz", alt: ["الجزائر", "ⴷⵥⴰⵢⴻⵔ", "dzayer", "algérie", "people's democratic republic of algeria", "الجمهورية الجزائرية الديمقراطية الشّعبية", "al jumhuriyya al jazā'iriyya ad-dīmuqrāţiyya ash sha'biyya", /*de*/"algerien"] },
  { name: "cameroon",                         iso: "cm", alt: ["cameroun", "république du cameroun", "republic of cameroon", /*de*/"kamerun"] },
  { name: "botswana",                         iso: "bw", alt: ["republic of botswana", "lefatshe la botswana", /*de*/"botsuana"] },
  { name: "kenya",                            iso: "ke", alt: ["republic of kenya", "jamhuri ya kenya", "bururi wa kenya", /*de*/"kenia"] },
  { name: "sierra leone",                     iso: "sl", alt: ["republic of sierra leone"] },
  { name: "mali",                             iso: "ml", alt: ["republic of mali", "république du mali", "mali ka fasojamana"] },
  { name: "democratic republic of the congo", iso: "cd", alt: ["dr congo", "drc", "rdc", "droc", "congo-kinshasa", "congo free state", "belgian congo", "congo-léopoldville", "zaire", "zaïre", "république démocratique du congo", "republiki ya kongó demokratiki", "repubilika ya kongo demokratika", "jamhuri ya kidemokrasia ya kongo", "ditunga dia kongu wa mungalaata", "repubilika ya kongo ya dimokalasi", /*de*/"demokratische republik kongo", /*de*/"dr kongo"] },
  { name: "somalia",                          iso: "so", alt: ["soomaaliya", "الصومال", "republic of somalia", "jamhuuriyadda soomaaliya", "جمهورية الصومال‎", "jumhūriyyat as-sūmāl‎"] },
  { name: "guinea-bissau",                    iso: "gw", alt: ["republic of guinea-bissau", "república da guiné-bissau", "guiné-bissau"] },
  { name: "ghana",                            iso: "gh", alt: ["republic of ghana"] },
  { name: "uganda",                           iso: "ug", alt: ["republic of uganda", "jamhuri ya uganda"] },
  { name: "mozambique",                       iso: "mz", alt: ["republic of mozambique", "república de moçambique", "moçambique", /*de*/"mosambik"] },
  { name: "mauritania",                       iso: "mr", alt: ["موريتانيا", "gànnaar", "murutaane", "moritani", "mauritanie", "islamic republic of mauritania", "الجمهورية الإسلامية الموريتانية", "al-jumhūriyyah al-islāmiyyah al-mūrītāniyyah", "republik bu lislaamu bu gànnaar", "république islamique de mauritanie", /*de*/"mauretanien"] },
  { name: "angola",                           iso: "ao", alt: ["republic of angola", "república de angola"] },
  { name: "sudan",                            iso: "sd", alt: ["السودان", "republic of the sudan"] },
  { name: "niger",                            iso: "ne", alt: ["jamhuriyar nijar", "nijar", "république du niger", "republic of niger"] },
  { name: "zambia",                           iso: "zm", alt: ["republic of zambia", /*de*/"sambia"] },
  { name: "ethiopia",                         iso: "et", alt: ["ኢትዮጵያ", "federal democratic republic of ethiopia", "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ", "ye-ītyōṗṗyā fēdēralāwī dīmōkrāsīyāwī rīpeblīk", /*de*/"äthiopien"] },
  { name: "western sahara",                   iso: "eh", alt: ["sáhara occidental", /*de*/"westsahara"] },
  { name: "chad",                             iso: "td", alt: ["republic of chad", "tchad", "république du tchad", "جمهورية تشاد ‎", "jumhūriyyat tshād", "تشاد", /*de*/"tschad"] },
  { name: "guinea",                           iso: "gn", alt: ["guinée", "republic of guinea", "république de guinée", "guinea-conakry", "guinée française", "french guinea"] },
  { name: "nigeria",                          iso: "ng", alt: ["nijeriya", "naíjíríà", "niiseriya", "federal republic of nigeria", "republik nijeriya", "njíkötá óchíchìiwù naíjíríà", "republik federaal bu niiseriya", "àpapọ̀ olómìnira ilẹ̀ nàìjíríà", "jam-huriyar tarayiar nijeriya"] },
  { name: "tunisia",                          iso: "tn", alt: ["تونس‎", "الجمهورية التونسية", "tunisian republic", /*de*/"tunesien"] },
  { name: "namibia",                          iso: "na", alt: ["republic of namibia", "republiek van namibië", "republik namibia", "namibië"] },
  { name: "south africa",                     iso: "za", alt: ["suid-afrika", "republic of south africa","republiek van suid-afrika", "iriphabliki yesewula afrika", "iriphabliki yomzantsi afrika", "iriphabhuliki yaseningizimu afrika", "iriphabhulikhi yeningizimu afrika", "repabliki ya afrika-borwa", "rephaboliki ya afrika borwa", "rephaboliki ya aforika borwa", "riphabliki ra afrika dzonga", "riphabuḽiki ya afurika tshipembe", /*de*/"südafrika"] },
  { name: "egypt",                            iso: "eg", alt: ["مصر‎", "مِصْر", "مَصْر", "Ⲭⲏⲙⲓ", "𓆎𓅓𓏏𓊖", "arab republic of egypt", "جمهورية مصر العربية", /*de*/"ägypten"] },
  { name: "tanzania",                         iso: "tz", alt: ["united republic of tanzania", /*de*/"tansania"] },
  { name: "equatorial guinea",                iso: "gq", alt: ["guinea ecuatorial", "guinée équatoriale", "guiné equatorial", "república de guinea ecuatorial", "république de guinée équatoriale", "república da guiné equatorial", /*de*/"äquatorialguinea"] },
  { name: "lesotho",                          iso: "ls", alt: ["kingdom of lesotho", "muso oa lesotho"] },
  { name: "burundi",                          iso: "bi", alt: ["republic of burundi", "republika y'u burundi", "république du burundi"] },
  { name: "djibouti",                         iso: "dj", alt: ["jibuti", "جيبوتي", "jabuuti", "republic of djibouti", "jumhūriyyat jībūtī", "jamhuuriyadda jabuuti", "république de djibouti", "gabuutih ummuuno", /*de*/"dschibuti"] },
  { name: "congo",                            iso: "cg", alt: ["republic of congo", /*de*/"republik kongo", /*de*/"kongo"] },
  { name: "rwanda",                           iso: "rw", alt: ["republic of rwanda", "repubulika y'u rwanda", "république du rwanda", /*de*/"ruanda"] },
  { name: "senegal",                          iso: "sn", alt: ["sénégal", "senegaal", "republic of senegal", "république du sénégal", "réewum senegaal"] },
  { name: "togo",                             iso: "tg", alt: ["the togolese republic", "république togolaise"] },
  { name: "gabon",                            iso: "ga", alt: ["gabonese republic", "république gabonaise", /*de*/"gabun"] },
  { name: "malawi",                           iso: "mw", alt: ["nyasaland", "republic of malawi", "republic of malaŵi", "chalo cha malawi", "dziko la malaŵi"] },
  { name: "morocco",                          iso: "ma", alt: ["kingdom of morocco", "amerruk", "murakuc", /*de*/"marokko"] },
  { name: "liberia",                          iso: "lr", alt: ["republic of liberia"] },
  { name: "central african republic",         iso: "cf", alt: ["car", "centrafrique", "république centrafricaine", "ködörösêse tî bêafrîka", /*de*/"zentralafrikanische republik"] },
  { name: "zimbabwe",                         iso: "zw", alt: ["republic of zimbabwe", "southern rhodesia", "republic of rhodesia", "zimbabwe rhodesia", "simbabwe"] },
  { name: "benin",                            iso: "bj", alt: ["republic of benin", "bénin", "république du bénin", "orílẹ̀-èdè olómìnira ilẹ̀ benin"] },
  { name: "eritrea",                          iso: "er", alt: ["ኤርትራ", "إرتريا", "state of eritrea", "ሃገረ ኤርትራ", "hagere ertra", "دولة إرتريا", "dawlat iritrīya"] },
  { name: "swaziland",                        iso: "sz", alt: ["ngwane", "kingdom of swaziland", "umbuso weswatini", /*de*/"swasiland"] },
  { name: "gambia",                           iso: "gm", alt: ["the gambia", "the republic of the gambia"] },
  { name: "cape verde",                       iso: "cv", alt: ["cabo verde", "republic of cape verde", "república de cabo verde", /*de*/"kap verde"] },
  { name: "comoros",                          iso: "km", alt: ["جزر القمر", "union des comores", "union of the comoros", "الاتّحاد القمريّ", "al-ittiḥād al-qamariyy", /*de*/"komoren"] },
  { name: "mauritius",                        iso: "mu", alt: ["maurice", "moris", "republic of mauritius", "republik moris", "république de maurice"] },
  { name: "sao tome and principe",            iso: "st", alt: ["são tomé and príncipe", "democratic republic of são tomé and príncipe", "democratic republic of sao tome and principe"] },
  { name: "seychelles",                       iso: "sc", alt: ["republic of seychelles", "repiblik sesel", "sesel", "république des seychelles", /*de*/"seychellen"] }
];

function close_guess_dialog(countrycode) {
  var manip = document.getElementById("manip");
  if(!manip) {
    alert("manip not found");
  }
  else if(manip.firstChild) {
    manip.removeChild(manip.firstChild);
  }

  if(!countrycode || countrycode == '') {
    return;
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
          if(!answers[countries[i].iso]) {
            break;
          }
        }
        if(i == countries.length) { // start again by 0
          next(event);
        }
        giveguess(event, countries[i].iso);
        return;
      }
    }
  }
  else {
    for(var i = 0; i < countries.length; ++i) {
      if(!answers[countries[i].iso]) {
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
  form.setAttribute("onkeypress", "submit_guess_key(event,'" + countrycode + "')");
  form.setAttribute("onsubmit", "return false;");
  div.appendChild(form);
  // form {

  var label = document.createElementNS(xhtmluri, "label");
  label.setAttribute("for", "countryname_input");
  label.appendChild(document.createTextNode("What is the name of the selected country?"));
  form.appendChild(label);

  form.appendChild(document.createElementNS(xhtmluri, "br"));

  var input = document.createElementNS(xhtmluri, "input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "countryname_input");
  input.setAttribute("id", "countryname_input");
  input.setAttribute("class", "inp");
  input.setAttribute("size", "42");
  input.setAttribute("autofocus", "autofocus"); // html5
  input.setAttribute("placeholder", "country name"); // html5
  if(answers[countrycode]) {
    input.setAttribute("value", answers[countrycode]);
  }
  form.appendChild(input);

  form.appendChild(document.createElementNS(xhtmluri, "br"));

  var submit = document.createElementNS(xhtmluri, "input");
  submit.setAttribute("type", "button");
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
  if(guess.value === null || guess.value == '') {
    delete answers[countrycode];
  }
  else {
    answers[countrycode] = guess.value;
    set_style(countrycode, "fill: Lavender;");
  }
}

function submit_guess_key(event, countrycode) {
  if(event.keyCode == 13) {
    submit_guess(countrycode);
  }
}

function check_guess(guess_, country) {
  var guess = guess_.toLocaleLowerCase();
  if(guess == country.name) {
    return true;
  }
  for(var i = 0; i < country.alt.length; ++i) {
    if(guess == country.alt[i]) {
      return true;
    }
  }
  return false;
}

function get_country(countrycode) {
  // TODO slow maybe use assoc array
  for(var i = 0; i < countries.length; ++i) {
    if(countries[i].iso == countrycode) {
      return countries[i];
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
    if(answers[oldcountry.iso]) {
      if(check_guess(answers[oldcountry.iso], oldcountry)) {
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
  if(event && event.clientX) {
    div.setAttribute("style", 'position:absolute; left:' + event.clientX + 'px; top: ' + event.clientY + 'px;');
  }
  div.setAttribute("id", "solution_box");
  
  var country = get_country(countrycode);
  
  var text = "This country is named '" + country.name + "'.";
  if(country.alt.length > 0) {
    text += " (Alternative names and spellings are: ";
    var i = 0;
    for(; i < country.alt.length - 1; ++i) {
      text += "'" + country.alt[i] + "', ";
    }
    text += "'" + country.alt[i] + "')";
  }

  div.appendChild(document.createTextNode(text));
  if(answers[country.iso]) {
    var sol = document.createElementNS(xhtmluri, "span");
    if(check_guess(answers[country.iso], country)) {
      sol.setAttribute("class", "correct");
      sol.appendChild(document.createTextNode("Your answer was correct!"));
    }
    else {
      sol.setAttribute("class", "wrong");
      sol.appendChild(document.createTextNode("Your answer '" + answers[country.iso] + "' was wrong!"));
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

function number_of_answers() {
  var len = 0;
  for(var i in answers) {
    if(answers.hasOwnProperty(i)) {
      ++len;
    }
  }
  return len;
}

function check() {
  if(result_mode) {
    return;
  }

  close_guess_dialog(last_guess_country);

  if(number_of_answers() === 0) {
    var manip = document.getElementById("manip");
    if(!manip) {
      alert("manip not found");
    }
    var div = document.createElementNS(xhtmluri, "div");
    div.setAttribute("id", "solution_box");

    var p = document.createElementNS(xhtmluri, "p");
    p.setAttribute("class", "wrong");
    p.appendChild(document.createTextNode("you should at least try to guess one country name!"));
    div.appendChild(p);

    manip.appendChild(div);
    return;
  }

  result_mode = true;

  var correct = 0;
  var wrong = 0;

  for(var i = 0; i < countries.length; ++i) {
    if(answers[countries[i].iso]) {
      if(check_guess(answers[countries[i].iso], countries[i])) {
        set_style(countries[i].iso, "fill: Green;");
        ++correct;
      }
      else {
        set_style(countries[i].iso, "fill: Red;");
        ++wrong;
      }
    }
    else {
      set_style(countries[i].iso, "fill: Tomato;");
    }
  }

  var text = document.createElementNS(xhtmluri, "p");
  text.appendChild(document.createTextNode("You guessed "));

  var correct_html = document.createElementNS(xhtmluri, "span");
  correct_html.setAttribute("class", "correct");
  correct_html.appendChild(document.createTextNode("" + correct + " " + (correct > 1 ? "countries" : "country") +
                                                   " (" + Math.round(correct/countries.length*100) + "%) correct"));
  text.appendChild(correct_html);
  text.appendChild(document.createTextNode(" and "));
  var wrong_html = document.createElementNS(xhtmluri, "span");
  wrong_html.setAttribute("class", "wrong");
  wrong_html.appendChild(document.createTextNode("" + wrong + " " + (wrong > 1 ? "countries" : "country") +
                                                 " (" + Math.round(wrong/countries.length*100) + "%) wrong"));
  text.appendChild(wrong_html);
  text.appendChild(document.createTextNode(" and "));
  var missing = (countries.length - correct - wrong);
  var missing_html = document.createElementNS(xhtmluri, "span");
  missing_html.setAttribute("class", "missing");
  missing_html.appendChild(document.createTextNode("failed to provide a guess for " + missing + " " +
                                                   (missing > 1 ? "countries" : "country") +
                                                   " (" + Math.round(missing/countries.length*100) + "%)"));
  text.appendChild(missing_html);
  text.appendChild(document.createTextNode(" out of " + countries.length + " countries. (percentages are rounded)"));

  var form = document.createElementNS(xhtmluri, "form");
  var restart = document.createElementNS(xhtmluri, "input");
  restart.setAttribute("type", "button");
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

  answers = {};

  close_guess_dialog(last_guess_country);
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
