// function that receives one argument and returns it in all uppercase
function shout(string) {
    return string.toUpperCase();
}
//console.log (shout);
// function that receives one argument and returns it in all lowercase
function whisper(string) {
    return string.toLowerCase();
}

// function that takes a string argument and logs it in all caps using console.log()
function logShout(string){
    console.log(string.toUpperCase());
}

//  function that takes a string argument and logs it in all lowercase using console.log()
  
function logWhisper(string){
    console.log(string.toLowerCase());
}

// function that returns "I can't hear you!" if `string` is lowercase
// function that returns "YES INDEED!" if `string` is uppercase
// function that returns "I would love to!" if `string` is "Let's have dinner together!"`


function sayHiToHeadphonedRoommate(string) {
    let text = string;
    if (string === text.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === text.toUpperCase()) {
      return "YES INDEED!";
    }
    return "I would love to!";
}

  
