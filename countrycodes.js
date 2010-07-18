const CountryCodes = [
  { name: "afghanistan",                                  iso: "af", alt: [] },
  { name: "aland islands",                                iso: "ax", alt: ["åland islands"] },
  { name: "albania",                                      iso: "al", alt: [] },
  { name: "algeria",                                      iso: "dz", alt: [] },
  { name: "american samoa",                               iso: "as", alt: [] },
  { name: "andorra",                                      iso: "ad", alt: [] },
  { name: "angola",                                       iso: "ao", alt: [] },
  { name: "anguilla",                                     iso: "ai", alt: [] },
  { name: "antarctica",                                   iso: "aq", alt: [] },
  { name: "antigua and barbuda",                          iso: "ag", alt: [] },
  { name: "argentina",                                    iso: "ar", alt: [] },
  { name: "armenia",                                      iso: "am", alt: [] },
  { name: "aruba",                                        iso: "aw", alt: [] },
  { name: "australia",                                    iso: "au", alt: [] },
  { name: "austria",                                      iso: "at", alt: [] },
  { name: "azerbaijan",                                   iso: "az", alt: [] },
  { name: "bahamas",                                      iso: "bs", alt: [] },
  { name: "bahrain",                                      iso: "bh", alt: [] },
  { name: "bangladesh",                                   iso: "bd", alt: [] },
  { name: "barbados",                                     iso: "bb", alt: [] },
  { name: "belarus",                                      iso: "by", alt: [] },
  { name: "belgium",                                      iso: "be", alt: [] },
  { name: "belize",                                       iso: "bz", alt: [] },
  { name: "benin",                                        iso: "bj", alt: [] },
  { name: "bermuda",                                      iso: "bm", alt: [] },
  { name: "bhutan",                                       iso: "bt", alt: [] },
  { name: "bolivia",                                      iso: "bo", alt: ["bolivia, plurinational state of"] },
  { name: "bosnia and herzegovina",                       iso: "ba", alt: [] },
  { name: "botswana",                                     iso: "bw", alt: [] },
  { name: "bouvet island",                                iso: "bv", alt: [] },
  { name: "brazil",                                       iso: "br", alt: [] },
  { name: "british indian ocean territory",               iso: "io", alt: [] },
  { name: "brunei darussalam",                            iso: "bn", alt: [] },
  { name: "bulgaria",                                     iso: "bg", alt: [] },
  { name: "burkina faso",                                 iso: "bf", alt: [] },
  { name: "burundi",                                      iso: "bi", alt: [] },
  { name: "cambodia",                                     iso: "kh", alt: [] },
  { name: "cameroon",                                     iso: "cm", alt: [] },
  { name: "canada",                                       iso: "ca", alt: [] },
  { name: "cape verde",                                   iso: "cv", alt: [] },
  { name: "cayman islands",                               iso: "ky", alt: [] },
  { name: "central african republic",                     iso: "cf", alt: [] },
  { name: "chad",                                         iso: "td", alt: [] },
  { name: "chile",                                        iso: "cl", alt: [] },
  { name: "china",                                        iso: "cn", alt: [] },
  { name: "christmas island",                             iso: "cx", alt: [] },
  { name: "cocos (keeling) islands",                      iso: "cc", alt: [] },
  { name: "colombia",                                     iso: "co", alt: [] },
  { name: "comoros",                                      iso: "km", alt: [] },
  { name: "congo",                                        iso: "cg", alt: [] },
  { name: "congo, the democratic republic of the",        iso: "cd", alt: [] },
  { name: "cook islands",                                 iso: "ck", alt: [] },
  { name: "costa rica",                                   iso: "cr", alt: [] },
  { name: "cote d'ivoire",                                iso: "ci", alt: ["côte d'ivoire"] },
  { name: "croatia",                                      iso: "hr", alt: [] },
  { name: "cuba",                                         iso: "cu", alt: [] },
  { name: "cyprus",                                       iso: "cy", alt: [] },
  { name: "czech republic",                               iso: "cz", alt: [] },
  { name: "denmark",                                      iso: "dk", alt: [] },
  { name: "djibouti",                                     iso: "dj", alt: [] },
  { name: "dominica",                                     iso: "dm", alt: [] },
  { name: "dominican republic",                           iso: "do", alt: [] },
  { name: "ecuador",                                      iso: "ec", alt: [] },
  { name: "egypt",                                        iso: "eg", alt: [] },
  { name: "el salvador",                                  iso: "sv", alt: [] },
  { name: "equatorial guinea",                            iso: "gq", alt: [] },
  { name: "eritrea",                                      iso: "er", alt: [] },
  { name: "estonia",                                      iso: "ee", alt: [] },
  { name: "ethiopia",                                     iso: "et", alt: [] },
  { name: "falkland islands",                             iso: "fk", alt: ["malvinas"] },
  { name: "faroe islands",                                iso: "fo", alt: [] },
  { name: "fiji",                                         iso: "fj", alt: [] },
  { name: "finland",                                      iso: "fi", alt: [] },
  { name: "france",                                       iso: "fr", alt: [] },
  { name: "french guiana",                                iso: "gf", alt: [] },
  { name: "french polynesia",                             iso: "pf", alt: [] },
  { name: "french southern territories",                  iso: "tf", alt: [] },
  { name: "gabon",                                        iso: "ga", alt: [] },
  { name: "gambia",                                       iso: "gm", alt: [] },
  { name: "georgia",                                      iso: "ge", alt: [] },
  { name: "germany",                                      iso: "de", alt: [] },
  { name: "ghana",                                        iso: "gh", alt: [] },
  { name: "gibraltar",                                    iso: "gi", alt: [] },
  { name: "greece",                                       iso: "gr", alt: [] },
  { name: "greenland",                                    iso: "gl", alt: [] },
  { name: "grenada",                                      iso: "gd", alt: [] },
  { name: "guadeloupe",                                   iso: "gp", alt: [] },
  { name: "guam",                                         iso: "gu", alt: [] },
  { name: "guatemala",                                    iso: "gt", alt: [] },
  { name: "guernsey",                                     iso: "gg", alt: [] },
  { name: "guinea",                                       iso: "gn", alt: [] },
  { name: "guinea-bissau",                                iso: "gw", alt: [] },
  { name: "guyana",                                       iso: "gy", alt: [] },
  { name: "haiti",                                        iso: "ht", alt: [] },
  { name: "heard island and mcdonald islands",            iso: "hm", alt: [] },
  { name: "vatican",                                      iso: "va", alt: ["vatican city state", "holy see"] },
  { name: "honduras",                                     iso: "hn", alt: [] },
  { name: "hong kong",                                    iso: "hk", alt: [] },
  { name: "hungary",                                      iso: "hu", alt: [] },
  { name: "iceland",                                      iso: "is", alt: [] },
  { name: "india",                                        iso: "in", alt: [] },
  { name: "indonesia",                                    iso: "id", alt: [] },
  { name: "iran",                                         iso: "ir", alt: ["iran, islamic republic of"] },
  { name: "iraq",                                         iso: "iq", alt: [] },
  { name: "ireland",                                      iso: "ie", alt: [] },
  { name: "isle of man",                                  iso: "im", alt: [] },
  { name: "israel",                                       iso: "il", alt: [] },
  { name: "italy",                                        iso: "it", alt: [] },
  { name: "jamaica",                                      iso: "jm", alt: [] },
  { name: "japan",                                        iso: "jp", alt: [] },
  { name: "jersey",                                       iso: "je", alt: [] },
  { name: "jordan",                                       iso: "jo", alt: [] },
  { name: "kazakhstan",                                   iso: "kz", alt: [] },
  { name: "kenya",                                        iso: "ke", alt: [] },
  { name: "kiribati",                                     iso: "ki", alt: [] },
  { name: "korea, democratic people's republic of",       iso: "kp", alt: [] },
  { name: "korea, republic of",                           iso: "kr", alt: [] },
  { name: "kuwait",                                       iso: "kw", alt: [] },
  { name: "kyrgyzstan",                                   iso: "kg", alt: [] },
  { name: "lao people's democratic republic",             iso: "la", alt: [] },
  { name: "latvia",                                       iso: "lv", alt: [] },
  { name: "lebanon",                                      iso: "lb", alt: [] },
  { name: "lesotho",                                      iso: "ls", alt: [] },
  { name: "liberia",                                      iso: "lr", alt: [] },
  { name: "libyan arab jamahiriya",                       iso: "ly", alt: [] },
  { name: "liechtenstein",                                iso: "li", alt: [] },
  { name: "lithuania",                                    iso: "lt", alt: [] },
  { name: "luxembourg",                                   iso: "lu", alt: [] },
  { name: "macao",                                        iso: "mo", alt: [] },
  { name: "macedonia, the former yugoslav republic of",   iso: "mk", alt: [] },
  { name: "madagascar",                                   iso: "mg", alt: [] },
  { name: "malawi",                                       iso: "mw", alt: [] },
  { name: "malaysia",                                     iso: "my", alt: [] },
  { name: "maldives",                                     iso: "mv", alt: [] },
  { name: "mali",                                         iso: "ml", alt: [] },
  { name: "malta",                                        iso: "mt", alt: [] },
  { name: "marshall islands",                             iso: "mh", alt: [] },
  { name: "martinique",                                   iso: "mq", alt: [] },
  { name: "mauritania",                                   iso: "mr", alt: [] },
  { name: "mauritius",                                    iso: "mu", alt: [] },
  { name: "mayotte",                                      iso: "yt", alt: [] },
  { name: "mexico",                                       iso: "mx", alt: [] },
  { name: "micronesia, federated states of",              iso: "fm", alt: [] },
  { name: "moldova, republic of",                         iso: "md", alt: [] },
  { name: "monaco",                                       iso: "mc", alt: [] },
  { name: "mongolia",                                     iso: "mn", alt: [] },
  { name: "montenegro",                                   iso: "me", alt: [] },
  { name: "montserrat",                                   iso: "ms", alt: [] },
  { name: "morocco",                                      iso: "ma", alt: [] },
  { name: "mozambique",                                   iso: "mz", alt: [] },
  { name: "myanmar",                                      iso: "mm", alt: [] },
  { name: "namibia",                                      iso: "na", alt: [] },
  { name: "nauru",                                        iso: "nr", alt: [] },
  { name: "nepal",                                        iso: "np", alt: [] },
  { name: "netherlands",                                  iso: "nl", alt: [] },
  { name: "netherlands antilles",                         iso: "an", alt: [] },
  { name: "new caledonia",                                iso: "nc", alt: [] },
  { name: "new zealand",                                  iso: "nz", alt: [] },
  { name: "nicaragua",                                    iso: "ni", alt: [] },
  { name: "niger",                                        iso: "ne", alt: [] },
  { name: "nigeria",                                      iso: "ng", alt: [] },
  { name: "niue",                                         iso: "nu", alt: [] },
  { name: "norfolk island",                               iso: "nf", alt: [] },
  { name: "northern mariana islands",                     iso: "mp", alt: [] },
  { name: "norway",                                       iso: "no", alt: [] },
  { name: "oman",                                         iso: "om", alt: [] },
  { name: "pakistan",                                     iso: "pk", alt: [] },
  { name: "palau",                                        iso: "pw", alt: [] },
  { name: "palestinian territory, occupied",              iso: "ps", alt: [] },
  { name: "panama",                                       iso: "pa", alt: [] },
  { name: "papua new guinea",                             iso: "pg", alt: [] },
  { name: "paraguay",                                     iso: "py", alt: [] },
  { name: "peru",                                         iso: "pe", alt: [] },
  { name: "philippines",                                  iso: "ph", alt: [] },
  { name: "pitcairn",                                     iso: "pn", alt: [] },
  { name: "poland",                                       iso: "pl", alt: [] },
  { name: "portugal",                                     iso: "pt", alt: [] },
  { name: "puerto rico",                                  iso: "pr", alt: [] },
  { name: "qatar",                                        iso: "qa", alt: [] },
  { name: "reunion",                                      iso: "re", alt: ["réunion"] },
  { name: "romania",                                      iso: "ro", alt: [] },
  { name: "russian federation",                           iso: "ru", alt: [] },
  { name: "rwanda",                                       iso: "rw", alt: [] },
  { name: "saint barthélemy",                             iso: "bl", alt: [] },
  { name: "saint helena, ascension and tristan da cunha", iso: "sh", alt: [] },
  { name: "saint kitts and nevis",                        iso: "kn", alt: [] },
  { name: "saint lucia",                                  iso: "lc", alt: [] },
  { name: "saint martin (french part",                    iso: "mf", alt: [] },
  { name: "saint pierre and miquelon",                    iso: "pm", alt: [] },
  { name: "saint vincent and the grenadines",             iso: "vc", alt: [] },
  { name: "samoa",                                        iso: "ws", alt: [] },
  { name: "san marino",                                   iso: "sm", alt: [] },
  { name: "sao tome and principe",                        iso: "st", alt: [] },
  { name: "saudi arabia",                                 iso: "sa", alt: [] },
  { name: "senegal",                                      iso: "sn", alt: [] },
  { name: "serbia",                                       iso: "rs", alt: [] },
  { name: "seychelles",                                   iso: "sc", alt: [] },
  { name: "sierra leone",                                 iso: "sl", alt: [] },
  { name: "singapore",                                    iso: "sg", alt: [] },
  { name: "slovakia",                                     iso: "sk", alt: [] },
  { name: "slovenia",                                     iso: "si", alt: [] },
  { name: "solomon islands",                              iso: "sb", alt: [] },
  { name: "somalia",                                      iso: "so", alt: [] },
  { name: "south africa",                                 iso: "za", alt: [] },
  { name: "south georgia and the south sandwich islands", iso: "gs", alt: [] },
  { name: "spain",                                        iso: "es", alt: [] },
  { name: "sri lanka",                                    iso: "lk", alt: [] },
  { name: "sudan",                                        iso: "sd", alt: [] },
  { name: "suriname",                                     iso: "sr", alt: [] },
  { name: "svalbard and jan mayen",                       iso: "sj", alt: [] },
  { name: "swaziland",                                    iso: "sz", alt: [] },
  { name: "sweden",                                       iso: "se", alt: [] },
  { name: "switzerland",                                  iso: "ch", alt: [] },
  { name: "syrian arab republic",                         iso: "sy", alt: [] },
  { name: "taiwan, province of china",                    iso: "tw", alt: [] },
  { name: "tajikistan",                                   iso: "tj", alt: [] },
  { name: "tanzania, united republic of",                 iso: "tz", alt: [] },
  { name: "thailand",                                     iso: "th", alt: [] },
  { name: "timor-leste",                                  iso: "tl", alt: [] },
  { name: "togo",                                         iso: "tg", alt: [] },
  { name: "tokelau",                                      iso: "tk", alt: [] },
  { name: "tonga",                                        iso: "to", alt: [] },
  { name: "trinidad and tobago",                          iso: "tt", alt: [] },
  { name: "tunisia",                                      iso: "tn", alt: [] },
  { name: "turkey",                                       iso: "tr", alt: [] },
  { name: "turkmenistan",                                 iso: "tm", alt: [] },
  { name: "turks and caicos islands",                     iso: "tc", alt: [] },
  { name: "tuvalu",                                       iso: "tv", alt: [] },
  { name: "uganda",                                       iso: "ug", alt: [] },
  { name: "ukraine",                                      iso: "ua", alt: [] },
  { name: "united arab emirates",                         iso: "ae", alt: [] },
  { name: "united kingdom",                               iso: "gb", alt: [] },
  { name: "united states",                                iso: "us", alt: [] },
  { name: "united states minor outlying islands",         iso: "um", alt: [] },
  { name: "uruguay",                                      iso: "uy", alt: [] },
  { name: "uzbekistan",                                   iso: "uz", alt: [] },
  { name: "vanuatu",                                      iso: "vu", alt: [] },
  { name: "venezuela, bolivarian republic of",            iso: "ve", alt: [] },
  { name: "viet nam",                                     iso: "vn", alt: [] },
  { name: "virgin islands, british",                      iso: "vg", alt: [] },
  { name: "virgin islands, u.s",                          iso: "vi", alt: [] },
  { name: "wallis and futuna",                            iso: "wf", alt: [] },
  { name: "western sahara",                               iso: "eh", alt: [] },
  { name: "yemen",                                        iso: "ye", alt: [] },
  { name: "zambia",                                       iso: "zm", alt: [] },
  { name: "zimbabwe",                                     iso: "zw", alt: [] }];
