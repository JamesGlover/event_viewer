<template>
  <b-progress :precision="1" :value="value" :max="max" :variant="variant" animated></b-progress>
</template>

<script>
export default {
  props: {
    text: { type: String, default: 'Loading...' },
    variant: { type: String, default: 'info' },
    value: { type: Number, default: 100 },
    max: { type: Number, default: 100 }
  }
}
</script>

<style scoped>
</style>
