const obj = {
    num: 1,
    whatIsThis: function() {
        console.log(this); // obj {num: 1, whatIsThis: ƒ}
    }
};

obj.whatIsThis();