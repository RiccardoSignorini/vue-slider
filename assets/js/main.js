/*
---PROBLEMA---
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
*/

// INTESTAZIONE VUE
const {createApp} = Vue

createApp({
    data() {
        return{
            // VARIABILI
            imgActive: 0,
            
            copertine: {
                images:[
                    './assets/img/01.webp',
                    './assets/img/02.webp',
                    './assets/img/03.webp',
                    './assets/img/04.webp',
                    './assets/img/05.webp'
                ],
                titles:[
                    'Marvel\'s Spiderman Miles Morale',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    "Marvel's Avengers"
                ],
                texts:[
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',

                    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',

                    'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',

                    'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',

                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
                ]
            },
        }
    },
    methods: {
        // FUNZIONI
        next(){
            this.imgActive++
            if(this.imgActive>this.copertine.images.length-1){
                this.imgActive = 0
            }
        },
        prev(){
            if(this.imgActive==0){
                this.imgActive = this.copertine.images.length-1
            } else{
                this.imgActive--
            }
        },
        changeImg(index){
            this.imgActive = index
        }
    }
}).mount('#app')