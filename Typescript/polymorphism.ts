//behaves like many is called polymorphism.It has 2 types:
//1.function overriding (dynamic polymorphism)
//2.function overloading (static polymorphism)


//Function Overiding
//Overriding parent class functionality with child class functionality is called as
//Function Overriding


class Parent{
    dbFun():any{
        return "MySQL Data Soon...!";
    };
};

class Child extends Parent{
    dbFun():any{
        return "MongoDB Data Soon...!";
    };
};

let obj:Child = new Child();
console.log(obj.dbFun());

let obj1:Parent = new Child();
console.log(obj1.dbFun());

/*
Parent class and child class should have same function. 
Here Mysql data soon is overided by mongodb data soon.
we need inheritance for method overriding
*/

/*Function Overloading
same function with different arguments called as function overloading
we can implement function overloading with single class no need to have inheritance
*/

class class_one{
    display(arg1:string,arg2:string):any;
    display(arg1:number,arg2:number):any;
    display(arg1:boolean,arg2:boolean):any;
    display(arg1:any,arg2:any){
        return arg1+" "+arg2;
    };
};

let obj2:class_one = new class_one();
console.log(obj2.display("Hello1","hello2"));
console.log(obj2.display(true,false));
console.log(obj2.display(100,200));
    
// console.log(obj2.display(100,"Hello1"));  not possible as it is checking for 2 args  with similar function if we have
// display(arg1:any,arg2:any):any; then it is possible