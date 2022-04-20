export default function findCommonElements(array: Array<any>, property?: any) {
  const commonElements = array.filter(
    (item, index) => array.indexOf(item) !== index
  );

  console.log(commonElements);
}
