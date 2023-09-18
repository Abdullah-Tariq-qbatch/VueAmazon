import {  onBeforeUnmount, onMounted } from "vue";

export function useClickOutside(el_target_ref, callback_fn) {

  let listner = (e) => {
    if (e.target == el_target_ref || e.composedPath().includes(el_target_ref)) {
      return
    }

    if (typeof callback_fn == 'function') {
      callback_fn();
    }
  }

  onMounted(() => {
    window.addEventListener('click', listner)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', listner)
  })

  return {
    listner
  }
}
