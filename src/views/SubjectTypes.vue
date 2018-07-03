<template>
  <div class="home">
    <SubjectTypeCard v-for="subject_type in subject_types"
                   :key="subject_type.id"
                   :subjectType="subject_type">
    </SubjectTypeCard>
  </div>
</template>

<script>
// @ is an alias to /src
import { SubjectType } from '@/api.js'
import SubjectTypeCard from '@/components/SubjectTypeCard.vue'

export default {
  name: 'subject-types',
  components: {
    SubjectTypeCard
  },
  data () {
    return {
      subject_types: []
    }
  },
  methods: {
    async loadSubjectTypes () {
      this.subject_types = (await SubjectType.all()).data
    }
  },
  created () { this.loadSubjectTypes() }
}
</script>
