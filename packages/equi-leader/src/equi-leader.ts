export const countLeaders = (list: number[]) => {
  let pos = 0;
  let count = 0;

  for (let i = 0; i < list.length; i += 1) {
    if (list[pos] === list[i]) {
      count += 1;
    } else {
      count -= 1;
      if (count === 0) {
        pos = i;
        count += 1;
      }
    }
  }

  let ret = 0;
  const cand = list[pos];

  const E = [];
  const N = [];

  let ec = 0;
  let nc = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === cand) {
      ec += 1;
    } else {
      nc += 1;
    }
    E[i] = ec;
    N[i] = nc;
  }

  for (let i = 0; i < list.length; i += 1) {
    if (E[i] > N[i] && nc - N[i] < ec - E[i]) {
      ret += 1;
    }
  }

  return ret;
};
