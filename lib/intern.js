const Intern = require("../lib/employee");
//extending employee properties along with adding office number/role
class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return Intern ;
    }
}
module.exports = Intern ;