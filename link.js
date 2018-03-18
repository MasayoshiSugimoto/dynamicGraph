function newLink(_graph, _startNodeId, _endNodeId) {

	checkNotNull(_graph)
  checkNotNull(_startNodeId)
  checkNotNull(_endNodeId)

	function startNode() { return _graph.getNonEmptyNode(_startNodeId) }
	function endNode() { return _graph.getNonEmptyNode(_endNodeId) }

	function startPoint() { return startNode().position() }
	function endPoint() { return endNode().position() }

	function toJSON() {
		return "{"
			+ `"_startNode":${_startNodeId},`
			+ `"_endNode":${_endNodeId}`
			+ "}"
	}

  return {
		startNode,
		endNode,
		startPoint,
		endPoint,
		toJSON
	}
}
