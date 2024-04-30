///////////////  circle  ///////////////////
const fancingCircleCost = (r, numberOfLayer, rateOfWire) =>{
    const pi = 22 / 7;
    const parameterOfShape = 2 * pi * r;
    const fancingWireLength = parameterOfShape * numberOfLayer;
    const costOfWire = fancingWireLength * rateOfWire;
    return costOfWire;
}

console.log(fancingCircleCost(3, 4, 12));