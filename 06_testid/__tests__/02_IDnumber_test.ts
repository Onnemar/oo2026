import { IDCode } from "../02_IDnumber";

test("Male gender", ()=>{
    expect (new IDCode("60304075232").gender()).toBe("F")
})