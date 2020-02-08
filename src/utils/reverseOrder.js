const reverseOrder = (setterFirst, setterSecond, valueFirst, valueSecond) => {
  setterFirst(!valueFirst);
  setterSecond([...valueSecond.reverse()]);
  console.log(valueSecond);
};

export { reverseOrder };
