/* Sum

function sum(numberone, numbertwo) {
    return numberone + numbertwo;
} */

/* Log Quote

function brendanEichQuote() {
    console.log('Always bet on JavaScript.')
}

brendanEichQuote()
// return value is undefined since there is no return statement.

*/

/* Cite the Author
function cite(author, quote) {
    console.log(`${author} said: "${quote}"`)
}

cite('Brendan Eich', 'Always bet on JavaScript.'); */

/* Squared Number

function squaredNumber(num) {
    return num * num;
}

squaredNumber(3); */

/* Display Division

If you invoke the function properly, with parentheses, it logs:

3 / 1 = 3
6 / 2 = 3
9 / 3 = 3 [...] */

/* Three-way comparison

function compareByLength(string1, string2) {
    if (string1.length === string2.length) {
        return 0
    } else if (string1.length > string2.length) {
        return 1
    } else {return -1}
} */

/* Transformation

console.log('Captain Ruby'.replace(/Ruby/, "JavaScript")); */

// Internationalization 1

function greet(language) {
    switch (language) {
        case 'en':
          return 'Hi!';
          break;
        case 'fr':
          return 'Salut!';
          break;
        case 'pt':
          return 'Olá!';
          break;
        case 'de':
          return 'Hallo!';
          break;
    }
}
/*
greet('en')
greet('fr') */

// Locale Part 1

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

//extractLanguage('en_US.UTF-8');
//extractLanguage('en_GB.UTF-8');
//extractLanguage('ko_KR.UTF-16'); 

/* also

function extractLanguage(locale) {
  console.log(locale.split("_")[0]
} */

// Locale Part 2

function extractRegion(locale) {
  return locale.match(/[A-Za-z]+/g)[1];
}
//console.log(extractRegion('en_US.UTF-8'));
//console.log(extractRegion('en_GB.UTF-8'));
//console.log(extractRegion('ko_KR.UTF-16'));

/* Internationalization 2

function localGreet(locale) {
  let language = locale.slice(0, 2);
  console.log(language)
  if (language === "en") {
    let enRegion = locale.match(/[A-Za-z]+/g)[1];
    switch (enRegion) {
      case 'US':
        return 'Hey!';
        break;
      case 'GB':
        return 'Hello!';
        break;
      case 'AU':
        return 'Howdy!';
        break;
    } 
  }
  else switch (language) {
    case 'fr':
      return 'Salut!';
      break;
    case 'pt':
      return 'Olá!';
      break;
    case 'de':
      return 'Hallo!';
      break;
  }

} */

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);
  console.log(language, region);
  switch (region) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'Howdy!';
    default:
      return greet(language)
  }

}


console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));
console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8')); 