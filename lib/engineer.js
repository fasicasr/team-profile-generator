const Employee = require("../lib/employee");
//extending employee properties along with adding office number/role
class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return Engineer;
    }
}
module.exports = Engineer;