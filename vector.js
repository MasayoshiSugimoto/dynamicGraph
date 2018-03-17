function vector(_x, _y) {

	checkNotNull(_x)
	checkNotNull(_y)

  function x() { return _x }
  function y() { return _y }

  function length() {
    return Math.sqrt((_x * _x) + (_y * _y))
  }

  function substract(v) {
    return vector(x - v.x(), y - v.y())
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

  return { x, y, length, substract, scale, divide, normalize, toJSON }
}

vector.zero = function() { return vector(0, 0) }
vector.random = function() { return vector(Math.random(), Math.random()) }

vector.distance = function(v1, v2) {
  return v1.substract(v2).length()
}
