const {
  JSORMBase,
  attr,
  belongsTo,
  hasMany
  // etc
} = require('jsorm/dist/jsorm')

// define models
const ApplicationRecord = JSORMBase.extend({
  static: {
    baseUrl: 'http://localhost:3000',
    apiNamespace: '/api/v1'
  }
})

const Event = ApplicationRecord.extend({
  static: {
    jsonapiType: 'events'
  },
  attrs: {
    occuredAt: attr(),
    userIdentifier: attr(),
    limsId: attr(),
    eventType: belongsTo(),
    roles: hasMany(),
    subjects: hasMany()
  },
  methods: {}
})

const EventType = ApplicationRecord.extend({
  static: {
    jsonapiType: 'event_types'
  },
  attrs: {
    key: attr(),
    description: attr(),
    events: hasMany()
  },
  methods: {}
})

const Role = ApplicationRecord.extend({
  static: {
    jsonapiType: 'roles'
  },
  attrs: {
    roleType: belongsTo(),
    event: belongsTo(),
    subject: belongsTo()
  },
  methods: {}
})

const RoleType = ApplicationRecord.extend({
  static: {
    jsonapiType: 'role_types'
  },
  attrs: {
    key: attr(),
    description: attr(),
    roles: hasMany()
  },
  methods: {}
})

const Subject = ApplicationRecord.extend({
  static: {
    jsonapiType: 'subjects'
  },
  attrs: {
    friendlyName: attr(),
    uuid: attr(),
    subjectType: belongsTo(),
    roles: hasMany(),
    events: hasMany()
  },
  methods: {}
})

const SubjectType = ApplicationRecord.extend({
  static: {
    jsonapiType: 'subject_types'
  },
  attrs: {
    key: attr(),
    description: attr(),
    subjects: hasMany()
  },
  methods: {}
})

export { Event, EventType, Role, RoleType, Subject, SubjectType }
