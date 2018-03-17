function main() {
  const log = logger("main")
  log.info("Starting application...")

  const vectorProjector = newVectorProjector(newUnitConverter())

  const node1 = newNode(0, vector(0.1, 0.2))
  screen().draw([
    nodeDrawer(node1, vectorProjector)
  ])
}
