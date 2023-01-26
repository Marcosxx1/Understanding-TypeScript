var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var kitchen = new Department('Cooking');
console.log(kitchen);
kitchen.describe();
var kitchenCopy = { describe: kitchen.describe };
