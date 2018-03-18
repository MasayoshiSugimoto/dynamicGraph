function vector(_x, _y) {

	checkNumber(_x)
	checkNumber(_y)

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

  function toJSON() {
    return `{"x": ${_x}, "y": ${_y}}`
  }

  return {
		x,
		y,
		length,
		add,
		substract,
		scale,
		divide,
		normalize,
		toJSON
	}
}

vector.zero = function() { return vector(0, 0) }
vector.random = function() { return vector(Math.random(), Math.random()) }

vector.distance = function(v1, v2) {
  return v1.substract(v2).length()
}

vector.check = function(v) {
	checkNumber(v.x())
	checkNumber(v.y())
	return v
}
