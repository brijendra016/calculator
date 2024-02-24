function add(a,b) {
    let sum = a+b;
    return sum;
}
function sub(a,b) {
    let diff;
    if(a>b)
    diff = a-b;
    else
    diff = b-a;
    return diff;
}
function mul(a,b) {
    let mul = a*b;
    return mul;
}
function divi(a,b) {
    let quo = a/b;
    quo = quo.toFixed(2); //to get output to two decimal places only
    return quo;
}

function SolveEvent(exp) {
  try {
    const result = eval(exp);
    return result;
  } catch (error) {
    return "Invalid";
  }
}

// const mathExpression = "(19+3*30/2)";
// const solution = solveMathExpression(mathExpression);
// console.log(solution);

export {add, sub, mul, divi, SolveEvent};