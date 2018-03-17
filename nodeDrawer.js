function nodeDrawer(_node, _vectorProjector) {

  checkNotNull(_node)
  checkNotNull(_vectorProjector)

  const _logger = logger("nodeDrawer")
  const _radiusPixel = 10

  return function draw(canvasContext) {
    const screenPosition = _vectorProjector.toDrawSpace(_node.position())

    canvasContext.beginPath();
    canvasContext.arc(
      screenPosition.x(),
      screenPosition.y(),
      _radiusPixel,
      0,
      2*Math.PI
    );
    canvasContext.stroke();
    canvasContext.fillStyle = "black";
    canvasContext.fill();
  }
}
