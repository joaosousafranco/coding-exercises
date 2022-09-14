export const earliestJump = (jumps: number, leafs: number[]) => {
  const jumpsCounter = [];
  let doneJumps = 0;
  let earliestMoment = 0;

  const foundJumps = leafs.find((leaf, index) => {
    if (!jumpsCounter[leaf]) {
      jumpsCounter[leaf] = 1;
      doneJumps += 1;
    }

    earliestMoment = index;
    return doneJumps === jumps;
  });

  return foundJumps ? earliestMoment : -1;
};
