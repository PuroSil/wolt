const reverseOrder = (setterFirst, setterSecond, valueFirst, valueSecond) => {
  setterFirst(!valueFirst);
  setterSecond([...valueSecond.reverse()]);
};

module.exports = { reverseOrder };
