var App = new Vue({
  el: '#app',
  data: function() {
    return {
      station: {},
      line: {},
      result: {}
    }
  },
  methods: {
    update: function() {
      this.$forceUpdate()
    }
  }
})