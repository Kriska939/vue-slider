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
            this.indexStart++;
        },

        // funzione decremento index al click:

        decreaseIndex() {
            this.indexStart--;
        }
    },

});