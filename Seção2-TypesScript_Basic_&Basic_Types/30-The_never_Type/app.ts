
export {};

let userInput: unknown;
let unserName: string;


 
userInput = 5;
userInput = 'max';
if(typeof userInput === 'string') {
    unserName = userInput;
}

/* Never type */

function generateError(message: string, code: number) {
    throw{message: message, errorCode: code};
}

generateError('An error occured!', 500);