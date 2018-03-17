
function newList(_array) {

  function map(lambda) {
    return _array.map(lambda)
  }

  function reduce(accumulator, elementArray) {
    return _array.reduce(accumulator, elementArray)
  }

  function flatten() {
    const cumulate = (accumulator, elementArray) => {
      accumulator.push(elementArray)
    }
    return newList(_array.reduce(cumulate, []))
  }

  return { flatten, map }
}
