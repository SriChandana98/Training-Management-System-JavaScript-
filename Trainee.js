function trainee()
{
    this.Trainee = [];
    this.insert = function(traineeObj)
    {
        this.Trainee.push(traineeObj)
    }

this.display = function()
{
    this.console.log(this.Trainee)
}
this.delete = function(index)
{
    this.Trainee.splice(index, 1);
}
}
var obj =new trainee();
var trainee1 = {name: "Kaushani", email: "cautioni@gmail.com", phoneNo : 8961686073};

var trainee2 = {name: "Chandana", email: "chandana@gmail.com", phoneNo : 8961234676};

var trainee3 = {name: "Riya", email: "RiyaB@gmail.com", phoneNo : 8961684563};

obj.insert(trainee1);
obj.insert(trainee2);
obj.insert(trainee3);
console.log("display after insertion");
obj.display();

console.log("display after deletion");
obj.delete(1);
obj.display();
