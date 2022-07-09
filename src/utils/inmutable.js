export const push = function (array, newEntry) {
  return [...array, newEntry];
};

export const pop = function (array) {
  return array.slice(0, -1);
};

export const unshift = function (array, newEntry) {
  return [newEntry, ...array];
};

export const sort = function (array, compareMethod) {
  return [...array].sort(compareMethod);
};

export const reverse = function (array) {
  return [...array].reverse();
};

export const splice = function (array, start, deleteCount, ...items) {
  return [
    ...array.slice(0, start),
    ...items,
    ...array.slice(start + deleteCount),
  ];
};

export const remove = function (array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
};

export const replace = function (array, index, newEntry) {
  return splice(array, index, 1, newEntry);
};
