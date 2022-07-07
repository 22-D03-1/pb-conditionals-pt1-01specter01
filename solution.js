const int1 = 50; //1
const int2 = 66;

if (int1 >= 50 && int1 <= 99 && int2 >= 50 && int2 <= 99) console.log(true);

const int3 = 77; //2
if (
    int1 >= 50 &&
    int1 <= 99 &&
    int2 >= 50 &&
    int2 <= 99 &&
    int3 >= 50 &&
    int3 <= 99
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
if (str.includes("Py")) {
    console.log("thon");
} else {
    console.log("Python");
}
