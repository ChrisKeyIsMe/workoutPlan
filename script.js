let random = Math.floor(Math.random() * 8);
let message1 = "";
let message2 = "";
let message3 = "";

function makeWorkout(){
switch (random) {
    case 0:
        message1 = "Let's do some squats!";
        break;
    case 1:
        message1 = "Time to do curls for the girls!";
        break;
    case 2:
        message1 = "Deadlift party!";
        break;
    case 3:
        message1 = "Build boulder shoulders!";
        break;
    case 4:
        message1 = "Bench Press Party!";
        break;
    case 5:
        message1 = "Aesthetics day!";
        break;
    case 6:
        message1 = "Go for a run!";
        break;
    case 7:
        message1 = "Rest day";
        break;
    default:
        message1 = "What workout to do today?"
        break;
}

random = Math.floor(Math.random() * 8);

switch (random) {
    case 0:
        message2 = "Drink a chocolate protein shake!";
        break;
    case 1:
        message2 = "Eat chicken breast, rice and broc";
        break;
    case 2:
        message2 = "Have a protein bar!";
        break;
    case 3:
        message2 = "Drink your GAINER SHAKE! Bulk up, bro.";
        break;
    case 4:
        message2 = "Do it the old fashioned way: eat Steak and Potatoes";
        break;
    case 5:
        message2 = "Fast feast! If it fits your macros - eat it!";
        break;
    case 6:
        message2 = "Consume Plant-based protein!";
        break;
    case 7:
        message2 = "Cheat day - eat whatever!";
        break;
    default:
        message2 = "What to eat afterwards?"
        break;
}
random = Math.floor(Math.random() * 8);

switch (random) {
    case 0:
        message3 = "Get to bed early - gains are made while you sleep!";
        break;
    case 1:
        message3 = "Plan for tomorrow - maximize your gains with SCIENCE.";
        break;
    case 2:
        message3 = "Do a mobility WOD - injury prevention = long term GAINS.";
        break;
    case 3:
        message3 = "Do some yoga - a third eye open can focus even better on GAINS.";
        break;
    case 4:
        message3 = "Time for some static stretching!";
        break;
    case 5:
        message3 = "Go for a walk - gotta stay generally active too!";
        break;
    case 6:
        message3 = "Meal prep!";
        break;
    case 7:
        message3 = "Read! Build physical and mental GAINS.";
        break;
    default:
        message3 = "Do something before bed."
        break;
}
return console.log(`In the morning, ${message1}. Afterwards, ${message2}. Finally, ${message3}`);
} 

makeWorkout();