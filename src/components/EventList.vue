<template>
  <div>
    <EventCard v-for="event in events"
               class="EventCard"
               :key="event.id"
               :event="event"
               :active="event.id == activeEvent"
               v-on:click.native="eventClicked(event.id)"></EventCard>
  </div>
</template>

<script>
// @ is an alias to /src

import Spinner from '@/components/Spinner.vue'
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'event-list',
  components: { Spinner, EventCard },
  props: {
    events: { type: Array, default: function () { return [] } },
    activeEventId: { type: String, default: null }
  },
  data () {
    return { activeEvent: this.activeEventId }
  },
  methods: {
    eventClicked (clicked) {
      this.activeEvent = clicked
      this.$emit('change', this.activeEvent)
    }
  }
}
</script>

<style scoped lang="scss">
  .EventCard { cursor: pointer; }
</style>
