type spec = "serverlessOTP" | "defragDisk" ;

let specAll = new Set();
specAll.add(["defragDisk", "https://localhost:2020/recipes/defragDisk"]);
specAll.add(["serverlessOTP", "https://localhost:2020/recipes/twilioOTP"]);

console.log(specAll!);