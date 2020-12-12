var App;
(function (App) {
    var Spec;
    (function (Spec) {
        var specAll = new Map([]);
        var actionStep = new Action("https://localhost:2020/recipes/defragDisk");
        specAll.set("defragDisk", "https://localhost:2020/recipes/defragDisk");
        specAll.set("serverlessOTP", "https://localhost:2020/recipes/twilioOTP");
        console.log(
        //addSpecStep("serverless", "serverless")
        );
    })(Spec = App.Spec || (App.Spec = {}));
})(App || (App = {}));
;
