export const countAliveFish = (fish: number[], directions: number[]) => {
  const downStream = [];
  const upStream = [];
  let direction = directions[0];

  for (let i = 0; i < fish.length; i += 1) {
    direction = directions[i];

    if (direction === 0) {
      while (downStream.length > 0) {
        const d = downStream.pop();

        if (d > fish[i]) {
          downStream.push(d);
          break;
        }
      }

      if (downStream.length === 0) {
        upStream.push(fish[i]);
      }
    } else {
      downStream.push(fish[i]);
    }
  }

  return downStream.length + upStream.length;
};
