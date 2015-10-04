/*    ---------------               BEGINNING OF MULTILINE COMMENT OF ALL CODE               ---------------- 



//               YOU WILL NOT SEE THE CONSOLE.LOG AND ALERT MESSAGES FROM THE SCRIPT.JS FILE   	 
//	                  - THE STEPS ARE  COMMENTED OUT  USING A MULTILINE COMMENT 
    			
//     	REMOVE THE FIRST AND LAST LINE OF THE MULTILINE COMMENT TO SEE THE CONSOLE.LOG AND ALERT
//     cleaned up the commented code - updated with part 1 - 13, 14,15,16 & part 2 death of javascript
//
//
//                       			 JOE MCDONALD       SEPT 24 2015
//
// ==========================================================================================================
// ==========================================================================================================
//						                 	 ASSIGNMENT     3 
//								           
//  ---------------------------------------------                            -------
 //  jQuery 
 //  !function(){
//	      console.log('self invoking anonymous funcion'); 
//   } ();
//
//       window.onLoad = function() {}      
 

//								               
//  ------------------------------------------     PART 1        ---------------------------   

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 1  ARRAY MOVIE - 2ND MOVIE   -------------   
console.log("\n\n----------  Part 1 STEP 1  -----------");
var movies = ["Godfather", "Gone With The Wind", "Lost", "The Deer Hunter ", "Saving Private Ryan"]; // BRACKET
console.log("movies array: " + movies);
for (var i = 1; i == 1; i++) {
	console.log(movies[i]);
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 2    ARRAY MOVIE - 1ST MOVIE   -------------
console.log("\n\n----------  Part 1 STEP 2 -----------");
var movies = new Array(5);				// CONSTRUCTOR
movies[0] = "Godfather";
movies[1] = "Gone With The Wind";
movies[2] = "Lost";
movies[3] = "The Deer Hunter ";
movies[4] = "Saving Private Ryan";
console.log("movies array: " + movies);
console.log(movies[0]);

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 3   ARRAY MOVIE - REPLACE MOVIE SPLICE   -------------
console.log("\n\n----------  Part 1 STEP 3  -----------");
var movies = new Array(5);					// CONSTRUCTOR
movies[0] = "Godfather";
movies[1] = "Gone With The Wind";
movies[2] = "Lost";
movies[3] = "The Deer Hunter ";
movies[4] = "Saving Private Ryan";
console.log("movies array: " + movies);

// -----

var removed = movies.splice(2, 1, "To Kill A Mockingbird-(new movie)");           // REPLACE A MOVIE	
console.log("movies array: " + movies);
console.log("number of movies " + movies.length);
console.log ("\nremoved movies from 3rd position; " + removed);       // MOVIE THAT WAS REMOVED

// ------

movies.push( removed);											// PUSHED MOVIE TO END
console.log("\nupdated movies array: " + movies);
console.log("number of movies " + movies.length);
console.log("\n");
for (var i = 0; i < movies.length; i++) {
	console.log("movie =  " + movies[i]);
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 4    ARRAY DELETE & SHIFT  -------------
console.log("\n\n----------  Part 1 STEP 4  -----------");
var movies = new Array(5);					// CONSTRUCTOR
movies[0] = "Godfather";
movies[1] = "Gone With The Wind";
movies[2] = "Lost";
movies[3] = "The Deer Hunter ";
movies[4] = "Saving Private Ryan";
console.log("movies array: " + movies);
console.log("number of movies  before delete " + movies.length);
console.log ("\n DELETE DOES NOT REMOVE THE ,  & THE LENGTH PROPERTY IS NOT UPDATED");
var removed = delete movies[0];

console.log ("\nremoved movies from 1st position ; " + removed);       // MOVIE THAT WAS DELETED
console.log ("it returns a BOOLEAN value");

console.log("\n");
console.log("movies array after the delete  - NOTE THE DIFFERENT WAYS THE ARRAY IS DISPLAYED  \n - 1ST WITH COMMA, 2nd WITH HIGHTEST INDEX, 3RD 'FOR LOOP ' WITH UNDEFINED ELEMENT ");

console.log("movies array after the delete: " + movies);		// NOTE THE COMMA - THE DELETE LEAVES HOLES 
console.log( movies);							// NOTE THAT THAT THE COMMA IS MISSING AND THE HIGHEST INDEX IS SHOWN 

console.log("\n");
for (var i = 0; i < movies.length; i++) {
	console.log("movie =  " + movies[i]);
}
console.log("\n number of movies 'HIGHEST INDEX (LENGTH), HAS NOT CHANGED " + movies.length);

// ---

console.log ("\n THE SHIFT MIGHT HAVE BEEN A BETTER CHOICE IN HOW IT COMPLETELY REMOVES THE ARRAY ELEMENT & \n THE LENGTH SHOWS AN ACCURATE UPDATED VALUE");

console.log("\n");
var movies = new Array(5);					// CONSTRUCTOR
movies[0] = "Godfather";
movies[1] = "Gone With The Wind";
movies[2] = "Lost";
movies[3] = "The Deer Hunter ";
movies[4] = "Saving Private Ryan";
console.log("movies array: " + movies);

console.log("number of movies  before shift " + movies.length);
var removed = movies.shift();
console.log ("\n removed movies from 1st position; " + removed);       // MOVIE THAT WAS SHIFT REMOVED

console.log("\n");
console.log("movies array after the shift : " + movies);
console.log("\n");
for (var i = 0; i < movies.length; i++) {
	console.log("movie =  " + movies[i]);	
}
console.log("number of movies after the shift " + movies.length);

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 5    ARRAY MOVIE  - 7 ELEMENTS - FOR LOOP   -------------
console.log("\n\n----------  Part 1 STEP 5   ARRAY MOVIE  - 7 ELEMENTS - FOR LOOP  -----------");

var movies = new Array(7);					// CONSTRUCTOR
movies[0] = "Godfather";
movies[1] = "Gone With The Wind";
movies[2] = "Lost";
movies[3] = "The Deer Hunter ";
movies[4] = "Saving Private Ryan";
movies[5] = "Forrest Gump";
movies[6] = "Fight Club";
var i;
for (i = 0; i < movies.length; i++ ) {
	console.log("movie =  " + movies[i]);
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 6    ARRAY MOVIE - FOR IN LOOP   -------------
console.log("\n\n ----------  Part 1 STEP 6     ARRAY MOVIE - FOR IN LOOP   ----------- ");

for (var i in movies) {
	console.log("movie =  " + movies[i]);	
}


//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 7    ARRAY MOVIE - FOR IN LOOP - SORTED   -------------
console.log("\n\n ----------  Part 1 STEP 7   ARRAY MOVIE - FOR IN LOOP - SORTED   ----------- ");

for (var i in movies.sort()) {
	console.log("movie =  " + movies[i]);	
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 8    2 ARRAYs favMovies leastFavMovies  -------------
console.log("\n\n----------  Part 1 STEP 8  2 ARRAYs favMovies leastFavMovies  -----------");

console.log("Movies I like: \n \n");
var movies = new Array(7);					// CONSTRUCTOR
movies[0] = "Godfather";
movies[1] = "Gone With The Wind";
movies[2] = "Lost";
movies[3] = "The Deer Hunter ";
movies[4] = "Saving Private Ryan";
movies[5] = "Forrest Gump";
movies[6] = "Fight Club";
for (var i in movies) {
	console.log( movies[i]);
}
	
console.log("\n\nMovies I reqret watching:\n\n");
var leastFavMovies = new Array(3);					// CONSTRUCTOR
leastFavMovies[0] = "Reefer Madness";
leastFavMovies[1] = "Robot Monster";
leastFavMovies[2] = "The Conqueror";
for (var i in leastFavMovies) {
	console.log(leastFavMovies[i]);
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 9    ARRAY CONCAT MERGE   -------------
console.log("\n\n ----------  Part 1 STEP 9    ARRAY CONCAT MERGE    ----------- ");

var favMovies = new Array(7);					// CONSTRUCTOR
favMovies[0] = "Godfather";
favMovies[1] = "Gone With The Wind";
favMovies[2] = "Lost";
favMovies[3] = "The Deer Hunter ";
favMovies[4] = "Saving Private Ryan";
favMovies[5] = "Forrest Gump";
favMovies[6] = "Fight Club";

var leastFavMovies = new Array(3);					// CONSTRUCTOR
leastFavMovies[0] = "Reefer Madness";
leastFavMovies[1] = "Robot Monster";
leastFavMovies[2] = "The Conqueror";

movies = favMovies.concat( leastFavMovies);				// CONCAT 
console.log("\n\nmovies =  " + movies);

console.log("\n\nMovies unsorted\n\n");
for (var i in movies) {
    console.log("movies =  " + movies[i]);
}

console.log("\n\nMovies sorted :\n\n");
for (var i in movies.sort()) {
    console.log("movies =  " + movies[i]);
}

console.log("\n\nMovies reverse sorted :\n\n");			// REVERSE SORT
for (var i in movies.reverse()) {
    console.log("movies =  " + movies[i]);
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 10    ARRAY MOVIE - LAST ITEM POP -------------
 console.log("\n\n----------  Part 1 STEP 10    ARRAY MOVIE - LAST ITEM  POP -----------");
for (var i in movies) {
    console.log("movies =  " + movies[i]);
}

console.log("\n");
console.log("number of movies - highest index before POP method  =   " + movies.length);
console.log("REMOVE movies last item using POP mmethod           =   " + movies.pop());	
console.log("number of movies - highest index after POP method   =   " + movies.length);

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 11    ARRAY MOVIE - FIRST ITEM  SHIFT  -------------
 console.log("\n\n----------  Part 1 STEP 11    ARRAY MOVIE - FIRST ITEM USING SHIFT -----------");

for (var i in movies) {
    console.log("movies =  " + movies[i]);
}

console.log("\n");
console.log("number of movies - highest index before SHIFT method      = " + movies.length);
console.log("REMOVE movie first item using shift method                       = " + movies.shift());
console.log("number of movies - highest index after SHIFT method       = " + movies.length);


//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 12    ARRAY MOVIE - INDEXOF SPLICE    -------------
console.log("\n----------  Part 1 STEP 12    ARRAY MOVIE - INDEXOF SPLICE   -----------");

console.log("\n\nmovies Array - before changes ------------ \n\n" );   // LISTS THE MOVIES ARRAY BEFORE CHANGES
for (var i in movies) {
    console.log("movies =  " + movies[i]);
}

console.log("\n\nleast Fav Movies Array ---------- \n\n");	            // LISTS THE LEAST FAV MOVIES ARRAY	
var leastFavMovies = new Array(3);					                    // CONSTRUCTOR
leastFavMovies[0] = "Reefer Madness";
leastFavMovies[1] = "Robot Monster";
leastFavMovies[2] = "The Conqueror";
for (var i in leastFavMovies) {
    console.log("least fav movies =  " + leastFavMovies[i]);
}

console.log("\n\nliked movie Array ------------ \n\n");	                // LISTS THE LIKED MOVIE ARRAY
var likedMovie = new Array(3);					                        // CONSTRUCTOR
likedMovie[0] = "12 Angry Men" ;    
likedMovie[1] = "Inception";
likedMovie[2] = "Pulp Fiction" ;
for (var i in likedMovie) {
    console.log("liked movie =  " + likedMovie[i]);
}

                               //   THIS REPLACES THE LEAST FAV MOVIES WITH LIKED MOVIES USING 2 ADDITIONAL ARRAYS --
for (var k in likedMovie) {	
    for (var i in leastFavMovies) {	
	  var matchedIndex = movies.indexOf(leastFavMovies[i]); 
	  if (matchedIndex >= 0 ){
	      movies.splice(matchedIndex, 1, likedMovie[k]);                     // REPLACE A MOVIE INDEXOF - SPLICE
          break;
		 }
     }
}

console.log("\n\nmovie Array - after replacing movies - ADD movies I like ---------- \n\n");     // LISTS THE MOVIES ARRAY AFTER CHANGES
for (var i in movies) {
    console.log("movies =  " + movies[i]);
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 13  - 2 ASSOCIATIVE ARRAYS    -------------
 console.log("\n\n----------  Part 1 STEP 13  - 2 ASSOCIATIVE ARRAYS     -----------");

var employee1 = [];
employee1["id"] = 100;
employee1["name"] = "Joe McDonald";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true; 
  
var employee2 = [];
employee2["id"] = 200;
employee2["name"] = "Zak Ruvalcaba";
employee2["title"] = "Instructor";
employee2["department"] = "Training";
employee2["isCurrent"] = true;

var employees = [];

employees.push(employee1); 
employees.push(employee2);

console.log("\n\n  employeeS ARRAY after push");
for (var i in employees) {  
console.log(employees[i]);  
 }

//   name of second employee
console.log( "\n\n 2nd   employees associative array name   " + employees[1]["name"]);  

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 14   ARRAY LOOP PRINT NAMES     -------------
 console.log("\n\n----------  Part 1 STEP 14   ARRAY LOOP PRINT NAMES          -----------");

var employee1 = [];
employee1["id"] = 100;
employee1["name"] = "Joe McDonald";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true; 
  
var employee2 = [];
employee2["id"] = 200;
employee2["name"] = "Zak Ruvalcaba";
employee2["title"] = "Instructor";
employee2["department"] = "Training";
employee2["isCurrent"] = true;

console.log("\n ------- name of both employees  --- for in LOOP " );
var k;
for (k in  employees) {
	if (employees.hasOwnProperty(k)) { // make sure none of the properties are unexpected results of inheritance
      console.log("employees name = : " + employees[k]["name"]);
	}
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------   STEP 15 	ASSOCIATIVE ARRAY THIRD EMPLOYEE  isCURRENT -------------
 console.log("\n\n----------  Part 1 STEP 15  ASSOCIATIVE ARRAY THIRD EMPLOYEE isCURRENT  -----------");

var employee1 = [];
employee1["id"] = 100;
employee1["name"] = "Joe McDonald";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 200;
employee2["name"] = "Zak Ruvalcaba";
employee2["title"] = "Instructor";
employee2["department"] = "Training";
employee2["isCurrent"] = true;

var employee3 = []; 
employee3["id"] = 300;
employee3["name"] = "Candye Kane";
employee3["title"] = "Singer";
employee3["department"] = "Entertainment";
employee3["isCurrent"] = false;

console.log("\n\n  employees MERGE instead of a PUSH");
var employees = [employee1,employee2,employee3]; 

for (var i in  employees) {
	if (employees.hasOwnProperty(i))  // make sure none of the properties are unexpected results of inheritance
      console.log(employees[i]);
}

//  employees employment status isCurrent
console.log("\n\n ------- employees employment status isCurrent " );

for (var i in employees) {  
   if (employees[i]["isCurrent"]){ 
       console.log(employees[i]);  
    } 
}

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 16 MULTI DIMENSIONAL ARRAY MOVIE NAME    -------------
//	        					filter out and display only the movie names from the array 
 console.log("\n\n----------  Part 1 STEP 16 MULTI DIMENSIONAL ARRAY MOVIE NAME  -----------");

var movies = [[ "Godfather", 1] , [ "Gone With The Wind", 2] , [ "Lost", 3] , ["The Deer Hunter ", 4] , [ "Saving Private Ryan", 4]];

console.log("list of multi-dimentional array " );
for (var i in movies) {								//  DISPLAY THE MULTI DIMENTIONAL ARRAY
console.log (movies[i] ) ;
}

console.log("\n\nfiltered movie names " );					//  FILTER MOVIE NAMES 
movies.forEach(function(movie) {
 var movieName = movie.filter(function(item) {
	   return typeof item === "string";
  });
console.log ( movieName ) ;								// LIST THE FILTERED MOVIES NAMES
});



//  ----------------------------------------------------------------------------------------
//  ------------------------------------------    FUNCTIONS      --------------------------- 
//  ----------------------------------------------------------------------------------------
//  --------------------------------       STEP 1    ANONYMOUS FUNCTION        -------------
 console.log("\n\n----------  STEP 1    ANONYMOUS FUNCTION                    -----------");

var prt = function displayMessage(parm1) {						//ANONYMOUS FUCTION
	console.log("STEP 1 parameter 1 : " + " " + parm1);
}
("Anonyous Function") ;

(function(parm2) {												// SELF INVOLKING ANONYMOUS FUNCTION 
	console.log("STEP 1 parameter 2 : " + " " + parm2);
}  
 ("Self Involking Anonymous Function"));


//  ----------------------------------------------------------------------------------------
//  --------------------------------       STEP 2    CALCULATE FUNCTION        -------------
 console.log("\n\n----------  STEP 2    CALCULATE FUNCTION                     -----------");

function calculate(p1, p2) {
		return ( p1 % p2);
}
var parm1 = 5, parm2 =2;
console.log("\n\n STEP 2 parm1 : " + " " + parm1 + "  parm2 : " + parm2 + "  modulus : " + calculate(parm1, parm2) );
//  ----------------------------------------------------------------------------------------
//  ------------------------ STEP 3    DECLARED FUNCTION  PASSING PARAMETERS   -------------
//							 passing array into anonymous function
 console.log("\n\n---------- STEP 3    DECLARED FUNCTION  PASSING PARAMETERS  -----------");

function showEmployee(emps) {
	for (i in emps) {
       console.log(emps[i]);
     }
}
var employees = new Array("Zak", "Fred", "Sally", "Jessica", "John", "Mike");
console.log("\n\nEmployees: \n\n");
showEmployee(employees);



//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  -------------------------------- PART 2 STEP 1   ROCK PAPER SCISSORS       -------------
console.log("\n\n---------- PART 2 STEP 1   ROCK PAPER SCISSORS               -----------");

var i = 0;
do {
	var choice = prompt("PART 2 STEP 1 - PLAYER - PLEASE ENTER - ROCK or PAPER or SCISSORS " , "lower case please").toLowerCase();
	if (choice !== "rock" && choice !== "paper" && choice !== "scissors" )			// TEST FOR VALID CHOICE ENTRY
	  {
		 i++
		 if ( i == 3 ) {
		   alert ("input invalid - you have tried " + i + " times \n Try again " ); 
			break;
		  }
	  }
	  else {
		break;
	   }
   }
	while ( i < 3 && choice !== "rock" && choice !== "paper" && choice !== "scissors") ;

//  ------------------------------------------      STEP 2   computerChoice        -------------   
	if (choice == "rock" || choice == "paper" || choice == "scissors" ) {			// IF VALID CHOICE - GENERATE RANDOM NUMBER
		var computerChoice = Math.random();
		alert("STEP 1 - computerChoice random number is " + computerChoice);
	}

//  ------------------------------------------     STEP 3   RESET computerChoice TO STRING     -------------   
if (choice == "rock" || choice == "paper" || choice == "scissors" ) {				// IF VALID CHOICE - SET THE COMPUTER CHOICE
	if (computerChoice  >= .7 ) {
      alert("STEP 3 - The computerChoice is greater than or equal to .7 which represents - ROCK ");
	  computerChoice = "rock";
    }    
     else if (computerChoice <= .3  ) {
     alert ("STEP 3 - The computerChoice is less than or equal to .3 which represents - PAPER");
	 computerChoice = "paper";
    }   
 	  else if (computerChoice < .7 ) {
      alert ("STEP 3 - The computerChoice is less than .7 which represents - SCISSORS");
	  computerChoice = "scissors";
    }   
}

//  ------------------------------------------      STEP 4 -     -------------   
 if (choice == "rock" || choice == "paper" || choice == "scissors" ) {			// CHECKS USERS CHOICE IN RELATION TO COMPUTER CHOICE
	if (computerChoice == "rock"  && choice == "rock" ) {
      alert("The computer choice was rock and you chose rock...tie!");
    }
       else if (computerChoice  == "rock" && choice == "paper" ) {
        alert ("The computer choice was rock but you chose paper...you win!");
    } 
       else if (computerChoice  == "rock" && choice == "scissors" ) {
        alert ("The computer choice was rock but you chose scissors...you lose!");
    } 
       else if (computerChoice  == "paper"  && choice == "rock" ) {
	  alert("The computer choice was paper and you chose rock...you lose!");
    }
       else if (computerChoice == "paper" && choice == "paper" ) {
        alert ("The computer choice was paper but you chose paper...tie!");
    } 
       else if (computerChoice  == "paper" && choice == "scissors" ) {
        alert ("The computer choice was paper but you chose scissors...you win!");
    } 	   
	   else if (computerChoice  == "scissors"  && choice == "rock" ) {
	  alert("The computer choice was scissors and you chose rock...you win!");
    }
       else if (computerChoice  == "scissors" && choice == "paper" ) {
        alert ("The computer choice was scissors but you chose paper...you lose!");
    } 
       else if (computerChoice  == "scissors" && choice == "scissors" ) {
        alert ("The computer choice was scissors but you chose scissors...tie!");
    } 	   
	   else  {
        alert ("Error -  the computer computerChoice was : " + computerChoice +  " & you entered = " + choice + "\n - either of which is an incorrect value try again");
    }
  }	

//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  --------------------------------           BASIC CALCULATOR        -------------
//                                     build a simpule calculator
 console.log("\n\n----------      BASIC CALCULATOR                    -----------");

var parm1 = prompt(" enter 1st number : " );
var parm2 = prompt(" enter 2nd number : " );
// ---
var i = 0;
do {
	var oper = prompt("PART 2 STEP 5 - PLAYER - PLEASE ENTER - add or subtract or multiply or divide " , "lower case please").toLowerCase();
	if (oper !== "add" && oper !== "subtract"  && oper !== "multiply" && oper !== "divide" )    // CHECKS FOR MISSING OPERATOR
	  {
		 i++
		 if ( i == 3 ) {
		   alert ("input invalid - you have tried " + i + " times \n Start again " );      // LIMITS THE NUMBER OF TRIES 
			break;
		  }
	  }
	  else {
		break;
	   }
   }
	while ( i < 3 && oper !== "add" && oper !== "subtract"  && oper !== "multiply" && oper !== "divide") ;
// ---

if (oper == "add" ||  oper == "subtract" || oper == "subtract"  || oper == "divide" ) {     // CHECKS FOR VALID OPERATOR
function calculate3(p1, p2, op) {
	var p1 = parseInt(p1);
	var p2 = parseInt(p2);
	var r1 = 0;
	
	switch (op)  {																//  SETS THE OPERATOR & PERFORMS THE CALCULATION
		case  "add":
			op1 = "+" ;
			r1 = (p1 + p2);
			alert ( "The result is :  " + p1 + " " + op1 + " " + p2 + " = " + r1 );
			break;
		case  "subtract":
			op1 = "-";
			r1 = (p1 - p2);
			alert ( "The result is :  " + p1 + " " + op1 + " " + p2 + " = " + r1 );
			break;	
		case  "multiply":
			op1 = "*";
			r1 = (p1 * p2);
			alert ( "The result is :  " + p1 + " " + op1 + " " + p2 + " = " + r1 );
			break;	
		case  "divide":
			op1 = "/";
			r1 = (p1 / p2);
			alert  ( "The result is :  " + p1 + " " + op1 + " " + p2 + " = " + r1 );
			break;		
		default:
			alert (" Program Error #22 " ); 
		}
	 return ( r1);
}	
};
calculate3(parm1, parm2, oper);												// CALLS THE CALCULATE3 FUNCTION


//  ----------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------
//  --------------------------------         DEATH OF JAVASCRIPT        -------------
 console.log("\n\n----------     DEATH OF JAVASCRIPT                   -----------");

//  ----------------------------------------------------------------------------------------
//  -------------------------   STEP 1 DEATH OF JAVASCRIPT SORT PASSED STRING WITH LETTERS  -------------
//  ------------------------    returns a passed string with letters in alphabetical order. 
//  -------------------------    Assume punctuation and numbers symbols are not included in the passed string.
 console.log("\n-------- STEP 1 DEATH OF JAVASCRIPT SORT PASSED STRING WITH LETTERS        -----------");

function alphabetSort(string)
{   return string.split('').sort().join('');	}   // SPLITS STRING INTO COMMA SEPARATED ELEMEMENTS, 
                                                    // SORT THE ARRAY
                                                    // JOIN THE ARRAY BACK TOGETHER
console.log( " STEP 1 sorted string :    " , (alphabetSort("webmaster"))); 

//  ----------------------------------------------------------------------------------------
//  -------------------------STEP 2 DEATH OF JAVASCRIPT CONVERTS FIRST LETTER OF WORD TO UPPER CASE  -------------
//  ------------------------    accepts a string as a parameter and converts the first letter  upper case. 
//  -------------------------   of each word of the string in of each word of the string in upper case. 
 console.log("\n\n--------STEP 2 DEATH OF JAVASCRIPT CONVERTS FIRST LETTER OF WORD TO UPPER CASE  -----------");

function upcase(sentence)  
{  
  var array1 = sentence.split(' ');  
  var upperArray = [];  
  for(var x = 0; x < array1.length; x++){  
     upperArray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));  // FIRST ELEMENT & ITS FIRST CHARACTER -                                                                               // CONVERT TO UPPER CASE THAT ELEMENT &  
	                                                                    // EXTRACT THE FIRST ELEMENT AND PUSH IT IN TO A
	  				                                                    //  INTO NEW UPPERARRAY
  }  
 return upperArray.join(' ');			 								// RETURNS THE ARRAY AS A STRING  
}  
console.log( "STEP 2  converted uppercase sentence :    " , (upcase ("the quick brown fox")));  

//  ----------------------------------------------------------------------------------------
//  -------------------------   STEP 3 DEATH OF JAVASCRIPT COUNT OF VOWLES                   -------------
//  ------------------------  accepts a string as a parameter when called, return the count of vowels  
 console.log("\n\n--------   STEP 3 DEATH OF JAVASCRIPT COUNT OF VOWLES                   -----------");

function vowelCnt(string)
{
  var vcnt = 0; vowels = 'AEIOUaeiou';
  for(var x = 0; x < string.length ; x++)
  {
    if (vowels.indexOf(string[x]) !== -1)			// SEARCHES ARRAY AND GETS THE INDEX OF THE FIRST ELEMENTS
			                                       //  THAT MATCH THE VOWELS STRING 
    {
      vcnt += 1;									// INCREMENTS THE VOWEL COUNT
    }
  }
  return vcnt;										// RETURN THE COUNT
}
console.log( " STEP 3 number of vowels in sentence :    " , (vowelCnt("The quick brown fox")));

//  ----------------------------------------------------------------------------------------
//  -------------------------   STEP 4 DEATH OF JAVASCRIPT RANDOM CHARACTERS PASSWORD                -------------
//  ------------------------  generage string id of random characters 
 console.log("\n\n--------   STEP 4 DEATH OF JAVASCRIPT RANDOM CHARACTERS PASSWORD                   -----------");

function randomPass(l)
{
var pass = "";   
var character = "#@$&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
for(var i=0; i < l; i++ )
{  pass += character.charAt(Math.floor(Math.random() * character.length)); }   // ROUNDS THE RANDOM NUMBER AND 
						                                           // MULTIPLY IT TIMES THE LENGTH OF THE CHARACTER STRING                                                                    //  AND RETURNS THAT CHARACTER AT THAT INDEX
return pass;
}
console.log( " STEP 4 random password generator :    " , (randomPass(8)));

//  ----------------------------------------------------------------------------------------
//  ------------------------   STEP 5 DEATH OF JAVASCRIPT LONGEST COUNTRY NAME -------------
//  --------------  accept a list of country name as input and when called returns the longest name
 console.log("\n\n--------   STEP 5 DEATH OF JAVASCRIPT LONGEST COUNTRY NAME -----------");

function Longest_Country_Name(cname)   {
  return cname.reduce(function(lname, country) 					
  {  return lname.length > country.length ? lname : country;  }, "");  //  CONDITIONAL STATEMENT LAST NAME IS LONGER RETURN 
	                                                                   // LAST NAME ELSE COUNTRY NAME
}
console.log( " STEP 5 longest country name :    " ,(Longest_Country_Name(["Australia", "Germany", "United States of America"])));



*/      //  -------------------            END OF MULTILINE COMMENT                    --------------------------------