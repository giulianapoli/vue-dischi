
const rootApp = new Vue({
  el: "#root",

  data: {
    insiemeAlbum: [],
    genereSelezionato: 'all',
    generi: ['all', 'pop', 'rock', 'metal', 'jazz' ],
    hover: false
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(result => {
        this.insiemeAlbum = result.data.response;
      });
  },


  computed: {
    elencoGeneri () {
      if(this.genereSelezionato === 'all') {
        return this.insiemeAlbum;
      }
      return this.insiemeAlbum.filter( element =>
        element.genre.toLowerCase() === this.genereSelezionato)

  }
}
});
