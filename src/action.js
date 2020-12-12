var App;
(function (App) {
    var Action;
    (function (Action) {
        class ActionClass {
            constructor(url) {
                this.url = url;
                this.meaning = new Map();
            }
            ;
            fetch() {
                this.meaning.set(this.url, "pending");
                return this.meaning;
            }
            ;
        }
        Action.ActionClass = ActionClass;
        ;
        ;
    })(Action = App.Action || (App.Action = {}));
})(App || (App = {}));
;
//# sourceMappingURL=action.js.map