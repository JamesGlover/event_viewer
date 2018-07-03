<template>
  <b-card :title="eventType"
          class="m-2"
          :bg-variant="bgVariant"
          :text-variant="textVariant">
          <dl>
            <dt>Occurred at</dt><dd>{{ occcuredAt }}</dd>
            <dt>Performed by</dt><dd>{{ userIdentifier }}</dd>
          </dl>
          <b-list-group>
            <RoleSubjectItem v-for="role in roles" :key="role.id" :role="role"></RoleSubjectItem>
          </b-list-group>
    <p class="card-text"><small>Sent from {{ lims }}</small></p>
  </b-card>
</template>

<script>

import RoleSubjectItem from '@/components/RoleSubjectItem.vue'

export default {
  name: 'EventCard',
  props: {
    id: String,
    event: Object,
    active: Boolean
  },
  components: { RoleSubjectItem },
  computed: {
    occcuredAt () { return new Date(this.event.occuredAt).toLocaleString() },
    eventType () { return this.event.eventType.key },
    lims () { return this.event.limsId },
    userIdentifier () { return this.event.userIdentifier },
    bgVariant () { return this.active ? 'success' : 'light' },
    textVariant () { return this.active ? 'white' : 'black' },
    roles () { return this.event.roles }
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
