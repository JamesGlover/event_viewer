<template>
  <b-card :title="name"
          class="m-2">
    <p class="card-text">{{ description }}</p>
  </b-card>
</template>

<script>
export default {
  name: 'SubjectTypeCard',
  props: {
    id: String,
    subjectType: Object
  },
  computed: {
    name () { return this.subjectType.key },
    description () { return this.subjectType.description }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
