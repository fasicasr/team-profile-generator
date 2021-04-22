const Employee = require("../lib/employee");

describe("Employee", () => { //doesn't have exacution just used to group 
  describe("Initialization", () => {
    //after all the groups are created, it block takes a string to define what the test is for. Then => 
        // it("should return an object of employee", () => {
        //     const obj = new Employee();

        //     expect("Employee" in obj).toEqual(true);
        // });

        it("should set 'name' when created", () => {
        
            const obj = new Employee('Jane', 1, 'jane@hotmail.com');
    
            expect(obj.name).toEqual('Jane');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('jane@hotmail.com');
        });
     });
});
