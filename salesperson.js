//declare a variable which holds an array of miles travelled

//declare another flexible variable to start so that all values can be later added

const weeklyMiles = [40, 45, 39, 60]
let totalMiles = 0;

//

for (const miles of weeklyMiles) {
	totalMiles += miles;
}
const averageMiles = totalMiles / weeklyMiles.length;


// Declare a new variable to store the average miles over time

// Output the average miles and the total miles to the console

// the subsequential output occurs due to the concatenation of average and total 
//miles values 

console.log(`I average ${averageMiles} miles each week.
I have driven a total of ${totalMiles} miles.`);