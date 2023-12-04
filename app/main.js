const app = Vue.createApp({
    data() {
        return {
            greetings: "Hello World !",
        }
    },
    //? mounted = onLoad.
    mounted() {
        this.getSet1()
    },
    methods: {
        getSet1() {
            fetch('./riotDataDragon/set1-lite-fr_fr/fr_fr/data/set1-fr_fr.json')
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < 20; i++) {
                        let cardList = document.getElementById("cardlist")
                        console.log(data[i])
                        cardList.innerHTML +=
                        `
                        <div class="card">
                            <p>${data[i].name}</p>
                            <img src="${data[i].assets[0].gameAbsolutePath}">
                        </div>
                        `
                    }
                })
        }
    }
})

//? https://www.koderhq.com/tutorial/vue/http-fetch/
//Todo: Pagination pour alléger le temps de chargement