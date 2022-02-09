/**
 * Finds common elements for given arrays of objects and returns array containing them
 * @param {Array<Array<any>>} arrays array containing arrays to be checked
 * @param {string} property it's responsible for determining which objects' properties should be compared eg. comparing two given objects: obj1 and obj2, property is set to "name" - function will check if obj1["name"] === obj2["name"]
 * @return Array<any>
 */

export default function mergeArraysByCommonElements(
  arrays: Array<Array<any>>,
  property: any
): Array<any> {
  let currentElements: any = [];
  const commonElements: any = [];

  const firstArray = arrays[0];

  currentElements = [...firstArray];

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
}
