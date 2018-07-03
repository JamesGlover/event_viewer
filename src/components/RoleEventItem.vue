<template>
  <b-list-group-item>
    {{ roleType }} : {{ eventType }} : {{ occuredAt }}
  </b-list-group-item>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    id: String,
    role: Object
  },
  computed: {
    roleType () { return this.role.roleType.key },
    eventType () { return this.role.event.eventType.key },
    occuredAt () { return new Date(this.role.event.occuredAt).toLocaleString() }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
