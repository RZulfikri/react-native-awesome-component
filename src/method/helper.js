export function getFileNameFromPath(path) {
  return path.split(/(\\|\/)/g).pop()
}

export function getFileNameFromURL(url) {
  const urlParse = URL.parse(url)
  const { pathname } = urlParse
  return getFileNameFromPath(pathname)
}