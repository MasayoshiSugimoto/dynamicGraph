function newGraph(_graphDefinition) {

	checkNotNull(_graphDefinition.nodes)
	_graphDefinition.nodes.forEach(validateNode)
	checkNotNull(_graphDefinition.links)
	_graphDefinition.links.forEach(validateLink)

  const instance = {
		nodes,
		getNode,
		nodeRef,
		getNonEmptyNode,
		replaceNode,
		links,
		toJSON
	}

	//Create nodes and links
	let _nodes = _graphDefinition.nodes.map(node =>
		newNode(node.id, vector(node.x, node.y))
	)
	const _links = _graphDefinition.links.map(link =>
		newLink(instance, link.start, link.end)
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

	function nodes() { return newList(_nodes) }

  function getNode(nodeId) {
		return _nodes.find(n => n.id() === nodeId)
  }

	function nodeRef(nodeId) {
		return () => getNonEmptyNode(nodeId)
	}

	function getNonEmptyNode(nodeId) {
		return newNode.check(getNode(nodeId))
	}

	function checkEmptyNode(node) {
		assert(node !== undefined)
		return node
	}
 
	function replaceNode(node) {
		const withoutNode = _nodes.filter(n => n.id() !== node.id())
		assert(_nodes.length - withoutNode.length === 1) 
		_nodes = withoutNode.concat([node])
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

	return instance
}
