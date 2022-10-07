//declare a constant containing an array of food ingredients 

const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

//if the ingredient is "egg", then add "biscuit" to the output, and cont. 

for (const ingredient of rawIngredients) {
        if (ingredient === "egg") {
            finishedFood.push("biscuit");
        }
        else if (ingredient ===  "beef patty") {
            finishedFood.push("burger");
        }
        else if (ingredient === "potato") {
            finishedFood.push("fries");
        }
}

//log our for loop to the console

console.log(finishedFood)