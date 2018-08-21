// based on: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript

export const compareArrays = (arrayA:any[], arrayB:any[]):boolean => {
  if (!arrayA || !arrayB) return arrayA === arrayB;
  if (arrayA.length != arrayB.length) return false;

  for (let iArrayA = 0; iArrayA < arrayA.length; iArrayA++) {
    if (arrayA[iArrayA] instanceof Array && arrayB[iArrayA] instanceof Array) {
      if (!compareArrays(arrayA[iArrayA], arrayB[iArrayA])) return false;
    }
    else if (arrayA[iArrayA] != arrayB[iArrayA]) {
      // note: if here we have objects, the object might be equal and this will return false!
      return false;
    }
  }

  return true;
};
