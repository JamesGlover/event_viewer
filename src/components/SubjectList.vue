<template>
  <div>
    <SubjectCard v-for="subject in subjects"
               class="SubjectCard"
               :key="subject.id"
               :subject="subject"
               :active="subject.id == activeSubject"
               v-on:click.native="subjectClicked(subject.id)"></SubjectCard>
  </div>
</template>

<script>
// @ is an alias to /src

import Spinner from '@/components/Spinner.vue'
import SubjectCard from '@/components/SubjectCard.vue'

export default {
  name: 'subject-list',
  components: { Spinner, SubjectCard },
  props: {
    subjects: { type: Array, default: function () { return [] } }
  },
  data () {
    return { activeSubject: null }
  },
  methods: {
    subjectClicked (clicked) {
      this.activeSubject = clicked
      this.$emit('change', this.activeSubject)
    }
  }
}
</script>

<style scoped lang="scss">
  .SubjectCard { cursor: pointer; }
</style>
