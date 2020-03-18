function FunctionObject() {
    console.log(this); // FunctionObject {}
}

new FunctionObject();