var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var ChoreStore = (function () {
    function ChoreStore(http) {
        this.http = http;
        this.people = users;
    }
    ChoreStore.prototype.changeStatus = function (choreId, status) {
        var options = new angular2_1.RequestOptions();
        options.headers = new angular2_1.Headers();
        options.headers.append("Content-Type", "application/json");
        this.http.post("/chore/" + choreId, JSON.stringify({
            completed: status
        }), options).subscribe(function (res) {
            console.log(res);
        });
    };
    ChoreStore = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_1.Http])
    ], ChoreStore);
    return ChoreStore;
})();
exports.ChoreStore = ChoreStore;
