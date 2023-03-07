var x = 5;
var y = "5";

var marks = 89

if (marks > 90){
    console.log("Topper")
}else if (marks > 80){
    console.log("Passed")
}else{
    console.log("Fail")
}

var str = "";

for (var i = 1; i <= 10; i++){
    str+= " " + i
    if (i === 3){
        break;
    }
}
console.log(str)

var str = "";
var i = 1;
while (i <= 10){
    str += " " + i
    i++
}
console.log(str)