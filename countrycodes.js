const CountryCodes = [
  { name: "Afghanistan",                                  iso: "AF", alt: [] },
  { name: "Aland Islands ! Åland Islands",                iso: "AX", alt: [] },
  { name: "Albania",                                      iso: "AL", alt: [] },
  { name: "Algeria",                                      iso: "DZ", alt: [] },
  { name: "American Samoa",                               iso: "AS", alt: [] },
  { name: "Andorra",                                      iso: "AD", alt: [] },
  { name: "Angola",                                       iso: "AO", alt: [] },
  { name: "Anguilla",                                     iso: "AI", alt: [] },
  { name: "Antarctica",                                   iso: "AQ", alt: [] },
  { name: "Antigua and Barbuda",                          iso: "AG", alt: [] },
  { name: "Argentina",                                    iso: "AR", alt: [] },
  { name: "Armenia",                                      iso: "AM", alt: [] },
  { name: "Aruba",                                        iso: "AW", alt: [] },
  { name: "Australia",                                    iso: "AU", alt: [] },
  { name: "Austria",                                      iso: "AT", alt: [] },
  { name: "Azerbaijan",                                   iso: "AZ", alt: [] },
  { name: "Bahamas",                                      iso: "BS", alt: [] },
  { name: "Bahrain",                                      iso: "BH", alt: [] },
  { name: "Bangladesh",                                   iso: "BD", alt: [] },
  { name: "Barbados",                                     iso: "BB", alt: [] },
  { name: "Belarus",                                      iso: "BY", alt: [] },
  { name: "Belgium",                                      iso: "BE", alt: [] },
  { name: "Belize",                                       iso: "BZ", alt: [] },
  { name: "Benin",                                        iso: "BJ", alt: [] },
  { name: "Bermuda",                                      iso: "BM", alt: [] },
  { name: "Bhutan",                                       iso: "BT", alt: [] },
  { name: "Bolivia, Plurinational State of",              iso: "BO", alt: [] },
  { name: "Bosnia and Herzegovina",                       iso: "BA", alt: [] },
  { name: "Botswana",                                     iso: "BW", alt: [] },
  { name: "Bouvet Island",                                iso: "BV", alt: [] },
  { name: "Brazil",                                       iso: "BR", alt: [] },
  { name: "British Indian Ocean Territory",               iso: "IO", alt: [] },
  { name: "Brunei Darussalam",                            iso: "BN", alt: [] },
  { name: "Bulgaria",                                     iso: "BG", alt: [] },
  { name: "Burkina Faso",                                 iso: "BF", alt: [] },
  { name: "Burundi",                                      iso: "BI", alt: [] },
  { name: "Cambodia",                                     iso: "KH", alt: [] },
  { name: "Cameroon",                                     iso: "CM", alt: [] },
  { name: "Canada",                                       iso: "CA", alt: [] },
  { name: "Cape Verde",                                   iso: "CV", alt: [] },
  { name: "Cayman Islands",                               iso: "KY", alt: [] },
  { name: "Central African Republic",                     iso: "CF", alt: [] },
  { name: "Chad",                                         iso: "TD", alt: [] },
  { name: "Chile",                                        iso: "CL", alt: [] },
  { name: "China",                                        iso: "CN", alt: [] },
  { name: "Christmas Island",                             iso: "CX", alt: [] },
  { name: "Cocos (Keeling) Islands",                      iso: "CC", alt: [] },
  { name: "Colombia",                                     iso: "CO", alt: [] },
  { name: "Comoros",                                      iso: "KM", alt: [] },
  { name: "Congo",                                        iso: "CG", alt: [] },
  { name: "Congo, the Democratic Republic of the",        iso: "CD", alt: [] },
  { name: "Cook Islands",                                 iso: "CK", alt: [] },
  { name: "Costa Rica",                                   iso: "CR", alt: [] },
  { name: "Cote d'Ivoire ! Côte d'Ivoire",                iso: "CI", alt: [] },
  { name: "Croatia",                                      iso: "HR", alt: [] },
  { name: "Cuba",                                         iso: "CU", alt: [] },
  { name: "Cyprus",                                       iso: "CY", alt: [] },
  { name: "Czech Republic",                               iso: "CZ", alt: [] },
  { name: "Denmark",                                      iso: "DK", alt: [] },
  { name: "Djibouti",                                     iso: "DJ", alt: [] },
  { name: "Dominica",                                     iso: "DM", alt: [] },
  { name: "Dominican Republic",                           iso: "DO", alt: [] },
  { name: "Ecuador",                                      iso: "EC", alt: [] },
  { name: "Egypt",                                        iso: "EG", alt: [] },
  { name: "El Salvador",                                  iso: "SV", alt: [] },
  { name: "Equatorial Guinea",                            iso: "GQ", alt: [] },
  { name: "Eritrea",                                      iso: "ER", alt: [] },
  { name: "Estonia",                                      iso: "EE", alt: [] },
  { name: "Ethiopia",                                     iso: "ET", alt: [] },
  { name: "Falkland Islands (Malvinas",                   iso: "FK", alt: [] },
  { name: "Faroe Islands",                                iso: "FO", alt: [] },
  { name: "Fiji",                                         iso: "FJ", alt: [] },
  { name: "Finland",                                      iso: "FI", alt: [] },
  { name: "France",                                       iso: "FR", alt: [] },
  { name: "French Guiana",                                iso: "GF", alt: [] },
  { name: "French Polynesia",                             iso: "PF", alt: [] },
  { name: "French Southern Territories",                  iso: "TF", alt: [] },
  { name: "Gabon",                                        iso: "GA", alt: [] },
  { name: "Gambia",                                       iso: "GM", alt: [] },
  { name: "Georgia",                                      iso: "GE", alt: [] },
  { name: "Germany",                                      iso: "DE", alt: [] },
  { name: "Ghana",                                        iso: "GH", alt: [] },
  { name: "Gibraltar",                                    iso: "GI", alt: [] },
  { name: "Greece",                                       iso: "GR", alt: [] },
  { name: "Greenland",                                    iso: "GL", alt: [] },
  { name: "Grenada",                                      iso: "GD", alt: [] },
  { name: "Guadeloupe",                                   iso: "GP", alt: [] },
  { name: "Guam",                                         iso: "GU", alt: [] },
  { name: "Guatemala",                                    iso: "GT", alt: [] },
  { name: "Guernsey",                                     iso: "GG", alt: [] },
  { name: "Guinea",                                       iso: "GN", alt: [] },
  { name: "Guinea-Bissau",                                iso: "GW", alt: [] },
  { name: "Guyana",                                       iso: "GY", alt: [] },
  { name: "Haiti",                                        iso: "HT", alt: [] },
  { name: "Heard Island and McDonald Islands",            iso: "HM", alt: [] },
  { name: "Holy See (Vatican City State",                 iso: "VA", alt: [] },
  { name: "Honduras",                                     iso: "HN", alt: [] },
  { name: "Hong Kong",                                    iso: "HK", alt: [] },
  { name: "Hungary",                                      iso: "HU", alt: [] },
  { name: "Iceland",                                      iso: "IS", alt: [] },
  { name: "India",                                        iso: "IN", alt: [] },
  { name: "Indonesia",                                    iso: "ID", alt: [] },
  { name: "Iran, Islamic Republic of",                    iso: "IR", alt: [] },
  { name: "Iraq",                                         iso: "IQ", alt: [] },
  { name: "Ireland",                                      iso: "IE", alt: [] },
  { name: "Isle of Man",                                  iso: "IM", alt: [] },
  { name: "Israel",                                       iso: "IL", alt: [] },
  { name: "Italy",                                        iso: "IT", alt: [] },
  { name: "Jamaica",                                      iso: "JM", alt: [] },
  { name: "Japan",                                        iso: "JP", alt: [] },
  { name: "Jersey",                                       iso: "JE", alt: [] },
  { name: "Jordan",                                       iso: "JO", alt: [] },
  { name: "Kazakhstan",                                   iso: "KZ", alt: [] },
  { name: "Kenya",                                        iso: "KE", alt: [] },
  { name: "Kiribati",                                     iso: "KI", alt: [] },
  { name: "Korea, Democratic People's Republic of",       iso: "KP", alt: [] },
  { name: "Korea, Republic of",                           iso: "KR", alt: [] },
  { name: "Kuwait",                                       iso: "KW", alt: [] },
  { name: "Kyrgyzstan",                                   iso: "KG", alt: [] },
  { name: "Lao People's Democratic Republic",             iso: "LA", alt: [] },
  { name: "Latvia",                                       iso: "LV", alt: [] },
  { name: "Lebanon",                                      iso: "LB", alt: [] },
  { name: "Lesotho",                                      iso: "LS", alt: [] },
  { name: "Liberia",                                      iso: "LR", alt: [] },
  { name: "Libyan Arab Jamahiriya",                       iso: "LY", alt: [] },
  { name: "Liechtenstein",                                iso: "LI", alt: [] },
  { name: "Lithuania",                                    iso: "LT", alt: [] },
  { name: "Luxembourg",                                   iso: "LU", alt: [] },
  { name: "Macao",                                        iso: "MO", alt: [] },
  { name: "Macedonia, the former Yugoslav Republic of",   iso: "MK", alt: [] },
  { name: "Madagascar",                                   iso: "MG", alt: [] },
  { name: "Malawi",                                       iso: "MW", alt: [] },
  { name: "Malaysia",                                     iso: "MY", alt: [] },
  { name: "Maldives",                                     iso: "MV", alt: [] },
  { name: "Mali",                                         iso: "ML", alt: [] },
  { name: "Malta",                                        iso: "MT", alt: [] },
  { name: "Marshall Islands",                             iso: "MH", alt: [] },
  { name: "Martinique",                                   iso: "MQ", alt: [] },
  { name: "Mauritania",                                   iso: "MR", alt: [] },
  { name: "Mauritius",                                    iso: "MU", alt: [] },
  { name: "Mayotte",                                      iso: "YT", alt: [] },
  { name: "Mexico",                                       iso: "MX", alt: [] },
  { name: "Micronesia, Federated States of",              iso: "FM", alt: [] },
  { name: "Moldova, Republic of",                         iso: "MD", alt: [] },
  { name: "Monaco",                                       iso: "MC", alt: [] },
  { name: "Mongolia",                                     iso: "MN", alt: [] },
  { name: "Montenegro",                                   iso: "ME", alt: [] },
  { name: "Montserrat",                                   iso: "MS", alt: [] },
  { name: "Morocco",                                      iso: "MA", alt: [] },
  { name: "Mozambique",                                   iso: "MZ", alt: [] },
  { name: "Myanmar",                                      iso: "MM", alt: [] },
  { name: "Namibia",                                      iso: "NA", alt: [] },
  { name: "Nauru",                                        iso: "NR", alt: [] },
  { name: "Nepal",                                        iso: "NP", alt: [] },
  { name: "Netherlands",                                  iso: "NL", alt: [] },
  { name: "Netherlands Antilles",                         iso: "AN", alt: [] },
  { name: "New Caledonia",                                iso: "NC", alt: [] },
  { name: "New Zealand",                                  iso: "NZ", alt: [] },
  { name: "Nicaragua",                                    iso: "NI", alt: [] },
  { name: "Niger",                                        iso: "NE", alt: [] },
  { name: "Nigeria",                                      iso: "NG", alt: [] },
  { name: "Niue",                                         iso: "NU", alt: [] },
  { name: "Norfolk Island",                               iso: "NF", alt: [] },
  { name: "Northern Mariana Islands",                     iso: "MP", alt: [] },
  { name: "Norway",                                       iso: "NO", alt: [] },
  { name: "Oman",                                         iso: "OM", alt: [] },
  { name: "Pakistan",                                     iso: "PK", alt: [] },
  { name: "Palau",                                        iso: "PW", alt: [] },
  { name: "Palestinian Territory, Occupied",              iso: "PS", alt: [] },
  { name: "Panama",                                       iso: "PA", alt: [] },
  { name: "Papua New Guinea",                             iso: "PG", alt: [] },
  { name: "Paraguay",                                     iso: "PY", alt: [] },
  { name: "Peru",                                         iso: "PE", alt: [] },
  { name: "Philippines",                                  iso: "PH", alt: [] },
  { name: "Pitcairn",                                     iso: "PN", alt: [] },
  { name: "Poland",                                       iso: "PL", alt: [] },
  { name: "Portugal",                                     iso: "PT", alt: [] },
  { name: "Puerto Rico",                                  iso: "PR", alt: [] },
  { name: "Qatar",                                        iso: "QA", alt: [] },
  { name: "Reunion ! Réunion",                            iso: "RE", alt: [] },
  { name: "Romania",                                      iso: "RO", alt: [] },
  { name: "Russian Federation",                           iso: "RU", alt: [] },
  { name: "Rwanda",                                       iso: "RW", alt: [] },
  { name: "Saint Barthélemy",                             iso: "BL", alt: [] },
  { name: "Saint Helena, Ascension and Tristan da Cunha", iso: "SH", alt: [] },
  { name: "Saint Kitts and Nevis",                        iso: "KN", alt: [] },
  { name: "Saint Lucia",                                  iso: "LC", alt: [] },
  { name: "Saint Martin (French part",                    iso: "MF", alt: [] },
  { name: "Saint Pierre and Miquelon",                    iso: "PM", alt: [] },
  { name: "Saint Vincent and the Grenadines",             iso: "VC", alt: [] },
  { name: "Samoa",                                        iso: "WS", alt: [] },
  { name: "San Marino",                                   iso: "SM", alt: [] },
  { name: "Sao Tome and Principe",                        iso: "ST", alt: [] },
  { name: "Saudi Arabia",                                 iso: "SA", alt: [] },
  { name: "Senegal",                                      iso: "SN", alt: [] },
  { name: "Serbia",                                       iso: "RS", alt: [] },
  { name: "Seychelles",                                   iso: "SC", alt: [] },
  { name: "Sierra Leone",                                 iso: "SL", alt: [] },
  { name: "Singapore",                                    iso: "SG", alt: [] },
  { name: "Slovakia",                                     iso: "SK", alt: [] },
  { name: "Slovenia",                                     iso: "SI", alt: [] },
  { name: "Solomon Islands",                              iso: "SB", alt: [] },
  { name: "Somalia",                                      iso: "SO", alt: [] },
  { name: "South Africa",                                 iso: "ZA", alt: [] },
  { name: "South Georgia and the South Sandwich Islands", iso: "GS", alt: [] },
  { name: "Spain",                                        iso: "ES", alt: [] },
  { name: "Sri Lanka",                                    iso: "LK", alt: [] },
  { name: "Sudan",                                        iso: "SD", alt: [] },
  { name: "Suriname",                                     iso: "SR", alt: [] },
  { name: "Svalbard and Jan Mayen",                       iso: "SJ", alt: [] },
  { name: "Swaziland",                                    iso: "SZ", alt: [] },
  { name: "Sweden",                                       iso: "SE", alt: [] },
  { name: "Switzerland",                                  iso: "CH", alt: [] },
  { name: "Syrian Arab Republic",                         iso: "SY", alt: [] },
  { name: "Taiwan, Province of China",                    iso: "TW", alt: [] },
  { name: "Tajikistan",                                   iso: "TJ", alt: [] },
  { name: "Tanzania, United Republic of",                 iso: "TZ", alt: [] },
  { name: "Thailand",                                     iso: "TH", alt: [] },
  { name: "Timor-Leste",                                  iso: "TL", alt: [] },
  { name: "Togo",                                         iso: "TG", alt: [] },
  { name: "Tokelau",                                      iso: "TK", alt: [] },
  { name: "Tonga",                                        iso: "TO", alt: [] },
  { name: "Trinidad and Tobago",                          iso: "TT", alt: [] },
  { name: "Tunisia",                                      iso: "TN", alt: [] },
  { name: "Turkey",                                       iso: "TR", alt: [] },
  { name: "Turkmenistan",                                 iso: "TM", alt: [] },
  { name: "Turks and Caicos Islands",                     iso: "TC", alt: [] },
  { name: "Tuvalu",                                       iso: "TV", alt: [] },
  { name: "Uganda",                                       iso: "UG", alt: [] },
  { name: "Ukraine",                                      iso: "UA", alt: [] },
  { name: "United Arab Emirates",                         iso: "AE", alt: [] },
  { name: "United Kingdom",                               iso: "GB", alt: [] },
  { name: "United States",                                iso: "US", alt: [] },
  { name: "United States Minor Outlying Islands",         iso: "UM", alt: [] },
  { name: "Uruguay",                                      iso: "UY", alt: [] },
  { name: "Uzbekistan",                                   iso: "UZ", alt: [] },
  { name: "Vanuatu",                                      iso: "VU", alt: [] },
  { name: "Venezuela, Bolivarian Republic of",            iso: "VE", alt: [] },
  { name: "Viet Nam",                                     iso: "VN", alt: [] },
  { name: "Virgin Islands, British",                      iso: "VG", alt: [] },
  { name: "Virgin Islands, U.S",                          iso: "VI", alt: [] },
  { name: "Wallis and Futuna",                            iso: "WF", alt: [] },
  { name: "Western Sahara",                               iso: "EH", alt: [] },
  { name: "Yemen",                                        iso: "YE", alt: [] },
  { name: "Zambia",                                       iso: "ZM", alt: [] },
  { name: "Zimbabwe",                                     iso: "ZW", alt: [] }];
