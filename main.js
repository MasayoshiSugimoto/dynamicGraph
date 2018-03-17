function main() {
  const log = logger("main")
  log.info("Starting application...")

  const vectorProjector = newVectorProjector(newUnitConverter())

  const generateId = (() => {
    let id = 0
    return () => {
      id++
      return id
    }
  })()

  const node1 = newNode(generateId(), vector(0.1, 0.2))
  const node2 = newNode(generateId(), vector(1, 0.3))
  const link1 = newLink(node1, node2)
  screen().draw([
    nodeDrawer(node1, vectorProjector),
    nodeDrawer(node2, vectorProjector),
    linkDrawer(link1, vectorProjector)
  ])

	const graph = newGraph({
		nodes: [
			{ id: 0, x: 0.1, y: 0.2},
			{ id: 1, x: 1, y: 0.3}
		],
		links: [
			{ start: 0, end: 1 }
		]
	})

	log.debug(`Printing graph...`)
	log.debug(graph.toJSON())
	log.info("Application finished")
}
