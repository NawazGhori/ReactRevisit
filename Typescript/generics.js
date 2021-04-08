//generics are used to provide the type safety
//by using generics we will decide datatype dynamically
function fun_one(arg1) {
    return arg1;
}
console.log(fun_one("Hello"));
console.log(fun_one(100));
console.log(fun_one(true));
console.log(fun_one({ "msg": "welcome to reactjs" }));
console.log(fun_one(["Angular", "ReactJS", "VueJS"]));
function fun_two(arg1, arg2) {
    console.log(arg1, arg2);
}
fun_two("hello1", "hello2");
fun_two(100, 100);
fun_two(true, 100);
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    class_one.prototype.fun_one = function () {
        return this.var_one;
    };
    ;
    class_one.prototype.fun_two = function () {
        return this.var_two;
    };
    ;
    class_one.prototype.fun_three = function () {
        return this.var_three;
    };
    ;
    return class_one;
}());
var obj = new class_one("Angular", "React", "VueJS");
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
var obj2 = new class_one(100, 200, 300);
console.log(obj2.fun_one(), obj2.fun_two(), obj2.fun_three());
var obj3 = new class_one({ "key1": "ReactJS" }, { "key1": "React Native" }, { "key1": "NodeJS" });
console.log(obj3.fun_one(), obj3.fun_two(), obj3.fun_three());
;
var obj4 = {
    arg1: "ReactJS",
    arg2: "Node",
    fun_one: function (arg1, arg2) {
        return arg1 + " " + arg2;
    }
};
console.log(obj4.arg1, obj4.arg2, obj4.fun_one(obj4.arg1, obj4.arg2));
