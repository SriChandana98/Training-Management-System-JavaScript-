
function training(){
    /*this.departments=[
        this.trainee={id:[1,2,3],name:["poojitha","snehitha","chandhana","riya"]},
        this.trainer={id:[11,12,13],name:["aa","bb","cc"]},
        this.subject={id:[1,2,3],name:["linux","mariadb","js"]}
    ];*/

    this.traineeid=[1,2,3,4,5];
    this.traineename=["poojitha","snehitha","riya","chandana","kaushani"];
    this.trainerid=[11,12,13];
    this.trainername=["faculty1","faculty2","faculty3"];
    this.subjectid=[111,112,113];
    this.subjectname=["linux","maria db","js"];
    
    
this.trainee= function (id)
{
  
var i;
for(i=0;i<5;i++)
{
   
    if(id==obj.traineeid[i])
    {
        console.log(obj.traineename[i])
    }
}
}

this.traineeremove= function (id)
{
  var i;
for(i=0;i<5;i++)
{
   if(id==obj.traineeid[i])
    {
        obj.traineename.splice(i,1);
    }
}
console.log(obj.traineename);//to print the list after deletion
}
this.trainer=function (id)
{
var i;
for(i=0;i<3;i++)
{
    if(id==this.trainerid[i])
    {
        console.log(obj.trainername[i])
    }
}
}

this.trainerremove= function (id)
{
  var i;
for(i=0;i<3;i++)
{
   if(id==obj.trainerid[i])
    {
        obj.trainername.splice(i,1);
    }
}
console.log(obj.trainername);
}
this.subject=function (id)
{
var i;
for(i=0;i<3;i++)
{
   
    if(id==this.subjectid[i])
    {
        console.log(obj.subjectname[i])
        
    }
}
}
this.subjectremove= function (id)
{
  var i;
for(i=0;i<3;i++)
{
   if(id==obj.subjectid[i])
    {
        obj.subjectname.splice(i,1);
    }
}
console.log(obj.subjectname);
}
}

var obj=new training();
//var input= prompt("enter id number");
obj.trainee(1); //replace 1 with user input
obj.trainer(11);
obj.subject(111);
//obj.traineeremove(2);
//obj.trainerremove(12);
//obj.subjectremove(112);
