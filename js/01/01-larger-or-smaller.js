function find_larger(num1,num2){
    if(num1>num2){
        document.write(num1);
    }
    else if(num2>num1){
        document.write(num2);
    }
    else{
        document.write("Both the numbers are equal");
        document.write(": "+num1);
    }
}

var entry = window.prompt("Enter First number: ");
num1 = parseFloat(entry,10);
var entry1 = window.prompt("Enter second number: ");
num2=parseFloat(entry1,10);
find_larger(num1,num2);