import {Action, ActionStatus, ActionClass} from "./action";

module App.Spec {
    
    type spec = "serverlessOTP" | "defragDisk" ;

    const specAll: Map<spec, string> = new Map([]);

    const actionStep = new Action("https://localhost:2020/recipes/defragDisk");

    specAll.set("defragDisk", "https://localhost:2020/recipes/defragDisk");
    specAll.set("serverlessOTP", "https://localhost:2020/recipes/twilioOTP");

    console.log(
        //addSpecStep("serverless", "serverless")
    );

};