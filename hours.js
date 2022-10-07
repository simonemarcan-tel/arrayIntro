/* declare a variable which holds an array of hours. 
declare another two variables which contain "grumpy" and 
"happy" hours. */

const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

/* create a for loop which reviews certain conditions. ie,
if an item in the sequence "hours" is less than 7, 
log "I was grumpy", if else, log "happy"
*/

for (const hour of hours) {
    if (hour < 7) {
        grumpyHours.push(hour);
    }
    else {
        happyHours.push(hour);
    }
}

//log findings to the console
console.log(`I was grumpy on ${grumpyHours.length} days.
I was happy on ${happyHours.length} days.`);