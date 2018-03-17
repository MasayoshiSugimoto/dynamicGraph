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

  function draw() {
    const context = getContext()
    context.clearRect(0, 0, width(), height())
    context.beginPath();
    context.arc(100,75,50,0,2*Math.PI);
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  return () => ({ draw })
}
