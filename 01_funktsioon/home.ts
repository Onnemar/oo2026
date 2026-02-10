// heddle loom warp lenght calculatornfor rag rugs
function warpLen(fullRug: number, tassel: number): number{
   
    // beginning and end are made const because these are standard lenghts for warp to tie onto floor loom
    const beginning: number = 30;
    const end: number = 40;

// warp lenght calculating formula: beginning 30cm + (intended rug lenght + tassels ) + shrinkage 20% + ending 40cm
    let tassels: number = tassel * 2;
    let finRugNoShrink: number = fullRug + tassels;
    let finRugShrink: number = finRugNoShrink * 1.2;
    return (beginning+  finRugShrink + end) / 100;
}

let tassel: number = 15;
let fullRug: number = 250;

console.log("For " + fullRug /100 + "m rag rug the warp needs to be " + warpLen(fullRug, tassel) +"m long.");