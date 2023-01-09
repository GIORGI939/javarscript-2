// task1
let sampleObject  = function () {
    isItarable = false,
    sampleArray = [12,63,21,34,98,57]
}
let itarable = `"provided array isn't itarable"`
console.log(itarable);

let sampleObject1 = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57]
}
for(let i=0; i< sampleObject1.sampleArray.length; i++) {
    console.log(sampleObject1.sampleArray[i]);
}

// task2
function checkPythagoras (x,y,z) {
    if(x**2+y**2===z^2){
        console.log(true);
    }else return `false`;
}
checkPythagoras (3,4,5); 

function checkPythagoras (x,y,z) {
if(x**2+y**2===z**2)
    console.log(true);
else {console.log(false);}
}

checkPythagoras (4,5,6); 

// task3
function minMax (a,b,c,d,e,f) {
    [2,14,25,75,11,6]
    console.log(`Min value is 2 and Max value is 75`); 
    return `Min value is 2 and Max value is 75`
}
minMax()

// task4
function checkDeg (deg) {
    Acute= deg<90,
    Right= deg==90,
    Obtuse= deg>90 && deg<180,
    Straight= deg==180.
}
    // if (deg<90||deg==90||deg>90 && deg<180||deg==180) {
    // } else{}
    if (deg==92) {
        console.log(Obtuse);
    } else return `false`

checkDeg(92)

// task5
function checkStudentGrade (A,B,C,E,F) {
    [
    {lado: student1, grade : 91}, 
    {nika: student2, grade : 71}, 
    {dato: student3, grade : 45}
]    
finalResult ={
    F : 0-50,
    E : 51-60,
    D : 61-70,
    B : 71-80,
    A : 81-100.
 }
if (grade=F) {
    return `name: student3; grade : 45, finalResult : 'F'`
}
if (grade=C) {
    return `name: student2; grade : 71,finalResult : 'C'`
}
if (grade=A) {
    return `name: student1; grade : 91 ; finalResult : 'A'`
}
}
checkStudentGrade()