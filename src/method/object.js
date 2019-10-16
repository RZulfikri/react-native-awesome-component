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

export function appendChildToView(view, child) {
  if (view.props.children) {
    return {
      ...view,
      props: {
        ...view.props,
        children: [
          ...view.props.children,
          child,
        ]
      }
    }
  } else {
    return {
      ...view,
      props: {
        ...view.props,
        children: [
          child,
        ]
      }
    }
  }
}

