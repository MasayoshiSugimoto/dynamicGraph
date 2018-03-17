function vector(_x, _y) {
  function x() { return _x }
  function y() { return _y }

  function length() {
    return Math.sqrt((_x * _x) + (_y * _y))
  }

  function substract(v) {
    return vector(x - v.x(), y - v.y())
  }

  function multiply(lambda) {
    return vector(lambda * _x, lambda * y)
  }

  function divide(lambda) {
    return vector(_x / lambda, _y / lambda)
  }

  function normalize() {
    return divide(1 / length())
  }

  return { x, y, length, substract, multiply, divide, normalize }
}

vector.zero = function() { return vector(0, 0) }
vector.random = function() { return vector(Math.random(), Math.random()) }

vector.distance = function(v1, v2) {
  return v1.substract(v2).length()
}
