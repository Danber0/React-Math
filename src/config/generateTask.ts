export const generateTasks = (countTask: number, mathActions: string[]) => {
  let resultArray: string[] = [];
  let arrayTasksPlus: string[] = [];
  let arrayTasksMinus: string[] = [];
  let arrayTasksMultiply: string[] = [];
  let arrayTasksDivision: string[] = [];

  //TODO
  // 1. Когда я хочу посчитать число которое не кратное действиям то примеров прилетает чуть меньше
  // 2. Сделать чтобы в массиве действий всегда был какой то элемент и его нельзя было убрать

  if (mathActions.includes("+")) {
    while (arrayTasksPlus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 25);
      const secondNumber = Math.ceil(Math.random() * 25);

      arrayTasksPlus.push(`${firstNumber} + ${secondNumber}`);
    }
  }

  if (mathActions.includes("-")) {
    while (arrayTasksMinus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 20);
      const secondNumber = Math.ceil(Math.random() * 20);

      arrayTasksMinus.push(`${firstNumber} - ${secondNumber}`);
    }
  }

  if (mathActions.includes("÷")) {
    while (arrayTasksDivision.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 30);
      const secondNumber = Math.ceil(Math.random() * 30);

      if (
        firstNumber % secondNumber === 0 &&
        firstNumber !== secondNumber &&
        firstNumber !== 1 &&
        secondNumber !== 1
      ) {
        arrayTasksDivision.push(`${firstNumber} ÷ ${secondNumber}`);
      }
    }
  }

  if (mathActions.includes("x")) {
    while (arrayTasksMultiply.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 10);
      const secondNumber = Math.ceil(Math.random() * 5);

      arrayTasksMultiply.push(`${firstNumber} x ${secondNumber}`);
    }
  }

  resultArray = [
    ...arrayTasksPlus,
    ...arrayTasksMinus,
    ...arrayTasksMultiply,
    ...arrayTasksDivision,
  ];

  resultArray.sort(() => Math.random() - 0.5);

  console.log(resultArray);
  return resultArray;
};

// export const generateTask = (countTask: number, actionMark: string[]) => {
//   const arrayOfTask = [];
//
//   while (arrayOfTask.length + 1 <= Number(countTask)) {
//     const firstNumber = Math.ceil(Math.random() * 30);
//     const secondNumber = Math.ceil(Math.random() * 30);
//     const actionSign = Math.floor(Math.random() * actionMark.length);
//
//     if (actionMark[actionSign].includes("÷")) {
//       if (
//         firstNumber % secondNumber === 0 &&
//         firstNumber !== secondNumber &&
//         firstNumber !== 1 &&
//         secondNumber !== 1
//       ) {
//         arrayOfTask.push(
//           `${firstNumber} ${actionMark[actionSign]} ${secondNumber}`
//         );
//       }
//     } else if (actionMark[actionSign].includes("x")) {
//       if (secondNumber < 5) {
//         arrayOfTask.push(
//           `${firstNumber} ${actionMark[actionSign]} ${secondNumber}`
//         );
//       }
//     } else {
//       arrayOfTask.push(
//         `${firstNumber} ${actionMark[actionSign]} ${secondNumber}`
//       );
//     }
//   }
//
//   console.log(arrayOfTask);
//   return arrayOfTask;
// };
