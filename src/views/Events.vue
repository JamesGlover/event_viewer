<template>
  <div class="home">
    <b-row>
      <b-col>
        <Spinner v-if="eventsLoading"></Spinner>
        <EventList :events="events" v-on:change="eventClicked" :activeEventId="active_event_id"></EventList>
      </b-col>
      <b-col>
        <Spinner v-if="eventLoading"></Spinner>
        <div v-if="activeEvent === null">
          <b-card>Please select an event</b-card>
        </div>
        <EventCard v-if="activeEvent !== null" :event="activeEvent">
          {{ activeEvent.eventType.key }}
        </EventCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Event } from '@/api.js'
import Spinner from '@/components/Spinner.vue'
import EventList from '@/components/EventList.vue'
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'events',
  components: { EventList, EventCard, Spinner },
  data () {
    return {
      eventList: Event,
      events: [],
      eventsLoading: true,
      eventLoading: false,
      activeEvent: null
    }
  },
  props: {
    active_event_id: String
  },
  methods: {
    async loadEvents () {
      this.eventsLoading = true
      this.events = (await Event.includes('event_type').all()).data
      this.eventsLoading = false
    },
    async loadEvent (id) {
      this.eventLoading = true
      this.activeEvent = (await Event.includes(['event_type', 'roles.subject', 'roles.role_type', 'roles.subject.subject_type']).find(id)).data
      this.eventLoading = false
    },
    eventClicked (id) {
      this.$router.replace({ name: 'event', params: { active_event_id: id } })
      this.loadEvent(id)
    }
  },
  created () {
    this.loadEvents()
    if (this.active_event_id) { this.loadEvent(this.active_event_id) }
  }
}
</script>
