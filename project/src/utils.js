let idCounter = 101;

const uniqueId = () => {
  if (!idCounter) {
    idCounter = 1;
  }

  const id = ++idCounter;

  return `${id}`;
};

export const createTodoItem = (label) => {
  return { label: label, important: false, done: false, id: uniqueId() };
};

export const todoItems = [
  createTodoItem('Drink Coffee'),
  createTodoItem('Make Awesome App'),
  createTodoItem('Have a Lunch'),
];
