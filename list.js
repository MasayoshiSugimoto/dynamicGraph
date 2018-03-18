
function newList(_array) {

	checkArray(_array)

	function forEach(lambda) {
		_array.forEach(lambda)
	}

  function map(lambda) {
    return newList(_array.map(lambda))
  }

  function reduce(accumulator, elementArray) {
    return newList(_array.reduce(accumulator, elementArray))
  }

  function flatten() {
    const cumulate = (accumulator, elementArray) => {
			elementArray.forEach(element => accumulator.push(element))
			return accumulator
    }
    return newList(_array.reduce(cumulate, []))
  }

  return { forEach, map, reduce, flatten }
}
