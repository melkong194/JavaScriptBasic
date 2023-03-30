console.log("1  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ HTML SELECT ------------\n");

var getId = document.getElementById("demo");
console.log(getId);

var getclass = document.getElementsByClassName("demo");
console.log(getclass);

var getTags = document.getElementsByTagName("div");
console.log(getTags);

console.log("\t ")
console.log("2  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ HTML QUERY ------------\n");
/*
querySelector("#demo")    => return 1 first element.
querySelectorAll(".demo")    => return all element.

to coercion into arry => array.from(  )
*/
var query1 = document.querySelector("#demo");
console.log(query1);

var query_all = document.querySelectorAll(".demo");
console.log(query_all);

var query_all = Array.from(query_all);
query_all.push("123")
console.log(query_all);

var btnModal = document.querySelector("[data-toggle='modal']");
console.log(btnModal);

console.log("\t ")
console.log("3  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ HTML GET/SET ATTRIBUTES ------------\n");
var img = document.querySelector(".image");
console.log(img)
// SET
img.setAttribute("src","images\\logo.png");
img.setAttribute("alt","Logo here");
img.setAttribute("width",200);
img.setAttribute("tao_lao","tao lao");
img.setAttribute("onclick","tao_lao()");

var getData = document.querySelectorAll("[data-title]")
//GET
console.log("way 1:",img.src);//use without '-' in name
console.log("way 2:",img.getAttribute("src")); 
getData = Array.from(getData);
console.log(getData)

for(elm in getData){
    console.log(getData[elm].getAttribute("data-title"))
}

console.log("\t ")
console.log("4  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ JS EVENTS ------------\n");

var str="abc edf ae-afad sfs 1341- -2432 9029 1 14 302";
var t0 = performance.now();
str = str.split(" ");
console.log(str);
console.log(str.indexOf("1"));
str.splice(7,1,"21");
console.log(str);
var t1 = performance.now();
console.log("Time:" + (t1 - t0)*1000 + " milliseconds.");

var dropdownList = document.querySelectorAll(".dropdown");

dropdownList.forEach(function(elm,index){
    var btn = elm.querySelector(".btn");
    btn.addEventListener('click',function(events){
        // console.log(this);
        console.log(elm.classList);
        if(elm.classList.value.includes("open"))
            elm.classList.remove('open');
        else    
            elm.classList.add('open');
    })
    // console.log(btn);
})

console.log("\t ")
console.log("5  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ JS Parent/child/sibblings ------------\n");

var container = document.querySelector(".container");
console.log(container.parentElement.parentElement.querySelector("#demo"));
console.log(container.parentElement.parentElement.querySelector("#demo").nextSibling);
// console.log(container.parentElement.parentElement.querySelector("#demo").nextElementSibling);
// console.log(container.parentElement.parentElement.querySelector("#demo").previousElementSibling);
console.log(container.parentElement.parentElement.querySelector("#demo").previousSibling);

console.log("\t ")
console.log("6  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ INNER HTML/TEXT  ------------\n");
var h1 = document.querySelector("h1");
h1.innerText="abc";
console.log(h1.innerText);
h1.innerHTML = "<p>abcadsfsa</p>"
console.log(h1.innerHTML);

var select = document.querySelector("[name='year']");

for(var idx=1970; idx<=1980; idx++){
    var option = document.createElement('option');
    option.setAttribute('value', idx);
    option.innerText = idx;

    select.append(option);
}

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

var select = document.querySelector("[name='country']");

for(var idx=0; idx<countryList.length; idx++){
    var option = document.createElement('option');
    option.setAttribute('value', countryList[idx]);
    option.innerText = countryList[idx];

    select.append(option);
}

console.log("\t ")
console.log("7  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ ANIMATION  ------------\n");

var x=0;
setInterval(function(){
	//console.log(x++);
},1000) //1s
//----------------
function myMove(duration) {
	var elem = document.getElementById("animate");
	console.log(elem);
	var start = new Date().getTime();
	var pos = 0;
	var id = setInterval(frame, 5);
	var now = new Date().getTime();
	function frame() {
	  if (pos == 350) {
		var end = new Date().getTime();
		console.log(end-start)
		clearInterval(id);
	  } else {
		pos++;
		elem.style.top = pos + 'px';
		elem.style.left = pos + 'px';
	  }
	}
  }


console.log("\t ")
console.log("8  ********************************************************************");
console.log("***********************************************************************");
console.log("------------ EVENT LISTENER ------------\n");

document.querySelector(".button").addEventListener('click', function(event){
	// console.log(event);
	// console.log(event.target, this);
	var duration = this.getAttribute('time-duration');
	console.log(duration)
})

document.querySelector(".box").addEventListener('click', function(event){ 
	console.log('click', this);
})
document.querySelector(".box").addEventListener('mousemove', function(event){ 
	console.log('mousemove', this);
})
document.querySelector(".box").addEventListener('mouseover', function(event){ 
	console.log('mouseover', this);
})
document.querySelector(".box").addEventListener('mouseout', function(event){ 
	console.log('mouseout', this);
})

//key up, down, press
//keypress only 1 time when holding key, keydown many times when holding key
document.querySelector(".key_event").addEventListener('keyup', function(event){ 
	console.log('keyup', this);
})
document.querySelector(".key_event").addEventListener('keydown', function(event){ 
	console.log('keydown', this);
})
document.querySelector(".key_event").addEventListener('keypress', function(event){ 
	console.log('keypress', this);
})
document.querySelector(".key_event").addEventListener('blur', function(event){ 
	console.log('blur', this);
})