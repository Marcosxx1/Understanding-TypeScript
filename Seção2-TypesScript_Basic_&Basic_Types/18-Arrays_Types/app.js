/* Array */
var person = {
    name: 'Marcos',
    age: 50,
    hobbies: ['Sposts', 'Cooking'],
    set value(favoriteActivities) {
        this.hobbies = favoriteActivities;
    }
};
var favoriteActivities;
//let favoriteActivities: any[]; Definir para receber qualquer tipo, any
favoriteActivities = ['Swim'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
