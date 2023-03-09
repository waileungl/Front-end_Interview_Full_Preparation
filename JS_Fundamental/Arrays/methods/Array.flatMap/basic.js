/*
Maps and then returns a flattened array
Same as flat() + Map()

! This method will go only one level depth.
*/

const num = [1, [2], 4];

console.log(num.flatMap((e) => e));
// [ 1, 2, 4 ]

console.log(num.flatMap((e) => e * 2));
// [ 2, 4, 8 ]
