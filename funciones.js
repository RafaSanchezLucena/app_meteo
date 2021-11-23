export const ordenarArray = array => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        let valorTemporal = array[j];
        array[j] = array[j + 1];
        array[j + 1] = valorTemporal;
      };
    };
  };
  console.log(array); 
};
