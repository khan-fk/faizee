// class pbmath {
//     num3 = 3;
//     num4 = 50;
// }

// const obj = new pbmath();
// console.log(obj.num3+obj.num4);

//////////////////// calling new function //////////////
// class pbmath {
//     num3 = 3;
//     num4 = 50;
//     sum(){
//         return this.num3 + this.num4;
//     }
// }

// const obj = new pbmath();
// console.log(obj.num3+obj.num4);
// console.log(obj.sum());

///////////  calling function with numbers //////////

class pbmath {
    constructor(x,y){
    this.num3 = x;
    this.num4 = y;s
    }
    sum(){
        return this.num3 + this.num4;
    }
    subs(){
        return this.num3 - this.num4;
    }
}

const obj = new pbmath(50,40);
console.log(obj.num3-obj.num4);
// console.log(obj.sum());

const S = new pbmath(500,300);
console.log(S.sum());
console.log(S.subs());


class pbmath extends pbmath {

    n1 = 4;
    n2 = 5;
    mulp(){
      return this.n1 * this.n2;
    }
}
 const mm = newpbmath(30,50);
 console.log(mm.mulp());
 console.log(mm.sum());
