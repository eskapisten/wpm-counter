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
            vm.inputData.push(this.inputString);
            vm.wordCompare.push(words.words1.pop());
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
        words1: ["vacuous",
            "cemetery",
            "follow",
            "hanging",
            "scold",
            "afterthought",
            "scare",
            "abundant",
            "cabbage",
            "giraffe",
            "violent",
            "power",
            "vague",
            "dusty",
            "spade",
            "nippy",
            "rub",
            "whistle",
            "attach",
            "slip",
            "writer",
            "permissible",
            "exchange",
            "reject",
            "acidic",
            "angle",
            "rhetorical",
            "eye",
            "train",
            "damage",
            "vagabond",
            "observant",
            "growth",
            "fuzzy",
            "unwritten",
            "vulgar",
            "suffer",
            "waiting",
            "advertisement",
            "gusty",
            "shelf",
            "design",
            "beautiful",
            "quartz",
            "yawn",
            "bath",
            "crow",
            "steel",
            "annoying",
            "giddy",
            "chalk",
            "pumped",
            "decorous",
            "group",
            "paltry",
            "oafish",
            "careful",
            "hook",
            "discreet",
            "support",
            "rightful",
            "pass",
            "push",
            "wooden",
            "changeable",
            "puzzling",
            "purple",
            "decay",
            "punishment",
            "callous",
            "materialistic",
            "destruction",
            "sweltering",
            "brake",
            "reason",
            "chilly",
            "vein",
            "stupendous",
            "skillful",
            "harmony",
            "kill",
            "door",
            "smile",
            "blue-eyed",
            "disgusting",
            "frame",
            "wanting",
            "sign",
            "mere",
            "ashamed",
            "overwrought",
            "judge",
            "distinct",
            "boundless",
            "collar",
            "hover",
            "bang",
            "rock",
            "tendency",
            "camp",
            "creator",
            "muddle",
            "lame",
            "spill",
            "alike",
            "selection",
            "lewd",
            "horrible",
            "pause",
            "confused",
            "honey",
            "burn",
            "object",
            "acoustic",
            "combative",
            "familiar",
            "actually",
            "curve",
            "graceful",
            "rapid",
            "quilt",
            "hurt",
            "pale",
            "dress",
            "salt",
            "cable",
            "amused",
            "good",
            "fairies",
            "chubby",
            "poised",
            "left",
            "suppose",
            "glove",
            "form",
            "pies",
            "hands",
            "greasy",
            "friends",
            "unknown",
            "tasty",
            "rake",
            "fetch",
            "anxious",
            "grape",
            "silky",
            "rain",
            "fresh",
            "sun",
            "assorted",
            "puny",
            "station",
            "house",
            "clumsy",
            "selfish",
            "vanish",
            "tawdry",
            "change",
            "passenger",
            "punish",
            "ear",
            "whimsical",
            "prevent",
            "volleyball",
            "waste",
            "possible",
            "song",
            "coach",
            "ruthless",
            "saw",
            "painful",
            "delay",
            "friendly",
            "jam",
            "identify",
            "cruel",
            "tearful",
            "berserk",
            "obtainable",
            "anger",
            "lackadaisical",
            "grade",
            "powder",
            "royal",
            "different",
            "base",
            "pleasure",
            "machine",
            "fear",
            "pack",
            "odd",
            "night",
            "consist",
            "general",
            "steam",
            "meat",
            "confess",
            "repulsive",
            "flimsy",
            "shade",
        ],
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