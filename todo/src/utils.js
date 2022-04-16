let idCounter = 1;

export const uniqueId = () => {
  if (!idCounter) {
    idCounter = 1;
  }

  const id = ++idCounter;

  return `${id}`;
};
