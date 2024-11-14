//------------------------Day 1 Java-Script---------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------
//  1. Variables(Let,Const,Var)
// -------------------------------------------------------------------------

// var a = "Hello"; // Value can be updated and can be changed
// let a = "Hola"; // value can be updated but cancot be changed
// const a = "Hey"; // value cannot be updated and changed

// -------------------------------------------------------------------------
//  2. Datatypes(num,string,decimal,boolean,null,undefined etc.)
// -------------------------------------------------------------------------

// var a = "Hello" //String - World or Santances
// var a = 123 //Numbers value
// var a = 12.5 //Decimal value
// var a = true //Boolean - True or False value
// var a = null //Null - 0 value
// var a = undefined //Undefined - Don't Know but not 0


//------------------------Day 2 Java-Script---------------------------------------------------------------------------------------------

//------------------------Comments in Js------------------------//

//Comments  for  one  line
/*Comments  for  multiple  lines*/

//------------------------Operators in Js------------------------//

// -------------------------------------------------------------------------
//  1. Arithmetic Operators(+,-,*,/)
// -------------------------------------------------------------------------
// let x = 25; 
// let y = 5;
// Binary Operators(Needs two operants)
// console.log("Su(x + y) - " , x+y);
// console.log("Minus(x - y) - " , x-y);
// console.log("Multiply(x * y) - " , x*y);
// console.log("Devide(x / y) - " , x/y);
// console.log("Modulus[Remainder](x % y) - " , x%y);
// console.log("Exponential Function(x**y)" , x**y); //means x to the power y
// // unary Operators(Needs One operant)
// x++ ;
// console.log("Increment(x++) - " ,x); //x++ means x + 1
// y-- ;
// console.log("Decrement(Y--) - " ,y); //y-- means y - 1

// -------------------------------------------------------------------------
//  2. Assignments Operators(=,+=,-=,*=,%=,**=)
// -------------------------------------------------------------------------
// let x = 2; 
// let y = 6;
// console.log("Equals(x = y) - " , x = y); //means y value assigned to x
// console.log("(+=) - ", x+=2); //means x = x + 2
// console.log("(-=) - ", y-=2); //means y = y - 2  //etc(*=,%=,**=)

// -------------------------------------------------------------------------
//  3. Comparison Operators(==,===,!==,!=,<,<=,>,>=)
// -------------------------------------------------------------------------
// let x = 24;
// let y = 20;
// console.log("x==y - ", x==y); //EQUALS TO - check if x = y or not 
// console.log("x!=y - ", x!=y); //NOT EQUALS TO - check if x = y or not 
// let a = 5;
// let b = "5";
// console.log("a==b - ", a==b , "a!=b - ", a!=b); //EQUALS TO(==) , NOT EQUALS(!=) TO can be used with string value 
// //Strict Method of Equal (Never compare value other than a numerical value)
// console.log("a===b - ", a===b);
// console.log("a!==b - ", a!==b);
// console.log("x > y - " , x>y); //true
// console.log("x < y - " , x<y); //false
// console.log("x >= y - " , x>=y); // ture if x > y or x >= y
// console.log("x <= y - " , x<=y); // ture if x < y or x <= y

// -------------------------------------------------------------------------
//  4. Logical Operators(&&,||,!)
// -------------------------------------------------------------------------
//Logical And(&&) - Only returns true if all conditions are true otherwise false
// let a = 6;
// let b = 5;
// let condition1 = a > b; //true
// let condition2 = a >= b;  //true
// console.log("cond1 && cond2 - ", condition1 && condition2);
// //Logical Or(||) - return false if all conditions are false otherwise true
// let condition3 = a < b; // false
// let condition4 = a == b; //False
// console.log("Cond3 || Cond4 - ", condition3 || condition4);
// //Logical Not(!) - Convert True into False and False into True
// console.log("!(a > b) - " , !(a > b));