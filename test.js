function test() {
  let test = 'test';
  const change = value => (test = value);
  const getTest = () => test;
  return {
    change,
    getTest,
  };
}

const one = test()
one.change('change')
console.log(one.getTest())

const two = test()
console.log(two.getTest())
