const fancingRectCost=(l,b, numberOfLayer, rateOfWire ) => {
    const parameterOfShape= l+b+l+b;
    const fancingWireLength = parameterOfShape * numberOfLayer;
    const costOfWire = fancingWireLength * rateOfWire;
    return costOfWire;
}

// console.log(fancingRectCost(30,40,4,12));
console.log(fancingRectCost(30,50,4,9));