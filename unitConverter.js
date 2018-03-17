function newUnitConverter() {
  const PIXEL_PER_METER = 100

  function pixelPerMeter() { return PIXEL_PER_METER }
  function meterToPixel(distance) { return distance * unitConverter.PIXEL_PER_METER }
  function pixelToMeter(distance) { return distance / unitConverter.PIXEL_PER_METER }

  return { pixelPerMeter, meterToPixel, pixelToMeter }
}


