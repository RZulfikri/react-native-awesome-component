export function getFileNameFromPath(path) {
  return path.split(/(\\|\/)/g).pop()
}

export function getFileNameFromURL(url) {
  const urlParse = URL.parse(url)
  const { pathname } = urlParse
  return getFileNameFromPath(pathname)
}

export function isEmptyOrSpaces(str) {
  if (str) {
    return str.match(/^ *$/) !== null;
  }
  return true;
}