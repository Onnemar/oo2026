import {Calculator} from "../03_Calculator";
let calobj:Calculator;
//this runs before every test
//One test might change the calculator, if we dont have this the next test would start with modified data.
beforeEach(()=>{
    calobj=new Calculator();
});

test('empty init', ()=>{
    expect (calobj.getPanelContent()). toBe("");
});

test('simple input',()=>{
    calobj.pressButton('7');
    expect(calobj. getPanelContent()).toBe("7");
});

test('multiple input',()=>{
    calobj.pressButton('7');
    calobj.pressButton('8');
    expect(calobj. getPanelContent()).toBe("78");
});

test('Clear panel',()=>{
    calobj.pressButton('7');
    calobj.pressButton('8');
    calobj.pressButton('C');
    expect(calobj. getPanelContent()).toBe("0");
});

test('+',()=>{
    calobj.pressButton('5');
    calobj.pressButton('+');
    calobj.pressButton('5');
    expect(calobj. getPanelContent()).toBe("10");
});