const {sum,mul,div,sub}=require("./index.js") // I destructured object and In object keys matter not index like array
// so I need not be careful about what order am importing here like I should have beenn in array
console.log(sum(10,10))
console.log(sub(78,9))
console.log(mul(5,8),"is multiplication")
console.log(div(39,5),"is division")