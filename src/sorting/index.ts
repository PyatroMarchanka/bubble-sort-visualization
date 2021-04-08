export const getRandomIntArray = (count: number, maxNumber = 200): number[] => {
  return new Array(count).fill(0).map((el) => Math.floor(Math.random() * maxNumber));
};

export const bubbleSort = (inputArr: number[]) => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};
