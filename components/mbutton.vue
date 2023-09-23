<template>
<div>
    <button :class="type">{{ content }}</button>
</div>

</template>
<script setup>
    import { string, oneOf, bool, number } from 'vue-types'

const props = defineProps({
  content: string(),
  type:oneOf(['primary', 'secondary']).def('primary')
})
</script>
<style scoped>
.primary{
    @apply bg-gray-300 font-bold text-current py-2 px-4 rounded-full w-80 my-3
}
.secondary{
    @apply bg-black font-bold  text-slate-50 py-2 px-4 rounded-full w-80 my-3
}

</style>