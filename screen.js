function newScreen() {

  const _canvas = canvas()

  function canvas() {
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    return canvas
  }

  function width() { return window.innerWidth }
  function height() { return window.innerHeight }

	function center() {
		return vector(width() / 2, height() / 2)
	}

	function size() {
		return vector(width(), height())
	}

  function draw(drawers) {
		_canvas.width = width()
		_canvas.height = height()
    const context = _canvas.getContext("2d")
    context.clearRect(0, 0, width(), height())
    context.beginPath();
    drawers.forEach(drawer => drawer(context))
  }

  return { draw, width, height, center, size }
}
