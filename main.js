function main() {
  const log = logger("main")
  log.info("Starting application...")
  log.error("error")
  log.warning("warning")
  log.info("info")
  log.debug("debug")
  
  screen()().draw()
}
