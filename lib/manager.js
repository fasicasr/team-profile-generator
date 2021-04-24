const Employee = require("../lib/employee");
//extending employee properties along with adding office number/role
class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email)
        this.officenumber = officenumber;
    }
    getOfficeNumber() {
        return this.officenumber;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;