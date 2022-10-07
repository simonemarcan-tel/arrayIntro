const clay = [ "Clay", "Clay", "Clay", "Clay" ] // what needs to add to our string
const toFireInKiln = [] // this is what the for loop will be filling in

for (const mug of clay) { //the beginning of our for loop
   const fire = `${mug} coffee mug`
   toFireInKiln.push(fire);
}
/* this for loop will loop through the item "mug" out of the variable "clay". 
the variable "fire" serves to concatenate the item "mug" with our desired string. 
.push() adds this string to our original empty array, toFireInKiln.
*/
console.log(toFireInKiln)
