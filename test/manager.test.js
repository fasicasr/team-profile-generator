const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Manager", () => { //doesn't have execution just used to group 
  describe("Initialization", () => {
    //after all the groups are created, it block takes a string to define what the test is for. Then => 
        it("should return an 'officenumber' when created", () => {
        
            const obj = new Manager();
    
            expect(obj.officenumber).toEqual(true);
            //expect("number" in obj).toEqual(true);
           
        });
     });
});