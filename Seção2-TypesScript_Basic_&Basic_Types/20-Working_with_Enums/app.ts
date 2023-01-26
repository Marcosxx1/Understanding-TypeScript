 /* Enums */

/*  const ADMIN = 0;
 const READ_ONLY = 1;
 const AUTHOR = 2;
 */


 /* enums quando declarados começam do
              0        1        2 */
 enum Role {ADMIN, READ_ONLY, AUTHOR}; //Mas podemos definir também
 //Definindo o primeiro, os outros seguem apartir dele
 const person = {
  name: 'Marcos',
  age: 50,
  hobbies: ['Sports', 'Booking'],
  role: Role.ADMIN
 };

 let favoriteActivities: [string];
 favoriteActivities = ['Swim'];

 console.log(person.name); 

 for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
 }

 if(person.role === Role.AUTHOR){
    console.log('is admin');
 }