var fruits = ['Orange','Watermelon','Strawberry','Grapes'];

document.write(fruits);
document.write("<br>");
document.write(fruits[1]);
document.write("<br>");
document.write(fruits[3]);
document.write("<br>");
document.write(fruits[2]);
document.write("<br>");
document.write(fruits[0]);

document.write("<br>");
document.write("<br>");
var joined_fruits = fruits.join(' - ');
document.write(joined_fruits);

document.write("<br>");
document.write("<br>");
fruits.pop();
fruits.pop();
document.write(fruits);

document.write("<br>");
document.write("<br>");

function add(a, b) {
    document.write("add() is called<br>");
    return a + b;
}
function average(a, b) {
    document.write("average() is called<br>");
    var add_result = add(a, b);
    return add_result/2;
}
document.write("main() is called<br>");
var result = average(3,4);
document.write(result);