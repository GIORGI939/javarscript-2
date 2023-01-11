// task1
// let sampleObject  = function () {
//     isItarable = false,
//     sampleArray = [12,63,21,34,98,57]
// }
// let itarable = `"provided array isn't itarable"`
// console.log(itarable);

// let sampleObject1 = function () {
//     isItarable = true,
//     sampleArray = [12,63,21,34,98,57]
// }
// for(let i=0; i< sampleObject1.sampleArray.length; i++) {
//     console.log(sampleObject1.sampleArray[i]);
// }
let sampleObject = {
    isItarable: true,
    sampleArray : [12,63,21,34,98,57]
}
function check (obj) {
if (obj.isItarable) {
for (let index = 0; index < obj.sampleArray.length; index++) {
    console.log(obj.sampleArray[index]);
} 
}else console.log("provided array isn't itarable");
}
check (sampleObject)

// task2
function checkPythagoras (x,y,z) {
if(x**2+y**2===z^2){
    console.log(true);
}else return `false`;
}
checkPythagoras (3,4,5); 

function checkPythagoras (x,y,z) {
if(x**2+y**2===z**2){
console.log(false);
} else return `true`
}
checkPythagoras (4,5,6); 
// ან ესეც კეთდება
function pythagorasNumber(a,b,c) {
return a**2+b**2===c**2
}
function pythagora(x,y,z) {
return pythagorasNumber(x,y,z) ||pythagorasNumber(y,z,x)||pythagorasNumber(y,x,z)
}
const checkRes = pythagora (3,4,5)
console.log(checkRes);


// task3
const numbersArr = [2,14,25,75,11,6];
function minMax (arr) {
let min= arr[0];
let max =arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]<min) {
        min=arr[i]
    }
    if (arr[i]>max) {
        max=arr[i]
    }
}
return `Min value is ${min} and Max value is ${max}`
}
console.log(minMax(numbersArr));
// მეორე ხერხი
const numbersArr1 = [2,14,25,75,11,6];
let min= Math.min(...numbersArr1);
let max=Math.max(...numbersArr1)
console.log(min,max);


// task4
function checkDeg (deg) {
if (deg>0&&deg<90) {
    return `Acute angle: An angle between 0 and 90 degrees.`
}else if(deg===90) {
    return `Right angle: An 90 degree angle.`
} else if (deg>90 && deg <180) {
    return `Obtuse angle: An angle between 90 and 180 degrees.`
} else if (deg===180) {
    return `Straight angle: A 180 degree angle.`
}
}
console.log(checkDeg(92));

// task5
const students=[{name: `student1`, grade : 91}, 
           {name: `student2`, grade : 71}, 
           {name: `student3`, grade : 45} ]
function checkStudentGrade (studentsarray) {
for (let student of studentsarray) {
// for (let i = 0; i < studentArray.lenght; i++) {
//     const student = studentsarray[i]
    let grade=student.grade;
    let finalResult=``;
    if(grade>=0&&grade<51) finalResult=`F`;
    else if(grade>=51&&grade<=61) finalResult=`E`
    else if(grade>=61&&grade<=71) finalResult=`D`
    else if(grade>=71&&grade<=81) finalResult=`C`
    else if(grade>=81&&grade<=91) finalResult=`B`
    else if(grade>=91&&grade<=100)finalResult=`A` 
    else 
    student.finalResult=finalResult;
    }  
    return students 
}
const finalResult1= (checkStudentGrade(students));
console.log(finalResult1);