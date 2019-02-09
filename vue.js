var vm = new Vue ({
    el: '#inputForm',
    data: {
        inputString: '',
        inputData: [],
    },
    methods: {
        prependWord: function(inputString) {
            vm.inputData.push(this.inputString);
            words.words1.pop();
            this.textField = '';
            this.inputString = '';
            this.$refs.textField.focus();
        },
    }
});

var words = new Vue ({
    el: '#words',
    data: {
        words1: ["testar", "mitt", "program"],
    },
    methods: {
        reverseArray: function(array) {
            return array.slice().reverse();
        }
    }

});


/*
* Check if inputData == words1
var wordCheck = new Vue ({
    el: '#wordCheck',
    data: {
        checkTrue: 'YES',
        checkFalse: 'NO',

    },
    methods: {
        arrayCheck: function() {
          for (var i = 0)
        }
    },
});
*/