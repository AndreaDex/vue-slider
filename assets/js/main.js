/* Descrizione:
 *Creare uno slider di immagini: potete usare le immagini che desiderate.
 *Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
 *Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)
 *Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
 *Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
 *Clicchiamo sui pallini e mostriamo l’immagine corrispondente
 */
const app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    gallery: [
      "./assets/img/alley.jpeg",
      "./assets/img/street_of_the_old_town.jpg",
      "./assets/img/summer_night.jpg",
      "./assets/img/the_bridges_of_amsterdam.jpg",
      "./assets/img/we_still_have_around.jpg",
    ],
  },
  methods: {
    prev() {
      if (this.counter <= 0) {
        return (this.counter = this.gallery.length - 1);
      }
      return this.counter--;
    },
    next() {
      if (this.counter >= this.gallery.length - 1) {
        return (this.counter = 0);
      }
      return this.counter++;
    },
    circleSelector(index) {
      this.counter = index;
    },
  },
  mounted() {
    console.log("ciao");
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (e.key === "ArrowRight") {
        if (this.counter >= this.gallery.length - 1) {
          return (this.counter = 0);
        }
        return this.counter++;
      } else if (e.key === "ArrowLeft") {
        if (this.counter <= 0) {
          return (this.counter = this.gallery.length - 1);
        }
        return this.counter--;
      }
    });
  },
});
