function main() {
  const log = logger("main")
  log.info("Starting application...")

  const vectorProjector = newVectorProjector(newUnitConverter())

  const node1 = newNode(0, vector(0.1, 0.2))
  const node2 = newNode(0, vector(1, 0.3))
  const link1 = newLink(node1, node2)
  screen().draw([
    nodeDrawer(node1, vectorProjector),
    nodeDrawer(node2, vectorProjector),
    linkDrawer(link1, vectorProjector)
  ])
}
