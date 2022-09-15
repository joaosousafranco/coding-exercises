export const maximalProductOfTriplet = (list: number[]) => {
  list.sort((a, b) => a - b);

  return Math.max(
    list[list.length - 1] * list[list.length - 2] * list[list.length - 3],
    list[list.length - 1] * list[0] * list[1],
  );
};

// export const maximalProductOfTriplet = (list: number[]) => {
//   let maxProduct = list[0] * list[1] * list[2];

//   for (let i = 0; i < list.length - 2; i += 1) {
//     for (let z = i + 1; z < list.length - 1; z += 1) {
//       for (let y = z + 1; y < list.length; y += 1) {
//         const product = list[i] * list[z] * list[y];

//         if (product > maxProduct) {
//           maxProduct = product;
//         }
//       }
//     }
//   }

//   return maxProduct;
// };
