export const randomRange = (minNum: number, maxNum: number) => {
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
};
