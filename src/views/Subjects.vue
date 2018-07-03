<template>
  <div class="home">
    <b-row>
      <b-col>
        <Spinner v-if="subjectsLoading"></Spinner>
        <SubjectList :subjects="subjects" v-on:change="loadSubject"></SubjectList>
      </b-col>
      <b-col>
        <Spinner v-if="subjectLoading"></Spinner>
        <div v-if="activeSubject === null">
          <b-card>Please select a subject</b-card>
        </div>
        <SubjectCard v-if="activeSubject !== null" :subject="activeSubject">
          {{ activeSubject.subjectType.key }}
        </SubjectCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Subject } from '@/api.js'
import Spinner from '@/components/Spinner.vue'
import SubjectList from '@/components/SubjectList.vue'
import SubjectCard from '@/components/SubjectCard.vue'

export default {
  name: 'subjects',
  components: { SubjectList, SubjectCard, Spinner },
  data () {
    return {
      subjectList: Subject,
      subjects: [],
      subjectsLoading: true,
      subjectLoading: false,
      activeSubject: null
    }
  },
  methods: {
    async loadSubjects () {
      this.subjectsLoading = true
      this.subjects = (await Subject.includes('subject_type').all()).data
      this.subjectsLoading = false
    },
    async loadSubject (id) {
      this.subjectLoading = true
      this.activeSubject = (await Subject.includes(['subject_type', 'roles.event', 'roles.role_type', 'roles.event.event_type']).find(id)).data
      this.subjectLoading = false
    }
  },
  created () { this.loadSubjects() }
}
</script>
