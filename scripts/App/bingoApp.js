var app = new Vue({
    el: '#app',
    data: {
        numbersBSource: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        numbersISource: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        numbersNSource: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
        numbersGSource: [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
        numbersOSource: [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
        currentGame: {
            state: "",
            numbersB: [],
            numbersI: [],
            numbersN: [],
            numbersG: [],
            numbersO: [],
            numerosMarcados: [],
            tableStyle: {
                backgroundColor: "#fff"
            }
        },
        backgroundColors:[
            "#f5e7c6", "#c6f5f1", "#c6cbf5", "#e1c6f5", "#f5c6f1", "#f5c6d7"
        ],
        constants: {
        }
    },
    computed: {
        qtdeNumerosMarcados: function() {
            return 999;
            return this.currentGame.numerosMarcados.filter(t => t == true).length;
        }
    },

    mounted() {
        this.gerarCartela();
    },
    destroyed: function () {

    },

    methods: {
        // Cartela
        gerarCartela() {
            var vm = this;
            vm.resetNumerosMarcados();
            vm.currentGame.state = "on";
            vm.currentGame.tableStyle = vm.getRandomTableStyle();
            vm.currentGame.numbersB = vm.shuffleArray(vm.numbersBSource);
            vm.currentGame.numbersI = vm.shuffleArray(vm.numbersISource);
            vm.currentGame.numbersN = vm.shuffleArray(vm.numbersNSource);
            vm.currentGame.numbersG = vm.shuffleArray(vm.numbersGSource);
            vm.currentGame.numbersO = vm.shuffleArray(vm.numbersOSource);
        },

        marcarNumero(posicao) {
            let value = !this.currentGame.numerosMarcados[posicao];
            this.$set(this.currentGame.numerosMarcados,posicao, value)
        },

        getRandomTableStyle() {
            let max = this.backgroundColors.length;
            let idx = Math.ceil(Math.random()*max);
            idx = idx-1;
            console.log(idx);
            return {
                backgroundColor: this.backgroundColors[idx]
            };
        },

        resetNumerosMarcados() {
            var vm = this;
            //vm.currentGame.numerosMarcados = []
            vm.currentGame.numerosMarcados.length = 0;
            for(var i = 0; i < 24; i++) {
                vm.currentGame.numerosMarcados[i] = false;
            }
        },

        shuffleArray(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
    }
});