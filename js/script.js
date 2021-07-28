// check:
// console.log("Vue is working", Vue);

/* ESERCIZIO:

Rifare l'esercizio dello slider come fatto assieme in classe.
*/

Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data: {
        indexStart: 0,
        images: [
            "./img/image1.jpg",
            "./img/image2.jpg",
            "./img/image3.jpg",
            "./img/image4.jpg",
        ],
    },
    methods: {
        // applico classe "active" all'index corrente: 

        isActive(index) {
            return this.indexStart === index ? "active" : "";
        },

        // funzione incremento index al click:

        increaseIndex() {
            // -1 perché l'index viene analizzato al click:

            const maxIndex = this.images.length - 1;
            if (this.indexStart === maxIndex) {
                this.indexStart = 0;
            } else {
                this.indexStart++;
            }
        },

        // funzione decremento index al click:

        decreaseIndex() {
            const maxIndex = this.images.length - 1;
            if (this.indexStart === 0) {
                this.indexStart = maxIndex;
            } else {
                this.indexStart--;
            }
        },
    },

});