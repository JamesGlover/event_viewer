<template>
  <div class="home">
    <h1>Event Types</h1>
    <spinner v-if="loading"></spinner>
    <EventTypeCard v-for="event_type in event_types"
                   :key="event_type.id"
                   :eventType="event_type">
    </EventTypeCard>
  </div>
</template>

<script>
// @ is an alias to /src
import { EventType } from '@/api.js'
import EventTypeCard from '@/components/EventTypeCard.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'event-types',
  components: {
    EventTypeCard,
    Spinner
  },
  data () {
    return {
      loading: true,
      event_types: []
    }
  },
  methods: {
    async loadEventTypes () {
      this.loading = true
      this.event_types = (await EventType.all()).data
      this.loading = false
    }
  },
  created () { this.loadEventTypes() }
}
</script>
