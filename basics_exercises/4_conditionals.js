/* Truthy vs Falsy

false, null, undefined, 0, "", NaN

somehow, I forgot false the first time around */

/* Yes? No? Part 1

let randomNumber = Math.round(Math.random());
if (randomNumber) {
  console.log('Yes!')
} else console.log("No.") */

/* Yes? No? Part 2 (ternary operator)

let randomNumber = Math.round(Math.random());
randomNumber ? console.log('Yes!') : console.log("No."); */

/* Check the Weather, Part 1

let weather = "cloudy";

if (weather === "rainy") {
  console.log("Grab your umbrella.");
} else if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else {
  console.log("Let's stay inside.");
} */

/* Switch

neigh
tweet tweet
*cricket*

After a successful match in a switch statement, all remaining statements will be
executed if there is no break */

// Check the Weather, Part 2


/* let weather = "cloudy";

switch(weather) {
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  default:
    console.log("Let's stay inside.");
} */

/* Logical Conditions 1
Code will evaluate to "Yes!" because the conditional is asking, "is this OR expression true?",
and the OR expression is true, because one of its branches is true. */

/* Logical Conditions 2
Code will evaluate to "No..." because the conditional is asking, "is this AND expression true?",
and the AND expression is false, because one of its branches is false. */

/* Logical Conditions 3
The ternary statement will run the first branch if the initial value is true, the second if it is
false. In this false !sale is false, so the second branch runs. */

/* Are we moving?
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
// breaking down the code into its values...
let isMoving = true && (false || true);
let isMoving = true && true;
let isMoving = true

console.log(isMoving);
=returns true

BONUS: without the parenthese, the AND would be evaluated prior to the OR (higher operator precedence),
which would make the whole return value false

*/
