 
 const person: {
   name: string;
   age: number;
   hobbies: string[];
   role:[number, string];
 }= {
   name: 'Marcos',
   age: 50,
   hobbies: ['Sposts', 'Cooking'],
   role: [2, 'author']
};

/* person.role.push('admin');
person.role[1] = 10; */

//person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
//let favoriteActivities: any[]; Definir para receber qualquer tipo, any
favoriteActivities = ['Swim'];

console.log(person.name);

for(const hobby of person.hobbies) {
   console.log(hobby);
}