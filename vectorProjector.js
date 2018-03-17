function newVectorProjector(_unitConverter) {

  checkNotNull(_unitConverter)

  function toDrawSpace(v) {
    return v.scale(_unitConverter.pixelPerMeter()) 
  }

  return { toDrawSpace }
}
