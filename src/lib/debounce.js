/**
 * @description Delays given function for a given given time
 * @param {Function} fn function to be called on timeout
 * @param {number} time time in ms to delay the function to be called
 * @return {function}

 }}
 **/
export function debounce(fn, time) {
  let timeout;

  const CheckBounce = function() {
    const self = this;
    const functionCall = (...arg) => fn.apply(self, arg);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
  return CheckBounce;
}
