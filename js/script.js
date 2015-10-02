/*    ---------------               BEGINNING OF MULTILINE COMMENT OF ALL CODE               ---------------- 



//               YOU WILL NOT SEE THE CONSOLE.LOG AND ALERT MESSAGES FROM THE SCRIPT.JS FILE   	 
//	                  - THE STEPS ARE  COMMENTED OUT  USING A MULTILINE COMMENT 
    			
//     	REMOVE THE FIRST AND LAST LINE OF THE MULTILINE COMMENT TO SEE THE CONSOLE.LOG AND ALERT


//                       			 JOE MCDONALD       SEPT 24 2015
//
// ==========================================================================================================
// ==========================================================================================================
//							 ASSIGNMENT     3 
//								           

/*

//  ---------------------------------------------                            -------
 //  jQuery 
 //  !function(){
//	      console.log('self invoking anonymous funcion'); 
//   } ();

       window.onLoad = function() {}      
 
*/

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

var leastFavMovies = new Array(3);					// CONSTRUCTOR
leastFavMovies[0] = "Reefer Madness";
leastFavMovies[1] = "Robot Monster";
leastFavMovies[2] = "The Conqueror";

console.log("Movies I like: \n \n \n");

for (var i in movies) {
	console.log( movies[i]);
}
	
console.log("\n\nMovies I reqret watching:\n\n\n");

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


movies = favMovies.concat( leastFavMovies);
console.log("\n\nmovies =  " + movies);

console.log("\n\nMovies unsorted\n\n\n");

for (var i in movies) {
    console.log("movies =  " + movies[i]);
}

console.log("\n\nMovies sorted :\n\n\n");

for (var i in movies.sort()) {
    console.log("movies =  " + movies[i]);
}

console.log("\n\nMovies reverse sorted :\n\n\n");

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
console.log("number of movies - highest index before POP method " + movies.length);

console.log("REMOVE movies last item using POP mmethod = " + movies.pop());	
console.log("number of movies - highest index after POP method " + movies.length);

//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 11    ARRAY MOVIE - FIRST ITEM  SHIFT  -------------
 console.log("\n\n----------  Part 1 STEP 11    ARRAY MOVIE - FIRST ITEM USING SHIFT -----------");

for (var i in movies) {
    console.log("movies =  " + movies[i]);
}

console.log("\n");
console.log("number of movies - highest index before SHIFT method " + movies.length);
console.log("movie first item using shift method = " + movies.shift());
console.log("number of movies - highest index after SHIFT method " + movies.length);


//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 12    ARRAY MOVIE - INDEXOF SPLICE    -------------
console.log("\n----------  Part 1 STEP 12    ARRAY MOVIE - INDEXOF SPLICE   -----------");

console.log("\n\nmovies Array - before changes ------------ \n\n" ); // LISTS THE MOVIES ARRAY BEFORE CHANGES

for (var i in movies) {
    console.log("movies =  " + movies[i]);
}

console.log("\n\nliked movie Array ------------ \n\n");	// LISTS THE LIKED MOVIE ARRAY
var likedMovie = new Array(3);					// CONSTRUCTOR
likedMovie[0] = "12 Angry Men" ;
likedMovie[1] = "Inception";
likedMovie[2] = "Pulp Fiction" ;
for (var i in likedMovie) {
    console.log("liked movie =  " + likedMovie[i]);
}

console.log("\n\nleast Fav Movies Array ---------- \n\n");	// LISTS THE LEAST FAV MOVIES ARRAY	
var leastFavMovies = new Array(3);					// CONSTRUCTOR
leastFavMovies[0] = "Reefer Madness";
leastFavMovies[1] = "Robot Monster";
leastFavMovies[2] = "The Conqueror";
for (var i in leastFavMovies) {
    console.log("least fav movies =  " + leastFavMovies[i]);
}

//   THIS REPLACES THE LEAST FAV MOVIES WITH LIKED MOVIES USING 2 ADDITIONAL ARRAYS --
for (var k in likedMovie) {	
    for (var i in leastFavMovies) {	
	  var matchedIndex = movies.indexOf(leastFavMovies[i]); 
	  if (matchedIndex >= 0 ){
	      movies.splice(matchedIndex, 1, likedMovie[k]);  // REPLACE A MOVIE
          break;
		 }
     }
}


console.log("\n\nmovie Array - after replacing movies  ------------ \n\n"); // LISTS THE MOVIES ARRAY AFTER CHANGES
for (var i in movies) {
    console.log("movies =  " + movies[i]);
}




//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 13  - 2 ASSOCIATIVE ARRAYS    -------------
 console.log("\n\n----------  Part 1 STEP 13  - 2 ASSOCIATIVE ARRAYS     -----------");

console.log("\n\n ------- employee1 " );
var employee1 = [];
employee1["id"] = 100;
employee1["name"] = "Joe McDonald";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

for (var i in  employee1) {
	if (employee1.hasOwnProperty(i))  // make sure none of the properties are unexpected results of inheritance
      console.log("employee1 =  " + employee1[i]);
}

console.log("\n\n");

console.log("\n\n ------- employee2 " );
var employee2 = [];
employee2["id"] = 200;
employee2["name"] = "Zak Ruvalcaba";
employee2["title"] = "Instructor";
employee2["department"] = "Training";
employee2["isCurrent"] = true;

for (var i in  employee2) {
	if (employee2.hasOwnProperty(i))  // make sure none of the properties are unexpected results of inheritance
      console.log("employee2 =  " + employee2[i]);
}
employees = [employee1, employee2];




console.log(employees);
console.log("\n\n");
console.log(employee2["name"]);





/*
employee1.toString();
console.log("\n\nemployee1 =  " + employee1);
employee2.toString();
console.log("\n\nemployee2 =  " + employee2);
*/






//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 14   ARRAY LOOP PRINT NAMES     -------------
 console.log("\n\n----------  Part 1 STEP 14   ARRAY LOOP PRINT NAMES          -----------");

console.log("\n\n ------- employees -- name  " );

console.log("\n\n");
console.log(employees["name"]);




console.log("\n\n ------- employees  --- for in " );
var k;
for (k in  employees) {
	if (employees.hasOwnProperty(k)) { // make sure none of the properties are unexpected results of inheritance
      console.log("employees name =  " + k + ':' + employees[k]);
	}
}



//  ======================


console.log("\n\n ------- employees  --- mergeArray " );

function mergeArray(source,destination) {
  for(i in source) {
   destination[i] = source[i];
  }
console.log (source);
console.log (destination);
	
	console.log("employee2 ---- mergearray function  --- -- " + destination);
  return destination;
	
}

var emp = mergeArray(employee1,employee2);
console.log("employee2 ---- mergearray function  ---" + emp);

console.log(" emp " + emp);
console.log (emp);

//  =====================================

 var arr= [];
for (var i=0; i < arr.length; i++) {
    console.log(arr[i]);
}


// One of the array iteration methods (see Iteration (Nondestructive)). For example, forEach():
arr.forEach(function (elem) {
    console.log(elem);
});

//  =====================================

console.log("\n\n");

console.log("\n\n ------- employee2 " );
var employee2 = [];
employee2["id"] = 200;
employee2["name"] = "Zak Ruvalcaba";
employee2["title"] = "Instructor";
employee2["department"] = "Training";
employee2["isCurrent"] = true;




Object.extend = function(destination, source) {
    for (var property in source) {
        if (source.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
    return destination;
};

var emps = [];
var employ1 = { id: "100", name: "Joe McDonald" } ;
var employ2 = { id: "200", name: "Zak Ruvalcaba" } ;

var x = emps.push(employ2); 
console.log (emps);





//  ----------------------------------------------------------------------------------------
//  --------------------------------   STEP 15 	ASSOCIATIVE ARRAY THIRD EMPLOYEE   -------------
 console.log("\n\n----------  Part 1 STEP 15  ASSOCIATIVE ARRAY THIRD EMPLOYEE   -----------");






//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 16 MULTI DIMENSIONAL ARRAY MOVIE NAME    -------------
 console.log("\n\n----------  Part 1 STEP 16 MULTI DIMENSIONAL ARRAY MOVIE NAME  -----------");

var movies = [[ "Godfather", 1] , [ "Gone With The Wind", 2] , [ "Lost", 3] , ["The Deer Hunter ", 4] , [ "Saving Private Ryan", 4]];


//var movies = ["Godfather", 1,  "Gone With The Wind", 2,  "Lost", 3 , "The Deer Hunter ", 4 ,  //"Saving Private Ryan", 4];


movies.forEach(function(i) {
var movieName = movies.filter(function(i) {
	return typeof item == "string";
})
})
			   
console.log(movieName + " ");




for (var i in movies) 
   var movieName = movies.filter(function(i) {
      console.log(movieName);							  
	});  

 //  console.log("movie name " +  movieName + " ");



//  ----------------------------------------------------------------------------------------
//  --------------------------------      STEP 1    ARRAY MOVIE - LAST ITEM   -------------
// console.log("\n\n----------  Part 1 STEP 11   ARRAY MOVIE - LAST ITEM           -----------");




 for (var i in leastFavMovies) {	
	  var matchedIndex = movies.indexOf(leastFavMovies[i]); 
	  if (matchedIndex >= 0 ){
	      movies.splice(matchedIndex, 1, likedMovie[k]);  // REPLACE A MOVIE
          break;
		 }
     }









//  ----------------------------------------------------------------------------------------
//  ------------------------------------------    FUNCTIONS      --------------------------- 
//  ----------------------------------------------------------------------------------------
//  --------------------------------       STEP 1    ANONYMOUS FUNCTION        -------------
 console.log("\n\n----------  STEP 1    ANONYMOUS FUNCTION                    -----------");

var prt = function(parm1) {
	console.log("parameter 1 : " + " " + parm1);
}
("Anonyous Function") ;

(function(parm2) {
	console.log("parameter 2 : " + " " + parm2);
}  
 ("Self Involking Anonymous Function"));

//  ----------------------------------------------------------------------------------------
//  --------------------------------       STEP 2    CALCULATE FUNCTION        -------------
 console.log("\n\n----------  STEP 2    CALCULATE FUNCTION                     -----------");


function calculate(p1, p2) {
		return ( p1 % p2);
}

var parm1 = 5, parm2 =2;
console.log("\n\nparm1 : " + " " + parm1 + "  parm2 : " + parm2 + "  modulus : " + calculate(parm1, parm2) );



//  ----------------------------------------------------------------------------------------
//  ------------------------ STEP 3    DECLARED FUNCTION  PASSING PARAMETERS   -------------
 console.log("\n\n----------  STEP 3    DECLARED FUNCTION  PASSING PARAMETERS  -----------");

function showEmployee(emps) {
	for (i in emps) {
       console.log(emps[i]);
     }
}

var employees = new Array("Zak", "Fred", "Sally", "Jessica", "John", "Mike");
console.log("\n\nEmployees: \n\n");
showEmployee(employees);


//  ----------------------------------------------------------------------------------------
//  -------------------------------- PART 2 STEP 1   ROCK PAPER SCISSORS       -------------
 console.log("\n\n---------- PART 2 STEP 1   ROCK PAPER SCISSORS               -----------");

var i = 0;
do {
	var choice = prompt("PART 2 STEP 1 - PLAYER - PLEASE ENTER - ROCK or PAPER or SCISSORS " , "lower case please").toLowerCase();
	if (choice !== "rock" && choice !== "paper" && choice !== "scissors" )
	  {
		i++
	  }
	else{
		break;
	   }
   }
	while ( i < 3) ;

//  ------------------------------------------      STEP 2   COIN FLIP        -------------   
	if (choice == "rock" || choice == "paper" || choice == "scissors" ) {
		var coinFlip = Math.random();
		alert("STEP 1 - coinFlip random number is " + coinFlip);
	}

//  ------------------------------------------      STEP 3   RESET COIN FLIP TO STRING     -------------   
if (choice == "rock" || choice == "paper" || choice == "scissors" ) {
	if (coinFlip  >= .7 ) {
      alert("STEP 3 - The coinFlip is greater than or equal to .7 which represents - ROCK ");
	  coinFlip = "rock";
    }    
     else if (coinFlip <= .3  ) {
     alert ("STEP 3 - The coinFlip is less than or equal to .3 which represents - PAPER");
	 coinFlip = "paper";
    }   
 	  else if (coinFlip < .7 ) {
      alert ("STEP 3 - The coinFlip is less than .7 which represents - SCISSORS");
	  coinFlip = "scissors";
    }   
}

//  ------------------------------------------      STEP 4 -     -------------   

 if (choice == "rock" || choice == "paper" || choice == "scissors" ) {
	if (coinFlip == "rock"  && choice == "rock" ) {
      alert("The computer choice was rock and you chose rock...tie!");
    }
       else if (coinFlip  == "rock" && choice == "paper" ) {
        alert ("The computer choice was rock but you chose paper...you win!");
    } 
       else if (coinFlip  == "rock" && choice == "scissors" ) {
        alert ("The computer choice was rock but you chose scissors...you lose!");
    } 
       else if (coinFlip  == "paper"  && choice == "rock" ) {
	  alert("The computer choice was paper and you chose rock...you lose!");
    }
       else if (coinFlip == "paper" && choice == "paper" ) {
        alert ("The computer choice was paper but you chose paper...tie!");
    } 
       else if (coinFlip  == "paper" && choice == "scissors" ) {
        alert ("The computer choice was paper but you chose scissors...you win!");
    } 	   
	   else if (coinFlip  == "scissors"  && choice == "rock" ) {
	  alert("The computer choice was scissors and you chose rock...you win!");
    }
       else if (coinFlip  == "scissors" && choice == "paper" ) {
        alert ("The computer choice was scissors but you chose paper...you lose!");
    } 
       else if (coinFlip  == "scissors" && choice == "scissors" ) {
        alert ("The computer choice was scissors but you chose scissors...tie!");
    } 	   
	   else  {
        alert ("Error -  the computer coinFlip was : " + coinFlip +  " & you entered = " + choice + "\n - either of which is an incorrect value try again");
    }
  }		   

//  ----------------------------------------------------------------------------------------
//  --------------------------------       STEP 5    BASIC CALCULATOR        -------------
 console.log("\n\n----------  STEP 5    BASIC CALCULATOR                    -----------");


var parm1 = prompt(" enter 1st number : " );
var parm2 = prompt(" enter 2nd number : " );

var i = 0;
do {
	var oper = prompt( "PART 2 STEP 1 - PLEASE ENTER - add or subtract or multiply or divide " , "lower case please").toLowerCase();
	if (oper !== "add" && oper !== "subtract"  && oper !== "multiply" && oper !== "divide" )
	  {
		i++
	  }
	else{
		break;
	   }
   }
	while ( i < 3) ;

if (oper == "add" ||  oper == "subtract" || oper == "subtract"  || oper == "divide" ) {
function calculate(p1, p2, op) {
	var p1 = parseInt(p1);
	var p2 = parseInt(p2);
	var r1 = 0;
	
	alert (" p1 " + p1 + " p2 " + p2 + " op " + op) ;
	
	switch (op)  {
		case  "add" :
			r1 = (p1 + p2);
			alert (" add operation result : " + r1 );
			break;
		case  "subtract" :
			r1 = (p1 - p2);
			alert (" subtract operation result : " + r1 );
			break;	
		case  "multiply" :
			r1 = (p1 * p2);
			alert (" multiply operation result : " + r1 );
			break;	
		case  "divide" :
			r1 = (p1 / p2);
			alert (" divide operation result : " + r1 );
			break;		
		default :
			alert (" Error " ) ; 
		}
	
	 return ( r1 );
}	
};

console.log("\n\nparm1 : " + parm1 + "  parm2 : " + parm2 + "  oper : " + oper + "  result : " + calculate(parm1, parm2, oper) );








//  ----------------------------------------------------------------------------------------
//  --------------------------------       STEP 6    ANONYMOUS FUNCTION        -------------
 console.log("\n\n----------  STEP 6    ANONYMOUS FUNCTION                    -----------");








 */      //  -------------------            END OF MULTILINE COMMENT                    --------------------------------