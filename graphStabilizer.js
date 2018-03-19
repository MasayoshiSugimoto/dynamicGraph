function stabilizeGraph(graph, elapsedTimeSecond) {
  graph
    .links()
    .map(link => newSpring(link))
    .map(spring => spring.stabilize(elapsedTimeSecond))
    .flatten()
    .forEach(({ node, displacement }) => {
			graph.replaceNode(node().move(displacement))
		})
}
