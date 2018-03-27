function stabilizeGraph(graph, elapsedTimeSecond) {
  const displacementsWithId = graph
    .links()
    .map(link => newSpring(link))
    .map(spring => spring.stabilize())
    .flatten()

	const maxForce = 10

	const accumulate = nodeId => {
		const displacements = displacementsWithId
			.filter(({ node, displacement }) => node().id() === nodeId)
			.map(({ node, displacement }) => displacement)
		if (displacements.length === 0) return vector.zero()
		return displacements
			.reduce(vector.add, vector.zero())
			.scale(50 * elapsedTimeSecond * elapsedTimeSecond)
	}
	
	graph.nodes()
		.forEach(node =>
			graph.replaceNode(node.move(accumulate(node.id())))
		)
}
