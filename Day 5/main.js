import { webTechs } from "./webtech.js";
import { countries } from "./contries.js";

console.log(webTechs);
console.log(countries);

let check = countries.indexOf("Ethiopia");

if(check === -1)
{
    countries.push("Ethiopia");
    console.log(countries);
}
else
{
    console.log(countries[4].toUpperCase());
}

let check2 = webTechs.indexOf("Sass");

if(check2===-1)
{
    webTechs.push("Sass");
    console.log(webTechs);
}
else
{
    console.log("Sass is a preprocesses");
}

console.log(countries.slice(0,10));

let firstArray = countries.splice(0,Math.ceil((countries.length/2)));
console.log(firstArray);
console.log(countries);