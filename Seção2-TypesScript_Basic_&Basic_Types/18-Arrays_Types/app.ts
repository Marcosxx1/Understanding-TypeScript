 
export {};

/* Array */

 const person = {
    name: 'Marcos',
    age: 50,
    hobbies: ['Sposts', 'Cooking'],
      set value(favoriteActivities: [string]) {
        this.hobbies = favoriteActivities;
    }
    
 };

 let favoriteActivities: string[];
 //let favoriteActivities: any[]; Definir para receber qualquer tipo, any
 favoriteActivities = ['Swim'];

console.log(person.name);

 for(const hobby of person.hobbies) {
    console.log(hobby);
 }