const debounce = (fn, time) => {
  let timeout;

  const CheckBounce = function() {
    const self = this;
    const functionCall = (...arg) => fn.apply(self, arg);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
  return CheckBounce;
};

export default debounce;
