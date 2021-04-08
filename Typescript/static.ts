//static members , we can access direclty by using "class" name
//we can't access static members by using 'class' objects
/*
class class_one {
    static var_one:string;
    constructor(){
        this.var_one = "Hello_1";
    };
    //Note: we can't initialize static member by using constructor
}

*/

class static_ex {
    static var_one:string = "hello_1";
};
let obj:static_ex = new static_ex();
//obj.var_one;//