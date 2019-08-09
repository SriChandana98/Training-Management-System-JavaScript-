function trainer(){   
    this.trainersss=[];
    this.insert =function(empobj){
        // this.emp ={};
        //console.log(this.trainersss);
    this.trainersss.push(empobj);
     //console.log(this.trainersss);
    //var uname =prompt("givename");
       
    //var exp=prompt("giveexp");
    //var sal =prompt("give sal");
       //this.emp.name=uname;
       //console.log(emp);


    }
    this.display= function(){
        console.log(this.trainersss);
    }
    this.delete= function(index){
        this.trainersss.splice(index,1);
        
    }
    
}
var obj = new trainer();
var emp1 = {name:"poojitha",experience: 11 ,salary:2000};
var emp2={name:"snehitha",experience: 12, salary:2000};
var emp3={name:"riya",experience: 13, salary:2000};
obj.insert(emp1);
obj.insert(emp2);
obj.insert(emp3);
console.log("display after insertion");
obj.display();

console.log("display after deletion");
obj.delete(1);
obj.display();