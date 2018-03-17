function checkNotNull(object) {
  if (object === null || object === undefined)
    throw "Empty object"    
  return object
}
