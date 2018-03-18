function main() {
  const log = logger("main")
  log.info("Starting application...")

  const generateId = (() => {
    let id = 0
    return () => {
      id++
      return id
    }
  })()

	const graph = newGraph({
		nodes: [
			{ id: 0, x: 0.1, y: 0.2 },
			{ id: 1, x: 1, y: 0.3 }
		],
		links: [
			{ start: 0, end: 1 }
		]
	})

  const vectorProjector = newVectorProjector(newUnitConverter())

  const draw = (screen => {
		const linkDrawers = graph.links()
			.map(link => linkDrawer(link, vectorProjector))
		const nodeDrawers = graph.nodes()
			.map(node => nodeDrawer(graph.nodeRef(node.id()), vectorProjector))
		return () => screen.draw(newList([linkDrawers, nodeDrawers]).flatten())
	})(screen())

	const updateFrame = () => {
		window.requestAnimationFrame(elapsedTimeMilliseconds => {
			stabilizeGraph(graph, elapsedTimeMilliseconds / 1000)
			draw()
			updateFrame()
		});
	}
	updateFrame()

	log.debug(`Printing graph...`)
	log.debug(graph.toJSON())
	log.info("Application finished")
}
