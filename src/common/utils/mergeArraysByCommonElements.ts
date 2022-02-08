const mergeArraysByCommonElements = (
  arrays: Array<Array<any>>,
  property: any
): Array<any> => {
  const currentElements: any = [];
  const commonElements: any = [];

  const firstArray = arrays[0];

  for (let i = 0; i < firstArray.length; i++) {
    currentElements.push(firstArray[i]);
  }

  for (let i = 1; i < arrays.length; i++) {
    const currentArray = arrays[i];

    for (let j = 0; j < currentArray.length; j++) {
      const isCommon = currentElements.some(
        (element: any) => element[property] === currentArray[j][property]
      );

      if (isCommon) {
        commonElements.push(currentArray[j]);
      }
    }
  }

  return commonElements.filter(
    (element: any, index: number, self: any) =>
      index ===
      self.findIndex((obj: any) => obj[property] === element[property])
  );
};

export default mergeArraysByCommonElements;
