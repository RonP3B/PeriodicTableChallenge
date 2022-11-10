const excludeLatanidosActinidos = (arr) => {
  // Excludes lanthanides and actinides elements with number property as Integer
  const filteredElements = arr.filter(
    (obj) =>
      !(
        (obj.group === "lantanidos" && !isNaN(obj.number)) ||
        (obj.group === "actinidos" && !isNaN(obj.number))
      )
  );

  // If there aren't any elements, an array with 90 missing elements is returned
  if (filteredElements.length === 0) return preventEmptyArray(90);

  // Returns an array with missing elements replaced as { missing:true }
  return replaceMissingElements(filteredElements, 0, 89);
};

const groupLatanidosActinidos = (arr) => {
  // Groups lanthanides and actinides elements with number property as Integer
  const filteredElements = arr.filter(
    (obj) =>
      (obj.group === "lantanidos" || obj.group === "actinidos") &&
      !isNaN(obj.number)
  );

  // If there aren't any elements, an array with 30 missing elements is returned
  if (filteredElements.length === 0) return preventEmptyArray(30);

  // Returns an array with missing elements replaced as { missing:true }
  return replaceMissingElements(filteredElements, 90, 119);
};

const replaceMissingElements = (arr, firstIdx, lastIdx) => {
  /*
   *This function fills missing indexes with { missing:true }
   *Param: firstIdx represents which value should be the first index
   *Param: lastIdx represents which value should be the last index
   */

  const elements = [];
  let diff, missing;

  /*Handles this case: {idx: 5, idx:6}  | firstIdx = 0  
    first index should be 0
    So it adds |5-0| { missing:true } at the beginning of elements array
  */
  if (arr[0].idx !== firstIdx) {
    missing = Math.abs(arr[0].idx - firstIdx);
    while (missing-- > 0) elements.push({ missing: true });
  }

  /*
   *Handles this case: {idx:0, idx:1, idx:5}
   *indexes 2, 3 and 4 are missing,
   *so the loop adds { missing:true } between idx 1 and 5
   */
  for (let i = 0; i < arr.length; i++) {
    elements.push(arr[i]);
    if (i == arr.length - 1) continue;
    diff = Math.abs(arr[i].idx - arr[i + 1].idx);
    if (diff !== 1) while (diff-- > 1) elements.push({ missing: true });
  }

  /*Handles this case: {idx: 5, idx:6}  | lastIdx = 10  
    last index should be 10
    So it adds |6-10| { missing:true } at the end of elements array
  */
  if (arr[arr.length - 1].idx !== lastIdx) {
    missing = Math.abs(arr[arr.length - 1].idx - lastIdx);
    while (missing-- > 0) elements.push({ missing: true });
  }

  return elements;
};

// Returns an array of n missing elements
const preventEmptyArray = (n) => {
  const defaultElements = [];
  for (let i = 0; i < n; i++) defaultElements.push({ missing: true });
  return defaultElements;
};

module.exports = { groupLatanidosActinidos, excludeLatanidosActinidos };
