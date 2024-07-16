export const debounce = (func, timeParam) => {
  const time = timeParam || 100 // 100 by default if no param
  let timer
  return function (event) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(func, time, event)
  }
}

// // Defines a debounce function to limit the rate at which a function can fire.
// export const debounce = (func, delay) => {
//     let timerId; // Holds a reference to the timeout between calls.
//     return (...args) => {
//         clearTimeout(timerId); // Clears the current timeout, if any, to reset the debounce timer.
//         timerId = setTimeout(() => {
//             func.apply(this, args); // Calls the passed function after the specified delay with the correct context and arguments.
//         }, delay);
//     };
// };
