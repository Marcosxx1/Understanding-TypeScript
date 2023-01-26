"use strict";
let userInput;
let unserName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    unserName = userInput;
}
/* Never type */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
