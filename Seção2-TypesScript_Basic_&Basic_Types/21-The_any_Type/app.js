"use strict";
/* Any não é recomendado, pois tiraria toda a vantagem do Ts
Que é justamente a tipagem */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Marcos',
    age: 50,
    hobbies: ['Sports', 'Booking'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['Swim'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is admin');
}
