import mergeArraysByCommonElements from "@/common/utils/mergeArraysByCommonElements";

describe("mergeArraysByCommonElements util", () => {
  it("Should find common elements for given arrays of objects and return an array containing them.", () => {
    const firstArray = [
      { name: "banana" },
      { name: "strawberry" },
      { name: "kiwi" },
    ];
    const secondArray = [{ name: "strawberry" }, { name: "coconut" }];

    const arraysToMerge = [firstArray, secondArray];

    const expectedResult = [{ name: "strawberry" }];

    expect(
      JSON.stringify(mergeArraysByCommonElements(arraysToMerge, "name"))
    ).to.equal(JSON.stringify(expectedResult));
  });
});
