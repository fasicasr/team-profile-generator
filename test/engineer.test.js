const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe("Engineer", () => { //doesn't have execution just used to group 
  describe("Initialization", () => {
    //after all the groups are created, it block takes a string to define what the test is for. Then => 
        it("should return an 'officenumber' when created", () => {
        
            const obj = new Engineer();
    
            expect(obj.github).toEqual('');
            //expect("number" in obj).toEqual(true);
           
        });
     });
});
