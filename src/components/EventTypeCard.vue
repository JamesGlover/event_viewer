<template>
  <b-card :title="name"
          class="m-2">
    <p class="card-text">{{ description }}</p>
  </b-card>
</template>

<script>
export default {
  name: 'EventTypeCard',
  props: {
    id: String,
    eventType: Object
  },
  computed: {
    name () { return this.eventType.key },
    description () { return this.eventType.description }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
