var classone = /** @class */ (function () {
    // readonly var_one ="Hello_1";
    function classone() {
        this.var_one = "hello_2";
    }
    return classone;
}());
var readonly_obj = new classone();
console.log(readonly_obj.var_one);
