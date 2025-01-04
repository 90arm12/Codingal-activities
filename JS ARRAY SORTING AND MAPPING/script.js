const arr = [6,3,1,2,9,8,7,4];

document.getElementById("show_array").innerHTML = arr;

function asc() {
    arr.sort(function(a,b) {
        return a - b;
    });
    document.getElementById("show_array").innerHTML = arr;
}
function dsc() {
    arr.sort(function(a,b) {
        return b - a;
    });
    document.getElementById("show_array").innerHTML = arr;
}
const arr2 =["banana","orange","apple"];
document.getElementById("show_array2").innerHTML = arr2;
arr2.sort();
document.getElementById("show_array2").innerHTML = arr2;
arr2.reverse();
document.getElementById("show_array2").innerHTML = arr2;

const arr3 = [3,6,7,8];
document.getElementById("mapped_array").innerHTML = arr3;
function square() {
    const mapped_arr = arr3.map(function(e) {
        return e*e;
    })
    document.getElementById("mapped_array").innerHTML = mapped_arr;
}
document.write("<br>");
const a = 4;
document.write(eval("6+7-a"));