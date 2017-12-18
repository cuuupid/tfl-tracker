datasource = "https://raw.githubusercontent.com/pshah123/tfl-tracker/vue-bootstrap/src/data.json?token=AGo0THFmoGgaxkvjaYysrlWOX8rLiTaAks5aQMv6wA%3D%3D"

Vue.component('station-search', {
  template: '#station-search',
  data: function () {
    return {
      q: '',
      stations: []
    }
  },
  methods: {
    typeahead: function () {
      this.stations = []
      if(this.q == '') return; // no res for blank queries
      topk = 10 // load 10 results
      for (let station_info of App.stations) { // hijack station list from App
        if (this.stations.length == topk) break;
        if (station_info.name.toLowerCase().indexOf(this.q.toLowerCase()) > -1)
          this.stations.push(station_info)
      }
    }
  }
})

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
    $.getJSON(datasource, (json) => { this.stations = json })
  }
})