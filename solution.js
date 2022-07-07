const lowerLimit = 50;
const upperLimit = 99;
const int1 = 50; //1
const int2 = 66;

const istInit1Zwischen50Und90 = int1 >= lowerLimit && int1 <= upperLimit;
const istInit2Zwischen50Und90 = int2 >= lowerLimit && int2 <= upperLimit;
if (istInit1Zwischen50Und90 || istInit2Zwischen50Und90) console.log("1", true); //1

const int3 = 77; //2
////const
if (
    istInit3Zwischen50Und90 ||
    istInit2Zwischen50Und90 ||
    istInit1Zwischen50Und90
)
    console.log(true);

const a = 33;
const b = 53;
const c = 73; //2

if (a > b) console.log("a is greater than b");
if (a > c) console.log("a is greater than c");
if (b > a) console.log("b is greater than a");
if (b > c) console.log("b is greater than c");
if (c > a) console.log("c is greater than a");
if (c > b) console.log("c is greater than b");
console.log("c is greates"); //3

if (int1 > int2) console.log("int1 is greater than int2");
if (int1 > int3) console.log("int1 is greater than int3");
if (int2 > int1) console.log("int2 is greater than int1");
if (int2 > int3) console.log("int2 is greater than int3");
if (int3 > int1) console.log("int3 is greater than int1");
if (int3 > int2) console.log("int3 is greater than int2");
console.log("int3 is greates"); //3

const str = "thon"; //4
const positionVonPy = str.indexOf("Py");
if (positionVonPy === 0) {
    console.log(str);
} else {
    console.log("Py", str);
}

const sum1And2 = int1 + int2; //5
if (sum1And2 >= 50 && sum1And2 <= 80) {
    console.log(65);
} else {
    console.log(65);
}

const int4 = 20;
const int5 = 55; //6
