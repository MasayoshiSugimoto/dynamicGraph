function newLink(_startNode, _endNode) {

  checkNotNull(_startNode)
  checkNotNull(_endNode)

  function startNode() { return _startNode }
  function endNode() { return _endNode }

  function startPoint() { return _startNode.position() }
  function endPoint() { return _endNode.position() }

	function toJSON() {
		return "{"
			+ `"_startNode":${_startNode.id()},`
			+ `"_endNode":${_endNode.id()}`
			+ "}"
	}

  return { startNode, endNode, startPoint, endPoint, toJSON }
}
