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

	const screen = newScreen()
	const createNodes = (nodeNumber) => {
		const random = () => Math.random() + 1
		const result = []
		const center = screen
			.center()
			.scale(1 / newUnitConverter().pixelPerMeter())
		for (let i = 0; i < nodeNumber; i++) {
			const v = vector.random().add(center)
			result.push({ id: i, x: v.x(), y: v.y() })
		}
		return result
	}

	const nodeNumber = 20
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
		return () => screen.draw(newList([/*linkDrawers, */nodeDrawers])
			.flatten())
	})(screen)

	let counter = 0
	let lastTimeMillisecond = 0
	const updateFrame = () => {
		window.requestAnimationFrame(timeStampMillisecond => {
			const elapsedTimeMillisecond = timeStampMillisecond - lastTimeMillisecond
			const elapsedTimeSecond = Math.min(elapsedTimeMillisecond, 50) / 1000
			lastTimeMillisecond = timeStampMillisecond
			stabilizeGraph(graph, elapsedTimeSecond)
			const clamp = (min, x, max) => Math.max(min, Math.min(x, max))
			graph.nodes().forEach(node => {
				const screenSize = screen.size()
					.scale(1 / newUnitConverter().pixelPerMeter())
				graph.replaceNode(node.withPosition(vector(
					clamp(0, node.x(), screenSize.x()),
					clamp(0, node.y(), screenSize.y())
				)))
			})
			draw()
			updateFrame()
		});
	}
	updateFrame()

	log.debug(`Printing graph...`)
	log.debug(graph.toJSON())
	log.info("Application finished")
}
