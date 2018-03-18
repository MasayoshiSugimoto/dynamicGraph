function checkNotNull(object) {
  if (object === null || object === undefined)
    throw "Empty object"    
  return object
}

function checkArray(array) {
	checkNotNull(array)
	if (! array instanceof Array)
		throw "Not an array"	
	return array
}

function assert(condition) {
	if (!condition) throw "Assertion failure"
}

function checkNumber(number) {
	if (new Number(number) === NaN || Number.isNaN(number))
		throw "Not a number"
}

