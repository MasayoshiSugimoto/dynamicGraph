
function graph() {
  const _nodes = []
  const _links = []

  const idGenerator = () => {
    let id = 0
    return () => {
      id++
      return id
    }
  }()

  function getNode(nodeId) {
    const foundNodes = _nodes.filter(node => node.id() === nodeId)
    if (foundNodes === 0) return null
    if (foundNodes === 1) return _nodes[0]
    assert(true)
  }

  function addNode() {
    const id = idGenerator()
    _nodes.push(newNode(id, vector.random()))
    return id
  }

  function setNode(node) {
    _node = _nodes
      .filter(n => n.id() !== node.id())
      .concat([node])
  }

  function addLink(nodeId1, nodeId2) {
    _links.push(newLink(getNode(nodeId1), getNode(nodeId2)))
  }

  function links() { return newList(_links) }

  return { addNode, setNode, addLink, links }
}
