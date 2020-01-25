const readline = require("readline-sync");





//variables for starting game and room
const title = `
#######                                              ######                              
#         ####    ####     ##    #####   ######      #     #   ####    ####   #    #     
#        #       #    #   #  #   #    #  #           #     #  #    #  #    #  ##  ##     
#####     ####   #       #    #  #    #  #####       ######   #    #  #    #  # ## #     
#             #  #       ######  #####   #           #   #    #    #  #    #  #    #     
#        #    #  #    #  #    #  #       #           #    #   #    #  #    #  #    #     
#######   ####    ####   #    #  #       ######      #     #   ####    ####   #    #`;
console.log(title);

//get the players name
const playerName = readline.question("What is your name? ");

//intro and room info
const intro = `\nWelcome to my Escape Room, ${playerName}. Hopefully you don't die.\n`
const theRoom = `${playerName}, you are standing in the middle of a dark room. On the
wall to your left you notice a hole, about halfway up.
In the center of the room sits a large wooden box.\n`

//players stats
let isAlive = true;
let hasKey = false;

//welcoming and starting game
console.log(intro);
console.log(theRoom);

//game loop
while(isAlive == true){
    const menuId = readline.keyIn(`Press the number keys on your keyboard to make a decision:\n1. Put hand in hole.\n2. Find the Key.\n3. Open the door\n`, {limit: '$<1-3>', hideEchoBack: true, mask: ''});
    if(menuId == 1) {
        console.log(`Oh, no ${playerName}, it was a trap! Your arm gets stuck in the wall. Sorry, you died...`);
        isAlive = false;
    } else if(menuId == 2 && hasKey == false) {
        console.log("You found the Key inside the large wooden box.\n");
        hasKey = true;
    } else if(menuId == 2 && hasKey == true) {
        console.log("You already found the key...\n");
    } else if(menuId == 3 && hasKey == false) {
        console.log("You try to turn the door handle. It's locked.\n");
    } else if(menuId == 3 && hasKey == true) {
        console.log(`You use they key to unlock and open the door.\nCongratulations, ${playerName}, you escaped alive!`);
        isAlive = false;
    };
};