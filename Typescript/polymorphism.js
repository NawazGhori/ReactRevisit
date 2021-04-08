//behaves like many is called polymorphism.It has 2 types:
//1.function overriding (dynamic polymorphism)
//2.function overloading (static polymorphism)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Function Overiding
//Overriding parent class functionality with child class functionality is called as
//Function Overriding
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.dbFun = function () {
        return "MySQL Data Soon...!";
    };
    ;
    return Parent;
}());
;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.dbFun = function () {
        return "MongoDB Data Soon...!";
    };
    ;
    return Child;
}(Parent));
;
var obj = new Child();
console.log(obj.dbFun());
var obj1 = new Child();
console.log(obj1.dbFun());
