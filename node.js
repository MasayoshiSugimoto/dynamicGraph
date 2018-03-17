function newNode(_id, _position) {

  checkNotNull(_id)
  checkNotNull(_position)

  const links = []

  function id() { return _id }
  function position() { return _position }
  function withPosition(position) { return newNode(_id, position) }
  function move(vector) { return withPosition(position() + vector) }
	function toJSON() {
		return `{"_id":${_id}, "_position":${_position.toJSON()}}`
	}

  return { id, position, withPosition, move, toJSON }
}
