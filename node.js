
function newNode(_id, _position) {
  let links = []

  function id() { return _id }
  function position() { return _position }
  function withPosition(position) { return newNode(_id, position) }
  function move(vector) { return withPosition(position() + vector) }

  return { id, position, withPosition, move }
}
