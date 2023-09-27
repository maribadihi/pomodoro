<template>
<div>
    <button :class="type" :disabled="isDisabled">{{ content }}</button>
</div>

</template>
<script setup>
    import { string, oneOf, bool, number } from 'vue-types'

const props = defineProps({
  content: string(),
  disabled:bool().def(true),
  type:oneOf(['primary', 'secondary']).def('primary')
})

const { localModelValue} = useLocalModelValue({ props})
const { localModelValue: isDisabled} = useLocalModelValue({ props, property: 'disabled' })
</script>
<style scoped>
.primary{
    @apply bg-gray-300 font-bold text-current py-2 px-4 rounded-full w-80 my-3
}
.secondary{
    @apply bg-black font-bold  text-slate-50 py-2 px-4 rounded-full w-80 my-3
}

</style>