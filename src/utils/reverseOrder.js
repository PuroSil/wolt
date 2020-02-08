const reverseOrder = (setterFirst, setterSecond, valueFirst, valueSecond) => {
  setterFirst(!valueFirst);
  setterSecond([...valueSecond.reverse()]);
};

export { reverseOrder };
