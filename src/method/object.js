export function appendObject(currentObject, key, value) {
  if (value) {
    return {
      ...currentObject,
      [key]: value,
    }
  } else {
    return currentObject
  }
}

