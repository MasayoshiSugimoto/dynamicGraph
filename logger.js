function logger(_className) {

  checkNotNull(_className)

  const  ERROR    =  {  id:  0,  text:  "ERROR"    }
  const  WARNING  =  {  id:  1,  text:  "WARNING"  }
  const  INFO     =  {  id:  2,  text:  "INFO"     }
  const  DEBUG    =  {  id:  3,  text:  "DEBUG"    }

  const maxLevel = DEBUG

  function log(level, text) {
    if (level.id <= maxLevel.id)
      console.log(`[${_className}][${level.text}] ${text}`)
  }

  function info(text)     { log(INFO, text)    }
  function warning(text)  { log(WARNING, text) }
  function error(text)    { log(ERROR, text)   }
  function debug(text)    { log(DEBUG, text)   }

  return { info, warning, error, debug }
}
