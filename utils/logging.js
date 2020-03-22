let numCalls = 0;
const stack = [];
const logStack = () => {
  console.log('current call stack:');
  for (let i = stack.length - 1; i >= 0; i--) {
    console.log(`${stack[i]}`);
  }
};

/**
 * logCall adds the current call to the call stack
 * and prints out the stack.
 * Call this function at the top of your recursive function.
 * Ex: logCall(myFunc, 3)
 * @param {function} func Your recursive function
 * @param  {...any} args The current args of your function
 */
const logCall = (func, ...args) => {
  let callString = `${func.name}(${args})`;

  stack.push(callString);
  numCalls++;
  console.log(`\ncalling ${callString}... (${numCalls} total calls so far)`);
  logStack();
};
/**
 * logReturn pops the top call off the stack and prints the stack.
 * Call this function just before your recursive function returns,
 * both in the base case and in other cases.
 * Ex: logReturn(myFunc, 5, 3)
 * @param {function} func Your recursive function
 * @param {any} res The result your function is ready to return.
 * @param  {...any} args The current args of your function.
 */
const logReturn = (func, res, ...args) => {
  stack.pop();
  console.log(`\nreturned ${res} for ${func.name}(${args})`);
  logStack();
};

module.exports = {
  logCall,
  logReturn,
};
