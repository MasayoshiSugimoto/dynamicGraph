function screen() {

  const _canvas = canvas()

  function canvas() {
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    return canvas
  }

  function getContext() { return _canvas.getContext("2d") }
  function width() { return window.innerWidth }
  function height() { return window.innerHeight }

  function draw(drawers) {
    const context = getContext()
    context.clearRect(0, 0, width(), height())
    context.beginPath();
    drawers.forEach(drawer => drawer(context))
  }

  return { draw }
}
