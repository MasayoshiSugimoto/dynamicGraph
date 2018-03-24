function stabilizeGraph(graph, elapsedTimeSecond) {
  const displacementsWithId = graph
    .links()
    .map(link => newSpring(link))
    .map(spring => spring.stabilize())
    .flatten()

	const maxForce = 2

	const accumulate = nodeId => {
		const displacements = displacementsWithId
			.filter(({ node, displacement }) => node().id() === nodeId)
			.map(({ node, displacement }) => displacement)
		if (displacements.length === 0) return vector.zero()
		return displacements
			.reduce(vector.add, vector.zero())
			.scale(10 * elapsedTimeSecond / displacements.length)
	}
	
	graph.nodes()
		.forEach(node =>
			graph.replaceNode(node.move(accumulate(node.id())))
		)
}
