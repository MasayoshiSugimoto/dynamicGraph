
function newSpring(_link) {

  const stabilityLength = 1.0
  const interpolationSpeedPourcentage = 0.5

  function length() {
    return vector.distance(_link.startPoint(), _link.endPoint())
  }

  function displacement(applicationPoint, otherEnd, deltaLength) {
    const toOutside = otherEnd.substract(applicationPoint)
    if (toOutside.length() < MathUtil.EPSILON) return vector.zero()
    return toOutside
      .normalize()
      .scale(deltaLength)
  }

  function stabilize(elapsedTimeSecond) {
    const distanceToStability = stabilityLength - length()
    const deltaLength = (elapsedTimeSecond * interpolationSpeedPourcentage * distanceToStability)
    return newList([
      {
        node: _link.startNode(),
        displacement: displacement(_link.startPoint(), _link.endPoint(), deltaLength)
      },
      {
        node: _link.endNode(),
        displacement: displacement(_link.endPoint(), _link.startPoint(), deltaLength)
      }
    ])
  }

  return { stabilize }
}
