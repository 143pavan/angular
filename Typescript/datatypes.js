var StudentResult;
(function (StudentResult) {
    StudentResult[StudentResult["Pass"] = 0] = "Pass";
    StudentResult[StudentResult["Fail"] = -1] = "Fail";
    StudentResult[StudentResult["Distinction"] = 1] = "Distinction";
})(StudentResult || (StudentResult = {}));
function Student() {
    var stdId = 123;
    var stdName = "pavan";
    var isActive = true;
    var marks = [67, 89, 90, 90];
    var subjects = ["telugu", "english", "mathemations"];
    // let totalMarks:number=marks[0]+marks[1]+marks[2];
    var totalMarks = 0;
    for (var i = 0; i < marks.length; i++) {
        totalMarks = totalMarks + marks[i];
    }
    console.log("Total Marks:" + totalMarks);
    var msg = "Student ID:" + stdId + "\nStudentName:" + stdName + "\nStudent Status:" + isActive;
    console.log(msg);
}
Student();
