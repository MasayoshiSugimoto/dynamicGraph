
function newList(_array) {

	checkArray(_array)

	function length() { return _array.length }

	function get(index) {
		assert(index < length())
		return _array[index]
	}

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

	function filter(lambda) {
		return _array.filter(lambda)
	}

  return { get, length, forEach, map, reduce, flatten, filter }
}
