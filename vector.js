function vector(_x, _y) {

	checkNumber(_x)
	checkNumber(_y)


  const instance = {
		x,
		y,
		length,
		add,
		substract,
		scale,
		divide,
		normalize,
		toJSON,
		cut
	}

  function x() { return _x }
  function y() { return _y }

  function length() {
    return Math.sqrt((_x * _x) + (_y * _y))
  }

	function add(v) {
		return vector(_x + v.x(), _y + v.y())
	}

  function substract(v) {
    return vector(_x - v.x(), _y - v.y())
  }

  function scale(lambda) {
    return vector(lambda * _x, lambda * _y)
  }

  function divide(lambda) {
    return vector(_x / lambda, _y / lambda)
  }

  function normalize() {
    return divide(1 / length())
  }

	function cut(maxLength) {
		const l = length()
		if (l > maxLength) return scale(maxLength / l)
		return instance
	}

	function withLength(newLength) {
		const l = length()
		if (l < MathUtil.EPSILON)
			//Could be improved with random
			return vector.xOne().scale(newLength / l)
		return instance.scale(newLength / l)
	}

  function toJSON() {
    return `{"x": ${_x}, "y": ${_y}}`
  }

	return instance
}

vector.zero = (() => {
	const zero = vector(0, 0)
	return () => zero
})()

vector.xOne = function() { return vector(1, 0) }

vector.random = function() { 
	return vector(Math.random() - 0.5, Math.random() - 0.5)
}

vector.distance = function(v1, v2) {
  return v1.substract(v2).length()
}

vector.check = function(v) {
	checkNumber(v.x())
	checkNumber(v.y())
	return v
}

vector.add = function(v1, v2) {
	return v1.add(v2)
}
