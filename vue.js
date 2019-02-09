var vm = new Vue({
    el: '#inputForm',
    data: {
        inputString: '',
        inputData: [],
        wordCompare: [],
    },
    methods: {
        prependWord: function (inputString) {
            vm.inputData.push(this.inputString);
            vm.wordCompare.push(words.words1.pop());
            this.textField = '';
            this.inputString = '';
            this.$refs.textField.focus();
        },
    }
});

var words = new Vue({
    el: '#words',
    data: {
        words1: ["testar", "mitt", "program"],
    },
    methods: {
        reverseArray: function (array) {
            return array.slice().reverse();
        }
    }

});


var wordCheck = new Vue({
    el: '#wordCheck',
    data: {
        checkTrue: 'YES',
        checkFalse: 'NO',
        wordCountTemp: 0,
        wordCount: 0,

    },
    methods: {
        arrayCheck: function () {
            for (var i = 0; i < vm.inputData.length; i++) {
                if (vm.inputData[i] == vm.wordCompare[vm.wordCompare.length - 1 - i]) {
                    this.wordCount += 1;
                }
            }

            //this.wordCount = this.wordCountTemp;
        }
    },
});