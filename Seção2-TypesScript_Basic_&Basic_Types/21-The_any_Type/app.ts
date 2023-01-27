 /* Any não é recomendado, pois tiraria toda a vantagem do Ts
 Que é justamente a tipagem */
 
 enum Role {ADMIN, READ_ONLY, AUTHOR}; 

  const person = {
  name: 'Marcos',
  age: 50,
  hobbies: ['Sports', 'Booking'],
  role: Role.ADMIN
 };

 let favoriteActivities: any[];
 favoriteActivities = ['Swim'];

 console.log(person.name); 

 for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
 }

 if(person.role === Role.AUTHOR){
    console.log('is admin');
 }