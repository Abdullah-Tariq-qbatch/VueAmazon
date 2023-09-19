import { useToast } from 'vue-toastification'

const toast = useToast()

const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: false,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
}

export function triggerSuccessToast(message) {
  toast.success(message, options)
}

export function triggerErrorToast(message) {
  toast.error(message, options)
}
