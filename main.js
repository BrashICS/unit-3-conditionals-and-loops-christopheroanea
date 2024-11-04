/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/
document.getElementById("thing").addEventListener("click", startgame)





/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function age(){
    let x = Number(prompt("How old are you"))
    if (x >= 66){
        alert("You get the senior discount")
        return x
    }
    if (x < 16){
        alert("You can't drive yet")
        return x
    }
    if (x == 44){
        alert("So is mr squirrel!")
        return x
    }
}

function user_name(){
    let name = prompt("What is your name?")
    if (name == "Mr.Squirrel"){
        alert("So you are Mr.Squirrel!")
        return name
    }
    if (name > 7){
        alert("You have a long name")
        return name
    }
}

function startgame(){
    let name = prompt("What is your name?")
    alert(`Welcome to Saint Matthew's High school ${name}`)
    let choice = prompt("Go to the (1)basement or go (2)upstairs?")
    if (choice == 1){
        basement()
        return
    }
    if (choice == 2){
        upstairs()
        return
    }
}

function basement(){
    let choice_1 = prompt("You see a ghost in the distance, do you (1)run up to it or (2)run back upstairs?")
    if (choice_1 == 1){
        alert("it was mr flynn and he shot you with a watergun..")
        alert("game over...")
    }
    if (choice_1 == 2){
        alert("Mr flynn started chasing you up the stairs and shot you with a watergun and you slipped and fell")
        alert("game over..")
    }
}

function upstairs(){
    let choice_1 = prompt("Mr brash greets you, do you say (1)Hi or (2)walk right past him?")
    if (choice_1 == 1){
        alert("Mr brash said Hi back")
        walk_past()
        return
    }
    if (choice_1 == 2){
        alert("Mr brash turns into a ghost and haunts you forever")
        let brash_1 = prompt("you run away and have a choice to go in mr flynn's class or mr ruddys. do you cleanse yourself with (1)mr flynn's water gun or take a shower in (2)mr ruddy's shower cleaner thing?")
        if (brash_1 == 1){
            brash()
            return
        }
        if (brash_1 == 2){
            ruddy()
            return
        }
    }
}

function brash(){
    let choice = prompt("you cleanse yourself with mr flynns special water gun... then you begin to see mr flynn walk into the class... do you (1)fight him or (2)hide")
    if (choice == 1){
        alert("mr flynn destroys you..")
        alert("end of game!!")
        return
    }
    if (choice == 2){
        alert("Mr flynn searches the room and doesn't find you.. you live!!!")
        return
    }
}

function ruddy(){
    let choice = prompt("you cleanse yourself in mr ruddys shower.. do you (1) walk out of the class or (2)jump out the window??")
    if (choice == 1){
        alert("mr ruddy finds you and throws a chemical flask at you")
        return
    }
    if (choice == 2){
        alert("you jump out the window and fall forever")
        return
    }
}

function walk_past(){ 
    let choice = prompt("You walk by Mr brash after greeting him and notice he begins to follow you, do you (1) run fast, or (2) ask him what he's doing?")
    if (choice == 1){
        alert("He walks into mr flynns classroom and you hit a wall and get knocked out..")
        alert("game over..")
    }
    if (choice == 2){
        alert("He says hes just going to mr flynns class and you feel awkward and pass out...")
        alert("game over..")
    }
}







