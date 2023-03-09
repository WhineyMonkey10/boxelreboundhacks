// Developed by @WhineyMonkey10
// Version: 1.0.0
// License: MIT
// Enjoy!

// User Interface, real one coming soon


// Main function
alert("Injecting Boxelrebound... (1/2)")
document.addEventListener("keyup",function(evt){
    if(evt.keyCode=="67"&&evt.altKey&&evt.ctrlKey){
        main();
    }});
alert("Injecting Boxelrebound... (2/2)")
wait(1000);
alert("🧊 Welcome to Boxelrebound Hack! Some features are still in development. 🧊\n\nPress CTRL + ALT + C to open the cheat panel. \n\n🧊 Enjoy! 🧊");
function main() {
    // Get the user's input
    var input = prompt("                                           🧊 -- Cheat Panel -- 🧊\n\nInsta Reset (1)\n\nSet permanenet speed (2)\n\nSet temporary gravity (3)\n\nSet temporary speed (4)\n\nGo back to the main menu (5)\n\nSet permanent gravity (6)\n\n🧊 More Coming Soon <3 🧊");
    // Check if the user's input is valid
    if (input == null || input == "") {
        // If the user's input is invalid, show an error
        alert("You need to enter something to hack!");
    } else {
     

        // Start the hack
        if (input == "1") {
            window.Game.retry();
        } else if (input == "2") {
            let speed = prompt("Enter the speed you want to set ");
            window.Game.speed = speed;
        } else if (input == "3") {
            let gravity = prompt("Enter the gravity you want to set (needs to be redone everytime you die) ");
            window.Game.gravityMultiplier = gravity;
        } else if (input == "4") {
            let speed = prompt("Enter the speed you want to set (needs to be redone everytime you die) ");
            window.Game.speedMultiplier = speed;
        } else if (input == "5") {
            window.Game.player.playerState = 2;
            
        } else if (input == "6") {
            let gravity = prompt("Enter the gravity you want to set ");
            window.Game.gravity = gravity;
        }

}
    }

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
