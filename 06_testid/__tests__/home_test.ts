
import {density} from "../home";

test("Fabric denity", ()=>{
    const den=new density()
    expect (den.calculate(50)).toBe(5)
})

import {warpLen} from "../home";

test("Warp lenght", ()=>{
    const len=new warpLen()
    expect (len.calculate(50)).toBe(135)
})
import {warpQuan} from "../home";
test("Warp quantity", ()=>{
    const quan=new warpQuan()
    expect (quan.calculate(50,50)).toBe(266.5)
})

import {warpMat} from "../home";
test("Warp material", ()=>{
    const wamat=new warpMat()
    expect (wamat.calculate(50,50,50)).toBe(401.5)
})

import {weftMat} from "../home";
test("Weft material", ()=>{
    const wemat=new weftMat()
    expect (wemat.calculate(50,50,50)).toBe(397.5)
})

