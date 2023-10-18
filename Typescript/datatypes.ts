enum StudentResult{
    Pass=0,
    Fail=-1,
    Distinction=1

}
function Student(){
    var stdId:number=123;
    let stdName:string="pavan";
    let isActive:boolean=true;
    let marks:number[]=[67,89,90,90];
    let subjects:Array<string>=["telugu","english","mathemations"];
   // let totalMarks:number=marks[0]+marks[1]+marks[2];
   let totalMarks:number=0;
    for(var i=0;i<marks.length;i++){
        totalMarks=totalMarks+marks[i];
    }
    console.log("Total Marks:"+totalMarks);
    let msg:string="Student ID:"+stdId+"\nStudentName:"+stdName+"\nStudent Status:"+isActive;
    console.log(msg);

}
Student();