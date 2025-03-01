let val1 = prompt("Enter num 1 ");
let val2 = prompt("Enter num 2");
function mult(num1, num2)
{
    return num1 * num2;
}
document.write(mult(val1, val2));
//adding eventListeners to the id dontTouch which will bring a popup menu
//saying "OuCh StOp PoKiNg Me" in the browser when "click"ed

//Syntax (in my guess):

//  variable.addEventListener(event, function() {function definition});
document.getElementById("dontTouch").addEventListener("click", function() {
    alert("Ouch stop poking T T");
});