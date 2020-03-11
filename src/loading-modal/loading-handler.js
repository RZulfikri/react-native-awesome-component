let _loading

export function setLoadingInstance(loading) {
  _loading = loading
}

export function showLoading() {
  if (_loading) {
    _loading.show()
  }
}

export function hideLoading() {
  if (_loading) {
    _loading.hide()
  }
}