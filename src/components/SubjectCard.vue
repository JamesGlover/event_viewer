<template>
  <b-card :title="subjectType"
          class="m-2"
          :bg-variant="bgVariant"
          :text-variant="textVariant">
          <dl>
            <dt>Friendly Name</dt><dd>{{ friendlyName }}</dd>
            <dt>UUID</dt><dd>{{ uuid }}</dd>
          </dl>
          <b-list-group>
            <RoleEventItem v-for="role in roles" :key="role.id" :role="role"></RoleEventItem>
          </b-list-group>
  </b-card>
</template>

<script>

import RoleEventItem from '@/components/RoleEventItem.vue'

export default {
  name: 'SubjectCard',
  props: {
    id: String,
    subject: Object,
    active: Boolean
  },
  components: { RoleEventItem },
  computed: {
    friendlyName () { return this.subject.friendlyName },
    subjectType () { return this.subject.subjectType.key },
    uuid () { return this.subject.uuid },
    bgVariant () { return this.active ? 'success' : 'light' },
    textVariant () { return this.active ? 'white' : 'black' },
    roles () { return this.subject.roles }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  dl {
    dt { display: inline; padding-left: 1em; }
    dd { display: inline; padding-left: 0.5em; }
  }
</style>
