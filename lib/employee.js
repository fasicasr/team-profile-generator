// class employee { // two arguments of raining and noise
//   constructor(name, id, email){
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     };

//     get name() {
//         return this.name();
//     }
    
// }

function Employee(name, id, email) { // two arguments of raining and noise
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = () => {
     return this.name
    };
    this.getID = () => {
        return this.id
    };
    this.getEmail = () => {
        return this.email
    };
    this.getRole = () => {
        return this
    };
}

module.exports = Employee;

