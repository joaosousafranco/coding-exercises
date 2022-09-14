export const minimalDifference = (list: number[]) => {
  let rightPartition = list.slice(1).reduce((a, b) => a + b, 0);
  let leftPartition = list[0];

  let difference = Math.abs(leftPartition - rightPartition);

  for (let i = 1; i < list.length - 1; i += 1) {
    leftPartition += list[i];
    rightPartition -= list[i];

    const partitionDifference = Math.abs(leftPartition - rightPartition);

    difference =
      partitionDifference < difference ? partitionDifference : difference;
  }

  return difference;
};
