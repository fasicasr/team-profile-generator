const Employee = require("../lib/employee");
const Intern= require("../lib/intern");

describe("Intern", () => { //doesn't have execution just used to group 
  describe("Initialization", () => {
    //after all the groups are created, it block takes a string to define what the test is for. Then => 
        it("should return an 'officenumber' when created", () => {
        
            const obj = new Intern('Jane', 1, 'jane@hotmail.com', 'Marymount');
    
            expect(obj.name).toEqual('Jane');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('jane@hotmail.com');
            expect(obj.school).toEqual('Marymount');
           
        });
     });
});
