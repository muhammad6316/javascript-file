                                                    
                                                    // chapter 1-8

                                                    // *****alerts*****
//Q1:
alert("This is my first java Script web");
//Q2:
alert("Error! Please enter a valid password");
//Q3:
alert("Welcome to JS Land...\n happy coding!")
//Q4:
alert("Welcome to JS Land...")

alert("Happy Coding!")
//Q5:
alert("Hello..! I can run JS through my web broswer's console")


                                                //*****variables for numbers*****
//Q1:
var age = "I am 15 years old"
alert(age)
//Q2:
var number = 14;
alert("You have visted this site" + number + "times")
//Q3:
var birthyear = "My birth year is"
var numbers = 1999
document.write(birthyear + numbers)
//Q4:
var Vsitorname = "John Doe"
var ProductTitle = "T-Shirt(s)"
var  Quantity = 5
document.write(Vsitorname + "orderd" + Quantity + ProductTitle +  "on XYZ Clothing store")

                                            // *****variables for strings*****
//Q1:
var username;
//Q2:
var myName = "Yousra Hassan";
//Q6:
var email = "s.yusrahassan.yh@gmail.com"
alert (email)
//Q7:
var book = "A smarter way to learn JavaScript."
alert("I am trying to learn from the Book" + book)
//Q8:
document.write("Yah! I can write HTML content through JavaScript");
//Q9:
var pattern = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(pattern)

                                        //*****varibales names: legal and illegal*****
//Q1:
var num1 , num2 , num3; 

//Q2: 
var  num1, myvar, my name, $2 , my document;
var num1 , myname , $sign , tilte , abc

                                                //*****maths expression*****
//Q1:
var num = 5; 
var num2 = 3;
var result = num + num2;
alert(result)
document.write("Sum of" + num + "and" + num2 + "is" + result)
//Q2:
var num = 5; 
var num2 = 3;
var result = num - num2;
alert(result)
document.write("Result of" + num + "and" + num2 + "is" + result)
//Q2:
var num = 5; 
var num2 = 3;
var result = num * num2;
alert(result)
document.write("Product of" + num + "and" + num2 + "is" + result)
//Q2:
var num = 5; 
var num2 = 3;
var result = num % num2;
alert(result)
document.write("Reminder of" + num + "and" + num2 + "is" + result)

//Q3:
var a 
document.write("Value  after  variable declaration is undefined" )
var a = 5;
document.write("<br>Initial Value is : 5")
a++;
document.write("<br>Value after Increment is: 6")
var b = a + 7;
document.write("<br>Value after addition is : 13")
b--;
document.write("<br>Value after Decrement is : 12")
b % 3;
document.write("<br>The remainder is : 0")
//Q6:
var C = 35;
F = (C *9/5) + 32
alert(F)
document.write(C + "C" + "is" + F + "F")
var F = 35;
C = (F - 32) *5/9
alert(C)
document.write(F + "F" + "is" + C + "C")
//Q7:
var Priceofitem1 =  650;
var Priceofitem2 = 100;
var Orderedquantityofitem1 = 3;
var Orderedquantityofitem2 = 7;
var Shippingcharges = 100;
var a = Priceofitem1 * Orderedquantityofitem1;
var b = Priceofitem2 * Orderedquantityofitem2;
var total = a + b + 100;
alert (total)
document.write("Price of item 1 is " + Priceofitem1 )
document.write("<br>Price of item 2 is " + Priceofitem2 )
document.write("<br>Ordered quantity of item 1 is" + Orderedquantityofitem1)
document.write("<br>Ordered quantity of item 2 is" + Orderedquantityofitem2)
document.write("<br>Shipping charges" + Shippingcharges)
document.write("<br>Total cost of your order is" + total)
//Q12:
var radius = 20;
var cc = 2*3.142*radius;
var area = 2*3.142*radius*radius;
document.write("Geometrizer <br>")
document.write("Radius of a circle:" + radius)
document.write("<br> Circumfrefnce of a circle:" + cc)
document.write("<br> Area of a circle:" + area)
//Q8:
var a = 804;
var b = 980;
var p = (a/b) * 100
alert (p)
document.write("Total marks:" + b)
document.write("<br>Obtained marks:" + a)
document.write("<br>Percentage" + p)
//Q10:
var n = 10;
var result = (10 + 5 * 10) / 2;
//Q11:
var currentyear = 2020;
var birthyear = 1999;
var age = currentyear - birthyear
document.write("Age Calculator <br>")
document.write("Current year is:" + currentyear)
document.write("<br> Birth year is:" + birthyear)
document.write("<br>Your age is:" + age)

//Q13:
var snack = lays;
var curage = 16;
var maxage = 50;
var perday = 3;
var tot = curage * perday;
document.write("The Lifetime Supply Calculator <br>")
document.write("<br> Favourite snack:" + snack)
document.write("<br> Current Age:" + curage)
document.write("<br> Estimated Maximum Age:" + maxage)
document.write("<br> Amout of snacks per day:" + perday)
document.write("<br> You will need" + tot + snack + "to last you until yhe ripe old age of" + maxage)


                                                    //chapters 9-11

//Q1:
var city = prompt("Enter city name")
if (city==="karachi"){
    document.write("<br>Welcome to the city of lights")
}
else{
    document.write("<br>Welcome but it is not the karachi")
}

//Q2:
var gender = prompt("Enter your gender")
if(gender==="Male"){
    document.write("<br> Good Morning Sir!")
}
if(gender==="Female"){
    document.write("<br> Good Morning Ma'am!")
}
//Q4:
var fuel = prompt("Enter your remaining fuel in car")
if(fuel<0.25){
    document.write("Please refill the fuel")
}
else{
    document.write("There is no need of fuel")
}

//Q5:
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}
//Q6:
var sub1 = parseInt (prompt("Enter the marks of subject 1"))
var sub1 = parseInt (prompt("Enter the marks of subject 1"))
var sub1 = parseInt (prompt("Enter the marks of subject 1"))
var totalmarks= prompt("Enter total marks")
var obtainedmarks = sub1 + sub2 + sub3
document.write("Total marks=" + "" + totalmarks);
document.write("Obtained marks=" + "" + obtainedmarks);
var per = obtainedmarks/totalmarks * 100
document.write("<br>Percentage = " + per)
if (per>=80 && per<=100){
     document.write("<br> Grade"+"A1")
     document.write("<br> Remarks : Excellent")
}
 if (per>=70 && per<=79){
     document.write("<br> Grade"+"A1")
     document.write("<br> Remarks : Good")
}
if (per>=60 && per<=69){
    document.write("<br> Grade"+"B")
    document.write("<br> Remarks : You need to improve")
}
if (per<59){
    document.write("<br> Fail")
    document.write("<br> Remarks : Sorry")
}
//Q10:
var t = prompt("Enter temperature:")
if(t>40){
    alert("Its too hot outside")
}
if(t>30){
    alert("The Weather today is Normal")
}
if(t>20){
    alert("Today's weather is cool")
}
if(t>10){
    alert("OMG!Today's weather is so cool")
}
//Q11:
var value1 = prompt("Enter your 1st value")
var opt = prompt("Enter operator")
var value2 = prompt("Enter your 2nd value")
console.log(value1 + opt + value2)
if(sign === "+"){
    alert(value1 + value2)
}
else if(sign === "-"){
    alert(value1 - value2)
}
else if(sign === "*"){
    alert(value1 * value2)
}
else if(sign === "/"){
    alert(value1 / value2)
}
else if(sign === "%"){
    alert(value1 / value2 * 100)
}
//Q9:
var a = prompt("Enter any number")
if(a % 2== 0){
    alert("The number is even")
} 
else{
    alert("The number is odd")
}
//Q8:
var n = prompt("Enter nmuber")
if(n / 3 == 0){
    alert("Number is divisible by 3")
}
else{
    alert("Not divisible")
}




                                                //chapter 12-13:

//Q4:
var ch = prompt("Enter something");
if (ch=='a'|| ch=='e' || ch=='i'|| ch=='o' || ch=='u'){
    document.write("<br> The input is Vowel")
}
else{
    document.write("<br> Its not a vowel")
}
//Q6:
var greeting;
var hour = 13;
if(hour<18){
    greeting = "Good Day";
    document.write("<br>" + greeting)
}
else{
    greeting = "Good Evening";
    document.write("<br>" + greeting)
}
//Q5:
var passw1 = ["saylani" , "saylani1"];
var passw2 = prompt("Enter valid password");
if (passw2===passw1[0] || passw2===passw1[1]){
    document.write("<be>Correct! the password you entered matches the original password")
}
else{
    document.write("<br>Incorrect password")
}
//Q3:
var num1 = prompt("Enter number");
if(num1<0){
    document.write("<br>The given number is positive")
}
if(num1>0){
    document.write("<br>The given number is negative")
}
if(num1<0){
    document.write("<br>The given number is zero")
}
//Q2:
var n1 = prompt("Enter number");
var n2 = prompt("Enter number");
if (n1>n2){
    document.write("<br>" + n1 + "/t is larger")
}
else if (n1<n2){
    document.write("<br>" + n2 + "/t is larger")
}
else if (n1==n2){
    document.write("<br> Both are equal")
}

                                            //chapter 17-20:

//Q1:
var arr=[],[];

//Q3:
var a;
for (a = 1; a<= 10; a++){
    document.write(a + "<br>")
} 

//Q4:
var a = prompt("Enter multiplication table no:");
var b = prompt("Enter table length")
for (var i = 1; i <= b; i++){
    document.write(a + "x" + i + "="+ a*i + "<br>")
}

//Q5:
var fruits = ["apple" , "banana" , "mango", "orange" , "strawberry"];
for (var i =0; 1 < fruits.length; i++){
    document.write(fruits[i] + "<br>")
}
//Q10:
var a;
for (a = 5; a<= 100; a+5){
    document.write(a + ",")
}
//Q8:
var arr=[24, 53, 78, 91, 12]
var min;
for(var i = 0; i>= arr; i++){
    if(min<arr[i])
    min = arr[i];
    console.log("The largest number is:" + arr[i])
}
//Q9:
var arr1=[24, 53, 78, 91, 12]
var min;
for(var i = 0; i< arr; i++){
    if(min>arr[i])
    min = arr[i];
    console.log("The smallest number is:" + arr[i])
}
                                            //*****ARRAYS*****
//Q1:
var myArray = [];
//Q2:
var myArray = myArray = new Array ();
//Q3:
var fruit = ["Mango", "Apple", "Banana"];
//Q4:
var myArray = [1,2,3];
//Q5:
var myArray = [];
var value = 2;
for(var i = 0; i < value; i++) {
   myArray.push(false);
}
alert(myArray);
//Q6:
var array = ["Cats" , 12 , 67 , "Apple"]
//Q7:
var qualification = ["SSC","HCS", "BS", "BCS","BCOM","MS","M.phil","P.hd"];
//Q10:
var score =[320, 230, 480, 120]
score.sort(function(a,b){return a - b});
//Q13:
var devices =["Keyboard", "Mouse", "Printer", "Monitor"]
devices.shift(); 
//Q14:
var devices = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");
var I = stack.pop();
alert(i);
                                        //*****chapter 6-9*****
//Q3:
var a = prompt("Enter name")
alert("Good morning!")
//Q5:
var a = prompt("Enter multiplication table no:");
for (var i = 1; i <= 10; i++){
    document.write(a + "x" + i + "="+ a*i + "<br>")
}
                                            //chapters 21-25

                                        //*****String Method*****
//Q1:
var firstname = window.prompt("Enter your firstname: ");
var lastname = window.prompt("Enter your lastname: ");
var fullname = firstname + ' ' + lastname;
alert("Your name is " + fullname);

                                            //chapters 26-30

                                        //*****Math Method*****
//Q1:
var num = prompt("Enter any positive number");
var a = Math.round(num);
document.write("Round off:" + a)
var b = Math.ceil(num);
document.write("<br>ceil value:" + b)
var c = Math.floor(num);
document.write("<br>floor value:" + c)
//Q2:
var num = prompt("Enter any negitive number");
var a = Math.round(num);
document.write("Round off:" + a)
var b = Math.ceil(num);
document.write("<br>ceil value:" + b)
var c = Math.floor(num);
document.write("<br>floor value:" + c)
//Q3:
var a =Math.abs(-4);
document.write(a)

//Q4:
var diceRoll = Math.floor( Math.random() * 6 ) +1;
alert('You rolled a ' + diceRoll);

//Q6:
Math.floor(Math.random() * 100 + 1);

//Q8:
var y = Math.floor(Math.random() );  
var guess = 1; 
  
document.getElementById("submitguess").onclick = function(){  
var x = document.getElementById("guessField").value; 

if(x == y) 
{     
   alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS ");
} 

                                            //chapter31-34

                                        //*****Date Method*****
//Q1:
var a = new Date();
alert(a)
//Q2:
var monthNames = ["Janurary", "Febraury", "March", "April", "May", "June", "July" , "August" , "September" , "October" , "November" , "December"];
var now = new Date();
var theMonth = now.getMonth();
var nameOfToday = monthNames[theMonth];
alert(theMonth)

//Q3:
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert("Today is " + theDay)
//Q4:
var a = saturday;
if(a === 0){
    alert("Its Fun day")
}
else alert(("Its not"))
//Q13:
var dob = new Date("Nov 11, 1999")
var dobmili = dob.getTime();
var today = new Date();
var todmili = today.getTime()
var diff = todmili - dobmili
var diffyear = diff/(1000*60*60*24*30*12)
var accuage = Math.floor(diffyear)
alert("Your age is" +" " + accuage)
//Q7:
var hours = new Date().getHours();
var hours = (hours+24-2)%24;
var mid="AM";
if(hours==0){ //At 00 hours we need to show 12 am
hours=12;
}
else if(hours>12)
{
hours=hours%12;
mid="PM";
}
alert ( mid);
//Q5:
var dat  
if(dat === new Date("15 june,2020")){
    alert("First fifteen days of the month")
}
if(dat != new Date("15 june,2020")){
    alert("Last days of the month")
}
//Q8:
var today = new Date();
var Laterdate = new Date(today.getFullYear(), today.getMonth()+1, 0);
alert("Later date:" + " " + Laterdate)

                                                //Chapters 34-38

                                             //*****Function*****
//Q2:
function greet(){
    var firstname = prompt("Enter first name")
    var lastname = prompt("Enter last name")
    var fullname = firstname + " " + lastname
    alert("Good Morning"+ " " + fullname)
}
greet();
//Q3:
function add(num, n){
    var num = prompt("Enter 1 number")
    var n = prompt("Enter 2 number")
    var z = num + n
    return z;
}
var x = add()
alert(x)
//Q4:
function calc(num1,opr,num2){
    if(opr ==="+"){
        return num1 + num2
    }
    if(opr ==="-"){
        return num1 - num2
    }
    if(opr ==="*"){
        return num1 * num2
    }if(opr ==="/"){
        return num1 / num2
    }
    else{
        return "Incorrect Operator"
    }
}
var result = calc(4,"+",6)
alert(result)
//Q5:
function sumOfSquares(num) {
    var i;
    for (i=0;i<=num;i++){
        var sum=0;
        var i = i*i;
        sum = i;
}
}
var num = parseInt(prompt("Enter a number:"));
alert (num);
//Q6:
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
}
  let n = 4;
  answer = factorial(n)
  alert("The factorial of " + n + " is " + answer);

//Q9:
function area (width,height ) {
    var width = prompt("Enter width of rectangle")
    var height = prompt("Enter height of rectangle")
    var a = width * height
    return a;
}
var x = area()
alert(x)
  
//Q7:
function count(){
    for (var input = 1; input <= 10; input++) {
        document.write(input);
    }
}
count();
//Q12:
function findlongestword(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
alert(findlongestword('Web Development Tutorial'));

//Q11:
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
alert(uppercase("the quick brown fox"));
//Q10:
function check_Palindrome(str_entry){
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        } 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
                ccount = (cstr.length - 1) / 2;
            }
        }
        for (var x = 0; x < ccount; x++) { 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        alert("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('madam');
    check_Palindrome('nurses run');
    check_Palindrome('fox');
//Q13:
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

alert(char_count( 'JSResourceS.com', 'o'));

