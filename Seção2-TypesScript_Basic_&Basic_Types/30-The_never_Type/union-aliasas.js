"use strict";
/* Type Aliases & Object Types
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example: */
const u1 = { name: 'Max', age: 30 }; /*   this works!
This allows you to avoid unnecessary repetition and manage types centrally.
 */
/* For example, you can simplify this code:
 */
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greet2(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder2(user, checkAge) {
    return checkAge > user.age;
}
