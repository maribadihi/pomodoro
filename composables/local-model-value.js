export const useLocalModelValue = ({ props, property = 'modelValue' }) => {
    const localModelValue = ref(unref(props[property]))
    const currentInstance = getCurrentInstance()
    
    watch(localModelValue, () => {
      debugger
      currentInstance.emit(`update:${property}`, localModelValue.value)
    })
  
    watch(() => props[property], (newValue) => {
      debugger
      localModelValue.value = newValue
    })
  
    return {
      localModelValue
    }
  }