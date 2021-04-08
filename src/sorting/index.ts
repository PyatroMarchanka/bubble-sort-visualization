export const getRandomIntArray = (count: number, maxNumber = 200): number[] => {
  return new Array(count).fill(0).map((el) => Math.floor(Math.random() * maxNumber));
};
