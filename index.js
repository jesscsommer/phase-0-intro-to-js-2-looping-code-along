// Code your solutions in this file

const names = ["Jess", "Ava", "Azeezah", "Ron", "Herm"];
const messages = []

function writeCards(names, eventName){
    for (let i=0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

writeCards(names, eventName);

function countDown(number){
    let i = number;
    while (i >= 0){
        console.log(i);
        i--;
    }
}
