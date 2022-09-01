module.exports = function (max) {
  if (arguments.length === 0) {
    return [];
  }

  if (typeof max !== 'number') {
    throw new TypeError('Lutfen rakam giriniz');
  }

  if (max < 0) {
    throw new Error('Lutfen gecerli deger giriniz');
  }

  const MAX_VALUE = 20;
  if (max > MAX_VALUE) {
    throw new Error(`En fazla ${MAX_VALUE} girebilirsiniz`);
  }

  let results = [];


  const fib = n => {
    return n > 1
      ? fib(n - 1) + fib(n - 2)
      : n;
  }


  for (let i = 0; i < max; i++) {
    results.push(fib(i));
  }

  return results;
}