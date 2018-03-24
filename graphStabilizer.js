function stabilizeGraph(graph, elapsedTimeSecond) {
  const displacementsWithId = graph
    .links()
    .map(link => newSpring(link))
    .map(spring => spring.stabilize())
    .flatten()

	const accumulate = nodeId => {
		const displacements = displacementsWithId
			.filter(({ node, displacement }) => node().id() === nodeId)
			.map(({ node, displacement }) => displacement)
		if (displacements.length === 0) return vector.zero()
		return displacements
			.reduce(vector.add, vector.zero())
			//Length proportional to number of links
			.scale(1 / displacements.length) 
			.scale(10 * elapsedTimeSecond)
	}
	
	graph.nodes()
		.forEach(node =>
			graph.replaceNode(node.move(accumulate(node.id())))
		)
}
