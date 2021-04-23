const Employee = require("../lib/employee");
//extending employee properties along with adding office number/role
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
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