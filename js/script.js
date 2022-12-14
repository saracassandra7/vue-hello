/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico


Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un testo*/ 

const {createApp} = Vue;

createApp({
  data(){
    return{
      messaggio: 'ciao Vue!',
      mioColore: 'rosso',
      path: 'img/',
      nomeImg: 'pianeta.jpg',
      isShown: true
    }
  },

  methods:{
    colorChange(colore){
      this.mioColore = colore;
    },

    imgChange(NewNomeImg){
      this.nomeImg = NewNomeImg;
    },

    invertShow(){
      this.isShown = !this.isShown
    }
  }

}).mount('#app')