function newGraph(_graphDefinition) {

	checkNotNull(_graphDefinition.nodes)
	_graphDefinition.nodes.forEach(validateNode)
	checkNotNull(_graphDefinition.links)
	_graphDefinition.links.forEach(validateLink)

	//Create nodes and links
	const _nodes = _graphDefinition.nodes.map(node =>
		newNode(node.id, vector(node.x, node.y))
	)
	const _links = _graphDefinition.links.map(link =>
		newLink(getNode(link.start), getNode(link.end))
	)

	function validateNode(node) {
		checkNotNull(node.id)
		checkNotNull(node.x)
		checkNotNull(node.y)
	}

	function validateLink(link) {
		checkNotNull(link.start)
		checkNotNull(link.end)
	}

  function getNode(nodeId) {
    const foundNodes = _nodes.filter(node => node.id() === nodeId)
    if (foundNodes.length === 0) return null
    if (foundNodes.length === 1) return _nodes[nodeId]
    assert(true)
  }

  function setNode(node) {
    _node = _nodes
      .filter(n => n.id() !== node.id())
      .concat([node])
  }

  function links() { return newList(_links) }

	function toJSON() {
		const nodes = _nodes.map(n => n.toJSON())
		const links = _links.map(l => l.toJSON())
		return "{"
			+ `"nodes":${nodes}`
			+ `"links":${links}`
			+ "}"
	}

  return { setNode, links, toJSON }
}
