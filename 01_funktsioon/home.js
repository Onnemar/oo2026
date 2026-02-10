// heddle loom warp lenght calculatornfor rag rugs
function warpLen(fullRug, tassel) {
    // beginning and end are made const because these are standard lenghts for warp to tie onto floor loom
    var beginning = 30;
    var end = 40;
    // warp lenght calculating formula: beginning 30cm + (intended rug lenght + tassels ) + shrinkage 20% + ending 40cm
    var tassels = tassel * 2;
    var finRugNoShrink = fullRug + tassels;
    var finRugShrink = finRugNoShrink * 1.2;
    return (beginning + finRugShrink + end) / 100;
}
var tassel = 15;
var fullRug = 250;
console.log("For " + fullRug / 100 + "m rag rug the warp needs to be " + warpLen(fullRug, tassel) + "m long.");
