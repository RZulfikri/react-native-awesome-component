const appendObject = (currentObject, key, value) => {
  if (value) {
    return {
      ...currentObject,
      [key]: value,
    }
  } else {
    return currentObject
  }
}

export default {
  appendObject
}