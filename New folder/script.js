var str = "hello how are you doing for the day";
var search_position = str.search("doing");

var txt = str.replace("how are","how are you");

var x = 70;
var y = 90;

document.getElementById("search_result").innerHTML = search_position;
document.getElementById("replace_result").innerHTML = txt;
document.getElementById("string_result").innerHTML = String(x)+String(y);