var App = new Vue({
  el: '#app',
  data: function() {
    return {
      stations: {},
      station: {},
      line: {},
      result: {}
    }
  },
  methods: {
    update: function() {
      this.$forceUpdate()
    }
  },
  created: function() {
    $.getJSON('', (json) => { this.stations = json })
  }
})