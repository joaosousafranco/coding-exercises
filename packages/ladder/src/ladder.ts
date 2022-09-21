/* eslint-disable no-bitwise */
export const climbingWays = (a: number[], b: number[]) => {
  const f = new Array(a.length + 1);
  f[0] = 1;
  f[1] = 1;
  const MAX = 1 << 30;

  for (let i = 2; i < f.length; i += 1) {
    f[i] = f[i - 1] + f[i - 2];
    f[i] %= MAX;
  }

  const res = new Array(a.length);

  for (let i = 0; i < a.length; i += 1) {
    res[i] = f[a[i]] % (1 << b[i]);
  }

  return res;
};
