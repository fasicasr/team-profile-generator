class Employee { // constructive function to pull name/id/email - return user response
  constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        //this.role = role;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
    
}

// function Employee(name, id, email) { // two arguments of raining and noise
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.getName = () => {
//      return this.name
//     };
//     this.getID = () => {
//         return this.id
//     };
//     this.getEmail = () => {
//         return this.email
//     };
//     this.getRole = () => {
//         return this
//     };
// }

module.exports = Employee;

