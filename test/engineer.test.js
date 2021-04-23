//const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe("Engineer", () => { //doesn't have execution just used to group 
  describe("Initialization", () => {
    //after all the groups are created, it block takes a string to define what the test is for. Then => 
        it("should return an 'officenumber' when created", () => {
        
            const obj = new Engineer('Jane', 1, 'jane@hotmail.com', 'fasicasr');
            
            expect(obj.name).toEqual('Jane');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('jane@hotmail.com');
            expect(obj.github).toEqual('fasicasr');
           
        });
     });
});
