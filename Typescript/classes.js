/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;

        constructor(){
            this.sub_one = "ReactJS";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        };

        public getSubOne():string{
            return this.sub_one;
        };

        public getSubTwo():string{
            return this.sub_two;
        };

        public getSubThree():string{
            return this.sub_three;
        };

    };


    let obj:class_one = new class_one();
    console.log( obj.getSubOne(), obj.getSubTwo(), obj.getSubThree() );

    //ReactJS NodeJS MongoDB
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    class class_one{
        constructor(public arg1:string,
                    public arg2:string,
                    public arg3:string){}
    };
    let mean:class_one = new class_one("Angular","NodeJS","MongoDB");
    console.log( mean.arg1 , mean.arg2, mean.arg3 ) ;

    //if constructor members have public modifier, we cab access by using objects
    let mern:class_one = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( mern.arg1, mern.arg2, mern.arg3 );


    let mevn:class_one = new class_one("VueJS","NodeJS","MongoDB");
    console.log( mevn.arg1, mevn.arg2, mevn.arg3 );
*/
/*
    //getting the properties from parent class to child class called as inheritance
    //single level inheritance
    class class_one{
        public var_one:string;
        constructor(){
            this.var_one = "Hello_1";
        };
    };
    class class_two extends class_one{
        public var_two:string;
        constructor(){
            super();
            this.var_two = "Hello_2";
        };
    };

    //parent class contain(class_one) only one variable
    //child class contain (class_two) two variables

    let obj1:class_one = new class_one();
    console.log( obj1.var_one );                    //Hello_1

    let obj2:class_two = new class_two();
    console.log( obj2.var_one, obj2.var_two );          //Hello_1 Hello_2
*/
/*
    class class_one{
        private sub_one:string;
        constructor(){
            this.sub_one = "ReactJS";
        };
        public getSubOne():any{
            return this.sub_one;
        };
    };
    class class_two extends class_one{
        private sub_two:string;
        constructor(){
            super();
            this.sub_two = "MERN Stack";
        };
        public getSubTwo():any{
            return this.sub_two;
        }
    };
    let p:class_one = new class_one();
    console.log( p.getSubOne() );

    let c:class_two = new class_two();
    console.log( c.getSubOne(), c.getSubTwo() );

*/
/*
class Parent{
    public getSubOne():string{
        return "MEAN Stack";
    };
};

class Child extends Parent{
    public getSubTwo():string{
        return "MERN Stack";
    }
};

class SubChild extends Child{
    public getSubThree():string{
        return "MEVN Stack";
    };
};

//Parent class contain only one function
//@getSubOne()


//Child class contains two function
//@getSubOne()
//getSubTwo()


//SubChild class contain three functions
//@getSubOne()
//@getSubTwo()
//@getSubThree()

let p:Parent = new Parent();
console.log( p.getSubOne() );                       //MEAN Stack


let c:Child = new Child();
console.log( c.getSubOne(), c.getSubTwo() );            //MEAN Stack MERN Stack


let s:SubChild = new SubChild();
console.log( s.getSubOne(), s.getSubTwo(), s.getSubThree() );       //MEAN Stack MERN Stack MEVN Stack

*/
//inheritance
//getting properties from parent class to child class called as inheritance
//we will implement inheritance with the help of extends keyword
//types of inheritances
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hybrid inheritance
//5) hirarichal inheritance 
/*
    //single level inheritance
    class class_one{
        var_one:string = "Hello_1";
    };
    class class_two extends class_one{
        var_two:string = "Hello_2";
    };
    //class_one containes only one variable
    //class_two containes two variables

    let obj1:class_one = new class_one();
    console.log( obj1.var_one );

    let obj2:class_two = new class_two();
    console.log( obj2.var_one, obj2.var_two );
*/
/*
    class Parent{
        fun_one():string{
            return "Hello_1";
        };
    };

    class Child extends Parent{
        fun_two():string{
            return "Hello_2";
        };
    };

    let obj:Child = new Child();
    console.log( obj.fun_one(), obj.fun_two() );        //Hello_1 Hello_2
*/
/*
    //Multi Level Inheritance
    class class_one{
        sub_one:string = "Angular11";
        mean():string{
            return this.sub_one;
        };
    };

    class class_two extends class_one{
        sub_two:string = "ReactJS";
        mern():string{
            return this.sub_two;
        };
    };

    class class_three extends class_two{
        sub_three:string = "VueJS";
        mevn():string{
            return this.sub_three;
        };
    };

    //class_one containes @mean() function
    //class_two containes @mean(), @mern() functions
    //class_three containes @mean(), mern() and @mevn() functions
    let obj:class_three = new class_three();
    console.log( obj.mean(), obj.mern(), obj.mevn() );
    //Angular11 ReactJS VueJS
*/
/*
    class Parent1{};
    class Parent2{};
    class Child extends Parent1,Parent2{}
    //Multiple Inheritance not supported by TypeScript
*/
var Parent = /** @class */ (function () {
    function Parent() {
        this.var_one = "Hello_1";
    }
    return Parent;
}());
;
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_2";
        return _this;
    }
    return Child1;
}(Parent));
;
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_3";
        return _this;
    }
    return Child2;
}(Parent));
;
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_4";
        return _this;
    }
    return Child3;
}(Parent));
;
var obj1 = new Child1();
console.log(obj1.var_one, obj1.var_two); //Hello_1     Hello_2
var obj2 = new Child2();
console.log(obj1.var_one, obj2.var_two); //Hello_1     Hello_3
var obj3 = new Child3();
console.log(obj3.var_one, obj3.var_two); //Hello_1     Hello_4
