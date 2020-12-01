const rootApp = new Vue({
  el: "#root",

  data: {
    insiemeAlbum: [],
    elementiFiltrati: []
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(result => {
        this.insiemeAlbum = result.data.response;
      });
  }
});
