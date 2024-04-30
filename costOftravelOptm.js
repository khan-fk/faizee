
///////////////////////  2nd formula  /////////////

const costOftravelOtpm = (d,mi, cost) => Math.ceil((d,mi) *cost);

console.log("hyderbad travel cost:", costOftravelOtpm(300,13,112));
console.log("pune travel cost:", costOftravelOtpm(550,15,112));
console.log("jalna travel cost:", costOftravelOtpm(260,13,112));