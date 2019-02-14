var vm = new Vue({
    el: '#inputForm',
    data: {
        inputString: '',
        inputData: [],
        wordCompare: [],
        timer: null,
        totalTime: 60,
        resetButton: false,
        timerOn: false,
    },
    methods: {
        prependWord: function (inputString) {
            vm.inputData.unshift(this.inputString.trim());
            vm.wordCompare.unshift(words.words1.shift());
            this.textField = '';
            this.inputString = '';
            this.$refs.textField.focus();
        },
        startTimer: function () {
            if (this.timerOn == false) {
                this.timer = setInterval(() => this.countdown(), 1000);
                this.resetButton = true;
            }
        },
        stopTimer: function () {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
        },
        padTime: function (time) {
            return (time < 10 ? '0' : '') + time;
        },
        countdown: function () {
            this.totalTime--;
            this.timerOn = true;
        },
    },
    computed: {
        minutes: function () {
            const minutes = Math.floor(this.totalTime / 60);
            return this.padTime(minutes);
        },
        seconds: function () {
            const seconds = this.totalTime - (this.minutes * 60);
            if (seconds == 1) {
                wordCheck.arrayCheck();
            }
            return this.padTime(seconds);
        },
    }
});

var words = new Vue({
    el: '#words',
    data: {
        words1: wordlist,
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
        wpm: 0,
        wordCount: 0,
        wordCorrect: [],
        noCharCorrect: 0,

    },
    methods: {
        arrayCheck: function () {
            for (var i = 0; i < vm.inputData.length; i++) {
                if (vm.inputData[i] == vm.wordCompare[i]) {
                    this.wordCount += 1;
                    this.wordCorrect.push(vm.wordCompare[i])
                }
            }
            this.charCount();
            this.wpm = this.noCharCorrect / 5;
        },
        charCount: function () {
            for (var i = 0; i < this.wordCorrect.length; i++) {
                this.noCharCorrect = this.noCharCorrect + this.wordCorrect[i].length;
            }
        }
    },
});

/*
var countdown = new Vue({
    el: '#countdown',
    data: {
        
    },
    methods: {
        startTimer: function () {
            this.timer = setInterval(() => this.countdown(), 1000);
            this.resetButton = true;
        },
        stopTimer: function () {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
        },
        countdown: function () {
            this.totalTime--;
        }
    }
});
*/