export const generateTasksEasy = (countTask: number, mathActions: string[]) => {
  let resultArray: string[] = [];
  let arrayTasksRest: string[] = [];
  let arrayTasksPlus: string[] = [];
  let arrayTasksMinus: string[] = [];
  let arrayTasksMultiply: string[] = [];
  let arrayTasksDivision: string[] = [];

  //Проверяю если число примеров делится без остатка, чтобы не было бага когда не додали примеров
  if (mathActions.length % countTask !== 0) {
    while (arrayTasksRest.length + 1 <= countTask % mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 25);
      const secondNumber = Math.ceil(Math.random() * 25);
      const randomSignNum = Math.ceil(Math.random() * mathActions.length - 1);

      if (mathActions[randomSignNum] !== "÷") {
        arrayTasksRest.push(
          `${firstNumber} ${mathActions[randomSignNum]} ${secondNumber}`
        );
      }
    }
  }

  // Все нижние if`ы нужны чтобы гибко настраивать примеры
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
      const firstNumber = Math.ceil(Math.random() * 100);
      const secondNumber = Math.ceil(Math.random() * 50);

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
    ...arrayTasksRest,
    ...arrayTasksPlus,
    ...arrayTasksMinus,
    ...arrayTasksMultiply,
    ...arrayTasksDivision,
  ];

  // Рандомно мешаю массив
  resultArray.sort(() => Math.random() - 0.5);

  return resultArray;
};

export const generateTasksMed = (countTask: number, mathActions: string[]) => {
  let resultArray: string[] = [];
  let arrayTasksRest: string[] = [];
  let arrayTasksPlus: string[] = [];
  let arrayTasksMinus: string[] = [];
  let arrayTasksMultiply: string[] = [];
  let arrayTasksDivision: string[] = [];

  if (mathActions.length % countTask !== 0) {
    while (arrayTasksRest.length + 1 <= countTask % mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 25);
      const secondNumber = Math.ceil(Math.random() * 25);
      const randomSignNum = Math.ceil(Math.random() * mathActions.length - 1);

      if (mathActions[randomSignNum] !== "÷") {
        arrayTasksRest.push(
          `${firstNumber} ${mathActions[randomSignNum]} ${secondNumber}`
        );
      }
    }
  }

  if (mathActions.includes("+")) {
    while (arrayTasksPlus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 35);
      const secondNumber = Math.ceil(Math.random() * 35);

      arrayTasksPlus.push(`${firstNumber} + ${secondNumber}`);
    }
  }

  if (mathActions.includes("-")) {
    while (arrayTasksMinus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 25);
      const secondNumber = Math.ceil(Math.random() * 25);

      arrayTasksMinus.push(`${firstNumber} - ${secondNumber}`);
    }
  }

  if (mathActions.includes("÷")) {
    while (arrayTasksDivision.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 200);
      const secondNumber = Math.ceil(Math.random() * 100);

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
      const firstNumber = Math.ceil(Math.random() * 12);
      const secondNumber = Math.ceil(Math.random() * 10);

      arrayTasksMultiply.push(`${firstNumber} x ${secondNumber}`);
    }
  }

  resultArray = [
    ...arrayTasksRest,
    ...arrayTasksPlus,
    ...arrayTasksMinus,
    ...arrayTasksMultiply,
    ...arrayTasksDivision,
  ];

  resultArray.sort(() => Math.random() - 0.5);

  return resultArray;
};

export const generateTasksAdv = (countTask: number, mathActions: string[]) => {
  let resultArray: string[] = [];
  let arrayTasksRest: string[] = [];
  let arrayTasksPlus: string[] = [];
  let arrayTasksMinus: string[] = [];
  let arrayTasksMultiply: string[] = [];
  let arrayTasksDivision: string[] = [];

  if (mathActions.length % countTask !== 0) {
    while (arrayTasksRest.length + 1 <= countTask % mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 25);
      const secondNumber = Math.ceil(Math.random() * 25);
      const randomSignNum = Math.ceil(Math.random() * mathActions.length - 1);

      if (mathActions[randomSignNum] !== "÷") {
        arrayTasksRest.push(
          `${firstNumber} ${mathActions[randomSignNum]} ${secondNumber}`
        );
      }
    }
  }

  if (mathActions.includes("+")) {
    while (arrayTasksPlus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 45);
      const secondNumber = Math.ceil(Math.random() * 45);

      arrayTasksPlus.push(`${firstNumber} + ${secondNumber}`);
    }
  }

  if (mathActions.includes("-")) {
    while (arrayTasksMinus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 35);
      const secondNumber = Math.ceil(Math.random() * 35);

      arrayTasksMinus.push(`${firstNumber} - ${secondNumber}`);
    }
  }

  if (mathActions.includes("÷")) {
    while (arrayTasksDivision.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * (150 - 50)) + 50;
      const secondNumber = Math.ceil(Math.random() * (10 - 3)) + 3;

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
      const firstNumber = Math.ceil(Math.random() * 15);
      const secondNumber = Math.ceil(Math.random() * 15);

      arrayTasksMultiply.push(`${firstNumber} x ${secondNumber}`);
    }
  }

  resultArray = [
    ...arrayTasksRest,
    ...arrayTasksPlus,
    ...arrayTasksMinus,
    ...arrayTasksMultiply,
    ...arrayTasksDivision,
  ];

  resultArray.sort(() => Math.random() - 0.5);

  return resultArray;
};

export const generateTasksHard = (countTask: number, mathActions: string[]) => {
  let resultArray: string[] = [];
  let arrayTasksRest: string[] = [];
  let arrayTasksPlus: string[] = [];
  let arrayTasksMinus: string[] = [];
  let arrayTasksMultiply: string[] = [];
  let arrayTasksDivision: string[] = [];

  if (mathActions.length % countTask !== 0) {
    while (arrayTasksRest.length + 1 <= countTask % mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 25);
      const secondNumber = Math.ceil(Math.random() * 25);
      const randomSignNum = Math.ceil(Math.random() * mathActions.length - 1);

      if (mathActions[randomSignNum] !== "÷") {
        arrayTasksRest.push(
          `${firstNumber} ${mathActions[randomSignNum]} ${secondNumber}`
        );
      }
    }
  }

  if (mathActions.includes("+")) {
    while (arrayTasksPlus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 70);
      const secondNumber = Math.ceil(Math.random() * 70);
      const thirdNumber = Math.ceil(Math.random() * 70);

      arrayTasksPlus.push(`${firstNumber} + ${secondNumber} + ${thirdNumber}`);
    }
  }

  if (mathActions.includes("-")) {
    while (arrayTasksMinus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 80);
      const secondNumber = Math.ceil(Math.random() * 50);
      const thirdNumber = Math.ceil(Math.random() * 50);

      arrayTasksMinus.push(`${firstNumber} - ${secondNumber} - ${thirdNumber}`);
    }
  }

  if (mathActions.includes("÷")) {
    while (arrayTasksDivision.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * (250 - 100)) + 100;
      const secondNumber = Math.ceil(Math.random() * (10 - 3)) + 3;

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
      const firstNumber = Math.ceil(Math.random() * 20);
      const secondNumber = Math.ceil(Math.random() * 20);
      const thirdNumber = Math.ceil(Math.random() * 3);

      arrayTasksMultiply.push(
        `${firstNumber} x ${secondNumber} x ${thirdNumber}`
      );
    }
  }

  resultArray = [
    ...arrayTasksRest,
    ...arrayTasksPlus,
    ...arrayTasksMinus,
    ...arrayTasksMultiply,
    ...arrayTasksDivision,
  ];

  resultArray.sort(() => Math.random() - 0.5);

  return resultArray;
};

export const generateTasksIns = (countTask: number, mathActions: string[]) => {
  let resultArray: string[] = [];
  let arrayTasksRest: string[] = [];
  let arrayTasksPlus: string[] = [];
  let arrayTasksMinus: string[] = [];
  let arrayTasksMultiply: string[] = [];
  let arrayTasksDivision: string[] = [];

  if (mathActions.length % countTask !== 0) {
    while (arrayTasksRest.length + 1 <= countTask % mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 600);
      const secondNumber = Math.ceil(Math.random() * 300);
      const randomSignNum = Math.ceil(Math.random() * mathActions.length - 1);

      if (mathActions[randomSignNum] !== "÷") {
        arrayTasksRest.push(
          `${firstNumber} ${mathActions[randomSignNum]} ${secondNumber}`
        );
      }
    }
  }

  if (mathActions.includes("+")) {
    while (arrayTasksPlus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 150);
      const secondNumber = Math.ceil(Math.random() * 150);
      const thirdNumber = Math.ceil(Math.random() * 150);

      arrayTasksPlus.push(`${firstNumber} + ${secondNumber} + ${thirdNumber}`);
    }
  }

  if (mathActions.includes("-")) {
    while (arrayTasksMinus.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * 200);
      const secondNumber = Math.ceil(Math.random() * 80);
      const thirdNumber = Math.ceil(Math.random() * 80);

      arrayTasksMinus.push(`${firstNumber} - ${secondNumber} - ${thirdNumber}`);
    }
  }

  if (mathActions.includes("÷")) {
    while (arrayTasksDivision.length + 1 <= countTask / mathActions.length) {
      const firstNumber = Math.ceil(Math.random() * (400 - 200)) + 200;
      const secondNumber = Math.ceil(Math.random() * (15 - 3)) + 3;

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
      const firstNumber = Math.ceil(Math.random() * 30);
      const secondNumber = Math.ceil(Math.random() * 30);
      const thirdNumber = Math.ceil(Math.random() * 3);

      arrayTasksMultiply.push(
        `${firstNumber} x ${secondNumber} x ${thirdNumber}`
      );
    }
  }

  resultArray = [
    ...arrayTasksRest,
    ...arrayTasksPlus,
    ...arrayTasksMinus,
    ...arrayTasksMultiply,
    ...arrayTasksDivision,
  ];

  resultArray.sort(() => Math.random() - 0.5);

  return resultArray;
};
