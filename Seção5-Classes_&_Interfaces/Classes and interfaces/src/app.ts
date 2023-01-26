 

 class Department{
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    describe() {
      console.log('Department: ' + this.name);
    }
 }

  const kitchen = new Department('Cooking');

  console.log(kitchen);

  kitchen.describe();

const kitchenCopy = {  describe: kitchen.describe};
 