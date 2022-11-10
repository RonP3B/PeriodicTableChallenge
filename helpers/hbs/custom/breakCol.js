const breakIdxSet = new Set();

// Index breakpoints
const breakColIdxArr = [
  6, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 58, 64, 70, 76, 82, 89,
];

// Adds breakpoints to Set structure for better Time Complexity in a search
breakColIdxArr.forEach((item) => breakIdxSet.add(item));

const breakCol = (idx) => breakIdxSet.has(idx);

module.exports = breakCol;
