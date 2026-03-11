import { isPositive } from "../01_PositiveNumber";

test("positivity",()=>{
    expect(isPositive(-3)).toBe(false);
    expect(isPositive(0)).toBe(false);
    expect(isPositive(2)).toBe(true);
});