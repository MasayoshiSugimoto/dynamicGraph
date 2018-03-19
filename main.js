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

	const createLinks = (nodeNumber) => {
		const result = []
		for (let i = 0; i < nodeNumber; i++) {
			for (let j = i + 1; j < nodeNumber; j++) {
				result.push({ start: i, end: j })
			}
		}
		return result
	}

	const createNodes = (nodeNumber) => {
		const random = () => Math.random() + 1
		const result = []
		for (let i = 0; i < nodeNumber; i++) {
			result.push({ id: i, x: random(), y: random() })
		}
		return result
	}

	const nodeNumber = 3
	const graph = newGraph({
		nodes: createNodes(nodeNumber),
		links: createLinks(nodeNumber)
	})

  const vectorProjector = newVectorProjector(newUnitConverter())

  const draw = (screen => {
		const linkDrawers = graph.links()
			.map(link => linkDrawer(link, vectorProjector))
		const nodeDrawers = graph.nodes()
			.map(node => nodeDrawer(graph.nodeRef(node.id()), vectorProjector))
		return () => screen.draw(newList([linkDrawers, nodeDrawers]).flatten())
	})(screen())

	let lastTimeMillisecond = 0
	const updateFrame = () => {
		window.requestAnimationFrame(timeStampMillisecond => {
			const elapsedTimeMillisecond = timeStampMillisecond - lastTimeMillisecond
			const elapsedTimeSecond = Math.max(elapsedTimeMillisecond, 50) / 1000
			lastTimeMillisecond = timeStampMillisecond
			stabilizeGraph(graph, elapsedTimeSecond)
			draw()
			updateFrame()
		});
	}
	updateFrame()

	log.debug(`Printing graph...`)
	log.debug(graph.toJSON())
	log.info("Application finished")
}
