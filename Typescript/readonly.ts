class classone{
    readonly var_one;
    // readonly var_one ="Hello_1";
    constructor(){
        this.var_one = "hello_2";        
    }
}

let readonly_obj:classone = new classone();
console.log(readonly_obj.var_one)