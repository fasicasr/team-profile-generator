const Employee = require("../lib/employee");

describe("Employee", () => { //doesn't have execution just used to group 
  describe("Initialization", () => {
    //after all the groups are created, it block takes a string to define what the test is for. Then => 
      
        it("should set 'name' when created", () => {
           //sampling name, id, and email to see that it works 
            const obj = new Employee('Jane', 1, 'jane@hotmail.com');
    
            expect(obj.name).toEqual('Jane');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('jane@hotmail.com');
        });
     });
});
