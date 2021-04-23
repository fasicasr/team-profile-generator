//const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Manager", () => { //doesn't have execution just used to group 
  describe("Initialization", () => {
    //after all the groups are created, it block takes a string to define what the test is for. Then => 
        it("should return an 'officenumber' when created", () => {
        
            const obj = new Manager('Jane', 1, 'jane@hotmail.com', 12);
            
            expect(obj.name).toEqual('Jane');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('jane@hotmail.com');
            expect(obj.officenumber).toEqual(12);
            //expect("number" in obj).toEqual(true);
           
        });
     });
});