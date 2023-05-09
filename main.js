const toDoApp = Vue.createApp({
    data() {
        return {
            toDoItems: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Aggiustare Lavandino',
                    done: false,
                },
                {
                    text: 'Chiamare Nonna',
                    done: true,
                },
                {
                    text: 'Scaricare PDF lavoro',
                    done: true,
                },
                {
                    text: 'Mettere in carica il Trapano',
                    done: false,
                },
                {
                    text: 'Montare cuccia per Doggo',
                    done: false,
                },
                {
                    text: 'Lucidare il gatto',
                    done: true,
                },
                {
                    text: 'Accarezzare l\'argenteria',
                    done: false,
                },
                {
                    text: 'Ravvivare fiamma con i tizzoni',
                    done: true,
                },
                {
                    text: 'Pregare al sole',
                    done: true,
                }
            ],
            newItem: '',
        }
    },
    methods: {
        aggItem(newElement) {
            this.toDoItems.splice(0, 0, {"text" : newElement, "done" : false});
            this.newItem = "";
        },
        removeItem(index) {
            this.toDoItems.splice(index, 1);
        },
    }
}).mount('#app')