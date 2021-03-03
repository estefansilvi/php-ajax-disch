new Vue({
  el: '#root',
  data: {
    disks: []
  },
  methods: {

  },
  mounted() {
    const self = this;
    axios
      .get('http://localhost/php-ajax-dischi/app/server.php')
      .then(function(the) {
        self.disks = the.data;
      })
  }
});

Vue.config.devtools = true;
