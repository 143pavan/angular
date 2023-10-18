function Test() {
    var marks = 25;
    var result = "Pass";
    if (marks < 35) {
        var result_1 = "Fail";
        console.log("Inside Result:" + result_1);
    }
    console.log("Outside Result " + result);
}
Test();
