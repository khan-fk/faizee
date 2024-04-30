const costOftravel = (d,mi,cost) =>{
    const fuelRequired = d/mi;
    const totCost = fuelRequired * cost;
    return Math.ceil(totCost);
///////////// math,ceil is use to round off the figure like that (1254.65 rs) or we take math.seil it look like this (1255.00 rs)

};
console.log(costOftravel(300,12,112));  //////// in servicing car mi is increase up to 1 km //////////
 console.log(costOftravel(300,13,112));

///////////////////////  2nd formula  /////////////

// const costOftravelotpm = (d,mi, cost) => Math.ceil((d,mi) *cost);

// console.log("hyderbad travel cost:", costOftravelotpm(300,13,112));
// console.log("pune travel cost:", costOftravelotpm(550,15,112));
// console.log("jalna travel cost:", costOftravelotpm(260,13,112));