const Employee = require("../lib/employee");
//extending employee properties along with adding office number/role
class Manager extends Employee {
    constructor(officenumber) {
        this.officenumber = officenumber;
    }
    getOfficenumber() {
        return this.officenumber;
    }
    getRole() {
        return Manager;
    }
}
module.exports = Manager;