function setUnionOfAnyAmountOfSets(...args) {
  var set = new Set();
  args.forEach(S => S.forEach(e => set.add(e)))
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
