//declare a constant containing a long string of various mental disorders.
//these are separated by a repetitive mark. 

//use the .split() function to separate the individual words based on their marks

const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia";
const listItems = originalDisorderFormat.split("|$|");
//log to the console 
console.log(listItems); 

for (const item of listItems) {
    console.log(`<li>${item}</li>`);
}



 