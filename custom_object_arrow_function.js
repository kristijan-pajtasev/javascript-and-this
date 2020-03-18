const obj = {
    num: 1,
    whatIsThis: () => {
        console.log(this); // window, not obj
    }
};

obj.whatIsThis();