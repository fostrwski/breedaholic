import mergeArraysByCommonElements from "@/common/utils/mergeArraysByCommonElements";

describe("mergeArraysByCommonElements util", () => {
  it("Should return array containing elements that are common for all given arrays.", () => {
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
