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


let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`


function menu(){
    let x = prompt(message)
    if (x == 1){
        let y = prompt("what difficulty would you like? (1)Easy (2)Medium or (3)Hard?")
        if (y == 1){
            alert("you selected the easy route..")
            return
        }
        else if (y == 2){
            alert("you selected what most people select.")
            return
        }
        else if (y == 3){
            alert("you're brave")
            return
        }

    }
    else if (x == 2){
        alert("you selected options")
        return
    }
    else if (x == 3){
        alert("no new dlc at this time dude")
        return
    }
    else if (x == 4){
        alert("everything is up to date")
        return
    }
    else if (x == 5){
        alert("bye")
    }
    return
}

function greeting(){
    let hour = Number(prompt("what time in hours is it for you in military standard right now?"))
    if (hour <= 11){
        alert("Good morning!")
        return
    }
    else if ((hour >= 12) || (hour <= 17)){
        alert("good afternoon")
        return
    }
    else if ((hour >= 18) || (hour <= 23)){
        alert("goo evening")
        return
    }
}

function two_digit(){
    let x = Number(Math.random()*20)
    if (x == 0){
        console.log(x)
          
    }
    if ((x == 12) || (x == 14) || (x == 16) || (x == 18) || (x == 20)){
        alert("even")
    }
}

document.getElementById("sans").addEventListener("click", which_day)

function which_day(){
    let n = Number(prompt("What day is it?"))
    if (n == 1){
        alert("It is Monday")
    }
    else if(n == 2){
        alert("It is Tuesday")
    }
    else if (n == 3){
        alert("It is Wednesday")
    }
    else if (n == 4){
        alert("It is Thursday")
    }
    else if (n == 5){
        alert("It is Friday")
    }
    else if (n == 6){
        alert("It is Saturday")
    }
    else if (n == 7){
        alert("It is Sunday!")
    }
    else {
        alert("That's not a day...")
    }
}

document.getElementById("random").addEventListener("click", random_number)

function random_number(){
    let x = Number(Math.round((Math.random()) * 10))
    let y = Number(prompt("what number shall you choose?"))
    if (x == y){
        alert("you guessed the number!")
    }
    else if (x > y){
        let z = x - y
        alert(`you were off by ${z}...`)
        alert(`the number was actually ${x}`)
    }
    else if (x < y){
        let z = y - x
        alert(`you were off by ${z}...`)
        alert(`the number was actually ${x}`)
    }
    else if (y > 10){
        alert("you were out of the range of 10... not even close👍")
    }
    else {
        alert("dude what are you typing.. error error error 👍👍👍👍")
    }
}

document.body.addEventListener("keydown", () => {
    console.log("you pressed down")
})

let d = document.getElementById("thing1")
d.style.right = -700 + "px"
d.style.top = -300 + "px"


function moveup() {
    let d = document.getElementById('thing1');
    d.style.position = "relative";
    d.style.top = parseInt(d.style.top) - 10 + 'px';
}

function moveleft(){
    let d = document.getElementById("thing1")
    d.style.position = "relative";
    d.style.right = parseInt(d.style.right) + 10 + 'px';
}

function moveright(){
    let d = document.getElementById("thing1")
    d.style.position = "relative";
    d.style.right = parseInt(d.style.right) - 10 + 'px';
}

function movedown(){
    let d = document.getElementById("thing1")
    d.style.position = "relative";
    d.style.top = parseInt(d.style.top) + 10 + 'px';
}


document.body.addEventListener("keydown", move)

function move(event){
    let x = event.key; 
    if (x == "w"){
        moveup()
        console.log("up")
    }
    if (x == "d"){
        moveright()
        console.log("right")
    }
    if (x == "a"){
        moveleft()
        console.log("left")
    }
    if (x == "s"){
        movedown()
        console.log("down")
    }
}

document.getElementById("sword_of_landon").addEventListener("mouseover", whatfunction)
document.getElementById("sword_of_landon").addEventListener("mouseleave", newfunction)


function whatfunction(){
    document.getElementById("textthing").textContent = `This sword gives you special powers.
    also farting in your face..
    and on greg`
}

function newfunction(){
    console.log("landon")
    document.getElementById("textthing").textContent = ""
}






