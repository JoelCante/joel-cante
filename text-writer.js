var dir = 1, id = 0, pos = 0; strpos = 0,clrpos = 0;
var speed = 140, time = 5000;


var str = new Array(1);
str[0] = "inspiran.";



window.onload = function() 
{
    setInterval('ParseText()', speed);
}

function ParseText()
{if(dir==1)setTimeout('AddChar()',1200);else RemChar() ;ShowItem();}
function AddChar()
{strpos ++;if(strpos>str[id].length) dir=-1;}

function RemChar()
{strpos --;if(strpos<0) {dir=1;}}

function ShowItem()
{var result = str[id].substring(0, strpos);
document.getElementById("writer-effect").innerHTML = result;
}
