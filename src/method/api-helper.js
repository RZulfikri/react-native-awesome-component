import { showAlert200, showAlert400, showAlert500 } from "../connection-handler/connection-error-helper"

export function responseMonitoring(response, callback200, callback400, callback500) {
  const { status, config } = response
  if (status.toString().charAt(0) === '2' && config.method !== 'get') {
    showAlert200(response, callback200)
  }

  if (status.toString().charAt(0) === '4') {
    showAlert400(response, callback400)
  }

  if (status.toString().charAt(0) === '5') {
    showAlert500(response, callback500)
  }
}