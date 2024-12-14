var text1 = "aWesOmE";
document.write(text1.toUpperCase());
document.write("<br>");
document.write(text1.toLowerCase());
document.write("<br>");
document.write(text1.startsWith("aWe"));

var text2 = "I love JavaScript";
var a = new RegExp("JavaScript");
var result = a.test(text2);
document.write("<br>");
document.write(result);

document.write("<br>");
for(var i = 2; i <= 500; i = i + 2) {
    document.write(i);
    document.write(" ");
}

document.write("<br><br>");
var today = new Date().getDay();
document.write(today)

var display_day;
switch(today) {
    case 0:
        display_day = "Sunday";
        break;
    case 1:
        display_day = "Monday";
        break;
    case 2:
        display_day = "Tuesday";
        break;
    case 3:
        display_day = "Wednesday";
        break;
    case 4:
        display_day = "Thursday";
        break;
    case 5:
        display_day = "Friday";
        break;
    case 6:
        display_day = "Saturday";
        break;
    default:
        display_day = "Invalid day";
}
document.write(display_day);

document.write("<br><br>");
var date = new Date();
document.write("Today's date is " +date.getDate());