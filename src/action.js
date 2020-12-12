"use strict";
exports.__esModule = true;
exports.Action = void 0;
var Action = /** @class */ (function () {
    function Action(url) {
        this.url = url;
        this.meaning = new Map();
    }
    Action.prototype.fetch = function () {
        //fetch using this.url
        this.meaning.set(this.url, "pending");
        return this.meaning;
    };
    return Action;
}());
exports.Action = Action;
