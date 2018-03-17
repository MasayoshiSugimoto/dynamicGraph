function linkDrawer(_link, _vectorProjector) {

  checkNotNull(_link)
  checkNotNull(_vectorProjector)

  return function draw(canvasContext) {

    const start = _vectorProjector.toDrawSpace(_link.startPoint())
    const end = _vectorProjector.toDrawSpace(_link.endPoint())

    canvasContext.beginPath();
    canvasContext.moveTo(start.x(), start.y());
    canvasContext.lineTo(end.x(), end.y());
    canvasContext.stroke();
  }
}
