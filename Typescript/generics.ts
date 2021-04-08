//generics are used to provide the type safety
//by using generics we will decide datatype dynamically

function fun_one<T>(arg1:T):T{
    return arg1;
}
console.log(fun_one<string>("Hello"));
console.log(fun_one<number>(100));
console.log(fun_one<boolean>(true));
console.log(fun_one<any>({"msg":"welcome to reactjs"}));
console.log(fun_one<string[]>(["Angular","ReactJS","VueJS"]));

function fun_two<A,B>(arg1:A,arg2:B):void{
    console.log(arg1,arg2)
}
fun_two<string,string>("hello1","hello2")
// fun_two(100,100); possible but not recommended
fun_two<number,number>(100,100);
fun_two<boolean,number>(true,100);

class class_one<A,B,C>{
    var_one:A;
    var_two:B;
    var_three:C;

    constructor(arg1:A,arg2:B,arg3:C){
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }

    fun_one<A>():any{
        return this.var_one;
    };

    fun_two<B>():any{
        return this.var_two;
    };

    fun_three<C>():any{
        return this.var_three;
    };
}

let obj:class_one<string,string,string> = new class_one("Angular","React","VueJS");
console.log(obj.fun_one(),obj.fun_two(),obj.fun_three());

let obj2:class_one<number,number,number> = new class_one(100,200,300);
console.log(obj2.fun_one(),obj2.fun_two(),obj2.fun_three());

let obj3:class_one<any,any,any> = new class_one({"key1":"ReactJS"},{"key1":"React Native"},{"key1":"NodeJS"})
console.log(obj3.fun_one(),obj3.fun_two(),obj3.fun_three());

interface interface1<A,B>{
    arg1:A;
    arg2:B;
    fun_one(arg1:A,arg2:B):any;
};

let obj4:interface1<string,string> = {
    arg1: "ReactJS",
    arg2: "Node",
    fun_one: (arg1:string,arg2:string):any=>{
        return arg1+" "+arg2
    }
}

console.log(obj4.arg1,obj4.arg2,obj4.fun_one(obj4.arg1,obj4.arg2));
