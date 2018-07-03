<template>
  <b-list-group-item>
    {{ roleType }} : {{ subjectType }} : {{ subjectFriendlyName }}
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
    subjectType () { return this.role.subject.subjectType.key },
    subjectFriendlyName () { return this.role.subject.friendlyName }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
