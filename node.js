function newNode(_id, _position) {

  checkNotNull(_id)
	vector.check(_position)

  const links = []

  function id() { return _id }
  function position() { return _position }
	function x() { return _position.x() }
	function y() { return _position.y() }
  function withPosition(position) { return newNode(_id, position) }
  function move(vector) { return withPosition(position().add(vector)) }
	function toJSON() {
		return `{"_id":${_id}, "_position":${_position.toJSON()}}`
	}

  return { id, position, x, y, withPosition, move, toJSON }
}

newNode.check = function(node) {
	checkNotNull(node)
	vector.check(node.position())
	return node
}
