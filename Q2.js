/*Write a program that uses the prompt method to ask the user for their name and then displays a personalized greeting using alert. 
Store the user's input in a variable named userName.*/

var userName = prompt("Please enter your name", "Your Name");

var greet = "Glad to see you here, I wish all the very best."

var gmsg = userName + "\n" + greet;

alert(gmsg);