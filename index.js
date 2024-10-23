//NOTE: EVERY FUNCTION THAT HIDES/DISPLAYS BEGINS WITH SETTING FONT-SIZE TO MEDIUM 
//      THIS IS BECAUSE LAST FUNCTION INCREASES FONT SIZE IF EVERYTHING ELSE IS GONE, BUT IF IT STAYS IT WILL MESS UP
//          HOW OTHER INFORMATION IS DISPLAYED, SO IT MUST BE RESET

// we want the default display of showing content to be true, if customer wants to change it they can after

let showCalories = true;
console.log ("variable showCalories starts off as being " + showCalories);

let showIngredients = true;
console.log("variable showAllIngredients starts off as being " + showIngredients);

let showImages = true;
console.log("The variable showImages starts off as being " + showImages);

let showAllContent = true;
console.log("variable showAllContent starts off as being " + showAllContent);





// create the function that will find a random sample AND alert the customer with a code to use at the desk for it
const randomSample = () => {
    // we want to select the all p tags that belong to classes "wrapper" and "chocolateBox"
    //      we then want to change ALL of these (no filterting) p tags to have the default background color
    //      this is done to "reset" the look of all cards when the function is called upon, or else it wouldn't change back
    $(".wrapper .chocolateBox").css("background-color", "#FFFDD0");
    
    // point is to get a random sample, so a good first step is to generate a random number between 0 and 10
    // we want to start at 0 because it's index based. make sure to log the result to know we got a valid output
    // remember that even though 0-9 will cover all 10 items, we need 10 because rng tecnically goes up to 9.99 NOT 10
    let randomIndex = Math.floor(Math.random() * 10);
    console.log(`The random index generated between 0 and 9 is: ${randomIndex}`);

    // now we want to filter our results, so take the p tags we want and narrow the scope down
    //      narrow it down to all tags belonging to specified classes that have index of same value as randomIndex
    //      once we filter for what we want, change the css so that background-color is yellow instead of peachpuff
    $(".wrapper .chocolateBox:eq(" + randomIndex + ")").css("background-color", "#F8D210");

    // I noticed that when alerting the customer the box would not highlight until the box was dismissed
    //      making the last part of the function another function that is called upon did not do anything, but I kept it
    $(document).ready(alertCustomer());
}

const alertCustomer = () => {
    // this is the final part of the function where we want to create another random number and alert customer
    // first let's create a number between 0 and 500 as directed
    // we WOULD have to make sure the highest number is 51, but we add 1 to whatever the rng creates
    //      this way even though the highest it can create is 49.99, we can still get up to 59.99 (rounded down to 50) because we add 1
    let randomTicketNum = 1 + Math.floor(Math.random() * 50);
    console.log(`The random ticket number generated between 1 and 50 is: ${randomTicketNum}`)
    //now we alert the customer of their ticket number to give to the counter
    alert(`Your ticket number is ${randomTicketNum}, give it to a cashier for your free sample!`)
}

// create function that will toggle on and off calorie information. the boolean showCalories started off as true
// When we press button if showCalories is true, we will switch it to false and hide all calorie content
// When we press button if showCalories is false, we will switch it to true and show all calorie content
// because of the action we associate with variable being true or false, we know if its on or off
const toggleCalories = () => {
    $(".chocolateBox .chocolateName").css("font-size", "medium");
    if (showCalories) {
        showCalories = !showCalories
        $("p.calorieCount").hide();
        console.log("variable showCalories is now " + showCalories)
    }
    
    else if (!showCalories){
        showCalories = true
        $("p.calorieCount").show();
        console.log("variable showCalories is now " + showCalories)
    }
}

const toggleIngredients = () => {
    $(".chocolateBox .chocolateName").css("font-size", "medium");
    if (showIngredients) {
        showIngredients = !showIngredients
        $("p.ingredients").hide();
        console.log("variable showIngredients is now " + showIngredients)
    }
    
    else if (!showIngredients){
        showIngredients = true
        $("p.ingredients").show();
        console.log("variable showIngredients is now " + showIngredients)
    }
}

const toggleImages = () => {
$(".chocolateBox .chocolateName").css("font-size", "medium");
    if (showImages) {
        showImages = !showImages
        $("img").hide();
        console.log("variable showImages is now " + showImages)
    }
    
    else if (!showImages){
        showImages = true
        $("img").show();
        console.log("variable showImages is now " + showImages)
    }
}


// Not sure exactly what is supposed to be toggled off, so I am assuming it is supposed to be everything except the name
//  to do this, I want to hide/show all p tags with the exception of if the class is named "chocolateName" as well as all images
const toggleAllContent = () => {
    $(".chocolateBox .chocolateName").css("font-size", "medium");
    // These two if statements are made so that the toggle ALL button doesn't have to be pressed twice if everything is already toggled off
    
    //I TESTED IT AND IT SEEMED TO WORK FINE BUT IF CODE EVER HAS ISSUES REMOVE THESE TWO IF STATEMENTS
    
    if (showCalories && showIngredients && showImages) {
        showAllContent = true
    }
    if (!showCalories && !showIngredients && !showImages) {
        showAllContent = false
    }

    
    if (showAllContent) {
        showAllContent = !showAllContent
        $(".chocolateBox p:not(.chocolateName), .imageContainer img").hide();
        console.log("variable showAllContent is now " + showAllContent);
        // if we are toggling everything off, let's set booleans to false so we don't have to click it twice
        showCalories = !showCalories;
        showIngredients = !showIngredients;
        showImages = !showImages;
        $(".chocolateBox .chocolateName").css("font-size", "XX-large");
    }
    
    else if (!showAllContent){
        showAllContent = true
        $(".chocolateBox p:not(.chocolateName), .imageContainer img").show();
        console.log("variable showAllContent is now " + showAllContent);
        // if we are toggling everything on, set booleans to true so we don't have to click it twice
        showCalories = true;
        showIngredients = true;
        showImages = true;
        $(".chocolateBox .chocolateName").css("font-size", "medium");
    }
}




